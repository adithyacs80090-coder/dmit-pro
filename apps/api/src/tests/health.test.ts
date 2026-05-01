import { describe, it, expect } from 'vitest'
import request from 'supertest'
import express from 'express'

const app = express()
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

describe('Health Endpoint', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/api/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('ok')
  })
})

describe('College Data', () => {
  it('should have college data loaded', async () => {
    const { getAllCareersWithColleges } = await import('@dmit/shared')
    const careers = getAllCareersWithColleges()
    expect(careers.length).toBeGreaterThan(0)
    expect(careers).toContain('AI / ML Engineer')
  })
})
