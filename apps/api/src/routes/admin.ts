import { Router } from 'express'
import { z } from 'zod'
import { db } from '../db/connection.js'
import { colleges } from '../db/schema.js'
import { requireAdmin } from '../middleware/auth.js'
import { eq, count, sql } from 'drizzle-orm'

export const adminRouter: Router = Router()

adminRouter.use(requireAdmin)

// Stats
adminRouter.get('/stats', async (_req, res, next) => {
  try {
    const [counselorCount] = await db.select({ value: count() }).from(sql`counselors`)
    const [clientCount] = await db.select({ value: count() }).from(sql`clients`)
    const [reportCount] = await db.select({ value: count() }).from(sql`reports`)
    const [paymentTotal] = await db.select({ value: sql`COALESCE(SUM(amount), 0)` }).from(sql`payments`)
    const [collegeCount] = await db.select({ value: count() }).from(colleges)

    res.json({
      counselors: counselorCount.value,
      clients: clientCount.value,
      reports: reportCount.value,
      revenue: paymentTotal.value,
      colleges: collegeCount.value,
    })
  } catch (error) {
    next(error)
  }
})

// Colleges CRUD
adminRouter.get('/colleges', async (_req, res, next) => {
  try {
    const data = await db.select().from(colleges).orderBy(colleges.name)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

const collegeSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  country: z.string().min(1),
  ranking: z.number().optional(),
  feesInr: z.number().optional(),
  feesDisplay: z.string().optional(),
  entranceExam: z.string().optional(),
  courseName: z.string().optional(),
  type: z.enum(['Premier', 'Private', 'Government', 'International']),
  careerTags: z.array(z.string()).optional(),
  scholarships: z.record(z.any()).optional(),
  admissionTimeline: z.record(z.any()).optional(),
  websiteUrl: z.string().url().optional(),
})

adminRouter.post('/colleges', async (req, res, next) => {
  try {
    const data = collegeSchema.parse(req.body)
    const id = crypto.randomUUID()
    await db.insert(colleges).values({ id, ...data })
    const [college] = await db.select().from(colleges).where(eq(colleges.id, id))
    res.status(201).json(college)
  } catch (error) {
    next(error)
  }
})

adminRouter.patch('/colleges/:id', async (req, res, next) => {
  try {
    const data = collegeSchema.partial().parse(req.body)
    await db.update(colleges).set(data).where(eq(colleges.id, req.params.id))
    const [college] = await db.select().from(colleges).where(eq(colleges.id, req.params.id))
    if (!college) {
      return res.status(404).json({ error: 'College not found' })
    }
    res.json(college)
  } catch (error) {
    next(error)
  }
})

adminRouter.delete('/colleges/:id', async (req, res, next) => {
  try {
    const [existing] = await db.select().from(colleges).where(eq(colleges.id, req.params.id))
    if (!existing) {
      return res.status(404).json({ error: 'College not found' })
    }
    await db.delete(colleges).where(eq(colleges.id, req.params.id))
    res.json({ success: true })
  } catch (error) {
    next(error)
  }
})
