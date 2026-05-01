export interface FingerprintData {
    patterns: string[];
    ridgeCounts: number[];
    atdLeft: number;
    atdRight: number;
    tier?: string;
}
export interface PatternInfo {
    code: string;
    name: string;
    type: string;
}
export interface FingerManifested {
    key: string;
    code: string;
    ridgeCount: number;
    raw: number;
}
export interface IntelligenceDatum {
    key: string;
    name: string;
    manifested: number;
    stars: number;
    starsDisplay: string;
    side: string;
}
export interface PersonalityDatum {
    code: string;
    personality: string;
    name: string;
    disc: string;
}
export interface DiscProfile {
    D: {
        count: number;
        percent: number;
    };
    I: {
        count: number;
        percent: number;
    };
    S: {
        count: number;
        percent: number;
    };
    C: {
        count: number;
        percent: number;
    };
}
export interface DominantDisc {
    primary: string;
    secondary: string;
    code: string;
}
export interface AtdInterpretation {
    speed: string;
    level: number;
}
export interface M19Entry {
    name: string;
    value: number;
    stars: number;
    starsDisplay: string;
}
export interface CareerEntry {
    name: string;
    val: number;
    stars: number;
    starsDisplay: string;
}
export interface LearningStyleEntry {
    value: number;
    percent: number;
}
export interface SensoryEntry {
    value: number;
    percent: number;
}
export interface QuotientInterpretation {
    iq: string;
    eq: string;
    cq: string;
    aq: string;
}
export interface ObjectConcept {
    leftObject: number;
    leftConcept: number;
    rightObject: number;
    rightConcept: number;
    objectTotal: number;
    conceptTotal: number;
    executorL: number;
    thinkerL: number;
    executorR: number;
    thinkerR: number;
}
export interface HollandEntry {
    name: string;
    value: number;
    raw: number;
    stars: number;
    starsDisplay: string;
}
export interface McKenzieEntry {
    value: number;
    raw: number;
}
export interface StreamEntry {
    value: number;
    raw: number;
}
export interface EiScore {
    value: number;
    percent: number;
}
export interface EiScores {
    selfAwareness: EiScore;
    selfRegulation: EiScore;
    empathy: EiScore;
    socialSkills: EiScore;
}
export interface BigFiveEntry {
    name: string;
    raw: number;
    value: number;
    color: string;
    percent?: number;
    interpretation?: string;
}
export interface StrengthEntry {
    name: string;
    domain: string;
    source: string;
    shortDesc: string;
}
export interface WorkplaceProfile {
    workStyle: {
        label: string;
        desc: string;
    };
    decisionMaking: {
        label: string;
        desc: string;
    };
    conflictStyle: {
        label: string;
        desc: string;
    };
    feedbackPreference: {
        label: string;
        desc: string;
    };
    motivationDrivers: string[];
    riskTolerance: {
        label: string;
        desc: string;
    };
    idealManagerStyle: {
        label: string;
        desc: string;
    };
    idealTeamRole: {
        label: string;
        desc: string;
    };
}
export interface CognitiveReserve {
    level: string;
    score: number;
    strongestDomains: string[];
    fitnessRecommendations: {
        intelligence: string;
        recommendation: string;
    }[];
}
export interface WellnessProfile {
    stressSignature: {
        physical: string;
        emotional: string;
        cognitive: string;
    };
    recoveryActivities: {
        discBased: string;
        intelligenceBased: {
            intelligence: string;
            activity: string;
        }[];
    };
    socialNeeds: string;
    purposeAlignment: string[];
}
export interface SwotAnalysis {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
}
export interface AcquiringMethod {
    name: string;
    desc: string;
    color: string;
}
export interface AcquiringMethods {
    primary: AcquiringMethod;
    secondary: AcquiringMethod;
    all: AcquiringMethod[];
}
export interface BrainLobeEntry {
    lobe: string;
    left: {
        rc: number;
        pattern: string;
        function: string;
    };
    right: {
        rc: number;
        pattern: string;
        function: string;
    };
    total: number;
    dominant: string;
    development: string;
}
export interface SubIntelligence {
    key: string;
    name: string;
    parent: string;
    value: number;
    percent: number;
    stars: number;
    starsDisplay: string;
}
export interface FingerRCAnalysisEntry {
    finger: string;
    label: string;
    brainLobe: string;
    function: string;
    intelligence: string;
    hemisphere: string;
    pattern: string;
    ridgeCount: number;
    rcInterpretation: {
        level: string;
        description: string;
    };
}
export interface FingerPairComparisonEntry {
    pairLabel: string;
    leftRC: number;
    rightRC: number;
    diff: number;
    balance: string;
    leftPattern: string;
    rightPattern: string;
    implication: string;
}
export interface AtdBrainSpeed {
    leftBrainSpeed: string;
    rightBrainSpeed: string;
    note: string;
}
export interface DmitResults {
    fingerRCAnalysis: FingerRCAnalysisEntry[];
    fingerPairComparison: FingerPairComparisonEntry[];
    atdBrainSpeed: AtdBrainSpeed;
    bigFive: Record<string, BigFiveEntry>;
    top5Strengths: StrengthEntry[];
    dominantStrengthsDomain: string;
    workplaceProfile: WorkplaceProfile;
    transferableSkills: string[];
    bridgeCareers: string[];
    cognitiveReserve: CognitiveReserve;
    wellnessProfile: WellnessProfile;
    uniquePatterns: string[];
    tier: string;
    rbDist: Record<string, number>;
    manifestedRaw: Record<string, number>;
    fingerManifested: FingerManifested[];
    rbPct: number;
    lbPct: number;
    brainSide: 'left' | 'right' | 'balanced';
    intelligenceData: IntelligenceDatum[];
    topIntelligences: IntelligenceDatum[];
    personality: PersonalityDatum[];
    discProfile: DiscProfile;
    dominantDISC: DominantDisc;
    m19: Record<string, M19Entry>;
    learningStyle: Record<string, LearningStyleEntry>;
    fingerLearning: {
        finger: string;
        code: string;
        style: string;
    }[];
    sensory: Record<string, SensoryEntry>;
    iq: number;
    eq: number;
    cq: number;
    aq: number;
    quotientInterpretations: QuotientInterpretation;
    cognitive: number;
    affective: number;
    objectConcept: ObjectConcept;
    careerList: CareerEntry[];
    topCareers: CareerEntry[];
    holland: Record<string, HollandEntry>;
    hollandTop2: string[];
    mckenzie: Record<string, McKenzieEntry>;
    mckenzieTop: string;
    stream: Record<string, StreamEntry>;
    streamTop: string;
    tfrc: number;
    totalManifested: number;
    atdLeft: number;
    atdRight: number;
    atdAvg: number;
    atdInterpretation: AtdInterpretation;
    atdLeftInterpretation: AtdInterpretation;
    atdRightInterpretation: AtdInterpretation;
    compatibilityKey: string;
    parentingProfile: string;
    stressProfile: string;
    leadershipProfile: string;
    communicationProfile: string;
    eiScores: EiScores;
    swot: SwotAnalysis;
    acquiringMethods: AcquiringMethods;
    extraCurricular: string[];
    brainLobes: BrainLobeEntry[];
    subIntelligences: SubIntelligence[];
}
export declare const PATTERN_CODES: PatternInfo[];
export declare function starRating(pct: number): number;
export declare function starString(rating: number): string;
export declare function interpretATD(angle: number): AtdInterpretation;
export declare function calculateDmit(input: FingerprintData): DmitResults;
//# sourceMappingURL=dmitEngine.d.ts.map