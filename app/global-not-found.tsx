import type { Metadata } from 'next'
import RootDoc from '@/components/RootDoc'
import NotFoundView from '@/components/NotFoundView'
import './globals.css'

export const metadata: Metadata = {
  title: 'Page introuvable | Stripwork',
  robots: { index: false },
}

export default function GlobalNotFound() {
  return (
    <RootDoc locale="fr">
      <NotFoundView locale="fr" />
    </RootDoc>
  )
}
