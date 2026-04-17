'use client'

import { DiagnosticProvider } from '@/lib/diagnosticContext'
import { LanguageProvider } from '@/lib/i18n'
import DiagnosticModal from '@/components/DiagnosticModal'
import LenisProvider from './LenisProvider'
import CustomCursor from './CustomCursor'
import PageLoader from './PageLoader'
import ScrollProgress from './ScrollProgress'
import NoiseOverlay from './NoiseOverlay'
import WhatsAppButton from './WhatsAppButton'

// Agrège tous les providers et overlays globaux côté client
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <DiagnosticProvider>
        <LenisProvider>
          <PageLoader />
          <ScrollProgress />
          <CustomCursor />
          <NoiseOverlay />
          <DiagnosticModal />
          <WhatsAppButton />
          {children}
        </LenisProvider>
      </DiagnosticProvider>
    </LanguageProvider>
  )
}
