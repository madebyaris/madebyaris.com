export const productionUrl = 'https://madebyaris.com' as const

export const siteConfig = {
  name: 'Made by Aris',
  shortName: 'MadeByAris',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl,
  description:
    'AI-optimized full-stack developer and Cursor Ambassador Indonesia. Enterprise Next.js, React, and WordPress apps with modern AI workflows. 13+ years experience, Indonesia-based.',
  author: 'Aris Setiawan',
  locale: 'en_US',
  logo: '/logo.png',
  ogImage: '/og.png',
  authorImage: '/aris.png',
  sameAs: [
    'https://github.com/madebyaris',
    'https://www.linkedin.com/in/arissetia',
    'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe',
    'https://x.com/arisberikut',
  ],
  twitterHandle: '@arisberikut',
} as const

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, '')
  if (!path || path === '/') return base
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
