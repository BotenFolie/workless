// Document HTML commun aux deux langues (chaque langue a sa racine)

import type { ReactNode } from 'react'
import { fontVars } from '@/lib/fonts'
import type { Locale } from '@/lib/routes'

// Posé avant le premier rendu : active la scène scrubbée si JS et mouvement autorisé
const BOOT = `(function(){var d=document.documentElement;d.classList.add('js');try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('scrub')}catch(e){}})()`

export default function RootDoc({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
