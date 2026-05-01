import { Router, type Request, type Response, type NextFunction } from 'express'
import { z } from 'zod'
import { db } from '../db/connection.js'
import { reports, clients } from '../db/schema.js'
import { requireAuth } from '../middleware/auth.js'
import { calculateDmit } from '@dmit/shared'
import { sendEmail, getReportReadyEmailTemplate } from '../utils/email.js'
import { eq } from 'drizzle-orm'

const reportSchema = z.object({
  clientName: z.string().min(2),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  mobile: z.string().optional(),
  email: z.string().email().optional(),
  fingerprintData: z.object({
    patterns: z.array(z.string()).length(10),
    ridgeCounts: z.array(z.number()).length(10),
    atdLeft: z.number(),
    atdRight: z.number(),
  }),
  language: z.enum(['en', 'hi', 'ml', 'ta', 'te', 'kn']).default('en'),
})

export const reportsRouter: Router = Router()

reportsRouter.use(requireAuth)

reportsRouter.post('/', async (req, res, next) => {
  try {
    const data = reportSchema.parse(req.body)
    const counselorId = req.counselor!.id
    
    // Calculate DMIT results
    const results = calculateDmit(data.fingerprintData)
    
    // Create client
    const age = Math.floor((Date.now() - new Date(data.dob).getTime()) / (1000 * 60 * 60 * 24 * 365.25))
    const analysisNo = `FH${Date.now().toString().slice(-6)}`
    
    const clientId = crypto.randomUUID()
    await db.insert(clients).values({
      id: clientId,
      counselorId,
      name: data.clientName,
      dob: data.dob,
      ageAtTest: age,
      mobile: data.mobile,
      email: data.email,
      analysisNo,
    })
    const [client] = await db.select().from(clients).where(eq(clients.id, clientId))

    // Create report
    const reportId = crypto.randomUUID()
    await db.insert(reports).values({
      id: reportId,
      clientId: client.id,
      counselorId,
      fingerprintData: data.fingerprintData,
      results,
      language: data.language,
    })
    const [report] = await db.select().from(reports).where(eq(reports.id, reportId))

    // Send report ready email (non-blocking)
    const emailTo = data.email || req.counselor!.email
    const reportUrl = `${process.env.FRONTEND_URL}/reports/${report.id}`
    sendEmail({
      to: emailTo,
      ...getReportReadyEmailTemplate(client.name, client.analysisNo, req.counselor!.counselorName, reportUrl),
    }).catch((err) => console.error('[Email] Report ready email failed:', err))

    res.status(201).json({
      reportId: report.id,
      clientId: client.id,
      clientName: client.name,
      analysisNo: client.analysisNo,
      fingerprintData: data.fingerprintData,
      results,
      language: data.language,
    })
  } catch (error) {
    next(error)
  }
})

reportsRouter.get('/', async (req, res, next) => {
  try {
    const counselorId = req.counselor!.id
    const allReports = await db.query.reports.findMany({
      where: (r, { eq }) => eq(r.counselorId, counselorId),
      with: {
        client: true,
      },
      orderBy: (r, { desc }) => [desc(r.createdAt)],
    })
    
    res.json(allReports)
  } catch (error) {
    next(error)
  }
})

reportsRouter.get('/:id', async (req, res, next) => {
  try {
    const counselorId = req.counselor!.id
    const reportId = req.params.id
    
    const [report] = await db.query.reports.findMany({
      where: (r, { eq, and }) => and(
        eq(r.id, reportId),
        eq(r.counselorId, counselorId)
      ),
      with: {
        client: true,
      },
    })
    
    if (!report) {
      return res.status(404).json({ error: 'Report not found' })
    }
    
    res.json(report)
  } catch (error) {
    next(error)
  }
})
