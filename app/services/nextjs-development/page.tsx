import type { Metadata } from 'next'
import { Code2, ArrowRight, ArrowUpRight, Rocket, Globe, Zap, Search, Building, Users, Trophy } from 'lucide-react'
import Link from 'next/link'

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/nextjs-development/#webpage",
  "name": "Next.js Development | React & TypeScript Solutions",
  "description": "Crafting high-performance web applications with Next.js, React, and TypeScript.",
  "url": "https://madebyaris.com/services/nextjs-development"
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Next.js Development Services | Modern Web Applications',
    description: 'Expert Next.js development services for modern web applications. Full-stack solutions with React, TypeScript, and enterprise-grade architecture.',
    keywords: [
      'Next.js Development',
      'React Development',
      'TypeScript Development',
      'Full Stack Development',
      'Enterprise Web Apps',
      'Modern Web Development',
      'Next.js Expert'
    ],
    openGraph: {
      title: 'Next.js Development Services | Modern Web Applications',
      description: 'Expert Next.js development services for modern web applications.',
      type: 'website',
      locale: 'en_US',
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/nextjs-development'
    }
  }
}

const features = [
  {
    title: 'Modern Development',
    description: 'Building fast, modern web applications using the latest Next.js features.',
    icon: Code2,
  },
  {
    title: 'Performance Focus',
    description: 'Optimized for speed with server-side rendering and static generation.',
    icon: Rocket,
  },
  {
    title: 'Global Deployment',
    description: 'Seamless deployment to edge networks for optimal performance.',
    icon: Globe,
  },
  {
    title: 'API Integration',
    description: 'Building robust API routes and integrating with external services.',
    icon: Zap,
  },
]

const benefits = [
  'Fast Loading',
  'SEO Optimized',
  'Type Safe',
  'Modern Stack',
  'Edge Ready',
  'API Routes',
  'SSR Support',
  'Easy Scaling',
]

const processSteps = [
  { title: 'Requirements Analysis', description: 'Understanding your needs and planning architecture.' },
  { title: 'Development', description: 'Building with clean, efficient, maintainable code.' },
  { title: 'Testing & Optimization', description: 'Comprehensive testing and performance tuning.' },
  { title: 'Deployment & Support', description: 'Setting up CI/CD and ongoing maintenance.' },
]

const specializedServices = [
  {
    title: 'Vercel Deployment',
    description: 'Expert Vercel deployment with edge functions, analytics, and enterprise infrastructure.',
    icon: Rocket,
    href: '/services/nextjs-development/vercel'
  },
  {
    title: 'Next.js Indonesia',
    description: 'Specialized Next.js services for the Indonesian market with local support.',
    icon: Globe,
    href: '/services/nextjs-development/nextjs-indonesia'
  },
  {
    title: 'Next.js SEO Services',
    description: 'Comprehensive SEO optimization for Next.js with SSR and metadata optimization.',
    icon: Search,
    href: '/services/nextjs-development/nextjs-seo'
  },
  {
    title: 'Agency Services Indonesia',
    description: 'Full-service Next.js agency for Indonesian enterprises from planning to deployment.',
    icon: Building,
    href: '/services/nextjs-development/agency-indonesia'
  }
]

export default function NextjsDevelopmentPage() {
  return (
    <>
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
          <Code2 className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Next.js Expert</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Next.js
          <span className="block gradient-text font-light">Development</span>
          <span className="block">Services</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Modern web applications built with Next.js. Optimized for performance, 
          SEO, and exceptional user experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link 
            href="/contact"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link 
            href="/projects"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
              '--border-radius-before': '9999px'
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">View Portfolio</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

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
            What Makes Next.js <span className="gradient-text">Special</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-zinc-200/60 shadow-sm hover:shadow-lg transition-all group"
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

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
            Benefits of Next.js <span className="gradient-text">Development</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-zinc-200/60 text-center text-sm font-medium text-zinc-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Development <span className="gradient-text">Process</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {processSteps.map((step, index) => (
            <div 
              key={step.title}
              className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200/60 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{step.title}</h3>
              <p className="text-sm text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Technologies Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'tRPC', 'GraphQL', 'REST API', 'MongoDB', 'PostgreSQL', 'Vercel'].map((tech) => (
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

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Specialized Services */}
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
            <Building className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Specialized Services</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Tailored <span className="gradient-text">Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specializedServices.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4">
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* FAQ Section */}
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
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              question: "What is Next.js and why should I use it?",
              answer: "Next.js is a React framework that enables server-side rendering, static generation, and performance optimizations. It's ideal for SEO, fast loading, and modern development."
            },
            {
              question: "How long does it take to develop a Next.js application?",
              answer: "Most small to medium applications take 4-12 weeks. Enterprise applications may take longer depending on complexity and integrations."
            },
            {
              question: "Do you work with existing codebases?",
              answer: "Yes! I work with both new projects and existing codebases, including migrations from other frameworks to Next.js."
            },
            {
              question: "What makes your services different?",
              answer: "I combine technical expertise with business focus, prioritizing performance, maintainability, and user experience while meeting your specific goals."
            }
          ].map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-zinc-200/60"
            >
              <h3 className="font-semibold text-zinc-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Ready to Build Your Next.js Project?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Let&apos;s discuss how Next.js can help you build a faster, more efficient web application.
          </p>

          <Link 
            href="/contact"
            className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
