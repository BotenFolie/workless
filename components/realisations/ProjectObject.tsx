'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import type { Realisation } from '@/lib/realisations'

interface ProjectObjectProps {
  data: Realisation
  onOpen: () => void
}

// Objet « atelier » : capture d'un site posée comme un canvas manipulable.
// Survol → l'objet se redresse (tilt 3D suivant la souris), la capture défile,
// les tags apparaissent, la métrique reste visible. Clic → étude de cas.
export default function ProjectObject({ data, onOpen }: ProjectObjectProps) {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLButtonElement>(null)
  const [hovered, setHovered] = useState(false)

  // Position souris normalisée (-0.5 → 0.5) pour le tilt 3D
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 })

  const handleMove = (e: React.MouseEvent) => {
    if (reducedMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    setHovered(false)
    mx.set(0)
    my.set(0)
  }

  const wide = data.span === 12

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      aria-label={`Ouvrir l'étude de cas : ${data.name}`}
      initial={{ rotate: reducedMotion ? 0 : data.rotation }}
      animate={{ rotate: hovered && !reducedMotion ? 0 : reducedMotion ? 0 : data.rotation }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      style={{ perspective: 1200 }}
      className="group relative block w-full text-left focus:outline-none"
    >
      {/* Halo de la couleur de marque au survol */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40 group-focus-visible:opacity-40"
        style={{ background: `radial-gradient(closest-side, ${data.accent}, transparent)` }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        <motion.div
          animate={{
            y: hovered && !reducedMotion ? -6 : 0,
            scale: hovered && !reducedMotion ? 1.015 : 1,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:border-white/20"
        >
          {/* Barre de navigateur factice */}
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

          {/* Cadre capture — l'image défile au survol */}
          <div className={`relative overflow-hidden ${wide ? 'aspect-[20/9]' : 'aspect-[16/11]'}`}>
            <motion.img
              src={data.image}
              alt={`Aperçu du site ${data.name}`}
              loading="lazy"
              className="absolute inset-x-0 top-0 w-full select-none"
              draggable={false}
              animate={{ y: hovered && !reducedMotion ? '-58%' : '0%' }}
              transition={{ duration: hovered ? 6 : 0.8, ease: hovered ? 'linear' : [0.22, 1, 0.36, 1] }}
            />
            {/* Voile bas pour ancrer la bande d'infos */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Tags — apparaissent au survol */}
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {data.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={false}
                  animate={{
                    opacity: hovered && !reducedMotion ? 1 : 0,
                    y: hovered && !reducedMotion ? 0 : -6,
                  }}
                  transition={{ duration: 0.3, delay: hovered ? i * 0.05 : 0 }}
                  className="rounded-full border border-white/15 bg-black/50 px-3 py-1 font-inter text-[11px] font-medium text-white/90 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Bande d'infos — toujours visible */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
              <div>
                <h3 className="font-grotesk text-lg font-bold leading-none text-white md:text-xl">
                  {data.name}
                </h3>
                <p className="mt-1.5 font-inter text-[11px] text-white/55">{data.category}</p>
              </div>
              <span
                className="flex-shrink-0 rounded-md px-2.5 py-1 font-grotesk text-sm font-bold leading-none"
                style={{ backgroundColor: data.accent, color: data.accentInk }}
              >
                {data.heroMetric}
              </span>
            </div>
          </div>

          {/* Indice « étude de cas » au survol */}
          <motion.div
            initial={false}
            animate={{ opacity: hovered && !reducedMotion ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none absolute right-4 top-14 rounded-full bg-white px-3 py-1.5 font-inter text-[11px] font-semibold text-black shadow-lg"
          >
            Étude de cas →
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.button>
  )
}
