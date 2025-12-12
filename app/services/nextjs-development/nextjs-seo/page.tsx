import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Search, BarChart, Zap, Globe, LineChart, CheckCircle2, Trophy } from 'lucide-react'

export const revalidate = 86400 // Revalidate daily

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Next.js SEO Services",
  "description": "Professional Next.js SEO services to optimize your web application for search engines. Improve rankings, visibility, and organic traffic.",
  "url": "https://madebyaris.com/services/nextjs-development/nextjs-seo",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "url": "https://madebyaris.com"
  }
}

// Generate Metadata
export function generateMetadata(): Metadata {
  return {
    title: 'Next.js SEO Services | Search Engine Optimization for Next.js',
    description: 'Professional Next.js SEO services to optimize your web application for search engines. Improve rankings, visibility, and organic traffic with Next.js-specific SEO strategies.',
    keywords: [
      'Next.js SEO',
      'Next.js Search Engine Optimization',
      'SEO for Next.js',
      'Next.js SEO Services',
      'Next.js SEO Expert',
      'Technical SEO Next.js',
      'Server-Side Rendering SEO',
      'Static Site Generation SEO'
    ],
    openGraph: {
      title: 'Next.js SEO Services | Search Engine Optimization for Next.js',
      description: 'Professional Next.js SEO services to optimize your web application for search engines.',
      type: 'website',
      locale: 'en_US',
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development/nextjs-seo'
    }
  }
}

const features = [
  {
    title: 'Technical SEO Audit',
    description: 'Comprehensive analysis of your Next.js application to identify and fix SEO issues.',
    icon: Search,
  },
  {
    title: 'SSR Optimization',
    description: 'Optimize server-side rendering for search engines to ensure complete indexing.',
    icon: Zap,
  },
  {
    title: 'Metadata Implementation',
    description: 'Implement proper metadata, structured data, and Open Graph tags for better visibility.',
    icon: Globe,
  },
  {
    title: 'Performance Optimization',
    description: 'Improve Core Web Vitals and page speed for better search rankings.',
    icon: BarChart,
  },
  {
    title: 'SEO Monitoring',
    description: 'Track your SEO performance with detailed analytics and reporting.',
    icon: LineChart,
  },
]

const deliverables = [
  'Comprehensive Next.js SEO audit',
  'Technical SEO implementation',
  'Metadata and structured data setup',
  'Core Web Vitals optimization',
  'Server-side rendering configuration',
  'Image optimization for SEO',
  'SEO-friendly routing implementation',
  'Search performance monitoring'
]

const benefits = [
  'Higher Search Rankings',
  'More Organic Traffic',
  'Better User Experience',
  'Faster Page Loads',
  'Improved Crawlability',
  'Rich Search Results'
]

export default function NextjsSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/nextjs-development" className="hover:text-orange-500 transition-colors">Next.js Development</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Next.js SEO</li>
        </ol>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        {/* Badge */}
        <div 
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
        >
          <Search className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">SEO Expert</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Next.js
          <span className="block gradient-text font-light">SEO Services</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Optimize your Next.js application for search engines and improve your rankings. 
          Specialized SEO strategies leveraging Next.js unique capabilities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Start SEO Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link 
            href="/services/nextjs-development"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Back to Next.js Services</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Introduction */}
      <section className="mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <p className="text-zinc-600 leading-relaxed text-lg">
            My Next.js SEO service leverages the unique capabilities of Next.js for optimal search engine 
            visibility. By utilizing server-side rendering, static generation, and metadata optimization, 
            I help your Next.js application rank higher in search results and attract more organic traffic.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Key Features Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Zap className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Key Features</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Next.js SEO <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <feature.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Benefits Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Trophy className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Advantages</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            SEO <span className="gradient-text">Benefits</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl text-center text-sm font-medium text-zinc-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* What You Get Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What You <span className="gradient-text">Get</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Why Next.js SEO Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Why Next.js SEO is <span className="gradient-text">Different</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Server-Side Rendering Advantage', desc: 'Next.js SSR ensures search engines can fully index your content, unlike client-side rendered apps.' },
            { title: 'Built-in Performance', desc: 'Next.js includes built-in optimizations that directly impact Core Web Vitals, a key ranking factor.' },
            { title: 'Metadata API', desc: 'Next.js provides a powerful Metadata API for dynamic and static metadata generation.' },
            { title: 'Image Optimization', desc: 'The Next.js Image component automatically optimizes images for better performance and SEO.' },
          ].map((item) => (
            <div key={item.title} className="bg-zinc-50 rounded-2xl p-6">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
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
            Ready to Improve Your Next.js SEO?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Let&apos;s optimize your Next.js application for search engines and increase your organic traffic.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Start Your SEO Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services/nextjs-development"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Explore Next.js Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
