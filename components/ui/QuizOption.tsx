'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Check, type LucideIcon } from 'lucide-react'

interface QuizOptionProps {
  icon: LucideIcon
  label: string
  selected: boolean
  multi: boolean
  onClick: () => void
  size?: 'md' | 'sm'
}

// Bouton d'option quiz — icône SVG (jamais d'emoji), coché via <Check/>, respecte prefers-reduced-motion
export default function QuizOption({ icon: Icon, label, selected, multi, onClick, size = 'md' }: QuizOptionProps) {
  const reducedMotion = useReducedMotion()
  const isMd = size === 'md'

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={reducedMotion ? undefined : { scale: 0.985 }}
      aria-pressed={selected}
      className={`w-full text-left border flex items-center transition-all duration-200 ${
        isMd ? 'px-4 py-3.5 gap-4' : 'px-3.5 py-2.5 gap-3'
      } ${
        selected
          ? 'border-accent/70 bg-accent/[0.07]'
          : 'border-white/[0.09] hover:border-white/25 hover:bg-white/[0.025]'
      }`}
    >
      <Icon
        aria-hidden="true"
        strokeWidth={1.75}
        className={`flex-shrink-0 ${isMd ? 'w-[18px] h-[18px]' : 'w-[15px] h-[15px]'} ${
          selected ? 'text-accent' : 'text-surface/60'
        }`}
      />
      <span
        className={`font-inter font-medium transition-colors duration-200 ${isMd ? 'text-sm' : 'text-xs'} ${
          selected ? 'text-surface' : 'text-surface/75'
        }`}
      >
        {label}
      </span>
      {multi ? (
        <span
          className={`ml-auto flex-shrink-0 border flex items-center justify-center transition-all duration-200 ${
            isMd ? 'w-4 h-4' : 'w-3.5 h-3.5'
          } ${selected ? 'border-accent bg-accent text-bg' : 'border-white/20'}`}
        >
          {selected && <Check className={isMd ? 'w-3 h-3' : 'w-2.5 h-2.5'} strokeWidth={3} />}
        </span>
      ) : (
        <motion.span
          className="ml-auto flex-shrink-0 text-accent"
          initial={false}
          animate={{ opacity: selected ? 1 : 0, scale: reducedMotion ? 1 : selected ? 1 : 0.5 }}
          transition={{ duration: reducedMotion ? 0 : 0.15 }}
        >
          <Check className={isMd ? 'w-4 h-4' : 'w-3.5 h-3.5'} strokeWidth={2.5} />
        </motion.span>
      )}
    </motion.button>
  )
}
