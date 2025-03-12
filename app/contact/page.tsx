import type { Metadata } from 'next'
import { ImageResponse } from 'next/og'
import { Mail, MapPin, Clock, ArrowRight, Linkedin, Github, Send, MessageSquare, Users, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { techLogos } from '@/components/ui/tech-logos'
import { LogoCarousel } from '@/components/ui/logo-carousel'
import { Suspense } from 'react'

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://madebyaris.com/contact/#webpage",
  "name": "Contact Aris Setiawan | Enterprise Web Development Solutions",
  "description": "Get in touch with Aris Setiawan for enterprise web development projects, technical consultations, and collaborations.",
  "url": "https://madebyaris.com/contact",
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
          "@id": "https://madebyaris.com/contact",
          "name": "Contact"
        }
      }
    ]
  },
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://madebyaris.com/#organization",
    "name": "MadeByAris",
    "url": "https://madebyaris.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://madebyaris.com/logo.png",
      "width": "180",
      "height": "180"
    },
    "founder": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "Senior Full Stack Developer",
      "url": "https://madebyaris.com",
      "image": "https://madebyaris.com/astro.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "arissetia.m@gmail.com",
      "availableLanguage": ["English", "Indonesian"],
      "areaServed": "Worldwide",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sidoarjo",
      "addressCountry": "Indonesia"
    },
    "sameAs": [
      "https://www.linkedin.com/in/arissetia/",
      "https://github.com/madebyaris",
      "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise Web Applications",
          "description": "Scalable solutions with modern tech stack and robust architecture",
          "url": "https://madebyaris.com/services/nextjs-development"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Contact for custom pricing",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Solutions",
          "description": "Custom online stores with seamless user experience and secure transactions",
          "url": "https://madebyaris.com/services/wordpress"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Contact for custom pricing",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical Consultation",
          "description": "Expert advice on architecture, performance optimization, and best practices",
          "url": "https://madebyaris.com/services"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Contact for custom pricing",
          "priceCurrency": "USD"
        }
      }
    ],
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
          "name": "Tech Director at E-commerce Company"
        },
        "reviewBody": "Working with Aris transformed our e-commerce platform. His deep understanding of Next.js and performance optimization resulted in significantly faster load times and better user engagement."
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
          "name": "Founder of Tech Startup"
        },
        "reviewBody": "Aris helped us migrate our application to Next.js 14, implementing server components and the new app router. The improvement in performance and SEO was immediate."
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
          Let&apos;s Build Something Amazing
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
          Enterprise Web Development Solutions & Technical Consultations
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0077B5', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            LinkedIn
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            GitHub
          </div>
          <div style={{ background: '#14a800', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Upwork
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
    title: 'Contact Aris Setiawan | Enterprise Web Development Solutions',
    description: 'Get in touch for enterprise-level web development solutions, technical consultations, or project collaborations. Specializing in Next.js, React, and WordPress.',
    keywords: [
      'Contact Developer',
      'Hire Web Developer',
      'Enterprise Solutions',
      'Technical Consultation',
      'Next.js Development',
      'React Development',
      'WordPress Development',
      'Full Stack Developer',
      'Web Architecture',
      'Project Collaboration'
    ],
    openGraph: {
      title: 'Contact Aris Setiawan | Enterprise Web Development',
      description: 'Let\'s collaborate on your next web development project.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Aris Setiawan | Enterprise Web Development',
      description: 'Let\'s collaborate on your next web development project.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/contact'
    }
  }
}

export default function ContactPage() {
  // Function to generate structured data
  function generateStructuredData() {
    return {
      __html: JSON.stringify(structuredData)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData()}
      />
      
      {/* Hero Section - Simplified for better LCP */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Static background with reduced complexity */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.05),transparent_60%)]"></div>
        
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Get in Touch
            </div>
            
            {/* Critical LCP element - simplified and without Sparkles initially */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter lg:text-5xl mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">
              Let&apos;s Build Something Amazing
            </h1>
            
            <div className="max-w-[700px] mx-auto bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50">
              <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Enterprise-level solutions & technical consultation 
                to help turn your vision into reality.
              </p>
            </div>
          </div>
        </div>  
      </section>

      <main className="container max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Two-column layout for form and contact info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Contact Form - Left Column (3/5) */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden border border-zinc-200/80 dark:border-zinc-700/80 shadow-xl">
              <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 p-4 md:p-6 border-b border-zinc-200/80 dark:border-zinc-700/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold">Send Me a Message</h2>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <div className="p-4 md:p-6 bg-white dark:bg-zinc-900">
                <ContactForm />
              </div>
            </Card>
          </div>
          
          {/* Contact Info - Right Column (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info Cards */}
            <Card className="overflow-hidden border border-zinc-200/80 dark:border-zinc-700/80 shadow-lg">
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-4 border-b border-zinc-200/80 dark:border-zinc-700/80">
                <h2 className="font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Contact Information
                </h2>
              </div>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <div className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full shrink-0">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-zinc-500 dark:text-zinc-400">Email</h3>
                    <Link 
                      href="mailto:arissetia.m@gmail.com" 
                      className="text-zinc-900 dark:text-zinc-100 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      arissetia.m@gmail.com
                    </Link>
                  </div>
                </div>
                
                <div className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full shrink-0">
                    <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-zinc-500 dark:text-zinc-400">Location</h3>
                    <p className="text-zinc-900 dark:text-zinc-100">Sidoarjo, Indonesia</p>
                  </div>
                </div>
                
                <div className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full shrink-0">
                    <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-zinc-500 dark:text-zinc-400">Availability</h3>
                    <p className="text-zinc-900 dark:text-zinc-100">Mon - Sat, 9:00 - 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Professional Profiles */}
            <Card className="overflow-hidden border border-zinc-200/80 dark:border-zinc-700/80 shadow-lg">
              <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 p-4 border-b border-zinc-200/80 dark:border-zinc-700/80">
                <h2 className="font-semibold flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Professional Profiles
                </h2>
              </div>
              <div className="p-4 flex flex-wrap gap-3">
                <Link href="https://www.linkedin.com/in/arissetia/" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-[#0077B5] hover:bg-[#0077B5]/90 text-white">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://github.com/madebyaris" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-[#14a800] hover:bg-[#14a800]/90 text-white">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Upwork
                  </Button>
                </Link>
              </div>
            </Card>
            
            {/* Quick Response Card */}
            <Card className="bg-gradient-to-br from-primary/5 to-emerald-500/5 border border-zinc-200/80 dark:border-zinc-700/80 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Quick Response</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                I typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message.
              </p>
            </Card>
          </div>
        </div>
        
        {/* Services Section - Lazy loaded */}
        <Suspense fallback={<div className="h-[300px] animate-pulse bg-zinc-100/20 dark:bg-zinc-800/20 rounded-xl mb-16"></div>}>
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  Services I Offer
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary/50 rounded-full"></div>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="group p-6 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Card decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                
                <div className="relative">
                  <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise Web Applications</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Scalable solutions with modern tech stack and robust architecture for businesses of all sizes.
                  </p>
                </div>
              </Card>
              
              <Card className="group p-6 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Card decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                
                <div className="relative">
                  <div className="mb-4 p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">E-commerce Solutions</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Custom online stores with seamless user experience and secure transactions for maximum conversion.
                  </p>
                </div>
              </Card>
              
              <Card className="group p-6 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Card decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 dark:bg-purple-900/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                
                <div className="relative">
                  <div className="mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Technical Consultation</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Expert advice on architecture, performance optimization, and best practices for your development team.
                  </p>
                </div>
              </Card>
            </div>
          </section>
        </Suspense>
        
        {/* Trusted By Section - Lazy loaded */}
        <Suspense fallback={<div className="h-[200px] animate-pulse bg-zinc-100/20 dark:bg-zinc-800/20 rounded-xl mb-16"></div>}>
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  Trusted By
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary/50 rounded-full"></div>
              </h2>
            </div>
            
            <Card className="p-8 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-700/80 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/80 to-transparent dark:via-zinc-900/10 backdrop-blur-xl" />
             
              <div className="relative">
                <LogoCarousel 
                  columnCount={3}
                  logos={techLogos}
                />
              </div>
            </Card>
          </section>
        </Suspense>
        
        {/* CTA Section - Lazy loaded */}
        <Suspense fallback={<div className="h-[200px] animate-pulse bg-zinc-100/20 dark:bg-zinc-800/20 rounded-xl"></div>}>
          <section>
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-emerald-500/5 border border-zinc-200/80 dark:border-zinc-700/80 shadow-xl relative overflow-hidden">
              
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  Ready to Start Your Project?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  Fill out the contact form above or send me an email directly. I&apos;ll get back to you within 24 hours to discuss how we can work together to bring your vision to life.
                </p>
                <Link href="mailto:arissetia.m@gmail.com">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white dark:text-black dark:hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]">
                    Send Email <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </section>
        </Suspense>
      </main>
    </>
  )
}
