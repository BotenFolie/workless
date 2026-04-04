'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// ── Questions ─────────────────────────────────────────────────────────────────

const STEPS = [
  {
    id: 1,
    key: 'enjeu' as const,
    question: 'Quel est votre principal enjeu en ce moment ?',
    options: [
      { value: 'leads',       icon: '🎯', label: 'Convertir plus de leads entrants' },
      { value: 'relances',    icon: '🔄', label: 'Structurer mes relances commerciales' },
      { value: 'reporting',   icon: '📊', label: 'Automatiser mon reporting interne' },
      { value: 'documents',   icon: '📄', label: 'Traiter mes documents comptables' },
      { value: 'reactivation',icon: '💰', label: 'Réactiver ma base clients dormante' },
    ],
  },
  {
    id: 2,
    key: 'equipe' as const,
    question: 'Quelle est la taille de votre équipe ?',
    options: [
      { value: 'solo',   icon: '👤', label: 'Juste moi' },
      { value: '2-5',    icon: '👥', label: '2 à 5 personnes' },
      { value: '6-15',   icon: '🏘️', label: '6 à 15 personnes' },
      { value: '15+',    icon: '🏢', label: 'Plus de 15 personnes' },
    ],
  },
  {
    id: 3,
    key: 'heures' as const,
    question: "Combien d'heures par semaine perdez-vous sur des tâches répétitives ?",
    options: [
      { value: 'moins-3h', icon: '🟡', label: 'Moins de 3h' },
      { value: '3-8h',     icon: '🟠', label: '3 à 8h' },
      { value: '8-20h',    icon: '🔴', label: '8 à 20h' },
      { value: '20h+',     icon: '🚨', label: 'Plus de 20h' },
    ],
  },
  {
    id: 4,
    key: 'outil' as const,
    question: 'Avez-vous déjà un outil pour gérer ce sujet ?',
    options: [
      { value: 'crm-erp',   icon: '✅', label: 'Oui — CRM ou ERP en place' },
      { value: 'tableurs',  icon: '📋', label: 'Oui — tableurs / Excel' },
      { value: 'mal-config',icon: '🔧', label: 'Oui — mais mal configuré' },
      { value: 'rien',      icon: '❌', label: 'Non — rien de structuré' },
    ],
  },
  {
    id: 5,
    key: 'maturite' as const,
    question: "Avez-vous déjà tenté d'automatiser ce problème ?",
    options: [
      { value: 'jamais',        icon: '🌱', label: 'Jamais essayé' },
      { value: 'partiellement', icon: '🔧', label: 'Oui, partiellement' },
      { value: 'echec',         icon: '💥', label: 'Oui, mais sans résultat' },
    ],
  },
  {
    id: 6,
    key: 'objectif' as const,
    question: 'Quel est votre objectif prioritaire ?',
    options: [
      { value: 'temps',      icon: '⚡', label: 'Gagner du temps immédiatement' },
      { value: 'conversion', icon: '📈', label: 'Améliorer la conversion commerciale' },
      { value: 'erreurs',    icon: '🎯', label: 'Réduire les erreurs et les pertes' },
      { value: 'transformer',icon: '🚀', label: 'Transformer le process en profondeur' },
    ],
  },
]

type StepKey = 'enjeu' | 'equipe' | 'heures' | 'outil' | 'maturite' | 'objectif'

type Answers = Record<StepKey, string>

const emptyAnswers: Answers = {
  enjeu: '', equipe: '', heures: '', outil: '',
  maturite: '', objectif: '',
}

type ContactData = {
  prenom: string
  email: string
  telephone: string
}

// ── Composant ─────────────────────────────────────────────────────────────────

export default function CatalogLeadForm({ page }: { page: string }) {
  const [stepIdx, setStepIdx]   = useState(0)
  const [view, setView]         = useState<'quiz' | 'contact' | 'done'>('quiz')
  const [answers, setAnswers]   = useState<Answers>(emptyAnswers)
  const [justSelected, setJustSelected] = useState<string | null>(null)
  const [direction, setDirection] = useState(1)
  const [contact, setContact]   = useState<ContactData>({ prenom: '', email: '', telephone: '' })
  const [rgpd, setRgpd]         = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState<string | null>(null)

  const totalSteps = STEPS.length
  const step = STEPS[stepIdx]
  const progressPct = view === 'quiz'
    ? ((stepIdx + 1) / (totalSteps + 1)) * 100
    : (view === 'contact' ? (totalSteps / (totalSteps + 1)) * 100 : 100)

  const handleOptionClick = (key: StepKey, value: string) => {
    if (justSelected) return
    setJustSelected(value)
    setAnswers(a => ({ ...a, [key]: value }))
    setTimeout(() => {
      setJustSelected(null)
      setDirection(1)
      if (stepIdx < STEPS.length - 1) {
        setStepIdx(s => s + 1)
      } else {
        setView('contact')
      }
    }, 320)
  }

  const handleBack = () => {
    setDirection(-1)
    if (view === 'contact') {
      setView('quiz')
    } else if (stepIdx > 0) {
      setStepIdx(s => s - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const ENJEU_LABELS: Record<string, string> = {
      leads: 'Convertir plus de leads entrants',
      relances: 'Structurer mes relances commerciales',
      reporting: 'Automatiser mon reporting interne',
      documents: 'Traiter mes documents comptables',
      reactivation: 'Réactiver ma base clients dormante',
    }

    try {
      const res = await fetch('/api/qualify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contact,
          page,
          answers,
          enjeu_label: ENJEU_LABELS[answers.enjeu] ?? answers.enjeu,
          _hp: '',
        }),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        setError(json.error ?? 'Une erreur est survenue. Réessayez.')
        setLoading(false)
        return
      }

      setView('done')
    } catch {
      setError('Erreur réseau. Vérifiez votre connexion.')
    } finally {
      setLoading(false)
    }
  }

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? '#contact'

  return (
    <div className="border border-white/[0.08] bg-[#161616] overflow-hidden">

      {/* Barre de progression */}
      {view !== 'done' && (
        <div className="h-px bg-white/[0.06]">
          <motion.div
            className="h-full bg-accent origin-left"
            animate={{ scaleX: progressPct / 100 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      )}

      <AnimatePresence mode="wait" custom={direction}>

        {/* ── Quiz ─────────────────────────────────────────────────────────── */}
        {view === 'quiz' && (
          <motion.div
            key={`q-${stepIdx}`}
            custom={direction}
            initial={{ opacity: 0, x: direction * 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -20 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="p-8 md:p-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              {stepIdx > 0 ? (
                <button
                  onClick={handleBack}
                  className="font-inter text-xs text-neutral/50 hover:text-neutral transition-colors flex items-center gap-1.5"
                >
                  ← Retour
                </button>
              ) : (
                <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
                  Qualification
                </span>
              )}
              <span className="font-inter text-xs text-neutral/30 tabular-nums">
                {stepIdx + 1} / {totalSteps}
              </span>
            </div>

            <h3 className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight tracking-tight mb-8">
              {step.question}
            </h3>

            <div className="space-y-2">
              {step.options.map(opt => {
                const isSelected = justSelected === opt.value || answers[step.key] === opt.value
                return (
                  <motion.button
                    key={opt.value}
                    onClick={() => handleOptionClick(step.key, opt.value)}
                    whileTap={{ scale: 0.985 }}
                    className={`w-full text-left border px-4 py-3.5 flex items-center gap-4 transition-all duration-200 ${
                      isSelected
                        ? 'border-accent/70 bg-accent/[0.07]'
                        : 'border-white/[0.09] hover:border-white/25 hover:bg-white/[0.025]'
                    }`}
                  >
                    <span className="text-lg flex-shrink-0 w-7 text-center leading-none">
                      {opt.icon}
                    </span>
                    <span className={`font-inter text-sm font-medium transition-colors duration-200 ${
                      isSelected ? 'text-surface' : 'text-surface/75'
                    }`}>
                      {opt.label}
                    </span>
                    <motion.span
                      className="ml-auto text-accent text-xs flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: isSelected ? 1 : 0, scale: isSelected ? 1 : 0.5 }}
                      transition={{ duration: 0.15 }}
                    >
                      ✓
                    </motion.span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* ── Contact ──────────────────────────────────────────────────────── */}
        {view === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="p-8 md:p-10"
          >
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={handleBack}
                className="font-inter text-xs text-neutral/50 hover:text-neutral transition-colors flex items-center gap-1.5"
              >
                ← Retour
              </button>
              <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
                Dernière étape
              </span>
            </div>

            <h3 className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight tracking-tight mb-2">
              Pour vous recontacter
            </h3>
            <p className="font-inter text-neutral text-sm mb-8">
              On revient vers vous sous 24h pour un échange de 30 minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: 'prenom'    as const, label: 'Prénom',    type: 'text',  placeholder: 'Votre prénom',          required: true },
                { key: 'email'     as const, label: 'Email',     type: 'email', placeholder: 'vous@entreprise.com',   required: true },
                { key: 'telephone' as const, label: 'Téléphone', type: 'tel',   placeholder: '+33 6 00 00 00 00',     required: true },
              ].map(f => (
                <div key={f.key}>
                  <label className="block font-inter text-[10px] font-semibold tracking-[0.12em] uppercase text-surface/40 mb-2">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={contact[f.key]}
                    onChange={e => setContact(c => ({ ...c, [f.key]: e.target.value }))}
                    className="w-full border border-white/[0.12] focus:border-accent/50 focus:outline-none px-4 py-3 font-inter text-sm text-surface bg-transparent placeholder:text-neutral/30 transition-colors"
                  />
                </div>
              ))}

              <label className="flex items-start gap-3 cursor-pointer pt-1">
                <span
                  onClick={() => setRgpd(v => !v)}
                  className={`mt-0.5 w-4 h-4 border flex-shrink-0 flex items-center justify-center text-[10px] transition-all duration-200 cursor-pointer ${
                    rgpd ? 'border-accent bg-accent text-bg' : 'border-white/30'
                  }`}
                >
                  {rgpd && '✓'}
                </span>
                <input type="checkbox" className="sr-only" checked={rgpd} onChange={e => setRgpd(e.target.checked)} required />
                <span className="font-inter text-neutral/40 text-xs leading-relaxed">
                  J&apos;accepte que Stripwork utilise ces informations pour me recontacter. Conforme RGPD. Aucune diffusion à des tiers.
                </span>
              </label>

              {error && (
                <p className="font-inter text-xs text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading || !rgpd}
                className="w-full bg-accent text-bg font-inter font-semibold py-4 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer →'
                )}
              </button>

              <p className="font-inter text-neutral/30 text-xs text-center">
                Réponse sous 24h ouvrées. Sans engagement.
              </p>
            </form>
          </motion.div>
        )}

        {/* ── Confirmation ─────────────────────────────────────────────────── */}
        {view === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="p-8 md:p-10"
          >
            <div className="w-10 h-10 border border-accent flex items-center justify-center mb-6">
              <span className="text-accent text-base">✓</span>
            </div>
            <p className="font-grotesk font-bold text-surface text-2xl mb-3">
              Reçu, {contact.prenom}.
            </p>
            <p className="font-inter text-neutral text-sm leading-relaxed mb-8">
              On revient vers vous sous 24h ouvrées pour un échange de 30 minutes — sans engagement, sans relance si ce n&apos;est pas le bon moment.
            </p>
            {bookingUrl !== '#contact' && (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-inter font-semibold text-bg bg-accent px-8 py-4 hover:bg-white transition-colors duration-200 group text-sm"
              >
                Réserver un créneau directement
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            )}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
