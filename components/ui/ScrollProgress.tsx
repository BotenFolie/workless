'use client'

import { useEffect, useRef } from 'react'

// Barre de progression du scroll — fine ligne accent en haut de page
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[99997] h-[2px] bg-accent origin-left"
      style={{ transform: 'scaleX(0)', willChange: 'transform' }}
    />
  )
}
