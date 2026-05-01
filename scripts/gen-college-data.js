import fs from 'fs'
import path from 'path'

const jsPath = path.resolve('C:/Users/Adithya/Desktop/Open code/psycho metri/dmit-app/college-data.js')
const tsPath = path.resolve('C:/Users/Adithya/Desktop/Open code/psycho metri/dmit-saas/packages/shared/src/college-data.ts')

const jsContent = fs.readFileSync(jsPath, 'utf-8')

// Extract the data object from the IIFE
const dataMatch = jsContent.match(/const data = (\{[\s\S]*?\n  \});/)
if (!dataMatch) {
  console.error('Could not extract data object')
  process.exit(1)
}

const dataObj = dataMatch[1]

const tsContent = `export interface CollegeEntry {
  name: string
  location: string
  ranking: number | string
  fees: string
  exam: string
  course: string
  type: string
}

export interface CareerColleges {
  india: CollegeEntry[]
  abroad: CollegeEntry[]
}

export function tier(matchPct: number) {
  if (matchPct >= 14) return { label: 'Best Fit', color: '#00715f', bg: '#e3efe7' }
  if (matchPct >= 11) return { label: 'Strong Fit', color: '#087eb1', bg: '#dbeef4' }
  if (matchPct >= 9) return { label: 'Good Fit', color: '#f5ad28', bg: '#fff3bf' }
  return { label: 'Developing Fit', color: '#ff7c59', bg: '#f0dfd8' }
}

export const collegeData: Record<string, CareerColleges> = ${dataObj};

export function getCollegesForCareer(careerName: string): CareerColleges | null {
  return collegeData[careerName] || null
}

export function getAllCareersWithColleges(): string[] {
  return Object.keys(collegeData)
}
`

fs.writeFileSync(tsPath, tsContent)
console.log(' college-data.ts generated successfully')
