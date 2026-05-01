import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import { existsSync } from 'fs'
import { env } from './config/env.js'
import { authRouter } from './routes/auth.js'
import { reportsRouter } from './routes/reports.js'
import { paymentsRouter } from './routes/payments.js'
import { collegesRouter } from './routes/colleges.js'
import { adminRouter } from './routes/admin.js'
import { healthRouter } from './routes/health.js'
import { errorHandler } from './middleware/errorHandler.js'
import { startEmailCronJobs } from './cron/emailJobs.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const staticRoot = [
  path.join(__dirname, '../../'),
  path.join(__dirname, '../../web/dist'),
].find((candidate) => existsSync(path.join(candidate, 'index.html')))

const app = express()

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}))
app.use(cors({ origin: env.FRONTEND_URL }))

// Razorpay webhook needs raw body for signature verification
app.use('/api/payments/webhook', express.raw({ type: 'application/json' }))

app.use(express.json({ limit: '10mb' }))
app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'))

// Rate limiting
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message: { error: 'Too many requests, please try again later.' },
  })
)

// API Routes (must come BEFORE static files)
app.use('/api/health', healthRouter)
app.use('/api/auth', authRouter)
app.use('/api/reports', reportsRouter)
app.use('/api/payments', paymentsRouter)
app.use('/api/colleges', collegesRouter)
app.use('/api/admin', adminRouter)

// Serve the React frontend when it is bundled with the API deployment.
if (staticRoot) {
  app.use(express.static(staticRoot))
}

// Handle React Router - serve index.html for all non-API routes
app.use((_req, res, next) => {
  // If the request is for an API route, skip this handler
  if (_req.path.startsWith('/api')) {
    return next()
  }
  if (!staticRoot) {
    return res.status(404).json({ error: 'Frontend build not found' })
  }
  // Otherwise serve index.html (for React Router to handle)
  res.sendFile(path.join(staticRoot, 'index.html'))
})

// API 404 handler (only for API routes)
app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

// Global error handler
app.use(errorHandler)

const PORT = env.PORT

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${env.API_URL}`)
  console.log(`📊 Environment: ${env.NODE_ENV}`)

  // Start background cron jobs
  startEmailCronJobs()
})
