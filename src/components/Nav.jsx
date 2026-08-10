import { useEffect, useState } from 'react'
import { profile, sections, contact } from '../data/resume'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollProgress } from '../hooks/useScrollProgress'
import {
  CloseIcon,
  GithubIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from './Icons'
import './Nav.css'

const sectionIds = sections.map((s) => s.id)

function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const progress = useScrollProgress()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a className="brand" href="#top" aria-label={`${profile.name} — home`}>
          <span className="brand-mark">RN</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="nav-links" aria-label="Sections">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={active === section.id ? 'is-active' : ''}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="icon-btn nav-github"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GithubIcon />
          </a>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="icon-btn nav-burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} />

      {menuOpen && (
        <div className="nav-sheet">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Nav
