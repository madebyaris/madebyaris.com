import type { Metadata } from 'next'
import { Wrench, ArrowRight, ArrowUpRight, CheckCircle2, AlertCircle, Zap, Shield, Clock, FileCode } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 86400 // Revalidate daily

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
}

const process = [
  {
    title: 'Submit Your Issue',
    description: 'Share your code and explain the error you\'re experiencing. More context helps us diagnose faster.',
    icon: AlertCircle
  },
  {
    title: 'Expert Analysis',
    description: 'We analyze your code, identify the root cause of the issue, and develop an efficient solution.',
    icon: Wrench
  },
  {
    title: 'Solution Delivery',
    description: 'Receive a fixed version of your code with clear explanations of what went wrong and how it was resolved.',
    icon: CheckCircle2
  }
]

const issuesWeSolve = [
  { title: 'Runtime Errors', description: 'From null pointer exceptions to memory leaks, we diagnose and fix runtime crashes.' },
  { title: 'Build Failures', description: 'Resolve dependency issues, compilation errors, and configuration problems.' },
  { title: 'Performance Issues', description: 'Identify and fix bottlenecks, memory problems, and slow-running code.' },
  { title: 'Integration Bugs', description: 'Solve issues with APIs, third-party libraries, and service integrations.' },
  { title: 'Logic Errors', description: 'Fix algorithm issues and unexpected behavior in your application logic.' }
]

const technologies = [
  'JavaScript/TypeScript', 'React/Next.js', 'Python', 'PHP', 'Node.js', 'Java/Kotlin', 'C#/.NET', 'Ruby/Rails'
]

const pricingPlans = [
  {
    name: 'Quick Fix',
    price: '$75',
    description: 'Ideal for simple bugs that can be resolved quickly.',
    features: ['Simple error resolution', 'Basic explanation', '24-48 hour turnaround'],
    popular: false
  },
  {
    name: 'Standard Fix',
    price: '$150',
    description: 'For more complex bugs requiring deeper investigation.',
    features: ['Complex error resolution', 'Detailed explanation & documentation', '24-hour turnaround', 'Prevention tips'],
    popular: true
  },
  {
    name: 'Advanced Fix',
    price: '$300',
    description: 'For critical issues or system-wide problems.',
    features: ['Critical error resolution', 'Comprehensive documentation', 'Priority handling', 'Code review & optimization', '1-hour consultation included'],
    popular: false
  }
]

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
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://madebyaris.com/services/vibe-code-friend/code-fixing",
    },
    keywords: ["code debugging", "error fixing", "bug resolution", "code errors", "programming help", "developer assistance", "technical troubleshooting", "coding bugs", "software errors", "code issues"],
  }
}

export default function CodeFixingPage() {
  return (
    <>
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/vibe-code-friend" className="hover:text-orange-500 transition-colors">Vibe Code Friend</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Code Fixing</li>
        </ol>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        {/* Badge */}
        <div 
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={{
            position: 'relative',
            // @ts-expect-error CSS custom properties
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
            '--border-radius-before': '9999px'
          }}
        >
          <Wrench className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Bug Resolution</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Code
          <span className="block gradient-text font-light">Fixing</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Stuck on a stubborn bug or error? Get expert help to diagnose, fix, and prevent coding problems 
          with clear explanations and efficient solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Fix My Code</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link 
            href="/services/vibe-code-friend"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
              '--border-radius-before': '9999px'
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Explore Other Services</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* How It Works Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How Our Service <span className="gradient-text">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {process.map((step, index) => (
            <div
              key={step.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group relative"
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold text-sm">
                {index + 1}
              </div>
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <step.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Common Issues Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Common Issues <span className="gradient-text">We Solve</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {issuesWeSolve.map((issue) => (
              <div key={issue.title} className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{issue.title}</h3>
                  <p className="text-sm text-zinc-500">{issue.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Technologies Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Languages & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto">
            Our expertise spans a wide range of programming languages and frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {technologies.map((tech) => (
            <div 
              key={tech}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl text-center text-sm font-medium text-zinc-700 hover:bg-orange-50 hover:text-orange-600 transition-colors shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Why Choose Our <span className="gradient-text">Service</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <Clock className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-semibold text-zinc-900">Fast Turnaround</h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Most issues are resolved within 24-48 hours, with emergency options available for critical bugs.
            </p>
          </div>
          <div className="bg-zinc-50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <FileCode className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-semibold text-zinc-900">Learning Opportunity</h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              We don&apos;t just fix your code; we explain what went wrong and how to prevent similar issues in the future.
            </p>
          </div>
          <div className="bg-zinc-50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <Shield className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-semibold text-zinc-900">Confidentiality</h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Your code and business logic remain confidential. We can sign NDAs if required for sensitive projects.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Pricing Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Pricing <span className="gradient-text">Options</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`rounded-2xl p-6 shadow-sm transition-all hover:shadow-lg ${
                plan.popular 
                  ? 'bg-zinc-900 text-white relative' 
                  : 'bg-white/80 backdrop-blur-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 px-2 py-1 bg-orange-500 rounded-full text-[10px] font-bold uppercase">
                  Popular
                </div>
              )}
              <h3 className={`text-lg font-semibold mb-1 ${plan.popular ? 'text-white' : 'text-zinc-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-orange-400' : 'gradient-text'}`}>
                {plan.price}
              </p>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {plan.description}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.popular ? 'text-orange-400' : 'text-orange-500'}`} />
                    <span className={plan.popular ? 'text-zinc-300' : 'text-zinc-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className={`block w-full text-center py-2.5 rounded-full text-sm font-medium transition-all ${
                  plan.popular 
                    ? 'bg-white text-zinc-900 hover:bg-zinc-100' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Ready to Fix Your Code?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Stop wasting hours struggling with stubborn bugs. Get expert help and start making progress again.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Submit Your Bug</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services/vibe-code-friend"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Explore Other Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
