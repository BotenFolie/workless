'use client'

import { DiagnosticProvider } from '@/lib/diagnosticContext'
import DiagnosticModal from '@/components/DiagnosticModal'
import LenisProvider from './LenisProvider'
import CustomCursor from './CustomCursor'
import PageLoader from './PageLoader'
import ScrollProgress from './ScrollProgress'
import NoiseOverlay from './NoiseOverlay'

// Agrège tous les providers et overlays globaux côté client
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DiagnosticProvider>
      <LenisProvider>
        <PageLoader />
        <ScrollProgress />
        <CustomCursor />
        <NoiseOverlay />
        <DiagnosticModal />
        {children}
      </LenisProvider>
    </DiagnosticProvider>
  )
}
