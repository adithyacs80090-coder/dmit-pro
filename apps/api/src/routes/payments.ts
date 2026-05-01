import { Router } from 'express'
import { z } from 'zod'
import { db } from '../db/connection.js'
import { payments, counselors } from '../db/schema.js'
import { requireAuth } from '../middleware/auth.js'
import { eq } from 'drizzle-orm'
import crypto from 'crypto'

// Initialize Razorpay
const Razorpay = (await import('razorpay')).default
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
})

const paymentSchema = z.object({
  plan: z.literal('annual'),
})

export const paymentsRouter: Router = Router()

paymentsRouter.post('/create-order', requireAuth, async (req, res, next) => {
  try {
    const data = paymentSchema.parse(req.body)
    const counselorId = req.counselor!.id

    const amount = 11988 * 100 // ₹11,988 in paise

    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `sub_${Date.now()}`,
      notes: {
        counselorId,
        plan: data.plan,
      },
    })

    // Store order in DB
    await db.insert(payments).values({
      counselorId,
      razorpayOrderId: order.id,
      amount,
      currency: 'INR',
      status: 'created',
      plan: data.plan,
      credits: 0,
    })

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error) {
    next(error)
  }
})

paymentsRouter.post('/verify', requireAuth, async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(body)
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ error: 'Invalid signature' })
    }

    // Update payment status
    await db.update(payments)
      .set({
        razorpayPaymentId: razorpay_payment_id,
        status: 'captured',
      })
      .where(eq(payments.razorpayOrderId, razorpay_order_id))

    // Activate subscription
    const subscriptionStartedAt = new Date()
    const subscriptionEndsAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)

    await db.update(counselors)
      .set({
        subscriptionStatus: 'active',
        subscriptionStartedAt,
        subscriptionEndsAt,
      })
      .where(eq(counselors.id, req.counselor!.id))

    res.json({ success: true, message: 'Payment verified successfully' })
  } catch (error) {
    next(error)
  }
})

paymentsRouter.get('/history', requireAuth, async (req, res, next) => {
  try {
    const counselorId = req.counselor!.id
    const history = await db.select().from(payments).where(eq(payments.counselorId, counselorId))
    res.json(history)
  } catch (error) {
    next(error)
  }
})

// Razorpay webhook — no auth, uses raw body for signature verification
paymentsRouter.post('/webhook', async (req, res, next) => {
  try {
    const rawBody = req.body as Buffer
    const signature = req.headers['x-razorpay-signature'] as string

    if (!signature || !rawBody) {
      return res.status(400).json({ error: 'Missing signature or body' })
    }

    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || process.env.RAZORPAY_KEY_SECRET || ''
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(rawBody)
      .digest('hex')

    if (expectedSignature !== signature) {
      return res.status(400).json({ error: 'Invalid webhook signature' })
    }

    const event = JSON.parse(rawBody.toString())
    const eventType = event.event
    const payload = event.payload?.payment?.entity

    if (!payload) {
      return res.status(400).json({ error: 'Invalid payload' })
    }

    // Handle successful payment
    if (eventType === 'payment.captured') {
      const orderId = payload.order_id
      const paymentId = payload.id
      const counselorId = payload.notes?.counselorId

      // Update payment status
      await db.update(payments)
        .set({
          razorpayPaymentId: paymentId,
          status: 'captured',
        })
        .where(eq(payments.razorpayOrderId, orderId))

      // Activate subscription if counselorId is present
      if (counselorId) {
        const subscriptionStartedAt = new Date()
        const subscriptionEndsAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)

        await db.update(counselors)
          .set({
            subscriptionStatus: 'active',
            subscriptionStartedAt,
            subscriptionEndsAt,
          })
          .where(eq(counselors.id, counselorId))
      }
    }

    // Acknowledge receipt immediately
    res.json({ received: true })
  } catch (error) {
    next(error)
  }
})
