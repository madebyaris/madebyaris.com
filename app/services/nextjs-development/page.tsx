import type { Metadata } from 'next'
import { Code2, ArrowRight, Rocket, Globe, Zap, Search, Building } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 mb-4">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">Next.js Expert</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400 mb-6">
                Next.js Development Services
              </h1>
              <div className="max-w-[700px] mx-auto">
                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                  Modern web applications built with Next.js. 
                  <noscript>Optimized for performance, SEO, and exceptional user experience.</noscript>
                  <span className="inline-block">Optimized for performance, SEO, and exceptional user experience.</span>
                </p>
              </div>
            </header>

            {/* Introduction - Enhanced with article tag */}
            <article className="mt-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
              <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                My Next.js development service focuses on creating modern, high-performance web 
                applications. Using the latest features and best practices, I build solutions that 
                are not only fast and reliable but also maintainable and scalable for future growth.
              </p>
            </article>

            {/* Key Features Section - Enhanced with section tag */}
            <section className="mt-12 md:mt-16" aria-labelledby="features-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                  Key Features
                </span>
                <h2 id="features-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  What Makes Next.js Special
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <Card 
                    key={feature.title}
                    className="p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] animate-in fade-in slide-in-from-bottom duration-1000"
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform hover:scale-110">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{feature.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Benefits Section - Enhanced with section tag */}
            <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-300" aria-labelledby="benefits-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                  Advantages
                </span>
                <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  Benefits of Next.js Development
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit}
                    className="p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 text-center text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-800"
                    style={{ animationDelay: `${(index + 1) * 75}ms` }}
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </section>

            {/* Development Process - Enhanced with section tag */}
            <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-400" aria-labelledby="process-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium mb-4">
                  Workflow
                </span>
                <h2 id="process-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  Development Process
                </h2>
              </div>
              
              <div className="relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
                  {processSteps.map((step, index) => (
                    <div 
                      key={step.title}
                      className="p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-800"
                      style={{ animationDelay: `${(index + 1) * 150}ms` }}
                    >
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
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

            {/* Technologies Section - Enhanced with section tag */}
            <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500" aria-labelledby="tech-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                  Tech Stack
                </span>
                <h2 id="tech-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  Technologies I Work With
                </h2>
              </div>
              
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'tRPC', 'GraphQL', 'REST API', 'MongoDB', 'PostgreSQL', 'Vercel'].map((tech, index) => (
                    <div 
                      key={tech}
                      className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg text-center text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300"
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Specialized Services Section */}
            <section className="mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-550" aria-labelledby="specialized-services-heading">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                  Specialized Services
                </span>
                <h2 id="specialized-services-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                  Next.js Specialized Solutions
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/services/nextjs-development/vercel" className="group">
                  <div className="h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mr-4">
                        <Rocket className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Vercel Deployment</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">Expert Vercel deployment services for Next.js applications. Optimize your deployment pipeline with edge functions, analytics, and enterprise-grade infrastructure.</p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                
                <Link href="/services/nextjs-development/nextjs-indonesia" className="group">
                  <div className="h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mr-4">
                        <Globe className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Next.js Indonesia</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">Specialized Next.js development services for the Indonesian market. Tailored solutions for local businesses with support in Bahasa Indonesia.</p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                
                <Link href="/services/nextjs-development/nextjs-seo" className="group">
                  <div className="h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mr-4">
                        <Search className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Next.js SEO Services</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">Comprehensive SEO optimization for Next.js applications. Improve your search rankings with server-side rendering, metadata optimization, and structured data.</p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                
                <Link href="/services/nextjs-development/agency-indonesia" className="group">
                  <div className="h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mr-4">
                        <Building className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">Agency Services Indonesia</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">Full-service Next.js agency for Indonesian enterprises. End-to-end web development from planning and design to development and maintenance.</p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
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
            <aside className="mt-12 md:mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-2xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom duration-1000 shadow-lg border border-blue-100 dark:border-blue-900/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Ready to Build Your Next.js Project?
              </h2>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-6 md:mb-8">
                Let&apos;s discuss how Next.js can help you build a faster, more efficient web application that delivers exceptional user experiences.
              </p>
              <Link href="/contact">
                <Button size="lg" className="min-w-[200px] group bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300 rounded-full">
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