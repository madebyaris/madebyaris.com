import type { Metadata } from 'next'
import {
  Code2,
  ArrowRight,
  ArrowUpRight,
  Rocket,
  Globe,
  Zap,
  Search,
  Building,
  Users,
  Briefcase,
  Sparkles,
  Calendar,
} from 'lucide-react'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://madebyaris.com/services/nextjs-development/#webpage',
  name: 'Hire a Next.js Developer | Remote Full-Stack | Aris Setiawan',
  description:
    'Hire a Next.js developer for product builds, migrations, and performance work. Remote-friendly. 13+ years. Cursor Ambassador — AI-accelerated delivery.',
  url: 'https://madebyaris.com/services/nextjs-development',
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = buildPageMetadata({
    title: 'Hire a Next.js Developer | Remote Full-Stack | Aris Setiawan',
    description:
      'Hire a Next.js developer for product builds, migrations, and performance work. Remote-friendly. 13+ years. Cursor Ambassador — AI-accelerated delivery.',
    path: '/services/nextjs-development',
  })

  return {
    ...metadata,
    keywords: [
      'Hire Next.js Developer',
      'Next.js Developer',
      'Remote Next.js Developer',
      'Next.js Full-Stack Developer',
      'Next.js Migration',
      'Next.js Performance',
      'Headless WordPress Next.js',
      'App Router Developer',
    ],
  }
}

const helpWith = [
  {
    title: 'New Next.js products',
    description: 'App Router, TypeScript, and APIs — from MVP to production-ready apps.',
    icon: Rocket,
  },
  {
    title: 'Migrations',
    description: 'WordPress or legacy React → Next.js without losing SEO or content workflows.',
    icon: Globe,
  },
  {
    title: 'Performance & SEO',
    description: 'SSR/SSG, Core Web Vitals, and metadata that search engines and users notice.',
    icon: Zap,
  },
  {
    title: 'Headless setups',
    description: 'Next.js + WordPress or other CMS when content teams need familiar tools.',
    icon: Code2,
  },
  {
    title: 'Ongoing product engineering',
    description: 'Features, refactors, and code reviews on an existing codebase.',
    icon: Briefcase,
  },
]

const engagementOptions = [
  {
    title: 'Fixed-scope build',
    description: 'Landing page, marketing site, or MVP slice with a clear deliverable.',
  },
  {
    title: 'Product sprint',
    description: '2–4 weeks of focused delivery on a defined set of features or improvements.',
  },
  {
    title: 'Retainer',
    description: 'Ongoing Next.js engineering support after launch or between releases.',
  },
]

const processSteps = [
  { title: 'Scope', description: 'Goals, constraints, and success criteria.' },
  { title: 'Build', description: 'Weekly demos — no black box.' },
  { title: 'Harden', description: 'Performance, SEO basics, and handoff docs.' },
  { title: 'Support', description: 'Optional retainers after launch.' },
]

const stackItems = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind',
  'Node',
  'Prisma',
  'PostgreSQL',
  'Vercel',
  'WordPress / headless',
]

const specializedServices = [
  {
    title: 'Vercel Deployment',
    description: 'Edge functions, analytics, and production deployment on Vercel.',
    icon: Rocket,
    href: '/services/nextjs-development/vercel',
  },
  {
    title: 'Next.js SEO',
    description: 'SSR, metadata, and Core Web Vitals optimization for Next.js sites.',
    icon: Search,
    href: '/services/nextjs-development/nextjs-seo',
  },
  {
    title: 'Indonesia (Bahasa)',
    description: 'Bahasa Indonesia pages and local support for clients who prefer it.',
    icon: Globe,
    href: '/services/nextjs-development/nextjs-indonesia',
  },
  {
    title: 'Indonesia · Specialist',
    description: 'Solo specialist support for Indonesian teams — not a large agency bench.',
    icon: Building,
    href: '/services/nextjs-development/agency-indonesia',
  },
]

const faqs = [
  {
    question: 'Do you work with US / EU / remote teams?',
    answer: 'Yes. Async-first, with overlap hours by agreement.',
  },
  {
    question: 'Can you join an existing Next.js codebase?',
    answer: 'Yes — features, refactors, and cleanup.',
  },
  {
    question: 'WordPress too?',
    answer: 'Yes, especially headless WordPress + Next.js.',
  },
  {
    question: 'Indonesia-only?',
    answer:
      'No. Based in Indonesia, clients can be anywhere. Local ID pages stay available if you need Bahasa.',
  },
]

export default function NextjsDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="text-center pt-8 pb-16">
        <div
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={{
            position: 'relative',
            // @ts-expect-error CSS custom properties
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
            '--border-radius-before': '9999px',
          }}
        >
          <Code2 className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
            Next.js · Remote · Available for hire
          </span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Hire a Next.js developer
          <span className="block gradient-text font-light">who ships</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          I&apos;m Aris Setiawan. I build production Next.js apps for startups and teams worldwide
          — clean architecture, fast pages, and practical AI workflows so we move quicker without
          messy code.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Hire me to build</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow:
                '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient':
                'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
              '--border-radius-before': '9999px',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">
              See selected work
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>

        <p className="text-xs md:text-sm text-zinc-500 font-medium max-w-3xl mx-auto leading-relaxed">
          13+ years · Cursor Ambassador Indonesia · MiniMax Dev Community Expert · Remote across
          US, EU, Asia & Middle East
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* What I help with */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Services
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What I <span className="gradient-text">help with</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {helpWith.map((item) => (
            <div
              key={item.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* How this is different */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Approach
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How this is <span className="gradient-text">different</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed font-medium text-center">
            Most &ldquo;Next.js agencies&rdquo; sell a process deck. I sell outcomes: a working
            product, clear communication, and a codebase you can maintain. I also use Cursor and
            modern AI tooling day-to-day — not as a gimmick, as a way to ship carefully and faster.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Engagement options */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Calendar className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Engagements
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Engagement <span className="gradient-text">options</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {engagementOptions.map((option, index) => (
            <div key={option.title} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{option.title}</h3>
              <p className="text-sm text-zinc-500">{option.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Stack */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Stack I use <span className="gradient-text">most</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-2xl mx-auto font-medium">
            WordPress/headless when content teams need it.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {stackItems.map((tech) => (
              <div
                key={tech}
                className="p-3 bg-zinc-50 rounded-xl text-center text-xs font-medium text-zinc-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            <span className="gradient-text">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{step.title}</h3>
              <p className="text-sm text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Specialized Services */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Building className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Specialized
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Tailored <span className="gradient-text">solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specializedServices.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <service.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Common <span className="gradient-text">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white/80 backdrop-blur-sm rounded-xl p-5">
              <h3 className="font-semibold text-zinc-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Need a Next.js developer for your next build?
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/nextjs-development/nextjs-indonesia"
              className="group flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition-all text-white text-sm font-medium rounded-full px-6 py-3 border border-zinc-700 hover:-translate-y-0.5"
            >
              <span>Indonesia / Bahasa clients</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
