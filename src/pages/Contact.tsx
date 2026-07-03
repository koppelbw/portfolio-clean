import Reveal from '../components/Reveal'
import { links } from '../data'

export default function Contact() {
  return (
    <section className="contact-hero container">
      <Reveal>
        <div className="label">
          <span className="idx">05</span>Contact
        </div>
      </Reveal>
      <Reveal delay={120}>
        <h1 className="display">
          Let’s Build
          <br />
          Something
        </h1>
      </Reveal>
      <Reveal delay={240}>
        <div className="contact-list">
          <a href={`mailto:${links.email}`}>
            <span>{links.email}</span>
            <span className="label">Email ↗</span>
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <span>William Koppelberger</span>
            <span className="label">LinkedIn ↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
