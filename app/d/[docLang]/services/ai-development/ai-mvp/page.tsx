import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Cpu,
  Database,
  Gauge,
  Layers,
  Lightbulb,
  LineChart,
  Rocket,
  Server,
  Users,
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

const pagePath = '/services/ai-development/ai-mvp'
const pageTitle = 'AI MVP development services for founders'
const pageDescription =
  'AI MVP development from idea to launch: real sign-up, payments, the core AI workflow on real inputs, spend caps per user, and the code in your repo.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/ai-mvp.jpg',
  keywords: [
    'AI MVP development',
    'AI MVP development services',
    'build an AI MVP',
    'AI product development',
    'AI startup MVP',
    'launch-ready MVP',
  ],
})

const audiences = [
  {
    title: 'Founders with an idea',
    description:
      'You know the problem and who would pay to have it solved. I turn the idea into a product people can sign up for, so you test it with real users.',
    icon: Lightbulb,
  },
  {
    title: 'Domain experts',
    description:
      'You know an industry and its daily tasks better than any developer. You bring the workflow, and I handle the code, the model calls, and the hosting.',
    icon: Briefcase,
  },
  {
    title: 'Small teams',
    description:
      'You have a team, but nobody is free to build the AI part. I build the MVP in a repo your developers can take over after launch.',
    icon: Users,
  },
]

const launchReady = [
  'Real sign-up and login, so each user has an account and their own data',
  'Payments, if the product charges from day one',
  'The core AI workflow working on real inputs from real users',
  'An evaluation set: sample cases I check the AI output against before each release',
  'Guardrails on what the model sees, what it may do, and what it returns',
  'Usage limits per user, so one account cannot run up your model bill',
  'Analytics that show who signs up, who comes back, and which steps they use',
  'Deployed on your domain, with the code and prompts in your own repo',
]

const cutFromV1 = [
  {
    title: 'A second AI workflow',
    description: 'One workflow that works tells you more than three that half work. The second one waits for usage data.',
  },
  {
    title: 'Native mobile apps',
    description: 'A responsive web app already runs on phones. Native apps make sense once people use the product often enough to ask.',
  },
  {
    title: 'Team accounts and roles',
    description: 'Most MVPs start with single users. Roles come back when a paying team asks for them.',
  },
  {
    title: 'Fine-tuned or self-hosted models',
    description: 'An existing model with good prompts and your data is usually enough to test the idea. Custom models can come later, if ever.',
  },
  {
    title: 'Every integration on the wish list',
    description: 'I connect the one or two tools the core workflow needs. The rest go on a list, ranked by what users request.',
  },
  {
    title: 'A full admin panel',
    description: 'Early on, I answer admin questions straight from the database. A panel is worth building once the same support task repeats.',
  },
]

const costLevers = [
  {
    title: 'Call the model only when needed',
    description:
      'Plain code handles parsing, filters, math, and formatting. The model runs only on the step that needs judgment or language.',
    icon: Cpu,
  },
  {
    title: 'Cache answers',
    description:
      'When a request repeats, the stored answer comes back without a new model call. Repeat questions stop costing you money.',
    icon: Database,
  },
  {
    title: 'Smaller models for simple steps',
    description:
      'Tagging, routing, and short extractions go to a small, cheap model. The larger model handles the step where quality shows.',
    icon: Layers,
  },
  {
    title: 'Spend caps per user',
    description:
      'Each account has a usage limit, and free plans get a lower one. A single heavy user hits the cap before your bill grows.',
    icon: Gauge,
  },
  {
    title: 'Hosting that scales from zero',
    description:
      'The app runs on serverless hosting such as Vercel, so a quiet week costs little. Hosting cost grows only when people use it.',
    icon: Server,
  },
  {
    title: 'Cost per user, measured',
    description:
      'Every model call is logged with its user and feature. You see what an active user costs before you set your prices.',
    icon: LineChart,
  },
]

const goodFit = [
  'You can describe the one task your product does for a user in two sentences',
  'You have real examples of the inputs: documents, messages, records, or questions',
  'You want real users and usage data before you raise money or hire a team',
  'You have a no-code prototype and need it rebuilt as code you own',
]

const poorFit = [
  'You need a model trained from scratch or ML research',
  'You want a pitch deck, investor intros, or help raising money',
  'You want every feature on the wish list in the first version',
  'You want your own developers to learn to build with AI (that is Cursor mentoring)',
]

const processSteps = [
  { step: 1, title: 'Idea call', desc: 'The idea, the users, and the one result they would pay for' },
  { step: 2, title: 'One-page scope', desc: 'The one workflow that must work, what is cut, and how we judge AI output' },
  { step: 3, title: 'Prototype on real data', desc: 'The AI step running on your real inputs, so you judge it by using it' },
  { step: 4, title: 'Build with weekly demos', desc: 'Sign-up, payments, limits, and analytics, shown to you every week' },
  { step: 5, title: 'Launch', desc: 'On your domain, with the evaluation set passing and spend caps on' },
  { step: 6, title: 'Decide what is next', desc: 'Usage data shows what to build, fix, or cut in version two' },
]

const topics = [
  {
    title: 'AI development services',
    description: 'Agents, chatbots, and LLM features for products that already exist.',
    href: '/services/ai-development',
  },
  {
    title: 'AI integration services',
    description: 'One AI feature added to an app or business you already run.',
    href: '/services/ai-development/ai-integration',
  },
  {
    title: 'SaaS development',
    description: 'Web apps built to stay cheap to run as the user count grows.',
    href: '/services/saas-development',
  },
  {
    title: 'Fix AI-written code',
    description: 'For prototypes built with AI coding tools that break once real users arrive.',
    href: '/services/vibe-code-friend/code-fixing',
  },
  {
    title: 'Introducing RankMySEO',
    description: 'Why I built my own SaaS and what the first version does.',
    href: '/blog/introducing-rankmyseo-saas',
  },
  {
    title: 'RankMySEO is live in open beta',
    description: 'What was ready when the public beta opened.',
    href: '/blog/rankmyseo-is-live-open-beta',
  },
  {
    title: 'AI agent development',
    description: 'How I build agents that ask a person before risky steps.',
    href: '/blog/ai-agent-development',
  },
  {
    title: 'When a website needs machine learning',
    description: 'How to tell whether your idea needs a model at all.',
    href: '/blog/when-a-website-needs-machine-learning',
  },
]

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much does AI MVP development cost?',
    answer:
      'I scope and price each MVP after a call, because the cost depends on the core workflow, your data, and what launch needs. Send me the idea and who it is for. I reply with what I would build first, what I would cut, and a price for that scope.',
  },
  {
    question: 'Which AI model will my MVP use?',
    answer:
      'The one that fits each step, because I am not tied to one provider. I work with OpenAI, Anthropic, MiniMax, and other compatible APIs, often through the Vercel AI SDK on Next.js. The provider sits behind one layer, so switching later does not mean a rewrite.',
  },
  {
    question: 'Who owns the code and the prompts?',
    answer:
      'You do. The code, prompts, and evaluation cases live in your repo from the first commit, and the app runs on accounts in your name. If we stop working together, you keep all of it.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We look at the usage data and decide what to build, fix, or cut next. I can keep working on it as a retainer, or hand it to your team with notes on how the pieces fit together.',
  },
  {
    question: 'Can you work from my no-code prototype?',
    answer:
      'Yes. A no-code prototype is a useful spec, because it shows the workflow you want. I rebuild it as code you own and keep the flows your users already like. If your prototype was written with an AI coding tool and keeps breaking, my code fixing service may be the cheaper first step.',
  },
  {
    question: 'Can you help me raise money or pitch investors?',
    answer:
      'No. I build the product, and I do not fundraise, write pitch decks, or make investor intros. A launched product with real users and usage data is something you can show anyone you pitch.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'AI development', path: '/services/ai-development' },
    { name: 'AI MVP', path: pagePath },
  ],
  service: {
    name: 'AI MVP development services',
    description: pageDescription,
    serviceType: 'AI MVP Development',
    offers: [
      { name: 'AI MVP scoping' },
      { name: 'AI prototype on real data' },
      { name: 'Launch-ready AI MVP build' },
      { name: 'AI cost control and per-user spend caps' },
      { name: 'Post-launch iteration retainer' },
    ],
  },
})

export default function AiMvpPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/ai-development" className="hover:text-orange-500 transition-colors">AI development</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">AI MVP</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Rocket className="w-4 h-4 text-orange-500" />, label: 'AI product, idea to launch' }}
        title="AI MVP development"
        accent="from your idea to a launch-ready product"
        actions={
          <>
            <Link
              href={contactHref('ai-mvp')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Scope my AI MVP</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#launch-ready"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">See what launch-ready includes</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For founders, domain experts, and small teams with an AI product idea. I build the MVP with sign-up, payments, and
          the core AI workflow working, then launch it on your domain.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          13+ years shipping web products, independent since 2015. I took my own SaaS, RankMySEO, from idea to a hosted MVP.
        </p>
      </PageHero>

      <HeroImage src="/images/services/ai-mvp.jpg" alt="Illustration of an idea turning into a stack of app screens: sign-in, an AI chat, and a dashboard" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What AI MVP development with me looks like
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          AI MVP development means building the smallest version of your AI product that real users can sign up for. I build
          the one AI workflow your idea depends on and test its output on sample cases. Then I wrap it in login, payments,
          usage limits, and analytics, and launch it on your domain.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          I build on existing models, mostly with Next.js and TypeScript. If your idea needs a model trained from scratch, you
          need an ML research team first. If you already have a product and want one AI feature in it, see{' '}
          <Link href="/services/ai-development/ai-integration" className={linkClass}>
            AI integration services
          </Link>
          .
        </p>
      </section>

      <section className="mb-16" aria-labelledby="audiences">
        <div className="text-center mb-10">
          <h2 id="audiences" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Who I build <span className="gradient-text">AI MVPs for</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            You bring the problem and access to the people who have it, and I handle the build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {audiences.map((item) => (
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

      <section id="launch-ready" className="mb-16 max-w-3xl mx-auto scroll-mt-32">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What a launch-ready MVP includes
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          A demo that works on my laptop is a prototype. Launch-ready means a stranger can find it, sign up, use the AI
          workflow, and pay, and you can see what they did. This is the list I check before launch day.
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
            {launchReady.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="cut">
        <div className="text-center mb-10">
          <h2 id="cut" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What I cut from v1, <span className="gradient-text">and why</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Every extra feature delays the day you learn whether people want the product. Cut items go on a written list, so
            nothing gets lost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cutFromV1.map((item) => (
            <div key={item.title} className="bg-zinc-50 rounded-2xl p-5">
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="cost">
        <div className="text-center mb-10">
          <h2 id="cost" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How I keep AI cost <span className="gradient-text">per user small</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            An AI product can lose money on every user if nobody watches the model calls. I build it the same way I build{' '}
            <Link href="/services/saas-development" className={linkClass}>
              SaaS that is cheap to run
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {costLevers.map((item) => (
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

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="proof">
        <h2 id="proof" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Proof you can check before you hire me
        </h2>
        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">I took RankMySEO from idea to a hosted MVP</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              <a href="https://rankmyseo.com" className={linkClass} target="_blank" rel="noopener noreferrer">
                RankMySEO
              </a>{' '}
              is a SaaS I built myself. It keeps daily Google rank history, runs rank checks in the background, and has
              Overview, Keywords, Competitors, and Insights views. I proved it on the diurusin.id demo, then opened the
              public beta on 31 Aug 2026. The story is in{' '}
              <Link href="/blog/introducing-rankmyseo-saas" className={linkClass}>
                introducing RankMySEO
              </Link>{' '}
              and{' '}
              <Link href="/blog/rankmyseo-is-live-open-beta" className={linkClass}>
                the open beta post
              </Link>
              .
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">It gives AI assistants tools, with approval gates</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              RankMySEO exposes tools that AI assistants can call. In the{' '}
              <a href="https://github.com/madebyaris/rankmyseo" className={linkClass} target="_blank" rel="noopener noreferrer">
                open-source toolkit
              </a>
              , the agent tools sit behind approval gates. I use the same pattern in an AI MVP: the agent asks a person before
              a risky step.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">I pick the model per task</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              I am the first Cursor Ambassador in Indonesia, a SpaceXAI Ambassador, and a MiniMax Dev Community Expert, so I
              work with several model providers. Each step in your MVP gets the model that fits it. The provider sits behind
              one layer, so you can switch later.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <h2 id="fit" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Is an AI startup MVP <span className="gradient-text">the right next step?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            If your idea works better without AI, I will tell you on the first call.
          </p>
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
            <p className="text-sm text-zinc-500 mt-4">
              Want your team to build it themselves?{' '}
              <Link href="/services/vibe-code-friend" className={linkClass}>
                See Cursor mentoring
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="process">
        <div className="text-center mb-10">
          <h2 id="process" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How we build <span className="gradient-text">an AI MVP together</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            You see working software every week, so you can change course before the budget is spent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {processSteps.map((item) => (
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

      <section className="mb-16" aria-labelledby="topics">
        <div className="text-center mb-10">
          <h2 id="topics" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            AI product development <span className="gradient-text">guides and related services</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            What I have written about building with AI, next to the services that put it into practice.
          </p>
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

      <Faq id="ai-mvp-faq" title="AI MVP development FAQ" faqs={faqs} />

      <CtaBand
        title="Have an AI product idea you want to launch?"
        body="Send me the idea, who it is for, and the one task it must do well. I reply with what I would build first, what I would cut, and how we would test the AI output. If the idea does not need AI, I will say so."
        primary={{ href: contactHref('ai-mvp'), label: 'Send me your AI product idea' }}
        secondary={{ href: '/services/ai-development/ai-integration', label: 'Add AI to an existing product' }}
      />
    </>
  )
}
