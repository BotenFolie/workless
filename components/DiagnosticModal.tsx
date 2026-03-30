'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useDiagnostic } from '@/lib/diagnosticContext'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// ─── Config des 7 questions ───────────────────────────────────────────────────

const QUIZ_STEPS = [
  {
    id: 1,
    key: 'probleme' as const,
    multi: true,
    question: 'Où perdez-vous le plus de temps en ce moment ?',
    hint: 'Plusieurs choix possibles',
    options: [
      { value: 'reporting',    icon: '📊', label: 'Analyse & reporting' },
      { value: 'emails',       icon: '✉️',  label: 'Rédaction & emails' },
      { value: 'decisions',    icon: '⏳', label: 'Prises de décision lentes' },
      { value: 'organisation', icon: '🗂️', label: 'Organisation interne' },
      { value: 'autre',        icon: '💬', label: 'Autre chose' },
    ],
  },
  {
    id: 2,
    key: 'heures' as const,
    multi: false,
    question: "Combien d'heures disparaissent chaque semaine ?",
    options: [
      { value: 'moins-5h', icon: '🟡', label: 'Moins de 5h' },
      { value: '5-10h',    icon: '🟠', label: '5 à 10h' },
      { value: '10-20h',   icon: '🔴', label: '10 à 20h' },
      { value: '20h+',     icon: '🚨', label: 'Plus de 20h — chaque semaine' },
    ],
  },
  {
    id: 3,
    key: 'personnes' as const,
    multi: false,
    question: 'Combien de personnes sont concernées par ce problème ?',
    options: [
      { value: '1-2',  icon: '👤', label: '1 à 2 personnes' },
      { value: '3-5',  icon: '👥', label: '3 à 5 personnes' },
      { value: '5-10', icon: '🏘️', label: '5 à 10 personnes' },
      { value: '10+',  icon: '🏢', label: 'Plus de 10 personnes' },
    ],
  },
  {
    id: 4,
    key: 'intention' as const,
    multi: true,
    question: 'Si vous supprimiez cette charge, quels seraient les bénéfices ?',
    hint: 'Plusieurs choix possibles',
    options: [
      { value: 'temps',    icon: '⚡', label: 'Gagner du temps' },
      { value: 'pression', icon: '😮‍💨', label: 'Réduire la pression' },
      { value: 'decisions',icon: '🎯', label: 'Accélérer les décisions' },
      { value: 'recruter', icon: '💰', label: 'Éviter de recruter' },
    ],
  },
  {
    id: 5,
    key: 'maturite' as const,
    multi: false,
    question: "Avez-vous déjà essayé d'optimiser ces tâches ?",
    options: [
      { value: 'jamais',        icon: '🌱', label: "Non, pas encore essayé" },
      { value: 'partiellement', icon: '🔧', label: "Oui, partiellement" },
      { value: 'echec',         icon: '💥', label: "Oui, mais sans succès" },
    ],
  },
  {
    id: 6,
    key: 'objectif' as const,
    multi: false,
    question: 'Quel est votre objectif principal ?',
    options: [
      { value: 'tester',      icon: '🔍', label: 'Tester une première amélioration' },
      { value: 'ameliorer',   icon: '📈', label: "Améliorer l'efficacité globale" },
      { value: 'transformer', icon: '🚀', label: "Transformer l'organisation" },
    ],
  },
]

// ─── Types ────────────────────────────────────────────────────────────────────

type QuizKey = 'probleme' | 'heures' | 'personnes' | 'intention' | 'maturite' | 'objectif' | 'urgence'
type ViewId = 'quiz' | 'contact' | 'result'

// probleme et intention sont multi → string[], les autres single → string
type QuizAnswers = {
  probleme:  string[]
  heures:    string
  personnes: string
  intention: string[]
  maturite:  string
  objectif:  string
}

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

// ─── Scoring ──────────────────────────────────────────────────────────────────

const SCORES: Record<string, number> = {
  'moins-5h': 0, '5-10h': 1, '10-20h': 2, '20h+': 3,
  '1-2': 0, '3-5': 1, '5-10': 2, '10+': 3,
  'temps': 0, 'pression': 1, 'decisions': 2, 'recruter': 3,
  'jamais': 0, 'partiellement': 1, 'echec': 2,
  'tester': 0, 'ameliorer': 1, 'transformer': 2,
}

function computeScore(a: QuizAnswers): number {
  // Pour intention (multi), on prend le score max parmi les sélections
  const intentionScore = a.intention.reduce((max, v) => Math.max(max, SCORES[v] ?? 0), 0)
  return (SCORES[a.heures] ?? 0)
    + (SCORES[a.personnes] ?? 0)
    + intentionScore
    + (SCORES[a.maturite] ?? 0)
    + (SCORES[a.objectif] ?? 0)
}

type ProfileType = 'high' | 'medium' | 'low'

function getProfile(score: number): ProfileType {
  if (score >= 10) return 'high'
  if (score >= 5)  return 'medium'
  return 'low'
}

// ─── Résultats personnalisés ──────────────────────────────────────────────────

const RESULTS: Record<ProfileType, {
  badge: string
  headline: (prenom: string) => string
  body: string
  stats: { label: string; value: (a: QuizAnswers) => string }[]
  cta: string
}> = {
  high: {
    badge: '🔥 Profil haute valeur',
    headline: (p) => `${p ? p + ', vous' : 'Vous'} perdez probablement entre 20% et 40% de votre capacité productive chaque semaine.`,
    body: "Ce type de configuration permet généralement de supprimer une charge équivalente à 1 poste. On peut vous montrer exactement comment — et chiffrer ce que ça représente pour votre organisation.",
    stats: [
      { label: 'Heures perdues/sem.', value: (a) => a.heures === '20h+' ? '20h+' : a.heures === '10-20h' ? '~15h' : '~7h' },
      { label: 'Personnes impactées', value: (a) => a.personnes === '10+' ? '10+' : a.personnes },
      { label: 'Objectif identifié',  value: (a) => a.objectif === 'transformer' ? 'Transformation' : a.objectif === 'ameliorer' ? 'Efficacité' : 'Quick win' },
    ],
    cta: 'Réserver un appel de 30 min →',
  },
  medium: {
    badge: '✅ Des gains rapides existent',
    headline: (p) => `${p ? p + ', il y' : 'Il y'} a des optimisations concrètes dans votre organisation actuelle.`,
    body: "Une première intervention permet généralement de récupérer plusieurs heures par semaine, sans tout reconstruire. Le bon endroit pour commencer existe — on peut l'identifier ensemble.",
    stats: [
      { label: 'Heures récupérables', value: (a) => a.heures === '10-20h' ? '5–10h/sem.' : '3–5h/sem.' },
      { label: 'Périmètre',           value: (a) => a.personnes === '1-2' ? 'Individuel' : 'Équipe' },
      { label: 'Maturité',            value: (a) => a.maturite === 'echec' ? 'Déjà tenté' : 'À explorer' },
    ],
    cta: 'Voir comment en 30 min →',
  },
  low: {
    badge: '💡 Quelques pistes identifiées',
    headline: (p) => `${p ? p + ', votre' : 'Votre'} situation semble déjà relativement organisée.`,
    body: "Il peut exister des ajustements ciblés qui feraient une vraie différence. Un échange rapide permet de confirmer — ou d'écarter — les pistes.",
    stats: [],
    cta: 'En discuter →',
  },
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function DiagnosticModal() {
  const { isOpen, close } = useDiagnostic()
  const router = useRouter()
  const [view, setView]         = useState<ViewId>('quiz')
  const [stepIdx, setStepIdx]   = useState(0)
  const [quiz, setQuiz]         = useState<QuizAnswers>(emptyQuiz)
  const [contact, setContact]   = useState<ContactData>({ prenom: '', email: '', entreprise: '', telephone: '' })
  const [rgpd, setRgpd]         = useState(false)
  const [justSelected, setJustSelected] = useState<string | null>(null)
  const [direction, setDirection] = useState(1)
  const [loading, setLoading]   = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
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
    if (stepIdx < QUIZ_STEPS.length - 1) {
      setStepIdx(s => s + 1)
    } else {
      setView('contact')
    }
  }

  // Gestion single-select (auto-advance) et multi-select (toggle)
  const handleOptionClick = (key: QuizKey, value: string, isMulti: boolean) => {
    if (isMulti) {
      setQuiz(q => {
        const arr = q[key] as string[]
        return {
          ...q,
          [key]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value],
        }
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
    if (view === 'contact') { setView('quiz') }
    else if (stepIdx > 0)   { setStepIdx(s => s - 1) }
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
          ...contact,
          score,
          profile,
        }),
      })
    } catch { /* silent */ }
    finally {
      setLoading(false)
      // Sauvegarde des réponses pour personnaliser la page /merci
      sessionStorage.setItem('sw_diagnostic', JSON.stringify({
        probleme:  quiz.probleme,
        heures:    quiz.heures,
        personnes: quiz.personnes,
        intention: quiz.intention,
        maturite:  quiz.maturite,
        objectif:  quiz.objectif,
      }))
      close()
      router.push(`/merci?profil=${profile}&prenom=${encodeURIComponent(contact.prenom)}`)
    }
  }

  const progressPct = view === 'quiz'
    ? ((stepIdx + 1) / 7) * 100
    : 100

  const step = QUIZ_STEPS[stepIdx]

  // Valeur courante pour ce step (single ou multi)
  const currentValue = step.multi
    ? (quiz[step.key] as string[])
    : quiz[step.key] as string

  const canAdvanceMulti = step.multi && (currentValue as string[]).length > 0

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-[9993] bg-black/80 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: EASE }}
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
                    ← Retour
                  </button>
                ) : (
                  <span className="font-grotesk font-bold text-surface text-sm tracking-tight">
                    Diagnostic Stripwork
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
                  className="w-7 h-7 flex items-center justify-center text-neutral/50 hover:text-surface transition-colors duration-200 text-sm"
                  aria-label="Fermer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Barre de progression */}
            {view !== 'result' && (
              <div className="h-px bg-white/[0.06] flex-shrink-0">
                <motion.div
                  className="h-full bg-accent origin-left"
                  animate={{ scaleX: progressPct / 100 }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            )}

            {/* Contenu */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait" custom={direction}>

                {/* ── Quiz ── */}
                {view === 'quiz' && (
                  <motion.div
                    key={`q-${stepIdx}`}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -24 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    className="px-5 md:px-8 pt-8 pb-10"
                  >
                    <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-3">
                      Question {stepIdx + 1} sur 6
                    </p>
                    <h2 className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight tracking-tight mb-1.5">
                      {step.question}
                    </h2>
                    {'hint' in step && (
                      <p className="font-inter text-xs text-neutral/40 mb-6">{step.hint}</p>
                    )}
                    {!('hint' in step) && <div className="mb-6" />}

                    <div className="space-y-2">
                      {step.options.map((opt) => {
                        const isSelected = step.multi
                          ? (currentValue as string[]).includes(opt.value)
                          : (justSelected === opt.value || currentValue === opt.value)

                        return (
                          <motion.button
                            key={opt.value}
                            onClick={() => handleOptionClick(step.key, opt.value, step.multi)}
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
                            {/* Indicateur multi (carré) ou single (check animé) */}
                            {step.multi ? (
                              <span className={`ml-auto flex-shrink-0 w-4 h-4 border flex items-center justify-center text-[10px] transition-all duration-200 ${
                                isSelected ? 'border-accent bg-accent text-bg' : 'border-white/20'
                              }`}>
                                {isSelected && '✓'}
                              </span>
                            ) : (
                              <motion.span
                                className="ml-auto text-accent text-xs flex-shrink-0"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: isSelected ? 1 : 0, scale: isSelected ? 1 : 0.5 }}
                                transition={{ duration: 0.15 }}
                              >
                                ✓
                              </motion.span>
                            )}
                          </motion.button>
                        )
                      })}
                    </div>

                    {/* Bouton Suivant — uniquement pour les steps multi */}
                    {step.multi && (
                      <motion.button
                        onClick={advance}
                        disabled={!canAdvanceMulti}
                        className="mt-5 w-full border border-white/[0.15] py-3.5 font-inter text-sm font-semibold text-surface transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent/50 hover:bg-accent/[0.04]"
                      >
                        Suivant →
                      </motion.button>
                    )}
                  </motion.div>
                )}

                {/* ── Contact ── */}
                {view === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    className="px-5 md:px-8 pt-8 pb-10"
                  >
                    <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-3">
                      Dernière étape
                    </p>
                    <h2 className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight tracking-tight mb-2">
                      Où envoyer votre analyse ?
                    </h2>
                    <p className="font-inter text-neutral text-sm mb-7">
                      On génère un résumé personnalisé à partir de vos réponses.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {[
                        { key: 'prenom'     as const, label: 'Prénom',    type: 'text',  placeholder: 'Votre prénom',          required: true  },
                        { key: 'email'      as const, label: 'Email',     type: 'email', placeholder: 'vous@entreprise.com',    required: true  },
                        { key: 'entreprise' as const, label: 'Entreprise',type: 'text',  placeholder: 'Nom de votre société',   required: true  },
                        { key: 'telephone'  as const, label: 'Téléphone', type: 'tel',   placeholder: '+33 6 00 00 00 00 — optionnel', required: false },
                      ].map(f => (
                        <div key={f.key}>
                          <label className="block font-inter text-[10px] font-semibold tracking-[0.12em] uppercase text-surface/40 mb-2">
                            {f.label}{!f.required && <span className="normal-case font-normal tracking-normal ml-1 text-surface/25">— optionnel</span>}
                          </label>
                          <input
                            type={f.type}
                            className="input-dark w-full border border-white/[0.15] focus:border-accent/50 focus:outline-none px-4 py-3 font-inter text-sm transition-colors duration-200"
                            placeholder={f.placeholder}
                            value={contact[f.key]}
                            onChange={e => setContact(c => ({ ...c, [f.key]: e.target.value }))}
                            required={f.required}
                          />
                        </div>
                      ))}

                      <label className="flex items-start gap-3 cursor-pointer pt-1">
                        <span
                          className={`mt-0.5 w-4 h-4 border flex-shrink-0 flex items-center justify-center text-[10px] transition-all duration-200 ${
                            rgpd ? 'border-accent bg-accent text-bg' : 'border-white/30'
                          }`}
                        >
                          {rgpd && '✓'}
                        </span>
                        <input type="checkbox" className="sr-only" checked={rgpd} onChange={e => setRgpd(e.target.checked)} required />
                        <span className="font-inter text-neutral/50 text-xs leading-relaxed">
                          J&apos;accepte que Stripwork utilise ces informations pour me recontacter. Aucune diffusion à des tiers. Conforme RGPD.
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={loading || !rgpd}
                        className="w-full bg-accent text-bg font-inter font-semibold py-4 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                            Analyse en cours...
                          </>
                        ) : (
                          'Voir mon analyse →'
                        )}
                      </button>

                      <p className="font-inter text-neutral/30 text-xs text-center">
                        Aucune newsletter. Réponse sous 24h ouvrées.
                      </p>
                    </form>
                  </motion.div>
                )}

                {/* ── Résultat ── */}
                {view === 'result' && (() => {
                  const score       = computeScore(quiz)
                  const profileType = getProfile(score)
                  const res         = RESULTS[profileType]
                  return (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="px-5 md:px-8 pt-10 pb-12"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05, duration: 0.3, ease: EASE }}
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
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12, duration: 0.35, ease: EASE }}
                        className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight tracking-tight mb-4"
                      >
                        {res.headline(contact.prenom)}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.18, duration: 0.35, ease: EASE }}
                        className="font-inter text-neutral text-sm leading-relaxed mb-8"
                      >
                        {res.body}
                      </motion.p>

                      {res.stats.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.24, duration: 0.35, ease: EASE }}
                          className="grid grid-cols-3 gap-2 mb-8"
                        >
                          {res.stats.map((s) => (
                            <div key={s.label} className="border border-white/[0.08] bg-white/[0.02] px-3 py-3.5">
                              <p className="font-inter text-xs font-bold text-surface mb-0.5">{s.value(quiz)}</p>
                              <p className="font-inter text-[10px] text-neutral/50 leading-snug">{s.label}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.35, ease: EASE }}
                        className="space-y-3"
                      >
                        <button className="w-full bg-accent text-bg font-inter font-semibold py-4 hover:bg-white transition-colors duration-200">
                          {res.cta}
                        </button>
                        <button
                          onClick={handleClose}
                          className="w-full font-inter text-xs text-neutral/40 hover:text-neutral/70 transition-colors duration-200 py-2"
                        >
                          Fermer
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
