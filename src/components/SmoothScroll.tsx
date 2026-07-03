import { useEffect } from 'react'
import Lenis from 'lenis'

let lenis: Lenis | null = null

/** Current Lenis instance, if smooth scrolling is active. */
export function getLenis() {
  return lenis
}

/**
 * Inertial scroll via Lenis: wheel/touch input is eased so the page keeps
 * gliding with momentum after input stops. Disabled under
 * prefers-reduced-motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
    })

    let raf = requestAnimationFrame(function loop(time: number) {
      lenis?.raf(time)
      raf = requestAnimationFrame(loop)
    })

    return () => {
      cancelAnimationFrame(raf)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  return null
}
