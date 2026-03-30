'use client'

import { motion } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'none'
  className?: string
}

// Wrapper d'animation scroll — fade + slide au viewport
export default function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className,
}: RevealOnScrollProps) {
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const initial =
    direction === 'up'
      ? { opacity: 0, y: 40 }
      : direction === 'left'
      ? { opacity: 0, x: -30 }
      : { opacity: 0 }

  const animate =
    direction === 'up'
      ? { opacity: 1, y: 0 }
      : direction === 'left'
      ? { opacity: 1, x: 0 }
      : { opacity: 1 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
