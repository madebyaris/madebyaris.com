import { authorProfile, productionUrl, siteConfig } from './config'
import { decodeHtmlEntities, stripHtml } from './utils'

interface LlmsLink {
  title: string
  path: string
  summary: string
}

const services: LlmsLink[] = [
  {
    title: 'Web development services',
    path: '/services',
    summary: 'Problem-led hub for a new site, a web app, WordPress, PHP, maintenance, or technical SEO. Next.js is the flagship stack.',
  },
  {
    title: 'Next.js development',
    path: '/services/nextjs-development',
    summary: 'Next.js development services: new App Router products and WordPress-to-Next.js migrations.',
  },
  {
    title: 'Web application development',
    path: '/services/web-application-development',
    summary: 'Web application development services for logins, dashboards, and data in the browser.',
  },
  {
    title: 'Website maintenance',
    path: '/services/website-maintenance',
    summary: 'Website maintenance services: updates and small fixes after launch.',
  },
  {
    title: 'Technical SEO',
    path: '/services/technical-seo',
    summary: 'Technical SEO services for crawl, index, metadata, and speed. No content writing and no link building.',
  },
  {
    title: 'AI development',
    path: '/services/ai-development',
    summary: 'AI features, agents, chatbots, and model integrations inside real products.',
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
    title: 'Jasa pembuatan website (Bahasa Indonesia)',
    path: '/jasa-pembuatan-website',
    summary: 'Indonesian hub for company sites, WordPress, custom Next.js, web apps, maintenance, and a WordPress SEO audit.',
  },
  {
    title: 'Jasa pembuatan website company profile',
    path: '/jasa-pembuatan-website/company-profile',
    summary: 'Company profile websites for Indonesian businesses.',
  },
  {
    title: 'Jasa pembuatan website WordPress',
    path: '/jasa-pembuatan-website/wordpress',
    summary: 'WordPress websites with the editor staying in wp-admin.',
  },
  {
    title: 'Jasa pembuatan aplikasi web',
    path: '/jasa-pembuatan-aplikasi-web',
    summary: 'Browser apps with accounts and dashboards. Native mobile apps are outside this offer.',
  },
  {
    title: 'Jasa maintenance website',
    path: '/jasa-maintenance-website',
    summary: 'Ongoing website care in Bahasa Indonesia.',
  },
  {
    title: 'Jasa SEO WordPress',
    path: '/jasa-seo-wordpress',
    summary: 'WordPress technical SEO audit, starting at Rp1.500.000. No content writing and no link building.',
  },
  {
    title: 'Jasa Next.js Indonesia (Bahasa Indonesia)',
    path: '/services/nextjs-development/nextjs-indonesia',
    summary: 'Custom Next.js websites for Indonesian businesses.',
  },
  {
    title: 'Next.js agency Indonesia',
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
    `Build covers websites, web apps, WordPress, PHP, maintenance, technical SEO, and AI features. Next.js is the flagship stack for new products. Level up is Cursor mentoring for developers and teams.`,
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
