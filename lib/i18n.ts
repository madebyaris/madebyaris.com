// Indonesian blog posts confirmed against the live WordPress titles (October 2026).
// The mixed post wordpress-vs-nextjs-when-worth-it stays English: Indonesian title, English body.
const INDONESIAN_BLOG_SLUG_LIST = [
  'migrasi-wordpress-ke-nextjs-bisnis',
  'apakah-cursor-ai-gratis',
  'jasa-website-company-profile-nextjs-vs-template',
  'jasa-pembuatan-website-jakarta-nextjs',
  'cara-menggunakan-cursor-ai',
  'apa-itu-cursor-ai',
  'technical-debt-pada-aplikasi-buatan-ai',
  'tentang-skema-harga-cursor-ide',
  'tentang-next-js-dan-php',
  'next-js-pada-vps-murah',
] as const

export const INDONESIAN_BLOG_SLUGS: readonly string[] = INDONESIAN_BLOG_SLUG_LIST

const INDONESIAN_SLUG_PATTERN =
  /(^|-)(apa-itu|apakah|cara|tentang|jasa|migrasi|mengenal|buatan)(-|$)/

export function isIndonesianSlug(slug: string): boolean {
  return (
    (INDONESIAN_BLOG_SLUGS as readonly string[]).includes(slug) ||
    INDONESIAN_SLUG_PATTERN.test(slug)
  )
}
