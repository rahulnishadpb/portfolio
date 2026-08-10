import { contact, projects } from '../data/resume'
import { ArrowIcon, GithubIcon } from './Icons'
import './Projects.css'

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Things I built on my own time.</h2>
        </header>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              className={`card project accent-${project.accent}`}
              key={project.name}
              data-reveal
              style={{ '--reveal-delay': `${i * 100}ms` }}
            >
              <span className="project-glow" aria-hidden="true" />
              <p className="project-index">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-blurb">{project.blurb}</p>
              <div className="chip-row project-stack">
                {project.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <a
          className="projects-link"
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          data-reveal
        >
          <GithubIcon />
          More of my code on GitHub
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

export default Projects
