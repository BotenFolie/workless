// Config partagée entre DiagnosticModal (overlay) et DiagnosticCard (embedded)

export const QUIZ_STEPS = [
  {
    id: 1,
    key: 'probleme' as const,
    multi: true,
    question: 'Où perdez-vous le plus de temps ?',
    hint: 'Plusieurs choix possibles',
    options: [
      { value: 'reporting',    icon: '📊', label: 'Analyse & reporting' },
      { value: 'emails',       icon: '✉️',  label: 'Rédaction & emails' },
      { value: 'decisions',    icon: '⏳', label: 'Décisions lentes' },
      { value: 'organisation', icon: '🗂️', label: 'Organisation interne' },
      { value: 'autre',        icon: '💬', label: 'Autre chose' },
    ],
  },
  {
    id: 2,
    key: 'heures' as const,
    multi: false,
    question: "Combien d'heures perdues par semaine ?",
    options: [
      { value: 'moins-5h', icon: '🟡', label: 'Moins de 5h' },
      { value: '5-10h',    icon: '🟠', label: '5 à 10h' },
      { value: '10-20h',   icon: '🔴', label: '10 à 20h' },
      { value: '20h+',     icon: '🚨', label: 'Plus de 20h' },
    ],
  },
  {
    id: 3,
    key: 'personnes' as const,
    multi: false,
    question: 'Combien de personnes concernées ?',
    options: [
      { value: '1-2',  icon: '👤', label: '1 à 2 personnes' },
      { value: '3-5',  icon: '👥', label: '3 à 5 personnes' },
      { value: '5-10', icon: '🏘️', label: '5 à 10 personnes' },
      { value: '10+',  icon: '🏢', label: 'Plus de 10' },
    ],
  },
  {
    id: 4,
    key: 'intention' as const,
    multi: true,
    question: 'Quel serait le premier bénéfice ?',
    hint: 'Plusieurs choix possibles',
    options: [
      { value: 'temps',     icon: '⚡', label: 'Gagner du temps' },
      { value: 'pression',  icon: '😮‍💨', label: 'Réduire la pression' },
      { value: 'decisions', icon: '🎯', label: 'Accélérer les décisions' },
      { value: 'recruter',  icon: '💰', label: 'Éviter de recruter' },
    ],
  },
  {
    id: 5,
    key: 'maturite' as const,
    multi: false,
    question: 'Avez-vous déjà essayé d\'optimiser ?',
    options: [
      { value: 'jamais',        icon: '🌱', label: 'Non, pas encore' },
      { value: 'partiellement', icon: '🔧', label: 'Oui, partiellement' },
      { value: 'echec',         icon: '💥', label: 'Oui, sans succès' },
    ],
  },
  {
    id: 6,
    key: 'objectif' as const,
    multi: false,
    question: 'Quel est votre objectif principal ?',
    options: [
      { value: 'tester',      icon: '🔍', label: 'Tester une amélioration' },
      { value: 'ameliorer',   icon: '📈', label: 'Améliorer l\'efficacité' },
      { value: 'transformer', icon: '🚀', label: 'Transformer l\'org' },
    ],
  },
]

export type QuizKey = 'probleme' | 'heures' | 'personnes' | 'intention' | 'maturite' | 'objectif'

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
