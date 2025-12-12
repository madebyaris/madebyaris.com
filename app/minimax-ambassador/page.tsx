import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Sparkles, Users, Lightbulb, ExternalLink } from 'lucide-react'

export const revalidate = 86400

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "MiniMax Ambassador | Made by Aris",
  "description": "About Aris Setiawan as a MiniMax Ambassador: community, education, and building with AI tools.",
  "url": "https://madebyaris.com/minimax-ambassador"
}

export const metadata: Metadata = {
  title: 'MiniMax Ambassador | Made by Aris',
  description: 'About Aris Setiawan as a MiniMax Ambassador: community, education, and building with AI tools.',
  alternates: {
    canonical: 'https://madebyaris.com/minimax-ambassador',
  },
  openGraph: {
    title: 'MiniMax Ambassador | Made by Aris',
    description: 'Community, education, and building with MiniMax tools.',
    type: 'website',
    locale: 'en_US',
  },
}

const highlights = [
  {
    title: 'AI builder community',
    description: 'Supporting builders with practical guidance for shipping AI-powered products.',
    icon: Users,
  },
  {
    title: 'Hands-on experimentation',
    description: 'Exploring workflows, prompting patterns, and integration approaches that scale.',
    icon: Sparkles,
  },
  {
    title: 'Product-minded learning',
    description: 'Translating model capabilities into real UX and measurable business value.',
    icon: Lightbulb,
  },
]

const whatIDo = [
  'Build and share practical AI workflows and examples',
  'Help teams ship AI features safely (quality, cost, reliability)',
  'Collect community feedback and turn it into actionable improvements',
  'Support developers learning modern AI tooling'
]

export default function MiniMaxAmbassadorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li>
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <span className="px-2">/</span>
          </li>
          <li className="text-zinc-900">MiniMax Ambassador</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-2 pr-5 pl-3.5 shadow-sm backdrop-blur-sm items-center gap-3">
          <Image
            src="/minimax.png"
            alt="MiniMax"
            width={100}
            height={25}
            className="h-[25px] w-[100px]"
            priority
          />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">MiniMax Ambassador</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          <span className="gradient-text-minimax">MiniMax</span>
          <span className="block font-light">Ambassador</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          I support builders shipping AI products—by sharing practical learnings, real-world patterns, and community-first guidance.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Work with me</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href="https://www.linkedin.com/in/arissetia/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">View LinkedIn</span>
            <ExternalLink className="w-4 h-4 text-zinc-500" />
          </a>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Highlights */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">What I focus on</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Ambassador <span className="gradient-text">highlights</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
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

      {/* What I do */}
      <section className="mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight mb-6">
            What I do as a MiniMax Ambassador
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatIDo.map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-xl">
                <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-zinc-500">
            Want me to tailor this page with your exact LinkedIn copy (role description + dates + achievements)? Paste it here and I’ll update it precisely.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="overflow-hidden min-h-[320px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 min-h-[320px] relative">
          <h2 className="md:text-3xl lg:text-4xl leading-tight text-2xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Want to add AI features to your product?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            I can help you plan, implement, and ship AI functionality with a focus on quality, cost, and real UX.
          </p>

          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Contact me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
