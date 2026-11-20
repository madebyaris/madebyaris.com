import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Plug,
  Sparkles,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { HeroImage } from '@/components/page/hero-image'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/saas-development'
const pageTitle = 'SaaS Development Services: Low Running Cost'
const pageDescription =
  'SaaS development by a senior AI software engineer for EU and Indonesian teams. Custom SaaS and AI MVPs engineered for low hosting and token bills.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/saas.jpg',
  keywords: [
    'SaaS development company',
    'SaaS development services',
    'custom SaaS development',
    'SaaS MVP development',
    'SaaS development cost',
    'low cost SaaS hosting',
  ],
})

const costAreas = [
  {
    title: 'Compute',
    description:
      'Every request that renders a page or runs an API route uses CPU time. I cache pages that look the same for every visitor, render them once, and push heavy work into background jobs and queues.',
    icon: Cpu,
  },
  {
    title: 'Database',
    description:
      'Slow queries keep functions running longer and push you onto a bigger database plan. I index the queries the app actually runs and stop fetching rows nobody reads.',
    icon: Database,
  },
  {
    title: 'AI tokens',
    description:
      'Model calls are billed per token, so one chatty feature can cost more than the hosting. I cache answers, send simple tasks to smaller models, and cap spend per user.',
    icon: Sparkles,
  },
  {
    title: 'Third-party services',
    description:
      'Auth, email, search, and monitoring each add a monthly line. I pick services whose pricing fits early traffic and note which ones you can swap out later.',
    icon: Plug,
  },
]

const stack = [
  'The web app on serverless hosting such as Vercel, which scales to zero when nobody is using it',
  'Managed Postgres, sized to the load you have now and easy to move up a plan',
  'Steady background workers on a small VPS when that costs less than running them as functions',
  'AI calls behind a cache and a per-user limit, so usage cannot outrun the subscription price',
]

const deliverables = [
  'Sign-up, login, and team accounts with roles',
  'Subscription billing through Stripe or another provider',
  'Multi-tenant data, so each customer only sees their own records',
  'An admin dashboard to manage customers, plans, and support requests',
  'Background jobs and queues for imports, reports, and other slow work',
  'Transactional email: welcome, password reset, and receipts',
  'Product analytics, so you can see which features people use',
  'Docs and a handoff session for whoever maintains the app next',
  'All code in your own repository from the first commit',
]

const aiRules = [
  'Call a model only when the feature needs one, and use plain code for the rest',
  'Cache answers to repeated questions, so you pay for each one once',
  'Send simple tasks to smaller, cheaper models and keep large models for hard ones',
  'Cap AI spend per user and per plan, so one heavy account cannot eat its own subscription',
]

const goodFit = [
  'You have a SaaS idea and want one person accountable from plan to launch',
  'You want to know the expected monthly running cost before the build starts',
  'Your current app has a hosting or AI bill that grows faster than your revenue',
  'You want the code in your repository, readable by the next developer',
]

const poorFit = [
  'You need a large team working in parallel from the first week',
  'You want a fixed price from a one-line brief',
  'Your product is a native mobile app first and a web app later',
]

const processSteps = [
  { step: 1, title: 'Scoping call', desc: 'We go through the product, who pays for it, and what version one must do.' },
  { step: 2, title: 'Written plan', desc: 'Stack, features, build price, and the expected monthly running cost.' },
  { step: 3, title: 'Build', desc: 'A demo on a preview link every week, so you can change course early.' },
  { step: 4, title: 'Launch', desc: 'Domain, billing, email, and monitoring switched to live.' },
  { step: 5, title: 'Handoff or support', desc: 'Docs and a walkthrough for your team, or I stay on for ongoing work.' },
]

const topics = [
  {
    title: 'Introducing RankMySEO',
    description: 'The rank tracking SaaS I built and run, and why I built it.',
    href: '/blog/introducing-rankmyseo-saas',
  },
  {
    title: 'RankMySEO: hosted or open source',
    description: 'When the hosted SaaS fits and when the open-source toolkit is enough.',
    href: '/blog/rankmyseo-saas-vs-open-source',
  },
  {
    title: 'Next.js caching on Vercel',
    description: 'How caching decides how much work each request does, and what it costs.',
    href: '/blog/nextjs-cache-on-vercel',
  },
  {
    title: 'Next.js on a cheap VPS',
    description: 'Running Next.js on a small VPS instead of serverless hosting. Written in Indonesian.',
    href: '/blog/next-js-pada-vps-murah',
  },
  {
    title: 'AI MVP development',
    description: 'For products where the AI feature is the product.',
    href: '/services/ai-development/ai-mvp',
  },
  {
    title: 'PHP API development',
    description: 'A PHP backend or API behind a Next.js front end.',
    href: '/services/php-development/api-development',
  },
]

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'
const darkLinkClass =
  'text-[#93A8FF] underline decoration-[#93A8FF]/40 underline-offset-4 hover:text-[#FFB866] hover:decoration-[#FFB866] transition-colors font-medium'

const faqs: FaqItem[] = [
  {
    question: 'How much does SaaS development cost?',
    answer:
      'I scope each build after a call, because a billing dashboard and a multi-tenant product with AI are different work. The written plan has the build price and the expected monthly running cost. You see both numbers before I write any code.',
  },
  {
    question: 'Are you a SaaS development company or an individual engineer?',
    answer:
      'I am a senior AI software engineer who has led client builds since 2015. You work directly with me on architecture and weekly demos, and when a build needs extra hands, trusted partners join alongside AI agents so we ship quickly. I tell you before we start.',
  },
  {
    question: 'Do you offer SaaS MVP development?',
    answer:
      'Yes. An MVP is the smallest version that real customers can sign up for and pay for. I build it on the same low-cost setup as a full product, so you can grow from it without a rewrite.',
  },
  {
    question: 'How do you keep hosting cheap when traffic grows?',
    answer:
      'Pages that look the same for everyone are cached, so more visitors mostly means more cache hits. Heavy work runs in background jobs, and the database has indexes for the queries the app runs. Serverless hosting adds capacity on its own when traffic grows.',
  },
  {
    question: 'Can you add AI features without AI costs eating the margin?',
    answer:
      'Yes. I call models only where the feature needs one, cache repeated answers, use smaller models for simple tasks, and set a spend limit per user. The plan estimates the AI cost alongside hosting.',
  },
  {
    question: 'Do you do custom SaaS development, or start from a template?',
    answer:
      'Custom SaaS development. I use well-known libraries for auth, billing, and email, so your budget goes to the features that make your product different. Every line lives in your repository and belongs to you.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'SaaS development', path: pagePath },
  ],
  service: {
    name: 'SaaS development services',
    description: pageDescription,
    serviceType: 'SaaS Development',
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
    offers: [
      { name: 'Custom SaaS development' },
      { name: 'SaaS MVP development' },
      { name: 'Running cost planning and hosting setup' },
      { name: 'AI features with spend limits' },
      { name: 'Handoff and ongoing support' },
    ],
  },
})

export default function SaasDevelopmentPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#525660]">
          <li>
            <Link href="/services" className="hover:text-[#3A57FC] transition-colors">
              Services
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li className="text-[#0B0C0E] font-semibold">SaaS development</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Layers className="w-3.5 h-3.5" />, label: 'SaaS development services' }}
        title="SaaS development"
        accent="that stays cheap to run"
        actions={
          <>
            <Link
              href={contactHref('saas')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Send me your SaaS idea</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#running-cost"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>See where the running cost goes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For European (EU and UK) and Indonesian founders who want a SaaS or AI web app that stays cheap to run while users are few and scales cleanly as revenue grows. I own the architecture, ship the build, and hand over clean code in your repo.
        </p>
        <p className="font-mono text-xs text-white/80 tracking-wide">
          Senior AI software engineer · 13+ years shipping software · UTC+7 with European morning overlap · Creator of RankMySEO.
        </p>
      </PageHero>

      <HeroImage src="/images/services/saas.jpg" alt="Illustration of a SaaS dashboard on a small server stack, with a gauge reading low CPU use" />

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Direct engineering</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Looking for a SaaS development company?
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          If you searched for a SaaS development company, you found one senior developer instead of an agency. I plan,
          build, and launch your SaaS myself, and I design it to cost little to run from the first user. That means
          caching, background jobs, and lean database queries on hosting that scales from zero. The expected monthly
          running cost goes into the written plan before I write any code.
        </p>
        <p className="text-[#374151] leading-relaxed">
          With me, the person on the call is the person writing the code, so nothing gets lost in between. The trade-off is
          capacity. One developer can only run a few builds at once, so I tell you my start date up front.
        </p>
      </section>

      <section id="running-cost" className="mb-16 scroll-mt-32" aria-labelledby="cost-areas">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Infrastructure efficiency</span>
          <h2 id="cost-areas" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Where the running cost <span className="gradient-text">of a SaaS goes</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Four lines make up most monthly bills. Here is how I keep each one small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {costAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {item.title === 'Database' ? (
                  <>
                    <Link href="/services/php-development/database-solutions" className={linkClass}>
                      Slow queries
                    </Link>{' '}
                    keep functions running longer and push you onto a bigger database plan. I index the queries the app actually runs and stop fetching rows nobody reads.
                  </>
                ) : (
                  item.description
                )}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#4B5563] mt-6 text-center">
          Caching does most of the work. I explain how it behaves in{' '}
          <Link href="/blog/nextjs-cache-on-vercel" className={linkClass}>
            Next.js caching on Vercel
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="scale">
        <span className="section-index block mb-2">Architecture</span>
        <h2 id="scale" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Scale from zero without a rewrite
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          On day one, the web app runs on infrastructure that scales to zero. While you have few users, the bill follows the
          requests you get, and no server sits idle all month. When traffic grows, more capacity starts on its own and the
          code stays the same.
        </p>
        <p className="text-[#374151] leading-relaxed mb-6">
          Steady background work is different. A worker that runs all day is often cheaper on a small VPS, so I split the
          two when the numbers say so. I compare the options for your app and write the expected monthly cost into the plan.
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <h3 className="font-display font-bold text-[#0B0C0E] mb-4">A typical low-cost setup</h3>
          <ul className="space-y-3">
            {stack.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-[#4B5563] mt-4">
          More on each option: how I keep a{' '}
          <Link href="/services/nextjs-development/vercel" className={linkClass}>
            Next.js bill on Vercel in check
          </Link>
          , and{' '}
          <Link href="/blog/next-js-pada-vps-murah" className={linkClass}>
            running Next.js on a cheap VPS
          </Link>{' '}
          (in Indonesian).
        </p>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="ai-cost">
        <span className="section-index block mb-2">AI unit economics</span>
        <h2 id="ai-cost" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          AI features that do not eat your margin
        </h2>
        <p className="text-[#374151] leading-relaxed mb-6">
          AI can turn into the biggest line on a SaaS bill, because every model call is paid per token. I add AI where it
          saves your users time and keep these rules in the code.
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <ul className="space-y-3">
            {aiRules.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                <CheckCircle2 className="w-5 h-5 text-[#FF8800] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-[#4B5563] mt-4">
          How I wire models into existing products is on my{' '}
          <Link href="/services/ai-development/ai-integration" className={linkClass}>
            AI integration page
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="deliverables">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Deliverables</span>
          <h2 id="deliverables" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            SaaS development services: <span className="gradient-text">what you get</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            The parts every SaaS needs before the first customer pays. The plan lists which ones your version one includes.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0" />
                <span className="text-sm text-[#1F2937] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-[#4B5563] mt-5 text-center max-w-2xl mx-auto">
          I build with Cursor and AI-assisted development, which shortens the time spent on routine code. I review every
          change myself, so the codebase stays readable for the next developer.
        </p>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="saas-cost">
        <span className="section-index block mb-2">Pricing model</span>
        <h2 id="saas-cost" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          SaaS development cost: build cost and running cost
        </h2>
        <p className="text-[#374151] leading-relaxed mb-4">
          A SaaS has two bills. The build cost is what you pay me to plan and write the product. It depends on how many
          features ship in version one, which integrations you need, and whether data moves over from an old system.
        </p>
        <p className="text-[#374151] leading-relaxed mb-4">
          The running cost is what you pay every month after launch: hosting, database, AI tokens, and third-party
          services. It depends on how much work each request does and how much traffic you get. That part is set by how the
          code is written, which is why I plan it before the build.
        </p>
        <p className="text-[#374151] leading-relaxed">
          I scope the build after a call and estimate the running cost in the written plan. For a wider view of what
          drives developer rates, read{' '}
          <Link href="/blog/cost-to-hire-nextjs-developer" className={linkClass}>
            the cost to hire a Next.js developer
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="proof">
        <div className="rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-10 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
            Production proof
          </span>
          <h2 id="proof" className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
            Proof: a SaaS I built and run
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display font-bold text-white mb-2">RankMySEO</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-3">
                <a href="https://rankmyseo.com" className={darkLinkClass} target="_blank" rel="noopener noreferrer">
                  RankMySEO
                </a>{' '}
                is a hosted rank tracker that stores daily Google ranking history for each keyword. It has Overview, Keywords,
                Competitors, and Insights views. Rank checks run as background jobs, so the dashboard stays responsive while
                they work.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                I proved it on the diurusin.id demo, and the public beta opened on 31 August 2026. There is also a{' '}
                <a href="https://github.com/madebyaris/rankmyseo" className={darkLinkClass} target="_blank" rel="noopener noreferrer">
                  public open-source toolkit
                </a>
                . The story is in{' '}
                <Link href="/blog/introducing-rankmyseo-saas" className={darkLinkClass}>
                  Introducing RankMySEO
                </Link>
                .
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display font-bold text-white mb-2">This site</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                This site runs on Vercel with ISR caching. When I publish a post, a webhook refreshes the pages that changed,
                so the cache only rebuilds when content changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Qualification</span>
          <h2 id="fit" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Is custom SaaS development <span className="gradient-text">right for you?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF]/70 p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Good fit</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                  <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Look elsewhere</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                  <XCircle className="w-5 h-5 text-[#64748B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-[#4B5563] mt-5 text-center">
          Building a product where the AI feature is the whole point? Start with{' '}
          <Link href="/services/ai-development/ai-mvp" className={linkClass}>
            AI MVP development
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="process">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Delivery process</span>
          <h2 id="process" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            From scoping call <span className="gradient-text">to launch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B0C0E] text-[#FFB866] font-mono text-xs font-bold mb-4">
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-1.5 text-sm">{item.title}</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="topics">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Further reading</span>
          <h2 id="topics" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            SaaS guides <span className="gradient-text">and related services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 group"
            >
              <h3 className="font-display font-bold text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors mb-1.5 flex items-center justify-between gap-3">
                <span>{item.title}</span>
                <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#3A57FC] group-hover:translate-x-1 transition-all shrink-0" />
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Faq id="saas-faq" title="SaaS development FAQ" faqs={faqs} />

      <CtaBand
        title="Tell me what your SaaS needs to do"
        body="Send a short description of the product and who pays for it. I reply with questions or a first take on the stack and what will drive the running cost. If an existing tool already does the job, I will tell you."
        primary={{ href: contactHref('saas'), label: 'Send me your SaaS idea' }}
        secondary={{ href: '/services/saas-development/jasa-pembuatan-aplikasi-web', label: 'Jasa pembuatan aplikasi web (Bahasa Indonesia)' }}
      />
    </>
  )
}
