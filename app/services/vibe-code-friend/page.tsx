import type { Metadata } from 'next'
import {
  Bot,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Trophy,
  Code2,
  MessageSquare,
  Shield,
  Users,
  Target,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 86400

const pageTitle = 'Cursor Mentoring & AI Workflow Coaching | Level up | Aris Setiawan'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://madebyaris.com/services/vibe-code-friend/#webpage',
  name: pageTitle,
  description:
    'Level up your team with Cursor mentoring and practical AI coding workflows. From the first Cursor Ambassador in Indonesia.',
  url: 'https://madebyaris.com/services/vibe-code-friend',
}

const features = [
  {
    title: 'Cursor-first workflows',
    description:
      'Learn how to use Cursor effectively — prompts, context, and habits that stick after the session ends.',
    icon: Sparkles,
  },
  {
    title: 'Hands-on problem solving',
    description:
      'Work through real bugs, refactors, and architecture questions on your codebase, not toy examples.',
    icon: Target,
  },
  {
    title: 'Personalized coaching',
    description:
      'Sessions matched to your skill level, stack, and what your team actually needs to ship.',
    icon: Users,
  },
  {
    title: 'Practical guardrails',
    description:
      'When to trust AI output, when to review hard, and how to keep quality high as you speed up.',
    icon: Shield,
  },
]

const services = [
  {
    title: 'AI IDE Tutoring',
    description: 'Master Cursor and AI-powered IDEs with guided sessions on your real projects.',
    icon: Code2,
    href: '/services/vibe-code-friend/ai-ide-tutoring',
    features: ['Cursor setup', 'Prompt patterns', 'Workflow integration', 'Team habits'],
  },
  {
    title: 'Code Fixing',
    description: 'Debug stubborn issues together — with clear explanations so you learn the fix.',
    icon: Zap,
    href: '/services/vibe-code-friend/code-fixing',
    features: ['Bug resolution', 'Error diagnosis', 'Performance fixes', 'Code review'],
  },
]

const benefits = [
  'Ship faster with confidence',
  'Less time stuck debugging',
  'Better code review habits',
  'Clearer architecture decisions',
  'Team-wide AI workflow alignment',
  'Flexible session scheduling',
  'Cost-effective vs. hiring blindly',
  'Skills that compound over time',
]

const technologies = [
  'Cursor',
  'GitHub Copilot',
  'Claude',
  'ChatGPT',
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Docker',
  'Vercel',
]

export async function generateMetadata(): Promise<Metadata> {
  const metadata = buildPageMetadata({
    title: 'Cursor Mentoring & AI Workflow Coaching | Level up',
    description:
      'Level up your team with Cursor mentoring and practical AI coding workflows. From the first Cursor Ambassador in Indonesia.',
    path: '/services/vibe-code-friend',
  })

  return {
    ...metadata,
    title: { absolute: pageTitle },
    openGraph: { ...metadata.openGraph, title: pageTitle },
    twitter: { ...metadata.twitter, title: pageTitle },
    keywords: [
      'Cursor Mentoring',
      'AI Workflow Coaching',
      'Cursor Ambassador Indonesia',
      'AI IDE Tutoring',
      'Vibe Code Friend',
      'Developer Coaching',
      'Cursor Training',
    ],
  }
}

export default function VibeCodeFriendPage() {
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
          <TrendingUp className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
            Level up · Cursor · Remote
          </span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-4">
          Level up with Cursor
          <span className="block gradient-text font-light">& AI workflows</span>
        </h1>

        <div
          className="inline-flex bg-orange-50 rounded-full mb-6 py-1.5 px-4 items-center gap-2"
        >
          <Bot className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wide text-orange-700">
            Vibe Code Friend
          </span>
        </div>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Mentoring and workflow coaching for developers and teams — not product builds. Learn
          practical Cursor habits from Indonesia&apos;s first Cursor Ambassador.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Book a session</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/services/ai-development"
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
              Need AI built for you?
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Key Features Section */}
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
            <Zap className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              What you get
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Coaching that <span className="gradient-text">sticks</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <feature.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Services Section */}
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
            <MessageSquare className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Formats
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How we can <span className="gradient-text">work together</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            Tutoring, pairing, and targeted fixes — pick what fits your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4 mb-4">
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

                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Benefits Section */}
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
            <Trophy className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Outcomes
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            What teams <span className="gradient-text">gain</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl text-center text-sm font-medium text-zinc-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How it <span className="gradient-text">works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: 'Intake', desc: 'Your stack, goals, and where you get stuck' },
            { step: 2, title: 'Setup', desc: 'Cursor config and workflow baseline' },
            { step: 3, title: 'Sessions', desc: 'Live pairing and tutoring on real work' },
            { step: 4, title: 'Iterate', desc: 'Refine habits as your team adopts AI tools' },
          ].map((item) => (
            <div key={item.step} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Technologies Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Tools we <span className="gradient-text">cover</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {technologies.map((tech) => (
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

      {/* CTA Section */}
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
            Ready to level up your team?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Whether you&apos;re new to Cursor or want tighter AI workflows across the team — let&apos;s
            talk about what would help most.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>All services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
