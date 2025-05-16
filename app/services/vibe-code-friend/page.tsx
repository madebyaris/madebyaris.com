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
      "serviceType": "AI Coding Assistance",
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
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      },
      "description": "I help developers master AI tools like Cursor, fix stubborn bugs, set up servers, restructure projects, and architect scalable infrastructure. My focus is on empowering you to code with confidence and joy.",
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
      google: "your-google-verification-code", // Replace with your verification code
    },
  };
}

export default function VibeCodeFriendPage() {
  return (
    <div>
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
      />
    </div>
  );
} 