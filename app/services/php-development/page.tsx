import type { Metadata } from 'next'
import { Code2, Database, Server, Shield, ArrowRight, Rocket, Layout, Users, Star } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { PageHero } from '../../../components/ui/page-hero'
import { SectionWrapper } from '../../../components/ui/section-wrapper'
import { EnhancedCard } from '../../../components/ui/enhanced-card'
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
  "mainEntity": [
    {
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
      }
    },
    {
      "@type": "Product",
      "@id": "https://madebyaris.com/services/php-development/#product",
      "name": "PHP Development Services",
      "description": "Professional PHP development services for custom web applications, APIs, and enterprise solutions.",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section with new PageHero component */}
      <PageHero
        variant="services"
        badge={{ text: "PHP Expert", icon: Code2 }}
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Professional</span>{" "}
            <span className="bg-gradient-to-r from-wp-blue to-wp-sage bg-clip-text text-transparent">PHP</span>{" "}
            <span className="text-wp-navy-foreground dark:text-foreground">Development</span>
          </>
        }
        description="Custom PHP applications, APIs, and enterprise solutions built with modern frameworks and best practices for scalable, secure, and high-performance results."
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Button asChild variant="wp-primary" size="xl">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="wp-secondary" size="xl">
            <Link href="/projects">
              View Portfolio
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Introduction Section */}
      <SectionWrapper
        variant="default"
        padding="default"
        description="With extensive experience in modern PHP development, I create robust, scalable applications that power businesses worldwide. From custom web applications to enterprise APIs, I leverage the latest PHP frameworks and best practices to deliver solutions that perform exceptionally and scale with your business growth."
      />

      {/* Services Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "Services Offered", icon: Code2 }}
        title="PHP Development Solutions"
        description="Comprehensive PHP services for modern web applications and enterprise systems"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <EnhancedCard
                variant="elevated"
                title={service.title}
                description={service.description}
                hover={true}
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
                  <Button variant="wp-primary" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </EnhancedCard>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Advantages", icon: Star }}
        title="Why Choose My PHP Services"
        description="Experience the benefits of modern PHP development practices"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <EnhancedCard
              key={benefit.title}
              variant="glass"
              title={benefit.title}
              description={benefit.description}
            >
              <div className="mb-6 p-4 bg-wp-sage/10 dark:bg-wp-sage/20 rounded-xl w-fit mx-auto">
                <div className="w-8 h-8 text-wp-sage">
                  {benefit.icon}
                </div>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "Workflow", icon: Code2 }}
        title="PHP Development Process"
        description="A systematic approach to deliver exceptional PHP solutions"
      >
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-wp-blue/30 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                title: 'Analysis',
                description: 'Understanding your requirements and technical specifications for the PHP project.'
              },
              {
                title: 'Architecture',
                description: 'Designing scalable and maintainable PHP application architecture.'
              },
              {
                title: 'Development',
                description: 'Building your PHP solution with modern frameworks and best practices.'
              },
              {
                title: 'Deployment',
                description: 'Launching your PHP application with monitoring and support.'
              }
            ].map((step, index) => (
              <EnhancedCard
                key={step.title}
                variant="glass"
                title={step.title}
                description={step.description}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-wp-blue/20 text-wp-blue font-bold text-lg mb-4 mx-auto">
                  {index + 1}
                </div>
              </EnhancedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Client Feedback", icon: Users }}
        title="What Clients Say"
        description="Real feedback from satisfied PHP development clients"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <EnhancedCard
              key={index}
              variant="elevated"
              title={testimonial.author}
              description={testimonial.company}
            >
              <div className="mb-6 text-wp-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className="text-wp-navy/70 dark:text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
            </EnhancedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "Questions", icon: Users }}
        title="Frequently Asked Questions"
        description="Common questions about PHP development services"
      >
        <div className="space-y-6">
          {[
            {
              question: "What PHP frameworks do you work with?",
              answer: "I work with modern PHP frameworks including Laravel, Symfony, CodeIgniter, and custom PHP solutions. I choose the framework based on your project requirements and long-term maintenance needs."
            },
            {
              question: "How do you ensure PHP application security?",
              answer: "I follow PHP security best practices including input validation, SQL injection prevention, XSS protection, CSRF tokens, and secure authentication. All applications undergo security testing before deployment."
            },
            {
              question: "Can you modernize legacy PHP applications?",
              answer: "Yes, I specialize in modernizing legacy PHP applications. This includes upgrading to newer PHP versions, refactoring code, improving security, optimizing performance, and implementing modern development practices."
            },
            {
              question: "What is your approach to PHP performance optimization?",
              answer: "I optimize PHP applications through code profiling, database query optimization, caching strategies, memory management, and server configuration. This ensures your application runs efficiently at scale."
            }
          ].map((faq, index) => (
            <EnhancedCard
              key={index}
              variant="glass"
              title={faq.question}
              description={faq.answer}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper
        variant="gradient"
        padding="large"
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Ready to Build Your</span>{" "}
            <span className="bg-gradient-to-r from-wp-blue to-wp-sage bg-clip-text text-transparent">PHP Application?</span>
          </>
        }
        description="Let's discuss your PHP project requirements and create a solution that delivers exceptional performance and scalability."
      >
        <div className="text-center">
          <Button asChild variant="wp-primary" size="xl">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}