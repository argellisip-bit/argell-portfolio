import { Key, Browser, type Icon } from '@/components/slab'
import { mobileApps, type AppProject } from '@/data/projects'
import AIStack from '@/components/AIStack'
import Flagship from '@/components/Flagship'

/* Browser extensions - small Chrome tools, shown as a compact two-up block
   inside this same section (not a new section of their own). */
type Extension = {
  name: string
  desc: string
  imageSrc: string
  imageAlt: string
  Icon: Icon
  badge?: string
  tagline?: string
  tags?: string[]
  imageKind?: 'logo'
}

const EXTENSIONS: Extension[] = [
  {
    name: 'ChatGPT',
    desc: 'Used to support research, drafting, document review, information organization, brainstorming, and administrative workflows.',
    imageSrc: '/ai-productivity-workspace.svg',
    imageAlt: 'Sample research and drafting workspace with fictional content',
    badge: 'AI PRODUCTIVITY',
    Icon: Key,
  },
  {
    name: 'Canva',
    desc: 'Used to prepare reports, presentation materials, visual content, and polished client-facing documents.',
    imageSrc: '/annual-report/Syncmed%20Cover.jpg',
    imageAlt: 'Syncmed report cover design',
    badge: 'CONTENT & DESIGN',
    Icon: Browser,
  },
  {
    name: 'Claude',
    badge: 'AI PRODUCTIVITY',
    tagline: 'Research, drafting, analysis, and workflow support.',
    desc: 'Used for research, content drafting, document analysis, brainstorming, summarization, and structured problem-solving across administrative and project work.',
    tags: ['RESEARCH', 'DRAFTING', 'ANALYSIS'],
    imageSrc: '/icons/ai/claude-color.svg',
    imageAlt: 'Claude logo',
    imageKind: 'logo',
    Icon: Key,
  },
  {
    name: 'Gemini',
    badge: 'AI PRODUCTIVITY',
    tagline: 'Research, ideation, and information support.',
    desc: 'Used for research assistance, brainstorming, summarization, and exploring ideas across administrative and project-based work.',
    tags: ['RESEARCH', 'IDEATION', 'SUMMARIZATION'],
    imageSrc: '/icons/gemini.svg',
    imageAlt: 'Gemini logo',
    imageKind: 'logo',
    Icon: Key,
  },
]

const aiToolOrder = ['ChatGPT', 'Claude', 'Gemini', 'Canva']
EXTENSIONS.sort((a, b) => aiToolOrder.indexOf(a.name) - aiToolOrder.indexOf(b.name))

/* ── Extension card ─────────────────────────────────────────────
   Vertical card: a faux browser window on top (chrome bar + equal-height
   stage), then badge / title / description below. The stage is the same
   height on both cards so portrait and landscape screenshots read as a
   matched set; each image is centered with
   object-fit: contain and never displayed past its native width. */
function ExtensionCard({ ext }: { ext: Extension }) {
  const ExtIcon = ext.Icon
  return (
    <li className="ext-card">
      <figure className="ext-card__window">
        <div className="ext-card__chrome" aria-hidden="true">
          <span className="ext-card__dots">
            <span className="ext-card__dot" />
            <span className="ext-card__dot" />
            <span className="ext-card__dot" />
          </span>
        </div>
        <div className={`ext-card__stage${ext.imageKind === 'logo' ? ' ext-card__stage--logo' : ''}`}>
          <img
            className="ext-card__img"
            src={ext.imageSrc}
            alt={ext.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </figure>
      <div className="ext-card__body">
        <span className="ext-card__badge">
          <ExtIcon size={14} weight="bold" aria-hidden="true" />
          {ext.badge ?? 'Chrome Extension'}
        </span>
        <h4 className="ext-card__name">{ext.name}</h4>
        {ext.tagline && <p className="ext-card__desc">{ext.tagline}</p>}
        <p className="ext-card__desc">{ext.desc}</p>
        {ext.tags && <ul className="app-card__stats" style={{ '--app-color': '#D97757' } as React.CSSProperties} aria-label={`${ext.name} skills`}>
          {ext.tags.map(tag => <li key={tag} className="app-card__stat"><span className="app-card__stat-label">{tag}</span></li>)}
        </ul>}
      </div>
    </li>
  )
}

/* ── App card ───────────────────────────────────────────────── */
function AppCard({ app }: { app: AppProject }) {
  return (
    <li
      className="app-card"
      style={{ ['--app-color' as string]: app.accentColor }}
    >
      <div className={`app-card__img-wrap${app.imageKind === 'logo' ? ' app-card__img-wrap--logo' : ''}`}>
        {app.imageSrc ? (
          <img
            className="app-card__img"
            src={app.imageSrc}
            alt={`${app.name} ${app.imageKind === 'logo' ? 'logo' : 'screenshot'}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="app-card__img-placeholder" aria-hidden="true">
            <span className="app-card__img-initials">
              {app.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
            </span>
          </div>
        )}
        <span className="app-card__badge">{app.badge}</span>
        <span className="app-card__img-fade" aria-hidden="true" />
      </div>
      <div className="app-card__body">
        <h3 className="app-card__name">{app.name}</h3>
        <p className="app-card__tagline">{app.tagline}</p>
        <p className="app-card__desc">{app.description}</p>
        <ul className="app-card__stats" role="list">
          {app.stats.map((stat) => (
            <li key={stat.label} className="app-card__stat">
              {stat.value && <span className="app-card__stat-value">{stat.value}</span>}
              <span className="app-card__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

/* ── Sections ───────────────────────────────────────────────
   Two exports so the Projects dialog can open each body of work on its own;
   the default still composes them (with Flagship) for anything that wants
   the whole section. */
export function AIStackSection() {
  return (
    <section
      className="projects projects--ai"
      id="projects"
      aria-labelledby="projects-heading"
      data-reveal
    >
      <header className="projects__header">
        <span className="projects__eyebrow">Placeholder category</span>
        <h2 className="projects__headline" id="projects-heading">
          Your systems headline.
        </h2>
        <p className="projects__subhead">
          PLACEHOLDER - tell me what to put here: one line on the systems below.
          Open a branch to see what sits under it.
        </p>
      </header>
      <div className="projects__panel" id="projects-panel">
        <AIStack />
      </div>
    </section>
  )
}

export function AppsSection() {
  return (
    <section className="projects projects--apps" aria-label="Tools in Action" data-reveal>
      <div className="projects__panel">
        <span className="projects__ext-eyebrow">Business &amp; Operations Tools</span>
        <ul className="projects__apps" role="list">
          {mobileApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </ul>

        {/* Browser extensions - a compact companion block in the same section */}
        <div className="projects__ext">
          <span className="projects__ext-eyebrow">AI &amp; Productivity</span>
          <ul className="ext-grid" role="list">
            {EXTENSIONS.map((ext) => (
              <ExtensionCard key={ext.name} ext={ext} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default function Projects() {
  return (
    <>
      <AIStackSection />
      <AppsSection />
      <Flagship />
    </>
  )
}
