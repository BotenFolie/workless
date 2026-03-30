import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { content } from '@/lib/content'

export const metadata: Metadata = {
  title: 'À propos — Workless',
  description: 'Réduire la charge mentale dans les entreprises. Accélérer les décisions sans recruter.',
}

// Page À propos — pitch fondateur, mission, valeurs
export default function AboutPage() {
  const { about } = content

  return (
    <main>
      <Nav />

      {/* Hero sobre */}
      <section className="relative min-h-[60vh] flex flex-col justify-end bg-[#111111] pt-16">
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-white/[0.06]" aria-hidden="true" />
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-8">
            À propos
          </span>
          <h1 className="font-grotesk font-bold text-surface text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight max-w-3xl">
            {about.hero.title}
          </h1>
        </div>
      </section>

      {/* Pitch fondateur */}
      <section className="bg-[#1A1A1A] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-8">
                {about.pitch.title}
              </span>
              <div className="space-y-6">
                {about.pitch.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-grotesk font-medium text-surface text-2xl md:text-3xl leading-snug tracking-tight"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="border-l border-white/[0.06] pl-8 md:pl-12 flex flex-col justify-center">
              <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-6">
                {about.mission.title}
              </span>
              <p className="font-inter text-neutral text-lg leading-relaxed">
                {about.mission.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-16">
            Valeurs
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.06]">
            {about.values.map((value, index) => (
              <div
                key={value.title}
                className={`p-8 md:p-10 ${
                  index < about.values.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-white/[0.06]'
                    : ''
                }`}
              >
                <div className="w-8 h-0.5 bg-accent mb-6" />
                <h3 className="font-grotesk font-bold text-surface text-xl mb-3">
                  {value.title}
                </h3>
                <p className="font-inter text-neutral text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight max-w-xl">
            Si vous perdez du temps à analyser, écrire ou décider — on peut le corriger.
          </h2>
          <Link
            href="/#cta"
            className="flex-shrink-0 inline-flex items-center gap-3 font-inter font-semibold text-bg bg-accent px-8 py-4 rounded-sm text-base hover:bg-white transition-colors duration-200 group"
          >
            {about.cta}
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
