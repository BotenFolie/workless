'use client'

import { motion } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'none'
  className?: string
}

// Wrapper d'animation scroll — fade + slide au viewport
// suppressHydrationWarning sur le motion.div évite la divergence SSR/client
// sans jamais changer le type d'élément (ce qui brisait les IntersectionObservers enfants)
export default function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className,
}: RevealOnScrollProps) {
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const hidden =
    direction === 'up'   ? { opacity: 0, y: 40 }
    : direction === 'left' ? { opacity: 0, x: -30 }
    : { opacity: 0 }

  const visible = { opacity: 1, y: 0, x: 0 }

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  )
}
