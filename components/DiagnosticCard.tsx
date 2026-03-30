'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  QUIZ_STEPS, emptyQuiz,
  computeScore, getProfile,
  type QuizKey, type QuizAnswers, type ContactData,
} from '@/lib/diagnosticConfig'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

type ViewId = 'quiz' | 'contact'

export default function DiagnosticCard() {
  const router = useRouter()
  const [view, setView]       = useState<ViewId>('quiz')
  const [stepIdx, setStepIdx] = useState(0)
  const [quiz, setQuiz]       = useState<QuizAnswers>(emptyQuiz)
  const [contact, setContact] = useState<ContactData>({ prenom: '', email: '', entreprise: '', telephone: '' })
  const [rgpd, setRgpd]       = useState(false)
  const [justSelected, setJustSelected] = useState<string | null>(null)
  const [direction, setDirection]       = useState(1)
  const [loading, setLoading] = useState(false)

  const step = QUIZ_STEPS[stepIdx]

  const advance = () => {
    setDirection(1)
    if (stepIdx < QUIZ_STEPS.length - 1) setStepIdx(s => s + 1)
    else setView('contact')
  }

  const handleBack = () => {
    setDirection(-1)
    if (view === 'contact') setView('quiz')
    else if (stepIdx > 0) setStepIdx(s => s - 1)
  }

  const handleOption = (key: QuizKey, value: string, isMulti: boolean) => {
    if (isMulti) {
      setQuiz(q => {
        const arr = q[key] as string[]
        return { ...q, [key]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] }
      })
    } else {
      if (justSelected) return
      setJustSelected(value)
      setQuiz(q => ({ ...q, [key]: value }))
      setTimeout(() => { setJustSelected(null); advance() }, 280)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const score   = computeScore(quiz)
    const profile = getProfile(score)
    try {
      await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...quiz,
          probleme:  quiz.probleme.join(', '),
          intention: quiz.intention.join(', '),
          ...contact, score, profile,
        }),
      })
    } catch { /* silent */ }
    finally {
      setLoading(false)
      sessionStorage.setItem('sw_diagnostic', JSON.stringify({
        probleme: quiz.probleme, heures: quiz.heures, personnes: quiz.personnes,
        intention: quiz.intention, maturite: quiz.maturite, objectif: quiz.objectif,
      }))
      router.push(`/merci?profil=${profile}&prenom=${encodeURIComponent(contact.prenom)}`)
    }
  }

  const currentVal = step?.multi ? (quiz[step.key] as string[]) : quiz[step.key] as string
  const canAdvance = step?.multi && (currentVal as string[]).length > 0
  const progress   = view === 'quiz' ? ((stepIdx + 1) / 7) * 100 : 100

  return (
    <div className="w-full bg-[#141414] border border-white/[0.08] flex flex-col overflow-hidden"
      style={{ height: 560 }}>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] flex-shrink-0">
        <div className="flex items-center gap-3">
          {(view === 'quiz' && stepIdx > 0) || view === 'contact' ? (
            <button onClick={handleBack}
              className="font-inter text-[11px] text-neutral hover:text-surface transition-colors flex items-center gap-1">
              ← Retour
            </button>
          ) : (
            <span className="font-inter text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
              Diagnostic gratuit
            </span>
          )}
        </div>
        <span className="font-inter text-[11px] text-neutral/40 tabular-nums">
          {view === 'quiz' ? stepIdx + 1 : '7'} / 7
        </span>
      </div>

      {/* Barre de progression */}
      <div className="h-px bg-white/[0.04] flex-shrink-0">
        <motion.div
          className="h-full bg-accent origin-left"
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.3, ease: EASE }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* Contenu */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait" custom={direction}>

          {/* ── Quiz ── */}
          {view === 'quiz' && (
            <motion.div
              key={`q-${stepIdx}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -16 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="px-5 pt-5 pb-6"
            >
              <p className="font-inter text-[9px] font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                Question {stepIdx + 1} sur 6
              </p>
              <h3 className="font-grotesk font-bold text-surface text-base leading-snug tracking-tight mb-1">
                {step.question}
              </h3>
              {'hint' in step && (
                <p className="font-inter text-[10px] text-neutral/40 mb-4">{step.hint}</p>
              )}
              {!('hint' in step) && <div className="mb-4" />}

              <div className="space-y-1.5">
                {step.options.map(opt => {
                  const isSelected = step.multi
                    ? (currentVal as string[]).includes(opt.value)
                    : (justSelected === opt.value || currentVal === opt.value)

                  return (
                    <motion.button
                      key={opt.value}
                      onClick={() => handleOption(step.key, opt.value, step.multi)}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left border px-3.5 py-2.5 flex items-center gap-3 transition-all duration-200 ${
                        isSelected
                          ? 'border-accent/60 bg-accent/[0.06]'
                          : 'border-white/[0.07] hover:border-white/20 hover:bg-white/[0.02]'
                      }`}
                    >
                      <span className="text-base flex-shrink-0 w-6 text-center leading-none">{opt.icon}</span>
                      <span className={`font-inter text-xs font-medium transition-colors duration-150 ${
                        isSelected ? 'text-surface' : 'text-surface/65'
                      }`}>
                        {opt.label}
                      </span>
                      {step.multi ? (
                        <span className={`ml-auto flex-shrink-0 w-3.5 h-3.5 border flex items-center justify-center text-[8px] transition-all ${
                          isSelected ? 'border-accent bg-accent text-bg' : 'border-white/20'
                        }`}>
                          {isSelected && '✓'}
                        </span>
                      ) : (
                        <motion.span
                          className="ml-auto text-accent text-[10px] flex-shrink-0"
                          animate={{ opacity: isSelected ? 1 : 0, scale: isSelected ? 1 : 0.5 }}
                          transition={{ duration: 0.12 }}
                        >
                          ✓
                        </motion.span>
                      )}
                    </motion.button>
                  )
                })}
              </div>

              {step.multi && (
                <button
                  onClick={advance}
                  disabled={!canAdvance}
                  className="mt-4 w-full border border-white/[0.12] py-2.5 font-inter text-xs font-semibold text-surface transition-all duration-200 disabled:opacity-25 hover:border-accent/40 hover:bg-accent/[0.03]"
                >
                  Suivant →
                </button>
              )}
            </motion.div>
          )}

          {/* ── Contact ── */}
          {view === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="px-5 pt-5 pb-6"
            >
              <p className="font-inter text-[9px] font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                Dernière étape
              </p>
              <h3 className="font-grotesk font-bold text-surface text-base leading-snug tracking-tight mb-1">
                Où envoyer votre analyse ?
              </h3>
              <p className="font-inter text-neutral/50 text-xs mb-5">
                Résumé personnalisé selon vos réponses.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                {[
                  { key: 'prenom'     as const, label: 'Prénom',     type: 'text',  placeholder: 'Votre prénom',          required: true  },
                  { key: 'email'      as const, label: 'Email',      type: 'email', placeholder: 'vous@entreprise.com',   required: true  },
                  { key: 'entreprise' as const, label: 'Entreprise', type: 'text',  placeholder: 'Votre société',         required: true  },
                  { key: 'telephone'  as const, label: 'Téléphone',  type: 'tel',   placeholder: '+33 6 — optionnel',     required: false },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block font-inter text-[9px] font-semibold tracking-[0.12em] uppercase text-surface/35 mb-1.5">
                      {f.label}
                      {!f.required && <span className="normal-case font-normal tracking-normal ml-1 text-surface/20">— optionnel</span>}
                    </label>
                    <input
                      type={f.type}
                      className="input-dark w-full border border-white/[0.10] focus:border-accent/40 focus:outline-none px-3 py-2 font-inter text-xs transition-colors duration-200"
                      placeholder={f.placeholder}
                      value={contact[f.key]}
                      onChange={e => setContact(c => ({ ...c, [f.key]: e.target.value }))}
                      required={f.required}
                    />
                  </div>
                ))}

                <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                  <span className={`mt-0.5 w-3.5 h-3.5 border flex-shrink-0 flex items-center justify-center text-[9px] transition-all ${
                    rgpd ? 'border-accent bg-accent text-bg' : 'border-white/25'
                  }`}>
                    {rgpd && '✓'}
                  </span>
                  <input type="checkbox" className="sr-only" checked={rgpd} onChange={e => setRgpd(e.target.checked)} required />
                  <span className="font-inter text-neutral/40 text-[10px] leading-relaxed">
                    J&apos;accepte que Stripwork utilise ces données pour me recontacter. Conforme RGPD.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading || !rgpd}
                  className="w-full bg-accent text-bg font-inter font-semibold text-xs py-3 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><span className="w-3 h-3 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />Analyse...</>
                  ) : 'Voir mon analyse →'}
                </button>
              </form>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
