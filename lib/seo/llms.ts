import { authorProfile, productionUrl, siteConfig } from './config'
import { decodeHtmlEntities, stripHtml } from './utils'
import { blogCategories, blogCategoryPath } from '../topics'
import { cursorRulePath, cursorRules } from '../topics/cursor-rules'

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
    title: 'AI MVP development',
    path: '/services/ai-development/ai-mvp',
    summary: 'Turn an AI product idea into a launch-ready MVP: sign-up, payments, the core AI workflow on real inputs, and spend caps per user.',
  },
  {
    title: 'AI integration services',
    path: '/services/ai-development/ai-integration',
    summary: 'Add AI features to an existing product or business: answers from your docs, reply drafts, document extraction, and agents with approval steps.',
  },
  {
    title: 'SaaS development',
    path: '/services/saas-development',
    summary: 'Custom SaaS built to stay cheap to run: little work per request, scale from zero hosting, and the expected monthly cost in the plan.',
  },
  {
    title: 'Technical SEO services',
    path: '/services/seo',
    summary: 'Technical SEO audits, keyword and competitor research, fixes made in the code, and monthly SEO with rank tracking in RankMySEO.',
  },
  {
    title: 'Jasa SEO (Bahasa Indonesia)',
    path: '/services/seo/jasa-seo',
    summary: 'Audit SEO, riset keyword, perbaikan langsung di kode, dan SEO bulanan untuk bisnis di Indonesia.',
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
    summary: 'Custom themes, plugins, optimization, maintenance, redesigns, migrations, WooCommerce, and headless WordPress.',
  },
  {
    title: 'WordPress maintenance services',
    path: '/services/wordpress/maintenance',
    summary: 'Monthly WordPress maintenance and support: updates tested on staging, off-site backups, monitoring, and malware cleanup.',
  },
  {
    title: 'WordPress migration service',
    path: '/services/wordpress/migration',
    summary: 'Move WordPress to a new host, domain, or stack with a redirect map and Search Console checks so rankings carry over.',
  },
  {
    title: 'Jasa pembuatan website WordPress (Bahasa Indonesia)',
    path: '/services/wordpress/jasa-wordpress',
    summary: 'Website WordPress dengan tema custom, perbaikan website, maintenance, dan migrasi hosting.',
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

const guides: LlmsLink[] = [
  {
    title: 'Cursor guide for shipping teams',
    path: '/guides/cursor',
    summary: 'Reading order for every Cursor post, project rules to copy as .mdc files, a Cursor vs Copilot job split, a dated cost estimator, and recent Cursor releases.',
  },
  ...cursorRules.map((rule) => ({ title: `${rule.title} (${rule.file})`, path: cursorRulePath(rule.file), summary: rule.summary })),
  ...blogCategories.map((category) => ({ title: category.title, path: blogCategoryPath(category.slug), summary: category.description })),
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
    `## Guides\n\n${guides.map(link).join('\n')}`,
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

  sections.push(
    `## Optional\n\n- [Sitemap](${productionUrl}/sitemap.xml)\n- [Blog index](${productionUrl}/blog)\n- [RSS feed](${productionUrl}/feed.xml)\n- [Full article text](${productionUrl}/llms-full.txt)`,
  )

  return `${sections.join('\n\n')}\n`
}

// Rough HTML to markdown for WordPress post bodies. Enough structure for an AI
// engine to quote headings, lists, and code without the markup.
function htmlToText(html: string): string {
  const text = html
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_m, code: string) => `\n\`\`\`\n${stripTags(code)}\n\`\`\`\n`)
    .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_m, level: string, inner: string) => `\n${'#'.repeat(Math.min(6, Math.max(3, Number(level) + 1)))} ${stripHtml(inner)}\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_m, inner: string) => `\n- ${stripHtml(inner)}`)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|ul|ol|table|tr|blockquote)>/gi, '\n\n')
    .replace(/<\/t[dh]>/gi, ' | ')
  return decodeHtmlEntities(stripTags(text))
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

export interface LlmsFullPost extends LlmsPost {
  content: string
  date: string
  modified: string
}

export function buildLlmsFullTxt(posts: LlmsFullPost[]): string {
  const header = [
    `# ${siteConfig.name}: full article text`,
    `> Every blog post by ${authorProfile.name}, as plain text. The short index is at ${productionUrl}/llms.txt.`,
  ].join('\n\n')
  const articles = posts.map((post) =>
    [
      `## ${decodeHtmlEntities(stripHtml(post.title))}`,
      `URL: ${productionUrl}/blog/${post.slug}`,
      `Published: ${post.date.slice(0, 10)}. Updated: ${post.modified.slice(0, 10)}.`,
      htmlToText(post.content),
    ].join('\n\n'),
  )
  return `${[header, ...articles].join('\n\n---\n\n')}\n`
}
