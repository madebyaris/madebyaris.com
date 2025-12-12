import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Building, Users, Briefcase, Clock, Code2, CheckCircle2, Trophy } from 'lucide-react'

export const revalidate = 86400 // Revalidate daily

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Agensi Next.js Indonesia",
  "description": "Agensi Next.js terpercaya di Indonesia untuk pengembangan website enterprise. Website modern, performa tinggi, dan SEO-friendly.",
  "url": "https://madebyaris.com/services/nextjs-development/agency-indonesia",
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
    title: 'Agensi Next.js Indonesia | Solusi Website Enterprise',
    description: 'Agensi Next.js terpercaya di Indonesia untuk pengembangan website enterprise. Website modern, performa tinggi, dan SEO-friendly untuk perusahaan besar.',
    keywords: [
      'Agensi Next.js Indonesia',
      'Website Enterprise Next.js',
      'Pengembangan Web Enterprise',
      'Agensi Digital Jakarta',
      'Website Perusahaan Modern'
    ],
    openGraph: {
      title: 'Agensi Next.js Indonesia | Solusi Website Enterprise',
      description: 'Agensi Next.js terpercaya di Indonesia untuk pengembangan website enterprise.',
      type: 'website',
      locale: 'id_ID',
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development/agency-indonesia'
    }
  }
}

const features = [
  {
    title: 'Solusi untuk Perusahaan',
    description: 'Solusi Next.js lengkap untuk website perusahaan dengan kebutuhan yang kompleks.',
    icon: Building,
  },
  {
    title: 'Layanan Lengkap',
    description: 'Pembuatan website dari awal sampai akhir, mulai dari perencanaan sampai pemeliharaan.',
    icon: Briefcase,
  },
  {
    title: 'Tim Profesional',
    description: 'Didukung oleh tim developer Next.js, desainer, dan manajer proyek yang berpengalaman.',
    icon: Users,
  },
  {
    title: 'Teknologi Terkini',
    description: 'Bikin website cepat dan keren pakai teknologi Next.js terbaru yang sudah terbukti handal.',
    icon: Code2,
  },
  {
    title: 'Tepat Waktu',
    description: 'Manajemen proyek yang terstruktur untuk memastikan website kamu selesai tepat waktu.',
    icon: Clock,
  },
]

const services = [
  'Pembuatan website perusahaan',
  'Solusi e-commerce dengan Next.js',
  'Pembuatan website bisnis',
  'Modernisasi website lama',
  'Dashboard dan panel admin kustom',
  'Pembuatan dan integrasi API',
  'Optimasi performa website',
  'Migrasi dari WordPress ke Next.js',
  'Pemeliharaan dan dukungan teknis'
]

const benefits = [
  'Tim Berpengalaman',
  'Teknologi Modern',
  'Proses Terstruktur',
  'Tepat Waktu',
  'Support Berkelanjutan',
  'Harga Kompetitif'
]

const processSteps = [
  { step: 1, title: 'Diskusi & Perencanaan', desc: 'Memahami kebutuhan bisnis dan target audience' },
  { step: 2, title: 'Desain & Prototype', desc: 'Membuat wireframe dan prototype interaktif' },
  { step: 3, title: 'Pengembangan', desc: 'Coding dengan teknologi Next.js terbaru' },
  { step: 4, title: 'Testing & QA', desc: 'Pengujian di berbagai perangkat dan browser' },
  { step: 5, title: 'Peluncuran & Support', desc: 'Launch website dan dukungan berkelanjutan' },
]

export default function AgencyIndonesiaPage() {
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
          <li className="text-zinc-900">Agensi Indonesia</li>
        </ol>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        {/* Badge */}
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Building className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Layanan Agensi</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[3.5rem] text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Agensi Next.js
          <span className="block gradient-text font-light">Indonesia</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Agensi pembuatan website Next.js untuk perusahaan Indonesia. 
          Solusi website modern dan cepat untuk bisnis kamu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Hubungi Kami</span>
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
            Sebagai agensi Next.js di Indonesia, kami menyediakan jasa pembuatan website yang lengkap 
            untuk perusahaan dan organisasi. Pendekatan kami menggabungkan keahlian teknis 
            dengan manajemen proyek yang terstruktur untuk menghasilkan website Next.js berkualitas tinggi.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Key Features Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Building className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Keunggulan</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Kenapa Pilih <span className="gradient-text">Agensi Kami</span>
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
            Apa Saja yang <span className="gradient-text">Kami Tawarkan</span>
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
            Cara <span className="gradient-text">Kerja Kami</span>
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
            Siap Buat Website Perusahaan?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Yuk, diskusi bagaimana kami bisa bantu bisnis atau organisasi kamu memiliki website modern yang keren!
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Hubungi Kami Sekarang</span>
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
