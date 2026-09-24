import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import RootDoc from '@/components/RootDoc'
import { SITE_URL } from '@/lib/routes'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Stripwork',
}

export const viewport: Viewport = { themeColor: '#ffffff' }

export default function FrLayout({ children }: { children: ReactNode }) {
  return <RootDoc locale="fr">{children}</RootDoc>
}
