'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { contentFR } from './content'
import { contentEN } from './content.en'

export type Lang = 'fr' | 'en'

// Le type de référence est toujours contentFR (source de vérité)
type SiteContent = typeof contentFR

type I18nCtx = {
  lang: Lang
  setLang: (l: Lang) => void
}

const I18nContext  = createContext<I18nCtx>({ lang: 'fr', setLang: () => {} })
const ContentCtx   = createContext<SiteContent>(contentFR)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  // Lecture de la préférence sauvegardée
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sw_lang') as Lang | null
      if (stored === 'fr' || stored === 'en') setLangState(stored)
    } catch {
      // localStorage non disponible (SSR, incognito strict)
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('sw_lang', l) } catch { /* ignore */ }
  }

  const c = lang === 'en' ? (contentEN as unknown as SiteContent) : contentFR

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      <ContentCtx.Provider value={c}>
        {children}
      </ContentCtx.Provider>
    </I18nContext.Provider>
  )
}

export const useLang    = () => useContext(I18nContext)
export const useContent = () => useContext(ContentCtx)
