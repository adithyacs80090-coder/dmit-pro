import type { Request, Response, NextFunction } from 'express'
import { verifyAccessToken } from '@/utils/jwt'
import { db } from '@/db/connection'
import { counselors } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access token required' })
    }
    
    const token = authHeader.split(' ')[1]
    const payload = verifyAccessToken(token)
    
    const [counselor] = await db.select().from(counselors).where(eq(counselors.id, payload.counselorId)).limit(1)
    if (!counselor || !counselor.isActive) {
      return res.status(401).json({ error: 'Invalid token' })
    }
    
    req.counselor = counselor
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    await requireAuth(req, res, () => {
      if (req.counselor?.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access required' })
      }
      next()
    })
  } catch (error) {
    next(error)
  }
}

declare global {
  namespace Express {
    interface Request {
      counselor?: {
        id: string
        email: string
        role: string
        counselorName: string
        centerName: string
      }
    }
  }
}
