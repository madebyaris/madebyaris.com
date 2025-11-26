import type { Metadata } from 'next'
import { Mail, MapPin, Clock, ArrowRight, Linkedin, Github, Send, MessageSquare, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { UpworkIcon } from '@/components/icons/upwork'

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://madebyaris.com/contact/#webpage",
  "name": "Contact Aris Setiawan | Enterprise Web Development Solutions",
  "description": "Get in touch with Aris Setiawan for enterprise web development projects, technical consultations, and collaborations.",
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
      "jobTitle": "Senior Full Stack Developer",
      "url": "https://madebyaris.com",
      "image": "https://madebyaris.com/aris.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "arissetia.m@gmail.com",
      "availableLanguage": ["English", "Indonesian"],
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sidoarjo",
      "addressCountry": "Indonesia"
    },
    "sameAs": [
      "https://www.linkedin.com/in/arissetia/",
      "https://github.com/madebyaris",
      "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Aris Setiawan | Enterprise Web Development Solutions',
    description: 'Get in touch for enterprise-level web development solutions, technical consultations, or project collaborations. Specializing in Next.js, React, and WordPress.',
    keywords: [
      'Contact Developer',
      'Hire Web Developer',
      'Enterprise Solutions',
      'Technical Consultation',
      'Next.js Development',
      'React Development',
      'WordPress Development',
      'Full Stack Developer',
      'Web Architecture',
      'Project Collaboration'
    ],
    openGraph: {
      title: 'Contact Aris Setiawan | Enterprise Web Development',
      description: 'Let\'s collaborate on your next web development project.',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Aris Setiawan | Enterprise Web Development',
      description: 'Let\'s collaborate on your next web development project.',
    },
    alternates: {
      canonical: 'https://madebyaris.com/contact'
    }
  }
}

export default function ContactPage() {
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
          <MessageSquare className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Get in Touch</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Let&apos;s Build
          <span className="block gradient-text font-light">Something Amazing</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Enterprise-level solutions & technical consultation to help turn your vision into reality.
        </p>

        {/* CTA */}
        <Link 
          href="#contact-form"
          className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
        >
          <span className="text-sm font-medium tracking-tight">Start Your Project</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Contact Form and Info Grid */}
      <section id="contact-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-200/60 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-zinc-100 rounded-xl">
                <Send className="w-5 h-5 text-zinc-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-zinc-900">Send Me a Message</h2>
                <p className="text-sm text-zinc-500">I&apos;ll get back to you within 24 hours.</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Details Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-6">Contact Information</h3>
            
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Professional Profiles</h3>
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

          {/* Quick Response Card */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
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

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Services I <span className="gradient-text">Provide</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Enterprise Web Applications",
              description: "Scalable solutions with modern tech stack and robust architecture for businesses of all sizes.",
              icon: "🚀"
            },
            {
              title: "E-commerce Solutions",
              description: "Custom online stores with seamless user experience and secure transactions.",
              icon: "🛒"
            },
            {
              title: "Technical Consultation",
              description: "Expert advice on architecture, performance optimization, and best practices.",
              icon: "💡"
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {service.description}
              </p>
            </div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Let&apos;s discuss your requirements and create something amazing together
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="#contact-form"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>View Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
