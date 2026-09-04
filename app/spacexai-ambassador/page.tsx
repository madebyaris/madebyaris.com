import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Users, Sparkles, Code2, Shield } from 'lucide-react'
import { buildProfilePageSchema } from '@/lib/seo'

export const revalidate = 86400

const pageTitle = 'SpaceXAI Ambassador | Aris Setiawan'
const pageDescription =
  'SpaceXAI Ambassador (Indonesia). Cursor is part of SpaceX. I help builders with practical AI coding workflows in this era.'

const structuredData = buildProfilePageSchema({
  name: pageTitle,
  description: pageDescription,
  url: 'https://madebyaris.com/spacexai-ambassador',
  jobTitle: 'SpaceXAI Ambassador',
})

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: 'https://madebyaris.com/spacexai-ambassador',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    locale: 'en_US',
  },
}

const highlights = [
  {
    title: 'Practical AI coding',
    description: 'Workflows that help teams ship, not demo slides.',
    icon: Code2,
  },
  {
    title: 'Community',
    description: 'Clear answers for Indonesia and remote builders who ask how to start.',
    icon: Users,
  },
  {
    title: 'Honest scope',
    description: 'What Cursor and related tools are good for, and when to stop.',
    icon: Shield,
  },
]

const whatIDo = [
  'Share workflows that survive a real repo',
  'Point people to the right door: mentoring vs a product build',
  'Keep the Cursor Ambassador history visible so search does not break',
]

export default function SpaceXAIAmbassadorPage() {
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
          <li className="text-zinc-900">SpaceXAI Ambassador</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">SpaceXAI Ambassador</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          SpaceXAI
          <span className="block gradient-text font-light">Ambassador</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          I am a SpaceXAI Ambassador. Cursor is now part of SpaceX, and SpaceXAI is the AI side of that story. This page is that role. My Cursor Ambassador page stays at{' '}
          <Link href="/cursor-ambassador" className="hover:text-orange-500 transition-colors">/cursor-ambassador</Link>.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          In August 2026 Cursor announced it is part of SpaceX, continuing the SpaceXAI partnership. I keep teaching practical shipping with Cursor and the wider AI coding stack. I do not invent seat counts or program perks here.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/services/vibe-code-friend"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Level up with Cursor</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/cursor-ambassador"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">See Cursor Ambassador</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
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
            What I do as a SpaceXAI Ambassador
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatIDo.map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-xl">
                <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
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
            Need help shipping faster with Cursor?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            I can help you set up reliable workflows, improve quality, and get more done with the same team.
          </p>

          <Link
            href="/services/vibe-code-friend"
            className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Level up with Cursor</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
