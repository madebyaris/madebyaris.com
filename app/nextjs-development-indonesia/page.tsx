import type { Metadata } from 'next'
import { Code2, ArrowRight, Rocket, Globe, Zap } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { ImageResponse } from 'next/og'

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Jasa Pengembangan Next.js Profesional di Indonesia",
  "description": "Layanan pengembangan Next.js profesional untuk membangun aplikasi web yang cepat, SEO-friendly, dan skalabel. Fokus pada performa tinggi dan optimalisasi SEO dengan arsitektur modern.",
  "url": "https://madebyaris.com/nextjs-development-indonesia",
  "keywords": [
    "Jasa Next.js Indonesia",
    "Pengembangan Next.js Profesional",
    "Developer Next.js Indonesia",
    "Jasa React.js Indonesia",
    "Pengembangan Web Modern",
    "Next.js Indonesia",
    "Full Stack Development Indonesia",
    "Aplikasi Web Enterprise",
    "Optimasi Performa Web",
    "Jasa Pembuatan Website Next.js"
  ],
  "mainEntity": {
    "@type": "Service",
    "name": "Jasa Pengembangan Next.js Profesional",
    "serviceType": "Pengembangan Web",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "url": "https://madebyaris.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "description": "Layanan pengembangan Next.js expert untuk membangun aplikasi web modern yang cepat, SEO-friendly, dan skalabel di Indonesia.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Hubungi untuk penawaran",
      "priceCurrency": "IDR"
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
          Jasa Pengembangan Next.js
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
          Aplikasi Web Modern • React • TypeScript • Solusi Enterprise
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
    title: 'Jasa Pengembangan Next.js Indonesia | Aplikasi Web Modern',
    description: 'Layanan pengembangan Next.js expert untuk aplikasi web modern di Indonesia. Solusi full-stack dengan React, TypeScript, dan arsitektur kelas enterprise.',
    keywords: [
      'Jasa Next.js',
      'Pengembangan Next.js',
      'Developer Next.js Indonesia',
      'Jasa React.js',
      'Pengembangan Web Modern',
      'Next.js Indonesia',
      'Full Stack Development',
      'Aplikasi Web Enterprise',
      'Optimasi Performa Web',
      'Jasa Pembuatan Website'
    ],
    openGraph: {
      title: 'Jasa Pengembangan Next.js Indonesia | Aplikasi Web Modern',
      description: 'Layanan pengembangan Next.js expert untuk aplikasi web modern di Indonesia.',
      type: 'website',
      locale: 'id_ID',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Jasa Pengembangan Next.js Indonesia | Aplikasi Web Modern',
      description: 'Layanan pengembangan Next.js expert untuk aplikasi web modern di Indonesia.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/nextjs-development-indonesia'
    },
  }
}

const features = [
  {
    title: 'Pengembangan Aplikasi Modern',
    description: 'Membangun aplikasi web modern yang cepat dan handal menggunakan fitur Next.js terbaru dan praktik terbaik industri.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Fokus pada Performa Optimal',
    description: 'Dioptimalkan untuk kecepatan maksimal dengan server-side rendering dan static site generation yang efisien.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Deployment Global untuk Performa Terbaik',
    description: 'Deployment lancar ke jaringan edge global untuk memastikan performa optimal di seluruh dunia.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Integrasi API yang Handal',
    description: 'Membangun dan mengintegrasikan API routes yang handal untuk konektivitas sistem yang sempurna.',
    icon: <Zap className="w-6 h-6" />,
  },
]

const benefits = [
  'Performa Super Cepat',
  'SEO Teroptimasi',
  'Type Safe & Aman',
  'Stack Modern Terkini',
  'Siap untuk Edge',
  'API Routes Handal',
  'Dukungan SSR Optimal',
  'Mudah Dikembangkan',
]

const processSteps = [
  {
    title: 'Analisis Kebutuhan & Rencana Pengembangan',
    description: 'Memahami kebutuhan bisnis Anda dan merencanakan arsitektur Next.js yang optimal untuk kesuksesan proyek.',
  },
  {
    title: 'Pengembangan Aplikasi dengan Next.js',
    description: 'Membangun aplikasi Anda dengan kode yang bersih, efisien, dan mudah dikelola menggunakan praktik terbaik.',
  },
  {
    title: 'Testing Komprehensif & Optimalisasi Performa',
    description: 'Melakukan testing menyeluruh dan optimasi performa untuk memastikan kualitas terbaik.',
  },
  {
    title: 'Deployment Global & Dukungan Berkelanjutan',
    description: 'Setup CI/CD profesional dan memberikan dukungan pemeliharaan berkelanjutan untuk kesuksesan jangka panjang.',
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
              <h2 className="text-3xl font-bold mb-4">Siap Bangun Proyek Next.js Anda?</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
                Hubungi Kami dan Mulai Membangun Aplikasi Web Cepat, SEO-Friendly, dan Scalable
              </p>
              <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                Hubungi Kami Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
} 