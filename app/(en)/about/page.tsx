import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Code2,
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react"
import { Timeline } from "@/components/ui/timeline"
import { GithubIcon } from "@/components/icons/github"
import { LinkedinIcon } from "@/components/icons/linkedin"
import { UpworkIcon } from "@/components/icons/upwork"
import { blurDataURLs } from '@/lib/utils'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'
import { contactHref } from '@/lib/contact-services'

const timelineData = [
  {
    title: "2025 to present",
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Independent full-stack developer and consultant</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          My own consulting practice is now my main work:<br/>
          • Leading enterprise-scale web development projects<br/>
          • Advising on technical architecture for web applications<br/>
          • Specializing in Next.js, React, and headless WordPress<br/>
          • Mentoring development teams and setting shared coding practices<br/>
          • Long-term partnerships with client companies
        </p>
      </div>
    ),
  },
  {
    title: "2015 to present",
    content: (
      <div className="bg-zinc-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Founder, MadeByAris</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          My own freelance business, offering:<br/>
          • Full-stack web development with <b>Next.js</b>, <b>React</b>, and <b>Laravel</b><br/>
          • Speed and performance work on existing websites<br/>
          • Technical SEO setup and fixes<br/>
          • Full website redesigns<br/>
          • Technical consulting and architecture planning<br/><br/>
          It started as arisdes.com. I renamed it <b>madebyaris.com</b> as the work and the services grew.
        </p>
      </div>
    ),
  },
  {
    title: "2022 to 2025",
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Senior full-stack developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          At <b>SAB Digital Marketing Agency</b> I:<br/>
          • Made client websites faster and cleaned up their codebases<br/>
          • Built new features and reworked existing ones<br/>
          • Worked with designers and SEO specialists on each project through to launch<br/>
          • Kept our code in line with current global development standards<br/>
          • Delivered multiple enterprise-level projects
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">CEO</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Led <b>Raja Kreatif Asia</b> as CEO, focused on growing the company.<br/>
          In that time we added services and reached new markets while keeping the standards our clients hired us for.
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">COO and co-founder</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          As COO at <b>Raja Kreatif Asia</b>, I:<br/>
          • Built business practices that could last, and a better office environment<br/>
          • Launched <b>Raja Kreatif Class</b> (kelas.rajakreatif.com), a WordPress learning platform<br/>
          • Added new services:<br/>
          &nbsp;&nbsp;◦ Web development, specializing in WordPress<br/>
          &nbsp;&nbsp;◦ SEO analysis and specialist services<br/>
          &nbsp;&nbsp;◦ Digital marketing<br/>
          • Supported every division in meeting its standards and KPIs
        </p>
      </div>
    ),
  },
  {
    title: "2019",
    content: (
      <div className="bg-zinc-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">CMO and co-founder</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          I started at <b>Raja Kreatif Asia</b> as CMO, where I:<br/>
          • Helped small businesses, enterprises, and government agencies with website development, branding, and SEO<br/>
          • Was the link between our team and clients, making sure work was delivered as promised<br/>
          • Put both team development and client satisfaction first<br/>
          • Set our service standards and built long-term client relationships
        </p>
      </div>
    ),
  },
  {
    title: "2016",
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
    title: "2015",
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Frontend developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          At <b>PT. DheZign Online solution</b> we designed website and mobile app mockups, turned them into HTML, and built the websites on WordPress.
          Stack: <b>WordPress</b>, <b>PHP</b>, <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>jQuery</b>, <b>Bootstrap</b>, and <b>CodeIgniter</b>.
        </p>
      </div>
    ),
  },
  {
    title: "2014",
    content: (
      <div className="bg-zinc-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Junior full-stack developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          At <b>SEREWare</b> I built web applications, designed systems and databases, and made web app animations.<br/>
          Stack: <b>PHP</b> and <b>MySQL</b>.
        </p>
      </div>
    ),
  },
  {
    title: "2013",
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
    desc: 'I scope the work, write the code, and answer your messages myself, from the first call to launch.',
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
    desc: 'Docs your team can follow without me, and support afterwards if you want it.',
  },
]

// Skills data
const skills = [
  { name: "Next.js", level: 95 },
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "WordPress", level: 95 },
  { name: "PHP/Laravel", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MySQL/PostgreSQL", level: 90 },
  { name: "Tailwind CSS", level: 95 },
]

const path = '/about'
const pageTitle = 'About Aris Setiawan: Next.js & AI Developer'
const pageDescription =
  'Aris Setiawan is a Next.js and AI developer in Sidoarjo, Indonesia: 13+ years shipping, ex-Hongkiat, and the first Cursor Ambassador in Indonesia.'

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
              alt="Aris Setiawan, Next.js and AI developer in Sidoarjo, Indonesia"
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
                  '--border-radius-before': '9999px'
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
                  '--border-radius-before': '12px'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-white font-semibold">Aris Setiawan</p>
                    <p className="text-white/60 text-xs">Next.js and AI developer</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/80 font-medium">Next.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/80 font-medium">React</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/80 font-medium">WordPress</span>
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
              '--border-radius-before': '9999px'
            }}
          >
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">About Aris</span>
          </div>

          {/* Name */}
          <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
            Aris Setiawan
            <span className="block gradient-text font-light text-3xl lg:text-4xl mt-2">
              Next.js, AI, and WordPress developer
            </span>
          </h1>

          {/* Bio */}
          <p className="text-base text-zinc-600 font-medium max-w-xl mb-4 leading-relaxed">
            I&apos;m Aris Setiawan, a Next.js developer in Indonesia with 13+ years of shipping web
            products and my own practice since 2015. I help founders, agencies, and marketing teams
            ship Next.js, headless WordPress, and AI products, and I coach engineering teams to get
            reliable code out of Cursor.
          </p>
          <p className="text-sm text-zinc-500 max-w-xl mb-4 leading-relaxed">
            You can hire me in two ways.{' '}
            <strong className="font-semibold text-zinc-700">Build</strong>: I ship your Next.js site,
            AI feature, or WordPress project to production.{' '}
            <strong className="font-semibold text-zinc-700">Level up</strong>: your developers keep
            writing the code, and I teach them a Cursor workflow that passes review.
          </p>
          <p className="text-sm text-zinc-500 max-w-xl mb-8 leading-relaxed">
            I was the{' '}
            <Link href="/cursor-ambassador" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">first Cursor Ambassador in Indonesia</Link>
            , I’m a{' '}
            <Link href="/spacexai-ambassador" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">SpaceXAI Ambassador</Link>
            , and a{' '}
            <Link href="/minimax-ambassador" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">MiniMax Dev Community Expert</Link>
            . I also worked at Hongkiat.com, co-founded Raja Kreatif Asia, and was a senior full-stack developer at SAB Digital Marketing Agency. This site runs on headless WordPress and Next.js on Vercel, the same setup I build for clients.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Sidoarjo, Indonesia</span>
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
              href={contactHref('other')}
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
                '--border-radius-before': '9999px'
              }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">See client projects</span>
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-16 lg:my-20 opacity-60" />

      {/* Philosophy Section */}
      <section className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <blockquote className="text-2xl md:text-3xl font-medium text-zinc-900 italic leading-relaxed tracking-tight mb-6">
          &ldquo;I have served, and I will be of service.&rdquo;
        </blockquote>
        <p className="text-sm text-zinc-500 font-medium">The line I work by</p>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 lg:mb-20 opacity-60" />

      {/* How I work */}
      <section className="mb-16 lg:mb-20">
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 lg:mb-20 opacity-60" />

      {/* Skills Section */}
      <section className="mb-16 lg:mb-20">
        <div className="text-center mb-12">
          <div 
            className="inline-flex bg-white/60 rounded-full mb-6 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px'
            }}
          >
            <Code2 className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tighter mb-4">
            The tools I <span className="gradient-text">ship with</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl mx-auto font-medium">
            What I use on client work today. The bars are my own rating of how deep I go in each.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-zinc-900">{skill.name}</span>
                <span className="text-sm text-zinc-500 font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 lg:mb-20 opacity-60" />

      {/* Timeline Section */}
      <section className="mb-16 lg:mb-20">
        <div className="text-center mb-12">
          <div 
            className="inline-flex bg-white/60 rounded-full mb-6 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px'
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 lg:mb-20 opacity-60" />

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col p-8 md:p-12 lg:p-16 justify-center min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Have a project that needs a senior developer?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl font-medium">
            Send a few lines about the project or your team. I read every request myself, reply within
            24 hours, and tell you plainly whether I&apos;m the right fit. English or Indonesian.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link 
              href={contactHref('other')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Send me your request</span>
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
