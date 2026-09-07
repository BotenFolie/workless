'use client'

import { createContext, useContext, useState } from 'react'

type DiagnosticContextType = {
  isOpen: boolean
  source: string | null
  open: (source?: string) => void
  close: () => void
}

const DiagnosticContext = createContext<DiagnosticContextType>({
  isOpen: false,
  source: null,
  open: () => {},
  close: () => {},
})

export function DiagnosticProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [source, setSource] = useState<string | null>(null)

  return (
    <DiagnosticContext.Provider
      value={{
        isOpen,
        source,
        open: (src) => { setSource(src ?? null); setIsOpen(true) },
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </DiagnosticContext.Provider>
  )
}

export const useDiagnostic = () => useContext(DiagnosticContext)
