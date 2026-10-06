import type { Metadata } from 'next'
import { Mail, MapPin, Clock, ArrowRight, Send, MessageSquare, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { ContactForm } from '@/components/contact-form'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { UpworkIcon } from '@/components/icons/upwork'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'

const pageTitle = 'Start a Next.js, AI or WordPress Project'
const pageDescription =
  'Send your project to Aris Setiawan: Next.js, headless WordPress, AI features, or Cursor mentoring. Reply within 24 hours. English or Indonesian, remote worldwide.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/contact',
  keywords: [
    'Contact Developer',
    'Hire Next.js Developer',
    'Hire WordPress Developer',
    'Hire AI Developer',
    'Cursor Mentoring',
    'Remote Developer',
    'Full Stack Developer',
    'Next.js Development',
    'WordPress Development',
    'AI Product Development',
  ],
})

const structuredData = buildPageGraph({
  path: '/contact',
  name: pageTitle,
  description: pageDescription,
  type: 'ContactPage',
  breadcrumbs: [{ name: 'Contact', path: '/contact' }],
})

export default function ContactPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      
      {/* Hero Section */}
      <section className="text-center pt-8 pb-16">
        {/* Badge */}
        <div 
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={{
            position: 'relative',
            // @ts-expect-error CSS custom properties
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
            '--border-radius-before': '9999px'
          }}
        >
          <MessageSquare className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Start a project</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Tell me what
          <span className="block gradient-text font-light">you&apos;re building</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Send a few lines about what you need. I read every request myself and reply within 24 hours
          with questions or a plain answer on whether I&apos;m the right fit. English or Indonesian.
        </p>

        {/* CTA */}
        <Link 
          href="#contact-form"
          className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
        >
          <span className="text-sm font-medium tracking-tight">Start my project request</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Contact Form and Info Grid */}
      <section id="contact-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-zinc-100 rounded-xl">
                <Send className="w-5 h-5 text-zinc-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-zinc-900">Tell me about your project</h2>
                <p className="text-sm text-zinc-500">Takes about two minutes. I reply within 24 hours.</p>
              </div>
            </div>
            <Suspense fallback={<div className="h-[420px] rounded-lg border bg-card" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Details Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-6">Other ways to reach me</h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 rounded-lg shrink-0">
                  <Mail className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Email</p>
                  <Link 
                    href="mailto:arissetia.m@gmail.com" 
                    className="text-sm text-zinc-900 hover:text-orange-500 transition-colors font-medium"
                  >
                    arissetia.m@gmail.com
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 rounded-lg shrink-0">
                  <MapPin className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm text-zinc-900 font-medium">Sidoarjo, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 rounded-lg shrink-0">
                  <Clock className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Availability</p>
                  <p className="text-sm text-zinc-900 font-medium">Mon - Sat, 9:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Profiles Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Check my background first</h3>
            <div className="flex flex-col gap-2">
              <Link 
                href="https://www.linkedin.com/in/arissetia/" 
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 hover:bg-blue-50 transition-colors group"
              >
                <LinkedinIcon className="w-5 h-5 text-zinc-500 group-hover:text-blue-600" />
                <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600">LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-blue-600" />
              </Link>
              <Link 
                href="https://github.com/madebyaris" 
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors group"
              >
                <GithubIcon className="w-5 h-5 text-zinc-500 group-hover:text-zinc-900" />
                <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-zinc-900" />
              </Link>
              <Link 
                href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" 
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 hover:bg-green-50 transition-colors group"
              >
                <UpworkIcon className="w-5 h-5 text-zinc-500 group-hover:text-green-600" />
                <span className="text-sm font-medium text-zinc-700 group-hover:text-green-600">Upwork</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-green-600" />
              </Link>
            </div>
          </div>

          {/* Quick Response Card */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">What happens next</span>
            </div>
            <ol className="text-sm text-zinc-600 leading-relaxed space-y-2 list-decimal pl-4">
              <li>I read your request and reply within 24 hours.</li>
              <li>If it fits, we book a short scoping call.</li>
              <li>You get a written plan with milestones before any code.</li>
            </ol>
            <p className="text-xs text-zinc-500 mt-3">Urgent? Say so in your message.</p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How I can <span className="gradient-text">help</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            Not sure what to ask for? Start with the closest one.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Build a Next.js or AI product",
              description: "New apps, WordPress-to-Next.js migrations, AI features, and APIs, built on the App Router with TypeScript.",
              icon: "🚀",
              href: "/services/nextjs-development"
            },
            {
              title: "Fix or rebuild a WordPress site",
              description: "Custom themes, plugins, speed fixes, or a headless Next.js front end that keeps your editors in wp-admin.",
              icon: "🛠️",
              href: "/services/wordpress"
            },
            {
              title: "Train your team on Cursor",
              description: "Project rules and a review habit on one real repo, so AI-written code stops breaking your PRs.",
              icon: "⚡",
              href: "/services/vibe-code-friend"
            }
          ].map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group block"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[350px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[350px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Have a site, a repo, or just an idea?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send whatever you have. A URL and two sentences is enough for me to tell you what it would take.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="#contact-form"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Start my project request</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
