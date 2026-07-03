import Reveal from '../components/Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section className="section container">
      <Reveal>
        <div className="section-head">
          <div className="label">
            <span className="idx">03</span>Projects
          </div>
          <h1 className="display">Personal Builds</h1>
          <p style={{ maxWidth: '44em' }}>
            Side projects where I explore architecture, tooling, and ideas end-to-end — from the
            database schema to the pixels.
          </p>
        </div>
      </Reveal>

      <div>
        {projects.map((p, i) => (
          <Reveal key={p.name}>
            <article className="project">
              <div>
                <div className="label">
                  <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                  {p.tagline}
                </div>
                <h3>{p.name}</h3>
              </div>
              <div className="project-body">
                <p>{p.description}</p>
                <div className="tags">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <a className="arrow-link" href={p.link} target="_blank" rel="noreferrer">
                  {p.linkLabel} ↗
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
