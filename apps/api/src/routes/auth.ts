import { Router } from 'express'
import { z } from 'zod'
import { db } from '@/db/connection'
import { counselors } from '@/db/schema'
import { hashPassword, comparePassword } from '@/utils/password'
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '@/utils/jwt'
import { sendEmail, getWelcomeEmailTemplate } from '@/utils/email'
import { eq } from 'drizzle-orm'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  centerName: z.string().min(2),
  counselorName: z.string().min(2),
  phone: z.string().optional(),
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export const authRouter: Router = Router()

authRouter.post('/register', async (req, res, next) => {
  try {
    const data = registerSchema.parse(req.body)
    
    const existing = await db.select().from(counselors).where(eq(counselors.email, data.email)).limit(1)
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Email already registered' })
    }
    
    const passwordHash = await hashPassword(data.password)
    const trialEndsAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 days trial
    
    const id = crypto.randomUUID()
    await db.insert(counselors).values({
      id,
      email: data.email,
      passwordHash,
      centerName: data.centerName,
      counselorName: data.counselorName,
      phone: data.phone,
      trialEndsAt,
    })
    const [counselor] = await db.select().from(counselors).where(eq(counselors.id, id))
    
    const payload = { counselorId: counselor.id, email: counselor.email, role: counselor.role }
    const accessToken = generateAccessToken(payload)
    const refreshToken = generateRefreshToken(payload)

    // Send welcome email (non-blocking)
    sendEmail({
      to: counselor.email,
      ...getWelcomeEmailTemplate(counselor.centerName, counselor.counselorName, 14),
    }).catch((err) => console.error('[Email] Welcome email failed:', err))

    res.status(201).json({
      counselor: {
        id: counselor.id,
        email: counselor.email,
        centerName: counselor.centerName,
        counselorName: counselor.counselorName,
        role: counselor.role,
        subscriptionStatus: counselor.subscriptionStatus,
      },
      tokens: { accessToken, refreshToken },
    })
  } catch (error) {
    next(error)
  }
})

authRouter.post('/login', async (req, res, next) => {
  try {
    const data = loginSchema.parse(req.body)
    
    const [counselor] = await db.select().from(counselors).where(eq(counselors.email, data.email)).limit(1)
    if (!counselor) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    
    if (!counselor.isActive) {
      return res.status(403).json({ error: 'Account deactivated' })
    }
    
    const valid = await comparePassword(data.password, counselor.passwordHash)
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    
    const payload = { counselorId: counselor.id, email: counselor.email, role: counselor.role }
    const accessToken = generateAccessToken(payload)
    const refreshToken = generateRefreshToken(payload)
    
    res.json({
      counselor: {
        id: counselor.id,
        email: counselor.email,
        centerName: counselor.centerName,
        counselorName: counselor.counselorName,
        role: counselor.role,
        subscriptionStatus: counselor.subscriptionStatus,
      },
      tokens: { accessToken, refreshToken },
    })
  } catch (error) {
    next(error)
  }
})

authRouter.post('/refresh', async (req, res, next) => {
  try {
    const { refreshToken } = req.body
    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token required' })
    }
    
    const payload = verifyRefreshToken(refreshToken)
    const accessToken = generateAccessToken(payload)
    
    res.json({ accessToken })
  } catch (error) {
    res.status(401).json({ error: 'Invalid refresh token' })
  }
})
