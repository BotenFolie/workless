'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

// Lenis smooth scroll — signature des sites premium
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Désactiver Lenis si l'utilisateur préfère les animations réduites
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
