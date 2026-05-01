export interface ScholarshipInfo {
    name: string;
    amount: string;
    eligibility: string;
    deadline: string;
}
export declare const scholarshipData: Record<string, ScholarshipInfo[]>;
export declare function getScholarshipsForCollege(collegeName: string): ScholarshipInfo[] | null;
//# sourceMappingURL=scholarship-data.d.ts.map