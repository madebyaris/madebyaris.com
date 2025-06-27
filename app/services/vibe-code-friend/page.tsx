import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/page-hero'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { ServiceGrid } from '@/components/vibe-code-friend/services-grid'
import { TestimonialsSection, vibeCodeTestimonials } from '@/components/vibe-code-friend/testimonials'
import { VibeCodeFAQ } from '@/components/vibe-code-friend/faq'
import { VibeCodeCta } from '@/components/vibe-code-friend/cta'
import { Bot, ArrowRight } from 'lucide-react'
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
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Button asChild variant="wp-primary" size="xl">
            <Link href="/contact">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="wp-secondary" size="xl">
            <Link href="#services">
              View Services
            </Link>
          </Button>
        </div>
      </PageHero>
      
      {/* Services Grid */}
      <SectionWrapper
        variant="accent"
        id="services"
        badge={{ text: "Services", icon: Bot }}
        title="AI-Powered Development Assistance"
        description="Comprehensive coding support to accelerate your development workflow"
      >
        <ServiceGrid />
      </SectionWrapper>
      
      {/* Testimonials */}
      <SectionWrapper
        variant="default"
        badge={{ text: "Client Feedback", icon: Bot }}
        title="What Developers Say"
        description="Real feedback from developers who've experienced the Vibe Code Friend difference"
      >
        <TestimonialsSection testimonials={vibeCodeTestimonials} />
      </SectionWrapper>
      
      {/* FAQ Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "Questions", icon: Bot }}
        title="Frequently Asked Questions"
        description="Common questions about our AI-powered development assistance"
      >
        <VibeCodeFAQ />
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
      </SectionWrapper>
    </>
  );
} 