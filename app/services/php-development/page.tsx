import type { Metadata } from 'next'
import { Code2, Database, Server, Shield, ArrowRight, Rocket, Layout } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import Link from 'next/link'
import { ImageResponse } from 'next/og'

const services = [
  {
    title: 'Custom Web Applications',
    description: 'Develop tailored PHP applications that meet your specific business requirements and scale with your growth.',
    icon: <Code2 className="w-6 h-6" />,
    href: '/services/php-development/custom-applications',
    features: ['Modern PHP', 'Scalable Architecture', 'Custom Features', 'High Performance'],
  },
  {
    title: 'API Development',
    description: 'Create robust RESTful APIs and web services using modern PHP frameworks and best practices.',
    icon: <Server className="w-6 h-6" />,
    href: '/services/php-development/api-development',
    features: ['RESTful APIs', 'GraphQL', 'API Security', 'Documentation'],
  },
  {
    title: 'Database Solutions',
    description: 'Design and implement efficient database architectures optimized for your application needs.',
    icon: <Database className="w-6 h-6" />,
    href: '/services/php-development/database-solutions',
    features: ['Database Design', 'Optimization', 'Migration', 'Scaling'],
  },
  {
    title: 'Legacy Modernization',
    description: 'Upgrade and modernize legacy PHP applications to use current best practices and technologies.',
    icon: <Rocket className="w-6 h-6" />,
    href: '/services/php-development/modernization',
    features: ['Code Refactoring', 'Security Updates', 'Performance Boost', 'Modern Stack'],
  },
]

const benefits = [
  {
    title: 'Modern Development',
    description: 'Using latest PHP versions and modern development practices.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Scalable Solutions',
    description: 'Applications that grow with your business needs.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: 'Performance Focus',
    description: 'Optimized code for maximum speed and efficiency.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Security First',
    description: 'Following PHP security best practices and standards.',
    icon: <Shield className="w-6 h-6" />,
  },
]

const testimonials = [
  {
    quote: "The custom PHP application developed for our business has significantly improved our operational efficiency. The code quality and performance are exceptional.",
    author: "Technical Director",
    company: "Enterprise Solutions Co."
  },
  {
    quote: "Our legacy PHP system was modernized and optimized, resulting in faster performance and better security. The process was smooth and professional.",
    author: "CTO",
    company: "E-commerce Platform"
  }
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/php-development/#webpage",
  "name": "PHP Development Services | Custom Applications & APIs",
  "description": "Professional PHP development services for custom web applications, APIs, and enterprise solutions. Expert in modern PHP frameworks and best practices.",
  "url": "https://madebyaris.com/services/php-development",
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
          "@id": "https://madebyaris.com/services/php-development",
          "name": "PHP Development"
        }
      }
    ]
  },
  "mainEntity": {
    "@type": "Service",
    "name": "PHP Development Services",
    "description": "Professional PHP development services for custom web applications, APIs, and enterprise solutions. Expert in modern PHP frameworks and best practices.",
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
    "serviceType": "PHP Development",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "PHP Development Services",
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
  },
  "about": {
    "@type": "Thing",
    "name": "PHP Development Expertise",
    "description": "Expert PHP development services focusing on modern practices, security, and scalability. Specializing in custom applications, APIs, and enterprise solutions."
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
        "name": "What PHP versions do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I work with modern PHP versions (7.4+, 8.x) and follow PHP-FIG standards and best practices. I can also help upgrade legacy applications to newer PHP versions."
        }
      },
      {
        "@type": "Question",
        "name": "What PHP frameworks do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I have extensive experience with Laravel, Symfony, CodeIgniter, and other modern PHP frameworks. The choice of framework depends on your project's specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with legacy PHP applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I specialize in modernizing legacy PHP applications. This includes code refactoring, security updates, performance optimization, and migration to modern PHP versions and frameworks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I offer comprehensive maintenance services including security updates, bug fixes, performance optimization, and feature enhancements for PHP applications."
        }
      }
    ]
  }
}

// Generate OG Image
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
          PHP Development Services
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
          Custom Applications • APIs • Database Solutions
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#777BB3', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            PHP Expert
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Modern PHP
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
    title: 'PHP Development Services | Custom Applications & APIs',
    description: 'Professional PHP development services for custom web applications, APIs, and enterprise solutions. Expert in modern PHP frameworks and best practices.',
    keywords: [
      'PHP Development',
      'Custom PHP Applications',
      'PHP API Development',
      'Database Solutions',
      'Enterprise PHP',
      'Modern PHP Development',
      'PHP Expert',
      'PHP Frameworks',
      'Legacy Code Modernization',
      'PHP Consulting'
    ],
    openGraph: {
      title: 'PHP Development Services | Custom Solutions',
      description: 'Professional PHP development services for modern web applications.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PHP Development Services | Custom Solutions',
      description: 'Professional PHP development services for modern web applications.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/php-development'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

export default function PhpDevelopmentPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-zinc-100/50 dark:from-zinc-900 dark:via-transparent dark:to-zinc-900/50" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:py-16">
          {/* Hero Section */}
          <header className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 mb-4">
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-medium">PHP Expert</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-purple-400 mb-6">
              PHP Development Services
            </h1>
            <div className="max-w-[700px] mx-auto">
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                Modern PHP solutions built with industry best practices and robust architecture for scalable, high-performance web applications.
              </p>
            </div>
          </header>

          {/* Introduction */}
          <article className="mt-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              With extensive experience in PHP development, I deliver modern, secure, and scalable solutions that drive business growth. 
              From custom web applications to API development and database optimization, my focus is on creating high-quality PHP 
              applications that meet your specific needs while following industry best practices.
            </p>
          </article>

          {/* Services Section */}
          <section className="mt-12 md:mt-16" aria-labelledby="services-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                Services Offered
              </span>
              <h2 id="services-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                PHP Development Solutions
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
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-indigo-200 dark:hover:border-indigo-800 flex flex-col bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-transform group-hover:scale-110">
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
                      <Button className="w-full group bg-indigo-600 hover:bg-indigo-700 text-white dark:text-black rounded-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-300" aria-labelledby="benefits-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                Advantages
              </span>
              <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                Why Choose My PHP Services
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-800 text-center"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">{benefit.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-400" aria-labelledby="process-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Workflow
              </span>
              <h2 id="process-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                PHP Development Process
              </h2>
            </div>
            
            <div className="relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
                {[
                  {
                    title: 'Analysis',
                    description: 'Understanding requirements and planning the technical architecture.'
                  },
                  {
                    title: 'Development',
                    description: 'Writing clean, efficient PHP code following modern standards.'
                  },
                  {
                    title: 'Testing',
                    description: 'Thorough testing and security implementation.'
                  },
                  {
                    title: 'Deployment',
                    description: 'Smooth deployment and ongoing support.'
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

          {/* Testimonials Section */}
          <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500" aria-labelledby="testimonials-heading">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium mb-4">
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
                  <div className="mb-4 text-emerald-500 dark:text-emerald-400">
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

          {/* FAQ Section */}
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
                  question: "What PHP versions do you work with?",
                  answer: "I work with modern PHP versions (7.4+, 8.x) and follow PHP-FIG standards and best practices. For legacy systems, I can also work with older versions while helping plan migration paths to newer versions."
                },
                {
                  question: "Do you work with specific PHP frameworks?",
                  answer: "Yes, I have extensive experience with popular PHP frameworks including Laravel, Symfony, and CodeIgniter. The choice of framework depends on your project's specific requirements and goals."
                },
                {
                  question: "How do you ensure code security?",
                  answer: "Security is a top priority. I follow OWASP security guidelines, implement proper authentication and authorization, use prepared statements for database queries, and regularly update dependencies to prevent vulnerabilities."
                },
                {
                  question: "What's your approach to performance optimization?",
                  answer: "My approach includes database query optimization, caching strategies, code profiling, and implementing best practices for PHP performance. I also use tools like Xdebug and Blackfire for performance monitoring."
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

          {/* CTA Section */}
          <aside className="mt-12 md:mt-16 text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-2xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom duration-1000 shadow-lg border border-indigo-100 dark:border-indigo-900/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Ready to Build Your PHP Project?
            </h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-6 md:mb-8">
              Let&apos;s discuss your PHP project and create a solution that perfectly matches your needs and exceeds your expectations.
            </p>
            <Link href="/contact">
              <Button size="lg" className="min-w-[200px] group bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105 transition-all duration-300 rounded-full">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  )
}