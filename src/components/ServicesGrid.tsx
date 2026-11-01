import { services as SERVICES } from '@/data/services'
import { useIsPhone } from '@/hooks/useMediaQuery'
import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * Every string below is a PLACEHOLDER. Replace it, or hand this file to your
 * AI assistant and tell it what to put in each spot.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: '01 — Understand',
    body: 'I learn your priorities, processes, tools, and expectations so I can support your business effectively.',
    Icon: MagnetStraight,
    chips: ['Priorities', 'Processes', 'Tools', 'Goals'],
  },
  {
    index: '02',
    label: '02 — Organize',
    body: 'I bring structure to tasks, communication, deadlines, files, and recurring workflows.',
    Icon: Timer,
    chips: ['Tasks', 'Systems', 'Deadlines', 'Communication'],
  },
  {
    index: '03',
    label: '03 — Support & Improve',
    body: 'I keep work moving, follow through on priorities, and help improve the way day-to-day operations run.',
    Icon: Trophy,
    chips: ['Execution', 'Follow-up', 'Reporting', 'Improvement'],
  },
]

/* ---------- The services ---------- */


/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  const phone = useIsPhone()
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Support That Keeps Your Business Moving.
        </h1>
        <p className="pgrid__lede">
          Executive, operational, and client support designed to keep your work organized, responsive, and on track.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <h2 className="sgrid__method-title" id="method-title">
              A Simple Way to Work Together
              <br />
              <span>Clear support. Organized execution. Consistent follow-through.</span>
            </h2>
            <p className="sgrid__method-sub">
              A straightforward process designed to keep communication clear and work moving from day one.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}{s.label.startsWith('Step ') ? '.' : ''}</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Your services, listed.</h2>
            <p className="sgrid__offers-sub">{phone ? 'Flexible support for your business.' : 'PLACEHOLDER - one short nudge.'}</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                {s.chip && <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>}
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">NEED SOMETHING MORE SPECIFIC?</span>
              <h2 className="sgrid__flow-title">Flexible Support, Built Around Your Workflow.</h2>
              <p className="sgrid__flow-sub">
                Every business works differently. I can adapt to your existing tools and processes or help create a more organized way of working.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {[
                { label: 'Google Workspace', logo: '/icons/googleworkspace.svg' },
                { label: 'QuickBooks', logo: '/icons/quickbooks.svg' },
                { label: 'AI-Assisted Workflows', logo: '/icons/openai.svg' },
              ].map(({ label, logo }) => {
                return (
                <li key={label} className="sgrid__flow-tool">
                  <img src={logo} alt="" width={14} height={14} className="sgrid__flow-tool-logo" />
                  <span>{label}</span>
                </li>
                )
              })}
            </ul>
          </header>
        </div>
      </div>
    </section>
  )
}
