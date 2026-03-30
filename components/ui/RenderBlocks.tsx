import type { ContentBlock } from '@/lib/content'

interface RenderBlocksProps {
  blocks: ContentBlock[]
  textClass?: string
  listItemClass?: string
}

// Renderer générique pour blocs de copy structuré (paragraphes + listes)
export default function RenderBlocks({
  blocks,
  textClass = 'font-inter text-neutral text-base leading-relaxed',
  listItemClass = 'font-inter text-neutral text-base',
}: RenderBlocksProps) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.type === 'p') {
          return (
            <p key={i} className={textClass} style={{ whiteSpace: 'pre-line' }}>
              {block.text}
            </p>
          )
        }
        return (
          <ul key={i} className="space-y-1.5 pl-0">
            {block.items.map((item, j) => (
              <li key={j} className={`flex items-start gap-2 ${listItemClass}`}>
                <span className="text-accent mt-0.5 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
