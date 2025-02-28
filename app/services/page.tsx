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
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/#webpage",
  "url": "https://madebyaris.com/services",
  "name": "Professional Web Development Services | Next.js, WordPress & PHP",
  "description": "Expert development services focused on modern technologies and best practices. From blazing-fast Next.js applications to powerful WordPress solutions.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://madebyaris.com/#website"
  },
  "about": {
    "@type": "Service",
    "name": "Professional Web Development Services",
    "description": "Expert development services focused on modern technologies and best practices. From blazing-fast Next.js applications to powerful WordPress solutions.",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "Senior Full-Stack Developer",
      "url": "https://madebyaris.com"
    },
    "serviceType": "Web Development",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Development",
            "description": "Modern web applications built with Next.js for optimal performance, SEO, and exceptional user experience.",
            "url": "https://madebyaris.com/services/nextjs-development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PHP Development",
            "description": "Custom PHP applications and solutions built with modern practices and robust architecture.",
            "url": "https://madebyaris.com/services/php-development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Development",
            "description": "Professional WordPress development including custom themes, plugins, and headless solutions.",
            "url": "https://madebyaris.com/services/wordpress"
          }
        }
      ]
    }
  },
  "mainEntity": {
    "@type": "Service",
    "name": "WordPress Development Services",
    "description": "Comprehensive WordPress development services including custom themes, plugins, headless solutions, and optimization.",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "url": "https://madebyaris.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Theme Development",
            "description": "Pixel-perfect WordPress themes that capture your unique style and meet your specific requirements.",
            "url": "https://madebyaris.com/services/wordpress/theme-development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plugin Development",
            "description": "Custom WordPress plugins that add exactly the features you need, built with security and performance in mind.",
            "url": "https://madebyaris.com/services/wordpress/plugin-development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Headless WordPress",
            "description": "Modern headless WordPress solutions with Next.js frontends, combining the best of both worlds.",
            "url": "https://madebyaris.com/services/wordpress/headless-development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Optimization",
            "description": "Comprehensive WordPress optimization for peak performance, security, and user experience.",
            "url": "https://madebyaris.com/services/wordpress/optimization"
          }
        }
      ]
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
  }
}

export default function ServicesPage() {
  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        {/* Hero Section with improved visual design */}
        <section className="relative py-10 md:py-12 overflow-hidden">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                Expert Services
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter lg:text-5xl mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">
                Professional Web Development Services
              </h1>
              
              <div className="max-w-[700px] mx-auto bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50">
                <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Expert development services focused on modern technologies and best practices. From blazing-fast Next.js applications to powerful WordPress solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-10 md:py-12">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            {/* Section heading with decorative elements */}
            <div className="relative mb-8 md:mb-10 text-center">
              <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Core Offerings
              </span>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Main Services
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500/50 rounded-full"></div>
            </div>
            
            {/* Services grid with enhanced cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <div 
                  key={service.title}
                  className="group"
                >
                  <div className="relative h-full p-6 md:p-8 bg-white dark:bg-zinc-800/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden flex flex-col">
                    {/* Icon */}
                    <div className="relative mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl w-fit">
                      <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-zinc-900 dark:text-white relative">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-6 relative">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="mb-6 relative flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <Link href={service.href}>
                        <Button className="w-full group bg-primary hover:bg-primary/90 text-white dark:text-black rounded-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WordPress Services Section */}
        <section className="py-10 md:py-12 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            {/* Section heading with decorative elements */}
            <div className="relative mb-8 md:mb-10 text-center">
              <span className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium mb-4">
                WordPress Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                WordPress Development Services
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-500/50 rounded-full"></div>
            </div>
            
            {/* WordPress services grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {wordPressServices.map((service) => (
                <div 
                  key={service.title}
                  className="group"
                >
                  <div className="relative h-full p-6 md:p-8 bg-white dark:bg-zinc-800/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden flex flex-col">
                    {/* Icon */}
                    <div className="relative mb-6 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl w-fit">
                      <div className="w-8 h-8 text-emerald-600 dark:text-emerald-400">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-zinc-900 dark:text-white relative">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-6 relative">
                      {service.description}
                    </p>
                    
                    {/* Benefits list */}
                    <div className="mb-6 relative flex flex-wrap gap-2">
                      {service.benefits.map((benefit) => (
                        <span 
                          key={benefit} 
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <Link href={service.href}>
                        <Button className="w-full group bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-12">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Ready to Start Your Project?
              </h2>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate to create a high-performance, visually stunning solution that meets your business needs and exceeds your expectations.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 dark:bg-primary dark:text-black dark:hover:bg-primary/90 px-6 py-2 md:px-8 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}