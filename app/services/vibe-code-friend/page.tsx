import type { Metadata } from 'next'
import { VibeCodeFriendHero } from '@/components/vibe-code-friend/hero'
import { ServiceGrid } from '@/components/vibe-code-friend/services-grid'
import { TestimonialsSection, vibeCodeTestimonials } from '@/components/vibe-code-friend/testimonials'
import { VibeCodeFAQ } from '@/components/vibe-code-friend/faq'
import { VibeCodeCta } from '@/components/vibe-code-friend/cta'

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
    <div className="bg-background min-h-screen">
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <VibeCodeFriendHero />
      
      {/* Services Grid */}
      <ServiceGrid />
      
      {/* Testimonials */}
      <TestimonialsSection testimonials={vibeCodeTestimonials} />
      
      {/* FAQ Section */}
      <VibeCodeFAQ />
      
      {/* CTA Section */}
      <VibeCodeCta
        heading="Ready to Level Up Your Coding Experience?"
        description="Whether you're looking to master AI tools, fix stubborn bugs, or architect your next big project, I'm here to help. Let's build something amazing together!"
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
  );
} 