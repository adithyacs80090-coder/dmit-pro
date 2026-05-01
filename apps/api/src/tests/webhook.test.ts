import { describe, it, expect } from 'vitest'
import request from 'supertest'
import express from 'express'
import crypto from 'crypto'

// Minimal webhook router for testing
const app = express()
app.use('/api/payments/webhook', express.raw({ type: 'application/json' }))
app.post('/api/payments/webhook', (req, res) => {
  const rawBody = req.body as Buffer
  const signature = req.headers['x-razorpay-signature'] as string

  if (!signature || !rawBody) {
    return res.status(400).json({ error: 'Missing signature or body' })
  }

  const secret = process.env.RAZORPAY_WEBHOOK_SECRET || process.env.RAZORPAY_KEY_SECRET || 'test_secret'
  const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex')

  if (expected !== signature) {
    return res.status(400).json({ error: 'Invalid webhook signature' })
  }

  const event = JSON.parse(rawBody.toString())
  res.json({ received: true, event: event.event })
})

describe('Razorpay Webhook', () => {
  it('should reject request without signature', async () => {
    const res = await request(app)
      .post('/api/payments/webhook')
      .send(JSON.stringify({ event: 'payment.captured' }))
      .set('Content-Type', 'application/json')

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('Missing signature or body')
  })

  it('should reject invalid signature', async () => {
    const body = JSON.stringify({ event: 'payment.captured' })
    const res = await request(app)
      .post('/api/payments/webhook')
      .send(body)
      .set('Content-Type', 'application/json')
      .set('X-Razorpay-Signature', 'invalid_signature')

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('Invalid webhook signature')
  })

  it('should accept valid signature', async () => {
    const secret = 'test_secret'
    const payload = { event: 'payment.captured', payload: { payment: { entity: { id: 'pay_test', order_id: 'order_test' } } } }
    const body = JSON.stringify(payload)
    const signature = crypto.createHmac('sha256', secret).update(body).digest('hex')

    const res = await request(app)
      .post('/api/payments/webhook')
      .send(body)
      .set('Content-Type', 'application/json')
      .set('X-Razorpay-Signature', signature)

    expect(res.status).toBe(200)
    expect(res.body.received).toBe(true)
    expect(res.body.event).toBe('payment.captured')
  })
})
