// Polices : Anybody (titres, axe de largeur), Schibsted Grotesk (texte), Martian Mono (données)

import { Anybody, Martian_Mono, Schibsted_Grotesk } from 'next/font/google'

export const anybody = Anybody({
  subsets: ['latin'],
  axes: ['wdth'],
  style: ['normal'],
  variable: '--font-anybody',
  display: 'swap',
})

export const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
})

export const martian = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-martian',
  display: 'swap',
})

export const fontVars = `${anybody.variable} ${schibsted.variable} ${martian.variable}`
