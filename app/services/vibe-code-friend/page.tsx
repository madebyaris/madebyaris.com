import type { Metadata } from 'next'
import { Bot, ArrowRight, ArrowUpRight, Zap, Trophy, Code2, MessageSquare, Clock, Shield, Users, Target, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 86400 // Revalidate daily

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/vibe-code-friend/#webpage",
  "name": "Vibe Code Friend - AI Coding Assistance & Mentorship | Made by Aris",
  "description": "Get expert help with AI tools like Cursor, code fixes, server setup, and infrastructure architecture. Elevate your development workflow with personalized guidance.",
  "url": "https://madebyaris.com/services/vibe-code-friend"
}

// Key Features Data
const features = [
  {
    title: "AI-Powered Assistance",
    description: "Leverage cutting-edge AI tools like Cursor, GitHub Copilot, and Claude to accelerate your development workflow.",
    icon: Sparkles
  },
  {
    title: "Real-Time Problem Solving",
    description: "Get instant help with debugging, code optimization, and architectural decisions.",
    icon: Target
  },
  {
    title: "Personalized Learning",
    description: "Tailored guidance based on your skill level, project requirements, and learning goals.",
    icon: Users
  },
  {
    title: "Infrastructure Expertise",
    description: "From server setup to cloud architecture, get expert guidance on building scalable solutions.",
    icon: Shield
  }
]

// Services Data
const services = [
  {
    title: 'AI IDE Tutoring',
    description: 'Master AI-powered IDEs like Cursor with personalized tutoring and hands-on guidance.',
    icon: Code2,
    href: '/services/vibe-code-friend/ai-ide-tutoring',
    features: ['Cursor Mastery', 'Prompt Engineering', 'Workflow Integration', 'Best Practices'],
  },
  {
    title: 'Code Fixing',
    description: 'Quick and efficient debugging and error resolution with clear explanations.',
    icon: Zap,
    href: '/services/vibe-code-friend/code-fixing',
    features: ['Bug Resolution', 'Error Diagnosis', 'Performance Fixes', 'Code Review'],
  },
]

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
]

// Technologies Data
const technologies = [
  "Cursor IDE", "GitHub Copilot", "Claude", "ChatGPT", "Next.js", "React", "TypeScript", 
  "Node.js", "Python", "Docker", "AWS", "Vercel", "PostgreSQL", "MongoDB"
]

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
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://madebyaris.com/services/vibe-code-friend",
    },
    twitter: {
      card: "summary_large_image",
      title: "Vibe Code Friend - AI Coding Assistance & Mentorship",
      description: "Get expert help with AI tools like Cursor, code fixes, server setup, and infrastructure architecture.",
    },
  }
}

export default function VibeCodeFriendPage() {
  return (
    <>
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="text-center pt-8 pb-16">
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
          <Bot className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">AI Development Partner</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Vibe Code
          <span className="block gradient-text font-light">Friend</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Your AI-powered coding companion. We help developers master AI tools like Cursor, 
          fix stubborn bugs, set up reliable servers, and architect scalable infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Get Started</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link 
            href="/services"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
              '--border-radius-before': '9999px'
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">View Services</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Key Features Section */}
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
            <Zap className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Key Features</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What Makes Vibe Code Friend <span className="gradient-text">Special</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <feature.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Services Section */}
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
            <Bot className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Services</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            AI-Powered Development <span className="gradient-text">Assistance</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            Comprehensive coding support to accelerate your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <service.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span 
                      key={feature} 
                      className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Benefits Section */}
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
            <Trophy className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Advantages</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Benefits of AI-Assisted <span className="gradient-text">Development</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl text-center text-sm font-medium text-zinc-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How It <span className="gradient-text">Works</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: "Consultation", desc: "Discuss your challenges and goals" },
            { step: 2, title: "Setup & Training", desc: "Configure AI tools and learn best practices" },
            { step: 3, title: "Active Support", desc: "Real-time assistance during development" },
            { step: 4, title: "Optimization", desc: "Continuous improvement of your workflow" },
          ].map((item) => (
            <div 
              key={item.step}
              className="bg-zinc-50 rounded-2xl p-5 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Technologies Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
          <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
            {technologies.map((tech) => (
              <div 
                key={tech}
                className="p-3 bg-zinc-50 rounded-xl text-center text-xs font-medium text-zinc-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {tech}
              </div>
            ))}
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
            Ready to Level Up Your Coding Experience?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Whether you&apos;re looking to master AI tools, fix stubborn bugs, or architect your next big project, I&apos;m here to help.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
