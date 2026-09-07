'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Realisation } from '@/lib/realisations'

interface CaseStudyOverlayProps {
  data: Realisation
  onClose: () => void
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Étude de cas plein écran : ouvre sur le résultat (métrique héros),
// puis Problème → Ce que j'ai construit → Stratégie → Résultat.
export default function CaseStudyOverlay({ data, onClose }: CaseStudyOverlayProps) {
  const reducedMotion = useReducedMotion()

  // Scroll mesuré de la capture : la fenêtre ne dépasse jamais la hauteur réelle
  // de l'image (donc jamais de vide noir), et le défilement s'arrête pile en bas.
  const outerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [winH, setWinH] = useState<number>()
  const [scrollPx, setScrollPx] = useState(0)

  useEffect(() => {
    const CHROME = 41 // hauteur de la barre navigateur
    const measure = () => {
      const outer = outerRef.current
      const img = imgRef.current
      if (!outer || !img) return
      const avail = outer.clientHeight - CHROME
      const imgH = img.offsetHeight
      if (avail <= 0 || imgH <= 0) return
      const h = Math.min(avail, imgH)
      setWinH(h)
      setScrollPx(Math.max(0, imgH - h))
    }
    const run = () => requestAnimationFrame(measure)
    const img = imgRef.current
    if (img?.complete) run()
    img?.addEventListener('load', run)
    window.addEventListener('resize', run)
    const t = setTimeout(run, 120) // après l'animation d'ouverture
    return () => {
      img?.removeEventListener('load', run)
      window.removeEventListener('resize', run)
      clearTimeout(t)
    }
  }, [])

  const doScroll = !reducedMotion && scrollPx > 8

  // Fermeture au clavier + verrouillage du scroll de fond
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = prev
    }
  }, [onClose])

  const blocks: { label: string; text: string }[] = [
    { label: 'Le problème', text: data.problem },
    { label: 'Ce que j\'ai construit', text: data.built },
    { label: 'La stratégie', text: data.strategy },
    { label: 'Le résultat', text: data.result },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        data-lenis-prevent
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={e => e.stopPropagation()}
        className="absolute inset-0 mx-auto my-0 h-full w-full overflow-y-auto md:inset-4 md:my-auto md:h-[calc(100%-2rem)] md:max-w-6xl md:rounded-2xl"
        style={{ backgroundColor: '#0b0b0b', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Liseré de la couleur de marque */}
        <div aria-hidden className="sticky top-0 z-10 h-1 w-full" style={{ backgroundColor: data.accent }} />

        {/* Bouton fermer */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer l'étude de cas"
          className="fixed right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/80 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white md:absolute md:right-4 md:top-4"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="grid gap-0 md:grid-cols-2">
          {/* Colonne texte */}
          <div className="order-2 px-6 py-10 md:order-1 md:px-12 md:py-14">
            <p className="font-inter text-xs uppercase tracking-[0.2em]" style={{ color: data.accent }}>
              {data.category}
            </p>
            <h2 className="mt-3 font-grotesk text-4xl font-bold tracking-tight text-white md:text-5xl">
              {data.name}
            </h2>

            {/* Résultat en héros */}
            <div className="mt-8 border-y border-white/10 py-6">
              <div className="font-grotesk text-5xl font-bold leading-none md:text-6xl" style={{ color: data.accent }}>
                {data.heroMetric}
              </div>
              <p className="mt-2 font-inter text-sm text-white/60">{data.heroLabel}</p>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {data.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-white/12 px-3 py-1 font-inter text-xs font-medium text-white/75"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Blocs narratifs */}
            <div className="mt-10 space-y-8">
              {blocks.map((b, i) => (
                <div key={b.label} className="flex gap-4">
                  <span className="mt-1 font-grotesk text-sm font-bold tabular-nums text-white/25">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-grotesk text-sm font-semibold uppercase tracking-wide text-white/90">
                      {b.label}
                    </h3>
                    <p className="mt-2 font-inter text-[15px] leading-relaxed text-white/60">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA voir le site */}
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-inter text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: data.accent, color: data.accentInk }}
            >
              Voir le site en ligne
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                <path d="M4 11L11 4M11 4H5M11 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Colonne visuelle — capture qui défile (hauteur de fenêtre mesurée) */}
          <div className="order-1 md:order-2 md:sticky md:top-0 md:h-[calc(100vh-2rem)] md:max-h-[900px]">
            <div
              ref={outerRef}
              className="relative h-64 overflow-hidden border-b border-white/10 bg-[#0d0d0d] md:h-full md:border-b-0 md:border-l"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#161616] px-4 py-2.5">
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </span>
                <span className="truncate rounded-sm bg-white/[0.04] px-3 py-1 font-inter text-[11px] text-muted">
                  {data.domain}
                </span>
              </div>
              <div
                className="relative overflow-hidden"
                style={{ height: winH ? `${winH}px` : 'calc(100% - 41px)' }}
              >
                <motion.img
                  ref={imgRef}
                  src={data.image}
                  alt={`Aperçu complet du site ${data.name}`}
                  className="absolute inset-x-0 top-0 w-full"
                  draggable={false}
                  animate={doScroll ? { y: [0, -scrollPx, 0] } : { y: 0 }}
                  transition={
                    doScroll
                      ? { duration: Math.max(10, scrollPx / 45), ease: 'easeInOut', repeat: Infinity }
                      : { duration: 0 }
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
