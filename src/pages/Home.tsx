import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const highlights = [
  {
    label: 'Award',
    title: '“Platform of the Year”',
    text: 'Technical Lead of the award-winning CDRA/ROSI platform, after leading the team’s Blazor adoption from zero experience to full productivity in three months.',
  },
  {
    label: 'Delivery',
    title: 'High-Profile, High-Stakes',
    text: 'Built and shipped an executive-priority application and public API under a government-mandated deadline, frequently presented to top business leadership.',
  },
  {
    label: 'Leadership',
    title: 'Billions Modernized',
    text: 'Led a 12-engineer team on a platform processing billions annually, including a zero-downtime Azure migration and AI-assisted workflows that cut PR review times in half.',
  },
]

const services = [
  'Software Architecture',
  'Full-Stack Engineering',
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
            Software, <span className="accent-text">end to end</span>.
          </h1>
        </Reveal>
        <div className="hero-grid">
          <Reveal delay={300}>
            <p className="hero-intro">
              I see software the whole way through; architecture, backend, frontend, cloud, and the
              pipeline that ships it. I bring a balance of hands-on technical depth, architectural
              thinking, AI-driven SDLC enhancements, and people-centered leadership that
              consistently drives quality for businesses.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="hero-meta">
              <span className="label">Software Engineer</span>
              <span className="label">11 Years of Experience</span>
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
