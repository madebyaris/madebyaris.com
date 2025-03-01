import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Globe, Zap, Search, Palette, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const revalidate = 86400 // Revalidate daily

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Jasa Pembuatan Website Next.js di Indonesia",
  "description": "Jasa pembuatan website Next.js profesional di Indonesia. Dapatkan website modern, cepat, dan SEO-friendly untuk bisnis Anda.",
  "url": "https://madebyaris.com/services/nextjs-development/nextjs-indonesia",
  "keywords": [
    "Jasa Pembuatan Website",
    "Next.js Indonesia",
    "Website Next.js",
    "Jasa Web Developer",
    "Jasa Pembuatan Website Jakarta",
    "Website Modern Indonesia",
    "Jasa Web Developer Profesional",
    "Pembuatan Website Bisnis",
    "Website SEO-friendly",
    "Jasa IT Indonesia",
    "Pembuatan Website Next.js",
    "Website Cepat",
    "Jasa Pembuatan Website Profesional",
    "Website React",
    "Jasa Pembuatan Website Terbaik"
  ],
  "mainEntity": {
    "@type": "Service",
    "name": "Jasa Pembuatan Website Next.js di Indonesia",
    "serviceType": "Pembuatan Website",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "Senior Full-Stack Developer",
      "url": "https://madebyaris.com"
    },
    "areaServed": "Indonesia",
    "description": "Jasa pembuatan website profesional menggunakan Next.js untuk bisnis dan individu di Indonesia.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Hubungi untuk penawaran",
      "priceCurrency": "IDR"
    }
  }
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
      'Jasa Pembuatan Website Jakarta',
      'Website Modern Indonesia',
      'Jasa Web Developer Profesional',
      'Pembuatan Website Bisnis',
      'Website SEO-friendly',
      'Jasa IT Indonesia',
      'Pembuatan Website Next.js',
      'Website Cepat',
      'Jasa Pembuatan Website Profesional',
      'Website React',
      'Jasa Pembuatan Website Terbaik'
    ],
    openGraph: {
      title: 'Jasa Pembuatan Website Next.js di Indonesia',
      description: 'Jasa pembuatan website Next.js profesional di Indonesia. Dapatkan website modern, cepat, dan SEO-friendly untuk bisnis Anda.',
      type: 'website',
      locale: 'id_ID',
      siteName: 'Made by Aris'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Jasa Pembuatan Website Next.js di Indonesia',
      description: 'Jasa pembuatan website Next.js profesional di Indonesia. Dapatkan website modern, cepat, dan SEO-friendly untuk bisnis Anda.',
      creator: '@madebyaris'
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development/nextjs-indonesia'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

const features = [
  {
    title: 'Website Super Cepat',
    description: 'Website Next.js yang cepat banget dengan fitur Static Generation dan Server-Side Rendering.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'SEO yang Optimal',
    description: 'Website kamu bakal gampang ditemukan di Google berkat fitur SEO bawaan Next.js.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Desain Keren',
    description: 'Tampilan website yang modern dan responsif, cocok untuk semua perangkat dari HP sampai laptop.',
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: 'Mudah Dikelola',
    description: 'Panel admin yang simpel untuk update konten website tanpa perlu bantuan developer.',
    icon: <Settings className="w-6 h-6" />,
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

export default function NextjsIndonesiaPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-zinc-100/50 dark:from-zinc-900 dark:via-transparent dark:to-zinc-900/50" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Layanan
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/nextjs-development" className="hover:text-foreground transition-colors">
                  Pembuatan Next.js
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">Next.js Indonesia</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <header className="text-center max-w-3xl mx-auto">
            <Link href="/services/nextjs-development">
              <Button variant="ghost" size="sm" className="mb-4 -ml-4 text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Layanan Next.js
              </Button>
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 mb-4">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Indonesia</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400 mb-6">
              Jasa Pembuatan Website Next.js di Indonesia
            </h1>
            <div className="max-w-[700px] mx-auto">
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                Website modern, cepat, dan SEO-friendly untuk bisnis Indonesia.
                <span className="inline-block">Dibuat dengan teknologi Next.js terkini.</span>
              </p>
            </div>
          </header>

          {/* Introduction */}
          <article className="mt-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Halo! Saya Aris, developer Next.js yang menyediakan jasa pembuatan website profesional untuk bisnis dan individu di Indonesia. 
              Dengan pengalaman lebih dari 8 tahun di bidang web development, saya fokus membuat website yang tidak hanya keren tampilannya, 
              tapi juga cepat, mudah dikelola, dan SEO-friendly. Next.js adalah teknologi modern yang saya pilih karena memberikan 
              pengalaman terbaik untuk pengguna website kamu.
            </p>
          </article>

          {/* Key Features Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="features-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Keunggulan
              </span>
              <h2 id="features-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Kenapa Pilih Next.js untuk Website Kamu
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mb-4 p-2 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="services-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                Layanan
              </span>
              <h2 id="services-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Jenis Website yang Bisa Saya Buatkan
              </h2>
            </div>

            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="process-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                Proses
              </span>
              <h2 id="process-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Cara Kerja Saya
              </h2>
            </div>

            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
              <div className="space-y-8">
                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-1 flex md:justify-end">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold">1</div>
                    </div>
                    <div className="md:col-span-4 mt-2 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Diskusi Kebutuhan</h3>
                      <p className="text-muted-foreground">Kita mulai dengan ngobrol tentang apa yang kamu butuhkan untuk website kamu, termasuk fitur, desain, dan target audience.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-1 flex md:justify-end">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold">2</div>
                    </div>
                    <div className="md:col-span-4 mt-2 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Desain & Prototype</h3>
                      <p className="text-muted-foreground">Saya buatkan desain website yang sesuai dengan brand kamu, dan kamu bisa lihat preview-nya sebelum kita lanjut ke tahap berikutnya.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-1 flex md:justify-end">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold">3</div>
                    </div>
                    <div className="md:col-span-4 mt-2 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Pengembangan</h3>
                      <p className="text-muted-foreground">Saya mulai coding website kamu dengan Next.js, dan kamu akan dapat update progres secara berkala.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-1 flex md:justify-end">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold">4</div>
                    </div>
                    <div className="md:col-span-4 mt-2 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Testing & Revisi</h3>
                      <p className="text-muted-foreground">Website diuji di berbagai perangkat dan browser, lalu kamu bisa kasih feedback untuk perbaikan jika diperlukan.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-1 flex md:justify-end">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold">5</div>
                    </div>
                    <div className="md:col-span-4 mt-2 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Peluncuran & Dukungan</h3>
                      <p className="text-muted-foreground">Website kamu diluncurkan ke publik, dan saya tetap siap membantu jika ada pertanyaan atau kebutuhan update di masa depan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-12 md:mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Siap Punya Website Keren?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Yuk, diskusi bagaimana saya bisa bantu bikin website Next.js yang sesuai dengan kebutuhan kamu!
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Hubungi Saya Sekarang
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 