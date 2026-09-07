// Config partagée entre DiagnosticModal (overlay) et DiagnosticCard (embedded)

import {
  BarChart3, Mail, Hourglass, FolderOpen, MessageCircle,
  Timer, AlertTriangle, User, Users, Building2,
  Zap, Wind, Target, Coins, Sprout, Wrench, AlertOctagon,
  Search, TrendingUp, Rocket,
  type LucideIcon,
} from 'lucide-react'

export type QuizKey = 'probleme' | 'heures' | 'personnes' | 'intention' | 'maturite' | 'objectif'

// Icônes indépendantes de la langue → source unique ici (jamais dupliquées dans les fichiers content i18n).
// Clé = step key, puis option value. Les composants lisent le label/texte depuis le content, l'icône depuis cette map.
export const STEP_ICONS: Record<QuizKey, Record<string, LucideIcon>> = {
  probleme: {
    reporting: BarChart3, emails: Mail, decisions: Hourglass,
    organisation: FolderOpen, autre: MessageCircle,
  },
  heures: {
    'moins-5h': Timer, '5-10h': Timer, '10-20h': Timer, '20h+': AlertTriangle,
  },
  personnes: {
    '1-2': User, '3-5': Users, '5-10': Users, '10+': Building2,
  },
  intention: {
    temps: Zap, pression: Wind, decisions: Target, recruter: Coins,
  },
  maturite: {
    jamais: Sprout, partiellement: Wrench, echec: AlertOctagon,
  },
  objectif: {
    tester: Search, ameliorer: TrendingUp, transformer: Rocket,
  },
}

// Retourne l'icône d'une option ; fallback MessageCircle si valeur inconnue (jamais undefined → pas de crash rendu)
export function getStepIcon(key: QuizKey, value: string): LucideIcon {
  return STEP_ICONS[key]?.[value] ?? MessageCircle
}

export type QuizAnswers = {
  probleme:  string[]
  heures:    string
  personnes: string
  intention: string[]
  maturite:  string
  objectif:  string
}

export type ContactData = {
  prenom:    string
  email:     string
  entreprise: string
  telephone: string
}

export const emptyQuiz: QuizAnswers = {
  probleme: [], heures: '', personnes: '', intention: [],
  maturite: '', objectif: '',
}

const SCORES: Record<string, number> = {
  'moins-5h': 0, '5-10h': 1, '10-20h': 2, '20h+': 3,
  '1-2': 0, '3-5': 1, '5-10': 2, '10+': 3,
  'temps': 0, 'pression': 1, 'decisions': 2, 'recruter': 3,
  'jamais': 0, 'partiellement': 1, 'echec': 2,
  'tester': 0, 'ameliorer': 1, 'transformer': 2,
}

export function computeScore(a: QuizAnswers): number {
  const intentionScore = a.intention.reduce((max, v) => Math.max(max, SCORES[v] ?? 0), 0)
  return (SCORES[a.heures] ?? 0)
    + (SCORES[a.personnes] ?? 0)
    + intentionScore
    + (SCORES[a.maturite] ?? 0)
    + (SCORES[a.objectif] ?? 0)
}

export function getProfile(score: number): 'high' | 'medium' | 'low' {
  if (score >= 10) return 'high'
  if (score >= 5)  return 'medium'
  return 'low'
}
