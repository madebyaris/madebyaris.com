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
const pageTitle = 'SaaS development company: low running cost'
const pageDescription =
  'SaaS development services from one senior developer. Custom SaaS and MVPs built to cost little to run, with the expected monthly cost in the written plan.'

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

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much does SaaS development cost?',
    answer:
      'I scope each build after a call, because a billing dashboard and a multi-tenant product with AI are different work. The written plan has the build price and the expected monthly running cost. You see both numbers before I write any code.',
  },
  {
    question: 'Are you a SaaS development company or a freelancer?',
    answer:
      'I am one independent developer, and I have worked this way since 2015. The person on every call is the person writing the code. If your project needs more people than one developer can be, I will say so on the scoping call.',
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
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">SaaS development</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Layers className="w-4 h-4 text-orange-500" />, label: 'SaaS development services' }}
        title="SaaS development"
        accent="that stays cheap to run"
        actions={
          <>
            <Link
              href={contactHref('saas')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Send me your SaaS idea</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#running-cost"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">See where the running cost goes</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For founders who want a SaaS that costs little while users are few and keeps working as they grow. I plan it,
          build it, and hand you the code.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          13+ years shipping web products. First Cursor Ambassador in Indonesia. I built and run RankMySEO, a rank tracking SaaS.
        </p>
      </PageHero>

      <HeroImage src="/images/services/saas.jpg" alt="Illustration of a SaaS dashboard on a small server stack, with a gauge reading low CPU use" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Looking for a SaaS development company?
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          If you searched for a SaaS development company, you found one senior developer instead of an agency. I plan,
          build, and launch your SaaS myself, and I design it to cost little to run from the first user. That means
          caching, background jobs, and lean database queries on hosting that scales from zero. The expected monthly
          running cost goes into the written plan before I write any code.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          With me, the person on the call is the person writing the code, so nothing gets lost in between. The trade-off is
          capacity. One developer can only run a few builds at once, so I tell you my start date up front.
        </p>
      </section>

      <section id="running-cost" className="mb-16 scroll-mt-32" aria-labelledby="cost-areas">
        <div className="text-center mb-10">
          <h2 id="cost-areas" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Where the running cost <span className="gradient-text">of a SaaS goes</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Four lines make up most monthly bills. Here is how I keep each one small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {costAreas.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
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
        <p className="text-sm text-zinc-500 mt-4 text-center">
          Caching does most of the work. I explain how it behaves in{' '}
          <Link href="/blog/nextjs-cache-on-vercel" className={linkClass}>
            Next.js caching on Vercel
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="scale">
        <h2 id="scale" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Scale from zero without a rewrite
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          On day one, the web app runs on infrastructure that scales to zero. While you have few users, the bill follows the
          requests you get, and no server sits idle all month. When traffic grows, more capacity starts on its own and the
          code stays the same.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Steady background work is different. A worker that runs all day is often cheaper on a small VPS, so I split the
          two when the numbers say so. I compare the options for your app and write the expected monthly cost into the plan.
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-zinc-900 mb-4">A typical low-cost setup</h3>
          <ul className="space-y-3">
            {stack.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-zinc-500 mt-4">
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
        <h2 id="ai-cost" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          AI features that do not eat your margin
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          AI can turn into the biggest line on a SaaS bill, because every model call is paid per token. I add AI where it
          saves your users time and keep these rules in the code.
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
            {aiRules.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-zinc-500 mt-4">
          How I wire models into existing products is on my{' '}
          <Link href="/services/ai-development/ai-integration" className={linkClass}>
            AI integration page
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="deliverables">
        <div className="text-center mb-10">
          <h2 id="deliverables" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            SaaS development services: <span className="gradient-text">what you get</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            The parts every SaaS needs before the first customer pays. The plan lists which ones your version one includes.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-zinc-500 mt-4 text-center max-w-2xl mx-auto">
          I build with Cursor and AI-assisted development, which shortens the time spent on routine code. I review every
          change myself, so the codebase stays readable for the next developer.
        </p>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="saas-cost">
        <h2 id="saas-cost" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          SaaS development cost: build cost and running cost
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          A SaaS has two bills. The build cost is what you pay me to plan and write the product. It depends on how many
          features ship in version one, which integrations you need, and whether data moves over from an old system.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-4">
          The running cost is what you pay every month after launch: hosting, database, AI tokens, and third-party
          services. It depends on how much work each request does and how much traffic you get. That part is set by how the
          code is written, which is why I plan it before the build.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          I scope the build after a call and estimate the running cost in the written plan. For a wider view of what
          drives developer rates, read{' '}
          <Link href="/blog/cost-to-hire-nextjs-developer" className={linkClass}>
            the cost to hire a Next.js developer
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="proof">
        <h2 id="proof" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Proof: a SaaS I built and run
        </h2>
        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">RankMySEO</h3>
            <p className="text-sm text-zinc-600 leading-relaxed mb-3">
              <a href="https://rankmyseo.com" className={linkClass} target="_blank" rel="noopener noreferrer">
                RankMySEO
              </a>{' '}
              is a hosted rank tracker that stores daily Google ranking history for each keyword. It has Overview, Keywords,
              Competitors, and Insights views. Rank checks run as background jobs, so the dashboard stays responsive while
              they work.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              I proved it on the diurusin.id demo, and the public beta opened on 31 August 2026. There is also a{' '}
              <a href="https://github.com/madebyaris/rankmyseo" className={linkClass} target="_blank" rel="noopener noreferrer">
                public open-source toolkit
              </a>
              . The story is in{' '}
              <Link href="/blog/introducing-rankmyseo-saas" className={linkClass}>
                Introducing RankMySEO
              </Link>
              .
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">This site</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              This site runs on Vercel with ISR caching. When I publish a post, a webhook refreshes the pages that changed,
              so the cache only rebuilds when content changes.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <h2 id="fit" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Is custom SaaS development <span className="gradient-text">right for you?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Good fit</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Look elsewhere</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <XCircle className="w-5 h-5 text-zinc-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-zinc-500 mt-4 text-center">
          Building a product where the AI feature is the whole point? Start with{' '}
          <Link href="/services/ai-development/ai-mvp" className={linkClass}>
            AI MVP development
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="process">
        <div className="text-center mb-10">
          <h2 id="process" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            From scoping call <span className="gradient-text">to launch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((item) => (
            <div key={item.step} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="topics">
        <div className="text-center mb-10">
          <h2 id="topics" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            SaaS guides <span className="gradient-text">and related services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <h3 className="font-semibold text-zinc-900 mb-1 flex items-center justify-between gap-3">
                {item.title}
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
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
