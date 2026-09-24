import type { Metadata } from 'next'
import { staticSlugs } from '@/lib/routes'
import { metadataFor, renderPage } from '@/lib/render'

type Props = { params: Promise<{ slug?: string[] }> }

export const dynamicParams = false

export function generateStaticParams() {
  return staticSlugs('es')
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return metadataFor('es', slug)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return renderPage('es', slug)
}
