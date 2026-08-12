import type { Metadata } from 'next'
import { Layout, Globe, FileCode, Code2, ArrowRight, ArrowUpRight, Brush, Rocket, Zap, Users, Quote } from 'lucide-react'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 86400

const pageTitle = 'Hire a WordPress Developer | Themes, Plugins, Headless | Aris Setiawan'

const services = [
  {
    title: 'Theme Development',
    description: 'Custom WordPress themes built for your brand — mobile-first, fast, and maintainable.',
    icon: Brush,
    href: '/services/wordpress/theme-development',
    features: ['Custom Design', 'Mobile-First', 'SEO Ready', 'Fast Loading'],
  },
  {
    title: 'Plugin Development',
    description: 'Custom plugins when off-the-shelf does not cut it — integrations, memberships, APIs.',
    icon: FileCode,
    href: '/services/wordpress/plugin-development',
    features: ['Custom Features', 'API Integration', 'Secure Code', 'Maintainable'],
  },
  {
    title: 'Headless WordPress',
    description: 'WordPress as CMS, Next.js as frontend — better performance and a modern dev experience.',
    icon: Rocket,
    href: '/services/wordpress/headless-development',
    features: ['Next.js Frontend', 'REST/GraphQL', 'Better Performance', 'Modern Stack'],
  },
  {
    title: 'Performance Optimization',
    description: 'Slow site? I find the bottlenecks — caching, assets, queries — and fix what actually matters.',
    icon: Zap,
    href: '/services/wordpress/optimization',
    features: ['Speed Fixes', 'Security Hardening', 'CDN Setup', 'Caching'],
  },
]

const benefits = [
  { title: '13+ years with WP', description: 'Themes, plugins, headless', icon: Code2 },
  { title: 'Ships to production', description: 'Not just mockups', icon: Layout },
  { title: 'Headless when it fits', description: 'WP + Next.js stacks', icon: Rocket },
  { title: 'Remote worldwide', description: 'Async-friendly', icon: Globe },
]

const testimonials = [
  {
    quote: "The WordPress theme developed for our business perfectly captures our brand identity. The attention to detail exceeded our expectations.",
    author: "Marketing Director",
    company: "Retail Brand"
  },
  {
    quote: "The custom plugin developed for our membership site has streamlined our operations and improved user experience significantly.",
    author: "CEO",
    company: "Educational Platform"
  }
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/wordpress/#webpage",
  "name": pageTitle,
  "description": "Hire a WordPress developer for custom themes, plugins, headless WP + Next.js, and performance work. 13+ years. Remote worldwide.",
  "url": "https://madebyaris.com/services/wordpress"
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = buildPageMetadata({
    title: 'Hire a WordPress Developer | Themes, Plugins, Headless',
    description:
      'Hire a WordPress developer for custom themes, plugins, headless WP + Next.js, and performance work. 13+ years. Remote worldwide.',
    path: '/services/wordpress',
  })

  return {
    ...metadata,
    title: { absolute: pageTitle },
    openGraph: { ...metadata.openGraph, title: pageTitle },
    twitter: { ...metadata.twitter, title: pageTitle },
    keywords: [
      'Hire WordPress Developer',
      'WordPress Developer',
      'Custom WordPress Themes',
      'WordPress Plugin Development',
      'Headless WordPress',
      'WordPress Next.js',
      'WordPress Performance',
      'Remote WordPress Developer',
    ],
  }
}

export default function WordPressServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
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
          <Layout className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">WordPress Developer</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Hire a WordPress developer
          <span className="block gradient-text font-light">who ships</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Custom themes, plugins, headless WordPress with Next.js, and performance fixes.
          13+ years building WP for teams worldwide. Remote-friendly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Hire me to build</span>
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
            <span className="text-sm font-medium text-black/60 tracking-tight">View portfolio</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      {/* Separator */}
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
              '--border-radius-before': '9999px'
            }}
          >
            <Code2 className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">What I build</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            WordPress <span className="gradient-text">services</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            Themes, plugins, headless stacks, and speed work — pick what you need
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
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Benefits Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Why teams <span className="gradient-text">hire me</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="bg-zinc-50 rounded-2xl p-5 text-center"
            >
              <div className="p-3 bg-white rounded-xl w-fit mx-auto mb-3 shadow-sm">
                <benefit.icon className="w-5 h-5 text-zinc-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{benefit.title}</h3>
              <p className="text-xs text-zinc-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Testimonials Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div 
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px'
            }}
          >
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Client Feedback</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            What clients <span className="gradient-text">say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm"
            >
              <Quote className="w-8 h-8 text-orange-200 mb-4" />
              <p className="text-zinc-600 italic mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-zinc-900 text-sm">{testimonial.author}</p>
                <p className="text-xs text-zinc-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How we <span className="gradient-text">work</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: "Discovery", desc: "Scope, stack, and timeline" },
            { step: 2, title: "Plan", desc: "Clear milestones and deliverables" },
            { step: 3, title: "Build", desc: "Clean code, regular updates" },
            { step: 4, title: "Ship", desc: "Deploy, handoff, and support" },
          ].map((item) => (
            <div 
              key={item.step}
              className="bg-zinc-50 rounded-2xl p-5 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Need a WordPress developer?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Tell me about your site, stack, and timeline. I&apos;ll reply within 24 hours.
          </p>

          <Link 
            href="/contact"
            className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Hire me to build</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
