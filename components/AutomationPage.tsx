import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AutomationContactForm from '@/components/AutomationContactForm'
import Link from 'next/link'
import type { CatalogueEntry } from '@/lib/automationCatalogue'

export type AutomationStep = {
  num: string
  title: string
  body: string
}

export type AutomationProof = {
  before?: string   // valeur barrée (optionnelle)
  after: string     // valeur mise en avant en accent
  metric: string    // légende sous le chiffre
  nuance: string    // phrase de nuance, style guillemets
}

export type AutomationPageData = {
  slug: string
  hero: {
    badge: string      // persona cible
    h1: string
    subtitle: string
    ctaLabel: string
  }
  problem: {
    headline: string
    bullets: string[]
  }
  solution: {
    headline: string
    steps: AutomationStep[]
  }
  proof: AutomationProof
  formTitle: string
  crossLinks: CatalogueEntry[]
}

export default function AutomationPage({ data }: { data: AutomationPageData }) {
  const { slug, hero, problem, solution, proof, formTitle, crossLinks } = data

  return (
    <main>
      <Nav />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end bg-[#111111] pt-16">
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-white/[0.06]" aria-hidden="true" />
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-8">
            {hero.badge}
          </span>
          <h1 className="font-grotesk font-bold text-surface text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight max-w-4xl mb-8">
            {hero.h1}
          </h1>
          <p className="font-inter text-neutral text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            {hero.subtitle}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 font-inter font-semibold text-bg bg-accent px-8 py-4 hover:bg-white transition-colors duration-200 group"
          >
            {hero.ctaLabel}
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </section>

      {/* ── Problème ────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
                Le problème
              </span>
              <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight">
                {problem.headline}
              </h2>
            </div>
            <div className="border border-white/[0.06]">
              {problem.bullets.map((bullet, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-6 py-5 ${
                    i < problem.bullets.length - 1 ? 'border-b border-white/[0.06]' : ''
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-accent mt-[9px] flex-shrink-0" />
                  <p className="font-inter text-neutral text-sm leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution : 3 étapes ─────────────────────────────────────────── */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
            Comment ça marche
          </span>
          <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-16 max-w-2xl">
            {solution.headline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.06]">
            {solution.steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative p-8 md:p-10 ${
                  i < solution.steps.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-white/[0.06]'
                    : ''
                }`}
              >
                <p className="font-grotesk font-bold text-[4rem] leading-none text-accent/20 mb-6 select-none">
                  {step.num}
                </p>
                <h3 className="font-grotesk font-bold text-surface text-lg mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-neutral text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof point ─────────────────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] py-24 md:py-32 border-t border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20">

            {/* Chiffre clé */}
            <div className="flex-shrink-0">
              {proof.before ? (
                <div className="flex items-center gap-5">
                  <span className="font-grotesk font-bold text-surface/25 text-3xl md:text-4xl line-through decoration-red-500/60 decoration-2">
                    {proof.before}
                  </span>
                  <span className="text-neutral/40 text-xl">→</span>
                  <span className="font-grotesk font-bold text-accent text-3xl md:text-4xl">
                    {proof.after}
                  </span>
                </div>
              ) : (
                <span className="font-grotesk font-bold text-accent text-3xl md:text-4xl">
                  {proof.after}
                </span>
              )}
              <p className="font-inter text-neutral/40 text-xs mt-2 tracking-wide">
                {proof.metric}
              </p>
            </div>

            {/* Nuance */}
            <div className="border-l border-white/[0.06] pl-8 md:pl-16 max-w-lg">
              <p className="font-inter text-neutral/60 text-sm leading-relaxed">
                &ldquo;{proof.nuance}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formulaire contact ──────────────────────────────────────────── */}
      <section id="contact" className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
                Prochaine étape
              </span>
              <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-6">
                {formTitle}
              </h2>
              <p className="font-inter text-neutral text-base leading-relaxed">
                Laissez vos coordonnées. On revient vers vous sous 24h pour un échange de 15 minutes — sans engagement, sans relance si ce n&apos;est pas le bon moment.
              </p>
            </div>
            <AutomationContactForm page={slug} />
          </div>
        </div>
      </section>

      {/* ── Voir aussi ──────────────────────────────────────────────────── */}
      {crossLinks.length > 0 && (
        <section className="bg-[#1A1A1A] py-24 md:py-32 border-t border-white/[0.06]">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-12">
              Autres automatisations
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {crossLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block p-6 border border-white/[0.06] hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-200"
                >
                  <div className="w-5 h-px bg-accent mb-5 group-hover:w-8 transition-all duration-300" />
                  <h3 className="font-grotesk font-bold text-surface text-base mb-2">
                    {link.label}
                  </h3>
                  <p className="font-inter text-neutral/50 text-xs leading-relaxed">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
