import { Suspense } from 'react'
import MerciContent from './MerciContent'

export const metadata = {
  title: 'Votre diagnostic — Stripwork',
  robots: 'noindex',
}

export default function MerciPage() {
  return (
    <Suspense>
      <MerciContent />
    </Suspense>
  )
}
