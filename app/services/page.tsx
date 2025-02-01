import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Layout, Globe, FileCode, Server, ArrowRight, Rocket, Shield, Zap, Sparkles } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card'
import { AuroraBackground } from '../../components/ui/aurora-background'

export const metadata: Metadata = {
  title: 'Web Development Services - Aris Setiawan',
  description: 'Experienced web developer specializing in Next.js, WordPress, and PHP development. Let&apos;s build something amazing together.',
}

const services = [
  {
    title: 'Next.js Development',
    description: 'I create modern, fast-loading web applications using Next.js and React. Your project will benefit from optimal performance, SEO, and exceptional user experience.',
    icon: <Code2 className="w-8 h-8" />,
    href: '/services/nextjs-development',
    features: ['Server-Side Rendering', 'Static Site Generation', 'API Routes', 'Dynamic Imports'],
    badge: 'Specialty',
  },
  {
    title: 'WordPress Development',
    description: 'As an experienced WordPress developer, I build custom solutions that perfectly match your needs - from themes to complete headless implementations.',
    icon: <Globe className="w-8 h-8" />,
    href: '/services/wordpress',
    features: ['Custom Themes', 'Plugin Development', 'Headless CMS', 'Performance Optimization'],
    badge: 'Expert',
  },
  {
    title: 'PHP Development',
    description: 'I develop custom PHP solutions that scale with your business. My focus is on creating reliable, secure, and maintainable applications.',
    icon: <FileCode className="w-8 h-8" />,
    href: '/services/php-development',
    features: ['Laravel', 'API Development', 'Database Design', 'Security'],
    badge: 'Full-Stack',
  },
]

const wordPressServices = [
  {
    title: 'Custom Theme Development',
    description: 'I create pixel-perfect WordPress themes that capture your unique style and meet your specific requirements.',
    icon: <Layout className="w-6 h-6" />,
    href: '/services/wordpress-development/theme-development',
    benefits: ['Unique Design', 'Mobile-First', 'SEO Optimized', 'Fast Loading'],
  },
  {
    title: 'Plugin Development',
    description: 'Need specific functionality? I develop custom WordPress plugins that add exactly the features you need.',
    icon: <Server className="w-6 h-6" />,
    href: '/services/wordpress-development/plugin-development',
    benefits: ['Custom Features', 'Integration Ready', 'Scalable', 'Well-Maintained'],
  },
  {
    title: 'Headless WordPress',
    description: 'I specialize in building modern headless WordPress sites with Next.js frontends, giving you the best of both worlds.',
    icon: <Rocket className="w-6 h-6" />,
    href: '/services/wordpress-development/headless-development',
    benefits: ['Modern Stack', 'Better Performance', 'API-Driven', 'Flexible'],
  },
  {
    title: 'WordPress Optimization',
    description: 'I&apos;ll optimize your WordPress site for peak performance and security, ensuring your visitors have the best experience.',
    icon: <Zap className="w-6 h-6" />,
    href: '/services/wordpress-development/optimization',
    benefits: ['Speed Optimization', 'Security Hardening', 'CDN Setup', 'Caching'],
  },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Background */}
      <AuroraBackground className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute inset-0" />
      </AuroraBackground>
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/90 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background/90" />
      </div>
      
      <div className="container relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-12">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Full-Stack Developer</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Let&apos;s Build Something Amazing Together
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                Hi, I&apos;m Aris. I combine technical expertise with creative problem-solving to build exceptional web experiences. Let&apos;s turn your ideas into reality.
              </p>
              <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                <Button size="lg" className="group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="group border-zinc-200 dark:border-zinc-800">
                  See My Work
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Button>
              </div>
            </div>

            {/* Main Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {services.map((service, index) => (
                <Link 
                  key={service.title} 
                  href={service.href} 
                  className="group animate-in fade-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="mb-4">
                        {service.badge && (
                          <Badge variant="secondary" className="mb-2 transition-colors bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:text-zinc-50 dark:group-hover:text-zinc-900">
                            {service.badge}
                          </Badge>
                        )}
                        <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 mb-4 transition-transform group-hover:scale-110 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:text-zinc-50 dark:group-hover:text-zinc-900">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2 transition-colors text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-900 dark:group-hover:text-zinc-50">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300">
                            <Shield className="w-4 h-4 mr-2 text-zinc-900 dark:text-zinc-50 transition-transform group-hover:scale-110" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* WordPress Services */}
            <div className="mt-24">
              <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 mb-4">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">WordPress Specialist</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                  WordPress Development Services
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[700px] mx-auto">
                  With years of WordPress experience, I offer comprehensive development services to help you get the most out of your WordPress site.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {wordPressServices.map((service, index) => (
                  <Link 
                    key={service.title} 
                    href={service.href}
                    className="group animate-in fade-in slide-in-from-bottom duration-1000"
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                      <CardHeader>
                        <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-50 mb-4 transition-transform group-hover:scale-110 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:text-zinc-50 dark:group-hover:text-zinc-900">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl mb-2 transition-colors text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-900 dark:group-hover:text-zinc-50">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-zinc-600 dark:text-zinc-400">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {service.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300">
                              <Shield className="w-4 h-4 mr-2 text-zinc-900 dark:text-zinc-50 transition-transform group-hover:scale-110" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full border-zinc-200 dark:border-zinc-800 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-50 group-hover:text-zinc-50 dark:group-hover:text-zinc-900 transition-all duration-300">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-2xl p-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300">
                Have a Project in Mind?
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto mb-8">
                I&apos;d love to hear about your project and discuss how I can help bring your vision to life. Let&apos;s chat!
              </p>
              <Button size="lg" className="min-w-[200px] group bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all duration-300">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}