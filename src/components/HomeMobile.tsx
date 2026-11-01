import { Link } from 'react-router-dom'
import { SealCheck, CaretRight, Stack } from '@/components/slab'
import { profile } from '@/data/profile'
import { annualReportSamples } from '@/data/annual-report'
import { whyWorkWithMe } from '@/data/why-work-with-me'
import { services } from '@/data/services'
import QuickMenu from './QuickMenu'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the QuickMenu
 *                (theme + accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph so
 *                it reads at a glance
 *   HomeExplore  one shelf card per rail view in a snap row, then the first
 *                testimonial as a video stage
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.role}
        </span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Projects', to: '/projects', title: 'Annual Report Development', desc: 'Selected work across operations, research, and reporting.', img: annualReportSamples[0].src },
  { n: '02', label: 'Services', to: '/services', title: services[0].title, desc: services[1].title, Icon: Stack },
  { n: '03', label: 'Why Work With Me', to: '/testimonials', title: 'Reliable · Proactive · Organized', desc: 'Clear communication and consistent follow-through.', img: '/icons/operations-project-support.svg' },
  { n: '04', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: '5+ years of customer, operations, and business support.', img: profile.avatarSrc },
  { n: '05', label: 'Tools in Action', to: '/projects?toolkit=1', title: 'Business, operations, and AI toolkit', desc: 'The tools behind organized day-to-day work.', img: '/icons/googleworkspace.svg' },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className="htile">
              {'img' in t ? (
                <span className="htile__media"><img className="htile__img" src={t.img} alt="" loading="lazy" /></span>
              ) : (
                <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* A header that links carries its chevron on the title itself. */}
      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/testimonials" className="hsec__link">
            Why Work With Me
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      <ul className="mobile-why" role="list">
        {whyWorkWithMe.map(item => <li key={item.name}>
          <h3>{item.name}</h3><p>{item.role}</p><span>{item.work}</span>
        </li>)}
      </ul>
    </>
  )
}
