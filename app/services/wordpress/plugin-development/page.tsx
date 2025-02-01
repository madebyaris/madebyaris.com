import type { Metadata } from 'next'
import Link from 'next/link'
import { Server, Code2, Shield, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WordPress Plugin Development - Aris Setiawan',
  description: 'Custom WordPress plugin development services to extend your website functionality',
}

const features = [
  {
    title: 'Custom Functionality',
    description: 'Develop plugins that add specific features and functionality to your WordPress site.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'API Integration',
    description: 'Connect your WordPress site with external services and APIs through custom plugins.',
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: 'Security First',
    description: 'Implement robust security measures and follow WordPress security best practices.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Data Management',
    description: 'Custom database tables and efficient data handling for your plugin needs.',
    icon: <Database className="w-6 h-6" />,
  },
]

export default function WordPressPluginDevelopmentPage() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              WordPress Plugin Development
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto">
              Custom plugins that extend your WordPress site&apos;s capabilities
            </p>
          </div>

          {/* Introduction */}
          <div className="mt-8 bg-primary/5 rounded-lg p-6 border border-primary/10">
            <p className="text-lg leading-relaxed">
              Our WordPress plugin development service focuses on creating custom, efficient plugins 
              that extend your website&apos;s functionality. Whether you need to add specific features, 
              integrate with external services, or improve your site&apos;s capabilities, we can help.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-6 bg-secondary/5 rounded-lg border border-secondary/10"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-primary">{feature.icon}</div>
                  <h2 className="text-xl font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Development Process */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Plugin Development Process</h2>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">1. Requirements Gathering</h3>
                <p className="text-muted-foreground">Understanding your specific needs and planning the plugin architecture.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">2. Development & Testing</h3>
                <p className="text-muted-foreground">Writing clean, efficient code and thorough testing in various environments.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">3. Security Review</h3>
                <p className="text-muted-foreground">Implementing security best practices and conducting vulnerability assessments.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-2">4. Deployment & Support</h3>
                <p className="text-muted-foreground">Installing the plugin, providing documentation, and ongoing support.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-semibold"
            >
              Discuss Your Plugin Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}