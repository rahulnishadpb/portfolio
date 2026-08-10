import { achievements, education, profile } from '../data/resume'
import { ExternalIcon, SparkIcon } from './Icons'
import './About.css'

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            Ownership from the first commit to the production hotfix.
          </h2>
        </header>

        <div className="about-grid">
          <div className="about-copy" data-reveal>
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <aside className="about-aside" data-reveal style={{ '--reveal-delay': '100ms' }}>
            <div className="card about-card">
              <p className="about-card-label">Education</p>
              <h3 className="about-card-title">{education.degree}</h3>
              <p className="about-card-meta">{education.school}</p>
              <p className="about-card-meta about-card-dim">
                {education.period} · {education.location}
              </p>
            </div>

            <div className="card about-card">
              <p className="about-card-label">
                <SparkIcon /> What I reach for
              </p>
              <ul className="about-list">
                <li>TypeScript everywhere, validated at the edges with Zod</li>
                <li>React Native + Expo for shipping to both stores at once</li>
                <li>React Query for server state, not another global store</li>
                <li>Tests on the flows that lose money when they break</li>
              </ul>
            </div>
          </aside>
        </div>

        <ul className="achievements">
          {achievements.map((item, i) => {
            const Tag = item.href ? 'a' : 'div'
            return (
              <li key={item.title} data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
                <Tag
                  className="card achievement"
                  {...(item.href
                    ? { href: item.href, target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  <span className="achievement-metric gradient-text">
                    {item.metric}
                  </span>
                  <span className="achievement-title">
                    {item.title}
                    {item.href && <ExternalIcon />}
                  </span>
                  <span className="achievement-detail">{item.detail}</span>
                </Tag>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default About
