import type { Category } from '../types'
import type { SchemaThing } from '../seo/schema'

export interface TopicGroup {
  title: string
  summary: string
  slugs: string[]
}

export interface TopicHub {
  slug: string
  path: string
  categorySlug: string
  name: string
  entity: SchemaThing
  groups: TopicGroup[]
}

export interface BlogCategoryCopy {
  slug: string
  title: string
  heading: string
  accent: string
  description: string
  intro: string
  hubPath?: string
}

// Unlisted posts in the hub's category still render under "More Cursor posts",
// so a new WordPress post shows up without a deploy.
export const cursorHub: TopicHub = {
  slug: 'cursor',
  path: '/guides/cursor',
  categorySlug: 'cursor',
  name: 'Cursor',
  // Brand, because Google validates any SoftwareApplication node as a rich result
  // candidate and flags it without offers or ratings.
  entity: { '@type': 'Brand', name: 'Cursor', url: 'https://cursor.com' },
  groups: [
    {
      title: 'Start here',
      summary: 'Set up Cursor on a real repo and learn the loop I use on client work.',
      slugs: [
        'cursor-ai-tutorial-for-beginners',
        'how-to-use-cursor-ai-effectively',
        'how-to-use-cursor-ai-to-build-an-app',
      ],
    },
    {
      title: 'Rules, context, and setup',
      summary: 'Project rules, MCP servers, and picking the right surface for the task.',
      slugs: ['cursor-project-rules', 'cursor-mcp-setup-for-shipping', 'chat-vs-composer-in-cursor'],
    },
    {
      title: 'Shipping and review',
      summary: 'Keep AI-written code reviewable so it still looks like your codebase next month.',
      slugs: [
        'cursor-agent-for-shipping',
        'cursor-ai-workflow-for-production',
        'pr-review-checklist-for-ai-generated-code',
        'cursor-vibe-coding-workflow',
      ],
    },
    {
      title: 'Teams, cost, and tool choice',
      summary: 'Rolling Cursor out to a team, what it costs, and how it compares.',
      slugs: [
        'how-teams-should-roll-out-cursor-in-the-first-30-days',
        'cursor-ai-pricing',
        'cursor-ai-vs-copilot',
        'cursor-ai-indonesia',
      ],
    },
    {
      title: 'Bahasa Indonesia',
      summary: 'Panduan Cursor dalam Bahasa Indonesia.',
      slugs: ['apa-itu-cursor-ai', 'cara-menggunakan-cursor-ai', 'apakah-cursor-ai-gratis', 'tentang-skema-harga-cursor-ide'],
    },
  ],
}

export const topicHubs: TopicHub[] = [cursorHub]

export const blogCategories: BlogCategoryCopy[] = [
  {
    slug: 'cursor',
    title: 'Cursor guides and tutorials',
    heading: 'Cursor',
    accent: 'guides from client work',
    description:
      'Every Cursor post I have written: project rules, MCP setup, PR review for AI-written code, team rollout, and pricing. In English and Indonesian.',
    intro:
      'Every Cursor post on the blog, newest first. For a reading order, rules you can copy, and a cost estimate, start with the Cursor guide.',
    hubPath: '/guides/cursor',
  },
  {
    slug: 'nextjs',
    title: 'Next.js guides and tutorials',
    heading: 'Next.js',
    accent: 'guides from client work',
    description:
      'Next.js posts from client work: App Router patterns, headless WordPress, migrations, caching on Vercel, SEO metadata, and what a Next.js developer costs.',
    intro:
      'Every Next.js post on the blog, newest first. Most of them come out of client builds.',
  },
  {
    slug: 'ai',
    title: 'AI development guides',
    heading: 'AI development',
    accent: 'what I ship and how',
    description:
      'Posts on building AI features and coding with AI agents: Cursor workflows, MCP, reviewing AI-written code, and AI features inside Next.js apps.',
    intro:
      'Every AI development post on the blog, newest first. These cover both sides: coding with AI agents and shipping AI features to users.',
  },
  {
    slug: 'wordpress',
    title: 'WordPress and headless WordPress guides',
    heading: 'WordPress',
    accent: 'and headless WordPress',
    description:
      'WordPress posts from client work: headless WordPress with Next.js, when a site should move to Next.js, and picking a VPS that keeps WordPress fast.',
    intro:
      'Every WordPress post on the blog, newest first. This site runs on headless WordPress too, so the setups here are ones I use.',
  },
]

export function blogCategoryCopy(slug: string): BlogCategoryCopy | undefined {
  return blogCategories.find((category) => category.slug === slug)
}

export function blogCategoryPath(slug: string): string {
  return `/blog/category/${slug}`
}

const categoryPriority = ['cursor', 'wordpress', 'nextjs', 'ai']

// WordPress returns categories in id order, and most posts also carry the
// catch-all "tech" category, so the first entry is rarely the useful one.
export function primaryCategory(categories: Category[]): Category | undefined {
  for (const slug of categoryPriority) {
    const match = categories.find((category) => category.slug === slug)
    if (match) return match
  }
  return categories[0]
}

export function hubForCategory(slug: string | undefined): TopicHub | undefined {
  if (!slug) return undefined
  return topicHubs.find((hub) => hub.categorySlug === slug)
}
