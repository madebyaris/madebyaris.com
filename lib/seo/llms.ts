import { authorProfile, productionUrl, siteConfig } from './config'
import { decodeHtmlEntities, stripHtml } from './utils'

interface LlmsLink {
  title: string
  path: string
  summary: string
}

const services: LlmsLink[] = [
  {
    title: 'Next.js development',
    path: '/services/nextjs-development',
    summary: 'Hire Aris to build or migrate a Next.js App Router product: new builds, WordPress-to-Next.js migrations, performance work.',
  },
  {
    title: 'AI development',
    path: '/services/ai-development',
    summary: 'AI features, agents, chatbots, and model integrations inside real Next.js products.',
  },
  {
    title: 'Cursor mentoring (Level up)',
    path: '/services/vibe-code-friend',
    summary: 'Team training on Cursor: project rules, review habits for AI-generated code, and a 30-day rollout.',
  },
  {
    title: 'Headless WordPress with Next.js',
    path: '/services/wordpress/headless-development',
    summary: 'Keep WordPress as the editor and ship a Next.js front end on Vercel, with SEO carried over.',
  },
  {
    title: 'WordPress development',
    path: '/services/wordpress',
    summary: 'Custom themes, plugins, optimization, and headless WordPress.',
  },
  {
    title: 'Vercel deployment for Next.js',
    path: '/services/nextjs-development/vercel',
    summary: 'Deploying and tuning Next.js on Vercel.',
  },
  {
    title: 'Next.js SEO',
    path: '/services/nextjs-development/nextjs-seo',
    summary: 'Technical SEO for Next.js App Router sites: metadata, schema, sitemaps, and Core Web Vitals.',
  },
  {
    title: 'PHP development',
    path: '/services/php-development',
    summary: 'Custom PHP applications, APIs, databases, and legacy modernization.',
  },
  {
    title: 'Jasa Next.js Indonesia (Bahasa Indonesia)',
    path: '/services/nextjs-development/agency-indonesia',
    summary: 'Next.js specialist for Indonesian companies, working solo with trusted partners when needed.',
  },
]

const profilePages: LlmsLink[] = [
  { title: 'About Aris Setiawan', path: '/about', summary: 'Background, work history since 2013, skills, and how to work together.' },
  { title: 'Cursor Ambassador Indonesia', path: '/cursor-ambassador', summary: 'What the role involves, Cursor FAQs, and free Cursor guides.' },
  { title: 'SpaceXAI Ambassador', path: '/spacexai-ambassador', summary: 'The SpaceXAI ambassador role after Cursor became part of SpaceX.' },
  { title: 'MiniMax Dev Community Expert', path: '/minimax-ambassador', summary: 'Community work with MiniMax models for coding.' },
  { title: 'Projects', path: '/projects', summary: 'Selected client and open-source projects.' },
  { title: 'Contact', path: '/contact', summary: 'Hire Aris or book Cursor mentoring. English and Indonesian.' },
]

export interface LlmsPost {
  slug: string
  title: string
  excerpt?: string
}

const link = (item: { title: string; path: string; summary?: string }) =>
  `- [${item.title}](${productionUrl}${item.path})${item.summary ? `: ${item.summary}` : ''}`

function postSummary(excerpt?: string): string | undefined {
  if (!excerpt) return undefined
  const text = decodeHtmlEntities(stripHtml(excerpt)).replace(/\s*\[…\]|\s*\[\.\.\.\]/g, '').trim()
  if (!text) return undefined
  return text.length > 180 ? `${text.slice(0, 177).replace(/\s+\S*$/, '')}…` : text
}

export function buildLlmsTxt(posts: LlmsPost[] = []): string {
  const facts = [
    `Name: ${authorProfile.name}. Brand and website: ${siteConfig.name} (${productionUrl}).`,
    `Role: ${authorProfile.jobTitle}, working independently since 2015.`,
    `Experience: ${authorProfile.yearsExperience}+ years shipping web products.`,
    ...authorProfile.roles.map((role) => `Community role: ${role}.`),
    `Location: ${authorProfile.city}, ${authorProfile.region}, ${authorProfile.country}. Works remotely with teams worldwide.`,
    `Languages: ${authorProfile.languages.join(' and ')}.`,
    `Two ways to work together: Build (hire Aris to ship Next.js, WordPress, or AI products) and Level up (Cursor mentoring for developers and teams).`,
    `Contact: ${productionUrl}/contact or ${siteConfig.email}.`,
  ]

  const sections = [
    `# ${siteConfig.name}`,
    `> ${siteConfig.description}`,
    `This site is built with Next.js on Vercel. Blog posts are written in WordPress (headless) and cover Next.js, Cursor, AI-assisted development, WordPress, and SEO. English posts and Indonesian (Bahasa Indonesia) posts are both published.`,
    `## Key facts\n\n${facts.map((fact) => `- ${fact}`).join('\n')}`,
    `## Services\n\n${services.map(link).join('\n')}`,
    `## About and profiles\n\n${profilePages.map(link).join('\n')}`,
  ]

  if (posts.length) {
    sections.push(
      `## Articles\n\n${posts
        .map((post) =>
          link({
            title: decodeHtmlEntities(stripHtml(post.title)),
            path: `/blog/${post.slug}`,
            summary: postSummary(post.excerpt),
          }),
        )
        .join('\n')}`,
    )
  }

  sections.push(`## Optional\n\n- [Sitemap](${productionUrl}/sitemap.xml)\n- [Blog index](${productionUrl}/blog)`)

  return `${sections.join('\n\n')}\n`
}
