'use client'

import { useRef, useState } from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

// Bouton magnétique — suit légèrement la souris, effet attraction premium
export default function MagneticButton({ children, strength = 0.25, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    // Désactivé sur tactile et stylet (pointer: coarse = doigt/stylet)
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setOffset({ x, y })
  }

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  )
}
