import type { Metadata } from 'next'
import { Mail, MapPin, Clock, ArrowRight, Linkedin, Github, Send, MessageSquare, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { UpworkIcon } from '@/components/icons/upwork'
import { buildPageMetadata } from '@/lib/seo'
import {
  contactCopy,
  contactH1Accent,
  contactH1Lead,
  contactKeywords,
  contactMeta,
  contactPostalAddress,
  contactTitle,
  doors,
} from './copy'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://madebyaris.com/contact/#webpage",
  "name": contactTitle,
  "description": contactMeta,
  "url": "https://madebyaris.com/contact",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://madebyaris.com/#website"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://madebyaris.com",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://madebyaris.com/contact",
          "name": "Contact"
        }
      }
    ]
  },
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://madebyaris.com/#organization",
    "name": "MadeByAris",
    "url": "https://madebyaris.com",
    "founder": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "Next.js & WordPress Developer",
      "url": "https://madebyaris.com",
      "image": "https://madebyaris.com/aris.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": contactCopy.email,
      "availableLanguage": ["English", "Indonesian"],
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": contactPostalAddress.addressLocality,
      "addressCountry": contactPostalAddress.addressCountry
    },
    "sameAs": [
      "https://www.linkedin.com/in/arissetia/",
      "https://github.com/madebyaris",
      "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const generated = buildPageMetadata({
    title: contactTitle,
    description: contactMeta,
    path: '/contact',
  })

  return {
    ...generated,
    title: { absolute: contactTitle },
    description: contactMeta,
    openGraph: {
      ...generated.openGraph,
      title: contactTitle,
      description: contactMeta,
    },
    twitter: {
      ...generated.twitter,
      title: contactTitle,
      description: contactMeta,
    },
    keywords: [...contactKeywords],
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="text-center pt-8 pb-16">
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
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Get in Touch</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          {contactH1Lead}{' '}
          {contactH1Accent ? (
            <span className="block gradient-text font-light">{contactH1Accent}</span>
          ) : null}
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          {contactCopy.lead}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {doors.map((door) => (
            <div
              key={door.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm"
            >
              <p className="font-semibold text-zinc-900 mb-2">{door.label}</p>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">{door.blurb}</p>
              <Link
                href={door.href}
                className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
              >
                <span className="text-sm font-medium tracking-tight">{door.cta}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section id="contact-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-zinc-100 rounded-xl">
                <Send className="w-5 h-5 text-zinc-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-zinc-900">{contactCopy.formHeading}</h2>
                <p className="text-sm text-zinc-500">{contactCopy.formNote}</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-6">Contact Information</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 rounded-lg shrink-0">
                  <Mail className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{contactCopy.emailLabel}</p>
                  <Link
                    href={`mailto:${contactCopy.email}`}
                    className="text-sm text-zinc-900 hover:text-orange-500 transition-colors font-medium"
                  >
                    {contactCopy.email}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 rounded-lg shrink-0">
                  <MapPin className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{contactCopy.locationLabel}</p>
                  <p className="text-sm text-zinc-900 font-medium">{contactCopy.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-100 rounded-lg shrink-0">
                  <Clock className="w-4 h-4 text-zinc-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{contactCopy.availabilityLabel}</p>
                  <p className="text-sm text-zinc-900 font-medium">{contactCopy.availability}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">{contactCopy.profilesHeading}</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="https://www.linkedin.com/in/arissetia/"
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 hover:bg-blue-50 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-zinc-500 group-hover:text-blue-600" />
                <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600">LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 ml-auto group-hover:text-blue-600" />
              </Link>
              <Link
                href="https://github.com/madebyaris"
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors group"
              >
                <Github className="w-5 h-5 text-zinc-500 group-hover:text-zinc-900" />
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

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Quick Response</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              I typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How I can <span className="gradient-text">help</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            {contactCopy.helpSection}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Build — Next.js & AI products",
              description: "Ship web apps, migrations, AI features, and APIs. App Router, TypeScript, production-ready code.",
              icon: "🚀",
              href: "/services/nextjs-development"
            },
            {
              title: "Build — WordPress",
              description: "Custom themes, plugins, headless WP with Next.js, and performance fixes that actually stick.",
              icon: "🛠️",
              href: "/services/wordpress"
            },
            {
              title: "Level up — Cursor mentoring",
              description: "Practical AI workflows, Cursor setup, and coaching so your team ships faster without messy code.",
              icon: "⚡",
              href: "/cursor-ambassador"
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

      <section className="overflow-hidden min-h-[350px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[350px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            {contactCopy.closerH2}
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            {contactCopy.closerBody}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {doors.map((door) => (
              <Link
                key={door.id}
                href={door.href}
                className={
                  door.id === 'build'
                    ? "group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    : "group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
                }
              >
                <span>{door.cta}</span>
                {door.id === 'build' ? (
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
