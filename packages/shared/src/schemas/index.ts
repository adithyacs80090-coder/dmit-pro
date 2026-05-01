import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  centerName: z.string().min(2, 'Center name is required'),
  counselorName: z.string().min(2, 'Counselor name is required'),
  phone: z.string().optional(),
})

export const fingerprintDataSchema = z.object({
  patterns: z.array(z.string()).length(10, 'Exactly 10 finger patterns required'),
  ridgeCounts: z.array(z.number().min(0)).length(10, 'Exactly 10 ridge counts required'),
  atdLeft: z.number().min(20).max(60).default(45),
  atdRight: z.number().min(20).max(60).default(45),
})

export const reportInputSchema = z.object({
  clientName: z.string().min(2, 'Client name is required'),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  mobile: z.string().optional(),
  email: z.string().email().optional(),
  centerName: z.string().optional(),
  counselorName: z.string().optional(),
  analysisNo: z.string().optional(),
  fingerprintData: fingerprintDataSchema,
  language: z.enum(['en', 'hi', 'ml', 'ta', 'te', 'kn']).default('en'),
})

export const clientSchema = z.object({
  name: z.string().min(2),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  mobile: z.string().optional(),
  email: z.string().email().optional(),
})

export const paymentSchema = z.object({
  plan: z.literal('annual'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type ReportInput = z.infer<typeof reportInputSchema>
export type ClientInput = z.infer<typeof clientSchema>
export type PaymentInput = z.infer<typeof paymentSchema>
