import { useState } from 'react'

interface PhotoProps {
  src: string
  alt: string
  caption: string
}

export default function Photo({ src, alt, caption }: PhotoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="photo-placeholder">
        <span className="label">{caption}</span>
        <span className="label">add {src} to public/</span>
      </div>
    )
  }

  return (
    <figure className="photo">
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
