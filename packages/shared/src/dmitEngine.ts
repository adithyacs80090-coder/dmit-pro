// DMIT Engine — Complete TypeScript Port
// Preserves all Excel calculation logic from original dmit-engine.js

export interface FingerprintData {
  patterns: string[]
  ridgeCounts: number[]
  atdLeft: number
  atdRight: number
  tier?: string
}

export interface PatternInfo {
  code: string
  name: string
  type: string
}

export interface FingerManifested {
  key: string
  code: string
  ridgeCount: number
  raw: number
}

export interface IntelligenceDatum {
  key: string
  name: string
  manifested: number
  stars: number
  starsDisplay: string
  side: string
}

export interface PersonalityDatum {
  code: string
  personality: string
  name: string
  disc: string
}

export interface DiscProfile {
  D: { count: number; percent: number }
  I: { count: number; percent: number }
  S: { count: number; percent: number }
  C: { count: number; percent: number }
}

export interface DominantDisc {
  primary: string
  secondary: string
  code: string
}

export interface AtdInterpretation {
  speed: string
  level: number
}

export interface M19Entry {
  name: string
  value: number
  stars: number
  starsDisplay: string
}

export interface CareerEntry {
  name: string
  val: number
  stars: number
  starsDisplay: string
}

export interface LearningStyleEntry {
  value: number
  percent: number
}

export interface SensoryEntry {
  value: number
  percent: number
}

export interface QuotientInterpretation {
  iq: string
  eq: string
  cq: string
  aq: string
}

export interface ObjectConcept {
  leftObject: number
  leftConcept: number
  rightObject: number
  rightConcept: number
  objectTotal: number
  conceptTotal: number
  executorL: number
  thinkerL: number
  executorR: number
  thinkerR: number
}

export interface HollandEntry {
  name: string
  value: number
  raw: number
  stars: number
  starsDisplay: string
}

export interface McKenzieEntry {
  value: number
  raw: number
}

export interface StreamEntry {
  value: number
  raw: number
}

export interface EiScore {
  value: number
  percent: number
}

export interface EiScores {
  selfAwareness: EiScore
  selfRegulation: EiScore
  empathy: EiScore
  socialSkills: EiScore
}

export interface BigFiveEntry {
  name: string
  raw: number
  value: number
  color: string
  percent?: number
  interpretation?: string
}

export interface StrengthEntry {
  name: string
  domain: string
  source: string
  shortDesc: string
}

export interface WorkplaceProfile {
  workStyle: { label: string; desc: string }
  decisionMaking: { label: string; desc: string }
  conflictStyle: { label: string; desc: string }
  feedbackPreference: { label: string; desc: string }
  motivationDrivers: string[]
  riskTolerance: { label: string; desc: string }
  idealManagerStyle: { label: string; desc: string }
  idealTeamRole: { label: string; desc: string }
}

export interface CognitiveReserve {
  level: string
  score: number
  strongestDomains: string[]
  fitnessRecommendations: { intelligence: string; recommendation: string }[]
}

export interface WellnessProfile {
  stressSignature: { physical: string; emotional: string; cognitive: string }
  recoveryActivities: { discBased: string; intelligenceBased: { intelligence: string; activity: string }[] }
  socialNeeds: string
  purposeAlignment: string[]
}

export interface SwotAnalysis {
  strengths: string[]
  weaknesses: string[]
  opportunities: string[]
  threats: string[]
}

export interface AcquiringMethod {
  name: string
  desc: string
  color: string
}

export interface AcquiringMethods {
  primary: AcquiringMethod
  secondary: AcquiringMethod
  all: AcquiringMethod[]
}

export interface BrainLobeEntry {
  lobe: string
  left: { rc: number; pattern: string; function: string }
  right: { rc: number; pattern: string; function: string }
  total: number
  dominant: string
  development: string
}

export interface SubIntelligence {
  key: string
  name: string
  parent: string
  value: number
  percent: number
  stars: number
  starsDisplay: string
}

export interface FingerRCAnalysisEntry {
  finger: string
  label: string
  brainLobe: string
  function: string
  intelligence: string
  hemisphere: string
  pattern: string
  ridgeCount: number
  rcInterpretation: { level: string; description: string }
}

export interface FingerPairComparisonEntry {
  pairLabel: string
  leftRC: number
  rightRC: number
  diff: number
  balance: string
  leftPattern: string
  rightPattern: string
  implication: string
}

export interface AtdBrainSpeed {
  leftBrainSpeed: string
  rightBrainSpeed: string
  note: string
}

export interface DmitResults {
  fingerRCAnalysis: FingerRCAnalysisEntry[]
  fingerPairComparison: FingerPairComparisonEntry[]
  atdBrainSpeed: AtdBrainSpeed
  bigFive: Record<string, BigFiveEntry>
  top5Strengths: StrengthEntry[]
  dominantStrengthsDomain: string
  workplaceProfile: WorkplaceProfile
  transferableSkills: string[]
  bridgeCareers: string[]
  cognitiveReserve: CognitiveReserve
  wellnessProfile: WellnessProfile
  uniquePatterns: string[]
  tier: string
  rbDist: Record<string, number>
  manifestedRaw: Record<string, number>
  fingerManifested: FingerManifested[]
  rbPct: number
  lbPct: number
  brainSide: 'left' | 'right' | 'balanced'
  intelligenceData: IntelligenceDatum[]
  topIntelligences: IntelligenceDatum[]
  personality: PersonalityDatum[]
  discProfile: DiscProfile
  dominantDISC: DominantDisc
  m19: Record<string, M19Entry>
  learningStyle: Record<string, LearningStyleEntry>
  fingerLearning: { finger: string; code: string; style: string }[]
  sensory: Record<string, SensoryEntry>
  iq: number
  eq: number
  cq: number
  aq: number
  quotientInterpretations: QuotientInterpretation
  cognitive: number
  affective: number
  objectConcept: ObjectConcept
  careerList: CareerEntry[]
  topCareers: CareerEntry[]
  holland: Record<string, HollandEntry>
  hollandTop2: string[]
  mckenzie: Record<string, McKenzieEntry>
  mckenzieTop: string
  stream: Record<string, StreamEntry>
  streamTop: string
  tfrc: number
  totalManifested: number
  atdLeft: number
  atdRight: number
  atdAvg: number
  atdInterpretation: AtdInterpretation
  atdLeftInterpretation: AtdInterpretation
  atdRightInterpretation: AtdInterpretation
  compatibilityKey: string
  parentingProfile: string
  stressProfile: string
  leadershipProfile: string
  communicationProfile: string
  eiScores: EiScores
  swot: SwotAnalysis
  acquiringMethods: AcquiringMethods
  extraCurricular: string[]
  brainLobes: BrainLobeEntry[]
  subIntelligences: SubIntelligence[]
}

/* ───────────────────────── Constants ───────────────────────── */

export const PATTERN_CODES: PatternInfo[] = [
  { code: 'W1', name: 'Target Centric', type: 'Whorl' },
  { code: 'W2', name: 'Spiral', type: 'Whorl' },
  { code: 'W3', name: 'Elongated Target Centric', type: 'Whorl' },
  { code: 'W4', name: 'Elongated Spiral', type: 'Whorl' },
  { code: 'W5', name: 'Double Loop', type: 'Whorl' },
  { code: 'W6', name: 'Imploding', type: 'Whorl' },
  { code: 'W7', name: 'Composite', type: 'Whorl' },
  { code: 'W8', name: "Target Centric Ulnar Peacock's Eye", type: 'Whorl' },
  { code: 'W9', name: "Spiral Ulnar Peacock's Eye", type: 'Whorl' },
  { code: 'W10', name: "Target Centric Radial Peacock's Eye", type: 'Whorl' },
  { code: 'W11', name: "Spiral RadialPeacock's Eye", type: 'Whorl' },
  { code: 'L', name: 'Ulnar Loop', type: 'Loop' },
  { code: 'R', name: 'Radial Loop', type: 'Loop' },
  { code: 'L1', name: 'Ulnar Falling Loop', type: 'Loop' },
  { code: 'R1', name: 'Radial Falling Loop', type: 'Loop' },
  { code: 'X1', name: 'Plain Arch', type: 'Arch' },
  { code: 'X2', name: 'Tented Arch', type: 'Arch' },
  { code: 'X3', name: 'Tented Arch with Ulnar Loop', type: 'Arch' },
  { code: 'X4', name: 'Tented Arch with Radial Loop', type: 'Arch' },
  { code: 'W', name: 'Accidental Whorl', type: 'Whorl' },
]

const W_CODES = ['W', 'W10', 'W1', 'W2', 'W3', 'W4', 'W11', 'W5', 'W6', 'W7', 'W8', 'W9']
const L_CODES = ['L', 'L1']
const R_CODES = ['R', 'R1']
const X_CODES = ['X1', 'X2', 'X3', 'X4']

const BASE_WEIGHTS: Record<string, number> = {
  art: 1.33, img: 1.19, gm: 1.31, mu: 1.35, vi: 1.57,
  intra: 1.43, logic: 1.22, fm: 1.35, lang: 1.40, nat: 1.61,
}

const PATTERN_MULTIPLIERS: Record<string, number> = {
  W1: 1.00, W2: 0.90, W3: 1.04, W4: 0.91, W5: 0.97,
  W6: 0.98, W7: 0.99, W8: 1.15, W9: 1.09, W10: 1.36,
  W11: 1.32, L: 0.87, R: 1.17, L1: 0.94, R1: 1.25,
  X1: 0.00, X2: 0.00, X3: 0.00, X4: 0.00, W: 1.00,
}

const FINGER_INTELLIGENCE = ['art', 'img', 'gm', 'mu', 'vi', 'intra', 'logic', 'fm', 'lang', 'nat']

const PERSONALITY_MAP: Record<string, { personality: string; name: string }> = {
  W1: { personality: 'Dominant', name: 'Target Centric' },
  W2: { personality: 'Dominant', name: 'Spiral' },
  W3: { personality: 'Dominant', name: 'Elongated Target Centric' },
  W4: { personality: 'Dominant', name: 'Elongated Spiral' },
  W5: { personality: 'Compliant', name: 'Double Loop' },
  W6: { personality: 'Compliant', name: 'Imploding' },
  W7: { personality: 'Compliant', name: 'Composite' },
  W8: { personality: 'Dominant', name: "Target Centric Ulnar Peacock's Eye" },
  W9: { personality: 'Dominant', name: "Spiral Ulnar Peacock's Eye" },
  W10: { personality: 'Dominant', name: "Target Centric Radial Peacock's Eye" },
  W11: { personality: 'Dominant', name: "Spiral Radial Peacock's Eye" },
  L:   { personality: 'Steady', name: 'Ulnar Loop' },
  R:   { personality: 'Steady', name: 'Radial Loop' },
  L1:  { personality: 'Steady', name: 'Ulnar Falling Loop' },
  R1:  { personality: 'Steady', name: 'Radial Falling Loop' },
  X1:  { personality: 'Influential', name: 'Plain Arch' },
  X2:  { personality: 'Influential', name: 'Tented Arch' },
  X3:  { personality: 'Influential', name: 'Tented Arch with Ulnar Loop' },
  X4:  { personality: 'Influential', name: 'Tented Arch with Radial Loop' },
  W:   { personality: 'Dominant', name: 'Accidental Whorl' },
}

const DISC_MAP: Record<string, string> = {
  W1: 'D', W2: 'D', W3: 'D', W4: 'D',
  W5: 'C', W6: 'C', W7: 'C',
  W8: 'D', W9: 'D', W10: 'D', W11: 'D',
  L: 'S', R: 'S', L1: 'S', R1: 'S',
  X1: 'I', X2: 'I', X3: 'I', X4: 'I',
  W: 'D',
}

/* ───────────────────────── Helpers ───────────────────────── */

function isWhorl(code: string): boolean { return W_CODES.includes(code) }
function isLoop(code: string): boolean { return L_CODES.includes(code) }
function isRadial(code: string): boolean { return R_CODES.includes(code) }
function isArch(code: string): boolean { return X_CODES.includes(code) }

export function starRating(pct: number): number {
  if (pct >= 0.11) return 5
  if (pct >= 0.10) return 4
  if (pct >= 0.09) return 3
  if (pct >= 0.08) return 2
  return 1
}

export function starString(rating: number): string {
  return '\u2605'.repeat(rating) + '\u2606'.repeat(5 - rating)
}

export function interpretATD(angle: number): AtdInterpretation {
  if (angle < 35) return { speed: 'Very Fast Learner', level: 5 }
  if (angle < 40) return { speed: 'Fast Learner', level: 4 }
  if (angle < 45) return { speed: 'Average Learner', level: 3 }
  if (angle < 50) return { speed: 'Moderate Learner', level: 2 }
  if (angle < 55) return { speed: 'Slow Learner', level: 1 }
  return { speed: 'Needs Support', level: 0 }
}

function getWeights(patternCode: string): Record<string, number> {
  const mult = PATTERN_MULTIPLIERS[patternCode] ?? 1.0
  return {
    art: BASE_WEIGHTS.art * mult,
    img: BASE_WEIGHTS.img * mult,
    gm: BASE_WEIGHTS.gm * mult,
    mu: BASE_WEIGHTS.mu * mult,
    vi: BASE_WEIGHTS.vi * mult,
    intra: BASE_WEIGHTS.intra * mult,
    logic: BASE_WEIGHTS.logic * mult,
    fm: BASE_WEIGHTS.fm * mult,
    lang: BASE_WEIGHTS.lang * mult,
    nat: BASE_WEIGHTS.nat * mult,
  }
}

function getDISCProfile(codes: string[]): DiscProfile {
  let d = 0, i = 0, s = 0, c = 0
  codes.forEach(code => {
    const disc = DISC_MAP[code] || 'D'
    if (disc === 'D') d += 1
    else if (disc === 'I') i += 1
    else if (disc === 'S') s += 1
    else if (disc === 'C') c += 1
  })
  const total = d + i + s + c
  return {
    D: { count: d, percent: total > 0 ? d / total : 0 },
    I: { count: i, percent: total > 0 ? i / total : 0 },
    S: { count: s, percent: total > 0 ? s / total : 0 },
    C: { count: c, percent: total > 0 ? c / total : 0 },
  }
}

function getDominantDISC(discProfile: DiscProfile): DominantDisc {
  const entries = Object.entries(discProfile).sort((a, b) => b[1].percent - a[1].percent)
  const primary = entries[0][0]
  const secondary = entries[1][0]
  return { primary, secondary, code: primary + secondary }
}

function getEIScores(rbDist: Record<string, number>): EiScores {
  const art = rbDist['art']
  const intra = rbDist['intra']
  const img = rbDist['img']
  const logic = rbDist['logic']
  const lang = rbDist['lang']

  const selfAwareness = (intra + logic) / 2
  const selfRegulation = (intra + art) / 2
  const empathy = (art + img) / 2
  const socialSkills = (art + lang) / 2
  const total = selfAwareness + selfRegulation + empathy + socialSkills

  return {
    selfAwareness: { value: selfAwareness, percent: total > 0 ? selfAwareness / total : 0 },
    selfRegulation: { value: selfRegulation, percent: total > 0 ? selfRegulation / total : 0 },
    empathy: { value: empathy, percent: total > 0 ? empathy / total : 0 },
    socialSkills: { value: socialSkills, percent: total > 0 ? socialSkills / total : 0 },
  }
}

function interpretQuotient(val: number, type: 'iq' | 'eq' | 'cq' | 'aq'): string {
  if (type === 'iq') {
    if (val >= 130) return 'Highly Gifted'
    if (val >= 115) return 'Above Average'
    if (val >= 85) return 'Average'
    if (val >= 70) return 'Borderline'
    return 'Below Average'
  }
  if (type === 'eq') {
    if (val >= 8) return 'Excellent'
    if (val >= 6) return 'Good'
    if (val >= 4) return 'Average'
    if (val >= 2) return 'Developing'
    return 'Needs Development'
  }
  if (type === 'cq') {
    if (val >= 8) return 'Highly Creative'
    if (val >= 6) return 'Creative'
    if (val >= 4) return 'Average'
    if (val >= 2) return 'Developing'
    return 'Needs Development'
  }
  if (type === 'aq') {
    if (val >= 8) return 'Climber (High Resilience)'
    if (val >= 6) return 'Resilient'
    if (val >= 4) return 'Camper (Moderate)'
    if (val >= 2) return 'Developing'
    return 'Needs Support'
  }
  return 'Unknown'
}

function interpretRC(rc: number): { level: string; description: string } {
  if (rc === 0) return { level: 'Arch (Zero)', description: 'This brain region functions through compensation from other areas. Not a weakness — other pathways handle this function.' }
  if (rc < 8) return { level: 'Lower', description: 'Less natural inclination in this area, but it can be developed with practice and patience.' }
  if (rc < 15) return { level: 'Average', description: 'Balanced development in this brain region. A solid foundation that responds well to effort.' }
  return { level: 'Higher', description: 'Strong natural development in this brain region. A clear innate aptitude that benefits from stimulation.' }
}

/* ───────────────────────── Main Calculate ───────────────────────── */

export function calculateDmit(input: FingerprintData): DmitResults {
  const { patterns, ridgeCounts, atdLeft, atdRight } = input
  const codes = patterns

  // Manifested raw calculations
  const manifestedRaw: Record<string, number> = Object.fromEntries(FINGER_INTELLIGENCE.map(k => [k, 0]))
  const fingerManifested: FingerManifested[] = codes.map((code, i) => {
    const key = FINGER_INTELLIGENCE[i]
    const rc = Number(ridgeCounts[i]) || 0
    const raw = (getWeights(code)[key] || 0) * rc
    manifestedRaw[key] += raw
    return { key, code, ridgeCount: rc, raw }
  })

  const rbKeys = ['art', 'img', 'gm', 'mu', 'vi']
  const lbKeys = ['intra', 'logic', 'fm', 'lang', 'nat']

  const rbManifested = rbKeys.map(k => manifestedRaw[k])
  const lbManifested = lbKeys.map(k => manifestedRaw[k])

  const rbTotal = rbManifested.reduce((a, b) => a + b, 0)
  const lbTotal = lbManifested.reduce((a, b) => a + b, 0)
  const totalManifested = rbTotal + lbTotal

  const rbDist: Record<string, number> = {}
  rbKeys.forEach((k, i) => { rbDist[k] = totalManifested > 0 ? rbManifested[i] / totalManifested : 0 })
  lbKeys.forEach((k, i) => { rbDist[k] = totalManifested > 0 ? lbManifested[i] / totalManifested : 0 })
  rbDist.lit = rbDist.lang
  manifestedRaw.lit = manifestedRaw.lang

  const rbPct = totalManifested > 0 ? rbTotal / totalManifested : 0
  const lbPct = totalManifested > 0 ? lbTotal / totalManifested : 0

  const intelligenceNames: Record<string, string> = {
    art: 'Interpersonal', img: 'Imagination',
    gm: 'Gross Motor', mu: 'Music', vi: 'Visual',
    intra: 'Intrapersonal', logic: 'Logic', fm: 'Fine Motor',
    lang: 'Linguistic', nat: 'Naturalist'
  }

  const intelligenceData: IntelligenceDatum[] = Object.keys(intelligenceNames).map(k => ({
    key: k,
    name: intelligenceNames[k],
    manifested: rbDist[k],
    stars: starRating(rbDist[k]),
    starsDisplay: starString(starRating(rbDist[k])),
    side: rbKeys.includes(k) ? 'Right Brain' : 'Left Brain'
  }))

  const personality: PersonalityDatum[] = codes.map(c => ({
    code: c,
    ...PERSONALITY_MAP[c],
    disc: DISC_MAP[c] || 'D',
  }))

  // DISC profile
  const discProfile = getDISCProfile(codes)
  const dominantDISC = getDominantDISC(discProfile)

  // ATD
  const atdLeftVal = atdLeft != null ? atdLeft : 45
  const atdRightVal = atdRight != null ? atdRight : 45
  const atdAvg = (atdLeftVal + atdRightVal) / 2
  const atdInterpretation = interpretATD(atdAvg)

  // Intelligence value aliases
  const artVal = rbDist['art']
  const intraVal = rbDist['intra']
  const imgVal = rbDist['img']
  const logicVal = rbDist['logic']
  const gmVal = rbDist['gm']
  const fmVal = rbDist['fm']
  const muVal = rbDist['mu']
  const langVal = rbDist['lang']
  const viVal = rbDist['vi']
  const natVal = rbDist['nat']
  const litVal = rbDist['lit']

  const artRaw = manifestedRaw.art
  const imgRaw = manifestedRaw.img
  const gmRaw = manifestedRaw.gm
  const muRaw = manifestedRaw.mu
  const viRaw = manifestedRaw.vi
  const intraRaw = manifestedRaw.intra
  const logicRaw = manifestedRaw.logic
  const fmRaw = manifestedRaw.fm
  const langRaw = manifestedRaw.lang
  const natRaw = manifestedRaw.nat

  // M19 Career Strengths
  const m19: Record<string, M19Entry> = {
    'Agriculture': { name: 'Agriculture', value: logicVal, stars: 0, starsDisplay: '' },
    'Designing': { name: 'Designing', value: (imgVal + artVal) / 2, stars: 0, starsDisplay: '' },
    'Engineering': { name: 'Engineering', value: (artVal + langVal) / 2, stars: 0, starsDisplay: '' },
    'Medical': { name: 'Medical', value: (langVal + logicVal + intraVal + artVal) / 4, stars: 0, starsDisplay: '' },
    'Weather': { name: 'Weather', value: langVal, stars: 0, starsDisplay: '' },
    'Education': { name: 'Education', value: (fmVal + viVal + artVal) / 3, stars: 0, starsDisplay: '' },
    'Banking & Finance': { name: 'Banking & Finance', value: (logicVal + fmVal) / 2, stars: 0, starsDisplay: '' },
    'Mass & Media': { name: 'Mass & Media', value: (muVal + artVal) / 2, stars: 0, starsDisplay: '' },
    'Art': { name: 'Art', value: artVal, stars: 0, starsDisplay: '' },
    'Literature': { name: 'Literature', value: langVal, stars: 0, starsDisplay: '' },
    'Mathematics': { name: 'Mathematics', value: logicVal, stars: 0, starsDisplay: '' },
    'Management': { name: 'Management', value: (imgVal + intraVal) / 2, stars: 0, starsDisplay: '' },
    'Public & Political Affairs': { name: 'Public & Political Affairs', value: (artVal + natVal) / 2, stars: 0, starsDisplay: '' },
    'Psychology': { name: 'Psychology', value: (natVal + logicVal + gmVal + artVal) / 4, stars: 0, starsDisplay: '' },
    'Foreign Language': { name: 'Foreign Language', value: natVal, stars: 0, starsDisplay: '' },
    'Sports': { name: 'Sports', value: (imgVal + fmVal + viVal + artVal) / 4, stars: 0, starsDisplay: '' },
  }

  for (const k in m19) {
    const s = starRating(m19[k].value)
    m19[k].stars = s
    m19[k].starsDisplay = starString(s)
  }

  // Learning style
  const kTotal = (gmVal + fmVal) / 2
  const aTotal = (muVal + langVal) / 2
  const vTotal = (viVal + natVal) / 2
  const learningSum = kTotal + aTotal + vTotal

  const learningStyle: Record<string, LearningStyleEntry> = {
    Kinesthetic: { value: kTotal, percent: learningSum > 0 ? kTotal / learningSum : 0 },
    Auditory: { value: aTotal, percent: learningSum > 0 ? aTotal / learningSum : 0 },
    Visual: { value: vTotal, percent: learningSum > 0 ? vTotal / learningSum : 0 },
  }

  const fingerLearning = codes.map((c, i) => {
    let style: string
    if (isWhorl(c)) style = 'Kinesthetic'
    else if (isLoop(c)) style = 'Auditory'
    else if (isRadial(c)) style = 'Visual'
    else style = 'Visual'
    return { finger: i < 5 ? `L${i + 1}` : `R${i - 4}`, code: c, style }
  })

  // Sensory
  const taste = (natVal + (fmVal + gmVal) / 2) / 2
  const smell = natVal
  const touch = (natVal + fmVal) / 2
  const listen = (natVal + muVal) / 2
  const see = (natVal + viVal) / 2
  const sensoryTotal = taste + smell + touch + listen + see

  const sensory: Record<string, SensoryEntry> = {
    Taste: { value: taste, percent: sensoryTotal > 0 ? taste / sensoryTotal : 0 },
    Smell: { value: smell, percent: sensoryTotal > 0 ? smell / sensoryTotal : 0 },
    Touch: { value: touch, percent: sensoryTotal > 0 ? touch / sensoryTotal : 0 },
    Listen: { value: listen, percent: sensoryTotal > 0 ? listen / sensoryTotal : 0 },
    See: { value: see, percent: sensoryTotal > 0 ? see / sensoryTotal : 0 },
  }

  // Quotients
  const iq = (((logicRaw + langRaw) / 2) / 2) * 10
  const eq = (((artRaw + intraRaw) / 2) / 2) * 10
  const quotientImaginationRaw = (imgRaw + viRaw) / 2
  const quotientKinestheticRaw = (gmRaw + fmRaw) / 2
  const cq = (((quotientImaginationRaw + muRaw) / 2) / 2) * 10
  const aq = (((quotientKinestheticRaw + natRaw) / 2) / 2) * 10

  const kPercent = codes.filter(isWhorl).length / 10
  const aPercent = codes.filter(isLoop).length / 10
  const vPercent = codes.filter(isRadial).length / 10

  const cognitive = [kPercent * 10, aPercent * 10, vPercent * 10].reduce((a, b) => a + b, 0)
  const affective = (1 - cognitive / 30) * 30

  // Object / Concept
  const objLeft = (logicVal + intraVal) / 2
  const conLeft = (viVal + imgVal + artVal) / 3
  const objRight = (artVal + intraVal) / 2
  const conRight = (logicVal + natVal) / 2
  const objTotal = objLeft + objRight
  const conTotal = conLeft + conRight

  const objectConcept: ObjectConcept = {
    leftObject: objLeft,
    leftConcept: conLeft,
    rightObject: objRight,
    rightConcept: conRight,
    objectTotal: objTotal,
    conceptTotal: conTotal,
    executorL: objLeft / (objLeft + conLeft || 1),
    thinkerL: conLeft / (objLeft + conLeft || 1),
    executorR: objRight / (objRight + conRight || 1),
    thinkerR: conRight / (objRight + conRight || 1),
  }

  // Career list
  const careerList: CareerEntry[] = generateCareerList(rbDist, manifestedRaw)
  careerList.forEach(c => {
    c.stars = starRating(c.val)
    c.starsDisplay = starString(c.stars)
  })

  // McKenzie
  const z57 = (logicVal + muVal + natVal) / 3
  const aa57 = (intraVal + imgVal + viVal) / 3
  const ab57 = (langVal + artVal + gmVal + fmVal) / 4
  const ac57 = z57 + aa57 + ab57

  const mckenzie: Record<string, McKenzieEntry> = {
    Analytic: { value: ac57 > 0 ? z57 / ac57 : 0, raw: z57 },
    Introspective: { value: ac57 > 0 ? aa57 / ac57 : 0, raw: aa57 },
    Interactive: { value: ac57 > 0 ? ab57 / ac57 : 0, raw: ab57 },
  }

  // Holland
  const R = (fmVal + gmVal + logicVal) / 3
  const I2 = (logicVal + natVal + intraVal) / 3
  const A = (imgVal + viVal + muVal + gmVal + fmVal) / 5
  const S = (artVal + langVal + logicVal) / 3
  const E = (artVal + langVal + imgVal + viVal) / 4
  const C2 = (logicVal + langVal + fmVal) / 3
  const hollandTotal = R + I2 + A + S + E + C2

  const holland: Record<string, HollandEntry> = {
    R: { name: 'Realistic', value: hollandTotal > 0 ? R / hollandTotal : 0, raw: R, stars: 0, starsDisplay: '' },
    I: { name: 'Investigative', value: hollandTotal > 0 ? I2 / hollandTotal : 0, raw: I2, stars: 0, starsDisplay: '' },
    A: { name: 'Artistic', value: hollandTotal > 0 ? A / hollandTotal : 0, raw: A, stars: 0, starsDisplay: '' },
    S: { name: 'Social', value: hollandTotal > 0 ? S / hollandTotal : 0, raw: S, stars: 0, starsDisplay: '' },
    E: { name: 'Enterprising', value: hollandTotal > 0 ? E / hollandTotal : 0, raw: E, stars: 0, starsDisplay: '' },
    C: { name: 'Conventional', value: hollandTotal > 0 ? C2 / hollandTotal : 0, raw: C2, stars: 0, starsDisplay: '' },
  }

  for (const k in holland) {
    const s = starRating(holland[k].value)
    holland[k].stars = s
    holland[k].starsDisplay = starString(s)
  }

  // Stream
  const scienceVal = (logicVal + langVal + natVal) / 3
  const commerceVal = (logicVal + langVal) / 2
  const artsVal = (muVal + langVal + fmVal + viVal + imgVal) / 6
  const streamTotal = scienceVal + commerceVal + artsVal

  const stream: Record<string, StreamEntry> = {
    Science: { value: streamTotal > 0 ? scienceVal / streamTotal : 0, raw: scienceVal },
    Commerce: { value: streamTotal > 0 ? commerceVal / streamTotal : 0, raw: commerceVal },
    Arts: { value: streamTotal > 0 ? artsVal / streamTotal : 0, raw: artsVal },
  }

  // TFRC
  const tfrc = ridgeCounts.reduce((a, b) => a + b, 0)

  // Top items
  const topIntelligences = [...intelligenceData].sort((a, b) => b.manifested - a.manifested).slice(0, 3)
  const topCareers = [...careerList].sort((a, b) => b.val - a.val).slice(0, 5)
  const hollandSorted = Object.entries(holland).sort((a, b) => b[1].value - a[1].value)
  const hollandTop2 = hollandSorted.slice(0, 2).map(([k]) => k)
  const mckenzieTop = Object.entries(mckenzie).sort((a, b) => b[1].value - a[1].value)[0][0]
  const streamTop = Object.entries(stream).sort((a, b) => b[1].value - a[1].value)[0][0]

  // Compatibility / profiles
  const disc1 = dominantDISC.primary
  const disc2 = dominantDISC.secondary
  const compatibilityKey = [disc1, disc2].sort().join('-')
  const parentingProfile = dominantDISC.primary
  const stressProfile = dominantDISC.primary
  const leadershipProfile = dominantDISC.primary
  const communicationProfile = dominantDISC.primary

  // EI scores
  const eiScores = getEIScores(rbDist)

  // Quotient interpretations
  const quotientInterpretations: QuotientInterpretation = {
    iq: interpretQuotient(iq, 'iq'),
    eq: interpretQuotient(eq, 'eq'),
    cq: interpretQuotient(cq, 'cq'),
    aq: interpretQuotient(aq, 'aq'),
  }

  // Brain dominance classification
  let brainSide: 'left' | 'right' | 'balanced'
  const diff = Math.abs(rbPct - lbPct)
  if (diff < 0.05) brainSide = 'balanced'
  else if (rbPct > lbPct) brainSide = 'right'
  else brainSide = 'left'

  // Finger RC Analysis
  const fingerBrainMap = [
    { finger: 'L1', label: 'Left Thumb', brainLobe: 'Pre-frontal', function: 'Interpersonal', intelligence: 'art', hemisphere: 'Right' },
    { finger: 'L2', label: 'Left Index', brainLobe: 'Frontal', function: 'Imagination & Creativity', intelligence: 'img', hemisphere: 'Right' },
    { finger: 'L3', label: 'Left Middle', brainLobe: 'Parietal', function: 'Gross Motor & Body', intelligence: 'gm', hemisphere: 'Right' },
    { finger: 'L4', label: 'Left Ring', brainLobe: 'Temporal', function: 'Music & Rhythm', intelligence: 'mu', hemisphere: 'Right' },
    { finger: 'L5', label: 'Left Little', brainLobe: 'Occipital', function: 'Visual Processing', intelligence: 'vi', hemisphere: 'Right' },
    { finger: 'R1', label: 'Right Thumb', brainLobe: 'Pre-frontal', function: 'Intrapersonal', intelligence: 'intra', hemisphere: 'Left' },
    { finger: 'R2', label: 'Right Index', brainLobe: 'Frontal', function: 'Logic & Reasoning', intelligence: 'logic', hemisphere: 'Left' },
    { finger: 'R3', label: 'Right Middle', brainLobe: 'Parietal', function: 'Fine Motor & Sensory', intelligence: 'fm', hemisphere: 'Left' },
    { finger: 'R4', label: 'Right Ring', brainLobe: 'Temporal', function: 'Language', intelligence: 'lang', hemisphere: 'Left' },
    { finger: 'R5', label: 'Right Little', brainLobe: 'Occipital', function: 'Naturalist', intelligence: 'nat', hemisphere: 'Left' },
  ]

  const fingerRCAnalysis: FingerRCAnalysisEntry[] = fingerBrainMap.map((f, i) => ({
    ...f,
    pattern: codes[i],
    ridgeCount: ridgeCounts[i],
    rcInterpretation: interpretRC(ridgeCounts[i]),
  }))

  const fingerPairComparison: FingerPairComparisonEntry[] = []
  for (let i = 0; i < 5; i++) {
    const leftRC = ridgeCounts[i]
    const rightRC = ridgeCounts[i + 5]
    const diff = rightRC - leftRC
    let balance: string
    if (leftRC === 0 && rightRC === 0) balance = 'Both arches'
    else if (Math.abs(diff) <= 1) balance = 'Balanced'
    else if (diff > 0) balance = 'Left brain stronger'
    else balance = 'Right brain stronger'
    fingerPairComparison.push({
      pairLabel: fingerBrainMap[i].brainLobe,
      leftRC, rightRC, diff, balance,
      leftPattern: codes[i], rightPattern: codes[i + 5],
      implication: balance === 'Balanced' ? 'Both hemispheres process this function equally'
        : balance === 'Left brain stronger' ? 'Left hemisphere has stronger development for this function'
        : balance === 'Right brain stronger' ? 'Right hemisphere has stronger development for this function'
        : 'Neither hemisphere shows strong development for this function'
    })
  }

  // ATD enhanced
  const atdLeftInterp = interpretATD(atdLeftVal)
  const atdRightInterp = interpretATD(atdRightVal)
  const atdBrainSpeed: AtdBrainSpeed = {
    leftBrainSpeed: atdRightVal < 40 ? 'Fast' : (atdRightVal < 45 ? 'Average' : 'Moderate'),
    rightBrainSpeed: atdLeftVal < 40 ? 'Fast' : (atdLeftVal < 45 ? 'Average' : 'Moderate'),
    note: 'Left ATD reflects right-brain processing speed; Right ATD reflects left-brain processing speed.'
  }

  // Big Five / OCEAN
  const meanIntel = Object.values(rbDist).reduce((a, b) => a + b, 0) / 11
  const inv = (v: number) => Math.max(0, 2 * meanIntel - v)

  const openness = (imgVal * 0.30 + muVal * 0.25 + viVal * 0.25 + natVal * 0.20)
  const conscientiousness = (logicVal * 0.35 + intraVal * 0.35 + fmVal * 0.30)
  const extraversion = (artVal * 0.35 + langVal * 0.30 + gmVal * 0.20 + muVal * 0.15)
  const agreeableness = (artVal * 0.30 + natVal * 0.25 + intraVal * 0.15 + litVal * 0.15 + inv(logicVal) * 0.15)
  const neuroticism = (inv(intraVal) * 0.30 + inv(logicVal) * 0.25 + inv(fmVal) * 0.15 + inv(artVal) * 0.30)
  const bigFiveTotal = openness + conscientiousness + extraversion + agreeableness + neuroticism

  const bigFive: Record<string, BigFiveEntry> = {
    O: { name: 'Openness', raw: openness, value: bigFiveTotal > 0 ? openness / bigFiveTotal : 0, color: '#9B59B6' },
    C: { name: 'Conscientiousness', raw: conscientiousness, value: bigFiveTotal > 0 ? conscientiousness / bigFiveTotal : 0, color: '#2C3E50' },
    E: { name: 'Extraversion', raw: extraversion, value: bigFiveTotal > 0 ? extraversion / bigFiveTotal : 0, color: '#E74C3C' },
    A: { name: 'Agreeableness', raw: agreeableness, value: bigFiveTotal > 0 ? agreeableness / bigFiveTotal : 0, color: '#27AE60' },
    N: { name: 'Neuroticism', raw: neuroticism, value: bigFiveTotal > 0 ? neuroticism / bigFiveTotal : 0, color: '#3498DB' },
  }

  const bigFiveVals = [openness, conscientiousness, extraversion, agreeableness, neuroticism]
  const bfMax = Math.max(...bigFiveVals)
  const bfMin = Math.min(...bigFiveVals)
  const bfRange = bfMax - bfMin || 0.001

  Object.keys(bigFive).forEach(k => {
    const p = Math.max(0, Math.min(100, ((bigFive[k].raw - bfMin) / bfRange) * 100))
    bigFive[k].percent = p
    bigFive[k].interpretation = interpretBigFive(k as 'O' | 'C' | 'E' | 'A' | 'N', p)
  })

  // Strengths profile
  const topIntellKeys = [...intelligenceData].sort((a, b) => b.manifested - a.manifested).slice(0, 4).map(d => d.key)
  const top5Strengths = generateTopStrengths(topIntellKeys)
  const domainCounts: Record<string, number> = {}
  top5Strengths.forEach(s => { domainCounts[s.domain] = (domainCounts[s.domain] || 0) + 1 })
  const dominantDomain = Object.entries(domainCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Executing'

  // Workplace behavioral profile
  const discP = dominantDISC.primary
  const workplaceProfile: WorkplaceProfile = {
    workStyle: getWorkStyle(discP),
    decisionMaking: getDecisionMaking(discP),
    conflictStyle: getConflictStyle(discP),
    feedbackPreference: getFeedbackPreference(discP),
    motivationDrivers: getMotivationDrivers(discP),
    riskTolerance: getRiskTolerance(discP),
    idealManagerStyle: getIdealManager(discP),
    idealTeamRole: getTeamRole(discP, dominantDomain),
  }

  // Career transition map
  const transferableSkills = getTransferableSkills(topIntellKeys)
  const bridgeCareers = getBridgeCareers(topIntellKeys, hollandTop2, streamTop)

  // Cognitive reserve
  const intelDiversity = intelligenceData.filter(d => d.stars >= 3).length
  const cognitiveReserve: CognitiveReserve = {
    level: intelDiversity >= 7 ? 'High' : (intelDiversity >= 4 ? 'Moderate' : 'Developing'),
    score: intelDiversity,
    strongestDomains: topIntelligences.slice(0, 3).map(d => d.name.split('(')[0].trim()),
    fitnessRecommendations: getCognitiveFitnessRecommendations(topIntellKeys),
  }

  // Wellness alignment
  const wellnessProfile: WellnessProfile = {
    stressSignature: getStressSignature(discP),
    recoveryActivities: getRecoveryActivities(topIntellKeys, discP),
    socialNeeds: artVal > 0.10 ? 'High — you need regular meaningful social connection' : (artVal > 0.08 ? 'Moderate — you enjoy social time but also need solitude' : 'Low — you are self-sufficient and recharge alone'),
    purposeAlignment: getPurposeAlignment(topIntellKeys),
  }

  // SWOT
  const swot = generateSWOT(intelligenceData, dominantDISC, brainSide)

  // Acquiring methods
  const acquiringMethods = generateAcquiringMethods(discProfile, learningStyle, sensory)

  // Extra curricular
  const extraCurricular = generateExtraCurricular(topIntellKeys, discP)

  // Brain lobes
  const brainLobes = generateBrainLobes(fingerRCAnalysis)

  // Sub-intelligences
  const subIntelligences = generateSubIntelligences(rbDist)

  // Unique patterns
  const uniquePatterns = [...new Set(codes)]

  // Tier
  const tier = input.tier || 'professional'

  return {
    fingerRCAnalysis,
    fingerPairComparison,
    atdBrainSpeed,
    bigFive,
    top5Strengths,
    dominantStrengthsDomain: dominantDomain,
    workplaceProfile,
    transferableSkills,
    bridgeCareers,
    cognitiveReserve,
    wellnessProfile,
    uniquePatterns,
    tier,
    rbDist,
    manifestedRaw,
    fingerManifested,
    rbPct,
    lbPct,
    brainSide,
    intelligenceData,
    topIntelligences,
    personality,
    discProfile,
    dominantDISC,
    m19,
    learningStyle,
    fingerLearning,
    sensory,
    iq, eq, cq, aq,
    quotientInterpretations,
    cognitive,
    affective,
    objectConcept,
    careerList: careerList.sort((a, b) => b.val - a.val),
    topCareers,
    holland,
    hollandTop2,
    mckenzie,
    mckenzieTop,
    stream,
    streamTop,
    tfrc,
    totalManifested,
    atdLeft: atdLeftVal,
    atdRight: atdRightVal,
    atdAvg,
    atdInterpretation,
    atdLeftInterpretation: atdLeftInterp,
    atdRightInterpretation: atdRightInterp,
    compatibilityKey,
    parentingProfile,
    stressProfile,
    leadershipProfile,
    communicationProfile,
    eiScores,
    swot,
    acquiringMethods,
    extraCurricular,
    brainLobes,
    subIntelligences,
  }
}

/* ───────────────────────── Career List Generator ───────────────────────── */

function generateCareerList(rbDist: Record<string, number>, manifestedRaw: Record<string, number>): CareerEntry[] {
  const artVal = rbDist['art'], imgVal = rbDist['img'], gmVal = rbDist['gm'], muVal = rbDist['mu']
  const viVal = rbDist['vi'], intraVal = rbDist['intra'], logicVal = rbDist['logic']
  const fmVal = rbDist['fm'], langVal = rbDist['lang'], natVal = rbDist['nat'], litVal = rbDist['lit']

  return [
    // Traditional careers
    { name: 'Doctor', val: (natVal + logicVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Nutritionist', val: (natVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Medical Officer', val: (natVal + logicVal + gmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Chemist', val: (natVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Chemical Engineering', val: (natVal + logicVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Electronics Engineering', val: (logicVal + natVal + gmVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Electrical Engineering', val: (logicVal + gmVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Aviation Engineering', val: (logicVal + natVal + gmVal + natVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Mechanical Engineering', val: (gmVal + logicVal + viVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Computer Engineering', val: (logicVal + natVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Production Engineering', val: (intraVal + logicVal + imgVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Software Designer', val: (logicVal + imgVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Web Designer', val: (natVal + imgVal + logicVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Fashion Designer', val: (natVal + imgVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Architect', val: (natVal + imgVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Music Teacher', val: (muVal + artVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Music Director', val: (muVal + artVal + intraVal + langVal + fmVal) / 5, stars: 0, starsDisplay: '' },
    { name: 'Musical Instrument Artist', val: (muVal + fmVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Voice Recognizer', val: (muVal + langVal + natVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Dancer', val: (muVal + gmVal + natVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Singer', val: (muVal + langVal + imgVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Piano Artist', val: (muVal + gmVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Guitar Artist', val: (muVal + gmVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Music Composer', val: (muVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Choreographer', val: (muVal + gmVal + fmVal + imgVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Biology Teacher', val: (natVal + artVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Biotechnology Researcher', val: (natVal + logicVal + intraVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Botany Professor', val: (natVal + artVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Geography Professor', val: (natVal + artVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Environment Researcher', val: (natVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Soil Researcher', val: (natVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Interior Designer', val: (imgVal + natVal + logicVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Car/Bike Designer', val: (natVal + imgVal + gmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Wedding Planner', val: (imgVal + natVal + gmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Map Designer', val: (imgVal + natVal + logicVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Chartered Accountant', val: logicVal, stars: 0, starsDisplay: '' },
    { name: 'Mutual Fund/Insurance Agent', val: (logicVal + artVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Investment Banker', val: (logicVal + artVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Wealth Manager', val: (logicVal + artVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Financial Officer', val: logicVal, stars: 0, starsDisplay: '' },
    { name: 'Tax Consultant', val: (logicVal + intraVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Equity Researcher', val: (logicVal + natVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Bank Teller', val: (logicVal + intraVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'News Reader', val: (langVal + natVal + logicVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Writer/Author', val: (langVal + gmVal + intraVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'News Editor', val: (langVal + fmVal + artVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Hindi/English Teacher', val: (langVal + artVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Philosopher', val: (artVal + intraVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Poet', val: (imgVal + langVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Journalist', val: (langVal + logicVal + gmVal + artVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Public Relation Officer', val: (artVal + langVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Grammar Expert', val: (logicVal + langVal + natVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Translator', val: (langVal + artVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Interpreter', val: (langVal + muVal + artVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Language Expert', val: langVal, stars: 0, starsDisplay: '' },
    { name: 'Language Researcher', val: (langVal + natVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Language Teacher', val: (intraVal + langVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Mathematician', val: (logicVal + fmVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Chemical Expert', val: (logicVal + fmVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Accountant', val: (logicVal + intraVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Actuary', val: fmVal, stars: 0, starsDisplay: '' },
    { name: 'Economist', val: logicVal, stars: 0, starsDisplay: '' },
    { name: 'Statistician', val: (logicVal + natVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Business Analyst', val: (logicVal + langVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Physicist', val: (natVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Business Management', val: (artVal + intraVal + logicVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'HR Management', val: (artVal + intraVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Tourism Management', val: (langVal + imgVal + logicVal + gmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Marketing Management', val: (natVal + imgVal + logicVal + natVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Production Management', val: (intraVal + imgVal + gmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Sales Management', val: (intraVal + intraVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Company Secretary', val: (logicVal + intraVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Politician', val: (langVal + artVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Lawyer', val: (langVal + artVal + natVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Judge', val: (langVal + muVal + logicVal + natVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'IAS/IPS Officer', val: (logicVal + langVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Police', val: (gmVal + logicVal + langVal + artVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Army', val: (logicVal + natVal + gmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Air Force', val: (imgVal + fmVal + logicVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Navy', val: (imgVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'CRPF', val: (imgVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Fire Brigade Officer', val: (gmVal + viVal + logicVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'National Disaster Management', val: (gmVal + artVal + intraVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Psychologist', val: (artVal + intraVal + langVal + muVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Career Counselor', val: (artVal + intraVal + langVal + muVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Counselor', val: (intraVal + intraVal + muVal + langVal + logicVal) / 5, stars: 0, starsDisplay: '' },
    { name: 'Marriage Counselor', val: (intraVal + intraVal + muVal + langVal + logicVal) / 5, stars: 0, starsDisplay: '' },
    { name: 'Parenting Counselor', val: (intraVal + intraVal + muVal + langVal + logicVal) / 5, stars: 0, starsDisplay: '' },
    { name: 'Teacher/Professor', val: (intraVal + langVal + logicVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Administrator', val: (intraVal + intraVal + muVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Spiritual Leader', val: (intraVal + langVal + natVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Motivational Speaker', val: (langVal + intraVal + artVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Speech Therapist', val: (artVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Anchor/Radio Jockey', val: (langVal + imgVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Trainer', val: (langVal + gmVal + artVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Mediator', val: (muVal + artVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Surgeon', val: (natVal + gmVal + logicVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Pharmacist', val: (natVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Drug Officer', val: (natVal + logicVal + gmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Food Inspector', val: (natVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Pathology Researcher', val: (fmVal + logicVal + gmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Veterinary Doctor', val: (natVal + gmVal + logicVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Animal & Plant Researcher', val: (natVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Geo-science', val: (fmVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Archeology', val: (natVal + logicVal + gmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Forest Officer', val: (natVal + gmVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Water Harvesting', val: (natVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Geoscience', val: (fmVal + logicVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Cricket', val: (viVal + fmVal + logicVal + gmVal) / 5, stars: 0, starsDisplay: '' },
    { name: 'Tennis', val: (gmVal + fmVal + viVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Football', val: (artVal + natVal + imgVal + logicVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Swimming', val: (artVal + natVal) / 2, stars: 0, starsDisplay: '' },
    { name: 'Snooker', val: (fmVal + logicVal + imgVal + logicVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Carom', val: (imgVal + fmVal + logicVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Athlete', val: (gmVal + fmVal + viVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Shooter', val: (natVal + fmVal) / 2, stars: 0, starsDisplay: '' },

    // New-Age Technology & AI
    { name: 'AI / ML Engineer', val: (logicVal + imgVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Data Scientist', val: (logicVal + natVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Prompt Engineer', val: (logicVal + langVal + imgVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Blockchain Developer', val: (logicVal + fmVal + natVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Cybersecurity Analyst', val: (logicVal + intraVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Cloud Architect', val: (logicVal + imgVal + viVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'DevOps Engineer', val: (logicVal + gmVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Full Stack Developer', val: (logicVal + imgVal + langVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Mobile App Developer', val: (logicVal + imgVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Game Developer', val: (logicVal + imgVal + viVal + gmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'AR / VR Developer', val: (imgVal + viVal + logicVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Robotics Engineer', val: (logicVal + gmVal + fmVal + natVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'IoT Specialist', val: (logicVal + natVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Quantum Computing Researcher', val: (logicVal + natVal + imgVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Web3 Developer', val: (logicVal + imgVal + fmVal + natVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'No-Code Developer', val: (imgVal + logicVal + viVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Chatbot Developer', val: (logicVal + langVal + imgVal + artVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'SaaS Product Manager', val: (logicVal + imgVal + artVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'API Product Manager', val: (logicVal + imgVal + langVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Solutions Architect', val: (logicVal + imgVal + viVal + artVal) / 4, stars: 0, starsDisplay: '' },

    // Design & Digital Creative
    { name: 'UX / UI Designer', val: (imgVal + viVal + artVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Product Designer', val: (imgVal + viVal + logicVal + artVal) / 4, stars: 0, starsDisplay: '' },
    { name: '3D Artist', val: (imgVal + viVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'VFX Artist', val: (imgVal + viVal + fmVal + muVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Motion Graphics Designer', val: (imgVal + viVal + muVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Digital Artist', val: (imgVal + viVal + artVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Sound Designer', val: (muVal + imgVal + fmVal + viVal) / 4, stars: 0, starsDisplay: '' },

    // Digital Marketing & Business
    { name: 'Growth Hacker', val: (logicVal + imgVal + artVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Digital Marketing Manager', val: (artVal + langVal + imgVal + logicVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'SEO Specialist', val: (logicVal + langVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Social Media Manager', val: (artVal + langVal + imgVal + viVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Content Strategist', val: (langVal + imgVal + artVal + logicVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Influencer Marketing Manager', val: (artVal + langVal + imgVal + viVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Performance Marketing Specialist', val: (logicVal + langVal + artVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Brand Strategist', val: (imgVal + artVal + langVal + viVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'E-commerce Manager', val: (logicVal + artVal + langVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Fintech Analyst', val: (logicVal + natVal + fmVal) / 3, stars: 0, starsDisplay: '' },
    { name: 'Affiliate Marketer', val: (artVal + langVal + logicVal + imgVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'CRM Specialist', val: (artVal + logicVal + langVal + fmVal) / 4, stars: 0, starsDisplay: '' },

    // Media & Creator Economy
    { name: 'YouTuber / Content Creator', val: (artVal + langVal + imgVal + viVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Podcast Producer', val: (muVal + langVal + artVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Video Editor', val: (viVal + muVal + fmVal + imgVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Live Streamer', val: (artVal + gmVal + langVal + imgVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Online Course Creator', val: (intraVal + langVal + artVal + logicVal) / 4, stars: 0, starsDisplay: '' },

    // Startup & Innovation
    { name: 'Startup Founder', val: (logicVal + artVal + imgVal + intraVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Product Manager', val: (logicVal + artVal + imgVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Venture Capitalist', val: (logicVal + artVal + langVal + natVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Angel Investor', val: (logicVal + artVal + natVal + intraVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Innovation Consultant', val: (imgVal + logicVal + artVal + viVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Digital Transformation Consultant', val: (logicVal + artVal + imgVal + langVal) / 4, stars: 0, starsDisplay: '' },

    // Science & Emerging Tech
    { name: 'Bioinformatician', val: (natVal + logicVal + fmVal + imgVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Nanotechnologist', val: (natVal + logicVal + fmVal + viVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Genetic Counselor', val: (natVal + artVal + intraVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Space Scientist', val: (natVal + logicVal + imgVal + viVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Drone Pilot / Engineer', val: (viVal + gmVal + logicVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Renewable Energy Engineer', val: (natVal + logicVal + gmVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Smart City Planner', val: (logicVal + natVal + imgVal + viVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Environmental Engineer', val: (natVal + logicVal + gmVal + fmVal) / 4, stars: 0, starsDisplay: '' },

    // Health & Wellness Tech
    { name: 'Health Tech Developer', val: (logicVal + natVal + fmVal + artVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Wellness Coach', val: (intraVal + artVal + natVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Yoga Instructor', val: (intraVal + gmVal + muVal + artVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Fitness Entrepreneur', val: (gmVal + artVal + intraVal + logicVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Nutrition Tech Founder', val: (natVal + logicVal + artVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Mental Health Counselor', val: (intraVal + artVal + langVal + muVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Telemedicine Specialist', val: (natVal + logicVal + fmVal + artVal) / 4, stars: 0, starsDisplay: '' },

    // Data & Analytics
    { name: 'Data Engineer', val: (logicVal + fmVal + natVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Business Intelligence Analyst', val: (logicVal + langVal + artVal + natVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Data Visualization Specialist', val: (viVal + logicVal + imgVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Quantitative Analyst', val: (logicVal + fmVal + natVal) / 3, stars: 0, starsDisplay: '' },

    // Sustainability & ESG
    { name: 'Sustainability Consultant', val: (natVal + logicVal + artVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'ESG Analyst', val: (natVal + logicVal + artVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Climate Data Scientist', val: (natVal + logicVal + imgVal + fmVal) / 4, stars: 0, starsDisplay: '' },

    // Modern Services
    { name: 'Cloud Consultant', val: (logicVal + artVal + langVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'AI Ethics Specialist', val: (intraVal + artVal + logicVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Remote Work Consultant', val: (intraVal + artVal + logicVal + langVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'EdTech Developer', val: (logicVal + langVal + intraVal + imgVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Legal Tech Consultant', val: (logicVal + langVal + fmVal + intraVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'HR Tech Specialist', val: (artVal + intraVal + logicVal + fmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Technical Writer', val: (langVal + logicVal + fmVal + intraVal) / 4, stars: 0, starsDisplay: '' },

    // Gaming & Esports
    { name: 'Esports Player', val: (gmVal + viVal + logicVal + artVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Game Designer', val: (imgVal + viVal + logicVal + artVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Game Tester', val: (viVal + fmVal + logicVal + gmVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Esports Coach', val: (artVal + gmVal + logicVal + intraVal) / 4, stars: 0, starsDisplay: '' },
    { name: 'Game Streamer', val: (artVal + gmVal + langVal + viVal) / 4, stars: 0, starsDisplay: '' },

    // Other Popular Modern
    { name: 'Dropshipping Entrepreneur', val: (logicVal + artVal + langVal + natVal) / 4, stars: 0, starsDisplay: '' },
  ]
}

/* ───────────────────────── Big Five Interpretation ───────────────────────── */

function interpretBigFive(key: 'O' | 'C' | 'E' | 'A' | 'N', p: number): string {
  const ranges: Record<string, { min: number; max: number; label: string }[]> = {
    O: [
      { min: 0, max: 20, label: 'Very Low — You prefer routine and tradition. New ideas need proof before you accept them.' },
      { min: 20, max: 40, label: 'Low — You are practical and grounded. You enjoy familiar experiences but can be open when convinced.' },
      { min: 40, max: 60, label: 'Average — You balance curiosity with caution. You can think creatively when needed.' },
      { min: 60, max: 80, label: 'High — You love new ideas and artistic experiences.' },
      { min: 80, max: 101, label: 'Very High — You are deeply curious and imaginative. You might get bored with routine.' },
    ],
    C: [
      { min: 0, max: 20, label: 'Very Low — You prefer flexibility over structure. Deadlines feel like suggestions.' },
      { min: 20, max: 40, label: 'Low — Too much structure feels suffocating.' },
      { min: 40, max: 60, label: 'Average — You can be organized when it matters, but also relax the rules.' },
      { min: 60, max: 80, label: 'High — You are reliable, disciplined, and goal-oriented.' },
      { min: 80, max: 101, label: 'Very High — You are extremely disciplined. Watch out for perfectionism and burnout.' },
    ],
    E: [
      { min: 0, max: 20, label: 'Very Low — Deeply introverted. You recharge alone.' },
      { min: 20, max: 40, label: 'Low — Reserved. You prefer deep conversations over big groups.' },
      { min: 40, max: 60, label: 'Average — Ambivert — you enjoy social time but also need solitude.' },
      { min: 60, max: 80, label: 'High — Energized by people. You enjoy groups and discussions.' },
      { min: 80, max: 101, label: 'Very High — Extremely outgoing. You may struggle with solitude.' },
    ],
    A: [
      { min: 0, max: 20, label: 'Very Low — You are direct and competitive. Truth over harmony.' },
      { min: 20, max: 40, label: 'Low — Assertive and independent. You cooperate but stand your ground.' },
      { min: 40, max: 60, label: 'Average — You balance kindness with honesty.' },
      { min: 60, max: 80, label: 'High — Warm, empathetic, and cooperative.' },
      { min: 80, max: 101, label: 'Very High — Extremely empathetic. May struggle with boundaries.' },
    ],
    N: [
      { min: 0, max: 20, label: 'Very Low — Emotionally very stable. Stress barely affects you.' },
      { min: 20, max: 40, label: 'Low — Calm and resilient. You handle most stress well.' },
      { min: 40, max: 60, label: 'Average — Normal emotional ups and downs. You can manage stress.' },
      { min: 60, max: 80, label: 'High — More sensitive to stress. You feel emotions intensely.' },
      { min: 80, max: 101, label: 'Very High — Emotions are very intense. You may need stronger coping strategies.' },
    ],
  }
  const r = ranges[key] || ranges.O
  const match = r.find(rr => p >= rr.min && p < rr.max) || r[r.length - 1]
  return match.label
}

/* ───────────────────────── Strengths Generator ───────────────────────── */

function generateTopStrengths(topIntellKeys: string[]): StrengthEntry[] {
  const strengthsMap: Record<string, string[]> = {
    art: ['Empathy', 'Relator', 'Developer', 'Harmony'],
    lit: ['Communication', 'Context', 'Information Drive'],
    img: ['Ideation', 'Futuristic', 'Strategic'],
    gm: ['Achiever', 'Activator', 'Competition'],
    mu: ['Ideation', 'Information Drive', 'Learner'],
    vi: ['Strategic', 'Futuristic', 'Ideation'],
    intra: ['Discipline', 'Focus', 'Responsibility', 'Self-Assurance'],
    logic: ['Analytical', 'Deliberative', 'Intellection'],
    fm: ['Consistency', 'Arranger', 'Restorative'],
    lang: ['Communication', 'Woo', 'Command'],
    nat: ['Connectedness', 'Adaptability', 'Context'],
  }

  const strengthsThemes: Record<string, { domain: string; shortDesc: string }> = {
    'Empathy': { domain: 'Relationship Building', shortDesc: 'You can sense the emotions of people around you.' },
    'Relator': { domain: 'Relationship Building', shortDesc: 'You are drawn to deep, genuine relationships.' },
    'Developer': { domain: 'Relationship Building', shortDesc: 'You see potential in others and want to help them grow.' },
    'Harmony': { domain: 'Relationship Building', shortDesc: 'You look for areas of agreement rather than conflict.' },
    'Communication': { domain: 'Influencing', shortDesc: 'You find it easy to put thoughts into words.' },
    'Context': { domain: 'Strategic Thinking', shortDesc: 'You understand the present by looking at the past.' },
    'Information Drive': { domain: 'Strategic Thinking', shortDesc: 'You are fascinated by collecting and organizing information.' },
    'Ideation': { domain: 'Strategic Thinking', shortDesc: 'You are fascinated by ideas and find connections between things.' },
    'Futuristic': { domain: 'Strategic Thinking', shortDesc: 'You are inspired by what could be in the future.' },
    'Strategic': { domain: 'Strategic Thinking', shortDesc: 'You can see multiple paths and choose the best one.' },
    'Achiever': { domain: 'Executing', shortDesc: 'You have a constant drive to accomplish something every day.' },
    'Activator': { domain: 'Executing', shortDesc: 'You turn ideas into action.' },
    'Competition': { domain: 'Executing', shortDesc: 'You measure yourself against others and want to win.' },
    'Discipline': { domain: 'Executing', shortDesc: 'You enjoy routine and structure.' },
    'Focus': { domain: 'Executing', shortDesc: 'You take a direction and stay on track.' },
    'Responsibility': { domain: 'Executing', shortDesc: 'You take psychological ownership of what you commit to.' },
    'Self-Assurance': { domain: 'Executing', shortDesc: 'You have confidence in your own judgment.' },
    'Analytical': { domain: 'Strategic Thinking', shortDesc: 'You search for reasons, data, and evidence.' },
    'Deliberative': { domain: 'Executing', shortDesc: 'You are careful and vigilant.' },
    'Intellection': { domain: 'Strategic Thinking', shortDesc: 'You enjoy thinking and mental activity.' },
    'Consistency': { domain: 'Executing', shortDesc: 'You treat everyone the same — fairness matters.' },
    'Arranger': { domain: 'Executing', shortDesc: 'You can coordinate people and resources.' },
    'Restorative': { domain: 'Executing', shortDesc: 'You are good at figuring out what is wrong and fixing it.' },
    'Woo': { domain: 'Influencing', shortDesc: 'You enjoy meeting new people and winning them over.' },
    'Command': { domain: 'Influencing', shortDesc: 'You naturally take control of situations.' },
    'Connectedness': { domain: 'Relationship Building', shortDesc: 'You believe things happen for a reason.' },
    'Adaptability': { domain: 'Relationship Building', shortDesc: 'You prefer to go with the flow.' },
    'Learner': { domain: 'Strategic Thinking', shortDesc: 'You love the process of learning.' },
  }

  const candidateStrengths: { name: string; domain: string; source: string }[] = []
  topIntellKeys.forEach(k => {
    strengthsMap[k]?.forEach(s => {
      if (!candidateStrengths.find(c => c.name === s)) {
        candidateStrengths.push({ name: s, domain: strengthsThemes[s]?.domain || '', source: k })
      }
    })
  })

  return candidateStrengths.slice(0, 5).map(s => ({
    ...s,
    shortDesc: strengthsThemes[s.name]?.shortDesc || '',
  }))
}

/* ───────────────────────── Workplace / Behavioral Helpers ───────────────────────── */

function getWorkStyle(disc: string): { label: string; desc: string } {
  const styles: Record<string, { label: string; desc: string }> = {
    D: { label: 'Results-Oriented', desc: 'You prefer fast-paced, goal-driven work. You like autonomy, clear targets, and minimal meetings. "Get it done" is your motto.' },
    I: { label: 'People-Oriented', desc: 'You prefer collaborative, social work environments. You thrive on brainstorming sessions, team projects, and recognition. "Lets figure it out together" is your approach.' },
    S: { label: 'Process-Oriented', desc: 'You prefer steady, predictable work with clear procedures. You like knowing what to expect and having time to do quality work. "Slow and steady" is your rhythm.' },
    C: { label: 'Detail-Oriented', desc: 'You prefer structured, analytical work where accuracy matters most. You like having time to think, research, and get things right. "Measure twice, cut once" is your approach.' },
  }
  return styles[disc] || styles.D
}

function getDecisionMaking(disc: string): { label: string; desc: string } {
  const styles: Record<string, { label: string; desc: string }> = {
    D: { label: 'Fast & Decisive', desc: 'You make decisions quickly based on available information. You trust your gut and are comfortable with uncertainty. Risk: making decisions before all facts are in.' },
    I: { label: 'Collaborative & Intuitive', desc: 'You prefer making decisions through discussion and input from others. You trust your instincts about people and situations. Risk: over-consulting and slow decisions.' },
    S: { label: 'Methodical & Careful', desc: 'You prefer to gather all information, consider all impacts, and make decisions gradually. Risk: analysis paralysis.' },
    C: { label: 'Analytical & Data-Driven', desc: 'You make decisions based on data, research, and logical analysis. You need evidence before moving forward. Risk: over-researching and missing opportunities.' },
  }
  return styles[disc] || styles.D
}

function getConflictStyle(disc: string): { label: string; desc: string } {
  const styles: Record<string, { label: string; desc: string }> = {
    D: { label: 'Direct & Assertive', desc: 'You address conflict head-on. You state your position clearly and expect others to do the same. You want resolution, not avoidance.' },
    I: { label: 'Diplomatic & Expressive', desc: 'You try to smooth things over and find a middle ground. You express your feelings openly and want everyone to feel heard.' },
    S: { label: 'Accommodating & Patient', desc: 'You prefer to avoid conflict when possible. When it happens, you listen more than you speak and try to find harmony.' },
    C: { label: 'Logical & Factual', desc: 'You approach conflict with data and reasoning. You want to understand the root cause and find a systematic solution.' },
  }
  return styles[disc] || styles.D
}

function getFeedbackPreference(disc: string): { label: string; desc: string } {
  const prefs: Record<string, { label: string; desc: string }> = {
    D: { label: 'Brief & Direct', desc: 'Give me the headline, not the story. Tell me what I did well and what to improve. Skip the fluff.' },
    I: { label: 'Personal & Encouraging', desc: 'Start with what I did well, then share improvements. Make it a conversation, not a lecture. I want to feel valued.' },
    S: { label: 'Private & Gentle', desc: 'Give me feedback one-on-one, not in front of others. Be specific and kind. Give me time to process before responding.' },
    C: { label: 'Detailed & Evidence-Based', desc: 'Show me the data. I want specific examples, not vague impressions. Written feedback I can review works best.' },
  }
  return prefs[disc] || prefs.D
}

function getMotivationDrivers(disc: string): string[] {
  const drivers: Record<string, string[]> = {
    D: ['Results and achievement', 'Autonomy and control', 'Challenge and competition', 'Recognition for accomplishments'],
    I: ['Social connection and belonging', 'Recognition and appreciation', 'Creative expression', 'Fun and variety'],
    S: ['Stability and security', 'Sincere appreciation', 'Clear expectations', 'Being part of a supportive team'],
    C: ['Accuracy and quality', 'Knowledge and expertise', 'Independence to do thorough work', 'Recognition for expertise'],
  }
  return drivers[disc] || drivers.D
}

function getRiskTolerance(disc: string): { label: string; desc: string } {
  const tolerances: Record<string, { label: string; desc: string }> = {
    D: { label: 'High Risk Tolerance', desc: 'You are comfortable taking calculated risks. You see risk as opportunity and are willing to bet on yourself.' },
    I: { label: 'Moderate-High Risk Tolerance', desc: 'You enjoy new ventures, especially if others are excited too. You may underestimate risk when enthusiastic.' },
    S: { label: 'Low Risk Tolerance', desc: 'You prefer safe, predictable paths. You need strong evidence before taking risks. Change feels uncomfortable.' },
    C: { label: 'Calculated Risk Tolerance', desc: 'You only take risks when you have thoroughly analyzed the probabilities. You minimize risk through preparation.' },
  }
  return tolerances[disc] || tolerances.D
}

function getIdealManager(disc: string): { label: string; desc: string } {
  const managers: Record<string, { label: string; desc: string }> = {
    D: { label: 'Autonomy-Giving Leader', desc: 'You thrive under managers who set clear goals then get out of your way. You dislike micromanagement and want the freedom to choose your methods.' },
    I: { label: 'Inspiring & Social Leader', desc: 'You thrive under managers who are enthusiastic, give frequent positive feedback, and create a fun team culture.' },
    S: { label: 'Supportive & Patient Leader', desc: 'You thrive under managers who are approachable, give clear instructions, and provide stability. You value loyalty and long-term relationships.' },
    C: { label: 'Expert & Structured Leader', desc: 'You thrive under managers who are knowledgeable, provide clear processes, and respect your need for accuracy and independence.' },
  }
  return managers[disc] || managers.D
}

function getTeamRole(disc: string, _strengthsDomain: string): { label: string; desc: string } {
  const roles: Record<string, { label: string; desc: string }> = {
    D: { label: 'Driver / Shaper', desc: 'You push the team toward goals, make tough calls, and keep things moving when momentum drops.' },
    I: { label: 'Energizer / Connector', desc: 'You keep morale high, connect team members, ensure everyone feels included, and champion new ideas.' },
    S: { label: 'Stabilizer / Implementer', desc: 'You ensure plans are executed thoroughly, maintain team harmony, and provide the consistency that keeps projects on track.' },
    C: { label: 'Analyst / Quality Controller', desc: 'You catch errors others miss, ensure standards are met, and provide the research and data needed for sound decisions.' },
  }
  return roles[disc] || roles.D
}

function getTransferableSkills(topIntellKeys: string[]): string[] {
  const skillMap: Record<string, string[]> = {
    art: ['Active listening', 'Conflict resolution', 'Team building', 'Persuasion', 'Customer relationship management'],
    lit: ['Written communication', 'Storytelling', 'Critical analysis', 'Research', 'Creative expression'],
    img: ['Innovation', 'Strategic thinking', 'Problem reframing', 'Visualization', 'Design thinking'],
    gm: ['Physical coordination', 'Endurance', 'Hands-on execution', 'Adaptability', 'Crisis management'],
    mu: ['Pattern recognition', 'Timing and rhythm', 'Creative expression', 'Auditory analysis', 'Emotional attunement'],
    vi: ['Visual analysis', 'Spatial reasoning', 'Design and layout', 'Attention to detail', 'Data visualization'],
    intra: ['Self-motivation', 'Independent work', 'Self-reflection', 'Goal-setting', 'Emotional regulation'],
    logic: ['Analytical reasoning', 'Data analysis', 'Problem decomposition', 'Systems thinking', 'Decision frameworks'],
    fm: ['Precision and dexterity', 'Quality control', 'Detailed craftsmanship', 'Hand-eye coordination', 'Technical aptitude'],
    lang: ['Verbal communication', 'Public speaking', 'Negotiation', 'Teaching', 'Cross-cultural communication'],
    nat: ['Environmental awareness', 'Classification', 'Observation', 'Systems thinking', 'Sustainability mindset'],
  }
  const skills: string[] = []
  topIntellKeys.forEach(k => {
    skillMap[k]?.forEach(s => { if (!skills.includes(s)) skills.push(s) })
  })
  return skills.slice(0, 10)
}

function getBridgeCareers(topIntellKeys: string[], _hollandTop2: string[], _streamTop: string): string[] {
  const bridgeMap: Record<string, string[]> = {
    art: ['HR Manager', 'Teacher/Trainer', 'Social Media Manager', 'Customer Success Lead', 'Community Manager'],
    logic: ['Data Analyst moving to Product Manager', 'Engineer moving to Technical Sales', 'Accountant moving to Business Consultant', 'Researcher moving to Policy Advisor'],
    img: ['Designer moving to UX Research', 'Artist moving to Creative Direction', 'Architect moving to Innovation Consulting', 'Content Creator moving to Brand Strategy'],
    lang: ['Writer moving to Content Strategy', 'Teacher moving to Corporate Training', 'Translator moving to Localization Manager', 'Journalist moving to PR Director'],
    intra: ['Developer moving to Freelance Consultant', 'Researcher moving to Independent Author', 'Accountant moving to Financial Advisor', 'Analyst moving to Executive Coach'],
    gm: ['Athlete moving to Fitness Entrepreneur', 'Coach moving to Wellness Brand Founder', 'Military moving to Project Management', 'Physical therapist moving to Health Tech Startup'],
    fm: ['Technician moving to Quality Assurance Manager', 'Artist moving to Product Designer', 'Chef moving to Food Brand Entrepreneur', 'Mechanic moving to Operations Manager'],
    mu: ['Musician moving to Audio Production Entrepreneur', 'Performer moving to Event Management', 'Teacher moving to EdTech Startup', 'Sound engineer moving to Media Startup'],
    vi: ['Photographer moving to Visual Content Agency', 'Designer moving to Creative Director', 'Architect moving to Real Estate Developer', 'Animator moving to Game Studio Founder'],
    nat: ['Biologist moving to Sustainability Consultant', 'Environmental scientist moving to Green Tech Startup', 'Veterinarian moving to Pet Care Franchise', 'Farmer moving to AgriTech Entrepreneur'],
  }
  const careers: string[] = []
  topIntellKeys.forEach(k => {
    bridgeMap[k]?.forEach(c => { if (!careers.includes(c)) careers.push(c) })
  })
  return careers.slice(0, 8)
}

function getCognitiveFitnessRecommendations(topIntellKeys: string[]): { intelligence: string; recommendation: string }[] {
  const recMap: Record<string, string> = {
    art: 'Social learning groups, book clubs about psychology, volunteer work with people',
    lit: 'Reading diverse genres, creative writing workshops, journaling practice',
    img: 'Mind mapping, visual puzzles, design challenges, brainstorming sessions',
    gm: 'Physical exercise (especially new movements), dance, martial arts, manual hobbies',
    mu: 'Learning an instrument, singing in a group, music therapy, rhythmic activities',
    vi: 'Visual puzzles, spatial games like chess/Go, drawing practice, navigation challenges',
    intra: 'Mindfulness meditation, journaling, solo reflection walks, therapy/self-analysis',
    logic: 'Math puzzles, strategy games, programming courses, debate clubs',
    fm: 'Crafts, building models, instrument practice, calligraphy, cooking',
    lang: 'Learning a new language, public speaking clubs, writing groups, podcast listening',
    nat: 'Nature walks, gardening, bird watching, environmental volunteering, classification hobbies',
  }
  return topIntellKeys.map(k => ({ intelligence: k, recommendation: recMap[k] || 'Cross-training activities' }))
}

function getStressSignature(disc: string): { physical: string; emotional: string; cognitive: string } {
  const sigs: Record<string, { physical: string; emotional: string; cognitive: string }> = {
    D: { physical: 'Muscle tension, headaches, jaw clenching', emotional: 'Irritability, impatience, feeling out of control', cognitive: 'Racing thoughts, tunnel vision, over-focusing on problems' },
    I: { physical: 'Fatigue, shallow breathing, restless energy', emotional: 'Anxiety about social rejection, mood swings, feeling overlooked', cognitive: 'Scattered thoughts, catastrophizing, difficulty concentrating' },
    S: { physical: 'Stomach issues, sleep disturbance, low energy', emotional: 'Withdrawal, passive sadness, feeling overwhelmed by change', cognitive: 'Rumination, indecision, pessimistic thinking' },
    C: { physical: 'Digestive issues, insomnia, neck/shoulder tension', emotional: 'Self-criticism, fear of making mistakes, frustration with disorder', cognitive: 'Over-analysis, perfectionism paralysis, excessive self-doubt' },
  }
  return sigs[disc] || sigs.D
}

function getRecoveryActivities(topIntellKeys: string[], disc: string): { discBased: string; intelligenceBased: { intelligence: string; activity: string }[] } {
  const discRec: Record<string, string> = {
    D: 'Competitive sports, martial arts, hiking challenging trails, goal-setting sessions',
    I: 'Social gatherings, group fitness classes, creative workshops, team sports',
    S: 'Nature walks, gentle yoga, gardening, cooking, time with close friends',
    C: 'Solo research projects, puzzles, structured exercise routines, reading',
  }
  const intellMap: Record<string, string> = {
    art: 'Volunteering with people, group discussions, mentoring',
    img: 'Creative hobbies, drawing, design challenges',
    logic: 'Puzzle games, coding, strategic planning',
    intra: 'Meditation, journaling, solo reflection',
    lang: 'Book club, podcasting, learning a language',
    mu: 'Music listening, singing, rhythmic movement',
    gm: 'Physical exercise, dance, outdoor activities',
    vi: 'Photography, sketching, visual arts',
    fm: 'Crafts, cooking, building models',
    nat: 'Gardening, nature walks, animal care',
    lit: 'Creative writing, reading fiction, storytelling',
  }
  const intellRec = topIntellKeys.slice(0, 3).map(k => ({
    intelligence: k,
    activity: intellMap[k] || 'Cross-training activities',
  }))
  return { discBased: discRec[disc] || discRec.D, intelligenceBased: intellRec }
}

function getPurposeAlignment(topIntellKeys: string[]): string[] {
  const purposeMap: Record<string, string> = {
    art: 'Helping others grow and feel understood — your purpose involves human connection.',
    lit: 'Creating meaning through words and stories — your purpose involves expression and narrative.',
    img: 'Imagining new possibilities — your purpose involves innovation and seeing what could be.',
    gm: 'Living fully through action and experience — your purpose involves embodiment and doing.',
    mu: 'Creating harmony and beauty — your purpose involves bringing order through rhythm and pattern.',
    vi: 'Seeing what others miss — your purpose involves clarity, design, and visual truth.',
    intra: 'Understanding yourself deeply — your purpose involves self-knowledge and inner truth.',
    logic: 'Finding truth through reason — your purpose involves uncovering how things really work.',
    fm: 'Crafting excellence with your hands — your purpose involves precision and mastery.',
    lang: 'Connecting people through words — your purpose involves communication and understanding.',
    nat: 'Understanding the natural world — your purpose involves stewardship and interconnection.',
  }
  return topIntellKeys.slice(0, 3).map(k => purposeMap[k]).filter(Boolean) as string[]
}

/* ───────────────────────── SWOT, Acquiring, Extra, Lobes, Sub-intelligences ───────────────────────── */

function generateSWOT(intelligenceData: IntelligenceDatum[], dominantDISC: DominantDisc, brainSide: string): SwotAnalysis {
  const sorted = [...intelligenceData].sort((a, b) => b.manifested - a.manifested)
  const top3 = sorted.slice(0, 3).map(d => d.name.split('(')[0].trim())
  const bottom3 = sorted.slice(-3).map(d => d.name.split('(')[0].trim())
  const discP = dominantDISC.primary

  return {
    strengths: [
      `Strong ${top3[0]} ability with natural aptitude`,
      `Brain dominance: ${brainSide === 'balanced' ? 'Balanced thinking' : brainSide + '-brain oriented'}`,
      `DISC primary: ${discP}-type gives you ${discP === 'D' ? 'decisiveness' : discP === 'I' ? 'social agility' : discP === 'S' ? 'reliability' : 'analytical precision'}`,
    ],
    weaknesses: [
      `${bottom3[0]} may need extra development effort`,
      `${discP === 'D' ? 'May overlook emotional nuances' : discP === 'I' ? 'May lack follow-through' : discP === 'S' ? 'May resist necessary change' : 'May over-analyze and delay action'}`,
      `${brainSide === 'balanced' ? 'May need to consciously develop both hemispheres' : 'Could benefit from strengthening ' + (brainSide === 'right' ? 'left' : 'right') + '-brain skills'}`,
    ],
    opportunities: [
      `Leverage ${top3[0]} and ${top3[1]} in career selection`,
      `Targeted training can rapidly improve ${bottom3[0]}`,
      `Cross-disciplinary roles suit your mixed intelligence profile`,
    ],
    threats: [
      `Over-reliance on ${top3[0]} may create blind spots`,
      `Misalignment between natural style and environment`,
      `Burnout if weaker areas are neglected for too long`,
    ],
  }
}

function generateAcquiringMethods(discProfile: DiscProfile, learningStyle: Record<string, LearningStyleEntry>, sensory: Record<string, SensoryEntry>): AcquiringMethods {
  const topDisc = Object.entries(discProfile).sort((a, b) => b[1].percent - a[1].percent)[0][0]
  const topLearning = Object.entries(learningStyle).sort((a, b) => b[1].percent - a[1].percent)[0][0]
  const topSense = Object.entries(sensory).sort((a, b) => b[1].percent - a[1].percent)[0][0]

  const methods: AcquiringMethod[] = []
  if (topLearning === 'Kinesthetic') methods.push({ name: 'Experiential Learning', desc: 'You learn best by doing. Hands-on labs, building projects, and physical practice are your fastest paths to mastery.', color: '#ef4444' })
  if (topLearning === 'Auditory') methods.push({ name: 'Auditory Acquisition', desc: 'Lectures, discussions, and verbal explanations work best for you. Record and replay key concepts.', color: '#f59e0b' })
  if (topLearning === 'Visual') methods.push({ name: 'Visual Learning', desc: 'Diagrams, charts, videos, and written notes are your best tools. Use color-coding and mind maps.', color: '#3b82f6' })

  if (topDisc === 'D') methods.push({ name: 'Action-Oriented', desc: 'You acquire knowledge best when there is a clear goal and immediate application. Case studies and competitive exercises help.', color: '#10b981' })
  if (topDisc === 'I') methods.push({ name: 'Social Learning', desc: 'Group study, teaching others, and interactive workshops accelerate your learning. You need discussion and energy.', color: '#8b5cf6' })
  if (topDisc === 'S') methods.push({ name: 'Reflective Practice', desc: 'You need time to absorb information. Written summaries, repetition, and step-by-step guides work best.', color: '#06b6d4' })
  if (topDisc === 'C') methods.push({ name: 'Structured Study', desc: 'Detailed documentation, research papers, and systematic courses suit you. You need evidence and logical flow.', color: '#f43f5e' })

  if (topSense === 'Touch') methods.push({ name: 'Tactile Engagement', desc: 'Manipulating objects, writing by hand, and physical models enhance your retention.', color: '#14b8a6' })
  if (topSense === 'See') methods.push({ name: 'Observational Learning', desc: 'Watching demonstrations and studying visual examples gives you strong recall.', color: '#6366f1' })

  return { primary: methods[0], secondary: methods[1] || methods[0], all: methods }
}

function generateExtraCurricular(topIntellKeys: string[], discP: string): string[] {
  const activityMap: Record<string, string[]> = {
    art: ['Debate Club', 'Student Council', 'Community Service', 'Peer Counseling'],
    lit: ['Creative Writing', 'Literary Magazine', 'Poetry Slams', 'Book Club'],
    img: ['Robotics', 'Design Club', 'Drama & Theatre', 'Innovation Hackathons'],
    gm: ['Football / Soccer', 'Basketball', 'Athletics', 'Martial Arts'],
    mu: ['School Band', 'Choir', 'Music Production', 'Dance Troupe'],
    vi: ['Photography Club', 'Art Club', 'Graphic Design', 'Film Making'],
    intra: ['Chess Club', 'Meditation Group', 'Solo Research Projects', 'Journaling'],
    logic: ['Math Olympiad', 'Coding Club', 'Science Fair', 'Quiz Competitions'],
    fm: ['Pottery', 'Woodworking', 'Model Building', 'Origami Club'],
    lang: ['Public Speaking', 'Model UN', 'Drama', 'Language Clubs'],
    nat: ['Gardening Club', 'Nature Walks', 'Bird Watching', 'Environmental Activism'],
  }

  const activities: string[] = []
  topIntellKeys.forEach(k => {
    activityMap[k]?.forEach(a => { if (!activities.includes(a)) activities.push(a) })
  })

  const discActivities: Record<string, string[]> = {
    D: ['Leadership Camps', 'Entrepreneurship Challenges', 'Competitive Sports'],
    I: ['Theatre', 'Anchoring / Hosting', 'Team Sports'],
    S: ['Volunteering', 'Music Ensemble', 'Mentoring Programs'],
    C: ['Chess', 'Programming', 'Science Clubs'],
  }
  discActivities[discP]?.forEach(a => { if (!activities.includes(a)) activities.push(a) })

  return activities.slice(0, 10)
}

function generateBrainLobes(fingerRCAnalysis: FingerRCAnalysisEntry[]): BrainLobeEntry[] {
  const lobeNames = ['Pre-frontal', 'Frontal', 'Parietal', 'Temporal', 'Occipital']
  return lobeNames.map(lobe => {
    const left = fingerRCAnalysis.find(f => f.brainLobe === lobe && f.hemisphere === 'Left')
    const right = fingerRCAnalysis.find(f => f.brainLobe === lobe && f.hemisphere === 'Right')
    const leftRC = left ? left.ridgeCount : 0
    const rightRC = right ? right.ridgeCount : 0
    const total = leftRC + rightRC
    const dominant = leftRC > rightRC ? 'Left' : (rightRC > leftRC ? 'Right' : 'Balanced')
    return {
      lobe,
      left: { rc: leftRC, pattern: left?.pattern || '-', function: left?.function || '-' },
      right: { rc: rightRC, pattern: right?.pattern || '-', function: right?.function || '-' },
      total,
      dominant,
      development: total >= 25 ? 'High' : total >= 15 ? 'Moderate' : total >= 8 ? 'Average' : 'Developing',
    }
  })
}

function generateSubIntelligences(rbDist: Record<string, number>): SubIntelligence[] {
  const subs = [
    { key: 'planning', name: 'Planning', parent: 'logic', value: rbDist['logic'] * 0.6 + rbDist['intra'] * 0.4 },
    { key: 'reasoning', name: 'Reasoning', parent: 'logic', value: rbDist['logic'] * 0.7 + rbDist['lang'] * 0.3 },
    { key: 'numerical', name: 'Numerical', parent: 'logic', value: rbDist['logic'] * 0.8 + rbDist['fm'] * 0.2 },
    { key: 'geometry', name: 'Geometry', parent: 'logic', value: rbDist['logic'] * 0.5 + rbDist['vi'] * 0.5 },
    { key: 'verbal', name: 'Verbal', parent: 'lang', value: rbDist['lang'] * 0.7 + rbDist['art'] * 0.3 },
    { key: 'writing', name: 'Writing', parent: 'lang', value: rbDist['lang'] * 0.5 + rbDist['lit'] * 0.5 },
    { key: 'nonverbal', name: 'Non-Verbal', parent: 'vi', value: rbDist['vi'] * 0.6 + rbDist['img'] * 0.4 },
    { key: 'observation', name: 'Observation', parent: 'vi', value: rbDist['vi'] * 0.7 + rbDist['nat'] * 0.3 },
    { key: 'threed', name: '3D Ideas', parent: 'img', value: rbDist['img'] * 0.6 + rbDist['vi'] * 0.4 },
    { key: 'social', name: 'Social', parent: 'art', value: rbDist['art'] * 0.7 + rbDist['lang'] * 0.3 },
    { key: 'emotion', name: 'Emotion', parent: 'art', value: rbDist['art'] * 0.5 + rbDist['mu'] * 0.5 },
    { key: 'motivation', name: 'Motivation', parent: 'intra', value: rbDist['intra'] * 0.7 + rbDist['art'] * 0.3 },
    { key: 'voicetone', name: 'Voice Tone', parent: 'mu', value: rbDist['mu'] * 0.6 + rbDist['lang'] * 0.4 },
    { key: 'processing', name: 'Processing', parent: 'mu', value: rbDist['mu'] * 0.5 + rbDist['logic'] * 0.5 },
    { key: 'grossmotor', name: 'Gross Motor', parent: 'gm', value: rbDist['gm'] * 0.7 + rbDist['vi'] * 0.3 },
    { key: 'finemotor', name: 'Fine Motor', parent: 'fm', value: rbDist['fm'] * 0.7 + rbDist['logic'] * 0.3 },
    { key: 'senses', name: 'Senses', parent: 'nat', value: rbDist['nat'] * 0.6 + rbDist['gm'] * 0.4 },
    { key: 'spiritual', name: 'Spiritual', parent: 'intra', value: rbDist['intra'] * 0.5 + rbDist['img'] * 0.5 },
    { key: 'inter', name: 'Interpersonal', parent: 'art', value: rbDist['art'] },
  ]

  const total = subs.reduce((s, v) => s + v.value, 0)
  return subs.map(s => ({
    ...s,
    percent: total > 0 ? s.value / total : 0,
    stars: starRating(total > 0 ? s.value / total : 0),
    starsDisplay: starString(starRating(total > 0 ? s.value / total : 0)),
  })).sort((a, b) => b.value - a.value)
}
