export function tier(matchPct) {
    if (matchPct >= 14)
        return { label: 'Best Fit', color: '#00715f', bg: '#e3efe7' };
    if (matchPct >= 11)
        return { label: 'Strong Fit', color: '#087eb1', bg: '#dbeef4' };
    if (matchPct >= 9)
        return { label: 'Good Fit', color: '#f5ad28', bg: '#fff3bf' };
    return { label: 'Developing Fit', color: '#ff7c59', bg: '#f0dfd8' };
}
export const collegeData = {
    'AI / ML Engineer': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE (AI)', type: 'Premier' },
            { name: 'IIT Delhi', location: 'New Delhi', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE (AI/ML)', type: 'Premier' },
            { name: 'BITS Pilani', location: 'Pilani, RJ', ranking: 3, fees: '₹5.5L/year', exam: 'BITSAT', course: 'B.E. Computer Science', type: 'Private' },
            { name: 'IIIT Hyderabad', location: 'Hyderabad, TS', ranking: 4, fees: '₹3.5L/year', exam: 'JEE Advanced', course: 'B.Tech CSE + MS by Research', type: 'Premier' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL/IELTS', course: 'B.S. Computer Science & Engineering', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science (AI Track)', type: 'Premier' },
            { name: 'Carnegie Mellon', location: 'Pittsburgh, USA', ranking: 3, fees: '$54,000/year', exam: 'SAT + TOEFL', course: 'B.S. Artificial Intelligence', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 4, fees: 'CAD 45,000/year', exam: 'SAT/ACT + IELTS', course: 'B.S. Computer Science (AI)', type: 'Premier' },
        ]
    },
    'Data Scientist': {
        india: [
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE (Data Science)', type: 'Premier' },
            { name: 'IIT Kharagpur', location: 'Kharagpur, WB', ranking: 2, fees: '₹2.2L/year', exam: 'JEE Advanced', course: 'B.Tech CSE + M.Tech Dual', type: 'Premier' },
            { name: 'ISI Kolkata', location: 'Kolkata, WB', ranking: 3, fees: '₹1.5L/year', exam: 'ISI Admission Test', course: 'B.Stat / B.Math', type: 'Premier' },
            { name: 'Christ University', location: 'Bangalore, KA', ranking: 4, fees: '₹2.8L/year', exam: 'CUET / Christ Entrance', course: 'B.Sc Data Science', type: 'Private' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science & Data Science', type: 'Premier' },
            { name: 'UC Berkeley', location: 'Berkeley, USA', ranking: 2, fees: '$48,000/year', exam: 'SAT + TOEFL', course: 'B.A. Data Science', type: 'Premier' },
            { name: 'Imperial College London', location: 'London, UK', ranking: 3, fees: '£35,000/year', exam: 'A-Levels / IB', course: 'B.Sc Mathematics & Computer Science', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 42,000/year', exam: 'ATAR / IB', course: 'B.Sc Data Science', type: 'Premier' },
        ]
    },
    'Full Stack Developer': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE', type: 'Premier' },
            { name: 'NIT Trichy', location: 'Tiruchirappalli, TN', ranking: 2, fees: '₹1.8L/year', exam: 'JEE Main', course: 'B.Tech CSE', type: 'Premier' },
            { name: 'VIT Vellore', location: 'Vellore, TN', ranking: 3, fees: '₹3.2L/year', exam: 'VITEEE', course: 'B.Tech CSE', type: 'Private' },
            { name: 'Manipal Institute of Technology', location: 'Manipal, KA', ranking: 4, fees: '₹4.2L/year', exam: 'MET', course: 'B.Tech CSE', type: 'Private' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science', type: 'Premier' },
            { name: 'Georgia Tech', location: 'Atlanta, USA', ranking: 2, fees: '$42,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science', type: 'Premier' },
            { name: 'University of Waterloo', location: 'Waterloo, Canada', ranking: 3, fees: 'CAD 38,000/year', exam: 'SAT/ACT + IELTS', course: 'B.S. Computer Science (Co-op)', type: 'Premier' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Informatik', type: 'Public' },
        ]
    },
    'Cybersecurity Analyst': {
        india: [
            { name: 'IIT Kanpur', location: 'Kanpur, UP', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE (Cybersecurity)', type: 'Premier' },
            { name: 'IIIT Delhi', location: 'New Delhi', ranking: 2, fees: '₹3.5L/year', exam: 'JEE Main / IIITD UG', course: 'B.Tech CSE (Information Security)', type: 'Premier' },
            { name: 'Amrita Vishwa Vidyapeetham', location: 'Coimbatore, TN', ranking: 3, fees: '₹3.5L/year', exam: 'AEEE', course: 'B.Tech CSE (Cybersecurity)', type: 'Private' },
            { name: 'SRM University', location: 'Chennai, TN', ranking: 4, fees: '₹3.8L/year', exam: 'SRMJEEE', course: 'B.Tech CSE (Cybersecurity)', type: 'Private' },
        ],
        abroad: [
            { name: 'Carnegie Mellon', location: 'Pittsburgh, USA', ranking: 1, fees: '$54,000/year', exam: 'SAT + TOEFL', course: 'B.S. Information Security', type: 'Premier' },
            { name: 'Georgia Tech', location: 'Atlanta, USA', ranking: 2, fees: '$42,000/year', exam: 'SAT + TOEFL', course: 'B.S. Cybersecurity', type: 'Premier' },
            { name: 'Royal Holloway, University of London', location: 'London, UK', ranking: 3, fees: '£28,000/year', exam: 'A-Levels / IB', course: 'B.Sc Cybersecurity', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 4, fees: 'CAD 45,000/year', exam: 'SAT + IELTS', course: 'B.Sc Computer Science (Security)', type: 'Premier' },
        ]
    },
    'Cloud Architect': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE (Cloud Computing)', type: 'Premier' },
            { name: 'IIIT Hyderabad', location: 'Hyderabad, TS', ranking: 2, fees: '₹3.5L/year', exam: 'JEE Advanced', course: 'B.Tech CSE + MS', type: 'Premier' },
            { name: 'BITS Pilani', location: 'Pilani, RJ', ranking: 3, fees: '₹5.5L/year', exam: 'BITSAT', course: 'B.E. Computer Science', type: 'Private' },
            { name: 'NIT Surathkal', location: 'Mangalore, KA', ranking: 4, fees: '₹1.8L/year', exam: 'JEE Main', course: 'B.Tech IT', type: 'Premier' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science', type: 'Premier' },
            { name: 'University of Waterloo', location: 'Waterloo, Canada', ranking: 3, fees: 'CAD 38,000/year', exam: 'SAT + IELTS', course: 'B.S. Computer Science', type: 'Premier' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Informatik', type: 'Public' },
        ]
    },
    'Doctor': {
        india: [
            { name: 'AIIMS New Delhi', location: 'New Delhi', ranking: 1, fees: '₹6,000/year', exam: 'NEET UG', course: 'MBBS', type: 'Premier' },
            { name: 'CMC Vellore', location: 'Vellore, TN', ranking: 2, fees: '₹50,000/year', exam: 'NEET UG + CMC Entrance', course: 'MBBS', type: 'Premier' },
            { name: 'AFMC Pune', location: 'Pune, MH', ranking: 3, fees: '₹75,000/year', exam: 'NEET UG + AFMC Screening', course: 'MBBS', type: 'Defence' },
            { name: 'Maulana Azad Medical College', location: 'New Delhi', ranking: 4, fees: '₹15,000/year', exam: 'NEET UG', course: 'MBBS', type: 'Government' },
        ],
        abroad: [
            { name: 'Harvard Medical School', location: 'Boston, USA', ranking: 1, fees: '$63,000/year', exam: 'MCAT + TOEFL', course: 'M.D.', type: 'Premier' },
            { name: 'Johns Hopkins', location: 'Baltimore, USA', ranking: 2, fees: '$56,000/year', exam: 'MCAT + TOEFL', course: 'M.D.', type: 'Premier' },
            { name: 'University of Oxford', location: 'Oxford, UK', ranking: 3, fees: '£38,000/year', exam: 'BMAT / UCAT', course: 'BM BCh (Medicine)', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 65,000/year', exam: 'GAMSAT / UCAT', course: 'Doctor of Medicine', type: 'Premier' },
        ]
    },
    'Surgeon': {
        india: [
            { name: 'AIIMS New Delhi', location: 'New Delhi', ranking: 1, fees: '₹6,000/year', exam: 'NEET UG → NEET PG', course: 'MBBS → MS', type: 'Premier' },
            { name: 'Christian Medical College', location: 'Vellore, TN', ranking: 2, fees: '₹50,000/year', exam: 'NEET UG + CMC', course: 'MBBS → MS', type: 'Premier' },
            { name: 'MAMC Delhi', location: 'New Delhi', ranking: 3, fees: '₹15,000/year', exam: 'NEET UG → NEET PG', course: 'MBBS → MS', type: 'Government' },
            { name: 'KGMU Lucknow', location: 'Lucknow, UP', ranking: 4, fees: '₹55,000/year', exam: 'NEET UG → NEET PG', course: 'MBBS → MS', type: 'Government' },
        ],
        abroad: [
            { name: 'Johns Hopkins', location: 'Baltimore, USA', ranking: 1, fees: '$56,000/year', exam: 'MCAT + USMLE', course: 'M.D. + Residency in Surgery', type: 'Premier' },
            { name: 'Harvard Medical School', location: 'Boston, USA', ranking: 2, fees: '$63,000/year', exam: 'MCAT + USMLE', course: 'M.D. + Surgical Residency', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 3, fees: '£38,000/year', exam: 'BMAT / UCAT', course: 'MB BChir + MRCS', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 4, fees: 'CAD 65,000/year', exam: 'MCAT + CASPer', course: 'M.D. + Surgical Residency', type: 'Premier' },
        ]
    },
    'Chartered Accountant': {
        india: [
            { name: 'SRCC Delhi', location: 'New Delhi', ranking: 1, fees: '₹25,000/year', exam: 'CUET', course: 'B.Com (Hons)', type: 'Premier' },
            { name: 'Lady Shri Ram College', location: 'New Delhi', ranking: 2, fees: '₹25,000/year', exam: 'CUET', course: 'B.Com (Hons)', type: 'Premier' },
            { name: 'St. Xavier\'s Mumbai', location: 'Mumbai, MH', ranking: 3, fees: '₹35,000/year', exam: 'Xavier\'s Entrance', course: 'B.Com', type: 'Premier' },
            { name: 'Christ University', location: 'Bangalore, KA', ranking: 4, fees: '₹2.5L/year', exam: 'CUET / Christ Entrance', course: 'B.Com (Professional)', type: 'Private' },
        ],
        abroad: [
            { name: 'London School of Economics', location: 'London, UK', ranking: 1, fees: '£28,000/year', exam: 'A-Levels / IB', course: 'B.Sc Accounting & Finance', type: 'Premier' },
            { name: 'University of Pennsylvania (Wharton)', location: 'Philadelphia, USA', ranking: 2, fees: '$58,000/year', exam: 'SAT + TOEFL', course: 'B.S. Economics (Accounting)', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 3, fees: 'AUD 38,000/year', exam: 'ATAR / IB', course: 'B.Com (Accounting)', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 4, fees: 'CAD 38,000/year', exam: 'SAT + IELTS', course: 'B.Com (Accounting Specialist)', type: 'Premier' },
        ]
    },
    'Investment Banker': {
        india: [
            { name: 'IIM Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹25L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 2, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'IIM Calcutta', location: 'Kolkata, WB', ranking: 3, fees: '₹23L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'XLRI Jamshedpur', location: 'Jamshedpur, JH', ranking: 4, fees: '₹24L total', exam: 'XAT + GD/PI', course: 'PGDM (BM)', type: 'Premier' },
        ],
        abroad: [
            { name: 'University of Pennsylvania (Wharton)', location: 'Philadelphia, USA', ranking: 1, fees: '$58,000/year', exam: 'GMAT + TOEFL', course: 'MBA (Finance)', type: 'Premier' },
            { name: 'Harvard Business School', location: 'Boston, USA', ranking: 2, fees: '$73,000/year', exam: 'GMAT + TOEFL', course: 'MBA', type: 'Premier' },
            { name: 'London Business School', location: 'London, UK', ranking: 3, fees: '£45,000/year', exam: 'GMAT + IELTS', course: 'Masters in Finance', type: 'Premier' },
            { name: 'INSEAD', location: 'Fontainebleau, France', ranking: 4, fees: 'EUR 45,000/year', exam: 'GMAT + IELTS', course: 'MBA', type: 'Premier' },
        ]
    },
    'UX / UI Designer': {
        india: [
            { name: 'NID Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹3.5L/year', exam: 'NID DAT', course: 'B.Des (Interaction Design)', type: 'Premier' },
            { name: 'IIT Bombay (IDC)', location: 'Mumbai, MH', ranking: 2, fees: '₹2.5L/year', exam: 'CEED / UCEED', course: 'M.Des (Interaction Design)', type: 'Premier' },
            { name: 'Srishti Manipal', location: 'Bangalore, KA', ranking: 3, fees: '₹4.5L/year', exam: 'SMAC', course: 'B.Des (Human Centered Design)', type: 'Private' },
            { name: 'Pearl Academy', location: 'Delhi / Mumbai', ranking: 4, fees: '₹5.5L/year', exam: 'Pearl Entrance', course: 'B.Des (Communication Design)', type: 'Private' },
        ],
        abroad: [
            { name: 'Parsons School of Design', location: 'New York, USA', ranking: 1, fees: '$52,000/year', exam: 'Portfolio + TOEFL', course: 'BFA Design & Technology', type: 'Premier' },
            { name: 'Rhode Island School of Design', location: 'Providence, USA', ranking: 2, fees: '$54,000/year', exam: 'Portfolio + TOEFL', course: 'BFA Industrial Design', type: 'Premier' },
            { name: 'Royal College of Art', location: 'London, UK', ranking: 3, fees: '£32,000/year', exam: 'Portfolio + IELTS', course: 'MA Service Design', type: 'Premier' },
            { name: 'ArtCenter College of Design', location: 'Pasadena, USA', ranking: 4, fees: '$48,000/year', exam: 'Portfolio + TOEFL', course: 'B.S. Interaction Design', type: 'Premier' },
        ]
    },
    'Architect': {
        india: [
            { name: 'IIT Kharagpur', location: 'Kharagpur, WB', ranking: 1, fees: '₹2.5L/year', exam: 'JEE Advanced (B.Arch)', course: 'B.Arch', type: 'Premier' },
            { name: 'IIT Roorkee', location: 'Roorkee, UK', ranking: 2, fees: '₹2.5L/year', exam: 'JEE Advanced (B.Arch)', course: 'B.Arch', type: 'Premier' },
            { name: 'SPA Delhi', location: 'New Delhi', ranking: 3, fees: '₹1.5L/year', exam: 'JEE Main (B.Arch) + NATA', course: 'B.Arch', type: 'Premier' },
            { name: 'CEPT University', location: 'Ahmedabad, GJ', ranking: 4, fees: '₹4.5L/year', exam: 'CEPT Entrance', course: 'B.Arch', type: 'Private' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + Portfolio', course: 'B.S. Architecture', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 2, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Architecture', type: 'Public' },
            { name: 'Delft University', location: 'Delft, Netherlands', ranking: 3, fees: 'EUR 12,000/year', exam: 'Portfolio + Math Test', course: 'B.Sc Architecture', type: 'Public' },
            { name: 'UCL Bartlett', location: 'London, UK', ranking: 4, fees: '£32,000/year', exam: 'A-Levels / IB + Portfolio', course: 'B.Sc Architecture', type: 'Premier' },
        ]
    },
    'Fashion Designer': {
        india: [
            { name: 'NIFT Delhi', location: 'New Delhi', ranking: 1, fees: '₹3.5L/year', exam: 'NIFT Entrance', course: 'B.Des Fashion Design', type: 'Premier' },
            { name: 'NIFT Mumbai', location: 'Mumbai, MH', ranking: 2, fees: '₹3.5L/year', exam: 'NIFT Entrance', course: 'B.Des Fashion Design', type: 'Premier' },
            { name: 'Pearl Academy', location: 'Delhi / Mumbai', ranking: 3, fees: '₹5.5L/year', exam: 'Pearl Entrance', course: 'B.Des Fashion Design', type: 'Private' },
            { name: 'NID Ahmedabad', location: 'Ahmedabad, GJ', ranking: 4, fees: '₹3.5L/year', exam: 'NID DAT', course: 'B.Des Textile & Apparel', type: 'Premier' },
        ],
        abroad: [
            { name: 'Parsons School of Design', location: 'New York, USA', ranking: 1, fees: '$52,000/year', exam: 'Portfolio + TOEFL', course: 'BFA Fashion Design', type: 'Premier' },
            { name: 'Central Saint Martins', location: 'London, UK', ranking: 2, fees: '£28,000/year', exam: 'Portfolio + IELTS', course: 'BA Fashion Design', type: 'Premier' },
            { name: 'Fashion Institute of Technology', location: 'New York, USA', ranking: 3, fees: '$42,000/year', exam: 'Portfolio + TOEFL', course: 'BFA Fashion Design', type: 'Premier' },
            { name: 'Istituto Marangoni', location: 'Milan, Italy', ranking: 4, fees: 'EUR 22,000/year', exam: 'Portfolio + Interview', course: 'BA Fashion Design', type: 'Premier' },
        ]
    },
    'Product Designer': {
        india: [
            { name: 'NID Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹3.5L/year', exam: 'NID DAT', course: 'B.Des Product Design', type: 'Premier' },
            { name: 'IIT Bombay (IDC)', location: 'Mumbai, MH', ranking: 2, fees: '₹2.5L/year', exam: 'CEED / UCEED', course: 'B.Des / M.Des', type: 'Premier' },
            { name: 'Srishti Manipal', location: 'Bangalore, KA', ranking: 3, fees: '₹4.5L/year', exam: 'SMAC', course: 'B.Des (Industrial Arts & Design Practices)', type: 'Private' },
            { name: 'MIT Institute of Design', location: 'Pune, MH', ranking: 4, fees: '₹5L/year', exam: 'MITID DAT', course: 'B.Des Product Design', type: 'Private' },
        ],
        abroad: [
            { name: 'ArtCenter College of Design', location: 'Pasadena, USA', ranking: 1, fees: '$48,000/year', exam: 'Portfolio + TOEFL', course: 'B.S. Product Design', type: 'Premier' },
            { name: 'Royal College of Art', location: 'London, UK', ranking: 2, fees: '£32,000/year', exam: 'Portfolio + IELTS', course: 'MA Design Products', type: 'Premier' },
            { name: 'Delft University', location: 'Delft, Netherlands', ranking: 3, fees: 'EUR 12,000/year', exam: 'Portfolio + Math', course: 'B.Sc Industrial Design', type: 'Public' },
            { name: 'Politecnico di Milano', location: 'Milan, Italy', ranking: 4, fees: 'EUR 4,000/year', exam: 'SAT + IELTS', course: 'B.Sc Product Design', type: 'Public' },
        ]
    },
    'Graphic Designer': {
        india: [
            { name: 'NID Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹3.5L/year', exam: 'NID DAT', course: 'B.Des Graphic Design', type: 'Premier' },
            { name: 'NIFT Delhi', location: 'New Delhi', ranking: 2, fees: '₹3.5L/year', exam: 'NIFT Entrance', course: 'B.Des Communication Design', type: 'Premier' },
            { name: 'Pearl Academy', location: 'Delhi / Mumbai', ranking: 3, fees: '₹5.5L/year', exam: 'Pearl Entrance', course: 'B.Des Graphic Design', type: 'Private' },
            { name: 'Srishti Manipal', location: 'Bangalore, KA', ranking: 4, fees: '₹4.5L/year', exam: 'SMAC', course: 'B.Des (Visual Communication)', type: 'Private' },
        ],
        abroad: [
            { name: 'Rhode Island School of Design', location: 'Providence, USA', ranking: 1, fees: '$54,000/year', exam: 'Portfolio + TOEFL', course: 'BFA Graphic Design', type: 'Premier' },
            { name: 'Yale University', location: 'New Haven, USA', ranking: 2, fees: '$57,000/year', exam: 'Portfolio + TOEFL', course: 'MFA Graphic Design', type: 'Premier' },
            { name: 'Central Saint Martins', location: 'London, UK', ranking: 3, fees: '£28,000/year', exam: 'Portfolio + IELTS', course: 'BA Graphic Design', type: 'Premier' },
            { name: 'ArtCenter College of Design', location: 'Pasadena, USA', ranking: 4, fees: '$48,000/year', exam: 'Portfolio + TOEFL', course: 'BFA Graphic Design', type: 'Premier' },
        ]
    },
    'Lawyer': {
        india: [
            { name: 'NLSIU Bangalore', location: 'Bangalore, KA', ranking: 1, fees: '₹2.5L/year', exam: 'CLAT', course: 'B.A. LL.B (Hons)', type: 'Premier' },
            { name: 'NALSAR Hyderabad', location: 'Hyderabad, TS', ranking: 2, fees: '₹2.5L/year', exam: 'CLAT', course: 'B.A. LL.B (Hons)', type: 'Premier' },
            { name: 'NLU Delhi', location: 'New Delhi', ranking: 3, fees: '₹2L/year', exam: 'AILET', course: 'B.A. LL.B (Hons)', type: 'Premier' },
            { name: 'WBNUJS Kolkata', location: 'Kolkata, WB', ranking: 4, fees: '₹2L/year', exam: 'CLAT', course: 'B.A. LL.B (Hons)', type: 'Premier' },
        ],
        abroad: [
            { name: 'Harvard Law School', location: 'Boston, USA', ranking: 1, fees: '$67,000/year', exam: 'LSAT + TOEFL', course: 'J.D.', type: 'Premier' },
            { name: 'Yale Law School', location: 'New Haven, USA', ranking: 2, fees: '$67,000/year', exam: 'LSAT + TOEFL', course: 'J.D.', type: 'Premier' },
            { name: 'University of Oxford', location: 'Oxford, UK', ranking: 3, fees: '£38,000/year', exam: 'LNAT + IELTS', course: 'BA Jurisprudence', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 4, fees: '£38,000/year', exam: 'LNAT + IELTS', course: 'BA Law', type: 'Premier' },
        ]
    },
    'Judge': {
        india: [
            { name: 'NLSIU Bangalore', location: 'Bangalore, KA', ranking: 1, fees: '₹2.5L/year', exam: 'CLAT', course: 'B.A. LL.B → LL.M', type: 'Premier' },
            { name: 'NALSAR Hyderabad', location: 'Hyderabad, TS', ranking: 2, fees: '₹2.5L/year', exam: 'CLAT', course: 'B.A. LL.B → LL.M', type: 'Premier' },
            { name: 'NLU Delhi', location: 'New Delhi', ranking: 3, fees: '₹2L/year', exam: 'AILET', course: 'B.A. LL.B → LL.M', type: 'Premier' },
            { name: 'GNLU Gandhinagar', location: 'Gandhinagar, GJ', ranking: 4, fees: '₹2L/year', exam: 'CLAT', course: 'B.A. LL.B → LL.M', type: 'Premier' },
        ],
        abroad: [
            { name: 'Harvard Law School', location: 'Boston, USA', ranking: 1, fees: '$67,000/year', exam: 'LSAT', course: 'J.D. → Judicial Clerkship', type: 'Premier' },
            { name: 'Yale Law School', location: 'New Haven, USA', ranking: 2, fees: '$67,000/year', exam: 'LSAT', course: 'J.D. → Judicial Clerkship', type: 'Premier' },
            { name: 'University of Oxford', location: 'Oxford, UK', ranking: 3, fees: '£38,000/year', exam: 'LNAT', course: 'BA Jurisprudence → BCL', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 4, fees: '£38,000/year', exam: 'LNAT', course: 'BA Law → LL.M', type: 'Premier' },
        ]
    },
    'IAS/IPS Officer': {
        india: [
            { name: 'St. Stephen\'s College', location: 'New Delhi', ranking: 1, fees: '₹35,000/year', exam: 'CUET', course: 'B.A. Economics / History', type: 'Premier' },
            { name: 'Loyola College', location: 'Chennai, TN', ranking: 2, fees: '₹25,000/year', exam: 'CUET / College Entrance', course: 'B.A. Political Science', type: 'Premier' },
            { name: 'Hindu College', location: 'New Delhi', ranking: 3, fees: '₹30,000/year', exam: 'CUET', course: 'B.A. Political Science', type: 'Premier' },
            { name: 'Presidency University', location: 'Kolkata, WB', ranking: 4, fees: '₹15,000/year', exam: 'PUBDET', course: 'B.A. Political Science', type: 'Premier' },
        ],
        abroad: [
            { name: 'Harvard Kennedy School', location: 'Boston, USA', ranking: 1, fees: '$58,000/year', exam: 'GRE + TOEFL', course: 'M.P.P. / M.P.A.', type: 'Premier' },
            { name: 'London School of Economics', location: 'London, UK', ranking: 2, fees: '£28,000/year', exam: 'GRE + IELTS', course: 'M.Sc Public Policy', type: 'Premier' },
            { name: 'Sciences Po', location: 'Paris, France', ranking: 3, fees: 'EUR 12,000/year', exam: 'SAT + French B2', course: 'B.A. Political Science', type: 'Premier' },
            { name: 'Georgetown University', location: 'Washington DC, USA', ranking: 4, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Foreign Service', type: 'Premier' },
        ]
    },
    'Psychologist': {
        india: [
            { name: 'University of Delhi', location: 'New Delhi', ranking: 1, fees: '₹20,000/year', exam: 'CUET', course: 'B.A. Psychology (Hons)', type: 'Government' },
            { name: 'Christ University', location: 'Bangalore, KA', ranking: 2, fees: '₹2L/year', exam: 'CUET / Christ Entrance', course: 'B.A. Psychology', type: 'Private' },
            { name: 'Ashoka University', location: 'Sonipat, HR', ranking: 3, fees: '₹9L/year', exam: 'Ashoka Aptitude Test', course: 'B.A. Psychology', type: 'Private' },
            { name: 'TISS Mumbai', location: 'Mumbai, MH', ranking: 4, fees: '₹1.2L/year', exam: 'TISS BAT', course: 'B.A. Social Sciences', type: 'Premier' },
        ],
        abroad: [
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 1, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Psychology', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Psychology', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 3, fees: 'CAD 42,000/year', exam: 'SAT + IELTS', course: 'B.Sc Psychology', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 38,000/year', exam: 'ATAR / IB', course: 'B.Sc Psychology', type: 'Premier' },
        ]
    },
    'Teacher/Professor': {
        india: [
            { name: 'University of Delhi', location: 'New Delhi', ranking: 1, fees: '₹20,000/year', exam: 'CUET', course: 'B.A. / B.Sc + B.Ed', type: 'Government' },
            { name: 'TISS Mumbai', location: 'Mumbai, MH', ranking: 2, fees: '₹1.2L/year', exam: 'TISS BAT', course: 'B.Ed / M.A. Education', type: 'Premier' },
            { name: 'Azim Premji University', location: 'Bangalore, KA', ranking: 3, fees: '₹3L/year', exam: 'APU Entrance', course: 'B.A. + B.Ed', type: 'Private' },
            { name: 'IGNOU', location: 'New Delhi', ranking: 4, fees: '₹15,000/year', exam: 'Direct Admission', course: 'B.Ed / M.A. Education', type: 'Distance' },
        ],
        abroad: [
            { name: 'Harvard Graduate School of Education', location: 'Boston, USA', ranking: 1, fees: '$55,000/year', exam: 'GRE + TOEFL', course: 'Ed.M. / Ed.L.D.', type: 'Premier' },
            { name: 'Stanford GSE', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'GRE + TOEFL', course: 'M.A. Education', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 3, fees: '£32,000/year', exam: 'IELTS + Academic Record', course: 'M.Phil Education', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'IELTS + Academic Record', course: 'M.Teach / M.Ed', type: 'Premier' },
        ]
    },
    'Music Director': {
        india: [
            { name: 'KM Music Conservatory', location: 'Chennai, TN', ranking: 1, fees: '₹4L/year', exam: 'KMMC Audition', course: 'Diploma / B.Mus', type: 'Private' },
            { name: 'AR Rahman Foundation', location: 'Chennai, TN', ranking: 2, fees: '₹3.5L/year', exam: 'Audition + Interview', course: 'Certificate / Diploma', type: 'Private' },
            { name: 'Bhatkhande Music Institute', location: 'Lucknow, UP', ranking: 3, fees: '₹50,000/year', exam: 'Entrance + Audition', course: 'B.Mus / M.Mus', type: 'Government' },
            { name: 'FTII Pune', location: 'Pune, MH', ranking: 4, fees: '₹1.5L/year', exam: 'FTII Entrance + Audition', course: 'Diploma Sound Recording & Music', type: 'Government' },
        ],
        abroad: [
            { name: 'Berklee College of Music', location: 'Boston, USA', ranking: 1, fees: '$48,000/year', exam: 'Audition + Interview', course: 'B.Mus Film Scoring', type: 'Premier' },
            { name: 'Juilliard School', location: 'New York, USA', ranking: 2, fees: '$52,000/year', exam: 'Audition + Interview', course: 'B.Mus Composition', type: 'Premier' },
            { name: 'Royal College of Music', location: 'London, UK', ranking: 3, fees: '£28,000/year', exam: 'Audition + IELTS', course: 'B.Mus Composition', type: 'Premier' },
            { name: 'Conservatoire de Paris', location: 'Paris, France', ranking: 4, fees: 'EUR 500/year', exam: 'Audition + French B2', course: 'Diplome de Composition', type: 'Public' },
        ]
    },
    'Singer': {
        india: [
            { name: 'KM Music Conservatory', location: 'Chennai, TN', ranking: 1, fees: '₹4L/year', exam: 'KMMC Audition', course: 'Diploma Vocal Performance', type: 'Private' },
            { name: 'Bhatkhande Music Institute', location: 'Lucknow, UP', ranking: 2, fees: '₹50,000/year', exam: 'Audition + Entrance', course: 'B.Mus Vocal', type: 'Government' },
            { name: 'Gandharva Mahavidyalaya', location: 'New Delhi', ranking: 3, fees: '₹40,000/year', exam: 'Audition', course: 'B.Mus Hindustani Vocal', type: 'Government' },
            { name: 'Swarnabhoomi Academy of Music', location: 'Chennai, TN', ranking: 4, fees: '₹5L/year', exam: 'Audition + Interview', course: 'Diploma Contemporary Vocal', type: 'Private' },
        ],
        abroad: [
            { name: 'Berklee College of Music', location: 'Boston, USA', ranking: 1, fees: '$48,000/year', exam: 'Audition + Interview', course: 'B.Mus Vocal Performance', type: 'Premier' },
            { name: 'Juilliard School', location: 'New York, USA', ranking: 2, fees: '$52,000/year', exam: 'Audition + Interview', course: 'B.Mus Voice', type: 'Premier' },
            { name: 'Royal Academy of Music', location: 'London, UK', ranking: 3, fees: '£28,000/year', exam: 'Audition + IELTS', course: 'B.Mus Vocal Studies', type: 'Premier' },
            { name: 'Conservatoire de Paris', location: 'Paris, France', ranking: 4, fees: 'EUR 500/year', exam: 'Audition + French B2', course: 'Diplome Chant', type: 'Public' },
        ]
    },
    'Writer/Author': {
        india: [
            { name: 'University of Delhi', location: 'New Delhi', ranking: 1, fees: '₹20,000/year', exam: 'CUET', course: 'B.A. English (Hons)', type: 'Government' },
            { name: 'JNU Delhi', location: 'New Delhi', ranking: 2, fees: '₹10,000/year', exam: 'JNUEE', course: 'B.A. + M.A. Literature', type: 'Premier' },
            { name: 'St. Xavier\'s Mumbai', location: 'Mumbai, MH', ranking: 3, fees: '₹35,000/year', exam: 'Xavier\'s Entrance', course: 'B.A. English Literature', type: 'Premier' },
            { name: 'Ashoka University', location: 'Sonipat, HR', ranking: 4, fees: '₹9L/year', exam: 'Ashoka Aptitude Test', course: 'B.A. English & Creative Writing', type: 'Private' },
        ],
        abroad: [
            { name: 'University of Iowa', location: 'Iowa City, USA', ranking: 1, fees: '$32,000/year', exam: 'SAT + TOEFL', course: 'M.F.A. Creative Writing', type: 'Premier' },
            { name: 'University of Oxford', location: 'Oxford, UK', ranking: 2, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. English Language & Literature', type: 'Premier' },
            { name: 'Columbia University', location: 'New York, USA', ranking: 3, fees: '$60,000/year', exam: 'SAT + TOEFL', course: 'M.F.A. Writing', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 4, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. English', type: 'Premier' },
        ]
    },
    'Journalist': {
        india: [
            { name: 'IIMC New Delhi', location: 'New Delhi', ranking: 1, fees: '₹1.5L/year', exam: 'IIMC Entrance', course: 'PG Diploma Journalism', type: 'Premier' },
            { name: 'Asian College of Journalism', location: 'Chennai, TN', ranking: 2, fees: '₹5L/year', exam: 'ACJ Entrance', course: 'PG Diploma Journalism', type: 'Private' },
            { name: 'XIC Mumbai', location: 'Mumbai, MH', ranking: 3, fees: '₹3L/year', exam: 'XIC OET', course: 'Diploma / PG Diploma', type: 'Private' },
            { name: 'Symbiosis Centre for Media & Communication', location: 'Pune, MH', ranking: 4, fees: '₹4.5L/year', exam: 'SET', course: 'B.A. Mass Communication', type: 'Private' },
        ],
        abroad: [
            { name: 'Columbia Journalism School', location: 'New York, USA', ranking: 1, fees: '$65,000/year', exam: 'GRE + TOEFL', course: 'M.S. Journalism', type: 'Premier' },
            { name: 'Northwestern University (Medill)', location: 'Evanston, USA', ranking: 2, fees: '$58,000/year', exam: 'GRE + TOEFL', course: 'M.S. Journalism', type: 'Premier' },
            { name: 'London School of Economics', location: 'London, UK', ranking: 3, fees: '£28,000/year', exam: 'IELTS + Writing Sample', course: 'M.Sc Media & Communications', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'IELTS + Portfolio', course: 'M.J. Journalism', type: 'Premier' },
        ]
    },
    'Startup Founder': {
        india: [
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 1, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'ISB Hyderabad', location: 'Hyderabad, TS', ranking: 2, fees: '₹35L total', exam: 'GMAT / GRE', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'BITS Pilani', location: 'Pilani, RJ', ranking: 3, fees: '₹5.5L/year', exam: 'BITSAT', course: 'B.E. + M.Sc Economics', type: 'Private' },
            { name: 'Ashoka University', location: 'Sonipat, HR', ranking: 4, fees: '₹9L/year', exam: 'Ashoka Aptitude Test', course: 'B.A. Entrepreneurship', type: 'Private' },
        ],
        abroad: [
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 1, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. MS&E', type: 'Premier' },
            { name: 'Harvard Business School', location: 'Boston, USA', ranking: 2, fees: '$73,000/year', exam: 'GMAT + TOEFL', course: 'MBA', type: 'Premier' },
            { name: 'MIT', location: 'Cambridge, USA', ranking: 3, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Management Science', type: 'Premier' },
            { name: 'INSEAD', location: 'Fontainebleau, France', ranking: 4, fees: 'EUR 45,000/year', exam: 'GMAT + IELTS', course: 'MBA', type: 'Premier' },
        ]
    },
    'Product Manager': {
        india: [
            { name: 'IIM Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹25L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 2, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'ISB Hyderabad', location: 'Hyderabad, TS', ranking: 3, fees: '₹35L total', exam: 'GMAT / GRE', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'XLRI Jamshedpur', location: 'Jamshedpur, JH', ranking: 4, fees: '₹24L total', exam: 'XAT + GD/PI', course: 'PGDM (BM)', type: 'Premier' },
        ],
        abroad: [
            { name: 'Stanford Graduate School of Business', location: 'Stanford, USA', ranking: 1, fees: '$74,000/year', exam: 'GMAT + TOEFL', course: 'MBA', type: 'Premier' },
            { name: 'Harvard Business School', location: 'Boston, USA', ranking: 2, fees: '$73,000/year', exam: 'GMAT + TOEFL', course: 'MBA', type: 'Premier' },
            { name: 'INSEAD', location: 'Fontainebleau, France', ranking: 3, fees: 'EUR 45,000/year', exam: 'GMAT + IELTS', course: 'MBA', type: 'Premier' },
            { name: 'London Business School', location: 'London, UK', ranking: 4, fees: '£45,000/year', exam: 'GMAT + IELTS', course: 'Masters in Management', type: 'Premier' },
        ]
    },
    'Business Management': {
        india: [
            { name: 'IIM Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹25L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 2, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'IIM Calcutta', location: 'Kolkata, WB', ranking: 3, fees: '₹23L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'FMS Delhi', location: 'New Delhi', ranking: 4, fees: '₹2L total', exam: 'CAT + GD/PI', course: 'MBA', type: 'Premier' },
        ],
        abroad: [
            { name: 'Harvard Business School', location: 'Boston, USA', ranking: 1, fees: '$73,000/year', exam: 'GMAT + TOEFL', course: 'MBA', type: 'Premier' },
            { name: 'Stanford GSB', location: 'Stanford, USA', ranking: 2, fees: '$74,000/year', exam: 'GMAT + TOEFL', course: 'MBA', type: 'Premier' },
            { name: 'Wharton (UPenn)', location: 'Philadelphia, USA', ranking: 3, fees: '$58,000/year', exam: 'GMAT + TOEFL', course: 'MBA', type: 'Premier' },
            { name: 'INSEAD', location: 'Fontainebleau, France', ranking: 4, fees: 'EUR 45,000/year', exam: 'GMAT + IELTS', course: 'MBA', type: 'Premier' },
        ]
    },
    'HR Management': {
        india: [
            { name: 'XLRI Jamshedpur', location: 'Jamshedpur, JH', ranking: 1, fees: '₹24L total', exam: 'XAT + GD/PI', course: 'PGDM (HRM)', type: 'Premier' },
            { name: 'TISS Mumbai', location: 'Mumbai, MH', ranking: 2, fees: '₹2.5L total', exam: 'TISSNET + PIT', course: 'M.A. HRM & LR', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 3, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA HR)', type: 'Premier' },
            { name: 'MDI Gurgaon', location: 'Gurgaon, HR', ranking: 4, fees: '₹22L total', exam: 'CAT + GD/PI', course: 'PGDM (HR)', type: 'Premier' },
        ],
        abroad: [
            { name: 'Cornell University (ILR)', location: 'Ithaca, USA', ranking: 1, fees: '$58,000/year', exam: 'GMAT + TOEFL', course: 'MILR', type: 'Premier' },
            { name: 'London School of Economics', location: 'London, UK', ranking: 2, fees: '£28,000/year', exam: 'GMAT + IELTS', course: 'M.Sc HRM', type: 'Premier' },
            { name: 'University of Michigan', location: 'Ann Arbor, USA', ranking: 3, fees: '$52,000/year', exam: 'GMAT + TOEFL', course: 'MHRIR', type: 'Premier' },
            { name: 'INSEAD', location: 'Fontainebleau, France', ranking: 4, fees: 'EUR 45,000/year', exam: 'GMAT + IELTS', course: 'MBA (HR)', type: 'Premier' },
        ]
    },
    'Software Designer': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE', type: 'Premier' },
            { name: 'IIT Delhi', location: 'New Delhi', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE', type: 'Premier' },
            { name: 'IIIT Hyderabad', location: 'Hyderabad, TS', ranking: 3, fees: '₹3.5L/year', exam: 'JEE Advanced', course: 'B.Tech CSE + MS', type: 'Premier' },
            { name: 'BITS Pilani', location: 'Pilani, RJ', ranking: 4, fees: '₹5.5L/year', exam: 'BITSAT', course: 'B.E. Computer Science', type: 'Private' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science', type: 'Premier' },
            { name: 'Carnegie Mellon', location: 'Pittsburgh, USA', ranking: 3, fees: '$54,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science', type: 'Premier' },
            { name: 'University of Waterloo', location: 'Waterloo, Canada', ranking: 4, fees: 'CAD 38,000/year', exam: 'SAT + IELTS', course: 'B.S. Computer Science', type: 'Premier' },
        ]
    },
    'Mechanical Engineering': {
        india: [
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Mechanical', type: 'Premier' },
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Mechanical', type: 'Premier' },
            { name: 'IIT Delhi', location: 'New Delhi', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Mechanical', type: 'Premier' },
            { name: 'BITS Pilani', location: 'Pilani, RJ', ranking: 4, fees: '₹5.5L/year', exam: 'BITSAT', course: 'B.E. Mechanical', type: 'Private' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Mechanical Engineering', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Mechanical Engineering', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 3, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Mechanical Engineering', type: 'Public' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Mechanical Engineering', type: 'Public' },
        ]
    },
    'Chemical Engineering': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Chemical', type: 'Premier' },
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Chemical', type: 'Premier' },
            { name: 'IIT Delhi', location: 'New Delhi', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Chemical', type: 'Premier' },
            { name: 'ICT Mumbai', location: 'Mumbai, MH', ranking: 4, fees: '₹1.5L/year', exam: 'MHT-CET / JEE Main', course: 'B.Tech Chemical', type: 'Premier' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Chemical Engineering', type: 'Premier' },
            { name: 'Caltech', location: 'Pasadena, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Chemical Engineering', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 3, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Chemical Engineering', type: 'Public' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Chemical Engineering', type: 'Public' },
        ]
    },
    'Electrical Engineering': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Electrical', type: 'Premier' },
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Electrical', type: 'Premier' },
            { name: 'IIT Delhi', location: 'New Delhi', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Electrical', type: 'Premier' },
            { name: 'BITS Pilani', location: 'Pilani, RJ', ranking: 4, fees: '₹5.5L/year', exam: 'BITSAT', course: 'B.E. Electrical', type: 'Private' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Electrical Engineering', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Electrical Engineering', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 3, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Electrical Engineering', type: 'Public' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Electrical Engineering', type: 'Public' },
        ]
    },
    'Computer Engineering': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE', type: 'Premier' },
            { name: 'IIT Delhi', location: 'New Delhi', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE', type: 'Premier' },
            { name: 'IIIT Hyderabad', location: 'Hyderabad, TS', ranking: 3, fees: '₹3.5L/year', exam: 'JEE Advanced', course: 'B.Tech CSE + MS', type: 'Premier' },
            { name: 'NIT Trichy', location: 'Tiruchirappalli, TN', ranking: 4, fees: '₹1.8L/year', exam: 'JEE Main', course: 'B.Tech CSE', type: 'Premier' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Engineering', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Engineering', type: 'Premier' },
            { name: 'Carnegie Mellon', location: 'Pittsburgh, USA', ranking: 3, fees: '$54,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Engineering', type: 'Premier' },
            { name: 'University of Waterloo', location: 'Waterloo, Canada', ranking: 4, fees: 'CAD 38,000/year', exam: 'SAT + IELTS', course: 'B.S. Computer Engineering', type: 'Premier' },
        ]
    },
    'Civil Engineering': {
        india: [
            { name: 'IIT Roorkee', location: 'Roorkee, UK', ranking: 1, fees: '₹2.5L/year', exam: 'JEE Advanced', course: 'B.Tech Civil', type: 'Premier' },
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Civil', type: 'Premier' },
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Civil', type: 'Premier' },
            { name: 'NIT Surathkal', location: 'Mangalore, KA', ranking: 4, fees: '₹1.8L/year', exam: 'JEE Main', course: 'B.Tech Civil', type: 'Premier' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Civil Engineering', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 2, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Civil Engineering', type: 'Public' },
            { name: 'TU Delft', location: 'Delft, Netherlands', ranking: 3, fees: 'EUR 12,000/year', exam: 'Portfolio + Math', course: 'B.Sc Civil Engineering', type: 'Public' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 4, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Engineering', type: 'Premier' },
        ]
    },
    'Aerospace Engineering': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Aerospace', type: 'Premier' },
            { name: 'IIT Kharagpur', location: 'Kharagpur, WB', ranking: 2, fees: '₹2.5L/year', exam: 'JEE Advanced', course: 'B.Tech Aerospace', type: 'Premier' },
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Aerospace', type: 'Premier' },
            { name: 'IIST Thiruvananthapuram', location: 'Trivandrum, KL', ranking: 4, fees: '₹1.2L/year', exam: 'JEE Advanced', course: 'B.Tech Aerospace', type: 'Government' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Aerospace Engineering', type: 'Premier' },
            { name: 'Caltech', location: 'Pasadena, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Aerospace Engineering', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 3, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Engineering (Aerospace)', type: 'Premier' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Aerospace', type: 'Public' },
        ]
    },
    'Biotechnology Researcher': {
        india: [
            { name: 'IIT Delhi', location: 'New Delhi', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Biochemical', type: 'Premier' },
            { name: 'IIT Kharagpur', location: 'Kharagpur, WB', ranking: 2, fees: '₹2.5L/year', exam: 'JEE Advanced', course: 'B.Tech Biotechnology', type: 'Premier' },
            { name: 'AIIMS New Delhi', location: 'New Delhi', ranking: 3, fees: '₹6,000/year', exam: 'NEET UG', course: 'MBBS + M.Sc Biotechnology', type: 'Premier' },
            { name: 'University of Hyderabad', location: 'Hyderabad, TS', ranking: 4, fees: '₹30,000/year', exam: 'CUET', course: 'M.Sc Biotechnology', type: 'Government' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Biological Engineering', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Bioengineering', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 3, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Natural Sciences (Biological)', type: 'Premier' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Biotechnology', type: 'Public' },
        ]
    },
    'Bioinformatician': {
        india: [
            { name: 'IIT Delhi', location: 'New Delhi', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Biochemical', type: 'Premier' },
            { name: 'IIT Kharagpur', location: 'Kharagpur, WB', ranking: 2, fees: '₹2.5L/year', exam: 'JEE Advanced', course: 'B.Tech Biotechnology', type: 'Premier' },
            { name: 'University of Hyderabad', location: 'Hyderabad, TS', ranking: 3, fees: '₹30,000/year', exam: 'CUET', course: 'M.Sc Bioinformatics', type: 'Government' },
            { name: 'SASTRA University', location: 'Thanjavur, TN', ranking: 4, fees: '₹2.5L/year', exam: 'JEE Main / SASTRA', course: 'B.Tech Bioinformatics', type: 'Private' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computational Biology', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Bioinformatics', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 3, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Natural Sciences', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 4, fees: 'CAD 45,000/year', exam: 'SAT + IELTS', course: 'B.Sc Bioinformatics', type: 'Premier' },
        ]
    },
    'Space Scientist': {
        india: [
            { name: 'IIST Thiruvananthapuram', location: 'Trivandrum, KL', ranking: 1, fees: '₹1.2L/year', exam: 'JEE Advanced', course: 'B.Tech Aerospace / Avionics', type: 'Government' },
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Aerospace', type: 'Premier' },
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Aerospace', type: 'Premier' },
            { name: 'University of Hyderabad', location: 'Hyderabad, TS', ranking: 4, fees: '₹30,000/year', exam: 'CUET', course: 'M.Sc Physics / Astronomy', type: 'Government' },
        ],
        abroad: [
            { name: 'Caltech', location: 'Pasadena, USA', ranking: 1, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Astrophysics', type: 'Premier' },
            { name: 'MIT', location: 'Cambridge, USA', ranking: 2, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Physics (Astrophysics)', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 3, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Natural Sciences (Physical)', type: 'Premier' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Physics', type: 'Public' },
        ]
    },
    'Physicist': {
        india: [
            { name: 'IISc Bangalore', location: 'Bangalore, KA', ranking: 1, fees: '₹30,000/year', exam: 'KVPY / JEE Advanced', course: 'B.S. Physics', type: 'Premier' },
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Engineering Physics', type: 'Premier' },
            { name: 'IIT Kanpur', location: 'Kanpur, UP', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.S. Physics', type: 'Premier' },
            { name: 'University of Delhi', location: 'New Delhi', ranking: 4, fees: '₹20,000/year', exam: 'CUET', course: 'B.Sc Physics (Hons)', type: 'Government' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Physics', type: 'Premier' },
            { name: 'Caltech', location: 'Pasadena, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Physics', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 3, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Natural Sciences (Physical)', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 4, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Physics', type: 'Public' },
        ]
    },
    'Mathematician': {
        india: [
            { name: 'IISc Bangalore', location: 'Bangalore, KA', ranking: 1, fees: '₹30,000/year', exam: 'KVPY / JEE Advanced', course: 'B.S. Mathematics', type: 'Premier' },
            { name: 'ISI Kolkata', location: 'Kolkata, WB', ranking: 2, fees: '₹1.5L/year', exam: 'ISI Admission Test', course: 'B.Stat / B.Math', type: 'Premier' },
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech + M.Tech Mathematics', type: 'Premier' },
            { name: 'Chennai Mathematical Institute', location: 'Chennai, TN', ranking: 4, fees: '₹1.5L/year', exam: 'CMI Entrance', course: 'B.Sc Mathematics', type: 'Premier' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Mathematics', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Mathematics', type: 'Premier' },
            { name: 'University of Oxford', location: 'Oxford, UK', ranking: 3, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Mathematics', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 4, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Mathematics', type: 'Public' },
        ]
    },
    'Digital Marketing Manager': {
        india: [
            { name: 'IIM Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹25L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA Marketing)', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 2, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA Marketing)', type: 'Premier' },
            { name: 'MICA Ahmedabad', location: 'Ahmedabad, GJ', ranking: 3, fees: '₹18L total', exam: 'MICAT + CAT/XAT', course: 'PGDM (Communications)', type: 'Premier' },
            { name: 'Symbiosis Pune', location: 'Pune, MH', ranking: 4, fees: '₹16L total', exam: 'SNAP', course: 'MBA (Marketing)', type: 'Private' },
        ],
        abroad: [
            { name: 'Northwestern University (Kellogg)', location: 'Evanston, USA', ranking: 1, fees: '$68,000/year', exam: 'GMAT + TOEFL', course: 'MBA (Marketing)', type: 'Premier' },
            { name: 'University of Pennsylvania (Wharton)', location: 'Philadelphia, USA', ranking: 2, fees: '$58,000/year', exam: 'GMAT + TOEFL', course: 'MBA (Marketing)', type: 'Premier' },
            { name: 'London Business School', location: 'London, UK', ranking: 3, fees: '£45,000/year', exam: 'GMAT + IELTS', course: 'Masters in Marketing', type: 'Premier' },
            { name: 'INSEAD', location: 'Fontainebleau, France', ranking: 4, fees: 'EUR 45,000/year', exam: 'GMAT + IELTS', course: 'MBA (Marketing)', type: 'Premier' },
        ]
    },
    'Content Strategist': {
        india: [
            { name: 'MICA Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹18L total', exam: 'MICAT + CAT/XAT', course: 'PGDM (Communications)', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 2, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'XIC Mumbai', location: 'Mumbai, MH', ranking: 3, fees: '₹3L/year', exam: 'XIC OET', course: 'Diploma / PG Diploma', type: 'Private' },
            { name: 'Symbiosis Pune', location: 'Pune, MH', ranking: 4, fees: '₹16L total', exam: 'SNAP', course: 'MBA (Marketing)', type: 'Private' },
        ],
        abroad: [
            { name: 'Northwestern University (Medill)', location: 'Evanston, USA', ranking: 1, fees: '$58,000/year', exam: 'GRE + TOEFL', course: 'M.S. Journalism / Content Strategy', type: 'Premier' },
            { name: 'Columbia University', location: 'New York, USA', ranking: 2, fees: '$60,000/year', exam: 'GRE + TOEFL', course: 'M.S. Strategic Communication', type: 'Premier' },
            { name: 'London School of Economics', location: 'London, UK', ranking: 3, fees: '£28,000/year', exam: 'IELTS + Writing Sample', course: 'M.Sc Media & Communications', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'IELTS + Portfolio', course: 'M.J. / M.Comms', type: 'Premier' },
        ]
    },
    'Social Media Manager': {
        india: [
            { name: 'MICA Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹18L total', exam: 'MICAT + CAT/XAT', course: 'PGDM (Communications)', type: 'Premier' },
            { name: 'XIC Mumbai', location: 'Mumbai, MH', ranking: 2, fees: '₹3L/year', exam: 'XIC OET', course: 'Diploma / PG Diploma', type: 'Private' },
            { name: 'Symbiosis Pune', location: 'Pune, MH', ranking: 3, fees: '₹16L total', exam: 'SNAP', course: 'MBA (Marketing)', type: 'Private' },
            { name: 'Whistling Woods International', location: 'Mumbai, MH', ranking: 4, fees: '₹6L/year', exam: 'WWI Entrance', course: 'Diploma Digital Marketing', type: 'Private' },
        ],
        abroad: [
            { name: 'Northwestern University (Medill)', location: 'Evanston, USA', ranking: 1, fees: '$58,000/year', exam: 'GRE + TOEFL', course: 'M.S. Integrated Marketing', type: 'Premier' },
            { name: 'New York University', location: 'New York, USA', ranking: 2, fees: '$56,000/year', exam: 'GRE + TOEFL', course: 'M.S. Integrated Marketing', type: 'Premier' },
            { name: 'London School of Economics', location: 'London, UK', ranking: 3, fees: '£28,000/year', exam: 'IELTS + Writing Sample', course: 'M.Sc Media & Communications', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'IELTS + Portfolio', course: 'M.Comms', type: 'Premier' },
        ]
    },
    'YouTuber / Content Creator': {
        india: [
            { name: 'MICA Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹18L total', exam: 'MICAT + CAT/XAT', course: 'PGDM (Communications)', type: 'Premier' },
            { name: 'XIC Mumbai', location: 'Mumbai, MH', ranking: 2, fees: '₹3L/year', exam: 'XIC OET', course: 'Diploma / PG Diploma', type: 'Private' },
            { name: 'Whistling Woods International', location: 'Mumbai, MH', ranking: 3, fees: '₹6L/year', exam: 'WWI Entrance', course: 'Diploma Filmmaking', type: 'Private' },
            { name: 'FTII Pune', location: 'Pune, MH', ranking: 4, fees: '₹1.5L/year', exam: 'FTII Entrance', course: 'Diploma Direction / Editing', type: 'Government' },
        ],
        abroad: [
            { name: 'USC School of Cinematic Arts', location: 'Los Angeles, USA', ranking: 1, fees: '$58,000/year', exam: 'Portfolio + TOEFL', course: 'B.A. Cinema & Media', type: 'Premier' },
            { name: 'New York University (Tisch)', location: 'New York, USA', ranking: 2, fees: '$58,000/year', exam: 'Portfolio + TOEFL', course: 'B.F.A Film & TV', type: 'Premier' },
            { name: 'University of Southern California', location: 'Los Angeles, USA', ranking: 3, fees: '$58,000/year', exam: 'Portfolio + TOEFL', course: 'B.A. Communication', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'IELTS + Portfolio', course: 'B.A. Media & Communications', type: 'Premier' },
        ]
    },
    'Game Developer': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE (Game Dev)', type: 'Premier' },
            { name: 'IIIT Hyderabad', location: 'Hyderabad, TS', ranking: 2, fees: '₹3.5L/year', exam: 'JEE Advanced', course: 'B.Tech CSE + MS', type: 'Premier' },
            { name: 'BITS Pilani', location: 'Pilani, RJ', ranking: 3, fees: '₹5.5L/year', exam: 'BITSAT', course: 'B.E. Computer Science', type: 'Private' },
            { name: 'Backstage Pass Institute', location: 'Hyderabad, TS', ranking: 4, fees: '₹4L/year', exam: 'Backstage Pass Entrance', course: 'B.Sc Game Art / Design', type: 'Private' },
        ],
        abroad: [
            { name: 'USC School of Cinematic Arts', location: 'Los Angeles, USA', ranking: 1, fees: '$58,000/year', exam: 'Portfolio + TOEFL', course: 'B.A. Interactive Media & Games', type: 'Premier' },
            { name: 'Carnegie Mellon', location: 'Pittsburgh, USA', ranking: 2, fees: '$54,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science (Game Dev)', type: 'Premier' },
            { name: 'DigiPen Institute', location: 'Redmond, USA', ranking: 3, fees: '$35,000/year', exam: 'SAT + TOEFL', course: 'B.S. Computer Science (Game Design)', type: 'Specialized' },
            { name: 'University of Waterloo', location: 'Waterloo, Canada', ranking: 4, fees: 'CAD 38,000/year', exam: 'SAT + IELTS', course: 'B.S. Computer Science', type: 'Premier' },
        ]
    },
    'Esports Player': {
        india: [
            { name: 'No formal degree required', location: 'India', ranking: '-', fees: 'N/A', exam: 'Skill-based', course: 'Professional Gaming', type: 'Sports' },
            { name: 'Backstage Pass Institute', location: 'Hyderabad, TS', ranking: 1, fees: '₹4L/year', exam: 'Backstage Pass Entrance', course: 'B.Sc Game Design', type: 'Private' },
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech CSE', type: 'Premier' },
            { name: 'NIT Trichy', location: 'Tiruchirappalli, TN', ranking: 3, fees: '₹1.8L/year', exam: 'JEE Main', course: 'B.Tech CSE', type: 'Premier' },
        ],
        abroad: [
            { name: 'University of California Irvine', location: 'Irvine, USA', ranking: 1, fees: '$45,000/year', exam: 'SAT + TOEFL', course: 'B.A. Esports Management', type: 'Premier' },
            { name: 'Ohio University', location: 'Athens, USA', ranking: 2, fees: '$35,000/year', exam: 'SAT + TOEFL', course: 'B.S. Esports Management', type: 'Premier' },
            { name: 'Shenandoah University', location: 'Winchester, USA', ranking: 3, fees: '$38,000/year', exam: 'SAT + TOEFL', course: 'B.S. Esports Management', type: 'Premier' },
            { name: 'University of Chichester', location: 'Chichester, UK', ranking: 4, fees: '£18,000/year', exam: 'A-Levels / IB', course: 'B.A. Esports', type: 'Premier' },
        ]
    },
    'Robotics Engineer': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Mechanical (Robotics)', type: 'Premier' },
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Mechanical (Robotics)', type: 'Premier' },
            { name: 'BITS Pilani', location: 'Pilani, RJ', ranking: 3, fees: '₹5.5L/year', exam: 'BITSAT', course: 'B.E. Mechanical + Robotics', type: 'Private' },
            { name: 'SRM University', location: 'Chennai, TN', ranking: 4, fees: '₹3.8L/year', exam: 'SRMJEEE', course: 'B.Tech Robotics', type: 'Private' },
        ],
        abroad: [
            { name: 'Carnegie Mellon', location: 'Pittsburgh, USA', ranking: 1, fees: '$54,000/year', exam: 'SAT + TOEFL', course: 'B.S. Robotics', type: 'Premier' },
            { name: 'MIT', location: 'Cambridge, USA', ranking: 2, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Mechanical Engineering (Robotics)', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 3, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Robotics', type: 'Public' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Mechatronics', type: 'Public' },
        ]
    },
    'Sustainability Consultant': {
        india: [
            { name: 'IIM Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹25L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 2, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'TERI School of Advanced Studies', location: 'New Delhi', ranking: 3, fees: '₹3L/year', exam: 'TERI Entrance', course: 'M.Sc Sustainability', type: 'Specialized' },
            { name: 'Ashoka University', location: 'Sonipat, HR', ranking: 4, fees: '₹9L/year', exam: 'Ashoka Aptitude Test', course: 'B.A. Environmental Studies', type: 'Private' },
        ],
        abroad: [
            { name: 'Yale University', location: 'New Haven, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.A. Environmental Studies', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Geography & Environmental', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 3, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Environmental Sciences', type: 'Public' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 38,000/year', exam: 'ATAR / IB', course: 'B.Sc Environmental Science', type: 'Premier' },
        ]
    },
    'Renewable Energy Engineer': {
        india: [
            { name: 'IIT Bombay', location: 'Mumbai, MH', ranking: 1, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Energy Science', type: 'Premier' },
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 2, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Mechanical (Energy)', type: 'Premier' },
            { name: 'IIT Delhi', location: 'New Delhi', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Energy Studies', type: 'Premier' },
            { name: 'TERI School of Advanced Studies', location: 'New Delhi', ranking: 4, fees: '₹3L/year', exam: 'TERI Entrance', course: 'M.Sc Renewable Energy', type: 'Specialized' },
        ],
        abroad: [
            { name: 'MIT', location: 'Cambridge, USA', ranking: 1, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.S. Mechanical Engineering (Energy)', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.S. Energy Resources Engineering', type: 'Premier' },
            { name: 'ETH Zurich', location: 'Zurich, Switzerland', ranking: 3, fees: 'CHF 1,500/year', exam: 'Aptitude Test', course: 'B.Sc Energy Science', type: 'Public' },
            { name: 'TU Munich', location: 'Munich, Germany', ranking: 4, fees: 'EUR 3,000/year', exam: 'SAT + German B2', course: 'B.Sc Energy Engineering', type: 'Public' },
        ]
    },
    'Nutritionist': {
        india: [
            { name: 'AIIMS New Delhi', location: 'New Delhi', ranking: 1, fees: '₹6,000/year', exam: 'NEET UG', course: 'MBBS + M.Sc Nutrition', type: 'Premier' },
            { name: 'NIN Hyderabad', location: 'Hyderabad, TS', ranking: 2, fees: '₹50,000/year', exam: 'Entrance + Interview', course: 'M.Sc Applied Nutrition', type: 'Government' },
            { name: 'Lady Irwin College', location: 'New Delhi', ranking: 3, fees: '₹25,000/year', exam: 'CUET', course: 'B.Sc Home Science (Food & Nutrition)', type: 'Government' },
            { name: 'University of Mumbai', location: 'Mumbai, MH', ranking: 4, fees: '₹30,000/year', exam: 'University Entrance', course: 'B.Sc Food & Nutrition', type: 'Government' },
        ],
        abroad: [
            { name: 'Harvard T.H. Chan School', location: 'Boston, USA', ranking: 1, fees: '$58,000/year', exam: 'GRE + TOEFL', course: 'M.P.H. Nutrition', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'GRE + IELTS', course: 'M.Phil Nutrition', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 3, fees: 'CAD 38,000/year', exam: 'GRE + IELTS', course: 'M.Sc Nutritional Sciences', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'GRE + IELTS', course: 'M.Sc Dietetics', type: 'Premier' },
        ]
    },
    'Pharmacist': {
        india: [
            { name: 'AIIMS New Delhi', location: 'New Delhi', ranking: 1, fees: '₹6,000/year', exam: 'NEET UG', course: 'MBBS + D.Pharm', type: 'Premier' },
            { name: 'NIPER Mohali', location: 'Mohali, PB', ranking: 2, fees: '₹1.5L/year', exam: 'NIPER JEE', course: 'M.Pharm', type: 'Premier' },
            { name: 'Jamia Hamdard', location: 'New Delhi', ranking: 3, fees: '₹2.5L/year', exam: 'NEET / Jamia Entrance', course: 'B.Pharm', type: 'Private' },
            { name: 'BITS Pilani', location: 'Pilani, RJ', ranking: 4, fees: '₹5.5L/year', exam: 'BITSAT', course: 'B.Pharm', type: 'Private' },
        ],
        abroad: [
            { name: 'University of Michigan', location: 'Ann Arbor, USA', ranking: 1, fees: '$52,000/year', exam: 'PCAT + TOEFL', course: 'Pharm.D.', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'M.Pharm', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 3, fees: 'CAD 38,000/year', exam: 'PCAT + IELTS', course: 'Pharm.D.', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'PCAT + IELTS', course: 'Pharm.D.', type: 'Premier' },
        ]
    },
    'Motivational Speaker': {
        india: [
            { name: 'IIM Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹25L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 2, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'TISS Mumbai', location: 'Mumbai, MH', ranking: 3, fees: '₹1.2L/year', exam: 'TISSNET + PIT', course: 'M.A. Social Work', type: 'Premier' },
            { name: 'University of Delhi', location: 'New Delhi', ranking: 4, fees: '₹20,000/year', exam: 'CUET', course: 'B.A. Psychology + Communication', type: 'Government' },
        ],
        abroad: [
            { name: 'Harvard University', location: 'Boston, USA', ranking: 1, fees: '$55,000/year', exam: 'SAT + TOEFL', course: 'B.A. Psychology / Communication', type: 'Premier' },
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 2, fees: '$56,000/year', exam: 'SAT + TOEFL', course: 'B.A. Communication', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 3, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. English / Psychology', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'ATAR / IB', course: 'B.A. Communication', type: 'Premier' },
        ]
    },
    'Counselor': {
        india: [
            { name: 'TISS Mumbai', location: 'Mumbai, MH', ranking: 1, fees: '₹1.2L/year', exam: 'TISSNET + PIT', course: 'M.A. Clinical Psychology', type: 'Premier' },
            { name: 'University of Delhi', location: 'New Delhi', ranking: 2, fees: '₹20,000/year', exam: 'CUET', course: 'M.A. Psychology', type: 'Government' },
            { name: 'Christ University', location: 'Bangalore, KA', ranking: 3, fees: '₹2L/year', exam: 'CUET / Christ Entrance', course: 'M.A. Clinical Psychology', type: 'Private' },
            { name: 'Ashoka University', location: 'Sonipat, HR', ranking: 4, fees: '₹9L/year', exam: 'Ashoka Aptitude Test', course: 'B.A. Psychology', type: 'Private' },
        ],
        abroad: [
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 1, fees: '$56,000/year', exam: 'GRE + TOEFL', course: 'M.A. / Ph.D. Psychology', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'GRE + IELTS', course: 'M.Phil Psychology', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 3, fees: 'CAD 42,000/year', exam: 'GRE + IELTS', course: 'M.A. Counseling Psychology', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'GRE + IELTS', course: 'M.A. Counseling', type: 'Premier' },
        ]
    },
    'Career Counselor': {
        india: [
            { name: 'TISS Mumbai', location: 'Mumbai, MH', ranking: 1, fees: '₹1.2L/year', exam: 'TISSNET + PIT', course: 'M.A. Career Counseling', type: 'Premier' },
            { name: 'University of Delhi', location: 'New Delhi', ranking: 2, fees: '₹20,000/year', exam: 'CUET', course: 'M.A. Psychology', type: 'Government' },
            { name: 'Christ University', location: 'Bangalore, KA', ranking: 3, fees: '₹2L/year', exam: 'CUET / Christ Entrance', course: 'M.A. Psychology', type: 'Private' },
            { name: 'IGNOU', location: 'New Delhi', ranking: 4, fees: '₹15,000/year', exam: 'Direct Admission', course: 'M.A. Psychology', type: 'Distance' },
        ],
        abroad: [
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 1, fees: '$56,000/year', exam: 'GRE + TOEFL', course: 'M.A. Education / Counseling', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'GRE + IELTS', course: 'M.Phil Education', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 3, fees: 'CAD 42,000/year', exam: 'GRE + IELTS', course: 'M.A. Counseling Psychology', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'GRE + IELTS', course: 'M.A. Career Development', type: 'Premier' },
        ]
    },
    'Police': {
        india: [
            { name: 'National Police Academy', location: 'Hyderabad, TS', ranking: 1, fees: 'Government Funded', exam: 'UPSC CSE', course: 'IPS Training', type: 'Government' },
            { name: 'Sardar Vallabhbhai Patel Police Academy', location: 'Hyderabad, TS', ranking: 2, fees: 'Government Funded', exam: 'UPSC CSE', course: 'IPS Training', type: 'Government' },
            { name: 'State Police Training Schools', location: 'Various States', ranking: 3, fees: 'Government Funded', exam: 'State PSC', course: 'Police Constable / SI', type: 'Government' },
            { name: 'Forensic Science University', location: 'Gandhinagar, GJ', ranking: 4, fees: '₹1.5L/year', exam: 'NFSU Entrance', course: 'B.Sc Forensic Science', type: 'Government' },
        ],
        abroad: [
            { name: 'FBI National Academy', location: 'Quantico, USA', ranking: 1, fees: 'Government Funded', exam: 'Nomination by Agency', course: 'Law Enforcement Executive', type: 'Government' },
            { name: 'Police Staff College', location: 'Bramshill, UK', ranking: 2, fees: 'Government Funded', exam: 'Nomination', course: 'Senior Police Leadership', type: 'Government' },
            { name: 'Australian Institute of Police Management', location: 'Manly, Australia', ranking: 3, fees: 'Government Funded', exam: 'Nomination', course: 'Police Leadership', type: 'Government' },
            { name: 'Royal Canadian Mounted Police', location: 'Regina, Canada', ranking: 4, fees: 'Government Funded', exam: 'RCMP Recruitment', course: 'Police Training', type: 'Government' },
        ]
    },
    'Army': {
        india: [
            { name: 'NDA Khadakwasla', location: 'Pune, MH', ranking: 1, fees: 'Government Funded', exam: 'UPSC NDA', course: 'B.Sc + Military Training', type: 'Defence' },
            { name: 'IMA Dehradun', location: 'Dehradun, UK', ranking: 2, fees: 'Government Funded', exam: 'CDS / Direct Entry', course: 'Gentleman Cadet Training', type: 'Defence' },
            { name: 'OTA Chennai', location: 'Chennai, TN', ranking: 3, fees: 'Government Funded', exam: 'CDS / SSC Entry', course: 'Officer Training', type: 'Defence' },
            { name: 'OTA Gaya', location: 'Gaya, BR', ranking: 4, fees: 'Government Funded', exam: 'CDS / SSC Entry', course: 'Officer Training', type: 'Defence' },
        ],
        abroad: [
            { name: 'US Military Academy (West Point)', location: 'New York, USA', ranking: 1, fees: 'Government Funded', exam: 'Congressional Nomination', course: 'B.S. + Military Training', type: 'Defence' },
            { name: 'Royal Military Academy Sandhurst', location: 'Sandhurst, UK', ranking: 2, fees: 'Government Funded', exam: 'Army Officer Selection', course: 'Officer Training', type: 'Defence' },
            { name: 'Australian Defence Force Academy', location: 'Canberra, Australia', ranking: 3, fees: 'Government Funded', exam: 'ADF Recruitment', course: 'B.A. / B.Sc + Military', type: 'Defence' },
            { name: 'Royal Military College of Canada', location: 'Kingston, Canada', ranking: 4, fees: 'Government Funded', exam: 'Canadian Forces Entry', course: 'B.A. / B.Sc + Military', type: 'Defence' },
        ]
    },
    'Air Force': {
        india: [
            { name: 'NDA Khadakwasla', location: 'Pune, MH', ranking: 1, fees: 'Government Funded', exam: 'UPSC NDA', course: 'B.Sc + Flying Training', type: 'Defence' },
            { name: 'Air Force Academy', location: 'Dundigal, TS', ranking: 2, fees: 'Government Funded', exam: 'CDS / AFCAT', course: 'Flying / Technical Training', type: 'Defence' },
            { name: 'AFTC Jodhpur', location: 'Jodhpur, RJ', ranking: 3, fees: 'Government Funded', exam: 'AFCAT', course: 'Technical Training', type: 'Defence' },
            { name: 'IIST Thiruvananthapuram', location: 'Trivandrum, KL', ranking: 4, fees: '₹1.2L/year', exam: 'JEE Advanced', course: 'B.Tech Aerospace', type: 'Government' },
        ],
        abroad: [
            { name: 'US Air Force Academy', location: 'Colorado, USA', ranking: 1, fees: 'Government Funded', exam: 'Congressional Nomination', course: 'B.S. + Flight Training', type: 'Defence' },
            { name: 'Royal Air Force College Cranwell', location: 'Cranwell, UK', ranking: 2, fees: 'Government Funded', exam: 'RAF Officer Selection', course: 'Officer Training', type: 'Defence' },
            { name: 'Embry-Riddle Aeronautical University', location: 'Florida, USA', ranking: 3, fees: '$45,000/year', exam: 'SAT + TOEFL', course: 'B.S. Aeronautical Science', type: 'Premier' },
            { name: 'Australian Defence Force Academy', location: 'Canberra, Australia', ranking: 4, fees: 'Government Funded', exam: 'ADF Recruitment', course: 'B.A. / B.Sc + Military', type: 'Defence' },
        ]
    },
    'Navy': {
        india: [
            { name: 'NDA Khadakwasla', location: 'Pune, MH', ranking: 1, fees: 'Government Funded', exam: 'UPSC NDA', course: 'B.Sc + Naval Training', type: 'Defence' },
            { name: 'Indian Naval Academy', location: 'Ezhimala, KL', ranking: 2, fees: 'Government Funded', exam: 'CDS / INET', course: 'Naval Officer Training', type: 'Defence' },
            { name: 'IIT Madras', location: 'Chennai, TN', ranking: 3, fees: '₹2.3L/year', exam: 'JEE Advanced', course: 'B.Tech Naval Architecture', type: 'Premier' },
            { name: 'Cochin University', location: 'Kochi, KL', ranking: 4, fees: '₹50,000/year', exam: 'CUET', course: 'B.Tech Marine Engineering', type: 'Government' },
        ],
        abroad: [
            { name: 'US Naval Academy', location: 'Annapolis, USA', ranking: 1, fees: 'Government Funded', exam: 'Congressional Nomination', course: 'B.S. + Naval Training', type: 'Defence' },
            { name: 'Britannia Royal Naval College', location: 'Dartmouth, UK', ranking: 2, fees: 'Government Funded', exam: 'Royal Navy Entry', course: 'Officer Training', type: 'Defence' },
            { name: 'Australian Maritime College', location: 'Launceston, Australia', ranking: 3, fees: 'AUD 35,000/year', exam: 'SAT + IELTS', course: 'B.Eng Naval Architecture', type: 'Premier' },
            { name: 'Massachusetts Maritime Academy', location: 'Massachusetts, USA', ranking: 4, fees: '$25,000/year', exam: 'SAT + TOEFL', course: 'B.S. Marine Engineering', type: 'Public' },
        ]
    },
    'Administrator': {
        india: [
            { name: 'IIM Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹25L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 2, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA)', type: 'Premier' },
            { name: 'XLRI Jamshedpur', location: 'Jamshedpur, JH', ranking: 3, fees: '₹24L total', exam: 'XAT + GD/PI', course: 'PGDM (BM)', type: 'Premier' },
            { name: 'FMS Delhi', location: 'New Delhi', ranking: 4, fees: '₹2L total', exam: 'CAT + GD/PI', course: 'MBA', type: 'Premier' },
        ],
        abroad: [
            { name: 'Harvard Business School', location: 'Boston, USA', ranking: 1, fees: '$73,000/year', exam: 'GMAT + TOEFL', course: 'MBA', type: 'Premier' },
            { name: 'Stanford GSB', location: 'Stanford, USA', ranking: 2, fees: '$74,000/year', exam: 'GMAT + TOEFL', course: 'MBA', type: 'Premier' },
            { name: 'INSEAD', location: 'Fontainebleau, France', ranking: 3, fees: 'EUR 45,000/year', exam: 'GMAT + IELTS', course: 'MBA', type: 'Premier' },
            { name: 'London Business School', location: 'London, UK', ranking: 4, fees: '£45,000/year', exam: 'GMAT + IELTS', course: 'Masters in Management', type: 'Premier' },
        ]
    },
    'Sales Management': {
        india: [
            { name: 'IIM Ahmedabad', location: 'Ahmedabad, GJ', ranking: 1, fees: '₹25L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA Marketing)', type: 'Premier' },
            { name: 'IIM Bangalore', location: 'Bangalore, KA', ranking: 2, fees: '₹24L total', exam: 'CAT + WAT/PI', course: 'PGP (MBA Marketing)', type: 'Premier' },
            { name: 'MICA Ahmedabad', location: 'Ahmedabad, GJ', ranking: 3, fees: '₹18L total', exam: 'MICAT + CAT/XAT', course: 'PGDM (Sales & Marketing)', type: 'Premier' },
            { name: 'Symbiosis Pune', location: 'Pune, MH', ranking: 4, fees: '₹16L total', exam: 'SNAP', course: 'MBA (Sales & Marketing)', type: 'Private' },
        ],
        abroad: [
            { name: 'Northwestern University (Kellogg)', location: 'Evanston, USA', ranking: 1, fees: '$68,000/year', exam: 'GMAT + TOEFL', course: 'MBA (Marketing & Sales)', type: 'Premier' },
            { name: 'University of Pennsylvania (Wharton)', location: 'Philadelphia, USA', ranking: 2, fees: '$58,000/year', exam: 'GMAT + TOEFL', course: 'MBA (Marketing)', type: 'Premier' },
            { name: 'London Business School', location: 'London, UK', ranking: 3, fees: '£45,000/year', exam: 'GMAT + IELTS', course: 'Masters in Marketing', type: 'Premier' },
            { name: 'INSEAD', location: 'Fontainebleau, France', ranking: 4, fees: 'EUR 45,000/year', exam: 'GMAT + IELTS', course: 'MBA (Marketing)', type: 'Premier' },
        ]
    },
    'Philosopher': {
        india: [
            { name: 'JNU Delhi', location: 'New Delhi', ranking: 1, fees: '₹10,000/year', exam: 'JNUEE', course: 'M.A. Philosophy', type: 'Premier' },
            { name: 'University of Delhi', location: 'New Delhi', ranking: 2, fees: '₹20,000/year', exam: 'CUET', course: 'B.A. / M.A. Philosophy', type: 'Government' },
            { name: 'St. Stephen\'s College', location: 'New Delhi', ranking: 3, fees: '₹35,000/year', exam: 'CUET', course: 'B.A. Philosophy', type: 'Premier' },
            { name: 'Presidency University', location: 'Kolkata, WB', ranking: 4, fees: '₹15,000/year', exam: 'PUBDET', course: 'B.A. / M.A. Philosophy', type: 'Premier' },
        ],
        abroad: [
            { name: 'University of Oxford', location: 'Oxford, UK', ranking: 1, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Philosophy, Politics & Economics', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Philosophy', type: 'Premier' },
            { name: 'Harvard University', location: 'Boston, USA', ranking: 3, fees: '$55,000/year', exam: 'SAT + TOEFL', course: 'B.A. Philosophy', type: 'Premier' },
            { name: 'Yale University', location: 'New Haven, USA', ranking: 4, fees: '$57,000/year', exam: 'SAT + TOEFL', course: 'B.A. Philosophy', type: 'Premier' },
        ]
    },
    'National Disaster Management': {
        india: [
            { name: 'Tata Institute of Social Sciences', location: 'Mumbai, MH', ranking: 1, fees: '₹1.5L/year', exam: 'TISSNET', course: 'M.A. Disaster Management', type: 'Premier' },
            { name: 'IGNOU', location: 'New Delhi', ranking: 2, fees: '₹15,000/year', exam: 'Direct Admission', course: 'PG Diploma Disaster Management', type: 'Distance' },
            { name: 'Gujarat University', location: 'Ahmedabad, GJ', ranking: 3, fees: '₹30,000/year', exam: 'University Entrance', course: 'M.Sc Disaster Management', type: 'Government' },
            { name: 'University of Hyderabad', location: 'Hyderabad, TS', ranking: 4, fees: '₹30,000/year', exam: 'CUET', course: 'M.A. Disaster Management', type: 'Government' },
        ],
        abroad: [
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 1, fees: '£38,000/year', exam: 'GRE + IELTS', course: 'M.Phil Risk & Disaster Management', type: 'Premier' },
            { name: 'Harvard Kennedy School', location: 'Boston, USA', ranking: 2, fees: '$58,000/year', exam: 'GRE + TOEFL', course: 'M.P.P. Emergency Management', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 3, fees: 'AUD 38,000/year', exam: 'GRE + IELTS', course: 'M.Sc Disaster Resilience', type: 'Premier' },
            { name: 'TU Delft', location: 'Delft, Netherlands', ranking: 4, fees: 'EUR 12,000/year', exam: 'GRE + IELTS', course: 'M.Sc Water Management & Disaster', type: 'Public' },
        ]
    },
    'Language Teacher': {
        india: [
            { name: 'University of Delhi', location: 'New Delhi', ranking: 1, fees: '₹20,000/year', exam: 'CUET', course: 'B.A. + B.Ed (Language)', type: 'Government' },
            { name: 'JNU Delhi', location: 'New Delhi', ranking: 2, fees: '₹10,000/year', exam: 'JNUEE', course: 'B.A. / M.A. Linguistics', type: 'Premier' },
            { name: 'EFLU Hyderabad', location: 'Hyderabad, TS', ranking: 3, fees: '₹50,000/year', exam: 'EFLU Entrance', course: 'B.A. English + Foreign Languages', type: 'Premier' },
            { name: 'Christ University', location: 'Bangalore, KA', ranking: 4, fees: '₹2L/year', exam: 'CUET / Christ Entrance', course: 'B.A. + B.Ed', type: 'Private' },
        ],
        abroad: [
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 1, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Modern & Medieval Languages', type: 'Premier' },
            { name: 'University of Oxford', location: 'Oxford, UK', ranking: 2, fees: '£38,000/year', exam: 'A-Levels / IB', course: 'B.A. Modern Languages', type: 'Premier' },
            { name: 'Harvard Graduate School of Education', location: 'Boston, USA', ranking: 3, fees: '$55,000/year', exam: 'GRE + TOEFL', course: 'Ed.M. Teaching & Learning', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'IELTS + Academic Record', course: 'M.Teach (Languages)', type: 'Premier' },
        ]
    },
    'Marriage Counselor': {
        india: [
            { name: 'TISS Mumbai', location: 'Mumbai, MH', ranking: 1, fees: '₹1.2L/year', exam: 'TISSNET + PIT', course: 'M.A. Clinical Psychology', type: 'Premier' },
            { name: 'University of Delhi', location: 'New Delhi', ranking: 2, fees: '₹20,000/year', exam: 'CUET', course: 'M.A. Psychology', type: 'Government' },
            { name: 'Christ University', location: 'Bangalore, KA', ranking: 3, fees: '₹2L/year', exam: 'CUET / Christ Entrance', course: 'M.A. Clinical Psychology', type: 'Private' },
            { name: 'Ashoka University', location: 'Sonipat, HR', ranking: 4, fees: '₹9L/year', exam: 'Ashoka Aptitude Test', course: 'B.A. Psychology', type: 'Private' },
        ],
        abroad: [
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 1, fees: '$56,000/year', exam: 'GRE + TOEFL', course: 'M.A. / Ph.D. Psychology', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'GRE + IELTS', course: 'M.Phil Psychology', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 3, fees: 'CAD 42,000/year', exam: 'GRE + IELTS', course: 'M.A. Counseling Psychology', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'GRE + IELTS', course: 'M.A. Couple & Family Therapy', type: 'Premier' },
        ]
    },
    'Parenting Counselor': {
        india: [
            { name: 'TISS Mumbai', location: 'Mumbai, MH', ranking: 1, fees: '₹1.2L/year', exam: 'TISSNET + PIT', course: 'M.A. Clinical Psychology', type: 'Premier' },
            { name: 'University of Delhi', location: 'New Delhi', ranking: 2, fees: '₹20,000/year', exam: 'CUET', course: 'M.A. Psychology', type: 'Government' },
            { name: 'Christ University', location: 'Bangalore, KA', ranking: 3, fees: '₹2L/year', exam: 'CUET / Christ Entrance', course: 'M.A. Clinical Psychology', type: 'Private' },
            { name: 'IGNOU', location: 'New Delhi', ranking: 4, fees: '₹15,000/year', exam: 'Direct Admission', course: 'PG Diploma Child & Family Counseling', type: 'Distance' },
        ],
        abroad: [
            { name: 'Stanford University', location: 'Stanford, USA', ranking: 1, fees: '$56,000/year', exam: 'GRE + TOEFL', course: 'M.A. / Ph.D. Psychology', type: 'Premier' },
            { name: 'University of Cambridge', location: 'Cambridge, UK', ranking: 2, fees: '£38,000/year', exam: 'GRE + IELTS', course: 'M.Phil Psychology', type: 'Premier' },
            { name: 'University of Toronto', location: 'Toronto, Canada', ranking: 3, fees: 'CAD 42,000/year', exam: 'GRE + IELTS', course: 'M.A. Counseling Psychology', type: 'Premier' },
            { name: 'University of Melbourne', location: 'Melbourne, Australia', ranking: 4, fees: 'AUD 35,000/year', exam: 'GRE + IELTS', course: 'M.A. Family Therapy', type: 'Premier' },
        ]
    },
};
export function getCollegesForCareer(careerName) {
    return collegeData[careerName] || null;
}
export function getAllCareersWithColleges() {
    return Object.keys(collegeData);
}
//# sourceMappingURL=college-data.js.map