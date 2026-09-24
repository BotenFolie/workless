// Polices : Geist (titres + texte), Geist Mono (chiffres, positions, prix)

import { Geist, Geist_Mono } from 'next/font/google'

export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const fontVars = `${geist.variable} ${geistMono.variable}`
