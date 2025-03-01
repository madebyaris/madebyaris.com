import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Code2, Users, Building, Briefcase, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const revalidate = 86400 // Revalidate daily

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Agensi Next.js Indonesia | Jasa Pembuatan Website Perusahaan",
  "description": "Agensi Next.js profesional di Indonesia yang ahli dalam pembuatan website perusahaan. Website keren dan cepat untuk bisnis dan organisasi Indonesia.",
  "url": "https://madebyaris.com/services/nextjs-development/agency-indonesia",
  "keywords": [
    "Jasa Pembuatan Website",
    "Jasa Web",
    "Agensi Next.js Indonesia",
    "Website Perusahaan",
    "Jasa Pembuatan Website Jakarta",
    "Agensi Digital Indonesia",
    "Jasa Web Developer Profesional",
    "Pembuatan Website Bisnis",
    "Solusi Web Perusahaan Indonesia",
    "Jasa IT Enterprise",
    "Pembuatan Website Next.js",
    "Migrasi WordPress ke Next.js",
    "Jasa Pembuatan Website Perusahaan",
    "Agensi Web Premium",
    "Jasa Pembuatan Website Cepat"
  ],
  "mainEntity": {
    "@type": "Service",
    "name": "Jasa Agensi Next.js di Indonesia",
    "serviceType": "Agensi Pembuatan Website",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "Senior Full-Stack Developer",
      "url": "https://madebyaris.com"
    },
    "areaServed": "Indonesia",
    "description": "Agensi Next.js full-service yang menyediakan jasa pembuatan website perusahaan untuk bisnis dan organisasi Indonesia.",
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
    title: 'Agensi Next.js Indonesia | Jasa Pembuatan Website Perusahaan',
    description: 'Agensi Next.js profesional di Indonesia yang ahli dalam pembuatan website perusahaan. Website keren dan cepat untuk bisnis dan organisasi Indonesia.',
    keywords: [
      'Jasa Pembuatan Website',
      'Jasa Web',
      'Agensi Next.js Indonesia',
      'Website Perusahaan',
      'Jasa Pembuatan Website Jakarta',
      'Agensi Digital Indonesia',
      'Jasa Web Developer Profesional',
      'Pembuatan Website Bisnis',
      'Solusi Web Perusahaan Indonesia',
      'Jasa IT Enterprise',
      'Pembuatan Website Next.js',
      'Migrasi WordPress ke Next.js',
      'Jasa Pembuatan Website Perusahaan',
      'Agensi Web Premium',
      'Jasa Pembuatan Website Cepat'
    ],
    openGraph: {
      title: 'Agensi Next.js Indonesia | Jasa Pembuatan Website Perusahaan',
      description: 'Agensi Next.js profesional di Indonesia yang ahli dalam pembuatan website perusahaan. Website keren dan cepat untuk bisnis dan organisasi Indonesia.',
      type: 'website',
      locale: 'id_ID',
      siteName: 'Made by Aris'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Agensi Next.js Indonesia | Jasa Pembuatan Website Perusahaan',
      description: 'Agensi Next.js profesional di Indonesia yang ahli dalam pembuatan website perusahaan. Website keren dan cepat untuk bisnis dan organisasi Indonesia.',
      creator: '@madebyaris'
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development/agency-indonesia'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

const features = [
  {
    title: 'Solusi untuk Perusahaan',
    description: 'Solusi Next.js lengkap untuk website perusahaan dengan kebutuhan yang kompleks.',
    icon: <Building className="w-6 h-6" />,
  },
  {
    title: 'Layanan Lengkap',
    description: 'Pembuatan website dari awal sampai akhir, mulai dari perencanaan, desain, sampai pemeliharaan.',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: 'Tim Profesional',
    description: 'Didukung oleh tim developer Next.js, desainer, dan manajer proyek yang berpengalaman.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Teknologi Terkini',
    description: 'Bikin website cepat dan keren pakai teknologi Next.js terbaru yang sudah terbukti handal.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Tepat Waktu',
    description: 'Manajemen proyek yang terstruktur untuk memastikan website kamu selesai tepat waktu.',
    icon: <Clock className="w-6 h-6" />,
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

export default function AgencyIndonesiaPage() {
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
              <li className="text-foreground font-medium">Agensi Indonesia</li>
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
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium">Layanan Agensi</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400 mb-6">
              Jasa Pembuatan Website Perusahaan dengan Next.js
            </h1>
            <div className="max-w-[700px] mx-auto">
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                Agensi pembuatan website Next.js untuk perusahaan Indonesia.
                <span className="inline-block">Solusi website modern dan cepat untuk bisnis kamu.</span>
              </p>
            </div>
          </header>

          {/* Introduction */}
          <article className="mt-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Sebagai agensi Next.js di Indonesia, kami menyediakan jasa pembuatan website yang lengkap 
              untuk perusahaan dan organisasi. Pendekatan kami menggabungkan keahlian teknis 
              dengan manajemen proyek yang terstruktur untuk menghasilkan website Next.js berkualitas tinggi yang 
              sesuai dengan kebutuhan bisnis di Indonesia. Kami juga menawarkan layanan migrasi dari WordPress 
              ke Next.js supaya website kamu jadi lebih cepat dan modern.
            </p>
          </article>

          {/* Key Features Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="features-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Keunggulan
              </span>
              <h2 id="features-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Kenapa Pilih Agensi Kami
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
                Apa Saja yang Kami Tawarkan
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

          {/* Agency Process Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="process-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                Proses
              </span>
              <h2 id="process-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Cara Kerja Kami
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
                      <h3 className="text-xl font-semibold mb-2">Diskusi & Perencanaan</h3>
                      <p className="text-muted-foreground">Kami mulai dengan memahami kebutuhan bisnis, target audience, dan persyaratan proyek kamu untuk membuat rencana yang detail.</p>
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
                      <p className="text-muted-foreground">Tim desain kami membuat wireframe dan prototype interaktif supaya kamu bisa lihat tampilan website sebelum mulai pengembangan.</p>
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
                      <p className="text-muted-foreground">Developer Next.js kami membangun website kamu dengan teknologi terbaru, dan kamu akan dapat update progres secara berkala.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-1 flex md:justify-end">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold">4</div>
                    </div>
                    <div className="md:col-span-4 mt-2 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2">Testing & Quality Assurance</h3>
                      <p className="text-muted-foreground">Kami lakukan pengujian di berbagai perangkat dan browser untuk memastikan website kamu bebas bug, aman, dan cepat.</p>
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
                      <p className="text-muted-foreground">Kami bantu peluncuran website kamu dan memberikan dukungan berkelanjutan untuk memastikan website tetap berjalan dengan baik.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-12 md:mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Siap Buat Website Perusahaan Kamu?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Yuk, diskusi bagaimana kami bisa bantu bisnis atau organisasi kamu memiliki website modern yang keren!
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Hubungi Kami Sekarang
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