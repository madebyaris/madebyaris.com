import type { Metadata } from 'next'
import { Code, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/vibe-code-friend/ai-ide-tutoring/#webpage",
  "name": "AI IDE Tutoring - Master Cursor and Other AI Tools | Vibe Code Friend",
  "description": "Learn how to leverage AI-powered IDEs like Cursor to boost your productivity and coding skills. Personalized tutoring and guidance for developers of all levels.",
  "url": "https://madebyaris.com/services/vibe-code-friend/ai-ide-tutoring",
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
          "@id": "https://madebyaris.com/services/vibe-code-friend",
          "name": "Vibe Code Friend"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@id": "https://madebyaris.com/services/vibe-code-friend/ai-ide-tutoring",
          "name": "AI IDE Tutoring"
        }
      }
    ]
  }
};

// Generate Metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI IDE Tutoring - Master Cursor and Other AI Tools | Vibe Code Friend",
    description: "Learn how to leverage AI-powered IDEs like Cursor to boost your productivity and coding skills. Personalized tutoring and guidance for developers of all levels.",
    openGraph: {
      title: "AI IDE Tutoring - Master Cursor and Other AI Tools",
      description: "Learn how to leverage AI-powered IDEs like Cursor to boost your productivity and coding skills.",
      url: "https://madebyaris.com/services/vibe-code-friend/ai-ide-tutoring",
      siteName: "Made by Aris",
      images: [
        {
          url: "https://madebyaris.com/og-ai-ide-tutoring.png",
          width: 1200,
          height: 630,
          alt: "AI IDE Tutoring - Master Cursor and Other AI Tools",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://madebyaris.com/services/vibe-code-friend/ai-ide-tutoring",
    },
  };
}

export default function AiIdeTutoringPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="text-center mb-16 md:mb-24">
        <Code className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI IDE <span className="text-primary">Tutoring</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Master AI-powered coding tools like Cursor to supercharge your development workflow. Get personalized guidance and learn how to effectively leverage AI assistance in your daily coding tasks.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Session</Link>
        </Button>
      </section>

      {/* Main Content */}
      <section className="mb-16 md:mb-24">
        <div className="prose dark:prose-invert max-w-none">
          <h2>What You&apos;ll Learn</h2>
          <ul>
            <li><strong>Effective Prompting</strong> - Learn how to craft effective prompts to get the most out of AI coding assistants</li>
            <li><strong>Workflow Integration</strong> - Seamlessly integrate AI tools into your existing development workflow</li>
            <li><strong>Code Generation</strong> - Generate high-quality code snippets and complete functions with AI assistance</li>
            <li><strong>Debugging Support</strong> - Use AI to help identify and fix bugs in your code</li>
            <li><strong>Documentation Creation</strong> - Generate comprehensive documentation for your code with AI help</li>
          </ul>

          <h2>How It Works</h2>
          <p>
            Our AI IDE tutoring sessions are personalized to your specific needs and skill level. We&apos;ll start with an assessment of your current workflow and identify areas where AI tools can provide the most benefit. Then, through hands-on exercises and real-world examples, you&apos;ll learn how to leverage these powerful tools effectively.
          </p>
          <p>
            Sessions can be conducted remotely via screen sharing, allowing for interactive guidance and immediate feedback. Whether you&apos;re a beginner just starting out with AI tools or an experienced developer looking to optimize your workflow, our tutoring will help you reach the next level.
          </p>

          <h2>Why Choose Vibe Code Friend for AI IDE Tutoring?</h2>
          <p>
            Unlike generic tutorials, our tutoring is tailored specifically to your needs, projects, and learning style. We focus on practical applications rather than theoretical concepts, ensuring you can immediately apply what you learn to your actual work.
          </p>
          <p>
            Our expertise with tools like Cursor, GitHub Copilot, and other AI coding assistants means you&apos;re learning from someone who uses these tools daily and understands their strengths and limitations.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted/50 py-12 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Ready to Level Up Your AI Coding Skills?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Book a session today and start harnessing the full power of AI in your development workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">Book a Session</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services/vibe-code-friend">
              Explore Other Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 