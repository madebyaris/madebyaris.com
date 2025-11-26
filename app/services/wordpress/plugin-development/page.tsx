import type { Metadata } from 'next'
import { FileCode, ArrowRight, Database, Lock, Rocket } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { Card } from '../../../../components/ui/card'
import { ImageResponse } from 'next/og'

const features = [
  {
    title: 'Custom Functionality',
    description: 'Develop plugins that add exactly the features your business needs, from simple widgets to complex systems.',
    icon: <FileCode className="w-6 h-6" />,
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connect your WordPress site with external services and APIs through custom plugins.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Database Solutions',
    description: 'Efficient database structures and queries for optimal plugin performance.',
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Security First',
    description: 'Built with WordPress security best practices to protect your site and data.',
    icon: <Lock className="w-6 h-6" />,
  },
]

const benefits = [
  'Custom Features',
  'Scalable Code',
  'Easy Updates',
  'Clean Code',
  'Performance Focus',
  'API Ready',
  'Well Documented',
  'Secure Design',
]

const processSteps = [
  {
    title: 'Requirements Gathering',
    description: 'Understanding your needs and planning the plugin architecture and features.',
  },
  {
    title: 'Development',
    description: 'Writing clean, efficient code following WordPress plugin development standards.',
  },
  {
    title: 'Testing & Security',
    description: 'Rigorous testing across different environments and security vulnerability checks.',
  },
  {
    title: 'Deployment & Support',
    description: 'Smooth installation process and ongoing maintenance support.',
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "WordPress Plugin Development Services",
  "description": "Custom WordPress plugin development services for unique business needs. Expert in creating secure, scalable, and maintainable WordPress plugins.",
  "provider": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "WordPress Plugin Developer",
    "url": "https://madebyaris.com"
  },
  "mainEntity": {
    "@type": "Service",
    "name": "WordPress Plugin Development",
    "serviceType": "WordPress Plugin Development",
    "areaServed": "Worldwide",
    "provider": {
      "@type": "Person",
      "name": "Aris Setiawan",
      "jobTitle": "WordPress Plugin Developer",
      "url": "https://madebyaris.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "Contact for pricing",
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": true
      },
      "availability": "https://schema.org/InStock",
      "highPrice": 2000,
      "lowPrice": 500,
      "offerCount": 4
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "23",
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
          "name": "CEO at Educational Platform"
        },
        "reviewBody": "The custom plugin developed for our membership site has streamlined our operations and improved user experience significantly."
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
          "name": "CTO at E-commerce Platform"
        },
        "reviewBody": "Excellent work on our custom WooCommerce plugin. The integration was seamless and the performance improvements are notable."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WordPress Plugin Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Plugin Development",
            "description": "Tailored WordPress plugins for specific business needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plugin Maintenance",
            "description": "Regular updates and support for WordPress plugins"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plugin Integration",
            "description": "Third-party API and service integrations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plugin Optimization",
            "description": "Performance tuning and code optimization"
          }
        }
      ]
    }
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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@id": "https://madebyaris.com/services/wordpress/plugin-development",
          "name": "Plugin Development"
        }
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of WordPress plugins can you develop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop all types of WordPress plugins including e-commerce extensions, membership plugins, custom post type plugins, API integrations, security plugins, and any custom functionality your business needs."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure plugin security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow WordPress security best practices, implement input validation, data sanitization, and proper authentication. All plugins undergo thorough security testing before deployment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide plugin maintenance and updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer ongoing maintenance services including regular updates, compatibility checks, security patches, and performance optimization to keep your plugin running smoothly."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party APIs with WordPress plugins?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We have extensive experience integrating various third-party APIs and services into WordPress plugins, ensuring secure and efficient data exchange."
        }
      }
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "WordPress Plugin Development",
    "description": "Professional WordPress plugin development services including custom development, maintenance, integration, and optimization."
  },
  "keywords": [
    "WordPress Plugin Development",
    "Custom WordPress Plugins",
    "Plugin Integration",
    "WordPress Development",
    "Plugin Maintenance",
    "WordPress Solutions",
    "Plugin Expert",
    "WordPress Extensions",
    "Plugin Optimization",
    "Enterprise WordPress"
  ],
  "url": "https://madebyaris.com/services/wordpress/plugin-development",
  "potentialAction": {
    "@type": "CommunicateAction",
    "target": "https://madebyaris.com/contact",
    "name": "Contact for WordPress Plugin Development"
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
          WordPress Plugin Development
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
          Custom Plugins • Integrations • Maintenance
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0073AA', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Plugin Expert
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Custom Solutions
          </div>
          <div style={{ background: '#14a800', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Enterprise Grade
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
    title: 'WordPress Plugin Development | Custom Solutions & Integration',
    description: 'Expert WordPress plugin development services for custom business needs. Secure, scalable, and maintainable WordPress plugins with professional support.',
    keywords: [
      'WordPress Plugin Development',
      'Custom WordPress Plugins',
      'Plugin Integration',
      'WordPress Development',
      'Plugin Maintenance',
      'WordPress Solutions',
      'Plugin Expert',
      'WordPress Extensions',
      'Plugin Optimization',
      'Enterprise WordPress'
    ],
    openGraph: {
      title: 'WordPress Plugin Development | Custom Solutions',
      description: 'Expert WordPress plugin development for your unique needs.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'WordPress Plugin Development | Custom Solutions',
      description: 'Expert WordPress plugin development for your unique needs.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/wordpress/plugin-development'
    },
  }
}

export default function WordPressPluginDevelopmentPage() {
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

      <div className="container relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-12">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 mb-4">
                <FileCode className="w-4 h-4" />
                <span className="text-sm font-medium">Plugin Development Expert</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                WordPress Plugin Development
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                Custom WordPress plugins that extend your website&apos;s functionality. Built with security, performance, and scalability in mind.
              </p>
            </div>

            {/* Introduction */}
            <div className="mt-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                My WordPress plugin development service focuses on creating custom, efficient plugins 
                that add exactly the functionality your website needs. Each plugin is built following 
                WordPress coding standards and best practices, ensuring security, maintainability, and 
                seamless integration with your existing setup.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 transition-transform hover:scale-110">
                      {feature.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{feature.title}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Development Process */}
            <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Plugin Development Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.title}
                    className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg dark:border-zinc-800 transition-all duration-300 hover:shadow-lg"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 font-semibold">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{step.title}</h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Benefits of Custom Plugin Development
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit}
                    className="p-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg dark:border-zinc-800 text-center text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-2xl p-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Ready to Extend Your WordPress Site?
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-8">
                Let&apos;s discuss how a custom plugin can add the exact functionality your website needs.
              </p>
              <Button size="lg" className="min-w-[200px] group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
                Start Your Plugin Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}