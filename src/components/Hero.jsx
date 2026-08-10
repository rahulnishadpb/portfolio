import { contact, profile, stats } from '../data/resume'
import { ArrowIcon, FileIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import './Hero.css'

function yearsShipping(since) {
  const ms = Date.now() - new Date(since).getTime()
  return Math.max(1, Math.round(ms / (365.25 * 24 * 60 * 60 * 1000)))
}

function Hero() {
  const heroStats = [
    {
      value: `${yearsShipping(profile.careerStart)} yrs`,
      label: 'Shipping production software',
    },
    ...stats,
  ]

  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="hero-status" data-reveal>
          <span className="hero-pulse" aria-hidden="true" />
          {profile.role} at {profile.company}
        </p>

        <h1 className="hero-title" data-reveal style={{ '--reveal-delay': '60ms' }}>
          {profile.name}
        </h1>

        <p className="hero-lede" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <span className="gradient-text">
            Full-stack &amp; React Native engineer
          </span>{' '}
          shipping mobile and web products to hundreds of thousands of users.
        </p>

        <p className="hero-blurb" data-reveal style={{ '--reveal-delay': '180ms' }}>
          {profile.blurb}
        </p>

        <div className="hero-cta" data-reveal style={{ '--reveal-delay': '240ms' }}>
          <a className="btn btn-primary" href="#experience">
            See my work
            <ArrowIcon />
          </a>
          <a
            className="btn btn-ghost"
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
          >
            <FileIcon />
            Résumé
          </a>

          <div className="hero-socials">
            <a
              className="icon-btn"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              className="icon-btn"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              className="icon-btn"
              href={`mailto:${contact.email}`}
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <dl className="hero-stats">
          {heroStats.map((stat, i) => (
            <div
              className="hero-stat"
              key={stat.label}
              data-reveal
              style={{ '--reveal-delay': `${300 + i * 70}ms` }}
            >
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
