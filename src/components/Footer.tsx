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
        <div className="footer-name display">William Koppelberger</div>
        <div className="footer-base">
          <span className="label">© 2026 William Koppelberger</span>
          <span className="label">Utica, MI — Enterprise Application Engineer</span>
        </div>
      </div>
    </footer>
  )
}
