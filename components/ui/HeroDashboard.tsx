'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Les 3 agents affichés dans le dashboard
const AGENTS = [
  {
    id: 'rapport',
    name: 'Rapport hebdomadaire',
    desc: 'Google Sheets → PDF → Email',
    saved: '2h 15min',
  },
  {
    id: 'emails',
    name: 'Tri emails entrants',
    desc: 'Catégorisation + Réponses auto',
    saved: '45min',
  },
  {
    id: 'synthese',
    name: 'Synthèse réunion',
    desc: 'Transcription → Action items',
    saved: '30min',
  },
]

// Séquences de chat pour chaque agent (boucle infinie)
const SEQUENCES = [
  [
    { type: 'sys', text: 'Agent rapport — démarrage' },
    { type: 'run', text: 'Connexion Google Sheets...' },
    { type: 'ok', text: '847 lignes importées ✓' },
    { type: 'run', text: 'Calcul des KPIs en cours...' },
    { type: 'ok', text: 'Rapport PDF généré ✓' },
    { type: 'ok', text: 'Envoyé à direction@ ✓' },
    { type: 'meta', text: 'Économisé : 2h 15min' },
  ],
  [
    { type: 'sys', text: 'Agent emails — démarrage' },
    { type: 'run', text: 'Lecture boîte de réception...' },
    { type: 'ok', text: '23 emails analysés ✓' },
    { type: 'run', text: 'Tri par priorité...' },
    { type: 'ok', text: '8 réponses auto envoyées ✓' },
    { type: 'ok', text: 'Dossiers mis à jour ✓' },
    { type: 'meta', text: 'Économisé : 45min' },
  ],
  [
    { type: 'sys', text: 'Agent synthèse — démarrage' },
    { type: 'run', text: 'Transcription audio...' },
    { type: 'ok', text: '1 245 mots transcrits ✓' },
    { type: 'run', text: 'Extraction des décisions...' },
    { type: 'ok', text: '5 action items identifiés ✓' },
    { type: 'ok', text: 'Notion mis à jour ✓' },
    { type: 'meta', text: 'Économisé : 30min' },
  ],
]

type AgentStatus = 'idle' | 'running' | 'done'
type ChatLine = { type: string; text: string; id: number }

export default function HeroDashboard() {
  const [statuses, setStatuses] = useState<AgentStatus[]>(['idle', 'idle', 'idle'])
  const [activeAgent, setActiveAgent] = useState(0)
  const [lines, setLines] = useState<ChatLine[]>([])
  const [totalSaved, setTotalSaved] = useState(0)
  const chatRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(0)
  const running = useRef(false)

  // Fait défiler le chat vers le bas à chaque nouveau message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [lines])

  // Boucle principale : exécute les 3 agents séquentiellement, indéfiniment
  useEffect(() => {
    if (running.current) return
    running.current = true

    const delay = (ms: number) => new Promise(r => setTimeout(r, ms))

    const runSequence = async (agentIdx: number) => {
      const seq = SEQUENCES[agentIdx]

      // Passer à "running"
      setStatuses(s => s.map((v, i) => (i === agentIdx ? 'running' : v)))
      setActiveAgent(agentIdx)
      setLines([])

      for (const msg of seq) {
        await delay(msg.type === 'sys' ? 400 : 700)
        setLines(prev => [...prev, { ...msg, id: idRef.current++ }])
      }

      await delay(800)

      // Passer à "done"
      setStatuses(s => s.map((v, i) => (i === agentIdx ? 'done' : v)))
      setTotalSaved(t => t + [135, 45, 30][agentIdx])
      await delay(1200)
    }

    const loop = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        for (let i = 0; i < 3; i++) {
          await runSequence(i)
        }
        // Reset après la 3e passe
        await new Promise(r => setTimeout(r, 1000))
        setStatuses(['idle', 'idle', 'idle'])
        setTotalSaved(0)
        await new Promise(r => setTimeout(r, 600))
      }
    }

    // Lancer après le page loader
    setTimeout(loop, 2200)
  }, [])

  const msgColor: Record<string, string> = {
    sys: 'text-neutral/50',
    run: 'text-neutral/80',
    ok: 'text-accent',
    meta: 'text-surface font-semibold',
  }

  const statusDot = (s: AgentStatus) => {
    if (s === 'done') return <span className="text-accent text-xs">✓</span>
    if (s === 'running') return (
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
    )
    return <span className="inline-flex rounded-full h-2 w-2 bg-white/10" />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 2.0 }}
      className="relative w-full max-w-sm mx-auto lg:mx-0"
    >
      {/* Halo décoratif */}
      <div className="absolute -inset-px bg-gradient-to-br from-accent/10 via-transparent to-transparent rounded-sm pointer-events-none" />

      <div className="border border-white/[0.10] bg-[#0D0D0D] rounded-sm overflow-hidden">

        {/* Barre de titre */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="font-grotesk font-bold text-accent text-xs tracking-widest">WORKLESS</span>
            <span className="text-white/20 text-xs">·</span>
            <span className="font-inter text-neutral/60 text-xs">3 agents actifs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
          </div>
        </div>

        {/* Liste des agents */}
        <div className="px-4 pt-4 pb-2 space-y-2">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={agent.id}
              animate={{
                backgroundColor: activeAgent === i && statuses[i] === 'running'
                  ? 'rgba(198, 255, 0, 0.04)'
                  : 'transparent',
              }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 px-3 py-2.5 border border-white/[0.06] rounded-sm"
            >
              <div className="flex items-center justify-center w-4 h-4 flex-shrink-0">
                {statusDot(statuses[i])}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-inter font-medium text-surface text-xs truncate">{agent.name}</p>
                <p className="font-inter text-neutral/40 text-[10px] truncate">{agent.desc}</p>
              </div>
              <AnimatePresence>
                {statuses[i] === 'done' && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-inter text-accent text-[10px] font-semibold flex-shrink-0"
                  >
                    -{agent.saved}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Séparateur */}
        <div className="mx-4 my-2 border-t border-white/[0.04]" />

        {/* Chat log */}
        <div
          ref={chatRef}
          className="px-4 pb-3 h-[130px] overflow-y-auto space-y-1.5 scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          <AnimatePresence initial={false}>
            {lines.map(line => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="flex items-start gap-2"
              >
                <span className="text-white/20 font-mono text-[10px] mt-0.5 flex-shrink-0 select-none">›</span>
                <span className={`font-mono text-[11px] leading-relaxed ${msgColor[line.type]}`}>
                  {line.text}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Barre de statut */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="font-inter text-neutral/50 text-[10px]">Automatisation active</span>
          </div>
          <AnimatePresence mode="wait">
            {totalSaved > 0 && (
              <motion.span
                key={totalSaved}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-inter text-accent text-[10px] font-semibold"
              >
                -{Math.floor(totalSaved / 60)}h {totalSaved % 60}min économisées
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
