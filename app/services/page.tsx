import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Layout, Globe, FileCode, Server, ArrowRight, Rocket, Shield, Zap } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card'

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
    <div className="relative">
      {/* Hero Section with Background Pattern */}

      
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-12">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">
                Full-Stack Developer
              </Badge>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50 mb-6">
                Let&apos;s Build Something Amazing Together
              </h1>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto mb-8">
                Hi, I&apos;m Aris. I combine technical expertise with creative problem-solving to build exceptional web experiences. Let&apos;s turn your ideas into reality.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  See My Work
                </Button>
              </div>
            </div>

            {/* Main Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col">
                    <CardHeader>
                      <div className="mb-4">
                        {service.badge && (
                          <Badge variant="secondary" className="mb-2">
                            {service.badge}
                          </Badge>
                        )}
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-muted-foreground">
                            <Shield className="w-4 h-4 mr-2 text-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button className="w-full group-hover:bg-primary/90">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* WordPress Services */}
            <div className="mt-24">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">
                  WordPress Specialist
                </Badge>
                <h2 className="text-3xl font-bold mb-4">WordPress Development Services</h2>
                <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                  With years of WordPress experience, I offer comprehensive development services to help you get the most out of your WordPress site.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {wordPressServices.map((service) => (
                  <Link key={service.title} href={service.href}>
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col">
                      <CardHeader>
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-primary mb-4">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {service.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center text-sm text-muted-foreground">
                              <Shield className="w-4 h-4 mr-2 text-primary" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                        <Button variant="secondary" className="w-full group-hover:bg-secondary/90">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center bg-primary/5 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto mb-8">
                I&apos;d love to hear about your project and discuss how I can help bring your vision to life. Let&apos;s chat!
              </p>
              <Button size="lg" className="min-w-[200px]">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}