'use client'

import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import HeroDashboard from './ui/HeroDashboard'
import { content } from '@/lib/content'
import { useDiagnostic } from '@/lib/diagnosticContext'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Mots du H1 avec leur couleur respective
const heroWords = [
  { text: 'Travaillez', accent: false },
  { text: "jusqu\u2019\u00E0", accent: false },
  { text: '60%\u00A0moins,', accent: true },
  { text: 'sans', accent: false },
  { text: 'recruter', accent: false },
]

// Hero section — split text animé, CTA magnétique
export default function Hero() {
  const { open } = useDiagnostic()

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#111111] overflow-hidden pt-16">
      {/* Chiffre décoratif en fond */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 font-grotesk font-bold text-accent leading-none select-none pointer-events-none opacity-[0.04] text-[28vw]"
      >
        60%
      </span>

      {/* Ligne verticale décorative */}
      <div aria-hidden="true" className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-white/[0.06]" />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Colonne gauche : texte ── */}
          <div>
            {/* Tag d'introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 1.6 }}
              className="mb-8 md:mb-10"
            >
              <span className="inline-block font-inter text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 px-3 py-1.5">
                {content.hero.badge}
              </span>
            </motion.div>

            {/* H1 avec split text animé */}
            <h1
              className="font-grotesk font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl mb-8 md:mb-10 flex flex-wrap gap-x-[0.25em]"
              aria-label={content.hero.h1}
            >
              {heroWords.map((word, i) => (
                <span key={i} className="overflow-hidden inline-block">
                  <motion.span
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.7, ease: EASE, delay: 1.9 + i * 0.08 }}
                    className={`inline-block ${word.accent ? 'text-accent' : 'text-surface'}`}
                  >
                    {word.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Sous-titre — 2 lignes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 2.3 }}
              className="max-w-md mb-12 md:mb-14 space-y-2"
            >
              {content.hero.subtitle.map((line, i) => (
                <p key={i} className="font-inter text-neutral text-lg leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>

            {/* CTA magnétique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 2.5 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <MagneticButton>
                <button
                  onClick={open}
                  className="inline-flex items-center gap-2 font-inter font-semibold text-bg bg-accent px-8 py-4 rounded-sm text-base hover:bg-white transition-colors duration-200 group"
                >
                  {content.hero.cta}
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </MagneticButton>
            </motion.div>

            {/* Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 2.7 }}
              className="mt-12 md:mt-16 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-accent/40" />
              <p className="font-inter text-xs text-neutral tracking-wider uppercase">
                Premiers résultats en 14 jours
              </p>
            </motion.div>
          </div>

          {/* ── Colonne droite : mini dashboard ── */}
          <div className="flex flex-col items-center lg:items-end gap-6">

            {/* Phrase d'ancrage prix — au-dessus du dashboard */}
            <div className="w-full max-w-sm flex items-stretch gap-4 opacity-0 animate-[fadeIn_0.6s_ease_2.2s_forwards]">
              <div className="w-px bg-accent/40 flex-shrink-0" />
              <div>
                <p className="font-inter text-neutral/50 text-xs line-through mb-0.5">
                  Un salarié : ~35 000€ par an, chaque année.
                </p>
                <p className="font-grotesk font-semibold text-surface text-sm leading-snug">
                  Stripwork : moins cher.{' '}
                  <span className="text-accent">Une seule fois.</span>
                </p>
              </div>
            </div>

            <HeroDashboard />
          </div>

        </div>
      </div>
    </section>
  )
}
