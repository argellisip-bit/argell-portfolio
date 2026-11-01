import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Stack,
  Quotes,
  FunnelSimple,
  Gear,
  AddressBook,
  Globe,
  AppWindow,
} from '@/components/slab'
import { annualReportSamples } from '@/data/annual-report'


/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact - the funnels, the tools, the clients
 * and the credentials are the same records the views render in full.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const PROJECT_SHOTS = annualReportSamples

const OFFERS = [
  { Icon: FunnelSimple, title: 'Executive & Administrative Support' },
  { Icon: Gear, title: 'Operations & Project Support' },
  { Icon: AddressBook, title: 'Client & Customer Support' },
  { Icon: Globe, title: 'QuickBooks & Finance Support' },
  { Icon: AppWindow, title: 'Research, Reports & Documentation' },
] as const

const CLIENTS = [
  { name: '01 — Reliable & Proactive', role: 'I stay on top of tasks, deadlines, and follow-ups.', work: 'Reliable · Proactive · Consistent', logo: '/icons/calendar-check.svg' },
  { name: '02 — Clear Communication', role: 'Professional communication across clients, teams, email, chat, and day-to-day operations.', work: 'Responsive · Clear · Professional', logo: '/icons/support-headset.svg' },
  { name: '03 — Organized Support', role: 'I bring structure to workflows, documentation, research, and recurring responsibilities.', work: 'Organized · Detail-Oriented · Flexible', logo: '/icons/operations-project-support.svg' },
]



function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: the funnel thumbnails drift upward on a looped track. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="A quick look at the projects and systems I’ve supported across operations, reporting, research, client support, and finance." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((f, i) => (
              <span key={i} className="bento__shot">
                <img src={f.src} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: a single portrait. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="5+ years of experience across customer support, operations, administration, and business support." />
        <div className="bento__media bento__portrait" aria-hidden="true">
          <img src="/Argell%203.png" alt="" loading="lazy" decoding="async" />
        </div>
      </Link>



      {/* Services: the five offers as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="Flexible support across administration, operations, client experience, finance, and research." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">0{i + 1} — {title}</span>
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Testimonials: client cards drifting up a clipped column. */}
      <Link to="/testimonials" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Why Work With Me" desc="Reliable support built around communication, organization, and follow-through." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  {c.logo ? (
                    <img src={c.logo} alt="" width={18} height={18} />
                  ) : (
                    <Quotes size={14} weight="fill" />
                  )}
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
