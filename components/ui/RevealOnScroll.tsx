'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'none'
  className?: string
}

// Wrapper d'animation scroll — fade + slide au viewport
// mounted check évite la divergence SSR/client (framer-motion + Next.js App Router)
export default function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className,
}: RevealOnScrollProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const hidden =
    direction === 'up'   ? { opacity: 0, y: 40 }
    : direction === 'left' ? { opacity: 0, x: -30 }
    : { opacity: 0 }

  const visible = { opacity: 1, y: 0, x: 0 }

  // Avant le mount côté client : div simple, identique au SSR → pas de divergence
  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
