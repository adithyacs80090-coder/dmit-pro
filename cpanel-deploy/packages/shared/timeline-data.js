export const timelineData = {
    'IIT Bombay': {
        intake: 'July (Monsoon Semester)',
        events: [
            { month: 'January', event: 'JEE Main registration opens', priority: 'high' },
            { month: 'April', event: 'JEE Main exam', priority: 'high' },
            { month: 'May', event: 'JEE Advanced registration', priority: 'high' },
            { month: 'June', event: 'JEE Advanced exam', priority: 'high' },
            { month: 'June', event: 'JoSAA counseling begins', priority: 'high' },
            { month: 'July', event: 'Seat allocation & admission', priority: 'high' },
        ],
    },
    'IIT Delhi': {
        intake: 'July (Monsoon Semester)',
        events: [
            { month: 'January', event: 'JEE Main registration opens', priority: 'high' },
            { month: 'April', event: 'JEE Main exam', priority: 'high' },
            { month: 'May', event: 'JEE Advanced registration', priority: 'high' },
            { month: 'June', event: 'JEE Advanced exam', priority: 'high' },
            { month: 'June', event: 'JoSAA counseling begins', priority: 'high' },
            { month: 'July', event: 'Seat allocation & admission', priority: 'high' },
        ],
    },
    'AIIMS New Delhi': {
        intake: 'August',
        events: [
            { month: 'March', event: 'NEET UG registration opens', priority: 'high' },
            { month: 'May', event: 'NEET UG exam', priority: 'high' },
            { month: 'June', event: 'Result declaration', priority: 'high' },
            { month: 'July', event: 'AIIMS counseling (MCC)', priority: 'high' },
            { month: 'August', event: 'Admission & orientation', priority: 'high' },
        ],
    },
    'IIM Ahmedabad': {
        intake: 'June (PGP Batch)',
        events: [
            { month: 'August', event: 'CAT registration opens', priority: 'high' },
            { month: 'November', event: 'CAT exam', priority: 'high' },
            { month: 'January', event: 'Shortlist for WAT/PI', priority: 'high' },
            { month: 'February-April', event: 'WAT/PI rounds', priority: 'high' },
            { month: 'May', event: 'Final admission offers', priority: 'high' },
            { month: 'June', event: 'Program begins', priority: 'high' },
        ],
    },
    'NLSIU Bangalore': {
        intake: 'July',
        events: [
            { month: 'August', event: 'CLAT registration opens', priority: 'high' },
            { month: 'December', event: 'CLAT exam', priority: 'high' },
            { month: 'January', event: 'Result & merit list', priority: 'high' },
            { month: 'May-June', event: 'Counseling & seat allocation', priority: 'high' },
            { month: 'July', event: 'Admission & orientation', priority: 'high' },
        ],
    },
    'NID Ahmedabad': {
        intake: 'July',
        events: [
            { month: 'October', event: 'DAT Prelims registration', priority: 'high' },
            { month: 'January', event: 'DAT Prelims exam', priority: 'high' },
            { month: 'March', event: 'DAT Mains (Studio Test + Interview)', priority: 'high' },
            { month: 'May', event: 'Final merit list', priority: 'high' },
            { month: 'July', event: 'Admission', priority: 'high' },
        ],
    },
};
export function getTimelineForCollege(collegeName) {
    return timelineData[collegeName] || null;
}
