export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  keyBenefits: string[];
  eligibilityRequirements: string[];
  typicalTimeline: string;
  costBreakdown: {
    item: string;
    range: string;
  }[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  successRate: string;
  relatedServices: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'canada-immigration',
    title: 'Canada Immigration',
    subtitle: 'Permanent Residency Pathways',
    description:
      'Navigate Canada\'s diverse immigration programs. From Express Entry to Provincial Nominee Programs, we guide you to permanent residency in Canada\'s top cities.',
    icon: '🍁',
    keyBenefits: [
      'Fast-track pathways to permanent residency',
      'Expert guidance on Express Entry optimization',
      'Provincial Nominee Program (PNP) expertise',
      'Post-graduation work permit assistance',
      'Family sponsorship support',
      '95%+ approval rate for qualified candidates',
    ],
    eligibilityRequirements: [
      'Canadian Language Benchmark (CLB) 7 or higher',
      'Work experience in eligible occupation',
      'Educational credentials (diploma or higher recommended)',
      'Medical and police clearances',
      'Proof of funds for settlement',
    ],
    typicalTimeline: '4-8 months (Express Entry), 8-12 months (PNP)',
    costBreakdown: [
      { item: 'Government Fees (ITA to PR)', range: '$550-$1,000' },
      { item: 'Credential Evaluation (WES/ICES)', range: '$200-$350' },
      { item: 'Language Testing (IELTS/TOEFL)', range: '$200-$300' },
      { item: 'Professional Consultation & Filing', range: '$2,000-$4,000' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Eligibility Assessment',
        description: 'Comprehensive review of your profile against Canadian requirements',
      },
      {
        step: 2,
        title: 'Documents Preparation',
        description: 'Credential evaluation, language testing coordination, employment verification',
      },
      {
        step: 3,
        title: 'Express Entry/PNP Filing',
        description: 'Optimal profile creation to maximize CRS score or apply to specific PNPs',
      },
      {
        step: 4,
        title: 'Invitation & Application',
        description: 'Complete application submission with all supporting documents',
      },
      {
        step: 5,
        title: 'Medical & Security Clearance',
        description: 'Arrange medical exams and background checks',
      },
      {
        step: 6,
        title: 'Permanent Residency',
        description: 'Receive Confirmation of Permanent Residence (CoPR)',
      },
    ],
    successRate: '95%+',
    relatedServices: ['work-visas', 'education-visas', 'family-sponsorship'],
    faqs: [
      {
        question: 'What is the fastest way to get permanent residency in Canada?',
        answer:
          'Express Entry is typically the fastest, with processing times of 4-6 months. Your CRS score determines your ranking—we help optimize your profile.',
      },
      {
        question: 'Do I need a job offer to apply for Express Entry?',
        answer:
          'Not required, but a valid job offer can significantly boost your CRS score. We help you understand the trade-offs.',
      },
      {
        question: 'What if I don\'t meet the language requirements yet?',
        answer:
          'We provide language testing guidance and timeline planning. Many clients improve their scores within 2-3 months of targeted preparation.',
      },
    ],
  },
  {
    id: '2',
    slug: 'australia-immigration',
    title: 'Australia Immigration',
    subtitle: 'Skilled Migration & Permanent Visas',
    description:
      'Pursue your Australian dream with expert guidance on skilled migration visas. We navigate the points-based system and help you secure permanent residency.',
    icon: '🦘',
    keyBenefits: [
      'Skilled Independent visa expertise',
      'State sponsorship (RSMS/TSS) guidance',
      'Occupation list analysis',
      'Skills assessment coordination',
      'Visa timeline optimization',
      'Post-visa settlement support',
    ],
    eligibilityRequirements: [
      'Occupation on Australian skilled migration lists',
      'Competent English language level (IELTS 6.0+)',
      'Skills assessment in your occupation',
      'Medical and police clearances',
      'Points sufficient for invitation (usually 65+ points)',
    ],
    typicalTimeline: '6-12 months (Skilled Independent), 3-6 months (State-sponsored)',
    costBreakdown: [
      { item: 'Government Visa Fee', range: '$3,500-$4,500' },
      { item: 'Skills Assessment', range: '$300-$800' },
      { item: 'Credential Evaluation', range: '$150-$300' },
      { item: 'Professional Consultation & Filing', range: '$2,500-$5,000' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Occupation Assessment',
        description: 'Verify your occupation is on MLTSSL or relevant visa list',
      },
      {
        step: 2,
        title: 'Skills Assessment',
        description: 'Apply with relevant authority (EA, CPA, Engineers Australia, etc.)',
      },
      {
        step: 3,
        title: 'EOI Submission',
        description: 'Submit Expression of Interest through SkillSelect',
      },
      {
        step: 4,
        title: 'Invitation to Apply',
        description: 'Receive invitation based on points and occupation demand',
      },
      {
        step: 5,
        title: 'Visa Application',
        description: 'Complete detailed visa application with documents',
      },
      {
        step: 6,
        title: 'Grant & Arrival',
        description: 'Visa granted; plan your relocation to Australia',
      },
    ],
    successRate: '92%+',
    relatedServices: ['work-visas', 'family-sponsorship', 'business-immigration'],
    faqs: [
      {
        question: 'How many points do I need for Australian Skilled Independent visa?',
        answer: 'You typically need 65+ points from factors like age, English, education, and work experience. We help you understand your current standing.',
      },
      {
        question: 'Can I apply while skills assessment is in progress?',
        answer: 'Yes, you can submit EOI and apply for visa with assessment pending, but it must be approved before visa grant.',
      },
    ],
  },
  {
    id: '3',
    slug: 'education-visas',
    title: 'Education & Study Visas',
    subtitle: 'Study Permit & Student Visa Programs',
    description: 'Turn your educational dreams into reality. Comprehensive support for student visas, study permits, and pathways from studies to permanent residency.',
    icon: '🎓',
    keyBenefits: [
      'Study permit & student visa expertise',
      'School selection guidance',
      'Visa application optimization',
      'Financial documentation support',
      'Post-graduation work permit planning',
      'Study-to-PR pathway strategy',
    ],
    eligibilityRequirements: [
      'Acceptance letter from recognized educational institution',
      'Proof of financial means (varies by country)',
      'English language proficiency',
      'Medical clearance',
      'No criminal record',
      'Ties to home country (for certain countries)',
    ],
    typicalTimeline: '2-4 weeks (Study permits), 4-8 weeks (Student visas)',
    costBreakdown: [
      { item: 'Government Visa Fee', range: '$100-$350' },
      { item: 'Credential Evaluation (if required)', range: '$200-$400' },
      { item: 'Language Testing (if needed)', range: '$200-$300' },
      { item: 'Application Support & Filing', range: '$1,500-$3,000' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'School Selection',
        description: 'Identify schools aligned with your goals and budget',
      },
      {
        step: 2,
        title: 'Application & Acceptance',
        description: 'Prepare applications and secure school acceptance letter',
      },
      {
        step: 3,
        title: 'Financial Documentation',
        description: 'Prepare proof of funds and financial documents',
      },
      {
        step: 4,
        title: 'Visa Application',
        description: 'Submit study permit/student visa with complete documentation',
      },
      {
        step: 5,
        title: 'Medical & Clearances',
        description: 'Complete medical exam and background check if required',
      },
      {
        step: 6,
        title: 'Visa Approval & Arrival',
        description: 'Receive approval and plan your arrival and enrollment',
      },
    ],
    successRate: '98%+',
    relatedServices: ['canada-immigration', 'australia-immigration', 'work-visas'],
    faqs: [
      {
        question: 'Can I work while studying?',
        answer: 'Yes, most student visas allow part-time work (usually 20 hrs/week during studies, full-time during breaks). We clarify your specific conditions.',
      },
      {
        question: 'How do I transition from study to permanent residency?',
        answer:
          'We provide study-to-PR roadmap planning. Many countries offer post-graduation work permits that lead to PR eligibility.',
      },
    ],
  },
  {
    id: '4',
    slug: 'work-visas',
    title: 'Work Visas & Employment',
    subtitle: 'Employer Sponsorship & Skilled Worker Visas',
    description:
      'Secure work authorization internationally. From sponsorship setup to visa filing, we handle employer coordination and visa applications.',
    icon: '💼',
    keyBenefits: [
      'Employer sponsorship coordination',
      'Skilled worker visa expertise',
      'Points-based system optimization',
      'Salary negotiation support',
      'Visa renewal guidance',
      'Career pathway planning',
    ],
    eligibilityRequirements: [
      'Valid job offer from recognized employer',
      'Job meets visa salary thresholds',
      'Relevant work experience (typically 2+ years)',
      'English language proficiency',
      'Qualifications matching job requirements',
      'Employer meets sponsorship requirements',
    ],
    typicalTimeline: '2-4 months (with job offer), 4-8 weeks (visa processing)',
    costBreakdown: [
      { item: 'Government Visa Fee', range: '$300-$3,500' },
      { item: 'Employer Sponsorship Fee', range: '$500-$2,000' },
      { item: 'Credential Evaluation (if needed)', range: '$200-$400' },
      { item: 'Application & Coordination', range: '$1,500-$3,500' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Job Search & Offer',
        description: 'Identify employers and secure job offer meeting visa requirements',
      },
      {
        step: 2,
        title: 'Employer Sponsorship Setup',
        description: 'Prepare employer documentation and sponsorship application',
      },
      {
        step: 3,
        title: 'Sponsorship Approval',
        description: 'Obtain employer license/approval from immigration authorities',
      },
      {
        step: 4,
        title: 'Visa Application',
        description: 'Submit your visa application with job offer and sponsorship',
      },
      {
        step: 5,
        title: 'Clearances & Checks',
        description: 'Complete medical, police, and background clearances',
      },
      {
        step: 6,
        title: 'Visa Grant & Arrival',
        description: 'Receive visa approval and arrange relocation',
      },
    ],
    successRate: '96%+',
    relatedServices: ['education-visas', 'canada-immigration', 'australia-immigration'],
    faqs: [
      {
        question: 'How long does employer sponsorship take?',
        answer: 'Typically 4-8 weeks. We expedite by coordinating directly with employers and immigration authorities.',
      },
      {
        question: 'Can I change jobs after getting a work visa?',
        answer: 'Depends on visa type. Some require new sponsorship; others allow job changes. We advise on your specific visa terms.',
      },
    ],
  },
  {
    id: '5',
    slug: 'family-sponsorship',
    title: 'Family Sponsorship',
    subtitle: 'Reunite with Loved Ones',
    description:
      'Bring your family together. Expert guidance on spouse, partner, and dependent sponsorship programs across multiple countries.',
    icon: '👨‍👩‍👧‍👦',
    keyBenefits: [
      'Spouse and partner sponsorship',
      'Dependent children support',
      'Parent and grandparent programs',
      'Financial requirement optimization',
      'Processing time acceleration',
      'Family reunification planning',
    ],
    eligibilityRequirements: [
      'Relationship proof (marriage certificate, joint finances)',
      'Sponsorship eligibility as resident/citizen',
      'Sufficient income to support dependents',
      'No criminal history',
      'Medical clearances for sponsored family',
      'Affidavit of support/undertaking',
    ],
    typicalTimeline: '12-24 months (varies by stream)',
    costBreakdown: [
      { item: 'Government Application Fee', range: '$75-$1,000' },
      { item: 'Biometric & Medical', range: '$300-$600' },
      { item: 'Document Translation', range: '$200-$500' },
      { item: 'Application Preparation & Coordination', range: '$2,000-$5,000' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Eligibility Assessment',
        description: 'Verify sponsorship and relationship eligibility',
      },
      {
        step: 2,
        title: 'Financial Documentation',
        description: 'Prepare proof of income and financial support documents',
      },
      {
        step: 3,
        title: 'Application Preparation',
        description: 'Gather relationship proof, affidavits, and medical documentation',
      },
      {
        step: 4,
        title: 'Application Submission',
        description: 'File complete sponsorship application',
      },
      {
        step: 5,
        title: 'Medical & Security Checks',
        description: 'Arrange medical exams and background verification',
      },
      {
        step: 6,
        title: 'Approval & Reunion',
        description: 'Receive sponsorship approval; family member receives visa',
      },
    ],
    successRate: '94%+',
    relatedServices: ['canada-immigration', 'australia-immigration', 'legal-services'],
    faqs: [
      {
        question: 'What income do I need to sponsor my family?',
        answer:
          'Income requirements vary by country and family size. We calculate your specific threshold and advise on meeting requirements.',
      },
      {
        question: 'Can I sponsor my common-law partner?',
        answer: 'Yes, in most countries common-law couples are eligible with proof of cohabitation (typically 1-3 years). Requirements vary by jurisdiction.',
      },
    ],
  },
  {
    id: '6',
    slug: 'legal-services',
    title: 'Legal & Compliance',
    subtitle: 'Immigration Law & Compliance Support',
    description:
      'Expert legal guidance for immigration matters. Appeals, compliance, and specialized immigration law services.',
    icon: '⚖️',
    keyBenefits: [
      'Refusal appeals & reconsiderations',
      'Deportation/removal defense',
      'Compliance & documentation review',
      'Complex case resolution',
      'Family law integration',
      'Professional representation',
    ],
    eligibilityRequirements: [
      'Active immigration case or issue',
      'Visa refusal or compliance concern',
      'Legal representation requirement',
    ],
    typicalTimeline: 'Varies (3 months - 2 years depending on case)',
    costBreakdown: [
      { item: 'Initial Legal Consultation', range: '$300-$500' },
      { item: 'Case Assessment & Strategy', range: '$500-$1,500' },
      { item: 'Document Preparation & Filing', range: '$1,000-$3,000' },
      { item: 'Legal Representation & Court Appearance', range: '$3,000-$10,000+' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Case Evaluation',
        description: 'Comprehensive review of your legal situation and options',
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Develop appeal, defense, or compliance strategy',
      },
      {
        step: 3,
        title: 'Document Preparation',
        description: 'Prepare legal arguments and supporting documentation',
      },
      {
        step: 4,
        title: 'Filing & Submission',
        description: 'File appeal or legal response with authorities',
      },
      {
        step: 5,
        title: 'Representation & Follow-up',
        description: 'Professional representation and ongoing communication',
      },
      {
        step: 6,
        title: 'Resolution',
        description: 'Obtain favorable decision or negotiate resolution',
      },
    ],
    successRate: '88%+',
    relatedServices: ['family-sponsorship', 'canada-immigration', 'australia-immigration'],
    faqs: [
      {
        question: 'Can I appeal a visa refusal?',
        answer:
          'Depends on refusal reason and your country. Some countries offer administrative appeals; others require judicial review. We advise your options.',
      },
      {
        question: 'What are my options if I\'m facing deportation?',
        answer:
          'Options include appeals, stays, humanitarian applications, or residency applications. We explore all legal avenues to resolve your situation.',
      },
    ],
  },
  {
    id: '7',
    slug: 'financial-planning',
    title: 'Financial & Settlement Planning',
    subtitle: 'Visa Cost & Settlement Budget Planning',
    description:
      'Navigate the financial aspects of immigration. Cost planning, settlement budgeting, and financial documentation preparation.',
    icon: '💰',
    keyBenefits: [
      'Comprehensive cost estimation',
      'Settlement budget planning',
      'Financial documentation guidance',
      'Proof of funds strategies',
      'Currency & tax considerations',
      'Payment plan options',
    ],
    eligibilityRequirements: [
      'Active immigration case or planning',
      'Need for financial guidance',
    ],
    typicalTimeline: 'Ongoing throughout immigration process',
    costBreakdown: [
      { item: 'Financial Planning Consultation', range: '$300-$800' },
      { item: 'Budget Development', range: '$500-$1,500' },
      { item: 'Document Preparation & Verification', range: '$500-$2,000' },
      { item: 'Settlement Planning', range: '$1,000-$3,000' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Cost Assessment',
        description: 'Calculate all visa, professional, and settlement costs',
      },
      {
        step: 2,
        title: 'Financial Planning',
        description: 'Develop payment strategy and timeline',
      },
      {
        step: 3,
        title: 'Documentation Preparation',
        description: 'Prepare financial documents for visa application',
      },
      {
        step: 4,
        title: 'Settlement Budgeting',
        description: 'Plan first-year settlement costs in destination country',
      },
      {
        step: 5,
        title: 'Fund Transfer Planning',
        description: 'Optimize international fund transfers',
      },
      {
        step: 6,
        title: 'Ongoing Support',
        description: 'Financial guidance throughout immigration journey',
      },
    ],
    successRate: '100%',
    relatedServices: ['education-visas', 'work-visas', 'family-sponsorship'],
    faqs: [
      {
        question: 'How much do I need to prove for proof of funds?',
        answer:
          'Requirements vary by visa type and country. Most require 6-12 months of living expenses. We calculate your specific requirement.',
      },
      {
        question: 'Can family members\' funds count toward proof of funds?',
        answer:
          'Often yes, with proper documentation of relationship and fund ownership. We advise on acceptable sources.',
      },
    ],
  },
  {
    id: '8',
    slug: 'business-immigration',
    title: 'Business & Entrepreneurship',
    subtitle: 'Startup Visas & Investor Programs',
    description:
      'Launch or expand your business internationally. Startup visa support, investor programs, and business immigration planning.',
    icon: '🏢',
    keyBenefits: [
      'Startup visa expertise',
      'Investor visa guidance',
      'Business plan development',
      'Mentor connection support',
      'Business registration assistance',
      'Ongoing business immigration support',
    ],
    eligibilityRequirements: [
      'Business plan or concept',
      'Initial capital commitment',
      'Relevant business experience',
      'Proof of funds',
      'Sometimes: mentor endorsement',
    ],
    typicalTimeline: '3-6 months (Startup visas), 6-12 months (Investor programs)',
    costBreakdown: [
      { item: 'Government Visa Fee', range: '$300-$2,500' },
      { item: 'Business Plan Development', range: '$1,500-$4,000' },
      { item: 'Legal & Registration', range: '$1,000-$3,000' },
      { item: 'Professional Consulting', range: '$2,000-$5,000' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Business Planning',
        description: 'Develop compelling business plan and growth strategy',
      },
      {
        step: 2,
        title: 'Capitalization Strategy',
        description: 'Structure funding and investment requirements',
      },
      {
        step: 3,
        title: 'Mentor/Support Connection',
        description: 'Secure mentor endorsements or government support letters',
      },
      {
        step: 4,
        title: 'Visa Application',
        description: 'Submit startup or investor visa application',
      },
      {
        step: 5,
        title: 'Approval & Setup',
        description: 'Receive visa approval and establish business',
      },
      {
        step: 6,
        title: 'Business Operations',
        description: 'Ongoing support for business compliance and visa maintenance',
      },
    ],
    successRate: '90%+',
    relatedServices: ['work-visas', 'canada-immigration', 'australia-immigration'],
    faqs: [
      {
        question: 'How much capital do I need for a startup visa?',
        answer:
          'Varies by country (typically $10,000-$200,000+). We advise on specific requirements for your destination.',
      },
      {
        question: 'Can I hire employees on a startup visa?',
        answer: 'Yes, business growth typically requires hiring. We guide on employment visa sponsorship requirements.',
      },
    ],
  },
  {
    id: '9',
    slug: 'appeals-reconsideration',
    title: 'Appeals & Reconsideration',
    subtitle: 'Visa Refusal Appeals & Administrative Review',
    description:
      'Don\'t accept a refusal. Expert appeal preparation and representation for visa refusals and immigration decisions.',
    icon: '📞',
    keyBenefits: [
      'Appeal strategy development',
      'Strong appeal preparation',
      'Reconsideration applications',
      'Administrative review support',
      'Professional representation',
      'Successful appeal outcomes',
    ],
    eligibilityRequirements: [
      'Recent visa refusal or negative decision',
      'Appeal deadline not expired',
      'New evidence or arguments available',
    ],
    typicalTimeline: '3-12 months (depending on appeal type)',
    costBreakdown: [
      { item: 'Appeal Assessment', range: '$500-$1,000' },
      { item: 'Appeal Preparation & Documents', range: '$1,500-$4,000' },
      { item: 'Government Filing Fee (if applicable)', range: '$0-$1,500' },
      { item: 'Legal Representation', range: '$2,000-$8,000' },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Refusal Analysis',
        description: 'Identify reasons for refusal and appeal options',
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Develop compelling appeal strategy with new evidence',
      },
      {
        step: 3,
        title: 'Document Preparation',
        description: 'Prepare appeal letter, affidavits, and supporting docs',
      },
      {
        step: 4,
        title: 'Appeal Submission',
        description: 'File appeal before deadline with complete package',
      },
      {
        step: 5,
        title: 'Follow-up & Communication',
        description: 'Manage communications with appeal authority',
      },
      {
        step: 6,
        title: 'Appeal Decision',
        description: 'Receive appeal decision; plan next steps',
      },
    ],
    successRate: '85%+',
    relatedServices: ['legal-services', 'family-sponsorship', 'work-visas'],
    faqs: [
      {
        question: 'What\'s the success rate for appeals?',
        answer:
          'Varies by case, but typically 50-85% depending on refusal reason and available new evidence. We assess your appeal strength upfront.',
      },
      {
        question: 'How long do I have to appeal?',
        answer:
          'Appeal deadlines range from 30-60 days depending on country and visa type. We advise on your specific timeline immediately.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
