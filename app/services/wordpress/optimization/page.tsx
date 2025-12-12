import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Zap, Shield, Globe, Gauge, CheckCircle2, Trophy, Server } from 'lucide-react'

export const revalidate = 86400 // Revalidate daily

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "WordPress Optimization Services",
  "description": "Professional WordPress optimization services to improve speed, security, and performance of your WordPress website.",
  "url": "https://madebyaris.com/services/wordpress/optimization",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "url": "https://madebyaris.com"
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'WordPress Optimization | Speed & Security Services',
    description: 'Professional WordPress optimization services to improve speed, security, and performance of your WordPress website.',
    keywords: [
      'WordPress Optimization',
      'WordPress Speed',
      'WordPress Security',
      'WordPress Performance',
      'Core Web Vitals',
      'WordPress Caching'
    ],
    openGraph: {
      title: 'WordPress Optimization | Speed & Security Services',
      description: 'Professional WordPress optimization services.',
      type: 'website',
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/wordpress/optimization'
    }
  }
}

const features = [
  {
    title: 'Speed Optimization',
    description: 'Comprehensive performance tuning to make your WordPress site lightning fast.',
    icon: Zap,
  },
  {
    title: 'Security Hardening',
    description: 'Advanced security measures to protect your site from threats.',
    icon: Shield,
  },
  {
    title: 'CDN Integration',
    description: 'Global content delivery network setup for faster loading worldwide.',
    icon: Globe,
  },
  {
    title: 'Performance Monitoring',
    description: 'Continuous monitoring and optimization of site performance metrics.',
    icon: Gauge,
  },
  {
    title: 'Server Optimization',
    description: 'Database and server-level optimizations for better response times.',
    icon: Server,
  },
]

const benefits = [
  'Faster Loading',
  'Better SEO',
  'Higher Security',
  'Global Reach',
  'Better UX',
  'Lower Bounce Rate',
  'Mobile Optimized',
  'Resource Efficient'
]

const deliverables = [
  'Comprehensive performance audit',
  'Speed optimization implementation',
  'Caching configuration',
  'Image optimization',
  'Database optimization',
  'Security hardening',
  'CDN setup and configuration',
  'Ongoing monitoring setup'
]

const processSteps = [
  { step: 1, title: 'Audit', desc: 'Analyze current performance' },
  { step: 2, title: 'Plan', desc: 'Strategy for improvements' },
  { step: 3, title: 'Implement', desc: 'Execute optimizations' },
  { step: 4, title: 'Monitor', desc: 'Ongoing performance tracking' },
]

export default function WordPressOptimizationPage() {
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
          <li><Link href="/services/wordpress" className="hover:text-orange-500 transition-colors">WordPress</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Optimization</li>
        </ol>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Zap className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Performance Expert</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          WordPress
          <span className="block gradient-text font-light">Optimization</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Make your WordPress site faster, more secure, and optimized for search engines 
          with professional optimization services.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Optimize My Site</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link 
            href="/services/wordpress"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Back to WordPress</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Features Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Gauge className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Features</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Optimization <span className="gradient-text">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <feature.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Benefits Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Trophy className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Advantages</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Optimization <span className="gradient-text">Benefits</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="p-4 bg-white/80 backdrop-blur-sm rounded-xl text-center text-sm font-medium text-zinc-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Deliverables Section */}
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Optimization <span className="gradient-text">Process</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Ready to Speed Up Your Site?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Let&apos;s optimize your WordPress site for better performance, security, and user experience.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Start Optimization</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/wordpress" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>Explore WordPress Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
