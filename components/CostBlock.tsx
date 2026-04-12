'use client'

import RevealOnScroll from './ui/RevealOnScroll'
import { content } from '@/lib/content'

// Bloc Coût/Perte — 3 stats visuelles choc + calcul détaillé
export default function CostBlock() {
  const { cost } = content

  return (
    <section className="bg-[#111111] py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        <RevealOnScroll>
          <h2 className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-14 md:mb-20">
            {cost.label}
          </h2>
        </RevealOnScroll>

        {/* Headline */}
        <RevealOnScroll delay={0.1}>
          <p className="font-grotesk font-bold text-surface text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-16 md:mb-20 max-w-3xl">
            {cost.headline}
          </p>
        </RevealOnScroll>

        {/* 3 stats visuelles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.06] mb-16 md:mb-20">
          {cost.stats.map((stat, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className={`p-8 md:p-10 ${i < cost.stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/[0.06]' : ''}`}>
                <div className="font-grotesk font-bold text-accent text-5xl md:text-6xl tracking-tight mb-3">
                  {stat.value}
                </div>
                <div className="font-grotesk font-semibold text-surface text-lg mb-2">
                  {stat.label}
                </div>
                <div className="font-inter text-neutral text-sm">
                  {stat.sub}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Calcul détaillé */}
        <RevealOnScroll delay={0.2}>
          <div className="border-l-2 border-accent pl-8 md:pl-10 space-y-4 max-w-xl">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent">
              {cost.calculation.label}
            </p>
            <ul className="space-y-3">
              {cost.calculation.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-grotesk font-bold text-accent text-sm mt-0.5 shrink-0 w-4">
                    {i === 0 ? '' : i === 1 ? '×' : '='}
                  </span>
                  <span className={`font-inter text-sm leading-relaxed ${i === 2 ? 'font-semibold text-surface' : 'text-neutral'}`}>
                    {step}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-inter text-neutral text-sm leading-relaxed italic pt-4 border-t border-white/[0.06]">
              {cost.calculation.conclusion}
            </p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}
