import type { Metadata } from 'next'
import { Code2, Layout, Server, Zap, ArrowRight, ArrowUpRight, MessageSquareHeart, Briefcase } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 86400 // Revalidate daily

const services = [
  {
    title: 'Next.js Development',
    description: 'Modern web applications built with Next.js for optimal performance, SEO, and exceptional user experience.',
    icon: Code2,
    href: '/services/nextjs-development',
    features: ['Server Components', 'Static Generation', 'Edge Runtime', 'API Routes'],
    span: 2,
  },
  {
    title: 'PHP Development',
    description: 'Custom PHP applications and solutions built with modern practices and robust architecture.',
    icon: Server,
    href: '/services/php-development',
    features: ['Custom Applications', 'API Development', 'Database Design', 'Security Focus'],
    span: 1,
  },
  {
    title: 'WordPress Development',
    description: 'Professional WordPress development including custom themes, plugins, and headless solutions.',
    icon: Layout,
    href: '/services/wordpress',
    features: ['Custom Themes', 'Plugin Development', 'Headless WordPress', 'Performance'],
    span: 1,
  },
  {
    title: 'Vibe Code Friend',
    description: 'Your AI-powered coding companion. Get help with AI tools like Cursor, code fixes, server setup, and infrastructure architecture.',
    icon: MessageSquareHeart,
    href: '/services/vibe-code-friend',
    features: ['AI IDE Tutoring', 'Code Fixing', 'Server Setup', 'Project Restructuring'],
    span: 2,
  },
]

const wordPressServices = [
  {
    title: 'Custom Theme Development',
    description: 'Pixel-perfect WordPress themes that capture your unique style.',
    href: '/services/wordpress/theme-development',
    benefits: ['Unique Design', 'Mobile-First', 'SEO Optimized'],
  },
  {
    title: 'Plugin Development',
    description: 'Custom WordPress plugins that add exactly the features you need.',
    href: '/services/wordpress/plugin-development',
    benefits: ['Custom Features', 'Integration Ready', 'Scalable'],
  },
  {
    title: 'Headless WordPress',
    description: 'Modern headless WordPress solutions with Next.js frontends.',
    href: '/services/wordpress/headless-development',
    benefits: ['Modern Stack', 'Better Performance', 'API-Driven'],
  },
  {
    title: 'WordPress Optimization',
    description: 'Comprehensive WordPress optimization for peak performance.',
    href: '/services/wordpress/optimization',
    benefits: ['Speed Optimization', 'Security Hardening', 'CDN Setup'],
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/#webpage",
  "url": "https://madebyaris.com/services",
  "name": "Professional Web Development Services | Next.js, WordPress & PHP",
  "description": "Expert development services focused on modern technologies and best practices. From blazing-fast Next.js applications to powerful WordPress solutions.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://madebyaris.com/#website"
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Web Development Services | Next.js, WordPress & PHP',
    description: 'Professional web development services including Next.js, WordPress, and PHP development. Expert solutions for modern web applications.',
    keywords: [
      'Web Development Services',
      'Next.js Development',
      'WordPress Development',
      'PHP Development',
      'Full Stack Development',
      'Custom Web Solutions',
      'Enterprise Development',
      'Modern Web Apps',
      'Web Architecture',
      'Technical Consulting'
    ],
    openGraph: {
      title: 'Web Development Services | Modern Solutions',
      description: 'Professional web development services for modern businesses.',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Web Development Services | Modern Solutions',
      description: 'Professional web development services for modern businesses.',
    },
    alternates: {
      canonical: 'https://madebyaris.com/services'
    },
  }
}

export default function ServicesPage() {
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
          <Briefcase className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Expert Services</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Professional
          <span className="block gradient-text font-light">Web Development</span>
          <span className="block">Services</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Expert development services focused on modern technologies and best practices. 
          From blazing-fast Next.js applications to powerful WordPress solutions.
        </p>

        {/* CTA */}
        <Link 
          href="/contact"
          className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
        >
          <span className="text-sm font-medium tracking-tight">Start Your Project</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Main Services Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-2">
              Core <span className="gradient-text">Offerings</span>
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`bento-card group relative overflow-hidden ${service.span === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3 text-zinc-400">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={feature} 
                      className="px-2 py-1 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium uppercase tracking-wide"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-orange-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* WordPress Services Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div 
              className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
              style={{
                position: 'relative',
                // @ts-expect-error CSS custom properties
                '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
                '--border-radius-before': '9999px'
              }}
            >
              <Layout className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">WordPress Expertise</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-2">
              WordPress Development <span className="gradient-text">Services</span>
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              Specialized WordPress solutions from custom themes to headless architectures
            </p>
          </div>
          <Link 
            href="/services/wordpress" 
            className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-medium text-zinc-900"
          >
            View all WordPress services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* WordPress Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {wordPressServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 group"
            >
              <h3 className="text-base font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {service.benefits.map((benefit) => (
                  <span 
                    key={benefit} 
                    className="px-2 py-0.5 bg-orange-50 rounded text-[10px] text-orange-600 font-medium"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            A structured approach to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: "Discovery", desc: "Understanding your goals and requirements" },
            { step: 2, title: "Planning", desc: "Creating a detailed roadmap and specifications" },
            { step: 3, title: "Development", desc: "Building with clean, efficient code" },
            { step: 4, title: "Launch", desc: "Deploying and providing ongoing support" },
          ].map((item) => (
            <div 
              key={item.step}
              className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/60 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

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

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Ready to Start Your Project?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Let&apos;s collaborate to create a high-performance solution that meets your business needs.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/projects"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
