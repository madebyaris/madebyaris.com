import type { Metadata } from 'next'
import { ImageResponse } from 'next/og'
import { Mail, MapPin, Clock, ArrowRight, Linkedin, Github, Send, MessageSquare, Users, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PageHero } from '@/components/ui/page-hero'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { EnhancedCard } from '@/components/ui/enhanced-card'
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
      
      {/* Hero Section with new PageHero component */}
      <PageHero
        variant="contact"
        badge={{ text: "Get in Touch", icon: MessageSquare }}
        title={
          <>
            <span className="text-wp-navy dark:text-foreground">Let&apos;s Build</span>{" "}
            <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Something Amazing</span>
          </>
        }
        description="Enterprise-level solutions & technical consultation to help turn your vision into reality."
      >
        <Button asChild variant="wp-primary" size="xl">
          <Link href="#contact-form">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </PageHero>

      {/* Contact Form and Info Section */}
      <SectionWrapper
        variant="default"
        id="contact-form"
        padding="large"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form - Left Column (3/5) */}
          <div className="lg:col-span-3">
            <EnhancedCard variant="elevated" className="overflow-hidden">
              <div className="bg-gradient-to-r from-wp-blue/10 to-wp-gold/10 p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-wp-blue/20 rounded-full">
                    <MessageSquare className="h-5 w-5 text-wp-blue" />
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold text-wp-navy dark:text-foreground">Send Me a Message</h2>
                </div>
                <p className="mt-2 text-sm text-wp-navy/70 dark:text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <div className="p-6">
                <ContactForm />
              </div>
            </EnhancedCard>
          </div>
          
          {/* Contact Info - Right Column (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info Card */}
            <EnhancedCard variant="elevated">
              <div className="bg-gradient-to-r from-wp-blue/10 to-wp-blue/5 p-4 border-b border-border">
                <h2 className="font-semibold flex items-center gap-2 text-wp-navy dark:text-foreground">
                  <Users className="h-4 w-4" />
                  Contact Information
                </h2>
              </div>
              <div className="divide-y divide-border">
                <div className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-full shrink-0">
                    <Mail className="h-5 w-5 text-wp-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Email</h3>
                    <Link 
                      href="mailto:arissetia.m@gmail.com" 
                      className="text-wp-navy dark:text-foreground hover:text-wp-blue transition-colors"
                    >
                      arissetia.m@gmail.com
                    </Link>
                  </div>
                </div>
                
                <div className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-wp-gold/10 dark:bg-wp-gold/20 rounded-full shrink-0">
                    <MapPin className="h-5 w-5 text-wp-gold dark:text-wp-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Location</h3>
                    <p className="text-wp-navy dark:text-foreground">Sidoarjo, Indonesia</p>
                  </div>
                </div>
                
                <div className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-full shrink-0">
                    <Clock className="h-5 w-5 text-wp-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Availability</h3>
                    <p className="text-wp-navy dark:text-foreground">Mon - Sat, 9:00 - 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </EnhancedCard>
            
            {/* Professional Profiles */}
            <EnhancedCard variant="elevated">
              <div className="bg-gradient-to-r from-wp-gold/10 to-wp-gold/5 p-4 border-b border-border">
                <h2 className="font-semibold flex items-center gap-2 text-wp-navy dark:text-foreground">
                  <Briefcase className="h-4 w-4" />
                  Professional Profiles
                </h2>
              </div>
              <div className="p-4 flex flex-wrap gap-3">
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
            </EnhancedCard>
            
            {/* Quick Response Card */}
            <EnhancedCard variant="glass" className="bg-gradient-to-br from-wp-blue/5 to-wp-gold/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-wp-blue/10 rounded-full">
                  <Send className="h-5 w-5 text-wp-blue" />
                </div>
                <h3 className="font-semibold text-wp-navy dark:text-foreground">Quick Response</h3>
              </div>
              <p className="text-sm text-wp-navy/70 dark:text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message.
              </p>
            </EnhancedCard>
          </div>
        </div>
      </SectionWrapper>
        
      {/* Services Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "What I Offer", icon: Briefcase }}
        title="Services I Provide"
        description="Comprehensive web development solutions tailored to your business needs"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EnhancedCard
            variant="service"
            icon={MessageSquare}
            title="Enterprise Web Applications"
            description="Scalable solutions with modern tech stack and robust architecture for businesses of all sizes."
          />
          
          <EnhancedCard
            variant="service"
            icon={Users}
            title="E-commerce Solutions"
            description="Custom online stores with seamless user experience and secure transactions for maximum conversion."
          />
          
          <EnhancedCard
            variant="service"
            icon={Briefcase}
            title="Technical Consultation"
            description="Expert advice on architecture, performance optimization, and best practices for your projects."
          />
        </div>
      </SectionWrapper>

      {/* Trusted By Section */}
      <SectionWrapper
        variant="featured"
        badge={{ text: "Trusted Partnership", icon: Users }}
        title="Trusted By"
        description="Partnering with innovative companies to deliver exceptional digital experiences"
      >
        <Suspense fallback={<div className="h-[200px] animate-pulse bg-zinc-100/20 dark:bg-zinc-800/20 rounded-xl"></div>}>
          <EnhancedCard variant="glass" className="p-8">
            <LogoCarousel 
              columnCount={3}
              logos={techLogos}
            />
          </EnhancedCard>
        </Suspense>
      </SectionWrapper>
        
      {/* CTA Section */}
      <SectionWrapper
        variant="gradient"
        padding="large"
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Ready to Start</span>{" "}
            <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Your Project?</span>
          </>
        }
        description="Let's discuss your requirements and create something amazing together"
      >
        <div className="text-center">
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
      </SectionWrapper>
    </>
  )
}
