import { skills } from '../data/resume'
import './Skills.css'

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Toolkit</p>
          <h2 className="section-title">The stack I work in.</h2>
          <p className="section-sub">
            Strongest in the TypeScript + React ecosystem, comfortable anywhere
            from a SQL query plan to an App Store release build.
          </p>
        </header>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div
              className="card skill-card"
              key={group.title}
              data-reveal
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <div className="skill-head">
                <span className="skill-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="skill-title">{group.title}</h3>
              </div>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
