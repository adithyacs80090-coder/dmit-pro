import { Router } from 'express'
import { requireAuth } from '../middleware/auth.js'
import {
  getCollegesForCareer,
  getAllCareersWithColleges,
  getScholarshipsForCollege,
  getTimelineForCollege,
  type CollegeEntry,
} from '@dmit/shared'

export const collegesRouter: Router = Router()

collegesRouter.use(requireAuth)

collegesRouter.get('/careers', (_req, res) => {
  res.json(getAllCareersWithColleges())
})

collegesRouter.get('/:careerName', (req, res) => {
  const data = getCollegesForCareer(req.params.careerName)
  if (!data) {
    return res.status(404).json({ error: 'Career not found' })
  }
  res.json(data)
})

collegesRouter.get('/:careerName/enriched', (req, res) => {
  const data = getCollegesForCareer(req.params.careerName)
  if (!data) {
    return res.status(404).json({ error: 'Career not found' })
  }

  const enriched = {
    ...data,
    india: data.india.map((college: CollegeEntry) => ({
      ...college,
      scholarships: getScholarshipsForCollege(college.name),
      timeline: getTimelineForCollege(college.name),
    })),
    abroad: data.abroad.map((college: CollegeEntry) => ({
      ...college,
      scholarships: getScholarshipsForCollege(college.name),
      timeline: getTimelineForCollege(college.name),
    })),
  }

  res.json(enriched)
})
