export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'Guide' | 'Checklist' | 'Template' | 'Worksheet';
  format: 'PDF' | 'Word' | 'Excel' | 'Google Sheets';
  downloadSize: string;
  country: string;
  visaType: string;
  icon: string;
  preview: string;
  keyPoints: string[];
  includesContent: string[];
}

export const resources: Resource[] = [
  {
    id: '1',
    slug: 'canada-express-entry-guide',
    title: 'Canada Express Entry Complete Guide',
    description:
      'Comprehensive step-by-step guide to Canadian Express Entry system, CRS score optimization, and application preparation.',
    category: 'Guide',
    format: 'PDF',
    downloadSize: '3.2 MB',
    country: 'Canada',
    visaType: 'Express Entry',
    icon: '📘',
    preview:
      'A 45-page detailed guide covering Express Entry basics, CRS calculation, document preparation, and submission process.',
    keyPoints: [
      'Complete CRS score calculation breakdown',
      'Document checklist for each program',
      'Timeline expectations',
      'Common mistakes to avoid',
      'Post-ITA application steps',
    ],
    includesContent: [
      'Express Entry overview',
      'CRS scoring system',
      'PNP stream information',
      'Language testing guidance',
      'Credential evaluation tips',
      'Medical requirements',
      'Police clearance process',
    ],
  },
  {
    id: '2',
    slug: 'work-visa-application-checklist',
    title: 'International Work Visa Application Checklist',
    description:
      'Complete checklist for work visa applications across multiple countries with document requirements and timelines.',
    category: 'Checklist',
    format: 'PDF',
    downloadSize: '1.8 MB',
    country: 'Multiple',
    visaType: 'Work Visa',
    icon: '✅',
    preview:
      'A practical checklist covering documents needed, timelines, and verification steps for work visa applications.',
    keyPoints: [
      'Employer sponsorship documents',
      'Personal documentation',
      'Financial proof requirements',
      'Medical clearance checklist',
      'Police clearance requirements',
    ],
    includesContent: [
      'Job offer validation checklist',
      'Employer documentation needed',
      'Personal documents list',
      'Financial documentation',
      'Medical exam preparation',
      'Police clearance steps',
      'Supporting documents examples',
    ],
  },
  {
    id: '3',
    slug: 'family-sponsorship-financial-guide',
    title: 'Family Sponsorship Financial Planning Guide',
    description:
      'Detailed guide on financial requirements for family sponsorship with income calculations and documentation tips.',
    category: 'Guide',
    format: 'PDF',
    downloadSize: '2.5 MB',
    country: 'Canada/Australia',
    visaType: 'Family Sponsorship',
    icon: '💰',
    preview:
      'A 35-page guide explaining minimum income requirements, financial documentation, and proof of funds strategies.',
    keyPoints: [
      'Minimum income calculations by country',
      'Acceptable income sources',
      'Document preparation tips',
      'Currency conversion guidelines',
      'Common financial mistakes',
    ],
    includesContent: [
      'Income requirement tables',
      'Tax assessment guidance',
      'Documentation examples',
      'Supporting document checklists',
      'Financial statement templates',
      'Common mistakes to avoid',
    ],
  },
  {
    id: '4',
    slug: 'study-visa-preparation-template',
    title: 'Student Visa Preparation Template & Worksheet',
    description:
      'Interactive worksheet for organizing your student visa application documents and tracking requirements.',
    category: 'Worksheet',
    format: 'Excel',
    downloadSize: '0.8 MB',
    country: 'Multiple',
    visaType: 'Study Permit/Student Visa',
    icon: '📝',
    preview:
      'An interactive Excel workbook with tracking sheets, checklists, and timelines for student visa preparation.',
    keyPoints: [
      'Document organization system',
      'Timeline tracking',
      'Application progress tracker',
      'Financial documentation organizer',
      'Communication log template',
    ],
    includesContent: [
      'Application tracking sheet',
      'Document inventory',
      'Timeline planner',
      'Financial organizer',
      'School information tracker',
      'Contact information template',
    ],
  },
  {
    id: '5',
    slug: 'australian-skilled-migration-handbook',
    title: 'Australian Skilled Migration Handbook',
    description:
      'Everything you need to know about Australian skilled migration visas, occupation lists, and points calculation.',
    category: 'Guide',
    format: 'PDF',
    downloadSize: '4.1 MB',
    country: 'Australia',
    visaType: 'Skilled Migration',
    icon: '🦘',
    preview:
      'A comprehensive 60-page handbook covering Australian skilled migration programs, points system, and processing timelines.',
    keyPoints: [
      'Occupation list analysis',
      'Skills assessment process',
      'Points calculation system',
      'State sponsorship programs',
      'Application timeline management',
    ],
    includesContent: [
      'MLTSSL occupation list guide',
      'Skills assessment bodies',
      'Points system breakdown',
      'State sponsorship overview',
      'EOI submission guide',
      'Visa application process',
      'Post-visa obligations',
    ],
  },
  {
    id: '6',
    slug: 'visa-refusal-appeal-preparation',
    title: 'Visa Refusal Appeal Preparation Guide',
    description:
      'Strategic guide for preparing and submitting visa refusal appeals with case study examples.',
    category: 'Guide',
    format: 'PDF',
    downloadSize: '2.8 MB',
    country: 'Multiple',
    visaType: 'Appeals',
    icon: '⚖️',
    preview:
      'A 40-page guide on understanding refusal reasons, developing appeal strategy, and preparing compelling responses.',
    keyPoints: [
      'Common refusal reasons analysis',
      'Appeal strategy development',
      'New evidence collection',
      'Letter of representation tips',
      'Reapplication timeline planning',
    ],
    includesContent: [
      'Refusal reason decoding',
      'Appeal type overview',
      'Supporting evidence guide',
      'Letter writing templates',
      'Case study examples',
      'Timeline management',
      'Legal review checklist',
    ],
  },
  {
    id: '7',
    slug: 'immigration-document-templates',
    title: 'Immigration Document Templates Pack',
    description:
      'Customizable templates for letters of explanation, affidavits, and supporting documents across visa types.',
    category: 'Template',
    format: 'Word',
    downloadSize: '1.5 MB',
    country: 'Multiple',
    visaType: 'Multiple',
    icon: '📄',
    preview:
      'A collection of 15+ editable Word templates for common immigration documents and correspondence.',
    keyPoints: [
      'Letter of explanation templates',
      'Affidavit examples',
      'Supporting letter samples',
      'Travel history document',
      'Employment verification letter',
    ],
    includesContent: [
      'LOE templates (various purposes)',
      'Affidavit template',
      'Employment letter',
      'Travel history document',
      'Family relationship letter',
      'Financial support letter',
      'Character reference template',
    ],
  },
  {
    id: '8',
    slug: 'language-test-preparation-guide',
    title: 'IELTS/TOEFL Preparation Guide for Immigration',
    description:
      'Targeted language test preparation guide specifically for immigration applicants with time-saving strategies.',
    category: 'Guide',
    format: 'PDF',
    downloadSize: '2.2 MB',
    country: 'Multiple',
    visaType: 'Multiple',
    icon: '🗣️',
    preview:
      'A 30-page guide focused on immigration-specific language testing with study schedules and practice resources.',
    keyPoints: [
      'Required scores by country',
      '8-week study plan',
      'Practice test resources',
      'Common mistakes in immigration tests',
      'Score improvement strategies',
    ],
    includesContent: [
      'Language test requirements',
      'Test format overview',
      'Study schedule templates',
      'Vocabulary for immigration',
      'Practice reading passages',
      'Writing sample responses',
      'Speaking tip guide',
    ],
  },
  {
    id: '9',
    slug: 'settlement-planning-checklist',
    title: 'New Country Settlement Planning Checklist',
    description:
      'Complete checklist for planning your settlement in a new country with timeline and budget considerations.',
    category: 'Checklist',
    format: 'PDF',
    downloadSize: '1.3 MB',
    country: 'Multiple',
    visaType: 'Multiple',
    icon: '🏡',
    preview:
      'A practical checklist covering pre-arrival, arrival, and post-arrival tasks for settling in a new country.',
    keyPoints: [
      'Pre-arrival task list',
      'First-week essentials',
      'Banking and financial setup',
      'Housing search tips',
      'Service registration checklist',
    ],
    includesContent: [
      'Pre-departure checklist',
      'Banking setup steps',
      'Accommodation finding tips',
      'Government registration',
      'Utilities setup guide',
      'School enrollment (if applicable)',
      'Healthcare registration',
    ],
  },
  {
    id: '10',
    slug: 'credential-evaluation-roadmap',
    title: 'International Credential Evaluation Roadmap',
    description:
      'Step-by-step guide for getting your international qualifications evaluated and recognized.',
    category: 'Guide',
    format: 'PDF',
    downloadSize: '2.0 MB',
    country: 'Multiple',
    visaType: 'Multiple',
    icon: '🎓',
    preview:
      'A 25-page roadmap for credential evaluation process with agency recommendations and timeline expectations.',
    keyPoints: [
      'Evaluation agency selection',
      'Document preparation',
      'Application process',
      'Timeline expectations',
      'Alternative recognition pathways',
    ],
    includesContent: [
      'Evaluation agency directory',
      'Document gathering checklist',
      'Translation requirements',
      'Application instructions',
      'Cost breakdown by agency',
      'Timeline by country',
      'Recognition limitations',
    ],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}

export function getResourcesByCategory(
  category: 'Guide' | 'Checklist' | 'Template' | 'Worksheet'
): Resource[] {
  return resources.filter((resource) => resource.category === category);
}
