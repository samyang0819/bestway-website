export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  clientName: string;
  clientRole: string;
  clientCountry: string;
  challenge: string;
  solution: string;
  outcome: string;
  timelineMonths: number;
  successMetrics: {
    label: string;
    value: string;
  }[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  quote: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'tech-worker-canada',
    title: 'Tech Professional Gets Express Entry to Canada',
    category: 'Work Visa',
    clientName: 'Arun Kumar',
    clientRole: 'Senior Software Engineer',
    clientCountry: 'India',
    challenge:
      'Arun had a job offer from a top Canadian tech company but was overwhelmed by Canada\'s Express Entry system. He didn\'t know his CRS score, which stream was right for him, or how to optimize his application to move to the front of the queue.',
    solution:
      'We conducted a comprehensive profile assessment, identified that Arun qualified for the Tech Talent Stream (faster processing), optimized his language test scores strategy, coordinated with his employer for a valid job offer letter, and managed the entire Express Entry application.',
    outcome:
      'Arun received his Confirmation of Permanent Residence (CoPR) in just 4.5 months and relocated to Toronto within 6 months of first consultation.',
    timelineMonths: 5,
    successMetrics: [
      { label: 'CRS Score', value: '487 (Top 6%)' },
      { label: 'Processing Time', value: '4.5 months' },
      { label: 'Visa Approval', value: '100%' },
      { label: 'ROI', value: '6-month relocation' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Profile Assessment',
        description: 'Evaluated education credentials, language proficiency, and work experience against Canadian requirements.',
      },
      {
        step: 2,
        title: 'Stream Identification',
        description: 'Identified Tech Talent Stream eligibility—resulting in priority processing vs. standard 6-month timeline.',
      },
      {
        step: 3,
        title: 'Documentation Preparation',
        description: 'Coordinated credential evaluation (WES), secured IELTS scores, and validated job offer letter.',
      },
      {
        step: 4,
        title: 'Express Entry Filing',
        description: 'Submitted optimized profile; received Invitation to Apply in first draw (89 days).',
      },
      {
        step: 5,
        title: 'Final Processing',
        description: 'Managed medical exam, police clearance, and employer verification. CoPR issued 4.5 months post-submission.',
      },
    ],
    quote:
      'BestWay made the impossible seem simple. I thought Express Entry would take 2 years. They got me permanent residency in 4.5 months. The team was responsive, knowledgeable, and genuinely cared about my success.',
    image: '/images/case-study-1.jpg',
  },
  {
    id: '2',
    slug: 'family-sponsorship-australia',
    title: 'Family Reunited Through Skilled Migration',
    category: 'Family Sponsorship',
    clientName: 'Maria Santos',
    clientRole: 'Healthcare Administrator',
    clientCountry: 'Philippines',
    challenge:
      'Maria wanted to sponsor her aging parents to Australia but faced strict financial requirements, health screening complexities, and a 2-3 year queue. She was confused about which sponsorship pathway would work and worried about their medical history.',
    solution:
      'We strategically restructured her case to use the Skilled Independent visa pathway combined with family sponsorship, which expedited processing. We coordinated health assessments, prepared comprehensive financial documentation, and navigated the points-based system.',
    outcome:
      'Maria\'s parents received their visa within 18 months and are now living with her in Melbourne. The combined approach saved 12 months compared to standard family sponsorship alone.',
    timelineMonths: 18,
    successMetrics: [
      { label: 'Processing Reduction', value: '12 months faster' },
      { label: 'Application Approval', value: '100%' },
      { label: 'Family Together', value: '18 months' },
      { label: 'Cost Savings', value: '35% vs alternatives' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Strategy Session',
        description: 'Reviewed Maria\'s profile and parents\' qualifications to identify optimal sponsorship pathway.',
      },
      {
        step: 2,
        title: 'Health & Documentation',
        description: 'Arranged approved panel doctor visits and compiled 18 months of financial records.',
      },
      {
        step: 3,
        title: 'Nomination Submission',
        description: 'Filed Maria\'s skilled migration nomination to establish her as eligible sponsor.',
      },
      {
        step: 4,
        title: 'Family Sponsorship Filing',
        description: 'Lodged parent sponsorship applications using accelerated family stream.',
      },
      {
        step: 5,
        title: 'Completion & Settlement',
        description: 'Managed final verifications and arranged their arrival and settlement support.',
      },
    ],
    quote:
      'After 5 years apart, my parents are finally with me in Australia. BestWay found a solution when 3 other agents said it would take 3+ years. They reduced our timeline to 18 months and made the entire process transparent.',
    image: '/images/case-study-2.jpg',
  },
  {
    id: '3',
    slug: 'student-to-pr-uk',
    title: 'International Student Transitions to UK Skilled Worker',
    category: 'Study & Work Visa',
    clientName: 'Yuki Tanaka',
    clientRole: 'Graduate Software Engineer',
    clientCountry: 'Japan',
    challenge:
      'Yuki completed his Master\'s degree in the UK but only had 4 months of post-study work visa time remaining. He needed a UK employer sponsorship or face returning to Japan. Finding a sponsor required navigating the points-based system and understanding the new Graduate Route vs. Skilled Worker visa rules.',
    solution:
      'We prepared Yuki for employer sponsorship months in advance—identifying visa-eligible roles, optimizing his CV, and briefing employers on their sponsorship obligations. When an offer came, we fast-tracked his visa application and coordinated with the employer\'s HR.',
    outcome:
      'Yuki secured a Skilled Worker visa 6 weeks post-job offer and remained in the UK. He\'s now on a pathway to settlement after 5 years of employment.',
    timelineMonths: 8,
    successMetrics: [
      { label: 'Job Search Timeline', value: '3 months' },
      { label: 'Visa Processing', value: '6 weeks' },
      { label: 'Salary Grade', value: 'Met UK threshold' },
      { label: 'Settlement Path', value: 'Eligible' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Pre-Graduation Planning',
        description: 'Assessed Yuki\'s qualifications against UK Skilled Worker visa requirements 6 months before graduation.',
      },
      {
        step: 2,
        title: 'Employer Identification',
        description: 'Identified companies actively sponsoring visa candidates and tailored applications.',
      },
      {
        step: 3,
        title: 'Job Offer Negotiation',
        description: 'Ensured job offer met visa salary thresholds and sponsorship requirements.',
      },
      {
        step: 4,
        title: 'Visa Application',
        description: 'Prepared comprehensive sponsorship application with employer coordination.',
      },
      {
        step: 5,
        title: 'Approval & Settlement',
        description: 'Visa approved; supported Yuki\'s transition to long-term settlement pathway.',
      },
    ],
    quote:
      'I thought I\'d have to leave the UK after my studies. BestWay showed me a clear path forward and made the employer sponsorship process stress-free. I\'m now permanently building my career in London.',
    image: '/images/case-study-3.jpg',
  },
  {
    id: '4',
    slug: 'business-owner-nz',
    title: 'Entrepreneur Secures New Zealand Startup Visa',
    category: 'Business/Entrepreneur Visa',
    clientName: 'Chen Wei',
    clientRole: 'Tech Entrepreneur',
    clientCountry: 'China',
    challenge:
      'Chen Wei had a SaaS startup and wanted to relocate to New Zealand, but his business was only 2 years old. He didn\'t meet the traditional investor visa requirements and was uncertain which pathway would accept his startup stage business.',
    solution:
      'We positioned Chen Wei for New Zealand\'s Startup Visa—a dedicated pathway for early-stage entrepreneurs. We showcased his innovation potential, secured a local mentor endorsement, and presented a compelling business plan with growth projections.',
    outcome:
      'Chen received his Startup Visa within 5 months. His company grew 40% in year 2 and is now valued at NZ$2M, putting him on track for residency after 5 years.',
    timelineMonths: 5,
    successMetrics: [
      { label: 'Visa Approval', value: '5 months' },
      { label: 'Business Growth (Yr 2)', value: '40%' },
      { label: 'Company Valuation', value: 'NZ$2M' },
      { label: 'Residency Path', value: 'On track' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Visa Pathway Assessment',
        description: 'Identified Startup Visa as optimal fit over traditional investor pathways.',
      },
      {
        step: 2,
        title: 'Business Plan Refinement',
        description: 'Developed compelling 5-year growth projections and market analysis.',
      },
      {
        step: 3,
        title: 'Mentor Endorsement',
        description: 'Connected Chen with New Zealand tech mentors; secured formal endorsement.',
      },
      {
        step: 4,
        title: 'Visa Application',
        description: 'Submitted comprehensive startup visa application with business documentation.',
      },
      {
        step: 5,
        title: 'Approval & Business Launch',
        description: 'Visa approved; supported Chen\'s relocation and company establishment in Auckland.',
      },
    ],
    quote:
      'I thought my startup was too early-stage for any visa. BestWay not only got me into New Zealand but also helped me think bigger about my business. I\'m grateful for their strategic guidance.',
    image: '/images/case-study-4.jpg',
  },
  {
    id: '5',
    slug: 'skilled-nursing-ireland',
    title: 'Healthcare Professional Secures EU Work Permit',
    category: 'Skilled Worker Visa',
    clientName: 'Dr. Amara Okonkwo',
    clientRole: 'Registered Nurse',
    clientCountry: 'Nigeria',
    challenge:
      'Amara was a highly qualified nurse with 10 years of experience but faced strict EU nursing registration requirements and language barriers. Ireland was facing healthcare shortages and seeking foreign nurses, but the regulatory pathway was unclear.',
    solution:
      'We fast-tracked Amara through EU nursing registration (An Bord Altranais), coordinated English language proficiency testing, and positioned her with hospitals actively recruiting overseas nurses. We negotiated visa sponsorship with her employer.',
    outcome:
      'Amara received her work permit within 8 weeks and started at a Dublin hospital within 3 months. She\'s now in a pathway toward Irish residency and citizenship.',
    timelineMonths: 3,
    successMetrics: [
      { label: 'Nursing Registration', value: '6 weeks' },
      { label: 'Work Permit', value: '8 weeks' },
      { label: 'Employment Start', value: '3 months' },
      { label: 'Residency Path', value: 'Eligible after 2 years' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Credential Evaluation',
        description: 'Assessed Amara\'s Nigerian nursing credentials against EU standards.',
      },
      {
        step: 2,
        title: 'Registration Filing',
        description: 'Submitted nursing registration to An Bord Altranais with credential validation.',
      },
      {
        step: 3,
        title: 'Language Testing',
        description: 'Coordinated IELTS testing to meet EU healthcare language requirements.',
      },
      {
        step: 3,
        title: 'Employer Sponsorship',
        description: 'Connected Amara with Dublin hospitals; negotiated employment and visa sponsorship.',
      },
      {
        step: 5,
        title: 'Work Permit & Relocation',
        description: 'Work permit approved; supported Amara\'s move to Ireland and onboarding.',
      },
    ],
    quote:
      'Coming from Nigeria to Europe felt impossible. BestWay made it feel achievable and showed me the exact steps. I\'m now settled in Dublin, earning well, and have a clear path to staying here permanently.',
    image: '/images/case-study-5.jpg',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
