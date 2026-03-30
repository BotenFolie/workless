'use client'

import { useEffect, useRef, useState } from 'react'
import RevealOnScroll from './ui/RevealOnScroll'
import RenderBlocks from './ui/RenderBlocks'
import { content } from '@/lib/content'

function useCountUp(end: number, duration = 1500) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let startTime: number | null = null
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return { count, ref }
}

export default function ProblemBlock() {
  const { problem } = content
  const { count, ref } = useCountUp(14)

  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-14 md:mb-20">
            {problem.label}
          </span>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
          {/* Colonne gauche — problème */}
          <div className="space-y-8">
            <RevealOnScroll delay={0.1}>
              <p className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight">
                {problem.headline}
              </p>
            </RevealOnScroll>

            <div className="w-12 h-px bg-white/10" />

            <RevealOnScroll delay={0.2}>
              <RenderBlocks blocks={problem.blocks} />
            </RevealOnScroll>
          </div>

          {/* Colonne droite — solution */}
          <RevealOnScroll delay={0.3} direction="left">
            <div className="border-l-2 border-accent pl-8 md:pl-10 space-y-6">
              <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent">
                {problem.solution.label}
              </p>

              <p className="font-grotesk font-bold text-surface text-2xl md:text-3xl leading-tight tracking-tight">
                {problem.solution.headline}
              </p>

              <RenderBlocks blocks={problem.solution.blocks} />

              {/* Compteur animé + note */}
              <div ref={ref} className="pt-8 mt-8 border-t border-white/[0.06] space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-grotesk font-bold text-accent text-6xl leading-none tabular-nums">
                    {count}
                  </span>
                  <span className="font-grotesk font-bold text-surface text-2xl">
                    {problem.solution.kpi.unit}
                  </span>
                </div>
                <p className="font-inter text-neutral text-sm">
                  {problem.solution.kpi.description}
                </p>
                <p className="font-inter text-accent/70 text-xs font-semibold tracking-wide uppercase">
                  {problem.solution.kpi.note}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
