export interface ScholarshipInfo {
  name: string
  amount: string
  eligibility: string
  deadline: string
}

export const scholarshipData: Record<string, ScholarshipInfo[]> = {
  'IIT Bombay': [
    { name: 'Institute Merit-cum-Means Scholarship', amount: 'Full tuition waiver + ₹1,000/month', eligibility: 'Family income < ₹5L/year', deadline: 'August 31' },
    { name: 'NTPC Scholarship', amount: '₹1,500/month', eligibility: 'B.Tech 1st year, merit based', deadline: 'October 15' },
  ],
  'IIT Delhi': [
    { name: 'MCM Scholarship', amount: 'Full tuition waiver + ₹1,000/month', eligibility: 'Family income < ₹5L/year', deadline: 'August 31' },
    { name: 'OP Jindal Engineering Scholarship', amount: '₹1,50,000/year', eligibility: '2nd year, merit-cum-means', deadline: 'September 30' },
  ],
  'IIT Madras': [
    { name: 'Institute MCM Scholarship', amount: 'Full tuition waiver', eligibility: 'Family income < ₹4.5L/year', deadline: 'August 31' },
    { name: 'Samsung Scholarship', amount: '₹2,00,000/year', eligibility: 'B.Tech 1st year, JEE rank < 500', deadline: 'September 15' },
  ],
  'AIIMS New Delhi': [
    { name: 'AIIMS Merit Scholarship', amount: 'Full tuition waiver', eligibility: 'All MBBS students', deadline: 'August 15' },
    { name: 'SC/ST Scholarship', amount: '₹2,000/month + books', eligibility: 'SC/ST category', deadline: 'July 31' },
  ],
  'IIM Ahmedabad': [
    { name: 'IIMA Need-based Financial Assistance', amount: 'Up to full tuition waiver', eligibility: 'Family income < ₹8L/year', deadline: 'June 30' },
    { name: 'Aditya Birla Scholarship', amount: '₹1,75,000/year', eligibility: 'Top 20 admits', deadline: 'July 15' },
  ],
  'IIM Bangalore': [
    { name: 'IIMB Need-based Scholarship', amount: 'Up to full tuition waiver', eligibility: 'Family income < ₹8L/year', deadline: 'June 30' },
    { name: 'UBS International Scholarship', amount: '₹5,00,000 one-time', eligibility: 'Merit based', deadline: 'August 31' },
  ],
  'NLSIU Bangalore': [
    { name: 'NLSIU MCM Scholarship', amount: 'Full tuition waiver', eligibility: 'Family income < ₹4L/year', deadline: 'August 31' },
    { name: 'HDFC Scholarship', amount: '₹1,00,000/year', eligibility: 'Merit based', deadline: 'September 30' },
  ],
  'NID Ahmedabad': [
    { name: 'NID Scholarship', amount: '₹1,500/month', eligibility: 'Family income < ₹4L/year', deadline: 'August 31' },
    { name: 'Tata Design Scholarship', amount: '₹50,000/year', eligibility: 'Merit based', deadline: 'October 15' },
  ],
  'BITS Pilani': [
    { name: 'BITS MCM Scholarship', amount: '80% tuition waiver', eligibility: 'Family income < ₹5L/year', deadline: 'August 31' },
    { name: 'Board Toppers Scholarship', amount: '100% tuition waiver', eligibility: 'State board top 3', deadline: 'July 31' },
  ],
}

export function getScholarshipsForCollege(collegeName: string): ScholarshipInfo[] | null {
  return scholarshipData[collegeName] || null
}
