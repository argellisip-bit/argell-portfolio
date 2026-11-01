export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I provide executive, administrative, operations, client support, research, reporting, and QuickBooks assistance for busy professionals and growing businesses.',
  },
  {
    q: 'How fast can you start?',
    a: 'Availability depends on the project and workload, but I’m happy to discuss your timeline and determine the best starting date.',
  },
  {
    q: 'How much do you charge?',
    a: 'Rates depend on the scope, complexity, and level of support you need. Send me a message with a few details about your project, and I can discuss the best arrangement with you.',
  },
  {
    q: 'Where are you based?',
    a: 'I’m based in the Philippines and work remotely with clients across different time zones.',
  },
  {
    q: 'What happens after I write?',
    a: 'I’ll review your message, learn more about what you need, and respond with next steps or any questions needed to understand the project.',
  },
]
