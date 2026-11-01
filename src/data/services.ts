type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}


export const services: Service[] = [
  {
    index: '01',
    title: 'Executive & Administrative Support',
    description: 'Reliable day-to-day support for busy professionals and growing teams.',
    chip: '',
    logos: ['/icons/administrative-support.svg'],
    bullets: ['Email & calendar management', 'Research & documentation', 'Scheduling & follow-ups'],
  },
  {
    index: '02',
    title: 'Operations & Project Support',
    description: 'Keep projects, deadlines, and recurring workflows organized and visible.',
    chip: '',
    logos: ['/icons/operations-project-support.svg'],
    bullets: ['Task & deadline tracking', 'Workflow organization', 'Progress reporting'],
  },
  {
    index: '03',
    title: 'Client & Customer Support',
    description: 'Professional multichannel support backed by years of BPO experience.',
    chip: '',
    logos: ['/icons/support-headset.svg'],
    bullets: ['Email, chat & phone support', 'Issue resolution & escalation', 'Customer experience support'],
  },
  {
    index: '04',
    title: 'QuickBooks & Finance Support',
    description: 'Practical bookkeeping and financial administration for day-to-day business needs.',
    chip: '',
    logos: ['/icons/quickbooks.svg'],
    bullets: ['Invoicing & expense tracking', 'Reconciliation', 'AR / AP support'],
  },
  {
    index: '05',
    title: 'Research, Reports & Documentation',
    description: 'Turn scattered information into organized, usable business outputs.',
    chip: '',
    logos: ['/icons/report-document.svg'],
    bullets: ['Web & media research', 'Reports & summaries', 'Documentation & content organization'],
  },
]

