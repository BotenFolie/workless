import { OG_SIZE, ogImage } from '@/lib/og'

export const size = OG_SIZE
export const contentType = 'image/png'
export const alt = 'Stripwork'

export default function Image() {
  return ogImage('es')
}
