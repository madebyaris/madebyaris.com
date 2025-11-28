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
  "name": "Agensi Next.js Indonesia | Solusi Website Enterprise",
  "description": "Agensi Next.js terpercaya di Indonesia untuk pengembangan website enterprise. Kami membangun website modern, performa tinggi, dan SEO-friendly untuk perusahaan besar dan organisasi Indonesia.",
  "url": "https://madebyaris.com/services/nextjs-development/agency-indonesia",
  "keywords": [
    "Agensi Next.js Indonesia",
    "Website Enterprise Next.js",
    "Pengembangan Web Enterprise",
    "Agensi Digital Jakarta",
    "Website Perusahaan Modern",
    "Solusi Web Enterprise",
    "Next.js Enterprise Solutions",
    "Agensi Web Premium",
    "Website Performa Tinggi",
    "Migrasi WordPress ke Next.js",
    "Website Bisnis Enterprise",
    "Full-Stack Development Agency",
    "Konsultan Next.js Enterprise",
    "Agensi Website Premium",
    "Solusi Digital Enterprise"
  ],
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "Full-Stack Developer & Technical Lead",
    "url": "https://madebyaris.com"
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Agensi Next.js Enterprise Indonesia",
    "serviceType": "Pengembangan Website Enterprise",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "Full-Stack Developer & Technical Lead",
      "url": "https://madebyaris.com"
    },
    "areaServed": "Indonesia",
    "description": "Kami adalah agensi Next.js yang fokus pada solusi website enterprise di Indonesia. Tim kami memiliki pengalaman mendalam dalam membangun dan mengoptimalkan website skala besar dengan performa tinggi, keamanan maksimal, dan skalabilitas tanpa batas.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "Hubungi untuk penawaran enterprise",
        "priceCurrency": "IDR",
        "valueAddedTaxIncluded": true
      },
      "availability": "https://schema.org/InStock",
      "highPrice": 300000000,
      "lowPrice": 50000000,
      "offerCount": 6
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "15",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "CTO Perusahaan E-commerce Nasional"
        },
        "reviewBody": "Tim Aris berhasil meningkatkan performa website kami secara signifikan. Setelah migrasi ke Next.js, loading time turun 70%, dan conversion rate naik 45%. Proses development sangat terstruktur dan profesional."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Head of Digital Transformation"
        },
        "reviewBody": "Keputusan tepat memilih agensi ini untuk transformasi digital kami. Website baru dengan Next.js tidak hanya lebih cepat, tapi juga lebih mudah dikelola. SEO meningkat drastis dan traffic organic naik 200% dalam 6 bulan."
      }
    ],
    "serviceOutput": [
      {
        "@type": "Service",
        "name": "Enterprise Website Development",
        "description": "Pengembangan website enterprise dengan Next.js, fokus pada performa, skalabilitas, dan keamanan tingkat tinggi."
      },
      {
        "@type": "Service",
        "name": "E-commerce Enterprise",
        "description": "Solusi e-commerce skala besar dengan Next.js, termasuk integrasi sistem pembayaran dan manajemen inventory."
      },
      {
        "@type": "Service",
        "name": "Digital Transformation",
        "description": "Transformasi digital menyeluruh dengan migrasi ke Next.js dan optimasi infrastruktur."
      },
      {
        "@type": "Service",
        "name": "Enterprise CMS",
        "description": "Sistem manajemen konten enterprise dengan Next.js untuk pengelolaan konten skala besar."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Enterprise Next.js",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Enterprise",
            "description": "Pengembangan website enterprise dengan Next.js, termasuk arsitektur mikroservis, CI/CD, dan monitoring sistem."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Platform",
            "description": "Platform e-commerce enterprise dengan Next.js, integrasi payment gateway, sistem inventory, dan analitik real-time."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation",
            "description": "Layanan transformasi digital lengkap, dari analisis sistem hingga implementasi solusi Next.js modern."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Headless CMS Enterprise",
            "description": "Implementasi sistem CMS headless dengan Next.js untuk manajemen konten skala besar."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Migrasi Sistem Legacy",
            "description": "Migrasi sistem legacy ke arsitektur modern berbasis Next.js dengan zero downtime."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed Services",
            "description": "Layanan pengelolaan dan pemeliharaan berkelanjutan untuk sistem Next.js enterprise."
          }
        }
      ]
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://madebyaris.com",
          "name": "Beranda"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://madebyaris.com/services",
          "name": "Layanan"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://madebyaris.com/services/nextjs-development",
          "name": "Next.js Enterprise"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@id": "https://madebyaris.com/services/nextjs-development/agency-indonesia",
          "name": "Agensi Enterprise"
        }
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa yang membedakan layanan enterprise Next.js Anda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kami fokus pada solusi enterprise dengan pendekatan end-to-end. Mulai dari analisis kebutuhan, arsitektur sistem, pengembangan, hingga maintenance. Tim kami berpengalaman dalam menangani proyek skala besar dengan kompleksitas tinggi, mengutamakan performa, keamanan, dan skalabilitas."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana proses transformasi digital dengan Next.js?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proses dimulai dengan audit sistem existing, analisis kebutuhan bisnis, dan perencanaan arsitektur. Implementasi dilakukan bertahap dengan metode agile, termasuk migrasi data, integrasi sistem, dan pelatihan tim. Kami memastikan transisi lancar dengan zero downtime dan dampak minimal pada operasional."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa investasi untuk website enterprise Next.js?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Investasi dimulai dari 50 juta hingga 300 juta rupiah, tergantung kompleksitas dan skala proyek. Setiap solusi disesuaikan dengan kebutuhan spesifik perusahaan Anda, termasuk pengembangan, infrastruktur, dan maintenance. ROI biasanya terlihat dalam 6-12 bulan pertama melalui peningkatan performa dan efisiensi operasional."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana dengan dukungan pasca-implementasi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kami menyediakan managed services lengkap, termasuk monitoring 24/7, maintenance rutin, optimasi berkelanjutan, dan dukungan teknis dedicated. Tim kami siap membantu dengan SLA yang jelas dan response time cepat untuk memastikan sistem Anda selalu optimal."
        }
      }
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "Agensi Next.js Enterprise Indonesia",
    "description": "Spesialis pengembangan website enterprise dengan Next.js di Indonesia. Fokus pada solusi teknologi modern untuk transformasi digital perusahaan besar dan organisasi."
  },
  "potentialAction": {
    "@type": "CommunicateAction",
    "name": "Konsultasi Solusi Enterprise",
    "target": "https://madebyaris.com/contact"
  }
}

// Generate Metadata
export function generateMetadata(): Metadata {
  return {
    title: 'Agensi Next.js Indonesia | Solusi Website Enterprise',
    description: 'Agensi Next.js terpercaya di Indonesia untuk pengembangan website enterprise. Kami membangun website modern, performa tinggi, dan SEO-friendly untuk perusahaan besar dan organisasi Indonesia.',
    keywords: [
      'Agensi Next.js Indonesia',
      'Website Enterprise Next.js',
      'Pengembangan Web Enterprise',
      'Agensi Digital Jakarta',
      'Website Perusahaan Modern',
      'Solusi Web Enterprise',
      'Next.js Enterprise Solutions',
      'Agensi Web Premium',
      'Website Performa Tinggi',
      'Migrasi WordPress ke Next.js',
      'Website Bisnis Enterprise',
      'Full-Stack Development Agency',
      'Konsultan Next.js Enterprise',
      'Agensi Website Premium',
      'Solusi Digital Enterprise'
    ],
    openGraph: {
      title: 'Agensi Next.js Indonesia | Solusi Website Enterprise',
      description: 'Agensi Next.js terpercaya di Indonesia untuk pengembangan website enterprise. Kami membangun website modern, performa tinggi, dan SEO-friendly untuk perusahaan besar dan organisasi Indonesia.',
      type: 'website',
      locale: 'id_ID',
      siteName: 'Made by Aris'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Agensi Next.js Indonesia | Solusi Website Enterprise',
      description: 'Agensi Next.js terpercaya di Indonesia untuk pengembangan website enterprise. Kami membangun website modern, performa tinggi, dan SEO-friendly untuk perusahaan besar dan organisasi Indonesia.',
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
                  Next.js Enterprise
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">Agensi Enterprise</li>
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
          <article className="mt-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 dark:border-zinc-800 shadow-lg">
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
                <Card key={index} className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm dark:border-zinc-800 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
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

            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 dark:border-zinc-800">
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

            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 dark:border-zinc-800">
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