'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { REALISATIONS, type Realisation } from '@/lib/realisations'
import ProjectObject from './ProjectObject'
import CaseStudyOverlay from './CaseStudyOverlay'
import RealisationsContactForm from './RealisationsContactForm'

// Palette de disciplines affichée sous le hero
const CAPABILITIES = [
  'Sites web', 'Landing pages', 'Applications iOS', 'SEO', 'SEA',
  'Tracking', 'Automatisation', 'Design produit',
]

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const SPAN_CLASS: Record<number, string> = {
  5: 'lg:col-span-5',
  7: 'lg:col-span-7',
  12: 'lg:col-span-12',
}

// Expérience « atelier » : les sites comme objets manipulables sur un plan de travail sombre.
export default function AtelierExperience() {
  const reducedMotion = useReducedMotion()
  const [selected, setSelected] = useState<Realisation | null>(null)

  // En mouvement réduit : contenu visible d'emblée, aucune animation d'entrée
  const enter = (offset: { y?: number }) =>
    reducedMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : { initial: { opacity: 0, ...offset }, animate: { opacity: 1, y: 0 } }

  return (
    <div className="relative min-h-screen bg-bg text-surface">
      {/* Grain / lueur d'ambiance */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(1200px 600px at 50% -10%, rgba(198,255,0,0.06), transparent 70%)',
        }}
      />

      {/* Top bar minimale — retour au site */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="font-grotesk text-sm font-bold tracking-tight text-surface transition-colors hover:text-accent"
        >
          STRIPWORK
        </Link>
        <Link
          href="/"
          className="font-inter text-xs text-muted transition-colors hover:text-surface"
        >
          ← Retour au site
        </Link>
      </header>

      {/* Hero — centré */}
      <section className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-16 text-center md:pb-24 md:pt-24">
        <motion.p
          {...enter({ y: 12 })}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-inter text-xs uppercase tracking-[0.25em] text-accent"
        >
          Réalisations
        </motion.p>
        <motion.h1
          {...enter({ y: 20 })}
          transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
          className="mt-5 font-grotesk text-5xl font-bold leading-[0.95] tracking-tight text-surface md:text-7xl"
        >
          Je construis des sites
          <br />
          qui <span className="text-accent">vendent</span>.
        </motion.h1>
        <motion.p
          {...enter({ y: 16 })}
          transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-muted md:text-lg"
        >
          Sites vitrines, landing pages et applications iOS — conçus, développés et
          optimisés pour un seul objectif : convertir. Du design au SEO/SEA jusqu&apos;à
          l&apos;automatisation et au tracking, je prends chaque projet de A à Z.
        </motion.p>

        {/* Capacités */}
        <motion.ul
          {...enter({ y: 16 })}
          transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          className="mt-8 flex max-w-2xl flex-wrap justify-center gap-2"
        >
          {CAPABILITIES.map(cap => (
            <li
              key={cap}
              className="rounded-full border border-white/12 px-3.5 py-1.5 font-inter text-xs font-medium text-white/70"
            >
              {cap}
            </li>
          ))}
        </motion.ul>

        <motion.p
          {...enter({ y: 16 })}
          transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
          className="mt-10 font-inter text-sm text-neutral"
        >
          Survolez un projet pour le faire vivre, cliquez pour l&apos;étude de cas.
        </motion.p>
      </section>

      {/* Workbench */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-12 lg:gap-y-24">
          {REALISATIONS.map((r, i) => (
            <motion.div
              key={r.slug}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: EASE, delay: reducedMotion ? 0 : (i % 2) * 0.08 }}
              className={SPAN_CLASS[r.span]}
            >
              <ProjectObject data={r} onOpen={() => setSelected(r)} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA de clôture — questionnaire dédié */}
      <section id="contact" className="relative z-10 border-t border-white/[0.07] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="font-grotesk text-4xl font-bold tracking-tight text-surface md:text-5xl">
              Le prochain, c&apos;est le vôtre.
            </h2>
            <p className="mx-auto mt-5 max-w-lg font-inter text-base text-muted">
              Parlez-moi de votre projet en 30 secondes. Je reviens vers vous pour
              en discuter — par email ou téléphone.
            </p>
          </div>
          <div className="mt-12">
            <RealisationsContactForm />
          </div>
        </div>
      </section>

      {/* Overlay étude de cas */}
      <AnimatePresence>
        {selected && (
          <CaseStudyOverlay data={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
