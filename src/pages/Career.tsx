import { useState } from 'react'
import Reveal from '../components/Reveal'
import { career, careerIntro } from '../data'

export default function Career() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section container">
      <Reveal>
        <div className="section-head">
          <div className="label">
            <span className="idx">01</span>Career
          </div>
          <h1 className="display">Ten Years of Shipping</h1>
          <p style={{ maxWidth: '44em' }}>
            <strong>{careerIntro.company}</strong> · {careerIntro.years}
            <br />
            {careerIntro.blurb}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="rows">
          {career.map((entry, i) => {
            const isOpen = open === i
            return (
              <div className={`row ${isOpen ? 'open' : ''}`} key={`${entry.client}-${entry.project}`}>
                <button
                  className="row-head"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="row-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="row-title">
                    {entry.project}
                    <small>{entry.client}</small>
                  </span>
                  <span className="label row-role">{entry.role}</span>
                  <span className="row-years">{entry.years}</span>
                </button>
                <div className="row-body">
                  <div className="row-body-inner">
                    <div className="tags">
                      {entry.stack.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul>
                      {entry.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
