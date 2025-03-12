import type { Metadata } from 'next'
import { Layout, Globe, FileCode, Code2, ArrowRight, Brush, Rocket, Zap } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import Link from 'next/link'
import { ImageResponse } from 'next/og'

export const revalidate = 86400 // Revalidate daily

const services = [
  {
    title: 'Theme Development',
    description: 'Custom WordPress themes that perfectly align with your brand identity. From design to deployment, I create themes that stand out.',
    icon: <Brush className="w-6 h-6" />,
    href: '/services/wordpress/theme-development',
    features: ['Custom Design', 'Mobile-First', 'SEO Optimized', 'Fast Loading'],
  },
  {
    title: 'Plugin Development',
    description: 'Extend WordPress functionality with custom plugins that deliver exactly what your business needs.',
    icon: <FileCode className="w-6 h-6" />,
    href: '/services/wordpress/plugin-development',
    features: ['Custom Features', 'API Integration', 'Secure Code', 'Scalable'],
  },
  {
    title: 'Headless WordPress',
    description: 'Modern headless WordPress implementations with Next.js frontend for superior performance and flexibility.',
    icon: <Rocket className="w-6 h-6" />,
    href: '/services/wordpress/headless-development',
    features: ['Next.js Frontend', 'API-Driven', 'Better Performance', 'Modern Stack'],
  },
  {
    title: 'Performance Optimization',
    description: 'Boost your WordPress site&apos;s speed and security with comprehensive optimization services.',
    icon: <Zap className="w-6 h-6" />,
    href: '/services/wordpress/optimization',
    features: ['Speed Optimization', 'Security Hardening', 'CDN Setup', 'Caching'],
  },
]

const benefits = [
  {
    title: 'Expert Development',
    description: 'Years of experience in WordPress development, ensuring high-quality solutions.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored WordPress solutions that match your specific business needs.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: 'Modern Approach',
    description: 'Using the latest WordPress technologies and development practices.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Global Standards',
    description: 'Following WordPress coding standards and best practices.',
    icon: <Globe className="w-6 h-6" />,
  },
]

const testimonials = [
  {
    quote: "The WordPress theme developed for our business perfectly captures our brand identity. The attention to detail and performance optimization exceeded our expectations.",
    author: "Marketing Director",
    company: "Retail Brand"
  },
  {
    quote: "The custom plugin developed for our membership site has streamlined our operations and improved user experience significantly.",
    author: "CEO",
    company: "Educational Platform"
  }
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/wordpress/#webpage",
  "name": "WordPress Development Services | Custom Solutions",
  "description": "Professional WordPress development services including custom themes, plugins, and optimization. Expert solutions for modern WordPress websites.",
  "url": "https://madebyaris.com/services/wordpress",
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
          "@id": "https://madebyaris.com/services",
          "name": "Services"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://madebyaris.com/services/wordpress",
          "name": "WordPress Development"
        }
      }
    ]
  },
  "mainEntity": [
    {
      "@type": "Service",
      "name": "WordPress Development Services",
      "description": "Professional WordPress development services including custom themes, plugins, and optimization",
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
      "serviceType": "Web Development",
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "WordPress Development Services",
        "itemListElement": services.map((service) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "url": `https://madebyaris.com${service.href}`,
            "serviceOutput": {
              "@type": "ItemList",
              "itemListElement": service.features.map((feature, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": feature
                }
              }))
            }
          }
        }))
      }
    },
    {
      "@type": "Product",
      "@id": "https://madebyaris.com/services/wordpress/#product",
      "name": "WordPress Development Services",
      "description": "Professional WordPress development services including custom themes, plugins, and headless solutions.",
      "brand": {
        "@type": "Brand",
        "name": "Made by Aris"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "highPrice": 50000,
        "lowPrice": 5000,
        "offerCount": 6,
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "25",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": testimonials.map((testimonial) => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": testimonial.author,
          "jobTitle": testimonial.company
        },
        "reviewBody": testimonial.quote
      }))
    }
  ],
  "about": {
    "@type": "Thing",
    "name": "WordPress Development Expertise",
    "description": "Expert WordPress development services focusing on custom themes, plugins, and optimization. Specializing in modern WordPress solutions and headless architecture."
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
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "Contact for custom pricing",
      "priceCurrency": "USD",
      "valueAddedTaxIncluded": true
    },
    "availability": "https://schema.org/InStock",
    "highPrice": 50000,
    "lowPrice": 5000,
    "offerCount": services.length
  },
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What WordPress services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer comprehensive WordPress services including custom theme development, plugin development, headless WordPress solutions with Next.js, and performance optimization. Each service is tailored to meet your specific business needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with existing WordPress sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I work with both new and existing WordPress sites. Whether you need to upgrade, optimize, or add new features to your current WordPress site, I can help ensure your site performs at its best."
        }
      },
      {
        "@type": "Question",
        "name": "What's the benefit of headless WordPress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Headless WordPress combines WordPress's powerful content management capabilities with modern frontend technologies like Next.js. This results in better performance, enhanced security, and more flexibility in delivering content across different platforms."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure WordPress security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I implement comprehensive security measures including regular updates, secure coding practices, robust authentication, and security hardening. I also set up monitoring and backup systems to protect your WordPress site."
        }
      }
    ]
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
          WordPress Development Services
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
          Custom Themes • Plugins • Headless • Optimization
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0073AA', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            WordPress Expert
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            12+ Years Experience
          </div>
          <div style={{ background: '#14a800', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Enterprise Solutions
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
    title: 'WordPress Development Services | Custom Solutions',
    description: 'Expert WordPress development services including custom themes, plugins, and optimization. Professional solutions for modern WordPress websites.',
    keywords: [
      'WordPress Development',
      'Custom Themes',
      'Plugin Development',
      'WordPress Solutions',
      'Theme Development',
      'WordPress Expert',
      'Custom WordPress',
      'WordPress Optimization',
      'WordPress Security',
      'WordPress Consulting'
    ],
    openGraph: {
      title: 'WordPress Development Services | Custom Solutions',
      description: 'Expert WordPress development services for modern websites.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage],
      siteName: 'Made by Aris'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'WordPress Development Services | Custom Solutions',
      description: 'Expert WordPress development services for modern websites.',
      images: [ogImage],
      creator: '@madebyaris'
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/wordpress'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

export default function WordPressServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative min-h-screen">
        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-zinc-100/50 dark:from-zinc-900 dark:via-transparent dark:to-zinc-900/50" />
        </div>

        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-10 md:py-16">
            {/* Hero Section - Enhanced with semantic HTML */}
            <header className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 mb-4">
                <Layout className="w-4 h-4" />
                <span className="text-sm font-medium">WordPress Expert</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 dark:from-emerald-400 dark:via-emerald-300 dark:to-teal-400 mb-6">
                WordPress Development Services
              </h1>
              <div className="max-w-[700px] mx-auto">
                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                  From custom themes to headless implementations, 
                  <noscript>I provide comprehensive WordPress development services to help you get the most out of your website.</noscript>
                  <span className="inline-block">I provide comprehensive WordPress development services to help you get the most out of your website.</span>
                </p>
              </div>
            </header>

            {/* Introduction - Enhanced with article tag */}
            <article className="mt-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
              <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                With over 12 years of WordPress experience, I deliver custom solutions that combine beautiful design with powerful functionality. 
                Whether you need a custom theme, specialized plugin, or a complete WordPress solution, I focus on creating secure, 
                high-performance websites that drive results for your business.
              </p>
            </article>

            {/* Services Section - Enhanced with section tag */}
            <section className="mt-12 md:mt-16" aria-labelledby="services-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium mb-4">
                  Services Offered
                </span>
                <h2 id="services-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  WordPress Development Solutions
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {services.map((service, index) => (
                  <Link 
                    key={service.title} 
                    href={service.href}
                    className="group animate-in fade-in slide-in-from-bottom duration-1000"
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-emerald-200 dark:hover:border-emerald-800 flex flex-col bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
                      <div className="p-6 flex flex-col gap-4 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{service.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {service.features.map((feature) => (
                            <span 
                              key={feature} 
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 pt-0 mt-auto">
                        <Button className="w-full group bg-emerald-600 hover:bg-emerald-700 text-white dark:text-black rounded-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            {/* Benefits Section - Enhanced with section tag */}
            <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-300" aria-labelledby="benefits-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium mb-4">
                  Advantages
                </span>
                <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  Why Choose My WordPress Services
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:border-teal-200 dark:hover:border-teal-800 text-center"
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">{benefit.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section - New */}
            <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-400" aria-labelledby="process-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                  Workflow
                </span>
                <h2 id="process-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  WordPress Development Process
                </h2>
              </div>
              
              <div className="relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
                  {[
                    {
                      title: 'Discovery',
                      description: 'Understanding your business goals and requirements for the WordPress project.'
                    },
                    {
                      title: 'Planning',
                      description: 'Creating a detailed roadmap and technical specifications for development.'
                    },
                    {
                      title: 'Development',
                      description: 'Building your WordPress solution with clean, efficient, and secure code.'
                    },
                    {
                      title: 'Launch & Support',
                      description: 'Deploying your WordPress site and providing ongoing maintenance.'
                    }
                  ].map((step, index) => (
                    <div 
                      key={step.title}
                      className="p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800"
                      style={{ animationDelay: `${(index + 1) * 150}ms` }}
                    >
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold mb-3">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 text-lg">{step.title}</h3>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 text-center">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section - New */}
            <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500" aria-labelledby="testimonials-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                  Client Feedback
                </span>
                <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  What Clients Say
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-lg"
                  >
                    <div className="mb-4 text-purple-500 dark:text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center">
                      <div className="ml-0">
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{testimonial.author}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section - New for SEO */}
            <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-600" aria-labelledby="faq-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
                  Questions
                </span>
                <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    question: "What types of WordPress projects do you work on?",
                    answer: "I work on a wide range of WordPress projects including business websites, e-commerce stores, membership sites, blogs, and custom web applications built on WordPress. I specialize in custom theme development, plugin development, headless WordPress, and performance optimization."
                  },
                  {
                    question: "How long does it take to develop a WordPress website?",
                    answer: "The timeline varies depending on the complexity of the project. A basic custom WordPress site might take 2-4 weeks, while more complex projects with custom functionality can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation."
                  },
                  {
                    question: "Do you provide WordPress maintenance services?",
                    answer: "Yes, I offer ongoing WordPress maintenance services including security updates, performance monitoring, content updates, and technical support. This ensures your WordPress site remains secure, fast, and up-to-date."
                  },
                  {
                    question: "What makes your WordPress development services different?",
                    answer: "My approach combines technical expertise with a focus on business outcomes. I build WordPress solutions that are not only visually appealing but also secure, scalable, and optimized for performance. I follow WordPress best practices and coding standards to ensure high-quality, maintainable code."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-md"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">{faq.question}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section - Enhanced with semantic HTML */}
            <aside className="mt-12 md:mt-16 text-center bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 rounded-2xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom duration-1000 shadow-lg border border-emerald-100 dark:border-emerald-900/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
                Ready to Build Your WordPress Project?
              </h2>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-6 md:mb-8">
                Let&apos;s discuss your WordPress project and create a solution that perfectly matches your needs and exceeds your expectations.
              </p>
              <Link href="/contact">
                <Button size="lg" className="min-w-[200px] group bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-300 rounded-full">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}