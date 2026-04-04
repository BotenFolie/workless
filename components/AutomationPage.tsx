import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CatalogLeadForm from '@/components/CatalogLeadForm'
import Link from 'next/link'
import type { CatalogueEntry } from '@/lib/automationCatalogue'

// ── Types ────────────────────────────────────────────────────────────────────

export type AutomationStep = {
  num: string
  title: string
  body: string
}

export type AutomationPageData = {
  slug: string

  hero: {
    badge: string
    h1: string
    subtitle: string
    ctaLabel: string
  }

  economicProblem: {
    sectionLabel: string
    headline: string
    body: string
    stats: { value: string; label: string }[]
  }

  alternativeDestruction: {
    sectionLabel: string
    headline: string
    intro: string
    alternatives: { name: string; flaw: string }[]
    conclusion: string
  }

  solution: {
    sectionLabel: string
    headline: string
    differentiators: string[]
  }

  process: {
    sectionLabel: string
    headline: string
    steps: AutomationStep[]
  }

  caseStudy: {
    sectionLabel: string
    context: string
    before: { metric: string; value: string }[]
    after: { metric: string; value: string }[]
    gain: string
    nuance: string
  }

  targeting: {
    sectionLabel: string
    headline: string
    forWho: string[]
    notForWho: string[]
  }

  seoContent: {
    sections: {
      h2: string
      body: string
    }[]
  }

  faq: {
    question: string
    answer: string
  }[]

  crossLinks: CatalogueEntry[]
}

// ── Composant ────────────────────────────────────────────────────────────────

export default function AutomationPage({ data }: { data: AutomationPageData }) {
  const {
    slug,
    hero,
    economicProblem,
    alternativeDestruction,
    solution,
    process,
    caseStudy,
    targeting,
    seoContent,
    faq,
    crossLinks,
  } = data

  return (
    <main>
      <Nav />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
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

      {/* ── 2. Problème économique ───────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
            {economicProblem.sectionLabel}
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-8">
                {economicProblem.headline}
              </h2>
              <p className="font-inter text-neutral text-base leading-relaxed">
                {economicProblem.body}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06]">
              {economicProblem.stats.map((stat, i) => (
                <div key={i} className="bg-[#1A1A1A] p-8 flex flex-col justify-between gap-4">
                  <span className="font-grotesk font-bold text-accent text-3xl md:text-4xl leading-none">
                    {stat.value}
                  </span>
                  <p className="font-inter text-neutral/60 text-xs leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Ce qui ne marche pas ─────────────────────────────────────────── */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
            {alternativeDestruction.sectionLabel}
          </span>
          <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-6 max-w-3xl">
            {alternativeDestruction.headline}
          </h2>
          <p className="font-inter text-neutral text-base leading-relaxed mb-12 max-w-2xl">
            {alternativeDestruction.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.06]">
            {alternativeDestruction.alternatives.map((alt, i) => (
              <div
                key={i}
                className={`p-8 ${i < alternativeDestruction.alternatives.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/[0.06]' : ''}`}
              >
                <p className="font-grotesk font-bold text-surface/40 text-sm mb-3 line-through decoration-red-500/50">
                  {alt.name}
                </p>
                <p className="font-inter text-neutral text-sm leading-relaxed">
                  {alt.flaw}
                </p>
              </div>
            ))}
          </div>
          <p className="font-inter text-neutral/60 text-sm leading-relaxed mt-8 max-w-2xl border-l-2 border-accent/40 pl-6">
            {alternativeDestruction.conclusion}
          </p>
        </div>
      </section>

      {/* ── 4. Solution repositionnée ───────────────────────────────────────── */}
      <section className="bg-[#0E0E0E] py-24 md:py-32 border-t border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
            {solution.sectionLabel}
          </span>
          <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-12 max-w-3xl">
            {solution.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solution.differentiators.map((d, i) => (
              <div key={i} className="flex items-start gap-4 p-6 border border-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] flex-shrink-0" />
                <p className="font-inter text-neutral text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Process 3 étapes ─────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
            {process.sectionLabel}
          </span>
          <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-16 max-w-2xl">
            {process.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.06]">
            {process.steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative p-8 md:p-10 ${i < process.steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/[0.06]' : ''}`}
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

      {/* ── 6. Cas concret chiffré ──────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
            {caseStudy.sectionLabel}
          </span>
          <p className="font-inter text-neutral/50 text-xs tracking-wide mb-12">
            {caseStudy.context}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] mb-8">
            {/* Avant */}
            <div className="bg-[#1A1A1A] p-8 md:p-12">
              <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-neutral/40 mb-6">Avant</p>
              <div className="space-y-4">
                {caseStudy.before.map((b, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="font-grotesk font-bold text-surface/30 text-2xl line-through decoration-red-500/50">
                      {b.value}
                    </span>
                    <span className="font-inter text-neutral/40 text-xs">{b.metric}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Après */}
            <div className="bg-[#1A1A1A] p-8 md:p-12">
              <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-6">Après</p>
              <div className="space-y-4">
                {caseStudy.after.map((a, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="font-grotesk font-bold text-accent text-2xl">
                      {a.value}
                    </span>
                    <span className="font-inter text-neutral/60 text-xs">{a.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <span className="font-grotesk font-bold text-accent text-2xl flex-shrink-0">
              {caseStudy.gain}
            </span>
            <p className="font-inter text-neutral/50 text-sm leading-relaxed max-w-xl border-l border-white/[0.06] pl-8">
              &ldquo;{caseStudy.nuance}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Pour qui / Pas pour qui ──────────────────────────────────────── */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
            {targeting.sectionLabel}
          </span>
          <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-12 max-w-3xl">
            {targeting.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
            <div className="bg-[#111111] p-8 md:p-12">
              <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-8">
                Ce système est fait pour vous si
              </p>
              <ul className="space-y-4">
                {targeting.forWho.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent mt-[8px] flex-shrink-0" />
                    <span className="font-inter text-neutral text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#111111] p-8 md:p-12">
              <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-neutral/30 mb-8">
                Ce système n&apos;est pas pour vous si
              </p>
              <ul className="space-y-4">
                {targeting.notForWho.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-neutral/20 mt-[8px] flex-shrink-0" />
                    <span className="font-inter text-neutral/40 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Contenu SEO éducatif ─────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-16">
            {seoContent.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-grotesk font-bold text-surface text-2xl md:text-3xl leading-tight tracking-tight mb-6">
                  {section.h2}
                </h2>
                <div className="font-inter text-neutral text-base leading-relaxed space-y-4">
                  {section.body.split('\n\n').map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-12">
            Questions fréquentes
          </span>
          <div className="max-w-3xl divide-y divide-white/[0.06]">
            {faq.map((item, i) => (
              <div key={i} className="py-8">
                <h3 className="font-grotesk font-bold text-surface text-lg mb-4">
                  {item.question}
                </h3>
                <p className="font-inter text-neutral text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Questionnaire de qualification ──────────────────────────────── */}
      <section id="contact" className="bg-[#0E0E0E] py-24 md:py-32 border-t border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-6">
                Prochaine étape
              </span>
              <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-6">
                Trouvez le système qui vous convient.
              </h2>
              <p className="font-inter text-neutral text-base leading-relaxed">
                8 questions pour comprendre votre situation. On vous rappelle avec une recommandation adaptée — sans engagement.
              </p>
            </div>
            <CatalogLeadForm page={slug} />
          </div>
        </div>
      </section>

      {/* ── Voir aussi ──────────────────────────────────────────────────────── */}
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
