import type { Metadata } from 'next'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Briefcase,
  Code2,
  GraduationCap,
  Layout,
  Plug,
  Rocket,
  Search,
  Server,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { CtaBand } from '@/components/page/cta-band'
import { Faq } from '@/components/page/faq'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/architectural-motion'

export const revalidate = 86400

const buildServices = [
  {
    title: 'AI engineering and implementation',
    description:
      'Take an AI pilot to production, or ship agents, chatbots, and MCP tools in your repo, with evals, logging, and spend caps.',
    icon: Sparkles,
    href: '/ai-implementation',
    features: ['Pilot to production', 'Agents and MCP tools', 'Evals and spend caps', 'Retainer'],
  },
  {
    title: 'AI integration services',
    description:
      'Add search over your own docs, reply drafts, document extraction, or an in-app assistant to the product you already run.',
    icon: Plug,
    href: '/services/ai-development/ai-integration',
    features: ['Docs Q&A', 'Support drafting', 'Data extraction', 'Existing codebase'],
  },
  {
    title: 'AI MVP development',
    description:
      'Turn an AI product idea into a launch-ready product with sign-up, payments, the core AI workflow tested on real inputs, and usage caps.',
    icon: Rocket,
    href: '/services/ai-development/ai-mvp',
    features: ['Idea to launch', 'Auth and billing', 'Eval cases', 'Per-user caps'],
  },
  {
    title: 'Product engineering',
    description:
      'SaaS, mobile apps, Rust software, commerce, and go-to-market apps, led by me with AI agents and trusted partners on the build.',
    icon: Briefcase,
    href: '/product-engineering',
    features: ['SaaS', 'Mobile apps', 'Rust and Tauri', 'Commerce and GTM'],
  },
  {
    title: 'Next.js development',
    description:
      'New Next.js App Router products and WordPress-to-Next.js migrations that stay fast on mobile and keep their search rankings.',
    icon: Code2,
    href: '/services/nextjs-development',
    features: ['Product builds', 'Migrations', 'Performance and SEO', 'Headless CMS'],
  },
  {
    title: 'SaaS development',
    description:
      'A SaaS or web app built to cost little to run, starting on scale-from-zero hosting, with the expected monthly bill in the plan.',
    icon: Server,
    href: '/services/saas-development',
    features: ['Custom SaaS', 'MVPs', 'Low running cost', 'AI features'],
  },
  {
    title: 'AI search (GEO & AEO)',
    description:
      'Get cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews with schema, llms.txt, and code fixes tracked in RankMySEO.',
    icon: Sparkles,
    href: '/services/ai-search-geo-aeo',
    features: ['GEO & AEO', 'Free AI snapshot', 'Schema & llms.txt', 'RankMySEO'],
  },
  {
    title: 'Technical SEO',
    description:
      'An SEO audit, keyword and competitor research, and the fixes made directly in your code. Monthly SEO comes with rank tracking.',
    icon: Search,
    href: '/services/seo',
    features: ['SEO audits', 'Keyword research', 'Fixes in code', 'Monthly SEO'],
  },
  {
    title: 'WordPress and headless WordPress',
    description:
      'Keep the WordPress editor your team knows, with custom themes, plugins, maintenance, or a headless Next.js front end.',
    icon: Layout,
    href: '/services/wordpress',
    features: ['Custom themes', 'Maintenance', 'Migrations', 'WooCommerce'],
  },
  {
    title: 'PHP and legacy modernization',
    description:
      'Keep a legacy PHP app running, add a clean API or AI layer to it, or plan its migration to a newer stack.',
    icon: Server,
    href: '/services/php-development',
    features: ['Custom apps', 'APIs', 'Database tuning', 'Migrations'],
    secondary: true,
  },
]

const levelUpServices = [
  {
    title: 'Cursor & AI workflows',
    description:
      'Your team bought Cursor seats and the PRs got messier. I set up project rules and a review habit on one real repo, then help the rest of the team adopt it.',
    icon: Bot,
    href: '/services/vibe-code-friend',
    features: ['Cursor mentoring', 'AI IDE tutoring', 'Workflow coaching', 'Code fixing'],
  },
]

const wordPressServices = [
  {
    title: 'Custom theme development',
    description: 'A theme built from your design that loads fast on phones and stays easy for editors to update.',
    href: '/services/wordpress/theme-development',
    benefits: ['Your design', 'Mobile first', 'SEO ready'],
  },
  {
    title: 'Plugin development',
    description: 'A plugin for the feature no off-the-shelf plugin does, or for connecting WordPress to your other tools.',
    href: '/services/wordpress/plugin-development',
    benefits: ['Custom features', 'Integrations', 'Maintainable code'],
  },
  {
    title: 'Headless WordPress',
    description: 'Editors keep wp-admin. Visitors get a fast Next.js front end. This site runs that way.',
    href: '/services/wordpress/headless-development',
    benefits: ['Next.js front end', 'SEO carried over', 'Publish-to-live refresh'],
  },
  {
    title: 'WordPress speed and security',
    description: 'Find what makes the site slow or exposed, fix it, and keep plugins from undoing the work.',
    href: '/services/wordpress/optimization',
    benefits: ['Speed', 'Security hardening', 'CDN setup'],
  },
  {
    title: 'Maintenance and support',
    description: 'Updates tested on staging, off-site backups, monitoring, and malware cleanup when a site gets hacked.',
    href: '/services/wordpress/maintenance',
    benefits: ['Monthly plan', 'Backups', 'Malware removal'],
  },
  {
    title: 'Website redesign',
    description: 'A new design and a fast custom theme, with URLs kept or redirected so rankings survive the launch.',
    href: '/services/wordpress/redesign',
    benefits: ['Custom theme', 'SEO kept', 'Staging first'],
  },
  {
    title: 'Migration',
    description: 'Move to a new host, a new domain, or into WordPress from another CMS, with a redirect map for every URL.',
    href: '/services/wordpress/migration',
    benefits: ['New host', 'Redirect map', 'Search Console checks'],
  },
  {
    title: 'WooCommerce',
    description: 'Custom checkout, payment gateways, and fixes for slow stores, tested with real orders on staging.',
    href: '/services/wordpress/woocommerce',
    benefits: ['Custom plugins', 'Payments', 'Store speed'],
  },
]

const serviceAnchors = [
  { href: '#build', code: '01', label: 'Build services' },
  { href: '#level-up', code: '02', label: 'Cursor mentoring' },
  { href: '#wordpress', code: '03', label: 'WordPress' },
  { href: '#process', code: '04', label: 'Process' },
  { href: '#services-faq', code: '05', label: 'FAQ' },
]

const serviceFaqs = [
  {
    question: 'How do we pick the right service track if we are unsure?',
    answer:
      'Send a short note with your URL, repo context, or the problem you want solved. I reply within 24 hours and tell you which track fits, or whether a smaller sprint makes more sense first.',
  },
  {
    question: 'What does a typical AI sprint or product build cost?',
    answer:
      'Focused AI production sprints start from $2,000 and usually take 2 to 4 weeks. Full AI SaaS or product builds run 4 to 12 weeks with written milestones and trade-offs agreed before any code starts.',
  },
  {
    question: 'Do we keep full ownership of the code and infrastructure?',
    answer:
      'Yes. Work happens directly in your repository and cloud accounts under NDA. You keep 100% of the code, eval suites, and runbooks from day one.',
  },
  {
    question: 'Can you work with teams across Europe, Singapore, and Indonesia?',
    answer:
      'Yes. I work from Indonesia (UTC+7), with full-day overlap for Singapore and Indonesia and morning overlap (08:00 to 12:00 CET) for European and UK teams. Calls and mentoring run in English or Indonesian.',
  },
]

const pageTitle = 'AI Engineering, Product & Cursor Services'
const pageDescription =
  'Work with Aris Setiawan: production AI engineering, AI integrations, AI MVPs, full-stack product builds, technical SEO, and Cursor mentoring for teams.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/services',
  keywords: [
    'AI engineering services',
    'AI implementation partner',
    'AI integration services',
    'AI MVP development',
    'Product engineering',
    'Cursor mentoring',
    'Next.js developer',
    'Technical SEO services',
  ],
})

const structuredData = buildPageGraph({
  path: '/services',
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [{ name: 'Services', path: '/services' }],
})

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* ================================================================
          BAND 1: FULL-BLEED ELECTRIC COBALT SERVICES HERO
          ================================================================ */}
      <section className="w-full bg-[#3A57FC] text-white pt-10 sm:pt-14 pb-16 md:pb-24 overflow-x-clip">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-[#0B0C0E] border border-white/15 px-3.5 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FF8800]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                BUILD · LEVEL UP · REMOTE (EU · SG · ID)
              </span>
            </div>

            <h1 className="font-display leading-[1.02] lg:text-[4rem] sm:text-5xl text-4xl font-bold text-white tracking-[-0.03em] mb-6">
              AI engineering and
              <span className="block text-[#DBE4FF] font-semibold">full-stack services</span>
            </h1>

            <p className="text-base sm:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              Hire me to ship production AI systems, agents, MCP tools, and full-stack software across
              TypeScript, Next.js, Rust, databases, and WordPress. Or bring me in to train your engineers
              on Cursor so AI-written code passes review.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href={contactHref('ai-implementation')}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 group"
              >
                <span>Tell me what you need built</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="#build"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 hover:border-white bg-white/10 hover:bg-white/18 text-white font-semibold text-sm px-6 py-3.5 transition-all"
              >
                <span>See what I build</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#level-up"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 hover:border-white bg-transparent hover:bg-white/10 text-white/95 font-semibold text-sm px-5 py-3.5 transition-all"
              >
                <span>See Cursor mentoring</span>
              </Link>
            </div>
          </div>

          {/* Bottom Hero Category Anchor Strip */}
          <nav
            aria-label="Service tracks"
            className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-3"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
              Jump to track
            </span>
            <div className="flex flex-wrap gap-2">
              {serviceAnchors.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 hover:bg-white hover:text-[#0B0C0E] px-3.5 py-1.5 font-mono text-xs text-white transition-colors"
                >
                  <span className="opacity-75">{item.code}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* ================================================================
          BAND 2: 01 / BUILD SERVICES (CRISP WHITE)
          ================================================================ */}
      <section id="build" className="w-full bg-white py-16 md:py-24 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
              <div className="max-w-2xl">
                <span className="section-index block mb-2">01 / Build</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
                  Hire me to <span className="gradient-text">ship AI and software</span>
                </h2>
                <p className="text-base text-[#4B5563] leading-relaxed max-w-xl">
                  You work with me directly, from the first call to launch. I work with startups and
                  engineering teams in Europe, Asia, the US, and the Middle East, and with Indonesian
                  companies in Bahasa Indonesia.
                </p>
              </div>
              <Link
                href={contactHref('ai-implementation')}
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#3A57FC] hover:text-[#FF8800] transition-colors shrink-0"
              >
                <span>Tell me what you need built</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildServices.map((service, idx) => {
              const isFlagship = idx < 3
              return (
                <StaggerItem key={service.href} className="h-full">
                  <Link
                    href={service.href}
                    className={`group relative flex flex-col justify-between h-full rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.24)] p-6 md:p-7 transition-all overflow-hidden ${
                      service.secondary ? 'bg-[#F8FAFC]/60' : ''
                    }`}
                  >
                    {isFlagship && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#3A57FC] via-[#6366F1] to-[#FF8800]"
                      />
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-2.5 rounded-lg border border-[#DDE4FF] bg-[#EEF2FF] text-[#3A57FC] group-hover:border-[#3A57FC] group-hover:bg-[#3A57FC] group-hover:text-white transition-all">
                          <service.icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#6B7280] group-hover:text-[#3A57FC] transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2 tracking-tight group-hover:text-[#3A57FC] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#4B5563] leading-relaxed mb-5">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] font-mono text-[10.5px] text-[#374151]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3.5 border-t border-[#E5E7EB] font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0B0C0E]">
                        <span className="group-hover:text-[#3A57FC] transition-colors">Read scope</span>
                        <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#FF8800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ================================================================
          BAND 3: 02 / LEVEL UP (OBSIDIAN DARK BAND)
          ================================================================ */}
      <section
        id="level-up"
        className="w-full ahrefs-dark-band text-white py-16 md:py-24 scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl mb-10 md:mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2.5">
                02 / Level Up
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                Cursor &amp; AI <span className="text-[#93A8FF]">workflow coaching</span>
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed max-w-xl">
                Coaching for developers who already ship. You keep writing the code; I help you and your
                team get reliable results from Cursor. Taught by Indonesia&apos;s first Cursor Ambassador.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {levelUpServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="lg:col-span-8 group rounded-2xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.08] hover:border-[#3A57FC] p-7 md:p-8 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-lg border border-[#3A57FC]/40 bg-[#3A57FC]/20 text-[#93A8FF]">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#FF8800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#93A8FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 max-w-2xl">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 rounded-md border border-white/12 bg-white/[0.06] font-mono text-[11px] text-zinc-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FFB866] group-hover:text-white transition-colors">
                    <span>See mentoring scope</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}

            <a
              href="https://bootcamp.madebyaris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-4 group rounded-2xl border border-dashed border-white/25 bg-[#0B0C0E]/70 hover:border-[#FF8800] hover:bg-[#0B0C0E] p-7 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg border border-white/15 bg-white/10 text-[#FFB866] group-hover:bg-[#FF8800] group-hover:text-white group-hover:border-[#FF8800] transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400">
                    External
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#FFB866] transition-colors">
                  Bootcamp
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Prefer a structured course? The bootcamp at bootcamp.madebyaris.com runs separately
                  from 1:1 mentoring.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                <span className="group-hover:text-[#FFB866] transition-colors">Open bootcamp</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#FF8800]" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 4: 03 / WORDPRESS SPECIALTIES (SLATE)
          ================================================================ */}
      <section
        id="wordpress"
        className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24 scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
              <div className="max-w-2xl">
                <span className="section-index block mb-2">03 / CMS &amp; Headless</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
                  WordPress <span className="gradient-text">specialties</span>
                </h2>
                <p className="text-base text-[#4B5563] leading-relaxed">
                  Themes, plugins, headless setups, speed, maintenance, migrations, and WooCommerce, all part of the Build offer.
                </p>
              </div>
              <Link
                href="/services/wordpress"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#3A57FC] hover:text-[#FF8800] transition-colors shrink-0"
              >
                <span>View all WordPress services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {wordPressServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_18px_40px_-24px_rgba(58,87,252,0.22)] p-6 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <h3 className="font-display text-base font-bold text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280] shrink-0 group-hover:text-[#FF8800] transition-colors" />
                  </div>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-[#E5E7EB]">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E5E7EB] font-mono text-[10px] text-[#4B5563]"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 5: 04 / PROCESS (CRISP WHITE)
          ================================================================ */}
      <section id="process" className="w-full bg-white py-16 md:py-24 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl mb-10 md:mb-12">
              <span className="section-index block mb-2">04 / Process</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3">
                How I <span className="gradient-text">work</span>
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                The same four steps whether I’m building for you or coaching your team. You see progress
                every week.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E5E7EB] rounded-2xl bg-[#F8FAFC] divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB] overflow-hidden">
            {[
              { step: '01', title: 'Scoping call', desc: 'What you need, what must not break, and what done looks like' },
              { step: '02', title: 'Written plan', desc: 'Milestones and the trade-offs I’d make, before any code' },
              { step: '03', title: 'Weekly progress', desc: 'A working demo or a coaching session every week' },
              { step: '04', title: 'Handoff', desc: 'Docs your team can use, and support if you want it' },
            ].map((item) => (
              <div key={item.step} className="p-6 md:p-7 hover:bg-white transition-colors">
                <span className="inline-block font-mono text-xs font-bold text-[#3A57FC] bg-[#EEF2FF] border border-[#DDE4FF] rounded-md px-2 py-0.5 mb-4">
                  STEP {item.step}
                </span>
                <h3 className="font-display text-base font-bold text-[#0B0C0E] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 6: 05 / FAQ (SLATE)
          ================================================================ */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Faq
            id="services-faq"
            className="mb-0"
            title="Questions before picking a service"
            subtitle="Direct answers on scope, ownership, pricing, and working hours before we book a call."
            faqs={serviceFaqs}
          />
        </div>
      </section>

      {/* ================================================================
          BAND 7: FINAL CTA BAND (WHITE)
          ================================================================ */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            title="Tell me what you’re building"
            body="Send a few lines about the project or your team. I’ll reply within 24 hours and tell you plainly whether I’m the right fit."
            primary={{ href: contactHref('ai-implementation'), label: 'Send me your project' }}
            secondary={{ href: '/projects', label: 'See open source and client work' }}
          />
        </div>
      </section>
    </>
  )
}
