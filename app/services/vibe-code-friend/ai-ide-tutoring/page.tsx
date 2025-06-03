import type { Metadata } from 'next'
import { Code, ArrowRight, Terminal, LucideGitPullRequest } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
    <div className="bg-background">
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_60%)]"></div>
        <div className="absolute w-[800px] h-[800px] -right-40 -top-40 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative text-center">
          <Badge variant="outline" className="mb-8 px-4 py-1.5 inline-flex border-primary/20">AI Development</Badge>
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Code className="w-14 h-14 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI IDE <span className="text-primary">Tutoring</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Master AI-powered coding tools like Cursor to supercharge your development workflow. Get personalized guidance and learn how to effectively leverage AI assistance in your daily coding tasks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Schedule a Session <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/vibe-code-friend">
                Explore Other Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-background/70 backdrop-blur-sm rounded-xl p-8 border border-border/50 shadow-lg">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-semibold mb-6">What You&apos;ll Learn</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-muted/50 p-6 rounded-lg border border-border/30 flex">
                  <div className="mr-4 text-primary">
                    <Terminal className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Effective Prompting</h3>
                    <p className="text-muted-foreground">Learn how to craft effective prompts to get the most out of AI coding assistants</p>
                  </div>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg border border-border/30 flex">
                  <div className="mr-4 text-primary">
                    <LucideGitPullRequest className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Workflow Integration</h3>
                    <p className="text-muted-foreground">Seamlessly integrate AI tools into your existing development workflow</p>
                  </div>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg border border-border/30 flex">
                  <div className="mr-4 text-primary">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Code Generation</h3>
                    <p className="text-muted-foreground">Generate high-quality code snippets and complete functions with AI assistance</p>
                  </div>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg border border-border/30 flex">
                  <div className="mr-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m3 9 18 0"/><path d="M9 21V9"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Documentation Creation</h3>
                    <p className="text-muted-foreground">Generate comprehensive documentation for your code with AI help</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
              <p className="text-lg mb-6">
                Our AI IDE tutoring sessions are personalized to your specific needs and skill level. We&apos;ll start with an assessment of your current workflow and identify areas where AI tools can provide the most benefit. Then, through hands-on exercises and real-world examples, you&apos;ll learn how to leverage these powerful tools effectively.
              </p>
              <p className="text-lg mb-10">
                Sessions can be conducted remotely via screen sharing, allowing for interactive guidance and immediate feedback. Whether you&apos;re a beginner just starting out with AI tools or an experienced developer looking to optimize your workflow, our tutoring will help you reach the next level.
              </p>

              <h2 className="text-3xl font-semibold mb-6">Why Choose Vibe Code Friend for AI IDE Tutoring?</h2>
              <div className="bg-muted/30 p-6 rounded-xl mb-10 border border-border/30">
                <p className="text-lg mb-4">
                  <strong className="text-primary">Personalized Approach:</strong> Unlike generic tutorials, our tutoring is tailored specifically to your needs, projects, and learning style. We focus on practical applications rather than theoretical concepts, ensuring you can immediately apply what you learn to your actual work.
                </p>
                <p className="text-lg">
                  <strong className="text-primary">Expert Guidance:</strong> Our expertise with tools like Cursor, GitHub Copilot, and other AI coding assistants means you&apos;re learning from someone who uses these tools daily and understands their strengths and limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
          <div className="text-center bg-gradient-to-br from-background to-muted/50 rounded-2xl p-10 shadow-lg border border-border/30 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold mb-6">Ready to Level Up Your AI Coding Skills?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Book a session today and start harnessing the full power of AI in your development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Book a Session <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/services/vibe-code-friend">
                  Explore Other Services 
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 