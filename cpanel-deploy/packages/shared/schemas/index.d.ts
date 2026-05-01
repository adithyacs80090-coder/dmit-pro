import { z } from 'zod';
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    centerName: z.ZodString;
    counselorName: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    centerName: string;
    counselorName: string;
    phone?: string | undefined;
}, {
    email: string;
    password: string;
    centerName: string;
    counselorName: string;
    phone?: string | undefined;
}>;
export declare const fingerprintDataSchema: z.ZodObject<{
    patterns: z.ZodArray<z.ZodString, "many">;
    ridgeCounts: z.ZodArray<z.ZodNumber, "many">;
    atdLeft: z.ZodDefault<z.ZodNumber>;
    atdRight: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    patterns: string[];
    ridgeCounts: number[];
    atdLeft: number;
    atdRight: number;
}, {
    patterns: string[];
    ridgeCounts: number[];
    atdLeft?: number | undefined;
    atdRight?: number | undefined;
}>;
export declare const reportInputSchema: z.ZodObject<{
    clientName: z.ZodString;
    dob: z.ZodString;
    mobile: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    centerName: z.ZodOptional<z.ZodString>;
    counselorName: z.ZodOptional<z.ZodString>;
    analysisNo: z.ZodOptional<z.ZodString>;
    fingerprintData: z.ZodObject<{
        patterns: z.ZodArray<z.ZodString, "many">;
        ridgeCounts: z.ZodArray<z.ZodNumber, "many">;
        atdLeft: z.ZodDefault<z.ZodNumber>;
        atdRight: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        patterns: string[];
        ridgeCounts: number[];
        atdLeft: number;
        atdRight: number;
    }, {
        patterns: string[];
        ridgeCounts: number[];
        atdLeft?: number | undefined;
        atdRight?: number | undefined;
    }>;
    language: z.ZodDefault<z.ZodEnum<["en", "hi", "ml", "ta", "te", "kn"]>>;
}, "strip", z.ZodTypeAny, {
    clientName: string;
    dob: string;
    fingerprintData: {
        patterns: string[];
        ridgeCounts: number[];
        atdLeft: number;
        atdRight: number;
    };
    language: "en" | "hi" | "ml" | "ta" | "te" | "kn";
    email?: string | undefined;
    centerName?: string | undefined;
    counselorName?: string | undefined;
    mobile?: string | undefined;
    analysisNo?: string | undefined;
}, {
    clientName: string;
    dob: string;
    fingerprintData: {
        patterns: string[];
        ridgeCounts: number[];
        atdLeft?: number | undefined;
        atdRight?: number | undefined;
    };
    email?: string | undefined;
    centerName?: string | undefined;
    counselorName?: string | undefined;
    mobile?: string | undefined;
    analysisNo?: string | undefined;
    language?: "en" | "hi" | "ml" | "ta" | "te" | "kn" | undefined;
}>;
export declare const clientSchema: z.ZodObject<{
    name: z.ZodString;
    dob: z.ZodString;
    mobile: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    dob: string;
    name: string;
    email?: string | undefined;
    mobile?: string | undefined;
}, {
    dob: string;
    name: string;
    email?: string | undefined;
    mobile?: string | undefined;
}>;
export declare const paymentSchema: z.ZodObject<{
    plan: z.ZodLiteral<"annual">;
}, "strip", z.ZodTypeAny, {
    plan: "annual";
}, {
    plan: "annual";
}>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ReportInput = z.infer<typeof reportInputSchema>;
export type ClientInput = z.infer<typeof clientSchema>;
export type PaymentInput = z.infer<typeof paymentSchema>;
//# sourceMappingURL=index.d.ts.map