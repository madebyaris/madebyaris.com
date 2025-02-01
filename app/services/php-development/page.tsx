import type { Metadata } from 'next'
import { Code2, Database, Server, Shield, ArrowRight, Wrench } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { Card } from '../../../components/ui/card'

export const metadata: Metadata = {
  title: 'PHP Development Services - Aris Setiawan',
  description: 'Professional PHP development services for custom web applications and solutions',
}

const features = [
  {
    title: 'Custom Web Applications',
    description: 'Develop tailored PHP applications that meet your specific business requirements.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'API Development',
    description: 'Create robust RESTful APIs and web services using modern PHP frameworks.',
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'Database Solutions',
    description: 'Design and implement efficient database architectures for your applications.',
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Security Implementation',
    description: 'Implement secure coding practices and robust authentication systems.',
    icon: <Shield className="w-6 h-6" />,
  },
]

const benefits = [
  'Scalable Solutions',
  'Custom Features',
  'Secure Code',
  'Fast Development',
  'Cost Effective',
  'Easy Maintenance',
  'High Performance',
  'Reliable Systems',
]

const processSteps = [
  {
    title: 'Requirements Analysis',
    description: 'Understanding your business needs and planning the technical architecture.',
  },
  {
    title: 'Development',
    description: 'Writing clean, efficient code following PHP best practices and modern standards.',
  },
  {
    title: 'Testing & Security',
    description: 'Comprehensive testing and security auditing to ensure robust performance.',
  },
  {
    title: 'Deployment & Support',
    description: 'Smooth deployment process and ongoing technical support.',
  },
]

export default function PhpDevelopmentPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-zinc-100/50 dark:from-zinc-900 dark:via-transparent dark:to-zinc-900/50" />
      </div>

      <div className="container relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-12">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 mb-4">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-medium">PHP Expert</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                PHP Development
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                Custom PHP solutions that scale with your business. From web applications to APIs, I create reliable and secure solutions.
              </p>
            </div>

            {/* Introduction */}
            <div className="mt-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                My PHP development service focuses on creating robust, scalable web applications 
                and solutions. Whether you need a custom web application, API integration, or 
                database solution, I have the expertise to deliver high-quality results that meet 
                your business objectives.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 transition-transform hover:scale-110">
                      {feature.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{feature.title}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Development Process */}
            <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Development Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.title}
                    className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 font-semibold">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{step.title}</h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Benefits of PHP Development
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit}
                    className="p-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 text-center text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:scale-105 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-2xl p-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Ready to Start Your PHP Project?
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-8">
                Let&apos;s discuss how I can help you build a robust and scalable PHP solution for your business needs.
              </p>
              <Button size="lg" className="min-w-[200px] group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}