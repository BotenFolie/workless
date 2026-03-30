'use client'

import { createContext, useContext, useState } from 'react'

type DiagnosticContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const DiagnosticContext = createContext<DiagnosticContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
})

export function DiagnosticProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DiagnosticContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </DiagnosticContext.Provider>
  )
}

export const useDiagnostic = () => useContext(DiagnosticContext)
