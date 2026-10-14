export const productionUrl = 'https://madebyaris.com' as const

export const siteConfig = {
  name: 'Made by Aris',
  shortName: 'MadeByAris',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl,
  description:
    'Aris Setiawan builds Next.js, WordPress, and AI products for teams worldwide and mentors developers on Cursor workflows. 13+ years. First Cursor Ambassador in Indonesia.',
  author: 'Aris Setiawan',
  titleSuffix: ' | Aris Setiawan',
  locale: 'en_US',
  logo: '/logo.png',
  ogImage: '/og.png',
  authorImage: '/aris.png',
  email: 'arissetia.m@gmail.com',
  sameAs: [
    'https://github.com/madebyaris',
    'https://www.linkedin.com/in/arissetia',
    'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe',
    'https://x.com/arisberikut',
  ],
  twitterHandle: '@arisberikut',
} as const

// Facts about the author that appear in schema, llms.txt, and copy. Keep them
// in one place so every surface AI engines read tells the same story.
export const authorProfile = {
  name: 'Aris Setiawan',
  jobTitle: 'Full-Stack Developer (Next.js, WordPress, AI)',
  yearsExperience: 13,
  city: 'Sidoarjo',
  region: 'East Java',
  country: 'Indonesia',
  countryCode: 'ID',
  languages: ['English', 'Indonesian'],
  roles: [
    'First Cursor Ambassador in Indonesia',
    'SpaceXAI Ambassador (Indonesia)',
    'MiniMax Dev Community Expert',
  ],
  programs: [
    { name: 'Cursor Ambassador Program', host: 'Cursor', hostUrl: 'https://cursor.com', page: '/cursor-ambassador' },
    { name: 'SpaceXAI Ambassador Program', host: 'SpaceXAI', page: '/spacexai-ambassador' },
    { name: 'MiniMax Dev Community Expert', host: 'MiniMax', hostUrl: 'https://www.minimax.io', page: '/minimax-ambassador' },
  ],
  // Past employers and companies from the /about timeline.
  pastOrganizations: [
    { name: 'SAB Digital Marketing Agency' },
    { name: 'Raja Kreatif Asia' },
    { name: 'Hongkiat.com', url: 'https://www.hongkiat.com' },
    { name: 'PT. DheZign Online Solution' },
    { name: 'SEREWare' },
    { name: 'PT. Elkabumi Caraka Daya' },
  ],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'Headless WordPress',
    'WordPress plugin and theme development',
    'PHP',
    'AI integration',
    'AI agents',
    'Cursor',
    'AI-assisted software development',
    'Technical SEO',
    'Vercel',
    'Web performance',
  ],
} as const

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, '')
  if (!path || path === '/') return base
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

// Schema @ids always use the production host so every page, preview, and
// crawler resolves the same entities.
export function productionAbsoluteUrl(path: string): string {
  if (!path || path === '/') return productionUrl
  return `${productionUrl}${path.startsWith('/') ? path : `/${path}`}`
}
