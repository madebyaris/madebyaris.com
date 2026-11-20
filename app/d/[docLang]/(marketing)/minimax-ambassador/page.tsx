import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Sparkles, Users, Lightbulb, ExternalLink, BookOpen } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400

const path = '/minimax-ambassador'
const pageTitle = 'MiniMax Ambassador: Dev Community Expert'
const pageDescription =
  'Aris Setiawan is a MiniMax Dev Community Expert in Indonesia. What the role is, how I help teams ship AI features with MiniMax models, and where to start.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
})

const faqs: FaqItem[] = [
  {
    question: 'What is a MiniMax Dev Community Expert?',
    answer:
      'It is the name MiniMax gives its community role, sometimes called a MiniMax ambassador. I help developers in Indonesia and remote teams use MiniMax models well: I share workflows and rules I have tested, answer questions from builders, and pass community feedback back to MiniMax.',
  },
  {
    question: 'Can you build an AI feature with MiniMax models for my product?',
    answer:
      'Yes. Tell me what users should be able to do and where your product runs. I plan the feature, pick the model and prompts, integrate the API, and test the output on real cases before launch.',
  },
  {
    question: 'Do you only recommend MiniMax?',
    answer:
      'I recommend whatever fits the job. MiniMax is one of the model providers I know well, and I will say so when another model or no AI at all is the better choice for your feature.',
  },
  {
    question: 'Do you work in Indonesian and English?',
    answer:
      'Both. I am based in Sidoarjo, Indonesia, and work with teams in Indonesia and remotely worldwide. My MiniMax Indonesia guide is written in Bahasa Indonesia.',
  },
]

const structuredData = buildPageGraph({
  path,
  type: 'ProfilePage',
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [{ name: 'MiniMax Dev Community Expert', path }],
})

const highlights = [
  {
    title: 'Community help',
    description: 'Clear answers for Indonesian and remote builders who ask where to start with MiniMax.',
    icon: Users,
  },
  {
    title: 'Tested workflows',
    description: 'Prompting patterns, project rules, and integration steps I have run myself, shared so you can copy them.',
    icon: Sparkles,
  },
  {
    title: 'Product first',
    description: 'I start from the problem your users have and pick the model after, so the AI feature earns what it costs.',
    icon: Lightbulb,
  },
]

const whatIDo = [
  'Share practical AI workflows and example rules, like my MiniMax M2 rules for Cursor',
  'Help teams ship AI features with a close eye on output quality, cost, and reliability',
  'Collect feedback from the community and pass it on to MiniMax',
  'Support developers who are learning AI coding tools',
]

const guides = [
  { title: 'MiniMax Indonesia: panduan coding (Bahasa Indonesia)', href: '/minimax-ambassador/minimax-indonesia' },
  { title: 'AI integration services', href: '/blog/ai-integration-services' },
  { title: 'AI agent development', href: '/blog/ai-agent-development' },
  { title: 'AI chatbot development', href: '/blog/ai-chatbot-development' },
]

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function MiniMaxAmbassadorPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li>
            <Link href="/" className="hover:text-[#3A57FC] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">MiniMax Dev Community Expert</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{
          icon: (
            <span className="inline-flex items-center rounded bg-white px-2 py-0.5">
              <Image
                src="/minimax.png"
                alt="MiniMax"
                width={72}
                height={18}
                className="h-[18px] w-auto"
                priority
              />
            </span>
          ),
          label: 'MiniMax Dev Community Expert',
        }}
        title="MiniMax"
        accent="Dev Community Expert"
        actions={
          <>
            <Link
              href={contactHref('ai')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Plan an AI feature with me</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/minimax-ambassador/minimax-indonesia"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>Read the MiniMax Indonesia guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          I’m Aris Setiawan, a MiniMax Dev Community Expert based in Indonesia. I help builders and teams get MiniMax models into real products, with an honest view of cost, output quality, and where a model falls short.
        </p>
        <p className="text-sm text-white/80">
          13+ years shipping web products. I’m also the first{' '}
          <Link
            href="/cursor-ambassador"
            className="text-white underline decoration-white/60 underline-offset-4 hover:decoration-white transition-colors"
          >
            Cursor Ambassador in Indonesia
          </Link>
          {' '}and a SpaceXAI Ambassador. More on{' '}
          <a
            href="https://www.linkedin.com/in/arissetia/"
            target="_blank"
            rel="noreferrer"
            className="text-white underline decoration-white/60 underline-offset-4 hover:decoration-white transition-colors"
          >
            LinkedIn
          </a>
          .
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What a <span className="gradient-text-minimax">MiniMax</span> ambassador does
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">{faqs[0].answer}</p>
        <p className="text-[#4B5563] leading-relaxed">
          When a team wants a feature built on MiniMax models, I can also plan and ship it with them, from the first prompt to the production API call.
        </p>
      </section>

      {/* Highlights */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#FE604A]/25 bg-[#FEF2F2] px-3 py-1 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F6433D]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#DC0F12]">What I focus on</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How I approach <span className="gradient-text-minimax">the role</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* What I do */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-[#0B0C0E] tracking-tight mb-6">
            What I do as a MiniMax Dev Community Expert
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatIDo.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
                <ArrowRight className="w-4 h-4 text-[#3A57FC] mt-0.5 shrink-0" />
                <span className="text-sm text-[#0B0C0E] font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#4B5563]">
            The rules are free on GitHub:{' '}
            <a
              href="https://github.com/madebyaris/advance-minimax-m2-cursor-rules"
              target="_blank"
              rel="noreferrer"
              className={`${linkClass} inline-flex items-center gap-1`}
            >
              Advance MiniMax M2 Cursor Rules
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </section>

      {/* MiniMax Indonesia callout */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:border-[#3A57FC] transition-colors p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#FE604A]/25 bg-white px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#DC0F12] mb-3">
              Bahasa Indonesia
            </span>
            <h2 className="font-display text-xl md:text-2xl font-bold text-[#0B0C0E] tracking-tight mb-2">
              MiniMax Indonesia: panduan coding
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed max-w-2xl">
              Panduan singkat dalam Bahasa Indonesia: apa itu MiniMax M-2.1, cara pakai MiniMax Coding Plan di IDE, dan langkah awal dengan MiniMax API.
            </p>
          </div>
          <Link
            href="/minimax-ambassador/minimax-indonesia"
            className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold shrink-0 group"
          >
            <span>Baca panduannya</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8">
          <div className="flex items-center gap-2.5 mb-2">
            <BookOpen className="w-5 h-5 text-[#3A57FC]" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-[#0B0C0E] tracking-tight">
              Where to start with AI features
            </h2>
          </div>
          <p className="text-sm text-[#4B5563] mb-6">
            Guides I wrote on shipping AI features. They apply whether you pick MiniMax or another model.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="flex items-start gap-3 p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl hover:border-[#3A57FC] hover:bg-[#EEF2FF] transition-colors group"
                >
                  <ArrowRight className="w-4 h-4 text-[#3A57FC] mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-[#0B0C0E] font-medium group-hover:text-[#3A57FC] transition-colors">
                    {guide.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq id="minimax-faq" title="MiniMax Dev Community Expert FAQ" faqs={faqs} />

      <CtaBand
        title="Want an AI feature in your product?"
        body="Tell me what users should be able to do. I’ll suggest a model and an approach, and I’ll tell you if AI is the wrong tool for it."
        primary={{ href: contactHref('ai'), label: 'Plan an AI feature with me' }}
        secondary={{ href: '/ai-implementation', label: 'See AI engineering services' }}
      />
    </>
  )
}
