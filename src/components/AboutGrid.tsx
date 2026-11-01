import { profile } from '@/data/profile'

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Executive Virtual Assistant · Operations · Client Support
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            Consider it done.
            <span> I bring structure to busy workdays, so leaders can focus on what matters most.</span>
          </p>

          <p className="agrid__note">
            Argell Nicolo is a dependable, detail-driven professional with over five years of experience delivering high-quality support across financial services, hospitality, e-commerce, and technical accounts. He has worked with companies such as Foundever, TaskUs, and ProbeCX, building a strong track record in customer service, issue resolution, and multichannel communication. Beyond frontline support, he has leadership experience as an Operations Team Leader, where he managed workflows, coached teams, and ensured consistent service performance. His skill set includes administrative support, client communication, email and calendar management, and basic bookkeeping using QuickBooks Online. Argell stands out for combining efficiency with empathy, ensuring both accurate results and positive client experiences. He is highly organized, proactive, and reliable, often anticipating needs and resolving issues before they escalate. As he transitions into a Business Virtual Assistant role, he aims to support clients in streamlining operations, improving customer satisfaction, and building systems for long-term growth
          </p>
        </div>

        <div className="agrid__portrait">
          <img
            src="/argell-about-enhanced.png"
            alt="Argell Nicolo Isip"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
