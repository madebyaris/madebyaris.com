import type { Metadata } from 'next'
import { Code2, Database, Server, Shield, ArrowRight, ArrowUpRight, Rocket, Layout, Users, Quote } from 'lucide-react'
import Link from 'next/link'

export const revalidate = 86400 // Revalidate daily

const services = [
  {
    title: 'Custom Web Applications',
    description: 'Develop tailored PHP applications that meet your specific business requirements and scale with your growth.',
    icon: Code2,
    href: '/services/php-development/custom-applications',
    features: ['Modern PHP', 'Scalable Architecture', 'Custom Features', 'High Performance'],
  },
  {
    title: 'API Development',
    description: 'Create robust RESTful APIs and web services using modern PHP frameworks and best practices.',
    icon: Server,
    href: '/services/php-development/api-development',
    features: ['RESTful APIs', 'GraphQL', 'API Security', 'Documentation'],
  },
  {
    title: 'Database Solutions',
    description: 'Design and implement efficient database architectures optimized for your application needs.',
    icon: Database,
    href: '/services/php-development/database-solutions',
    features: ['Database Design', 'Optimization', 'Migration', 'Scaling'],
  },
  {
    title: 'Legacy Modernization',
    description: 'Upgrade and modernize legacy PHP applications to use current best practices and technologies.',
    icon: Rocket,
    href: '/services/php-development/modernization',
    features: ['Code Refactoring', 'Security Updates', 'Performance Boost', 'Modern Stack'],
  },
]

const benefits = [
  { title: 'Modern Development', description: 'Using latest PHP versions and practices', icon: Code2 },
  { title: 'Scalable Solutions', description: 'Applications that grow with you', icon: Layout },
  { title: 'Performance Focus', description: 'Optimized for speed and efficiency', icon: Rocket },
  { title: 'Security First', description: 'Following security best practices', icon: Shield },
]

const testimonials = [
  {
    quote: "The custom PHP application developed for our business has significantly improved our operational efficiency. The code quality and performance are exceptional.",
    author: "Technical Director",
    company: "Enterprise Solutions Co."
  },
  {
    quote: "Our legacy PHP system was modernized and optimized, resulting in faster performance and better security. The process was smooth and professional.",
    author: "CTO",
    company: "E-commerce Platform"
  }
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://madebyaris.com/services/php-development/#webpage",
  "name": "PHP Development Services | Custom Applications & APIs",
  "description": "Professional PHP development services for custom web applications, APIs, and enterprise solutions. Expert in modern PHP frameworks and best practices.",
  "url": "https://madebyaris.com/services/php-development"
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PHP Development Services | Custom Applications & APIs',
    description: 'Professional PHP development services for custom web applications, APIs, and enterprise solutions. Expert in modern PHP frameworks and best practices.',
    keywords: [
      'PHP Development',
      'Custom PHP Applications',
      'PHP API Development',
      'Database Solutions',
      'Enterprise PHP',
      'Modern PHP Development',
      'PHP Expert',
      'PHP Frameworks',
      'Legacy Code Modernization',
      'PHP Consulting'
    ],
    openGraph: {
      title: 'PHP Development Services | Custom Solutions',
      description: 'Professional PHP development services for modern web applications.',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PHP Development Services | Custom Solutions',
      description: 'Professional PHP development services for modern web applications.',
    },
    alternates: {
      canonical: 'https://madebyaris.com/services/php-development'
    }
  }
}

export default function PhpDevelopmentPage() {
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
          <Server className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">PHP Expert</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Professional
          <span className="block gradient-text font-light">PHP Development</span>
          <span className="block">Services</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Custom PHP applications, APIs, and enterprise solutions built with modern frameworks 
          and best practices for scalable, secure, and high-performance results.
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
            <Code2 className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Services Offered</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            PHP Development <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            Comprehensive PHP services for modern web applications and enterprise systems
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
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Why Choose My <span className="gradient-text">PHP Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="bg-zinc-50 rounded-2xl p-5 text-center"
            >
              <div className="p-3 bg-white rounded-xl w-fit mx-auto mb-3 shadow-sm">
                <benefit.icon className="w-5 h-5 text-zinc-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{benefit.title}</h3>
              <p className="text-xs text-zinc-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Testimonials Section */}
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
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Client Feedback</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm"
            >
              <Quote className="w-8 h-8 text-orange-200 mb-4" />
              <p className="text-zinc-600 italic mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-zinc-900 text-sm">{testimonial.author}</p>
                <p className="text-xs text-zinc-500">{testimonial.company}</p>
              </div>
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
            Development <span className="gradient-text">Process</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: "Analysis", desc: "Understanding your requirements" },
            { step: 2, title: "Architecture", desc: "Designing scalable solutions" },
            { step: 3, title: "Development", desc: "Building with clean code" },
            { step: 4, title: "Deployment", desc: "Launch and ongoing support" },
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
            Ready to Build Your PHP Application?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Let&apos;s discuss your PHP project requirements and create a solution that delivers exceptional performance and scalability.
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
