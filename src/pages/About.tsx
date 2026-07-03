import Reveal from '../components/Reveal'
import Photo from '../components/Photo'

const blocks = [
  {
    label: 'On the ice',
    title: 'Hockey',
    paras: [
      'Hockey has been a constant my whole life. These days that means beer-league nights across metro Detroit — and the occasional championship, trophy filled with Blue Light cans included.',
      'Pilgrimages matter too: standing next to the Stanley Cup in the Great Hall at the Hockey Hall of Fame is about as close to a religious experience as the sport allows.',
    ],
    photos: [
      { src: '/photos/hockey-team.jpg', alt: 'League championship team photo', caption: 'League champs' },
      { src: '/photos/hockey-hof.jpg', alt: 'With the Stanley Cup at the Hockey Hall of Fame', caption: 'The Cup, Toronto' },
    ],
  },
  {
    label: 'On the pitch (virtually)',
    title: 'Rocket League',
    paras: [
      'When the rink is closed, the hockey instinct moves to Rocket League — rocket-powered cars, aerial touches, and the eternal chase for one more rank up. It scratches the same itch: fast decisions, teamwork, and mechanics you can grind forever.',
    ],
    photos: [],
  },
  {
    label: 'Off the clock',
    title: 'Art',
    paras: [
      'I gravitate toward craftsmanship at scale — Gothic stained glass like Sainte-Chapelle in Paris, where thirteenth-century engineers solved light itself, and museum textile work where every stitch is deliberate.',
      'It is the same thing I chase in software: structure, detail, and the feeling that someone cared about every layer.',
    ],
    photos: [
      { src: '/photos/art-chapel.jpg', alt: 'Stained glass windows of Sainte-Chapelle', caption: 'Sainte-Chapelle, Paris' },
      { src: '/photos/art-window.jpg', alt: 'Stained glass window seen through ironwork', caption: 'Through the ironwork' },
      { src: '/photos/art-textile.jpg', alt: 'Embroidered Chinese vest in a museum', caption: 'Museum textile' },
    ],
  },
]

export default function About() {
  return (
    <section className="section container">
      <Reveal>
        <div className="section-head">
          <div className="label">
            <span className="idx">03</span>About Me
          </div>
          <h1 className="display">Beyond the Editor</h1>
        </div>
      </Reveal>

      <div>
        {blocks.map((b) => (
          <Reveal key={b.title}>
            <div className="about-block">
              <div>
                <div className="label">{b.label}</div>
                <h3>{b.title}</h3>
              </div>
              <div className="about-copy">
                {b.paras.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {b.photos.length > 0 && (
                  <div className="about-photos">
                    {b.photos.map((ph) => (
                      <Photo key={ph.src} {...ph} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
