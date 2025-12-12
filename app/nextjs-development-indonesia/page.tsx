import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, ArrowRight, ArrowUpRight, Rocket, Globe, Zap, Star, Users, CheckCircle2, Trophy } from 'lucide-react'

export const revalidate = 86400

const features = [
  {
    title: 'Website Super Cepat & Modern',
    description: 'Optimalkan performa bisnis Anda dengan website Next.js yang cepat, responsif, dan modern.',
    icon: Code2,
  },
  {
    title: 'SEO-Friendly & Performa Optimal',
    description: 'Tingkatkan visibilitas online dengan website SEO-friendly berkat server-side rendering.',
    icon: Rocket,
  },
  {
    title: 'Skalabel & Enterprise Ready',
    description: 'Siap berkembang bersama bisnis Anda dengan arsitektur yang skalabel.',
    icon: Globe,
  },
  {
    title: 'Integrasi API & Headless CMS',
    description: 'Integrasikan dengan berbagai sistem dan CMS untuk solusi yang fleksibel.',
    icon: Zap,
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Jasa Pengembangan Next.js Expert Indonesia",
  "description": "Bangun website modern dengan Next.js bersama expert developer Indonesia. Solusi web cepat, SEO-friendly & skalabel.",
  "url": "https://madebyaris.com/nextjs-development-indonesia",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "url": "https://madebyaris.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  }
}

// Generate Metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Jasa Pengembangan Next.js Expert Indonesia | Website Modern',
    description: 'Bangun website modern dengan Next.js bersama expert developer Indonesia. Solusi web cepat, SEO-friendly & skalabel untuk bisnis Anda.',
    keywords: [
      'nextjs indonesia',
      'nextjs development indonesia',
      'nextjs expert indonesia',
      'jasa website nextjs',
      'website development indonesia'
    ],
    openGraph: {
      title: 'Next.js Expert Indonesia | Solusi Website Modern',
      description: 'Bangun website modern dengan Next.js. Cepat, SEO-friendly & skalabel.',
      type: 'website',
      locale: 'id_ID',
    },
    alternates: {
      canonical: 'https://madebyaris.com/nextjs-development-indonesia'
    },
  }
}

const benefits = [
  'Performa Super Cepat',
  'SEO Teroptimasi',
  'Mobile-First Design',
  'Enterprise Ready',
  'Headless CMS',
  'API Integration',
  'Full-Stack Solution',
  'Support Berkelanjutan',
]

const processSteps = [
  { step: 1, title: 'Konsultasi', desc: 'Pahami kebutuhan bisnis Anda' },
  { step: 2, title: 'Pengembangan', desc: 'Bangun dengan kode bersih' },
  { step: 3, title: 'Testing', desc: 'Optimasi performa & SEO' },
  { step: 4, title: 'Deployment', desc: 'Launch dengan dukungan' },
]

const technologies = [
  'Next.js 14',
  'React 18',
  'TypeScript',
  'Tailwind CSS',
  'Prisma',
  'PostgreSQL',
  'Vercel',
  'AWS'
]

const services = [
  'Website Bisnis Modern',
  'E-commerce Solution',
  'Landing Page Konversi',
  'Aplikasi Web Kompleks',
  'Dashboard & Admin Panel',
  'Integrasi API',
  'Migrasi ke Next.js',
  'Optimasi Performa'
]

export default function NextjsDevelopmentIndonesiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Next.js Development Indonesia</li>
        </ol>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Code2 className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Next.js Expert Indonesia</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Jasa Pengembangan
          <span className="block gradient-text font-light">Next.js</span>
          <span className="block">Profesional</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Bangun aplikasi web modern yang cepat, SEO-friendly, dan skalabel menggunakan 
          Next.js, React, dan TypeScript. Konsultasi gratis!
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Mulai Proyek Sekarang</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link 
            href="/contact"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Konsultasi Gratis</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Introduction Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900 mb-4 tracking-tight">
              Mengenal Next.js untuk Website Modern
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Next.js adalah framework React modern yang dirancang khusus untuk membangun website dan aplikasi web yang powerful. 
              Keunggulannya tidak tertandingi dalam hal performa, optimasi SEO, dan skalabilitas.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Baik untuk website company profile, toko online, atau aplikasi web kompleks, Next.js menjamin 
              website Anda tampil optimal di mesin pencari.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900 mb-4 tracking-tight">
              Mengapa Memilih Next.js?
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Di MadeByAris, kami memiliki keahlian khusus dalam pengembangan website menggunakan Next.js. 
              Fokus kami adalah membantu bisnis di Indonesia membangun website yang cepat dan SEO-friendly.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Dengan Next.js, website Anda mendapatkan keunggulan teknologi terkini seperti server-side rendering (SSR), 
              static site generation, dan integrasi API yang handal.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Features Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Fitur Unggulan</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Keunggulan <span className="gradient-text">Next.js</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            Teknologi terkini untuk website yang cepat, SEO-friendly, dan skalabel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                  <feature.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
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
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Manfaat</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Keuntungan <span className="gradient-text">untuk Anda</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Layanan <span className="gradient-text">yang Kami Tawarkan</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((item) => (
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
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Proses</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cara <span className="gradient-text">Kerja Kami</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {processSteps.map((item) => (
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Technologies Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {technologies.map((tech) => (
              <div 
                key={tech}
                className="p-3 bg-zinc-50 rounded-xl text-center text-sm font-medium text-zinc-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
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
            Siap Membangun Proyek Next.js Anda?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Hubungi kami sekarang dan mulai membuat website yang cepat, SEO-friendly, dan scalable.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Mulai Proyek Sekarang</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services/nextjs-development"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Lihat Layanan Next.js</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
