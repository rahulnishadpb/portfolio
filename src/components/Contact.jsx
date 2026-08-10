import { useState } from 'react'
import { contact, profile } from '../data/resume'
import {
  CheckIcon,
  CopyIcon,
  FileIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from './Icons'
import './Contact.css'

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard is unavailable (insecure origin, denied permission) —
      // the mailto link next to this button still works.
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel" data-reveal>
          <div className="contact-glow" aria-hidden="true" />

          <p className="eyebrow">Contact</p>
          <h2 className="contact-title">
            Got something worth building?{' '}
            <span className="gradient-text">Let&rsquo;s talk.</span>
          </h2>
          <p className="contact-sub">
            Fastest way to reach me is email — I read everything and reply to
            anything that isn&rsquo;t a template.
          </p>

          <div className="contact-email">
            <a href={`mailto:${contact.email}`}>
              <MailIcon />
              {contact.email}
            </a>
            <button
              type="button"
              className="contact-copy"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="contact-links">
            <a
              className="btn btn-ghost"
              href={contact.phoneHref}
            >
              <PhoneIcon />
              {contact.phone}
            </a>
            <a
              className="btn btn-ghost"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
              LinkedIn
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
          </div>

          <p className="contact-location">Based in {profile.location}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
