export interface Counselor {
    id: string;
    email: string;
    centerName: string;
    counselorName: string;
    logoUrl: string | null;
    phone: string | null;
    role: 'counselor' | 'admin';
    isActive: boolean;
    subscriptionStatus: 'trial' | 'active' | 'expired' | 'cancelled';
    subscriptionStartedAt: Date | null;
    subscriptionEndsAt: Date | null;
    trialEndsAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
export interface Client {
    id: string;
    counselorId: string;
    name: string;
    dob: string;
    ageAtTest: number;
    mobile: string | null;
    email: string | null;
    analysisNo: string;
    createdAt: Date;
}
export interface Report {
    id: string;
    clientId: string;
    counselorId: string;
    fingerprintData: FingerprintData;
    results: DmitResults;
    htmlSnapshot: string | null;
    language: string;
    downloadUrl: string | null;
    createdAt: Date;
}
export interface FingerprintData {
    patterns: string[];
    ridgeCounts: number[];
    atdLeft: number;
    atdRight: number;
}
export interface DmitResults {
    tfrc: number;
    brainSide: 'left' | 'right' | 'balanced';
    intelligenceData: IntelligenceData[];
    topIntelligences: IntelligenceData[];
    personality: PersonalityData[];
    discProfile: DiscProfile;
    dominantDISC: {
        primary: string;
        secondary: string;
        code: string;
    };
    learningStyle: LearningStyle;
    atdInterpretation: {
        speed: string;
        level: number;
    };
    quotients: Quotients;
    careerList: CareerMatch[];
    topCareers: CareerMatch[];
    holland: Record<string, HollandData>;
    mckenzie: Record<string, MckenzieData>;
    bigFive: Record<string, BigFiveData>;
    stream: Record<string, StreamData>;
    swot: SwotData;
    collegeMatches?: CollegeMatch[];
}
export interface IntelligenceData {
    key: string;
    name: string;
    manifested: number;
    stars: number;
    starsDisplay: string;
    side: string;
}
export interface PersonalityData {
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
export interface LearningStyle {
    Kinesthetic: {
        value: number;
        percent: number;
    };
    Auditory: {
        value: number;
        percent: number;
    };
    Visual: {
        value: number;
        percent: number;
    };
}
export interface Quotients {
    iq: number;
    eq: number;
    cq: number;
    aq: number;
}
export interface CareerMatch {
    name: string;
    val: number;
    stars: number;
    starsDisplay: string;
}
export interface HollandData {
    name: string;
    value: number;
    raw: number;
    stars: number;
    starsDisplay: string;
}
export interface MckenzieData {
    value: number;
    raw: number;
}
export interface BigFiveData {
    name: string;
    raw: number;
    value: number;
    color: string;
    percent: number;
    interpretation: string;
}
export interface StreamData {
    value: number;
    raw: number;
}
export interface SwotData {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
}
export interface CollegeMatch {
    careerName: string;
    careerVal: number;
    tier: {
        label: string;
        color: string;
        bg: string;
    };
    india: College[];
    abroad: College[];
}
export interface College {
    name: string;
    location: string;
    ranking: number | string;
    fees: string;
    exam: string;
    course: string;
    type: string;
}
export interface Payment {
    id: string;
    counselorId: string;
    razorpayOrderId: string | null;
    razorpayPaymentId: string | null;
    amount: number;
    currency: string;
    status: 'created' | 'captured' | 'failed';
    plan: 'annual';
    credits: number;
    createdAt: Date;
}
//# sourceMappingURL=index.d.ts.map