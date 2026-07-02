import { Fragment } from 'react'

const phrases = [
  'William Koppelberger',
  'Enterprise Application Engineer',
  'Software Architecture',
  '.NET / Cloud / AI-Assisted Development',
]

function Run() {
  return (
    <>
      {phrases.map((p, i) => (
        <Fragment key={i}>
          <span>{p}</span>
          <span className="dot">●</span>
        </Fragment>
      ))}
    </>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <Run />
        <Run />
      </div>
    </div>
  )
}
