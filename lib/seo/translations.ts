import { productionAbsoluteUrl } from './config'

// Pages that are the same content in English and Bahasa Indonesia. List true
// translations only: two posts on the same topic (cursor-ai-pricing and
// tentang-skema-harga-cursor-ide, for example) are separate articles, and
// hreflang between them tells Google they are interchangeable.
export const translationPairs: ReadonlyArray<{ en: string; id: string }> = [
  {
    en: '/services/wordpress/woocommerce',
    id: '/services/wordpress/jasa-woocommerce',
  },
]

export function languageAlternates(path: string): Record<string, string> | undefined {
  const pair = translationPairs.find((p) => p.en === path || p.id === path)
  if (!pair) return undefined
  return {
    en: productionAbsoluteUrl(pair.en),
    id: productionAbsoluteUrl(pair.id),
    'x-default': productionAbsoluteUrl(pair.en),
  }
}
