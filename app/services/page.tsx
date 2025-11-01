import type { Metadata } from 'next'
import { Code2, Layout, Server, Rocket, Zap, FileCode, ArrowRight, MessageSquareHeart, Briefcase, Trophy } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { PageHero } from '../../components/ui/page-hero'
import { SectionWrapper } from '../../components/ui/section-wrapper'
import { EnhancedCard } from '../../components/ui/enhanced-card'
import { ImageResponse } from 'next/og'

export const revalidate = 86400 // Revalidate daily

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
  {
    title: 'Vibe Code Friend',
    description: 'Your AI-powered coding companion. Get help with AI tools like Cursor, code fixes, server setup, and infrastructure architecture.',
    icon: <MessageSquareHeart className="w-6 h-6" />,
    href: '/services/vibe-code-friend',
    features: ['AI IDE Tutoring', 'Code Fixing', 'Server Setup', 'Project Restructuring'],
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
      }
    ]
  },
  "mainEntity": [
    {
      "@type": "Service",
      "name": "Professional Web Development Services",
      "description": "Expert development services focused on modern technologies and best practices. From blazing-fast Next.js applications to powerful WordPress solutions.",
      "provider": {
        "@type": "Person",
        "@id": "https://madebyaris.com/#person",
        "name": "Aris Setiawan",
        "jobTitle": "Senior Full Stack Developer",
        "url": "https://madebyaris.com",
        "image": "https://madebyaris.com/aris.png",
        "sameAs": [
          "https://www.linkedin.com/in/arissetia/",
          "https://github.com/madebyaris",
          "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
        ]
      },
      "serviceType": "Web Development",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
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
      "@id": "https://madebyaris.com/services/#product",
      "name": "Web Development Services",
      "description": "Professional web development services including Next.js, WordPress, and PHP solutions for businesses worldwide.",
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
  ],
  "about": {
    "@type": "Thing",
    "name": "Web Development Services",
    "description": "Comprehensive web development services including Next.js, WordPress, and PHP development. Expert solutions for modern web applications and enterprise needs."
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
    "offerCount": services.length + wordPressServices.length
  },
  "subjectOf": {
    "@type": "ItemList",
    "name": "WordPress Development Services",
    "description": "Comprehensive WordPress development services including custom themes, plugins, headless solutions, and optimization.",
    "itemListElement": wordPressServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://madebyaris.com${service.href}`,
        "provider": {
          "@type": "Person",
          "@id": "https://madebyaris.com/#person"
        },
        "serviceOutput": {
          "@type": "ItemList",
          "itemListElement": service.benefits.map((benefit, benefitIndex) => ({
            "@type": "ListItem",
            "position": benefitIndex + 1,
            "item": {
              "@type": "Service",
              "name": benefit
            }
          }))
        }
      }
    }))
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
      
      {/* Hero Section with new PageHero component */}
      <PageHero
        variant="services"
        badge={{ text: "Expert Services", icon: Briefcase }}
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Professional</span>{" "}
            <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Web Development</span>{" "}
            <span className="text-wp-navy-foreground dark:text-foreground">Services</span>
          </>
        }
        description="Expert development services focused on modern technologies and best practices. From blazing-fast Next.js applications to powerful WordPress solutions."
      >
        <Button asChild variant="wp-primary" size="xl">
          <Link href="/contact">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </PageHero>

      {/* Main Services Section */}
      <SectionWrapper
        variant="default"
        padding="small"
        badge={{ text: "Core Offerings", icon: Code2 }}
        title="Main Services"
        description="Comprehensive development solutions tailored to your business needs"
      >
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {services.map((service) => (
                          <EnhancedCard
               key={service.title}
               variant="elevated"
               title={service.title}
               description={service.description}
             >
               {/* Icon */}
               <div className="mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit">
                 <div className="w-8 h-8 text-wp-blue">
                   {service.icon}
                 </div>
               </div>
               
               {/* Features list */}
               <div className="mb-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span 
                    key={feature} 
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-wp-blue/10 dark:bg-wp-blue/20 text-wp-blue"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                <Button asChild variant="wp-primary" className="w-full">
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* WordPress Services Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "WordPress Expertise", icon: Layout }}
        title="WordPress Development Services"
        description="Specialized WordPress solutions from custom themes to headless architectures"
      >
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {wordPressServices.map((service) => (
                          <EnhancedCard
               key={service.title}
               variant="elevated"
               title={service.title}
               description={service.description}
             >
               {/* Icon */}
               <div className="mb-6 p-4 bg-wp-gold/10 dark:bg-wp-gold/20 rounded-xl w-fit">
                 <div className="w-8 h-8 text-wp-gold">
                   {service.icon}
                 </div>
               </div>
               
               {/* Benefits list */}
               <div className="mb-6 flex flex-wrap gap-2">
                {service.benefits.map((benefit) => (
                  <span 
                    key={benefit} 
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-wp-gold/10 dark:bg-wp-gold/20 text-wp-gold dark:text-wp-gold"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                <Button asChild variant="wp-secondary" className="w-full">
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </EnhancedCard>
          ))}
        </div>
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
        description="Let's collaborate to create a high-performance, visually stunning solution that meets your business needs and exceeds your expectations."
      >
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Button asChild variant="wp-primary" size="xl">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="wp-secondary" size="xl">
              <Link href="/projects">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}