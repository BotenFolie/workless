'use client'

import RevealOnScroll from './ui/RevealOnScroll'
import { content } from '@/lib/content'

// Bloc Coût/Perte — convertit le temps en argent pour créer la tension économique
export default function CostBlock() {
  const { cost } = content

  return (
    <section className="bg-[#111111] py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-14 md:mb-20">
            {cost.label}
          </span>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Headline choc */}
          <RevealOnScroll delay={0.1}>
            <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              {cost.headline}
            </h2>
          </RevealOnScroll>

          {/* Calcul détaillé */}
          <RevealOnScroll delay={0.25} direction="left">
            <div className="border-l-2 border-accent pl-8 md:pl-10 space-y-6">
              <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent">
                {cost.calculation.label}
              </p>

              <ul className="space-y-4">
                {cost.calculation.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-grotesk font-bold text-accent text-sm mt-0.5 shrink-0">
                      {i === 0 ? '' : i === 1 ? '×' : '='}
                    </span>
                    <span className={`font-inter text-sm leading-relaxed ${i === 2 ? 'font-semibold text-surface' : 'text-neutral'}`}>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/[0.06]">
                <p className="font-inter text-neutral text-sm leading-relaxed italic">
                  {cost.calculation.conclusion}
                </p>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  )
}
