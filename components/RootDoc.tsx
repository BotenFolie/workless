// Document HTML commun aux deux langues (chaque langue a sa racine)

import type { ReactNode } from 'react'
import { fontVars } from '@/lib/fonts'
import type { Locale } from '@/lib/routes'

// Posé avant le premier rendu : active la scène scrubbée si JS et mouvement autorisé
const BOOT = `(function(){var d=document.documentElement;d.classList.add('js');try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('scrub')}catch(e){}})()`

// Provenance des visites (lot D) : cookie propriétaire, lu uniquement à l'envoi d'un formulaire.
// sw_src = première visite (jamais écrasé) · sw_last = dernière visite avec paramètres de campagne. 90 jours.
const ATTR = `(function(){try{var q=new URLSearchParams(location.search),k=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'],t={},c=false;k.forEach(function(n){var v=q.get(n);if(v){t[n]=v.slice(0,300);c=true}});var r=document.referrer;try{if(r&&new URL(r).hostname!==location.hostname)t.ref=r.slice(0,300)}catch(e){}t.landing=(location.pathname+location.search).slice(0,300);t.at=new Date().toISOString();var set=function(n){document.cookie=n+'='+encodeURIComponent(JSON.stringify(t))+';path=/;max-age=7776000;samesite=lax'+(location.protocol==='https:'?';secure':'')};if(!/(^|; )sw_src=/.test(document.cookie))set('sw_src');if(c)set('sw_last')}catch(e){}})()`

export default function RootDoc({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <script dangerouslySetInnerHTML={{ __html: ATTR }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
