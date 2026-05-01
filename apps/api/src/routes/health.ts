import { Router } from 'express'

export const healthRouter: Router = Router()

healthRouter.get('/', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

healthRouter.get('/db', async (_req, res) => {
  // TODO: Check DB connection
  res.json({ status: 'ok', db: 'connected', timestamp: new Date().toISOString() })
})
