import type { Metadata } from 'next'
import { Code2, ArrowRight, Rocket, Globe, Zap, Search, Building, Users, Trophy } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
import { PageHero } from '../../../components/ui/page-hero'
import { SectionWrapper } from '../../../components/ui/section-wrapper'
import { EnhancedCard } from '../../../components/ui/enhanced-card'
import { ImageResponse } from 'next/og'
import Link from 'next/link'

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/nextjs-development/#webpage",
  "name": "Next.js Development | React & TypeScript Solutions by Skilled Developer",
  "description": "Crafting high-performance web applications with Next.js, React, and TypeScript. Specialized in server components, performance optimization, and enterprise solutions. Based in Indonesia, serving clients worldwide.",
  "url": "https://madebyaris.com/services/nextjs-development",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://madebyaris.com/#website"
  },
  "keywords": [
    "Next.js Development",
    "React Development",
    "TypeScript Solutions",
    "Full Stack Development",
    "Web App Development",
    "Server Components",
    "App Router",
    "Performance Optimization",
    "Next.js Indonesia",
    "Next.js Agency",
    "Enterprise Solutions",
    "SEO Optimization",
    "Vercel Deployment",
    "API Integration",
    "Modern Web Development",
    "Next.js 14",
    "Edge Runtime",
    "Next.js Expert",
    "Indonesian Developer",
    "React TypeScript Expert"
  ],
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
          "@id": "https://madebyaris.com/services/nextjs-development",
          "name": "Next.js Development"
        }
      }
    ]
  },
  "mainEntity": [
    {
      "@type": "Service",
      "name": "Next.js Development Solutions",
      "serviceType": "Web Development",
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
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      },
      "description": "I build modern web applications using Next.js, React, and TypeScript. My focus is on creating fast, scalable solutions that are easy to maintain and deliver real business value. From server components to edge computing, I implement the latest features to give your project a competitive edge.",
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
        "offerCount": 6
      }
    },
    {
      "@type": "Product",
      "@id": "https://madebyaris.com/services/nextjs-development/#product",
      "name": "Next.js Development Services",
      "description": "Professional Next.js development services for modern web applications with optimal performance and scalability.",
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
          "reviewBody": "Working with Aris transformed our e-commerce platform. His deep understanding of Next.js and performance optimization resulted in significantly faster load times and better user engagement. The codebase is clean, well-documented, and easy to maintain."
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
          "reviewBody": "Aris helped us migrate our application to Next.js 14, implementing server components and the new app router. The improvement in performance and SEO was immediate. His technical expertise and clear communication made the process smooth."
        }
      ]
    }
  ],
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Next.js the right choice for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Next.js combines React's flexibility with powerful features like server-side rendering and static generation. It's particularly effective for projects needing strong SEO, fast page loads, and excellent user experience. The framework's server components and app router make it ideal for building modern, scalable web applications."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a Next.js application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline varies based on your project's scope and requirements. Typically, a basic application takes 4-6 weeks, while more complex projects might need 8-12 weeks. Enterprise applications with custom features and integrations can take 3-6 months. I'll provide a detailed timeline after understanding your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work with existing Next.js projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I regularly work with existing Next.js applications. Whether you need to upgrade to a newer version, improve performance, add features, or fix issues, I can help. I start by reviewing your codebase and suggesting the most effective approach for your goals."
        }
      },
      {
        "@type": "Question",
        "name": "What support do you provide after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer comprehensive post-launch support including performance monitoring, security updates, bug fixes, and feature enhancements. I can also provide training for your team and documentation for maintaining the application. My goal is to ensure your application continues to perform optimally."
        }
      }
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "Next.js Development Expertise",
    "description": "Specialized in building modern web applications with Next.js, focusing on performance, SEO, and scalability. Expert in React, TypeScript, and enterprise-grade solutions."
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
          Next.js Development Services
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
          Modern Web Apps • React • TypeScript • Enterprise Solutions
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0070F3', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Next.js Expert
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Full-Stack Development
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
    title: 'Next.js Development Services | Modern Web Applications | Expert Developer',
    description: 'Expert Next.js development services for modern web applications. Full-stack solutions with React, TypeScript, and enterprise-grade architecture. Specializing in server components, app router, and performance optimization.',
    keywords: [
      'Next.js Development',
      'React Development',
      'TypeScript Development',
      'Full Stack Development',
      'Enterprise Web Apps',
      'Modern Web Development',
      'Next.js Expert',
      'React Applications',
      'SSR Applications',
      'JAMstack Development',
      'Next.js 14',
      'App Router',
      'Server Components',
      'Edge Runtime',
      'Vercel Deployment',
      'Next.js SEO Services',
      'Next.js Indonesia',
      'Jasa Next.js',
      'Next.js Agency Indonesia',
      'Jasa SEO Next.js'
    ],
    openGraph: {
      title: 'Next.js Development Services | Modern Web Applications',
      description: 'Expert Next.js development services for modern web applications. Specializing in React, TypeScript, and server-side rendering for optimal performance.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage],
      siteName: 'Made by Aris'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Next.js Development Services | Modern Web Applications',
      description: 'Expert Next.js development services for modern web applications. Specializing in React, TypeScript, and server-side rendering for optimal performance.',
      images: [ogImage],
      creator: '@madebyaris'
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development'
    },
    other: {
      'structured-data': JSON.stringify(structuredData)
    }
  }
}

const features = [
  {
    title: 'Modern Development',
    description: 'Building fast, modern web applications using the latest Next.js features and best practices.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Performance Focus',
    description: 'Optimized for speed with server-side rendering and static site generation.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Global Deployment',
    description: 'Seamless deployment to edge networks for optimal global performance.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'API Integration',
    description: 'Building robust API routes and integrating with external services.',
    icon: <Zap className="w-6 h-6" />,
  },
]

const benefits = [
  'Fast Loading',
  'SEO Optimized',
  'Type Safe',
  'Modern Stack',
  'Edge Ready',
  'API Routes',
  'SSR Support',
  'Easy Scaling',
]

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your needs and planning the optimal Next.js architecture.',
  },
  {
    title: 'Development',
    description: 'Building your application with clean, efficient, and maintainable code.',
  },
  {
    title: 'Testing & Optimization',
    description: 'Comprehensive testing and performance optimization.',
  },
  {
    title: 'Deployment & Support',
    description: 'Setting up CI/CD and providing ongoing maintenance support.',
  },
]

export default function NextjsDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section with new PageHero component */}
      <PageHero
        variant="services"
        badge={{ text: "Next.js Expert", icon: Code2 }}
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Next.js</span>{" "}
            <span className="bg-gradient-to-r from-wp-blue to-indigo-600 bg-clip-text text-transparent">Development</span>{" "}
            <span className="text-wp-navy-foreground dark:text-foreground">Services</span>
          </>
        }
        description="Modern web applications built with Next.js. Optimized for performance, SEO, and exceptional user experience."
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
        description="My Next.js development service focuses on creating modern, high-performance web applications. Using the latest features and best practices, I build solutions that are not only fast and reliable but also maintainable and scalable for future growth."
      />

      {/* Key Features Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "Key Features", icon: Zap }}
        title="What Makes Next.js Special"
        description="Discover the powerful features that make Next.js the perfect choice for modern web development"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <EnhancedCard
              key={feature.title}
              variant="elevated"
              title={feature.title}
              description={feature.description}
            >
              <div className="mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit">
                <div className="w-8 h-8 text-wp-blue">
                  {feature.icon}
                </div>
              </div>
            </EnhancedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Advantages", icon: Trophy }}
        title="Benefits of Next.js Development"
        description="Why Next.js is the right choice for your web application"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div 
              key={benefit}
              className="p-4 bg-white/80 dark:bg-wp-navy/30 backdrop-blur-sm rounded-lg border border-wp-blue/20 text-center text-wp-navy dark:text-wp-blue transition-all duration-300 hover:scale-105 hover:bg-wp-blue/10 dark:hover:bg-wp-blue/20"
            >
              {benefit}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Development Process Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "Workflow", icon: Code2 }}
        title="Development Process"
        description="A structured approach to deliver exceptional results"
      >
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-wp-gold/30 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <EnhancedCard
                key={step.title}
                variant="glass"
                title={step.title}
                description={step.description}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-wp-gold/20 text-wp-gold font-bold text-lg mb-4 mx-auto">
                  {index + 1}
                </div>
              </EnhancedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Technologies Section */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Tech Stack", icon: Code2 }}
        title="Technologies I Work With"
        description="Modern tools and frameworks for cutting-edge development"
      >
        <div className="bg-white/80 dark:bg-wp-navy/30 backdrop-blur-sm rounded-2xl p-8 border border-wp-blue/20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'tRPC', 'GraphQL', 'REST API', 'MongoDB', 'PostgreSQL', 'Vercel'].map((tech) => (
              <div 
                key={tech}
                className="p-3 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-lg text-center text-sm font-medium text-wp-blue transition-all duration-300 hover:scale-105 hover:bg-wp-blue/20"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Specialized Services Section */}
      <SectionWrapper
        variant="gradient"
        badge={{ text: "Specialized Services", icon: Building }}
        title="Next.js Specialized Solutions"
        description="Tailored services for specific needs and markets"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EnhancedCard
            variant="elevated"
            title="Vercel Deployment"
            description="Expert Vercel deployment services for Next.js applications. Optimize your deployment pipeline with edge functions, analytics, and enterprise-grade infrastructure."
            hover={true}
          >
            <div className="mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit">
              <Rocket className="w-8 h-8 text-wp-blue" />
            </div>
            <div className="mt-auto">
              <Button asChild variant="wp-primary" className="w-full">
                <Link href="/services/nextjs-development/vercel">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </EnhancedCard>

          <EnhancedCard
            variant="elevated"
            title="Next.js Indonesia"
            description="Specialized Next.js development services for the Indonesian market. Tailored solutions for local businesses with support in Bahasa Indonesia."
            hover={true}
          >
            <div className="mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit">
              <Globe className="w-8 h-8 text-wp-blue" />
            </div>
            <div className="mt-auto">
              <Button asChild variant="wp-primary" className="w-full">
                <Link href="/services/nextjs-development/nextjs-indonesia">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </EnhancedCard>

          <EnhancedCard
            variant="elevated"
            title="Next.js SEO Services"
            description="Comprehensive SEO optimization for Next.js applications. Improve your search rankings with server-side rendering, metadata optimization, and structured data."
            hover={true}
          >
            <div className="mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit">
              <Search className="w-8 h-8 text-wp-blue" />
            </div>
            <div className="mt-auto">
              <Button asChild variant="wp-primary" className="w-full">
                <Link href="/services/nextjs-development/nextjs-seo">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </EnhancedCard>

          <EnhancedCard
            variant="elevated"
            title="Agency Services Indonesia"
            description="Full-service Next.js agency for Indonesian enterprises. End-to-end web development from planning and design to development and maintenance."
            hover={true}
          >
            <div className="mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit">
              <Building className="w-8 h-8 text-wp-blue" />
            </div>
            <div className="mt-auto">
              <Button asChild variant="wp-primary" className="w-full">
                <Link href="/services/nextjs-development/agency-indonesia">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </EnhancedCard>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Questions", icon: Users }}
        title="Frequently Asked Questions"
        description="Common questions about Next.js development services"
      >
        <div className="space-y-6">
          {[
            {
              question: "What is Next.js and why should I use it for my project?",
              answer: "Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations. It's ideal for projects that need SEO optimization, fast loading times, and a modern development experience."
            },
            {
              question: "How long does it typically take to develop a Next.js application?",
              answer: "Development timelines vary based on project complexity, but most small to medium-sized applications can be completed in 4-12 weeks. Enterprise applications may take longer depending on requirements and integrations."
            },
            {
              question: "Do you work with existing codebases or only new projects?",
              answer: "I work with both new projects and existing codebases. Whether you need to migrate from another framework to Next.js, upgrade an existing Next.js application, or start from scratch, I can help."
            },
            {
              question: "What makes your Next.js development services different?",
              answer: "My services combine technical expertise with a focus on business outcomes. I prioritize performance, maintainability, and user experience while ensuring your application meets your specific business goals."
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
            <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Next.js Project?</span>
          </>
        }
        description="Let's discuss how Next.js can help you build a faster, more efficient web application that delivers exceptional user experiences."
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