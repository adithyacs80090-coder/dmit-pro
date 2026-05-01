export interface CollegeEntry {
    name: string;
    location: string;
    ranking: number | string;
    fees: string;
    exam: string;
    course: string;
    type: string;
}
export interface CareerColleges {
    india: CollegeEntry[];
    abroad: CollegeEntry[];
}
export declare function tier(matchPct: number): {
    label: string;
    color: string;
    bg: string;
};
export declare const collegeData: Record<string, CareerColleges>;
export declare function getCollegesForCareer(careerName: string): CareerColleges | null;
export declare function getAllCareersWithColleges(): string[];
//# sourceMappingURL=college-data.d.ts.map