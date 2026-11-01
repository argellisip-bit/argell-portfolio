export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  imageKind?: 'logo' | 'screenshot'
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

/**
 * Your apps. Every value is a PLACEHOLDER. Screenshots live in
 * public/placeholders/ - swap in your own (960x514 works well).
 */
const STATS: AppStat[] = [
  { value: '0', label: 'Stat one' },
  { value: '0', label: 'Stat two' },
  { value: '0', label: 'Stat three' },
]

const DESC = 'PLACEHOLDER - tell me what to put here: what the app does, who it is for, and where it is published.'

export const mobileApps: MobileApp[] = [
  {
    name: 'QuickBooks Online',
    tagline: 'Bookkeeping and financial operations.',
    description: 'Used for income and expense tracking, invoicing, reconciliation, accounts receivable, accounts payable, budgeting, and day-to-day financial organization.',
    imageSrc: '/icons/quickbooks.svg',
    imageKind: 'logo',
    imagePosition: '50% 30%',
    accentColor: '#2563EB',
    stats: [
      { value: '', label: 'Reconciliation' },
      { value: '', label: 'Invoicing' },
      { value: '', label: 'Expense Tracking' },
    ],
    badge: 'FINANCE',
  },
  {
    name: 'Basecamp',
    tagline: 'Keeping projects and communication organized.',
    description: 'Used for project coordination, task visibility, file sharing, team communication, and keeping ongoing work in one organized workspace.',
    imageSrc: '/icons/basecamp.svg',
    imageKind: 'logo',
    accentColor: '#7C3AED',
    stats: [
      { value: '', label: 'Tasks' },
      { value: '', label: 'Files' },
      { value: '', label: 'Team Updates' },
    ],
    badge: 'PROJECTS',
  },
  {
    name: 'Google Workspace',
    tagline: 'Communication, organization, and collaboration.',
    description: 'Used across Gmail, Calendar, Drive, Docs, and Sheets for scheduling, deadline tracking, research, documentation, reporting, and file management.',
    imageSrc: '/icons/googleworkspace.svg',
    imageKind: 'logo',
    accentColor: '#16A34A',
    stats: [
      { value: '', label: 'Scheduling' },
      { value: '', label: 'Documentation' },
      { value: '', label: 'File Management' },
    ],
    badge: 'OPERATIONS',
  },
  {
    name: 'Xero', badge: 'FINANCE',
    tagline: 'Cloud accounting and financial organization.',
    description: 'Used for bookkeeping support, transaction tracking, reconciliation, invoicing, and maintaining organized financial records for day-to-day business operations.',
    imageSrc: '/icons/xero.svg', imageKind: 'logo', accentColor: '#13B5EA',
    stats: ['RECONCILIATION', 'INVOICING', 'BOOKKEEPING'].map(label => ({ value: '', label })),
  },
  {
    name: 'Microsoft 365', badge: 'PRODUCTIVITY',
    tagline: 'Documents, spreadsheets, communication, and collaboration.',
    description: 'Used across Word, Excel, Outlook, PowerPoint, and Teams for reporting, documentation, scheduling, data organization, presentations, and administrative work.',
    imageSrc: '/icons/microsoft365.svg', imageKind: 'logo', accentColor: '#2563EB',
    stats: ['DOCUMENTATION', 'EXCEL', 'COMMUNICATION'].map(label => ({ value: '', label })),
  },
  {
    name: 'ClickUp', badge: 'PROJECT MANAGEMENT',
    tagline: 'Task management and workflow coordination.',
    description: 'Used to organize tasks, deadlines, priorities, project updates, and team workflows in one centralized workspace.',
    imageSrc: '/icons/clickup.svg', imageKind: 'logo', accentColor: '#7C3AED',
    stats: ['TASKS', 'DEADLINES', 'WORKFLOWS'].map(label => ({ value: '', label })),
  },
  {
    name: 'Slack', badge: 'COMMUNICATION',
    tagline: 'Fast team communication and coordination.',
    description: 'Used for internal communication, project updates, team coordination, follow-ups, and keeping conversations organized across remote teams.',
    imageSrc: '/icons/slack.svg', imageKind: 'logo', accentColor: '#7C3AED',
    stats: ['TEAM UPDATES', 'FOLLOW-UPS', 'COLLABORATION'].map(label => ({ value: '', label })),
  },
  {
    name: 'Dext', badge: 'FINANCE AUTOMATION',
    tagline: 'Receipt capture and bookkeeping workflow support.',
    description: 'Used to collect, organize, and prepare receipts, invoices, and financial documents for easier bookkeeping and record management.',
    imageSrc: '/icons/dext.png', imageKind: 'logo', accentColor: '#F97316',
    stats: ['RECEIPTS', 'DOCUMENT CAPTURE', 'BOOKKEEPING SUPPORT'].map(label => ({ value: '', label })),
  },
  {
    name: 'monday.com', badge: 'WORK MANAGEMENT',
    tagline: 'Visual project tracking and team coordination.',
    description: 'Used to manage projects, monitor progress, organize recurring work, and keep responsibilities and timelines visible across teams.',
    imageSrc: '/icons/monday.svg', imageKind: 'logo', accentColor: '#2563EB',
    stats: ['PROJECT TRACKING', 'STATUS', 'COLLABORATION'].map(label => ({ value: '', label })),
  },
]

const businessToolOrder = ['QuickBooks Online', 'Xero', 'Dext', 'Google Workspace', 'Microsoft 365', 'Basecamp', 'Slack', 'ClickUp', 'monday.com']
mobileApps.sort((a, b) => businessToolOrder.indexOf(a.name) - businessToolOrder.indexOf(b.name))

export const webApps: AppProject[] = [
  {
    name: 'Web App One',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    accentColor: '#0EA5E9',
    stats: STATS,
    badge: 'Badge',
  },
  {
    name: 'Web App Two',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    accentColor: '#EF4444',
    stats: STATS,
    badge: 'Badge',
  },
  {
    name: 'Web App Three',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    imageSrc: '/placeholders/project-3.jpg',
    accentColor: '#0891B2',
    stats: STATS,
    badge: 'Badge',
  },
  {
    name: 'Web App Four',
    tagline: 'PLACEHOLDER - one-line tagline.',
    description: DESC,
    imageSrc: '/placeholders/project-4.jpg',
    accentColor: '#F59E0B',
    stats: STATS,
    badge: 'Badge',
  },
]
