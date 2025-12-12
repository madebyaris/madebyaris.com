import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Globe, Zap, Search, Palette, Settings, CheckCircle2, Trophy } from 'lucide-react'

export const revalidate = 86400 // Revalidate daily

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Jasa Next.js Indonesia",
  "description": "Jasa pembuatan website Next.js profesional di Indonesia. Dapatkan website modern, cepat, dan SEO-friendly untuk bisnis Anda.",
  "url": "https://madebyaris.com/services/nextjs-development/nextjs-indonesia",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "url": "https://madebyaris.com"
  },
  "areaServed": "Indonesia"
}

// Generate Metadata
export function generateMetadata(): Metadata {
  return {
    title: 'Jasa Pembuatan Website Next.js di Indonesia',
    description: 'Jasa pembuatan website Next.js profesional di Indonesia. Dapatkan website modern, cepat, dan SEO-friendly untuk bisnis Anda.',
    keywords: [
      'Jasa Pembuatan Website',
      'Next.js Indonesia',
      'Website Next.js',
      'Jasa Web Developer',
      'Website Modern Indonesia',
      'Jasa IT Indonesia'
    ],
    openGraph: {
      title: 'Jasa Pembuatan Website Next.js di Indonesia',
      description: 'Jasa pembuatan website Next.js profesional di Indonesia.',
      type: 'website',
      locale: 'id_ID',
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development/nextjs-indonesia'
    }
  }
}

const features = [
  {
    title: 'Website Super Cepat',
    description: 'Website Next.js yang cepat dengan Static Generation dan Server-Side Rendering.',
    icon: Zap,
  },
  {
    title: 'SEO yang Optimal',
    description: 'Website kamu bakal gampang ditemukan di Google berkat fitur SEO bawaan Next.js.',
    icon: Search,
  },
  {
    title: 'Desain Keren',
    description: 'Tampilan website yang modern dan responsif untuk semua perangkat.',
    icon: Palette,
  },
  {
    title: 'Mudah Dikelola',
    description: 'Panel admin yang simpel untuk update konten tanpa perlu bantuan developer.',
    icon: Settings,
  },
]

const services = [
  'Pembuatan website bisnis dengan Next.js',
  'Website portofolio profesional',
  'Toko online dan e-commerce',
  'Website perusahaan',
  'Landing page konversi tinggi',
  'Blog dan website konten',
  'Aplikasi web interaktif',
  'Migrasi dari platform lain ke Next.js'
]

const benefits = [
  'Performa Tinggi',
  'SEO Optimal',
  'Desain Modern',
  'Mobile Friendly',
  'Mudah Dikelola',
  'Support Lokal'
]

const processSteps = [
  { step: 1, title: 'Diskusi Kebutuhan', desc: 'Ngobrol tentang kebutuhan website kamu' },
  { step: 2, title: 'Desain & Prototype', desc: 'Buat desain yang sesuai brand kamu' },
  { step: 3, title: 'Pengembangan', desc: 'Coding website dengan Next.js terbaru' },
  { step: 4, title: 'Testing & Revisi', desc: 'Pengujian di berbagai perangkat' },
  { step: 5, title: 'Peluncuran', desc: 'Website siap online dan dukungan lanjutan' },
]

export default function NextjsIndonesiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Layanan</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/nextjs-development" className="hover:text-orange-500 transition-colors">Next.js Development</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Next.js Indonesia</li>
        </ol>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        {/* Badge */}
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Globe className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Indonesia</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[3.5rem] text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Jasa Pembuatan
          <span className="block gradient-text font-light">Website Next.js</span>
          <span className="block">di Indonesia</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Website modern, cepat, dan SEO-friendly untuk bisnis Indonesia. 
          Dibuat dengan teknologi Next.js terkini.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Hubungi Saya</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link 
            href="/services/nextjs-development"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Kembali ke Next.js</span>
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
            Halo! Saya Aris, developer Next.js yang menyediakan jasa pembuatan website profesional untuk bisnis dan individu di Indonesia. 
            Dengan pengalaman lebih dari 8 tahun di bidang web development, saya fokus membuat website yang tidak hanya keren tampilannya, 
            tapi juga cepat, mudah dikelola, dan SEO-friendly.
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
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Keunggulan</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Kenapa Pilih <span className="gradient-text">Next.js</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Keuntungan</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Apa yang Kamu <span className="gradient-text">Dapat</span>
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

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Jenis Website yang <span className="gradient-text">Bisa Dibuatkan</span>
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

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Cara <span className="gradient-text">Kerja Saya</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((item) => (
            <div 
              key={item.step}
              className="bg-zinc-50 rounded-2xl p-5 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-zinc-500">{item.desc}</p>
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
            Siap Punya Website Keren?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Yuk, diskusi bagaimana saya bisa bantu bikin website Next.js yang sesuai dengan kebutuhan kamu!
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Hubungi Saya Sekarang</span>
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
