import type { Metadata } from 'next'
import { Layout, Globe, FileCode, Code2, ArrowRight, Brush, Rocket, Zap, Users, Star } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { PageHero } from '../../../components/ui/page-hero'
import { SectionWrapper } from '../../../components/ui/section-wrapper'
import { EnhancedCard } from '../../../components/ui/enhanced-card'
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
        "image": "https://madebyaris.com/aris.png",
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
      
      {/* Hero Section with new PageHero component */}
      <PageHero
        variant="services"
        badge={{ text: "WordPress Expert", icon: Layout }}
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">WordPress</span>{" "}
            <span className="bg-gradient-to-r from-wp-gold to-wp-sage bg-clip-text text-transparent">Development</span>{" "}
            <span className="text-wp-navy-foreground dark:text-foreground">Services</span>
          </>
        }
        description="From custom themes to headless implementations, I provide comprehensive WordPress development services to help you get the most out of your website."
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
        padding="small"
        description="With over 12 years of WordPress experience, I deliver custom solutions that combine beautiful design with powerful functionality. Whether you need a custom theme, specialized plugin, or a complete WordPress solution, I focus on creating secure, high-performance websites that drive results for your business."
      />

      {/* Services Section */}
      <SectionWrapper
        variant="accent"
        padding="small"
        badge={{ text: "Services Offered", icon: Code2 }}
        title="WordPress Development Solutions"
        description="Comprehensive WordPress services tailored to your business needs"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <EnhancedCard
                variant="elevated"
                title={service.title}
                description={service.description}
                hover={true}
              >
                {/* Icon */}
                <div className="mb-6 p-4 bg-wp-gold/10 dark:bg-wp-gold/20 rounded-xl w-fit">
                  <div className="w-8 h-8 text-wp-gold">
                    {service.icon}
                  </div>
                </div>
                
                {/* Features list */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={feature} 
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-wp-gold/10 dark:bg-wp-gold/20 text-wp-gold"
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
        padding="small"
        badge={{ text: "Advantages", icon: Star }}
        title="Why Choose My WordPress Services"
        description="Experience the difference of professional WordPress development"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <EnhancedCard
              key={benefit.title}
              variant="glass"
              title={benefit.title}
              description={benefit.description}
            >
              <div className="mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit mx-auto">
                <div className="w-8 h-8 text-wp-blue">
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
        padding="small"
        badge={{ text: "Workflow", icon: Code2 }}
        title="WordPress Development Process"
        description="A structured approach to deliver exceptional WordPress solutions"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <EnhancedCard
                key={step.title}
                variant="glass"
                title={step.title}
                description={step.description}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-wp-gold/20 text-wp-gold font-bold text-base mb-4 mx-auto">
                  {index + 1}
                </div>
              </EnhancedCard>
            ))}
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Client Feedback", icon: Users }}
        title="What Clients Say"
        description="Real feedback from satisfied WordPress clients"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <EnhancedCard
              key={index}
              variant="elevated"
              title={testimonial.author}
              description={testimonial.company}
            >
              <div className="mb-6 text-wp-gold">
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
        description="Common questions about WordPress development services"
      >
        <div className="space-y-6">
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
            <span className="bg-gradient-to-r from-wp-gold to-wp-sage bg-clip-text text-transparent">WordPress Project?</span>
          </>
        }
        description="Let's discuss your WordPress project and create a solution that perfectly matches your needs and exceeds your expectations."
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