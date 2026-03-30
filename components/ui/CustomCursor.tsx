'use client'

import { useEffect, useRef, useState } from 'react'

// Curseur custom — point accent qui suit la souris, s'agrandit sur les éléments interactifs
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = () => setIsHovering(true)
    const onLeave = () => setIsHovering(false)

    // Attache les listeners sur tous les éléments interactifs présents et futurs
    const attachToEl = (el: Element) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    }
    const detachFromEl = (el: Element) => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }

    const attachAll = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(attachToEl)
    }

    attachAll()
    window.addEventListener('mousemove', moveCursor)

    // Observe les nouveaux éléments injectés dynamiquement (modal, etc.)
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(attachToEl)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Ring suit avec un léger lag (lerp)
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(rafId.current)
      observer.disconnect()
      document.querySelectorAll('a, button, [data-cursor]').forEach(detachFromEl)
    }
  }, [])

  return (
    <>
      {/* Masqué sur mobile/tactile — uniquement sur desktop avec souris */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-accent transition-transform duration-75 hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-accent/60 transition-all duration-200 hidden md:block ${
          isHovering ? 'scale-150 border-accent bg-accent/10' : 'scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
