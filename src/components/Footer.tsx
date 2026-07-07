import { Link } from 'react-router-dom'
import { links } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </div>
        <Link className="footer-cta" to="/contact">
          Let’s build something <span className="accent-text">→</span>
        </Link>
        <div className="footer-base">
          <span className="label">© 2026 William Koppelberger</span>
          <span className="label">Utica, MI — Software Engineer</span>
        </div>
      </div>
    </footer>
  )
}
