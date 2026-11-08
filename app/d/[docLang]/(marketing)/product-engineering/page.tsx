import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowUpRight,
  Cpu,
  Layers,
  Rocket,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/product-engineering'
const pageTitle = 'Product engineering for SaaS, mobile, Rust and AI'
const pageDescription =
  'I lead SaaS, mobile, Rust, commerce, go-to-market and AI builds, with trusted partners and AI agents so we ship fast. 13+ years. Projects from $5,000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/saas.jpg',
  keywords: [
    'product engineering services',
    'SaaS development services',
    'Rust development',
    'mobile app development',
    'GTM engineering',
    'ecommerce development services',
    'AI development',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const builds = [
  {
    icon: Layers,
    title: 'SaaS',
    body: 'A SaaS built to cost little to run, with the expected monthly bill written into the plan.',
    href: '/services/saas-development',
    cta: 'See SaaS development',
  },
  {
    icon: Smartphone,
    title: 'Mobile apps',
    body: 'Mobile apps for your product, built and shipped by the same team that builds everything else.',
  },
  {
    icon: Cpu,
    title: 'Rust software',
    body: 'Fast command-line and desktop software, and backends where speed and memory use matter. Public examples: nca and Chaca Scanner.',
    href: '#open-source',
    cta: 'Read the code',
  },
  {
    icon: Target,
    title: 'Go-to-market apps',
    body: 'Apps for go-to-market teams: tools that help sales and marketing find, qualify, and reach customers.',
  },
  {
    icon: ShoppingCart,
    title: 'Commerce',
    body: 'Online stores and commerce platforms, with payments and checkout tested before launch.',
    href: '/services/wordpress/woocommerce',
    cta: 'See WooCommerce work',
  },
  {
    icon: Sparkles,
    title: 'AI inside the product',
    body: 'Assistants, agents, and LLM features that run in your product with test cases, logging, and spend caps.',
    href: '/ai-implementation',
    cta: 'See AI implementation',
  },
]

const speedPoints = [
  {
    title: 'AI agents do much of the build',
    body: 'Agents write and test large parts of the code, so a first working version reaches you early.',
  },
  {
    title: 'I lead and own the architecture',
    body: 'One person decides the software, stack, network, and hosting, so the pieces fit together.',
  },
  {
    title: 'Trusted partners when needed',
    body: 'When a project needs more hands, partners I trust join, and I tell you before we start.',
  },
  {
    title: 'Your repo, your code',
    body: 'The work lands in your repository. Under my terms you own the deliverables once you have paid in full.',
  },
]

const stackGroups = [
  {
    title: 'Behind rankmyseo.com',
    items: ['React', 'Vite', 'React Router', 'Cloudflare', 'Cloudflare Turnstile', 'An MCP server for AI agents'],
  },
  {
    title: 'In the open-source RankMySEO packages',
    items: ['TypeScript', 'Hono', 'Drizzle ORM', 'PostgreSQL', 'SQLite', 'Turborepo and pnpm', 'Vitest'],
  },
  {
    title: 'In my other projects',
    items: ['Next.js', 'Rust', 'Tauri', 'PHP and Laravel', 'Headless WordPress', 'Vercel'],
  },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does a product build cost?',
    answer:
      'It depends on scope. Most projects start from $5,000. After a short scoping call you get a written plan with milestones and a quote before any code is written.',
  },
  {
    question: 'Who builds it?',
    answer:
      'I lead every project and answer your messages myself. AI agents do much of the build, and trusted partners join when a project needs more hands. I tell you before we start.',
  },
  {
    question: 'Which stack do you use?',
    answer:
      'The stack behind RankMySEO: React with Vite on the front end, Cloudflare in front, and TypeScript, Hono, and Drizzle in its open-source packages. I also ship Next.js and Rust. If your project needs something else, tell me and I say whether I am the right fit.',
  },
  {
    question: 'Do you work with teams outside Indonesia?',
    answer:
      'Yes. I am based in Sidoarjo, Indonesia (UTC+7) and work with teams in Europe, Asia, the US, and the Middle East. I work Monday to Saturday, 9:00 to 17:00 WIB, in English or Indonesian, and we set a weekly check-in time during scoping.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Product engineering', path: pagePath },
  ],
  service: {
    name: pageTitle,
    description: pageDescription,
    serviceType: 'Product engineering',
    areaServed: 'Worldwide',
  },
})

export default function ProductEngineeringPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Product engineering</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Rocket className="w-4 h-4 text-orange-500" />, label: 'Product engineering' }}
        title="Build your product fast,"
        accent="with an AI-powered team"
        actions={
          <>
            <Link
              href={contactHref('product')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Send me your product idea</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/ai-implementation"
              className="btn-secondary hover:bg-zinc-50 transition-all inline-flex text-sm font-medium text-black/60 rounded-full py-3 px-6 items-center"
            >
              See AI implementation
            </Link>
          </>
        }
      >
        <p>
          SaaS, mobile apps, Rust software, commerce, and go-to-market apps. I lead every project and you talk to me directly.
          AI agents do much of the build and trusted partners join when a project needs more hands, which is how we ship fast.
        </p>
      </PageHero>

      <section className="mb-16" aria-labelledby="what-we-build">
        <div className="text-center mb-10">
          <h2 id="what-we-build" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What we build
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {builds.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="p-2 bg-zinc-100 rounded-lg inline-flex mb-3">
                <item.icon className="w-4 h-4 text-zinc-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-3">{item.body}</p>
              {item.href && item.cta && (
                <Link href={item.href} className={`${linkClass} text-sm`}>
                  {item.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-4xl mx-auto" aria-labelledby="how-we-ship-fast">
        <h2 id="how-we-ship-fast" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-8">
          How we ship fast
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {speedPoints.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-4xl mx-auto" aria-labelledby="stack">
        <h2 id="stack" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
          The stack behind RankMySEO
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed mb-8">
          RankMySEO is a SaaS I built and run, with an open-source version. This list comes from its public site, its public
          code, and my other repositories. Ask me what runs where, and whether it fits your product.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-3">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="bg-zinc-50 rounded-full px-4 py-2 text-sm font-medium text-zinc-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <OpenSourceProjects />

      <Faq id="product-engineering-faq" title="Questions about product engineering" faqs={faqs} />

      <CtaBand
        title="Send me your product idea"
        body="Tell me what you want to build, who will use it, and when you need it. I reply within 24 hours with questions or a plain answer on whether I am the right fit."
        primary={{ href: contactHref('product'), label: 'Send me your product idea' }}
        secondary={{ href: '/ai-implementation', label: 'See AI implementation' }}
      />
    </>
  )
}
