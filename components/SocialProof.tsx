import RevealOnScroll from './ui/RevealOnScroll'
import { content } from '@/lib/content'

// Section témoignages — 3 profils ultra-crédibles avec résultat chiffré
export default function SocialProof() {
  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="mb-16 md:mb-20">
            <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent">
              Résultats clients
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.testimonials.map((t, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <div className="border border-white/[0.08] p-6 md:p-8 flex flex-col justify-between h-full hover:border-accent/20 transition-colors duration-300">
                <span
                  aria-hidden="true"
                  className="font-grotesk font-bold text-accent text-6xl leading-none mb-6 block"
                >
                  "
                </span>

                <p className="font-grotesk font-medium text-surface text-base md:text-lg leading-snug tracking-tight italic flex-1 mb-8">
                  {t.quote}
                </p>

                {/* Résultat chiffré */}
                <div className="mb-6 px-3 py-2 border border-accent/20 bg-accent/[0.04] inline-block">
                  <span className="font-inter text-xs font-semibold text-accent tracking-wide">
                    {t.result}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-grotesk font-bold text-neutral text-xs">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-surface text-sm">{t.author}</p>
                    <p className="font-inter text-neutral text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
