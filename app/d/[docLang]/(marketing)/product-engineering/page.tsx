import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
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
const pageTitle = 'Product & App Engineering: AI, SaaS & Rust'
const pageDescription =
  'Senior AI software engineer building SaaS, web and mobile apps, Rust tools, and AI features for European and Indonesian teams. 13+ years. Projects from $5,000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/saas.jpg',
  keywords: [
    'product engineering services',
    'AI app development',
    'SaaS development services',
    'Rust development',
    'mobile app development',
    'remote AI engineer Europe',
    'AI developer Indonesia',
  ],
})

const linkClass =
  'text-[#3A57FC] font-medium underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#2944E0] transition-colors'

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

const stack = ['React', 'Vite', 'Fastify', 'TypeScript', 'Rust', 'Next.js']

const specialties = [
  { href: '/services/react-app-improvement', title: 'React app improvement', body: 'Faster load, smoother screens, and code that is easier to change.' },
  { href: '/services/vite-development', title: 'Vite development', body: 'Move to Vite for faster builds, or start a new app on it.' },
  { href: '/services/fastify-development', title: 'Fastify development', body: 'Fast, validated Node.js APIs, new or moved from Express.' },
  { href: '/services/database-optimization', title: 'Database optimization', body: 'Slow queries found and fixed, so the database keeps up as data grows.' },
  { href: '/services/clean-code-for-teams-and-ai', title: 'Clean code for teams and AI', body: 'Structure, rules, and checks that developers and AI agents both follow.' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does a product build cost?',
    answer:
      'It depends on scope. Projects start from $5,000. After a short scoping call you get a written plan with milestones and a quote before any code is written.',
  },
  {
    question: 'Who builds it?',
    answer:
      'I lead every project and answer your messages myself. AI agents do much of the build, and trusted partners join when a project needs more hands. I tell you before we start.',
  },
  {
    question: 'Which stack do you use?',
    answer:
      'React, Vite, Fastify, and TypeScript, which is also what x.com’s new web app is reported to use, plus Rust where speed matters and Next.js for sites that need server rendering. If your project needs something else, tell me and I say whether I am the right fit.',
  },
  {
    question: 'Do you work with European and Indonesian teams?',
    answer:
      'Yes. I am based in Sidoarjo, Indonesia (UTC+7) and join European (EU and UK) and Indonesian engineering teams for AI and app builds. I work Monday to Saturday, 9:00 to 17:00 WIB, in English or Indonesian, which gives direct overlap with European mornings in CET and GMT.',
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
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
  },
})

export default function ProductEngineeringPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        variant="obsidian"
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-white/65">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/35">/</li>
              <li className="text-white">Product engineering</li>
            </ol>
          </nav>
        }
        eyebrow={{ icon: <Rocket className="w-3.5 h-3.5" />, label: 'Product engineering · Build · Remote' }}
        title="Build your product fast,"
        accent="with an AI-powered team"
        actions={
          <>
            <Link
              href={contactHref('product')}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 group"
            >
              <span>Send me your product idea</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/ai-implementation"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/45 hover:border-white bg-white/10 hover:bg-white/18 text-white font-semibold text-sm px-6 py-3.5 transition-all"
            >
              <span>See AI implementation</span>
            </Link>
          </>
        }
        bottomStrip={
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs text-white/75">
            <span>React · Vite · Fastify · TypeScript · Rust · Next.js · Projects from $5,000</span>
            <Link
              href="/jasa-pengembangan-produk"
              className="text-[#FFB866] hover:text-white underline decoration-[#FFB866]/40 underline-offset-4 transition-colors"
            >
              Bahasa Indonesia
            </Link>
          </div>
        }
      >
        <p>
          SaaS, mobile apps, Rust software, commerce, and go-to-market apps. I lead every project and you talk to me directly.
          AI agents do much of the build and trusted partners join when a project needs more hands, which is how we ship fast.
        </p>
      </PageHero>

      {/* Band 1: White: What we build */}
      <section className="w-full bg-white py-16 md:py-24" aria-labelledby="what-we-build">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">01 / Products</span>
            <h2
              id="what-we-build"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              What we build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all flex flex-col"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-5 flex-grow">{item.body}</p>
                {item.href && item.cta && (
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A57FC] hover:text-[#2944E0] transition-colors mt-auto pt-4 border-t border-[#E5E7EB]"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 2: Dark Proof Band: How we ship fast & core stack */}
      <section className="w-full ahrefs-dark-band text-white py-16 md:py-24" aria-labelledby="how-we-ship-fast">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
              02 / Delivery model
            </span>
            <h2
              id="how-we-ship-fast"
              className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3"
            >
              How we ship fast
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speedPoints.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#3A57FC]/70 p-6 md:p-7 transition-all"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] block mb-2.5">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/10" aria-labelledby="stack">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#93A8FF] block mb-2">
                  Core stack
                </span>
                <h2 id="stack" className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  Built on the stack x.com reports
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Our core stack matches what x.com&apos;s new web app is reported to use: React, Vite, Fastify, and TypeScript (X engineering report, as covered by{' '}
                  <a
                    href="https://www.itechpost.com/articles/237732/20261105/x-updates-its-web-app-deliver-faster-website-performance-smoother-experience.htm"
                    className="text-[#FFB866] underline decoration-[#FFB866]/40 underline-offset-4 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iTechPost
                  </a>
                  , 5 November 2026). We also ship Rust and Next.js.
                </p>
              </div>
              <div className="lg:col-span-5">
                <ul className="flex flex-wrap gap-2.5 lg:justify-end">
                  {stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 font-mono text-xs font-semibold text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band 3: Subtle Gray: Specialist work */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24" aria-labelledby="specialties">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10 md:mb-12">
            <span className="section-index block mb-2">03 / Focused engagements</span>
            <h2
              id="specialties"
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              Specialist work, booked on its own
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              You do not need a whole product build. Each of these is a standalone project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] p-6 md:p-7 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg font-bold text-[#0B0C0E] tracking-tight group-hover:text-[#3A57FC] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#3A57FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{item.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Band 4: White: Open source projects */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <OpenSourceProjects className="mb-0" />
        </div>
      </section>

      {/* Band 5: Subtle Gray: FAQ */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Faq
            id="product-engineering-faq"
            title="Questions about product engineering"
            faqs={faqs}
            className="mb-0"
          />
        </div>
      </section>

      {/* Band 6: White: CTA Band */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            title="Send me your product idea"
            body="Tell me what you want to build, who will use it, and when you need it. I reply within 24 hours with questions or a plain answer on whether I am the right fit."
            primary={{ href: contactHref('product'), label: 'Send me your product idea' }}
            secondary={{ href: '/ai-implementation', label: 'See AI implementation' }}
          />

          <p className="text-center text-sm text-[#4B5563] mt-8 max-w-lg mx-auto">
            Dalam Bahasa Indonesia:{' '}
            <Link href="/jasa-pengembangan-produk" className={linkClass}>
              jasa pengembangan produk
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
