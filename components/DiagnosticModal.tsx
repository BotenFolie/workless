'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useDiagnostic } from '@/lib/diagnosticContext'
import { useContent } from '@/lib/i18n'
import { computeScore, getProfile, getStepIcon, type QuizKey, type QuizAnswers } from '@/lib/diagnosticConfig'
import QuizOption from './ui/QuizOption'
import QuizProgressBar from './ui/QuizProgressBar'
import RgpdCheckbox from './ui/RgpdCheckbox'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

// ─── Types ────────────────────────────────────────────────────────────────────

type ProfileType = 'high' | 'medium' | 'low'
type ViewId = 'quiz' | 'contact' | 'result'

type ContactData = {
  prenom:     string
  email:      string
  entreprise: string
  telephone:  string
}

const emptyQuiz: QuizAnswers = {
  probleme: [], heures: '', personnes: '', intention: [],
  maturite: '', objectif: '',
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function DiagnosticModal() {
  const { isOpen, source, close } = useDiagnostic()
  const router = useRouter()
  const c = useContent()
  const d = c.diagnostic
  const reducedMotion = useReducedMotion()

  const [view, setView]         = useState<ViewId>('quiz')
  const [stepIdx, setStepIdx]   = useState(0)
  const [quiz, setQuiz]         = useState<QuizAnswers>(emptyQuiz)
  const [contact, setContact]   = useState<ContactData>({ prenom: '', email: '', entreprise: '', telephone: '' })
  const [rgpd, setRgpd]         = useState(false)
  const [justSelected, setJustSelected] = useState<string | null>(null)
  const [direction, setDirection] = useState(1)
  const [loading, setLoading]   = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)
  const titleId = 'diagnostic-modal-title'

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Focus trap + Escape + retour de focus à la fermeture
  useEffect(() => {
    if (!isOpen) return

    lastFocusedRef.current = document.activeElement as HTMLElement | null
    const panel = panelRef.current
    const firstFocusable = panel?.querySelector<HTMLElement>(FOCUSABLE)
    firstFocusable?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleClose()
        return
      }
      if (e.key !== 'Tab' || !panel) return

      const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      lastFocusedRef.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const handleClose = () => {
    close()
    setTimeout(() => {
      setView('quiz'); setStepIdx(0); setQuiz(emptyQuiz)
      setContact({ prenom: '', email: '', entreprise: '', telephone: '' })
      setRgpd(false); setJustSelected(null)
    }, 400)
  }

  const advance = () => {
    setDirection(1)
    if (stepIdx < d.steps.length - 1) setStepIdx(s => s + 1)
    else setView('contact')
  }

  const handleOptionClick = (key: QuizKey, value: string, isMulti: boolean) => {
    if (isMulti) {
      setQuiz(q => {
        const arr = q[key] as string[]
        return { ...q, [key]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] }
      })
    } else {
      if (justSelected) return
      setJustSelected(value)
      setQuiz(q => ({ ...q, [key]: value }))
      setTimeout(() => { setJustSelected(null); advance() }, 320)
    }
  }

  const handleBack = () => {
    setDirection(-1)
    if (view === 'contact') setView('quiz')
    else if (stepIdx > 0) setStepIdx(s => s - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSubmitError(null)
    const score   = computeScore(quiz)
    const profile = getProfile(score)
    try {
      const response = await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...quiz,
          probleme:  quiz.probleme.join(', '),
          intention: quiz.intention.join(', '),
          ...contact, score, profile,
          source: source ?? '',
          _hp: '',
        }),
      })
      if (!response.ok) {
        const json = await response.json().catch(() => ({}))
        setSubmitError(json.error ?? d.errorDefault)
        setLoading(false)
        return
      }
    } catch {
      setSubmitError(d.errorNetwork)
      setLoading(false)
      return
    }

    setLoading(false)
    close()
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('stripwork_quiz', JSON.stringify(quiz))
    }
    router.push(`/merci?profil=${profile}&prenom=${encodeURIComponent(contact.prenom)}`)
  }

  const progressPct = view === 'quiz' ? ((stepIdx + 1) / 7) * 100 : 100
  const step = d.steps[stepIdx]
  const currentValue = step.multi ? (quiz[step.key] as string[]) : quiz[step.key] as string
  const canAdvanceMulti = step.multi && (currentValue as string[]).length > 0

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-[9993] bg-black/80 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="modal"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            transition={{ duration: reducedMotion ? 0.15 : 0.4, ease: EASE }}
            className="fixed inset-x-3 top-3 bottom-3 sm:inset-x-4 sm:top-[5vh] sm:bottom-[5vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-xl z-[9994] bg-[#161616] border border-white/[0.12] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-white/[0.08] flex-shrink-0">
              <div>
                {(view === 'quiz' && stepIdx > 0) || view === 'contact' ? (
                  <button
                    onClick={handleBack}
                    className="font-inter text-xs text-neutral hover:text-surface transition-colors duration-200 flex items-center gap-1.5"
                  >
                    {d.back}
                  </button>
                ) : (
                  <span id={titleId} className="font-grotesk font-bold text-surface text-sm tracking-tight">
                    {d.title}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                {view !== 'result' && (
                  <span className="font-inter text-xs text-neutral/40 tabular-nums">
                    {view === 'quiz' ? stepIdx + 1 : '7'}&nbsp;/ 7
                  </span>
                )}
                <button
                  onClick={handleClose}
                  className="w-7 h-7 flex items-center justify-center text-neutral/50 hover:text-surface transition-colors duration-200"
                  aria-label={d.close ?? 'Fermer'}
                >
                  <X className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Barre de progression */}
            {view !== 'result' && (
              <QuizProgressBar current={stepIdx + 1} total={7} label={`Étape ${stepIdx + 1} sur 7`} />
            )}

            {/* Contenu */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait" custom={direction}>

                {/* ── Quiz ── */}
                {view === 'quiz' && (
                  <motion.div
                    key={`q-${stepIdx}`}
                    custom={direction}
                    initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reducedMotion ? 0 : direction * -24 }}
                    transition={{ duration: reducedMotion ? 0.1 : 0.22, ease: EASE }}
                    className="px-5 md:px-8 pt-8 pb-10"
                  >
                    <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-3">
                      {d.questionLabel(stepIdx + 1)}
                    </p>
                    <h2 className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight tracking-tight mb-1.5">
                      {step.question}
                    </h2>
                    {'hint' in step && step.hint && (
                      <p className="font-inter text-xs text-muted mb-6">{step.hint}</p>
                    )}
                    {!('hint' in step && step.hint) && <div className="mb-6" />}

                    <div className="space-y-2">
                      {step.options.map((opt) => {
                        const isSelected = step.multi
                          ? (currentValue as string[]).includes(opt.value)
                          : (justSelected === opt.value || currentValue === opt.value)

                        return (
                          <QuizOption
                            key={opt.value}
                            icon={getStepIcon(step.key, opt.value)}
                            label={opt.label}
                            selected={isSelected}
                            multi={step.multi}
                            onClick={() => handleOptionClick(step.key as QuizKey, opt.value, step.multi)}
                          />
                        )
                      })}
                    </div>

                    {step.multi && (
                      <motion.button
                        onClick={advance}
                        disabled={!canAdvanceMulti}
                        className="mt-5 w-full border border-white/[0.15] py-3.5 font-inter text-sm font-semibold text-surface transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent/50 hover:bg-accent/[0.04]"
                      >
                        {d.next}
                      </motion.button>
                    )}
                  </motion.div>
                )}

                {/* ── Contact ── */}
                {view === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: reducedMotion ? 0 : 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reducedMotion ? 0 : -24 }}
                    transition={{ duration: reducedMotion ? 0.1 : 0.22, ease: EASE }}
                    className="px-5 md:px-8 pt-8 pb-10"
                  >
                    <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-3">
                      {d.lastStep}
                    </p>
                    <h2 className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight tracking-tight mb-2">
                      {d.whereToSend}
                    </h2>
                    <p className="font-inter text-muted text-sm mb-7">
                      {d.personalizedSummary}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {([
                        { key: 'prenom'     as const, type: 'text',  required: true  },
                        { key: 'email'      as const, type: 'email', required: true  },
                        { key: 'entreprise' as const, type: 'text',  required: true  },
                        { key: 'telephone'  as const, type: 'tel',   required: false },
                      ] as const).map(f => (
                        <div key={f.key}>
                          <label className="block font-inter text-[10px] font-semibold tracking-[0.12em] uppercase text-surface/60 mb-2">
                            {d.fields[f.key].label}
                            {!f.required && (
                              <span className="normal-case font-normal tracking-normal ml-1 text-surface/35">
                                {d.optional}
                              </span>
                            )}
                          </label>
                          <input
                            type={f.type}
                            className="input-dark w-full border border-white/[0.15] focus:border-accent/50 focus:outline-none px-4 py-3 font-inter text-sm transition-colors duration-200"
                            placeholder={d.fields[f.key].placeholder}
                            value={contact[f.key]}
                            onChange={e => setContact(prev => ({ ...prev, [f.key]: e.target.value }))}
                            required={f.required}
                          />
                        </div>
                      ))}

                      <RgpdCheckbox checked={rgpd} onChange={setRgpd} label={d.rgpd} />

                      {submitError && (
                        <p className="font-inter text-xs text-red-400 text-center">{submitError}</p>
                      )}

                      <button
                        type="submit"
                        disabled={loading || !rgpd}
                        className="w-full bg-accent text-bg font-inter font-semibold py-4 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                            {d.loading}
                          </>
                        ) : d.submit}
                      </button>

                      <p className="font-inter text-muted text-xs text-center">
                        {d.noNewsletter}
                      </p>
                    </form>
                  </motion.div>
                )}

                {/* ── Résultat ── */}
                {view === 'result' && (() => {
                  const score       = computeScore(quiz)
                  const profileType = getProfile(score) as ProfileType
                  const res         = d.results[profileType]
                  return (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reducedMotion ? 0.1 : 0.4, ease: EASE }}
                      className="px-5 md:px-8 pt-10 pb-12"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: reducedMotion ? 0 : 0.05, duration: reducedMotion ? 0.1 : 0.3, ease: EASE }}
                        className={`inline-flex items-center border px-3 py-1.5 mb-6 ${
                          profileType === 'high'   ? 'border-accent/40 bg-accent/[0.06]' :
                          profileType === 'medium' ? 'border-white/20 bg-white/[0.03]' :
                                                     'border-white/[0.08]'
                        }`}
                      >
                        <span className={`font-inter text-[10px] font-semibold tracking-[0.12em] uppercase ${
                          profileType === 'high' ? 'text-accent' : 'text-surface/60'
                        }`}>
                          {res.badge}
                        </span>
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: reducedMotion ? 0 : 0.12, duration: reducedMotion ? 0.1 : 0.35, ease: EASE }}
                        className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight tracking-tight mb-4"
                      >
                        {res.headline(contact.prenom)}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: reducedMotion ? 0 : 0.18, duration: reducedMotion ? 0.1 : 0.35, ease: EASE }}
                        className="font-inter text-muted text-sm leading-relaxed mb-8"
                      >
                        {res.body}
                      </motion.p>

                      {res.stats.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reducedMotion ? 0 : 0.24, duration: reducedMotion ? 0.1 : 0.35, ease: EASE }}
                          className="grid grid-cols-3 gap-2 mb-8"
                        >
                          {res.stats.map((s) => (
                            <div key={s.label} className="border border-white/[0.08] bg-white/[0.02] px-3 py-3.5">
                              <p className="font-inter text-xs font-bold text-surface mb-0.5">{s.getValue(quiz)}</p>
                              <p className="font-inter text-[10px] text-muted leading-snug">{s.label}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      <motion.div
                        initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: reducedMotion ? 0 : 0.3, duration: reducedMotion ? 0.1 : 0.35, ease: EASE }}
                        className="space-y-3"
                      >
                        <button className="w-full bg-accent text-bg font-inter font-semibold py-4 hover:bg-white transition-colors duration-200">
                          {res.cta}
                        </button>
                        <button
                          onClick={handleClose}
                          className="w-full font-inter text-xs text-muted hover:text-surface/70 transition-colors duration-200 py-2"
                        >
                          {d.back.replace('← ', '')}
                        </button>
                      </motion.div>
                    </motion.div>
                  )
                })()}

              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
