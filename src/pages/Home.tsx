import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const highlights = [
  {
    label: 'Award',
    title: '“Platform of the Year”',
    text: 'Technical Lead of the CDRA/ROSI platform, awarded internally at the Launch, by NTT DATA Awards Celebration.',
  },
  {
    label: 'Delivery',
    title: 'High-Profile, High-Stakes',
    text: 'Delivered a solution of critical importance and time sensitivity directly to top business leadership as the full-stack technical engineer.',
  },
  {
    label: 'Leadership',
    title: 'Billions Modernized',
    text: 'Mentor and Lead to a large Agile team that modernized a high-profile process handling billions of dollars each year.',
  },
]

const services = [
  'Software Architecture',
  'Full-Stack .NET Engineering',
  'Cloud, DevOps & IaC',
  'AI-Assisted Development',
  'Team Leadership & Mentoring',
]

export default function Home() {
  return (
    <>
      <section className="hero container">
        <Reveal>
          <div className="label">
            <span className="idx">01</span>William Koppelberger — Utica, MI
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="hero-statement display">
            Enterprise software,
            <br />
            <span className="accent-text">engineered</span> to ship.
          </h1>
        </Reveal>
        <div className="hero-grid">
          <Reveal delay={300}>
            <p className="hero-intro">
              I deliver multi-million-dollar projects and modern cloud-ready solutions. Hands-on
              engineering, software architecture, and AI-assisted development workflows that
              accelerate delivery and improve code quality — with a decade of shipping high-stakes
              healthcare software for Fortune 500 clients.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="hero-meta">
              <span className="label">Enterprise Application Engineer</span>
              <span className="label">Launch, by NTT DATA</span>
              <span className="label">2015 — Present</span>
              <span className="label">B.S. Computer Science, GVSU</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container">
        <Reveal>
          <div className="section-head">
            <div className="label">Selected Highlights</div>
          </div>
        </Reveal>
        <div className="cards">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 120}>
              <div className="card">
                <span className="label">{h.label}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <Reveal>
          <div className="section-head">
            <div className="label">What I Do</div>
          </div>
        </Reveal>
        <div className="rows">
          {services.map((s, i) => (
            <div className="row" key={s}>
              <div className="row-head" style={{ cursor: 'default' }}>
                <span className="row-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="row-title">{s}</span>
                <span />
                <span />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
          <Link className="arrow-link" to="/career">
            View Career →
          </Link>
          <Link className="arrow-link" to="/projects">
            View Projects →
          </Link>
        </div>
      </section>
    </>
  )
}
