'use client'

import { motion, useReducedMotion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface QuizProgressBarProps {
  current: number
  total: number
  label: string
}

// Barre de progression quiz — role=progressbar accessible, respecte prefers-reduced-motion
export default function QuizProgressBar({ current, total, label }: QuizProgressBarProps) {
  const reducedMotion = useReducedMotion()
  const pct = Math.min(100, Math.max(0, (current / total) * 100))

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className="h-px bg-white/[0.06] flex-shrink-0"
    >
      <motion.div
        className="h-full bg-accent origin-left"
        animate={{ scaleX: pct / 100 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.35, ease: EASE }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  )
}
