import { useEffect, useRef } from 'react'

/**
 * Site-wide animated film grain: a fixed, pointer-transparent canvas over the
 * whole viewport. Each tick mutates ~2% of pixels in a persistent buffer to
 * black speckles with a small random alpha, giving a subtle living-static
 * texture over the entire page.
 */
export default function Grain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const buffer = document.createElement('canvas')
    const bufCtx = buffer.getContext('2d')
    if (!bufCtx) return

    let raf = 0
    let last = 0
    let resizeTimer: ReturnType<typeof setTimeout> | undefined
    let imageData: ImageData
    let data: Uint8ClampedArray
    let intensity = 0.07
    let interval = 40

    const speckle = () => {
      const total = data.length / 4
      const count = Math.floor(total * 0.02)
      for (let i = 0; i < count; i++) {
        const p = Math.floor(Math.random() * total) * 4
        data[p + 3] = Math.random() * 255 * intensity
      }
    }

    const draw = () => {
      bufCtx.putImageData(imageData, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(buffer, 0, 0)
    }

    const setup = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      buffer.width = canvas.width
      buffer.height = canvas.height
      const desktop = window.innerWidth >= 1024
      intensity = desktop ? 0.1 : 0.07
      interval = desktop ? 10 : 40
      imageData = bufCtx.createImageData(Math.max(buffer.width, 1), Math.max(buffer.height, 1))
      data = imageData.data
      // warm sepia speckles instead of black
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 138
        data[i + 1] = 66
        data[i + 2] = 33
      }
      // seed several passes so grain is present immediately
      for (let i = 0; i < 30; i++) speckle()
      draw()
    }

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame)
      if (t - last < interval) return
      last = t
      speckle()
      draw()
    }

    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(raf)
        setup()
        raf = requestAnimationFrame(frame)
      }, 150)
    }

    setup()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) raf = requestAnimationFrame(frame)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="grain" aria-hidden="true" />
}
