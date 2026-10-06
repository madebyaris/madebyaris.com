import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Sparkles, Users, Lightbulb, ExternalLink, BookOpen } from 'lucide-react'
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
  faqs,
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

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function MiniMaxAmbassadorPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li>
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <span className="px-2">/</span>
          </li>
          <li className="text-zinc-900">MiniMax Dev Community Expert</li>
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
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">MiniMax Dev Community Expert</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          <span className="gradient-text-minimax">MiniMax</span>
          <span className="block font-light">Dev Community Expert</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          I’m Aris Setiawan, a MiniMax Dev Community Expert based in Indonesia. I help builders and teams get MiniMax models into real products, with an honest view of cost, output quality, and where a model falls short.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          13+ years shipping web products. I’m also the first{' '}
          <Link href="/cursor-ambassador" className={linkClass}>Cursor Ambassador in Indonesia</Link>
          {' '}and a SpaceXAI Ambassador. More on{' '}
          <a href="https://www.linkedin.com/in/arissetia/" target="_blank" rel="noreferrer" className={linkClass}>
            LinkedIn
          </a>
          .
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('ai')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Plan an AI feature with me</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/minimax-ambassador/minimax-indonesia"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Read the MiniMax Indonesia guide</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What a MiniMax ambassador does
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">{faqs[0].answer}</p>
        <p className="text-zinc-600 leading-relaxed">
          When a team wants a feature built on MiniMax models, I can also plan and ship it with them, from the first prompt to the production API call.
        </p>
      </section>

      {/* Highlights */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">What I focus on</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How I approach <span className="gradient-text">the role</span>
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
            What I do as a MiniMax Dev Community Expert
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatIDo.map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-xl">
                <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-500">
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
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight mb-2">
              MiniMax Indonesia: panduan coding
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
              Panduan singkat dalam Bahasa Indonesia: apa itu MiniMax M-2.1, cara pakai MiniMax Coding Plan di IDE, dan langkah awal dengan MiniMax API.
            </p>
          </div>
          <Link
            href="/minimax-ambassador/minimax-indonesia"
            className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 shrink-0"
          >
            <span>Baca panduannya</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 tracking-tight">
              Where to start with AI features
            </h2>
          </div>
          <p className="text-sm text-zinc-500 mb-6">
            Guides I wrote on shipping AI features. They apply whether you pick MiniMax or another model.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="flex items-start gap-3 p-3 bg-zinc-50 rounded-xl hover:bg-orange-50 transition-colors group"
                >
                  <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-zinc-700 font-medium group-hover:text-zinc-900">{guide.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="minimax-faq">
        <h2 id="minimax-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          MiniMax Dev Community Expert FAQ
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm open:shadow-md">
              <summary className="cursor-pointer list-none font-semibold text-zinc-900 flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-orange-500 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
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
            Want an AI feature in your product?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Tell me what users should be able to do. I’ll suggest a model and an approach, and I’ll tell you if AI is the wrong tool for it.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('ai')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Plan an AI feature with me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/ai-development"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>See AI development services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
