import type { Metadata } from 'next'
import { Wrench, ArrowRight, CheckCircle, AlertCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/vibe-code-friend/code-fixing/#webpage",
  "name": "Code Fixing & Debugging Service | Vibe Code Friend",
  "description": "Expert code debugging and error resolution service. Get your stubborn bugs fixed by a professional developer with years of experience across multiple languages and frameworks.",
  "url": "https://madebyaris.com/services/vibe-code-friend/code-fixing",
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
          "@id": "https://madebyaris.com/services/vibe-code-friend/code-fixing",
          "name": "Code Fixing"
        }
      }
    ]
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Code Fixing & Debugging Service",
    "serviceType": "Code Debugging",
    "provider": {
      "@type": "Person",
      "@id": "https://madebyaris.com/#person",
      "name": "Aris Setiawan"
    },
    "description": "Expert code debugging and error resolution service. Get your stubborn bugs fixed by a professional developer with years of experience across multiple languages and frameworks.",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    }
  }
};

// Generate Metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Code Fixing & Debugging Service | Vibe Code Friend",
    description: "Expert code debugging and error resolution service. Get your stubborn bugs fixed by a professional developer with years of experience across multiple languages and frameworks.",
    openGraph: {
      title: "Code Fixing & Debugging Service | Vibe Code Friend",
      description: "Expert code debugging and error resolution service. Get your stubborn bugs fixed quickly and efficiently.",
      url: "https://madebyaris.com/services/vibe-code-friend/code-fixing",
      siteName: "Made by Aris",
      images: [
        {
          url: "https://madebyaris.com/og-code-fixing.png", 
          width: 1200,
          height: 630,
          alt: "Code Fixing & Debugging Service | Vibe Code Friend",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://madebyaris.com/services/vibe-code-friend/code-fixing",
    },
    keywords: ["code debugging", "error fixing", "bug resolution", "code errors", "programming help", "developer assistance", "technical troubleshooting", "coding bugs", "software errors", "code issues"],
  };
}

export default function CodeFixingPage() {
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
          <Badge variant="outline" className="mb-8 px-4 py-1.5 inline-flex border-primary/20">Bug Resolution</Badge>
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Wrench className="w-14 h-14 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Code <span className="text-primary">Fixing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stuck on a stubborn bug or error? Get expert help to diagnose, fix, and prevent coding problems with clear explanations and efficient solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Fix My Code <ArrowRight className="h-4 w-4" />
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
              <h2 className="text-3xl font-semibold mb-8">How Our Code Fixing Service Works</h2>
              
              <div className="not-prose grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-muted/50 p-6 rounded-lg border border-border/30">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <AlertCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold m-0">Submit Your Issue</h3>
                  </div>
                  <p className="text-muted-foreground">Share your code and explain the error you&apos;re experiencing. More context helps us diagnose faster.</p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg border border-border/30">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold m-0">Expert Analysis</h3>
                  </div>
                  <p className="text-muted-foreground">We analyze your code, identify the root cause of the issue, and develop an efficient solution.</p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg border border-border/30">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold m-0">Solution Delivery</h3>
                  </div>
                  <p className="text-muted-foreground">Receive a fixed version of your code with clear explanations of what went wrong and how it was resolved.</p>
                </div>
              </div>
              
              <h2 className="text-3xl font-semibold mb-6 mt-16">Common Issues We Solve</h2>
              <div className="bg-muted/30 p-6 rounded-xl mb-10 border border-border/30">
                <ul className="grid md:grid-cols-2 gap-4 list-none pl-0 mb-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="font-medium">Runtime Errors</strong> - From null pointer exceptions to memory leaks, we diagnose and fix runtime crashes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="font-medium">Build Failures</strong> - Resolve dependency issues, compilation errors, and configuration problems.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="font-medium">Performance Issues</strong> - Identify and fix bottlenecks, memory problems, and slow-running code.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="font-medium">Integration Bugs</strong> - Solve issues with APIs, third-party libraries, and service integrations.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="font-medium">Logic Errors</strong> - Fix algorithm issues and unexpected behavior in your application logic.
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-semibold mb-6">Languages & Technologies We Support</h2>
              <p className="text-lg mb-6">
                Our expertise spans a wide range of programming languages and frameworks, including but not limited to:
              </p>
              
              <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                <div className="bg-muted/30 p-4 rounded-lg text-center border border-border/30">
                  <p className="font-medium mb-0">JavaScript/TypeScript</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center border border-border/30">
                  <p className="font-medium mb-0">React/Next.js</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center border border-border/30">
                  <p className="font-medium mb-0">Python</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center border border-border/30">
                  <p className="font-medium mb-0">PHP</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center border border-border/30">
                  <p className="font-medium mb-0">Node.js</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center border border-border/30">
                  <p className="font-medium mb-0">Java/Kotlin</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center border border-border/30">
                  <p className="font-medium mb-0">C#/.NET</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center border border-border/30">
                  <p className="font-medium mb-0">Ruby/Rails</p>
                </div>
              </div>

              <h2 className="text-3xl font-semibold mb-6">Why Choose Our Code Fixing Service?</h2>
              <div className="not-prose space-y-6 mb-16">
                <div className="flex items-start gap-4 bg-muted/30 p-5 rounded-lg border border-border/30">
                  <div className="bg-primary/10 p-2 rounded-full h-fit">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Turnaround Time</h3>
                    <p className="text-muted-foreground">Most issues are resolved within 24-48 hours, with emergency options available for critical bugs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-muted/30 p-5 rounded-lg border border-border/30">
                  <div className="bg-primary/10 p-2 rounded-full h-fit">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Learning Opportunity</h3>
                    <p className="text-muted-foreground">We don&apos;t just fix your code; we explain what went wrong and how to prevent similar issues in the future.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-muted/30 p-5 rounded-lg border border-border/30">
                  <div className="bg-primary/10 p-2 rounded-full h-fit">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Confidentiality</h3>
                    <p className="text-muted-foreground">Your code and business logic remain confidential. We can sign NDAs if required for sensitive projects.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pricing Options */}
            <h2 className="text-3xl font-semibold mb-8 text-center mt-20">Pricing Options</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-background border border-border/50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Quick Fix</h3>
                <p className="text-primary font-semibold text-2xl mb-4">Starting at $75</p>
                <p className="text-muted-foreground mb-6">Ideal for simple bugs that can be resolved quickly.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Simple error resolution</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Basic explanation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>24-48 hour turnaround</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
              
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-8 shadow-md relative">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">POPULAR</div>
                <h3 className="text-xl font-bold mb-2">Standard Fix</h3>
                <p className="text-primary font-semibold text-2xl mb-4">Starting at $150</p>
                <p className="text-muted-foreground mb-6">For more complex bugs requiring deeper investigation.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Complex error resolution</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Detailed explanation & documentation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>24-hour turnaround</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Prevention tips</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
              
              <div className="bg-background border border-border/50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Advanced Fix</h3>
                <p className="text-primary font-semibold text-2xl mb-4">Starting at $300</p>
                <p className="text-muted-foreground mb-6">For critical issues or system-wide problems.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Critical error resolution</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Comprehensive documentation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Priority handling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Code review & optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>1-hour consultation included</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
          <div className="text-center bg-gradient-to-br from-background to-muted/50 rounded-2xl p-10 shadow-lg border border-border/30 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold mb-6">Ready to Fix Your Code?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Stop wasting hours struggling with stubborn bugs. Get expert help and start making progress again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Submit Your Bug <ArrowRight className="ml-1 h-4 w-4" />
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