export interface TimelineEvent {
    month: string;
    event: string;
    priority: 'high' | 'medium' | 'low';
}
export interface AdmissionTimeline {
    intake: string;
    events: TimelineEvent[];
}
export declare const timelineData: Record<string, AdmissionTimeline>;
export declare function getTimelineForCollege(collegeName: string): AdmissionTimeline | null;
//# sourceMappingURL=timeline-data.d.ts.map