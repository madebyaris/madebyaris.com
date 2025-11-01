import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/page-hero'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { ServiceGrid } from '@/components/vibe-code-friend/services-grid'
import { TestimonialsSection, vibeCodeTestimonials } from '@/components/vibe-code-friend/testimonials'
import { VibeCodeFAQ } from '@/components/vibe-code-friend/faq'
import { VibeCodeCta } from '@/components/vibe-code-friend/cta'
import { EnhancedCard } from '@/components/ui/enhanced-card'
import FeatureGrid from '@/components/feature/feature-grid'
import { Bot, ArrowRight, Zap, Trophy, Code2, Star, MessageSquare, Clock, Shield, Users, Target, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/vibe-code-friend/#webpage",
  "name": "Vibe Code Friend - AI Coding Assistance & Mentorship | Made by Aris",
  "description": "Get expert help with AI tools like Cursor, code fixes, server setup, and infrastructure architecture. Elevate your development workflow with personalized guidance.",
  "url": "https://madebyaris.com/services/vibe-code-friend",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://madebyaris.com/#website"
  },
  "keywords": [
    "AI Coding Assistance",
    "Cursor IDE Help",
    "Code Debugging",
    "Server Setup",
    "Infrastructure Architecture",
    "Project Restructuring",
    "AI Development Tools",
    "Coding Mentor",
    "Developer Assistance",
    "AI IDE Tutoring"
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
          "@id": "https://madebyaris.com/services/vibe-code-friend",
          "name": "Vibe Code Friend"
        }
      }
    ]
  },
  "mainEntity": [
    {
      "@type": "Service",
      "name": "Vibe Code Friend",
      "description": "AI-powered coding assistance and mentorship to help developers master coding tools, fix issues, and build better applications.",
      "provider": {
        "@type": "Person",
        "name": "Aris Setiawan"
      },
      "serviceType": "Development Assistance",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vibe Code Friend Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI IDE Tutoring",
              "description": "Get real-time guidance and explanations as you code, with personalized assistance directly in your IDE.",
              "url": "https://madebyaris.com/services/vibe-code-friend/ai-ide-tutoring"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Code Fixing",
              "description": "Quick and efficient debugging and error resolution for your code, with clear explanations of the solutions.",
              "url": "https://madebyaris.com/services/vibe-code-friend/code-fixing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Server Setup",
              "description": "Expert configuration and deployment of servers, ensuring optimal performance and security for your applications."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Project Restructuring",
              "description": "Comprehensive reorganization of your codebase for improved maintainability, scalability, and developer experience."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Infrastructure Architecture",
              "description": "Strategic design and implementation of robust, scalable infrastructure tailored to your project requirements."
            }
          }
        ]
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
        "availability": "https://schema.org/InStock"
      }
    }
  ],
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Vibe Code Friend work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vibe Code Friend is an AI-powered coding assistant that helps you write, debug, and optimize your code. Simply share your code or describe what you're trying to build, and our AI will provide suggestions, fix errors, and help you implement best practices."
        }
      },
      {
        "@type": "Question",
        "name": "What programming languages and technologies are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support a wide range of languages including JavaScript, TypeScript, Python, Java, C#, Ruby, Go, PHP, and more. Our service also covers frameworks like React, Vue, Angular, Next.js, Express, Django, and many others."
        }
      },
      {
        "@type": "Question",
        "name": "What are the pricing options for Vibe Code Friend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible pricing plans to suit different needs. Contact us for custom pricing based on your specific requirements."
        }
      }
    ]
  }
};

// Key Features Data
const features = [
  {
    title: "AI-Powered Assistance",
    description: "Leverage cutting-edge AI tools like Cursor, GitHub Copilot, and Claude to accelerate your development workflow with intelligent code suggestions and real-time assistance.",
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: "Real-Time Problem Solving",
    description: "Get instant help with debugging, code optimization, and architectural decisions. No more getting stuck on complex issues for hours.",
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Personalized Learning",
    description: "Tailored guidance based on your skill level, project requirements, and learning goals. Learn best practices while building real projects.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Infrastructure Expertise",
    description: "From server setup to cloud architecture, get expert guidance on building scalable, secure, and performant infrastructure solutions.",
    icon: <Shield className="w-8 h-8" />
  }
];

// Benefits Data
const benefits = [
  "Faster Development Cycles",
  "Reduced Debugging Time", 
  "Improved Code Quality",
  "Better Architecture Decisions",
  "Enhanced Learning Experience",
  "24/7 Expert Support",
  "Cost-Effective Solutions",
  "Scalable Infrastructure"
];

// Process Steps Data
const processSteps = [
  {
    title: "Initial Consultation",
    description: "We discuss your current challenges, goals, and how AI tools can enhance your development workflow."
  },
  {
    title: "Tool Setup & Training",
    description: "I help you set up and configure AI development tools, then provide hands-on training and best practices."
  },
  {
    title: "Active Development Support",
    description: "Real-time assistance during your development process, from code reviews to architectural guidance."
  },
  {
    title: "Ongoing Optimization",
    description: "Continuous improvement of your workflow, code quality, and infrastructure as your projects evolve."
  }
];

// Technologies Data
const technologies = [
  "Cursor IDE", "GitHub Copilot", "Claude", "ChatGPT", "Next.js", "React", "TypeScript", "Node.js", "Python", "Docker", "AWS", "Vercel", "PostgreSQL", "MongoDB"
];

// Generate Metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Vibe Code Friend - AI Coding Assistance & Mentorship | Made by Aris",
    description: "Get expert help with AI tools like Cursor, code fixes, server setup, and infrastructure architecture. Elevate your development workflow with personalized guidance.",
    openGraph: {
      title: "Vibe Code Friend - AI Coding Assistance & Mentorship",
      description: "Level up your coding with AI tools and expert guidance.",
      url: "https://madebyaris.com/services/vibe-code-friend",
      siteName: "Made by Aris",
      images: [
        {
          url: "https://madebyaris.com/og-vibe-code-friend.png",
          width: 1200,
          height: 630,
          alt: "Vibe Code Friend - AI Coding Assistance & Mentorship",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://madebyaris.com/services/vibe-code-friend",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Vibe Code Friend - AI Coding Assistance & Mentorship",
      description: "Get expert help with AI tools like Cursor, code fixes, server setup, and infrastructure architecture.",
      images: ["https://madebyaris.com/og-vibe-code-friend.png"],
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_CODE || '',
    },
  };
}

export default function VibeCodeFriendPage() {
  return (
    <>
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]" />
      </div>
      
      {/* Hero Section with new PageHero component */}
      <PageHero
        variant="services"
        badge={{ text: "AI Development Partner", icon: Bot }}
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Vibe</span>{" "}
            <span className="bg-gradient-to-r from-wp-blue to-wp-sage bg-clip-text text-transparent">Code</span>{" "}
            <span className="text-wp-navy-foreground dark:text-foreground">Friend</span>
          </>
        }
        description="Your AI-powered coding companion. We help developers master AI tools like Cursor, fix stubborn bugs, set up reliable servers, and architect scalable infrastructure."
        className="min-h-screen flex items-center justify-center"
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Button asChild variant="wp-primary" size="xl">
            <Link href="/contact">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="wp-secondary" size="xl">
            <Link href="/services">
              View Services
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Introduction Section */}
      <SectionWrapper
        variant="default"
        padding="default"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl md:text-2xl leading-relaxed text-wp-navy dark:text-foreground font-medium">
              Vibe Code Friend is your dedicated AI development partner, helping you leverage the latest AI tools and best practices to build better software faster.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-wp-navy/80 dark:text-muted-foreground mt-6">
              Whether you're a solo developer looking to optimize your workflow or a team seeking to integrate AI into your development process, I provide personalized guidance and hands-on support to accelerate your success.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Key Features Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "Key Features", icon: Zap }}
        title="What Makes Vibe Code Friend Special"
        description="Discover the powerful features that make AI-assisted development more effective and efficient"
      >
        <FeatureGrid
          items={features.map((f) => ({
            title: f.title,
            description: f.description,
            icon: f.icon,
          }))}
          className="max-w-7xl mx-auto"
        />
      </SectionWrapper>

      {/* Services Grid */}
      <SectionWrapper
        variant="default"
        id="services"
        badge={{ text: "Services", icon: Bot }}
        title="AI-Powered Development Assistance"
        description="Comprehensive coding support to accelerate your development workflow"
      >
        <div className="max-w-7xl mx-auto">
          <ServiceGrid />
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "Advantages", icon: Trophy }}
        title="Benefits of AI-Assisted Development"
        description="Why developers choose Vibe Code Friend for their AI development journey"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit}
              className="p-4 bg-white/80 dark:bg-wp-navy/50 backdrop-blur-sm rounded-lg border border-wp-blue/20 dark:border-wp-blue/30 text-center text-wp-navy dark:text-wp-blue transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-wp-blue/10 hover:to-wp-sage/10 dark:hover:from-wp-blue/20 dark:hover:to-wp-sage/20"
            >
              {benefit}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Development Process Section */}
      <SectionWrapper
        variant="default"
        padding="small"
        badge={{ text: "Workflow", icon: Code2 }}
        title="AI Development Process"
        description="A structured approach to integrating AI tools into your development workflow"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, index) => (
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

      {/* Technologies Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "Technologies", icon: Star }}
        title="AI Tools & Technologies We Work With"
        description="Expert guidance on the latest AI development tools and technologies"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <div 
              key={tech}
              className="p-3 bg-white/80 dark:bg-wp-navy/50 backdrop-blur-sm rounded-lg border border-wp-sage/20 dark:border-wp-sage/30 text-center text-wp-navy dark:text-wp-sage text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-wp-sage/10 hover:to-wp-blue/10 dark:hover:from-wp-sage/20 dark:hover:to-wp-blue/20"
            >
              {tech}
            </div>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Testimonials */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Client Feedback", icon: MessageSquare }}
        title="What Developers Say"
        description="Real feedback from developers who've experienced the Vibe Code Friend difference"
      >
        <div className="max-w-7xl mx-auto">
          <TestimonialsSection testimonials={vibeCodeTestimonials} />
        </div>
      </SectionWrapper>
      
      {/* FAQ Section */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Questions", icon: Bot }}
        title="Frequently Asked Questions"
        description="Common questions about our AI-powered development assistance"
      >
        <div className="max-w-4xl mx-auto">
          <VibeCodeFAQ />
        </div>
      </SectionWrapper>
      
      {/* CTA Section */}
      <SectionWrapper
        variant="gradient"
        padding="large"
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Ready to Level Up Your</span>{" "}
            <span className="bg-gradient-to-r from-wp-blue to-wp-sage bg-clip-text text-transparent">Coding Experience?</span>
          </>
        }
        description="Whether you're looking to master AI tools, fix stubborn bugs, or architect your next big project, I'm here to help. Let's build something amazing together!"
      >
        <div className="max-w-4xl mx-auto">
          <VibeCodeCta
            heading=""
            description=""
            buttons={{
              primary: {
                text: "Schedule Free Consultation",
                url: "/contact",
              },
              secondary: {
                text: "Explore Services",
                url: "/services",
              }
            }}
          />
        </div>
      </SectionWrapper>
    </>
  );
} 