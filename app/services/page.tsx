import type { Metadata } from 'next'
import { Code2, Layout, Server, Rocket, Zap, FileCode, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { ImageResponse } from 'next/og'

const services = [
  {
    title: 'Next.js Development',
    description: 'Modern web applications built with Next.js for optimal performance, SEO, and exceptional user experience.',
    icon: <Code2 className="w-6 h-6" />,
    href: '/services/nextjs-development',
    features: ['Server Components', 'Static Generation', 'Edge Runtime', 'API Routes'],
  },
  {
    title: 'PHP Development',
    description: 'Custom PHP applications and solutions built with modern practices and robust architecture.',
    icon: <Server className="w-6 h-6" />,
    href: '/services/php-development',
    features: ['Custom Applications', 'API Development', 'Database Design', 'Security Focus'],
  },
  {
    title: 'WordPress Development',
    description: 'Professional WordPress development including custom themes, plugins, and headless solutions.',
    icon: <Layout className="w-6 h-6" />,
    href: '/services/wordpress',
    features: ['Custom Themes', 'Plugin Development', 'Headless WordPress', 'Performance'],
  },
]

const wordPressServices = [
  {
    title: 'Custom Theme Development',
    description: 'Pixel-perfect WordPress themes that capture your unique style and meet your specific requirements.',
    icon: <Layout className="w-6 h-6" />,
    href: '/services/wordpress/theme-development',
    benefits: ['Unique Design', 'Mobile-First', 'SEO Optimized', 'Fast Loading'],
  },
  {
    title: 'Plugin Development',
    description: 'Custom WordPress plugins that add exactly the features you need, built with security and performance in mind.',
    icon: <FileCode className="w-6 h-6" />,
    href: '/services/wordpress/plugin-development',
    benefits: ['Custom Features', 'Integration Ready', 'Scalable', 'Well-Maintained'],
  },
  {
    title: 'Headless WordPress',
    description: 'Modern headless WordPress solutions with Next.js frontends, combining the best of both worlds.',
    icon: <Rocket className="w-6 h-6" />,
    href: '/services/wordpress/headless-development',
    benefits: ['Modern Stack', 'Better Performance', 'API-Driven', 'Flexible'],
  },
  {
    title: 'WordPress Optimization',
    description: 'Comprehensive WordPress optimization for peak performance, security, and user experience.',
    icon: <Zap className="w-6 h-6" />,
    href: '/services/wordpress/optimization',
    benefits: ['Speed Optimization', 'Security Hardening', 'CDN Setup', 'Caching'],
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development Services",
  "description": "Professional web development services including Next.js, WordPress, and PHP development",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "url": "https://madebyaris.com"
  },
  "serviceType": "Web Development",
  "areaServed": "Worldwide"
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
          Professional Web Development Services
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
          Next.js • WordPress • PHP • Enterprise Solutions
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0077B5', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            12+ Years Experience
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Enterprise Solutions
          </div>
          <div style={{ background: '#14a800', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Full-Stack Development
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
    title: 'Web Development Services | Next.js, WordPress & PHP',
    description: 'Professional web development services including Next.js, WordPress, and PHP development. Expert solutions for modern web applications.',
    keywords: [
      'Web Development Services',
      'Next.js Development',
      'WordPress Development',
      'PHP Development',
      'Full Stack Development',
      'Custom Web Solutions',
      'Enterprise Development',
      'Modern Web Apps',
      'Web Architecture',
      'Technical Consulting'
    ],
    openGraph: {
      title: 'Web Development Services | Modern Solutions',
      description: 'Professional web development services for modern businesses.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Web Development Services | Modern Solutions',
      description: 'Professional web development services for modern businesses.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/services'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

export default function ServicesPage() {
  return (
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
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Professional Web Development Services
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                Expert development services focused on modern technologies and best practices. From blazing-fast Next.js applications to powerful WordPress solutions.
              </p>
            </div>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="h-full p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700">
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 transition-transform hover:scale-110">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{service.title}</h2>
                      <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span key={feature} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Link href={service.href}>
                          <Button className="w-full group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WordPress Services Section */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                WordPress Development Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wordPressServices.map((service, index) => (
                  <div 
                    key={service.title}
                    className="animate-in fade-in slide-in-from-bottom duration-1000"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="h-full p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700">
                      <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 transition-transform hover:scale-110">
                          {service.icon}
                        </div>
                        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{service.title}</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.benefits.map((benefit) => (
                            <span key={benefit} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                              {benefit}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Link href={service.href}>
                            <Button className="w-full group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}