import type { Metadata } from 'next'
import { ImageResponse } from 'next/og'
import { Mail, MapPin, Clock, ArrowRight, Linkedin, Github, Send, MessageSquare, Users, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Enhanced Contact Section */}
      <section className="w-full py-24 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Enhanced section heading matching homepage style */}
          <div className="relative mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/10 dark:text-wp-blue mb-6 backdrop-blur-sm">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-wp-navy dark:text-foreground">Let&apos;s Build</span>{" "}
              <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Something Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-wp-navy/70 dark:text-muted-foreground max-w-3xl mx-auto mb-8">
              Enterprise-level solutions & technical consultation to help turn your vision into reality.
            </p>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
            
            {/* CTA Button */}
            <div className="mt-12">
              <Button asChild variant="wp-primary" size="xl" className="shadow-lg hover:shadow-xl">
                <Link href="#contact-form">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Form and Info Grid */}
          <div id="contact-form" className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-16">
            {/* Contact Form Card */}
            <div className="lg:col-span-2 group relative">
              <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/5 to-wp-gold/10 transition-all duration-300"></div>
                
                <div className="relative mb-6 flex items-center gap-3">
                  <div className="p-3 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl">
                    <MessageSquare className="h-6 w-6 text-wp-blue" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-wp-navy dark:text-foreground">Send Me a Message</h2>
                    <p className="text-sm text-wp-navy/70 dark:text-muted-foreground">
                      Fill out the form below and I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex-grow relative">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="group relative">
              <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-wp-gold/5 to-transparent transition-all duration-300"></div>
                
                <div className="relative mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-wp-gold/10 dark:bg-wp-gold/20 rounded-xl">
                      <Users className="h-6 w-6 text-wp-gold" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-wp-navy dark:text-foreground">Contact Information</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-full shrink-0">
                        <Mail className="h-5 w-5 text-wp-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">Email</h3>
                        <Link 
                          href="mailto:arissetia.m@gmail.com" 
                          className="text-wp-navy dark:text-foreground hover:text-wp-blue transition-colors font-medium"
                        >
                          arissetia.m@gmail.com
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-wp-gold/10 dark:bg-wp-gold/20 rounded-full shrink-0">
                        <MapPin className="h-5 w-5 text-wp-gold dark:text-wp-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">Location</h3>
                        <p className="text-wp-navy dark:text-foreground font-medium">Sidoarjo, Indonesia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-full shrink-0">
                        <Clock className="h-5 w-5 text-wp-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">Availability</h3>
                        <p className="text-wp-navy dark:text-foreground font-medium">Mon - Sat, 9:00 - 17:00 WIB</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Profiles */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold flex items-center gap-2 text-wp-navy dark:text-foreground mb-4">
                      <Briefcase className="h-4 w-4" />
                      Professional Profiles
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="wp-primary" size="sm">
                        <Link href="https://www.linkedin.com/in/arissetia/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href="https://github.com/madebyaris" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                      <Button asChild variant="wp-secondary" size="sm">
                        <Link href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" target="_blank" rel="noopener noreferrer">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Upwork
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Quick Response */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-wp-blue/10 rounded-full">
                        <Send className="h-5 w-5 text-wp-blue" />
                      </div>
                      <h3 className="font-semibold text-wp-navy dark:text-foreground">Quick Response</h3>
                    </div>
                    <p className="text-sm text-wp-navy/70 dark:text-muted-foreground">
                      I typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="relative mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-blue/10 text-wp-blue dark:bg-wp-gold/10 dark:text-wp-gold mb-6 backdrop-blur-sm">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-wp-navy dark:text-foreground">Services I</span>{" "}
              <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Provide</span>
            </h2>
            <p className="text-lg text-wp-navy/70 dark:text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Enterprise Web Applications */}
            <div className="group relative">
              <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/5 to-transparent group-hover:from-wp-blue/10 transition-all duration-300"></div>
                
                <div className="relative mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-wp-blue" />
                </div>
                
                <div className="flex-grow relative">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-blue dark:group-hover:text-wp-gold transition-colors duration-300">
                    Enterprise Web Applications
                  </h3>
                  <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed text-lg">
                    Scalable solutions with modern tech stack and robust architecture for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>

            {/* E-commerce Solutions */}
            <div className="group relative">
              <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-wp-gold/5 to-transparent group-hover:from-wp-gold/10 transition-all duration-300"></div>
                
                <div className="relative mb-6 p-4 bg-wp-gold/10 dark:bg-wp-gold/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-wp-gold" />
                </div>
                
                <div className="flex-grow relative">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-gold transition-colors duration-300">
                    E-commerce Solutions
                  </h3>
                  <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed text-lg">
                    Custom online stores with seamless user experience and secure transactions for maximum conversion.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Consultation */}
            <div className="group relative">
              <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-wp-sage/5 to-transparent group-hover:from-wp-sage/10 transition-all duration-300"></div>
                
                <div className="relative mb-6 p-4 bg-wp-sage/20 dark:bg-wp-sage/30 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-wp-sage-foreground" />
                </div>
                
                <div className="flex-grow relative">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-sage dark:group-hover:text-wp-sage transition-colors duration-300">
                    Technical Consultation
                  </h3>
                  <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed text-lg">
                    Expert advice on architecture, performance optimization, and best practices for your projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-24 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="relative mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/10 dark:text-wp-blue mb-6 backdrop-blur-sm">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Trusted Partnership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-wp-navy dark:text-foreground">Trusted</span>{" "}
              <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">By</span>
            </h2>
            <p className="text-lg text-wp-navy/70 dark:text-muted-foreground max-w-2xl mx-auto">
              Partnering with innovative companies to deliver exceptional digital experiences
            </p>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
          </div>
          
          <Suspense fallback={<div className="h-[200px] animate-pulse bg-zinc-100/20 dark:bg-zinc-800/20 rounded-xl"></div>}>
            <div className="p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <LogoCarousel 
                columnCount={3}
                logos={techLogos}
              />
            </div>
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-gradient-to-br from-wp-blue/5 via-transparent to-wp-gold/5 dark:from-wp-blue/10 dark:to-wp-gold/10">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-wp-navy dark:text-foreground">Ready to Start</span>{" "}
              <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Your Project?</span>
            </h2>
            <p className="text-lg text-wp-navy/70 dark:text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Button asChild variant="wp-primary" size="xl">
                <Link href="#contact-form">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="wp-secondary" size="xl">
                <Link href="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
