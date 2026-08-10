import { profile } from '../data/resume'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="footer-built">Built with React, Vite, and no UI library.</p>
        <a className="footer-top" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
