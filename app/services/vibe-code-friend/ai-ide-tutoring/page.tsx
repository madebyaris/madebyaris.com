import type { Metadata } from 'next'
import { Code, ArrowRight, ArrowUpRight, Terminal, LucideGitPullRequest, Sparkles, BookOpen, Lightbulb, MessageSquare, Zap, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 86400 // Revalidate daily

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
}

const learningTopics = [
  {
    title: 'Effective Prompting',
    description: 'Learn how to craft effective prompts to get the most out of AI coding assistants',
    icon: MessageSquare
  },
  {
    title: 'Workflow Integration',
    description: 'Seamlessly integrate AI tools into your existing development workflow',
    icon: LucideGitPullRequest
  },
  {
    title: 'Code Generation',
    description: 'Generate high-quality code snippets and complete functions with AI assistance',
    icon: Code
  },
  {
    title: 'Documentation Creation',
    description: 'Generate comprehensive documentation for your code with AI help',
    icon: BookOpen
  }
]

const benefits = [
  'Personalized learning path',
  'Hands-on exercises',
  'Real-world examples',
  'Best practices guidance',
  'Workflow optimization',
  'Productivity techniques'
]

const tools = [
  'Cursor IDE',
  'GitHub Copilot',
  'Claude AI',
  'ChatGPT',
  'VS Code AI Extensions',
  'Codeium'
]

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
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://madebyaris.com/services/vibe-code-friend/ai-ide-tutoring",
    },
  }
}

export default function AiIdeTutoringPage() {
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
          <li className="text-zinc-900">AI IDE Tutoring</li>
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
          <Code className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">AI Development</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          AI IDE
          <span className="block gradient-text font-light">Tutoring</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Master AI-powered coding tools like Cursor to supercharge your development workflow. 
          Get personalized guidance and learn how to effectively leverage AI assistance in your daily coding tasks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Schedule a Session</span>
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

      {/* What You'll Learn Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div 
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px'
            }}
          >
            <Lightbulb className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Curriculum</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What You&apos;ll <span className="gradient-text">Learn</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningTopics.map((topic) => (
            <div
              key={topic.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                  <topic.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1">{topic.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* How It Works Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How It <span className="gradient-text">Works</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          <div className="space-y-6">
            <p className="text-zinc-600 leading-relaxed">
              Our AI IDE tutoring sessions are personalized to your specific needs and skill level. We&apos;ll start with an assessment of your current workflow and identify areas where AI tools can provide the most benefit. Then, through hands-on exercises and real-world examples, you&apos;ll learn how to leverage these powerful tools effectively.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Sessions can be conducted remotely via screen sharing, allowing for interactive guidance and immediate feedback. Whether you&apos;re a beginner just starting out with AI tools or an experienced developer looking to optimize your workflow, our tutoring will help you reach the next level.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Benefits & Tools Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefits */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-xl">
                <Sparkles className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">What You Get</h3>
            </div>
            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-sm text-zinc-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-xl">
                <Terminal className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Tools We Cover</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-zinc-100 rounded-full text-sm text-zinc-600 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Why Choose Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Why Choose <span className="gradient-text">Vibe Code Friend</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-semibold text-zinc-900">Personalized Approach</h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Unlike generic tutorials, our tutoring is tailored specifically to your needs, projects, and learning style. We focus on practical applications rather than theoretical concepts, ensuring you can immediately apply what you learn to your actual work.
            </p>
          </div>
          <div className="bg-zinc-50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <Sparkles className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-semibold text-zinc-900">Expert Guidance</h3>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Our expertise with tools like Cursor, GitHub Copilot, and other AI coding assistants means you&apos;re learning from someone who uses these tools daily and understands their strengths and limitations.
            </p>
          </div>
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
            Ready to Level Up Your AI Coding Skills?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Book a session today and start harnessing the full power of AI in your development workflow.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Book a Session</span>
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
