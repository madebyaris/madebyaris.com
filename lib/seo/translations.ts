import { productionAbsoluteUrl } from './config'

// Pages that are the same content in English and Bahasa Indonesia. List true
// translations only: two posts on the same topic (cursor-ai-pricing and
// tentang-skema-harga-cursor-ide, for example) are separate articles, and
// hreflang between them tells Google they are interchangeable.
export const translationPairs: ReadonlyArray<{ en: string; id: string }> = [
  {
    en: '/ai-implementation',
    id: '/jasa-implementasi-ai',
  },
  {
    en: '/product-engineering',
    id: '/jasa-pengembangan-produk',
  },
  {
    en: '/services/react-app-improvement',
    id: '/services/jasa-optimasi-react',
  },
  {
    en: '/services/vite-development',
    id: '/services/jasa-vite',
  },
  {
    en: '/services/fastify-development',
    id: '/services/jasa-fastify',
  },
  {
    en: '/services/database-optimization',
    id: '/services/jasa-optimasi-database',
  },
  {
    en: '/services/clean-code-for-teams-and-ai',
    id: '/services/jasa-clean-code',
  },
  {
    en: '/services/saas-development',
    id: '/services/saas-development/jasa-pembuatan-aplikasi-web',
  },
  {
    en: '/services/seo',
    id: '/services/seo/jasa-seo',
  },
  {
    en: '/services/wordpress',
    id: '/services/wordpress/jasa-wordpress',
  },
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
