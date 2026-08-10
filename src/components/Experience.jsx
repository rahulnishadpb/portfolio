import { experience } from '../data/resume'
import './Experience.css'

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where I&rsquo;ve shipped.</h2>
          <p className="section-sub">
            Three teams, one pattern: take the thing nobody owns, and own it.
          </p>
        </header>

        <ol className="timeline">
          {experience.map((job, i) => (
            <li
              className="timeline-item"
              key={job.company}
              data-reveal
              style={{ '--reveal-delay': `${i * 100}ms` }}
            >
              <span
                className={`timeline-marker ${job.current ? 'is-current' : ''}`}
                aria-hidden="true"
              />

              <article className="timeline-body card">
                <header className="timeline-head">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">
                      {job.company}
                      {job.current && <span className="timeline-badge">Current</span>}
                    </p>
                  </div>
                  <p className="timeline-period">{job.period}</p>
                </header>

                <p className="timeline-summary">{job.summary}</p>

                <ul className="timeline-highlights">
                  {job.highlights.map((point) => (
                    <li key={point.slice(0, 32)}>{point}</li>
                  ))}
                </ul>

                <div className="chip-row timeline-stack">
                  {job.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
