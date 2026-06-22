export interface ProgramDetails {
  id: string;
  name: string;
  whoItIsFor: string;
  keyBenefits: string[];
  teachingMethodology: string;
  weeklySchedule: string;
  assessmentStructure: string;
  expectedOutcomes: string;
}

export const programData: Record<string, ProgramDetails> = {
  "jee-adv": {
    id: "jee-adv",
    name: "JEE Advanced Elite",
    whoItIsFor: "High-performing science students targeting top 1000 AIR in IIT-JEE.",
    keyBenefits: [
      "Exclusive batch with highest faculty-to-student ratio",
      "Advanced problem-solving & non-routine thinking",
      "Direct mentorship from IITian faculty"
    ],
    teachingMethodology: "Intense conceptual deep-dives followed by rigorous multi-concept problem sets.",
    weeklySchedule: "6 Days/Week | 4 Hours Lectures + 4 Hours Supervised Practice",
    assessmentStructure: "Bi-weekly Advanced Pattern Part Tests & Monthly Cumulative Tests.",
    expectedOutcomes: "Top 1% Percentile in JEE Main & Selection in IITs."
  },
  "jee-main": {
    id: "jee-main",
    name: "JEE Main National Track",
    whoItIsFor: "Engineering aspirants aiming for premium NITs, IIITs, and Top State Colleges.",
    keyBenefits: [
      "Complete syllabus mastery before deadline",
      "High-frequency topic focus",
      "Speed and accuracy enhancement"
    ],
    teachingMethodology: "Structured curriculum focusing on NCERT mastery and objective problem-solving techniques.",
    weeklySchedule: "6 Days/Week | 5 Hours Lectures + 3 Hours Practice",
    assessmentStructure: "Weekly JEE Main Pattern Tests & Error Analysis Sessions.",
    expectedOutcomes: "99+ Percentile in JEE Main."
  },
  "neet": {
    id: "neet",
    name: "NEET AIIMS & Govt. Medical",
    whoItIsFor: "Medical aspirants targeting top Government Medical Colleges and AIIMS.",
    keyBenefits: [
      "100% NCERT Biology line-by-line decoding",
      "Physics simplified for medical aspirants",
      "High-yield topic emphasis"
    ],
    teachingMethodology: "Visual biology modules, intensive repetition, and memory-retention techniques.",
    weeklySchedule: "6 Days/Week | 5 Hours Lectures + 3 Hours Doubt Clearance",
    assessmentStructure: "Daily Practice Papers (DPP) & Weekly full-length NEET Mock Exams.",
    expectedOutcomes: "Score of 680+ in NEET UG."
  },
  "eamcet": {
    id: "eamcet",
    name: "EAMCET Specialization",
    whoItIsFor: "Students targeting top engineering/medical colleges within the state.",
    keyBenefits: [
      "State syllabus integration",
      "Time-management hacks for 160 questions",
      "Previous year question (PYQ) mastery"
    ],
    teachingMethodology: "Fast-paced coverage with extreme focus on formula retention and direct applications.",
    weeklySchedule: "5 Days/Week | 4 Hours Lectures + 4 Hours Supervised Practice",
    assessmentStructure: "Weekly EAMCET Pattern Tests with State-Level Ranking.",
    expectedOutcomes: "State Rank under Top 1000."
  },
  "foundation": {
    id: "foundation",
    name: "Early Competitive Edge (Grades 6-10)",
    whoItIsFor: "Young minds preparing for NTSE, Olympiads, and a strong IIT/NEET base.",
    keyBenefits: [
      "Logical reasoning development",
      "Advanced math & science foundation",
      "Stress-free early exposure"
    ],
    teachingMethodology: "Interactive, concept-first learning rather than rote memorization.",
    weeklySchedule: "Weekends or 3 Days/Week | 2-3 Hours per session",
    assessmentStructure: "Monthly conceptual reviews and Olympiad-level quizzes.",
    expectedOutcomes: "Success in NTSE/Olympiads and a significant headstart for Grade 11."
  },
  "long-term": {
    id: "long-term",
    name: "Stabilization Cohort (Droppers & Repeaters)",
    whoItIsFor: "Determined students dedicating an extra year to achieve their dream rank.",
    keyBenefits: [
      "Zero to Zenith curriculum",
      "Identification & eradication of past mistakes",
      "Psychological counseling & motivation"
    ],
    teachingMethodology: "Accelerated theory combined with massive volume of test-taking and analysis.",
    weeklySchedule: "6 Days/Week | 6 Hours Lectures + 4 Hours Self-Study in Campus",
    assessmentStructure: "High-frequency testing (3 times a week) mimicking final exam environments.",
    expectedOutcomes: "Massive rank jump and assured selection in target colleges."
  }
};
