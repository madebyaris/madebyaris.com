import type { Metadata } from 'next'
import { Code2, ArrowRight, Rocket, Globe, Zap } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { ImageResponse } from 'next/og'
import Link from 'next/link'

const features = [
  {
    title: 'Website Super Cepat & Modern',
    description: 'Optimalkan performa bisnis Anda dengan website Next.js yang cepat, responsif, dan modern menggunakan teknologi terkini.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'SEO-Friendly & Performa Optimal',
    description: 'Tingkatkan visibilitas online dengan website yang SEO-friendly dan performa tinggi berkat server-side rendering Next.js.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Skalabel & Enterprise Ready',
    description: 'Siap berkembang bersama bisnis Anda dengan arsitektur Next.js yang skalabel dan siap untuk kebutuhan enterprise.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Integrasi API & Headless CMS',
    description: 'Integrasikan dengan berbagai sistem dan CMS untuk solusi website yang fleksibel dan mudah dikelola.',
    icon: <Zap className="w-6 h-6" />,
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/nextjs-development-indonesia/#webpage",
  "name": "Jasa Pengembangan Next.js Expert Indonesia | Modern Web Development",
  "description": "Bangun website modern Anda dengan Next.js bersama expert developer Indonesia. Dapatkan solusi web yang cepat, SEO-friendly, dan skalabel untuk bisnis Anda. Konsultasi gratis!",
  "url": "https://madebyaris.com/nextjs-development-indonesia",
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
          "@id": "https://madebyaris.com/nextjs-development-indonesia",
          "name": "Next.js Development Indonesia"
        }
      }
    ]
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Jasa Pengembangan Next.js Expert Indonesia",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Person",
      "@id": "https://madebyaris.com/#person",
      "name": "Aris Setiawan",
      "jobTitle": "Senior Full Stack Developer",
      "url": "https://madebyaris.com",
      "image": "https://madebyaris.com/astro.png",
      "sameAs": [
        "https://www.linkedin.com/in/arissetia/",
        "https://github.com/madebyaris",
        "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "description": "Solusi pengembangan website modern dengan Next.js untuk bisnis Anda. Kami membantu membangun website yang cepat, SEO-friendly, dan skalabel dengan teknologi terkini.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "Contact for custom pricing",
        "priceCurrency": "IDR",
        "valueAddedTaxIncluded": true
      },
      "availability": "https://schema.org/InStock",
      "highPrice": 100000000,
      "lowPrice": 10000000,
      "offerCount": features.length
    },
    "serviceOutput": {
      "@type": "ItemList",
      "itemListElement": features.map((feature, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": feature.title,
          "description": feature.description
        }
      }))
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Next.js Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Bisnis Modern",
            "description": "Pengembangan website bisnis modern dengan Next.js yang cepat dan SEO-friendly"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solution",
            "description": "Solusi e-commerce modern dengan Next.js dan integrasi payment gateway"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page Konversi",
            "description": "Landing page yang dioptimalkan untuk konversi dengan Next.js"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25",
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
          "name": "CTO Startup Indonesia"
        },
        "reviewBody": "Aris membantu kami membangun website Next.js yang sangat cepat dan SEO-friendly. Performa website meningkat signifikan dan traffic organik naik 200%."
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
          "name": "Founder E-commerce"
        },
        "reviewBody": "Pengalaman luar biasa bekerja dengan Aris. Website e-commerce kami sekarang lebih cepat, lebih stabil, dan konversi meningkat 150%."
      }
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "Next.js Development Services",
    "description": "Layanan pengembangan website profesional menggunakan Next.js, React, dan TypeScript untuk bisnis di Indonesia. Fokus pada performa, SEO, dan pengalaman pengguna."
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://madebyaris.com/#organization",
    "name": "MadeByAris",
    "url": "https://madebyaris.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://madebyaris.com/logo.png",
      "width": "180",
      "height": "180"
    }
  }
}

// Generate Metadata and Structured Data
export async function generateMetadata(): Promise<Metadata> {
  const ogImage = new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Next.js Expert Indonesia
        </h1>
        <p
          style={{
            fontSize: '30px',
            color: '#888888',
            marginBottom: '40px',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Website Cepat • SEO-Friendly • Skalabel • Enterprise Ready
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0070F3', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Next.js Expert
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Full-Stack Development
          </div>
          <div style={{ background: '#14a800', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Solusi Enterprise
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )

  return {
    title: 'Jasa Pengembangan Next.js Expert Indonesia | Website Modern',
    description: 'Bangun website modern dengan Next.js bersama expert developer Indonesia. Solusi web cepat, SEO-friendly & skalabel untuk bisnis Anda. Mulai konsultasi gratis!',
    keywords: [
      'nextjs indonesia',
      'nextjs development indonesia',
      'nextjs expert indonesia',
      'react js indonesia',
      'website development indonesia',
      'seo friendly websites indonesia',
      'nextjs for business indonesia',
      'enterprise nextjs indonesia',
      'headless website indonesia',
      'nextjs optimization indonesia'
    ],
    openGraph: {
      title: 'Next.js Expert Indonesia | Solusi Website Modern untuk Bisnis Anda',
      description: 'Bangun website modern dengan Next.js. Cepat, SEO-friendly & skalabel. Mulai konsultasi gratis sekarang!',
      type: 'website',
      locale: 'id_ID',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Next.js Expert Indonesia | Solusi Website Modern',
      description: 'Bangun website modern dengan Next.js. Cepat, SEO-friendly & skalabel. Mulai konsultasi gratis!',
      images: [ogImage]
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
  'Support 24/7',
]

const processSteps = [
  {
    title: 'Konsultasi & Analisis Kebutuhan',
    description: 'Pahami kebutuhan bisnis Anda dan rencanakan solusi Next.js yang tepat untuk kesuksesan proyek.',
  },
  {
    title: 'Pengembangan Website Modern',
    description: 'Bangun website Anda dengan kode yang bersih, efisien, dan mudah dikelola menggunakan Next.js.',
  },
  {
    title: 'Optimasi & Testing',
    description: 'Pastikan website Anda cepat, SEO-friendly, dan siap untuk traffic tinggi melalui testing menyeluruh.',
  },
  {
    title: 'Deployment & Support',
    description: 'Launch website Anda dengan aman dan dapatkan dukungan berkelanjutan untuk kesuksesan jangka panjang.',
  },
]

export default function NextjsDevelopmentIndonesiaPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-zinc-100/50 dark:from-zinc-900 dark:via-transparent dark:to-zinc-900/50" />
      </div>

      <div className="container relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-12">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 mb-4">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">Next.js Expert Indonesia</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Jasa Pengembangan Next.js Profesional
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
                Bangun aplikasi web modern yang cepat, SEO-friendly, dan skalabel menggunakan Next.js, React, dan TypeScript. Fokus pada performa tinggi, optimalisasi SEO, dan pengalaman pengguna terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                  Mulai Proyek Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Dapatkan Konsultasi Gratis
                </Button>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="prose dark:prose-invert max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Mengenal Next.js untuk Website Modern</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Next.js adalah framework React modern yang dirancang khusus untuk membangun website dan aplikasi web yang powerful. 
                    Keunggulannya tidak tertandingi dalam hal performa, optimasi SEO, dan skalabilitas. Framework ini menjadi pilihan 
                    terbaik untuk bisnis yang menginginkan website handal dan berkinerja tinggi.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Baik untuk website company profile, toko online, atau aplikasi web kompleks, Next.js menjamin 
                    website Anda tampil optimal di mesin pencari, memiliki performa tinggi di semua perangkat, dan mudah 
                    dikembangkan seiring pertumbuhan bisnis Anda.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Mengapa Memilih Next.js?</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Di MadeByAris, kami memiliki keahlian khusus dalam pengembangan website menggunakan Next.js. 
                    Fokus kami adalah membantu bisnis di Indonesia dan internasional membangun website yang cepat, 
                    mudah berkembang, dan optimal untuk SEO.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Dengan Next.js, website Anda mendapatkan keunggulan teknologi terkini seperti server-side rendering (SSR), 
                    static site generation, dan integrasi API yang handal. Kami memastikan website Anda tampil sempurna di 
                    seluruh dunia dengan pengalaman pengguna yang optimal.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Overview Section */}
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Proses Pengembangan Website Next.js</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Kami mengutamakan tujuan bisnis Anda sebagai landasan pengembangan website. Setelah memahami kebutuhan 
                dan target Anda, kami mulai membangun website dengan Next.js untuk memastikan kecepatan loading yang 
                instant, peringkat tinggi di mesin pencari, dan pengalaman pengguna yang maksimal.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Dari tahap deployment hingga maintenance berkelanjutan, kami menjamin website Anda selalu berkinerja 
                optimal dan siap berkembang. Dengan menggunakan tools dan teknik terbaik di industri, kami berkomitmen 
                untuk kesuksesan website Anda jangka panjang.
              </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Keunggulan Next.js untuk Website Anda</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Proses Pengembangan yang Terbukti Efektif</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="text-4xl font-bold text-zinc-300 dark:text-zinc-700">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">{step.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Sudah siap untuk membangun proyek Next.js Anda?</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
                Hubungi Kami dan Mulai Membuat Website yang Cepat, SEO-Friendly, dan Scalable
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                  Hubungi Kami Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
} 