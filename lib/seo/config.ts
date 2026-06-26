export const productionUrl = 'https://madebyaris.com' as const

export const siteConfig = {
  name: 'Made by Aris',
  shortName: 'MadeByAris',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl,
  description:
    'Senior Full-Stack Developer specializing in Next.js, React, WordPress, and enterprise-scale web applications.',
  author: 'Aris Setiawan',
  locale: 'en_US',
  logo: '/logo.png',
  ogImage: '/og.png',
  authorImage: '/aris.png',
  sameAs: [
    'https://github.com/madebyaris',
    'https://www.linkedin.com/in/arissetia',
    'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe',
  ],
  twitterHandle: '@madebyaris',
} as const

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, '')
  if (!path || path === '/') return base
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
