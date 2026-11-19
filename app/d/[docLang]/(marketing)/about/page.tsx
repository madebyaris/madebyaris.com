import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Code2,
  Cpu,
  Layers,
  MapPin,
  MessageSquare,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { Timeline } from '@/components/ui/timeline'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { UpworkIcon } from '@/components/icons/upwork'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
import { blurDataURLs } from '@/lib/utils'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'
import { contactHref } from '@/lib/contact-services'

const timelineData = [
  {
    title: '2025 to present',
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Senior AI software engineer and AI consultant</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Running MadeByAris full time, focused on production AI engineering and full-stack products:<br />
          • Taking AI pilots to production with evals, logging, LLM harnesses, and spend caps<br />
          • Building multi-agent workflows, MCP servers, and AI features inside existing codebases<br />
          • Shipping SaaS, Rust CLI and desktop software, Next.js apps, and high-volume backends<br />
          • Maintaining open-source AI tools (nca, Spec Kit for Cursor, Agent Orchestration, Chaca Scanner, RankMySEO)<br />
          • Coaching engineering teams on Cursor project rules and AI code review
        </p>
      </div>
    ),
  },
  {
    title: '2015 to present',
    content: (
      <div className="bg-zinc-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Founder, MadeByAris</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          My own independent engineering practice, delivering:<br />
          • AI engineering, full-stack web products, and APIs with <b>TypeScript</b>, <b>Next.js</b>, <b>React</b>, <b>Rust</b>, and <b>Laravel</b><br />
          • Database query tuning and speed work on slow production websites<br />
          • Technical SEO architecture, schema, and migration planning<br />
          • Full website redesigns and headless WordPress builds<br />
          • Architecture reviews and hands-on technical consulting<br /><br />
          It started as arisdes.com. I renamed it <b>madebyaris.com</b> as the work and the stack grew.
        </p>
      </div>
    ),
  },
  {
    title: '2022 to 2025',
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Senior full-stack developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          At <b>SAB Digital Marketing Agency</b> I:<br />
          • Made client websites faster and cleaned up their codebases<br />
          • Built new features and reworked existing ones<br />
          • Worked with designers and SEO specialists on each project through to launch<br />
          • Kept our code in line with current global development standards<br />
          • Delivered multiple enterprise-level projects
        </p>
      </div>
    ),
  },
  {
    title: '2022',
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">CEO</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Led <b>Raja Kreatif Asia</b> as CEO, focused on growing the company.<br />
          In that time we added services and reached new markets while keeping the standards our clients hired us for.
        </p>
      </div>
    ),
  },
  {
    title: '2021',
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">COO and co-founder</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          As COO at <b>Raja Kreatif Asia</b>, I:<br />
          • Built business practices that could last, and a better office environment<br />
          • Launched <b>Raja Kreatif Class</b> (kelas.rajakreatif.com), a WordPress learning platform<br />
          • Added new services:<br />
          &nbsp;&nbsp;◦ Web development, specializing in WordPress<br />
          &nbsp;&nbsp;◦ SEO analysis and specialist services<br />
          &nbsp;&nbsp;◦ Digital marketing<br />
          • Supported every division in meeting its standards and KPIs
        </p>
      </div>
    ),
  },
  {
    title: '2019',
    content: (
      <div className="bg-zinc-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">CMO and co-founder</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          I started at <b>Raja Kreatif Asia</b> as CMO, where I:<br />
          • Helped small businesses, enterprises, and government agencies with website development, branding, and SEO<br />
          • Was the link between our team and clients, making sure work was delivered as promised<br />
          • Put both team development and client satisfaction first<br />
          • Set our service standards and built long-term client relationships
        </p>
      </div>
    ),
  },
  {
    title: '2016',
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">WordPress developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          At <b>Hongkiat.com</b> I built new features and made the site faster using <b>WordPress</b>, <b>PHP</b>, <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>jQuery</b>.
        </p>
      </div>
    ),
  },
  {
    title: '2015',
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Frontend developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          At <b>PT. DheZign Online Solution</b> we designed website and mobile app mockups, turned them into HTML, and built the websites on WordPress.
          Stack: <b>WordPress</b>, <b>PHP</b>, <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>jQuery</b>, <b>Bootstrap</b>, and <b>CodeIgniter</b>.
        </p>
      </div>
    ),
  },
  {
    title: '2014',
    content: (
      <div className="bg-zinc-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Junior full-stack developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          At <b>SEREWare</b> I built web applications, designed systems and databases, and made web app animations.<br />
          Stack: <b>PHP</b> and <b>MySQL</b>.
        </p>
      </div>
    ),
  },
  {
    title: '2013',
    content: (
      <div className="bg-zinc-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Junior backend developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          At <b>PT. Elkabumi Caraka Daya</b> I built back ends for their clients, made reports with iReport, and designed databases.
          Stack: PHP, MySQL, and JavaScript.
        </p>
      </div>
    ),
  },
]

const howIWork = [
  {
    step: 1,
    title: 'You deal with me directly',
    desc: 'I scope the architecture, lead the build, and answer your messages myself, from the first call to launch.',
  },
  {
    step: 2,
    title: 'A written plan before code',
    desc: 'After a short scoping call you get milestones and the trade-offs I’d make, in writing, before I start.',
  },
  {
    step: 3,
    title: 'Progress every week',
    desc: 'A working demo or a coaching session every week, so you always know where the work stands.',
  },
  {
    step: 4,
    title: 'A handoff your team can use',
    desc: 'Readable code, evals, and docs your team can extend without me, plus optional support afterwards.',
  },
]

const skillGroups = [
  {
    icon: Sparkles,
    title: 'AI and LLM engineering',
    description: 'Turning prototypes into production features that stay accurate and within budget.',
    skills: [
      'OpenAI, Anthropic & MiniMax APIs',
      'Vercel AI SDK',
      'AI agents & tool calling',
      'MCP server architecture',
      'RAG & document Q&A',
      'LLM harnesses, evals & spend caps',
    ],
  },
  {
    icon: Layers,
    title: 'Frontend and web products',
    description: 'Fast web apps and marketing surfaces engineered for real users and search engines.',
    skills: [
      'TypeScript & JavaScript',
      'Next.js App Router',
      'React & Vite',
      'Tailwind CSS',
      'Core Web Vitals tuning',
      'Technical SEO & JSON-LD schema',
    ],
  },
  {
    icon: Cpu,
    title: 'Backend, systems and data',
    description: 'Fast APIs, native binaries, and databases tuned for throughput and low hosting cost.',
    skills: [
      'Rust & Tauri (CLI and desktop)',
      'Node.js & Fastify',
      'PHP & Laravel',
      'PostgreSQL & MySQL tuning',
      'VPS, Linux & network setup',
      'Vercel & scale-from-zero hosting',
    ],
  },
  {
    icon: Wrench,
    title: 'CMS and AI dev workflows',
    description: 'Connecting modern front ends and AI tools to existing editorial and engineering workflows.',
    skills: [
      'Headless WordPress + Next.js',
      'Custom WordPress themes & plugins',
      'WooCommerce integrations',
      'Cursor project rules (.mdc)',
      'AI-assisted PR review workflows',
      'Legacy codebase modernization',
    ],
  },
]

const path = '/about'
const pageTitle = 'About Aris Setiawan: AI Engineer Indonesia & EU'
const pageDescription =
  'Aris Setiawan is a senior AI software engineer and AI consultant in Indonesia partnering with EU and local teams: AI agents, Rust, Next.js, apps, and Cursor.'

const structuredData = buildPageGraph({
  path,
  type: 'AboutPage',
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [{ name: 'About', path }],
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  brand: false,
  keywords: [
    'Aris Setiawan',
    'AI engineer Indonesia',
    'AI software engineer',
    'AI consultant',
    'remote AI engineer Europe',
    'Cursor Ambassador Indonesia',
    'full stack AI engineer',
  ],
})

export default function AboutPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-8 pt-4">
        {/* Left Column: Profile Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/20 border border-white/20">
            <Image
              src="/aris.png"
              alt="Aris Setiawan, senior AI software engineer and AI consultant in Sidoarjo, Indonesia"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={blurDataURLs.avatar}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />

            {/* Available Badge */}
            <div className="absolute top-6 left-6">
              <div
                className="flex gap-2 bg-gradient-to-b from-white/20 to-white/5 rounded-full py-1.5 px-3 items-center backdrop-blur-sm"
                style={{
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',
                  '--border-radius-before': '9999px',
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] uppercase font-semibold text-white tracking-wide">Taking new projects</span>
              </div>
            </div>

            {/* Info Card at Bottom */}
            <div className="absolute bottom-6 left-6 right-6">
              <div
                className="bg-gradient-to-b from-white/15 to-white/5 rounded-xl p-4 backdrop-blur-md"
                style={{
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
                  '--border-radius-before': '12px',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-white font-semibold">Aris Setiawan</p>
                    <p className="text-white/60 text-xs">Senior AI software engineer</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/80 font-medium">AI Agents</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/80 font-medium">Rust</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/80 font-medium">Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Badge */}
          <div
            className="inline-flex bg-white/60 w-max rounded-full mb-6 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">About Aris</span>
          </div>

          {/* Name */}
          <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
            Aris Setiawan
            {' '}
            <span className="block gradient-text font-light text-3xl lg:text-4xl mt-2">
              Senior AI software engineer and AI consultant
            </span>
          </h1>

          {/* Bio */}
          <p className="text-base text-zinc-600 font-medium max-w-xl mb-4 leading-relaxed">
            I&apos;m Aris Setiawan, a senior AI software engineer and AI consultant in Indonesia with 13+ years
            of shipping production software and my own practice since 2015. I join European (EU and UK)
            and Indonesian engineering teams on AI and app projects, owning everything from the LLM
            harness and agents to the web app, API, database, and hosting.
          </p>
          <p className="text-sm text-zinc-500 max-w-xl mb-4 leading-relaxed">
            You can work with me in two ways.{' '}
            <strong className="font-semibold text-zinc-700">Build</strong>: I lead and ship your
            production AI system, agent workflow, Rust tool, or full-stack web product.{' '}
            <strong className="font-semibold text-zinc-700">Level up</strong>: your engineers keep
            writing the code, and I teach them a Cursor workflow and review habit that holds up.
          </p>
          <p className="text-sm text-zinc-500 max-w-xl mb-8 leading-relaxed">
            I was the{' '}
            <Link href="/cursor-ambassador" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">first Cursor Ambassador in Indonesia</Link>
            , I’m a{' '}
            <Link href="/spacexai-ambassador" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">SpaceXAI Ambassador</Link>
            , and a{' '}
            <Link href="/minimax-ambassador" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">MiniMax Dev Community Expert</Link>
            . Earlier in my career I worked at Hongkiat.com, co-founded Raja Kreatif Asia, and served as a senior full-stack developer at SAB Digital Marketing Agency. In public, I maintain open-source Rust and MCP agent tools on GitHub and run RankMySEO.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Indonesia (UTC+7) · EU morning overlap</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span>13+ years shipping</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <MessageSquare className="w-4 h-4 text-orange-500" />
              <span>English and Indonesian</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href={contactHref('ai-implementation')}
              className="btn-primary hover:scale-[1.02] transition-all flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Tell me what you need</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{
                boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                position: 'relative',
                // @ts-expect-error CSS custom properties
                '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
                '--border-radius-before': '9999px',
              }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">See open source and projects</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Check my profiles</span>
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/arissetia/"
                target="_blank"
                aria-label="Aris Setiawan on LinkedIn"
                className="p-2 rounded-full bg-zinc-100 hover:bg-orange-100 text-zinc-600 hover:text-orange-500 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com/madebyaris"
                target="_blank"
                aria-label="Aris Setiawan on GitHub"
                className="p-2 rounded-full bg-zinc-100 hover:bg-orange-100 text-zinc-600 hover:text-orange-500 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
                target="_blank"
                aria-label="Aris Setiawan on Upwork"
                className="p-2 rounded-full bg-zinc-100 hover:bg-orange-100 text-zinc-600 hover:text-orange-500 transition-colors"
              >
                <UpworkIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-12 lg:my-16 opacity-60" />

      {/* Philosophy Section */}
      <section className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <blockquote className="text-2xl md:text-3xl font-medium text-zinc-900 italic leading-relaxed tracking-tight mb-6">
          &ldquo;I have served, and I will be of service.&rdquo;
        </blockquote>
        <p className="text-sm text-zinc-500 font-medium">The line I work by</p>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 lg:mb-16 opacity-60" />

      {/* Skills Matrix Section */}
      <section className="mb-12 lg:mb-16" aria-labelledby="about-skills">
        <div className="text-center mb-12">
          <div
            className="inline-flex bg-white/60 rounded-full mb-6 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Code2 className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Engineering stack</span>
          </div>
          <h2 id="about-skills" className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tighter mb-4">
            The skills I <span className="gradient-text">ship with in production</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-2xl mx-auto font-medium">
            Shipping AI features reliably requires understanding every layer around the model. These are the tools and systems I work in directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-zinc-100 rounded-xl text-zinc-700">
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">{group.title}</h3>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">{group.description}</p>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 bg-zinc-100 rounded-full text-xs text-zinc-700 font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 lg:mb-16 opacity-60" />

      {/* Open Source Proof */}
      <OpenSourceProjects
        id="about-open-source"
        title="Open-source AI and developer tools"
        intro="All my client work is under NDA, so my public engineering proof is code you can inspect directly on GitHub."
      />

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 lg:mb-16 opacity-60" />

      {/* How I work */}
      <section className="mb-12 lg:mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tighter mb-4">
            How I <span className="gradient-text">work</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl mx-auto font-medium">
            The same four steps whether I build for you or coach your team. If something isn&apos;t
            worth building, I&apos;ll say so before you pay for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {howIWork.map((item) => (
            <div key={item.step} className="bg-zinc-50 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 lg:mb-16 opacity-60" />

      {/* Timeline Section */}
      <section className="mb-12 lg:mb-16">
        <div className="text-center mb-12">
          <div
            className="inline-flex bg-white/60 rounded-full mb-6 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px',
            }}
          >
            <Calendar className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Career</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tighter mb-4">
            Where I&apos;ve <span className="gradient-text">worked since 2013</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl mx-auto font-medium">
            Every role, newest first. Some overlap because I&apos;ve run MadeByAris alongside other jobs since 2015.
          </p>
        </div>

        <Timeline data={timelineData} />
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 lg:mb-16 opacity-60" />

      {/* CTA Section */}
      <section className="overflow-hidden shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col px-6 py-12 md:px-12 md:py-14 justify-center relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Need an AI engineer who can own the whole build?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl font-medium">
            Send a few lines about the system, your stack, or your team. I read every request myself, reply within
            24 hours, and tell you plainly whether I&apos;m the right fit. English or Indonesian.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={contactHref('ai-implementation')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Send me your project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Compare services first</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
