import { describe, it, expect } from 'vitest'
import { calculateDmit } from '@dmit/shared'

// Real fingerprint data from a 16-year-old male
const REAL_FINGERPRINT_DATA = {
  patterns: ['W2', 'L', 'W2', 'W1', 'L', 'W1', 'L', 'W2', 'W1', 'L'],
  ridgeCounts: [18, 14, 16, 20, 12, 19, 15, 17, 21, 13],
  atdLeft: 42,
  atdRight: 44,
}

describe('DMIT Engine E2E - Real Fingerprint Data', () => {
  const results = calculateDmit(REAL_FINGERPRINT_DATA)

  it('should calculate TFRC correctly', () => {
    // TFRC = sum of all ridge counts
    const expectedTFRC = REAL_FINGERPRINT_DATA.ridgeCounts.reduce((a, b) => a + b, 0)
    expect(results.tfrc).toBe(expectedTFRC)
    expect(results.tfrc).toBe(165)
  })

  it('should determine brain side', () => {
    expect(['left', 'right', 'balanced']).toContain(results.brainSide)
  })

  it('should calculate intelligence data for all 10 intelligences', () => {
    expect(results.intelligenceData).toHaveLength(10)
    results.intelligenceData.forEach((intel) => {
      expect(intel).toHaveProperty('key')
      expect(intel).toHaveProperty('name')
      expect(intel).toHaveProperty('manifested')
      expect(typeof intel.manifested).toBe('number')
      expect(intel).toHaveProperty('stars')
      expect(intel.stars).toBeGreaterThanOrEqual(0)
      expect(intel.stars).toBeLessThanOrEqual(5)
      expect(intel).toHaveProperty('side')
    })
  })

  it('should have top intelligences', () => {
    expect(results.topIntelligences).toHaveLength(3)
    expect(results.topIntelligences[0].manifested).toBeGreaterThanOrEqual(results.topIntelligences[1].manifested)
    expect(results.topIntelligences[1].manifested).toBeGreaterThanOrEqual(results.topIntelligences[2].manifested)
  })

  it('should generate DISC profile', () => {
    expect(results.discProfile).toHaveProperty('D')
    expect(results.discProfile).toHaveProperty('I')
    expect(results.discProfile).toHaveProperty('S')
    expect(results.discProfile).toHaveProperty('C')
    const total = results.discProfile.D.count + results.discProfile.I.count + results.discProfile.S.count + results.discProfile.C.count
    expect(total).toBe(10)
  })

  it('should generate dominant DISC', () => {
    expect(results.dominantDISC).toHaveProperty('primary')
    expect(results.dominantDISC).toHaveProperty('secondary')
    expect(results.dominantDISC).toHaveProperty('code')
    expect(results.dominantDISC.code).toHaveLength(2)
  })

  it('should calculate learning style percentages summing to ~1', () => {
    const total = results.learningStyle.Kinesthetic.percent + results.learningStyle.Auditory.percent + results.learningStyle.Visual.percent
    expect(total).toBeCloseTo(1, 1)
  })

  it('should calculate quotients', () => {
    expect(results.iq).toBeGreaterThan(0)
    expect(results.eq).toBeGreaterThan(0)
    expect(results.cq).toBeGreaterThan(0)
    expect(results.aq).toBeGreaterThan(0)
  })

  it('should generate career list with 200+ careers', () => {
    expect(results.careerList.length).toBeGreaterThan(200)
  })

  it('should generate top careers sorted by value', () => {
    expect(results.topCareers.length).toBeGreaterThan(0)
    expect(results.topCareers[0].val).toBeGreaterThanOrEqual(results.topCareers[1]?.val || 0)
  })

  it('should generate Holland RIASEC data', () => {
    expect(Object.keys(results.holland)).toHaveLength(6)
    Object.values(results.holland).forEach((h) => {
      expect(h).toHaveProperty('name')
      expect(h).toHaveProperty('value')
      expect(h).toHaveProperty('stars')
    })
  })

  it('should generate McKenzie model data', () => {
    expect(results.mckenzie).toHaveProperty('Analytic')
    expect(results.mckenzie).toHaveProperty('Introspective')
    expect(results.mckenzie).toHaveProperty('Interactive')
  })

  it('should generate stream selection data', () => {
    expect(results.stream).toHaveProperty('Science')
    expect(results.stream).toHaveProperty('Commerce')
    expect(results.stream).toHaveProperty('Arts')
    const total = results.stream.Science.value + results.stream.Commerce.value + results.stream.Arts.value
    expect(total).toBeCloseTo(1, 1)
  })

  it('should generate SWOT analysis', () => {
    expect(results.swot.strengths.length).toBeGreaterThan(0)
    expect(results.swot.weaknesses.length).toBeGreaterThan(0)
    expect(results.swot.opportunities.length).toBeGreaterThan(0)
    expect(results.swot.threats.length).toBeGreaterThan(0)
  })

  it('should generate Big Five data', () => {
    expect(results.bigFive).toHaveProperty('O')
    expect(results.bigFive).toHaveProperty('C')
    expect(results.bigFive).toHaveProperty('E')
    expect(results.bigFive).toHaveProperty('A')
    expect(results.bigFive).toHaveProperty('N')
  })

  it('should generate top 5 strengths', () => {
    expect(results.top5Strengths).toHaveLength(5)
    results.top5Strengths.forEach((s) => {
      expect(s).toHaveProperty('name')
      expect(s).toHaveProperty('domain')
    })
  })

  it('should generate brain lobes data', () => {
    expect(results.brainLobes).toHaveLength(5)
    results.brainLobes.forEach((lobe) => {
      expect(lobe).toHaveProperty('lobe')
      expect(lobe).toHaveProperty('left')
      expect(lobe).toHaveProperty('right')
      expect(lobe).toHaveProperty('total')
      expect(lobe).toHaveProperty('dominant')
    })
  })

  it('should generate ATD interpretation', () => {
    expect(results.atdInterpretation).toHaveProperty('speed')
    expect(results.atdInterpretation).toHaveProperty('level')
  })

  it('should generate acquiring methods', () => {
    expect(results.acquiringMethods).toHaveProperty('primary')
    expect(results.acquiringMethods).toHaveProperty('secondary')
    expect(results.acquiringMethods).toHaveProperty('all')
  })

  it('should generate extra curricular activities', () => {
    expect(results.extraCurricular.length).toBeGreaterThan(0)
  })

  it('should generate EI scores', () => {
    expect(results.eiScores).toHaveProperty('selfAwareness')
    expect(results.eiScores).toHaveProperty('selfRegulation')
    expect(results.eiScores).toHaveProperty('empathy')
    expect(results.eiScores).toHaveProperty('socialSkills')
  })

  it('should generate finger RC analysis', () => {
    expect(results.fingerRCAnalysis).toHaveLength(10)
    results.fingerRCAnalysis.forEach((f) => {
      expect(f).toHaveProperty('finger')
      expect(f).toHaveProperty('ridgeCount')
      expect(f).toHaveProperty('rcInterpretation')
    })
  })

  it('should generate workplace profile', () => {
    expect(results.workplaceProfile).toHaveProperty('workStyle')
    expect(results.workplaceProfile).toHaveProperty('decisionMaking')
    expect(results.workplaceProfile).toHaveProperty('motivationDrivers')
  })
})
