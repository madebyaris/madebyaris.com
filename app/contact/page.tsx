import type { Metadata } from 'next'
import { ImageResponse } from 'next/og'
import { Mail, MapPin, Clock, ArrowRight, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { techLogos } from '@/components/ui/tech-logos'
import { LogoCarousel } from '@/components/ui/logo-carousel'

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Aris Setiawan",
  "description": "Get in touch with Aris Setiawan for web development projects and consultations.",
  "url": "https://madebyaris.com/contact",
  "mainEntity": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "Full Stack Developer",
    "url": "https://madebyaris.com"
  }
}

// Generate OG Image
export async function generateMetadata(): Promise<Metadata> {
  const ogImage = new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Let&apos;s Build Something Amazing
        </h1>
        <p
          style={{
            fontSize: '30px',
            color: '#888888',
            marginBottom: '40px',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Enterprise Web Development Solutions & Technical Consultations
        </p>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#0077B5', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            LinkedIn
          </div>
          <div style={{ background: '#333333', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            GitHub
          </div>
          <div style={{ background: '#14a800', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Upwork
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )

  return {
    title: 'Contact Aris Setiawan | Enterprise Web Development Solutions',
    description: 'Get in touch for enterprise-level web development solutions, technical consultations, or project collaborations. Specializing in Next.js, React, and WordPress.',
    keywords: [
      'Contact Developer',
      'Hire Web Developer',
      'Enterprise Solutions',
      'Technical Consultation',
      'Next.js Development',
      'React Development',
      'WordPress Development',
      'Full Stack Developer',
      'Web Architecture',
      'Project Collaboration'
    ],
    openGraph: {
      title: 'Contact Aris Setiawan | Enterprise Web Development',
      description: 'Let\'s collaborate on your next web development project.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Aris Setiawan | Enterprise Web Development',
      description: 'Let\'s collaborate on your next web development project.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/contact'
    }
  }
}

export default function ContactPage() {
  // Function to generate structured data
  function generateStructuredData() {
    return {
      __html: JSON.stringify(structuredData)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredData()}
      />
      <main className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-4">
              Let&apos;s Build Something Amazing
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Whether you need enterprise-level solutions or technical consultation, I&apos;m here to help turn your vision into reality.
            </p>
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Contact Form */}
            <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
              <ContactForm />
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-semibold">Email</h2>
                  <p className="text-muted-foreground">
                    <Link href="mailto:arissetia.m@gmail.com" className="hover:text-primary">
                      arissetia.m@gmail.com
                    </Link>
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-semibold">Location</h2>
                  <p className="text-muted-foreground">Sidoarjo, Indonesia</p>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-semibold">Availability</h2>
                  <p className="text-muted-foreground">Mon - Fri, 9:00 - 17:00 WIB</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Professional Profiles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">Professional Profiles</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://www.linkedin.com/in/arissetia/" target="_blank">
                <Button className="bg-[#0077B5] hover:bg-[#0077B5]/90">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/arissetyawan" target="_blank">
                <Button className="bg-[#666666] hover:bg-[#888888] dark:bg-[#999999] dark:hover:bg-[#AAAAAA]">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" target="_blank">
                <Button className="bg-[#14a800] hover:bg-[#14a800]/90">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Upwork
                </Button>
              </Link>
            </div>
          </div>

          {/* Client List */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Trusted By</h2>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100/80 to-transparent dark:via-zinc-900/10 backdrop-blur-xl" />
              <div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full blur-3xl" />
              <div className="relative">
                <LogoCarousel 
                  columnCount={3}
                  logos={techLogos}
                />
              </div>
            </div>
          </div>

          {/* Project Types */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Types of Projects I Take On</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Enterprise Web Applications</h3>
                <p className="text-muted-foreground">Scalable solutions with modern tech stack and robust architecture</p>
              </Card>
              <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">E-commerce Solutions</h3>
                <p className="text-muted-foreground">Custom online stores with seamless user experience and secure transactions</p>
              </Card>
              <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Technical Consultation</h3>
                <p className="text-muted-foreground">Expert advice on architecture, performance optimization, and best practices</p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-primary/5 border-primary/10">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
                Fill out the contact form above or send me an email directly. I&apos;ll get back to you within 24 hours to discuss how we can work together.
              </p>
              <Link href="mailto:arissetia.m@gmail.com">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Email <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
