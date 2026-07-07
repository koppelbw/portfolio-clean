import Reveal from '../components/Reveal'
import Photo from '../components/Photo'

const blocks = [
  {
    label: 'On the ice',
    title: 'Hockey',
    paras: [
      'I have been a big hockey fan my entire life — growing up in the Detroit area, my family are big Red Wings fans.',
      'I only began playing ice hockey about five years ago, as an adult. It was intimidating at first and a large commitment, but after taking the leap I couldn’t be happier with my decision to start playing.',
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
      'When the rink is closed, I’m playing car-soccer. Whether it’s playing with friends all Saturday night or competing against the professionals for money, it’s always a great time.',
    ],
    photos: [
      { src: '/photos/rocket-league.jpg', alt: 'Rocket League cars flying through clouds toward the ball', caption: 'Car-soccer' },
    ],
  },
  {
    label: 'Off the clock',
    title: 'Art',
    paras: [
      'Anywhere I travel, you will find me at the museums.',
      'When I see a marble sculpture I always think of my previous boss and friend Peter, who would often tell us: “Building software is like building a sculpture. You chisel away a rough outline, then refine and repeat.”',
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
            <span className="idx">04</span>About Me
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
