/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/lib/wordpress'
import type { Project } from '@/lib/types'
import { ImageResponse } from 'next/og'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Eton House",
    description: "A comprehensive website redesign for an international education institution, featuring an intuitive parent portal and dynamic content management system.",
    logo: "/images/clients/eton-house.png",
    tags: ["Next.js", "WordPress", "TypeScript"],
    link: "https://www.ehis.sg"
  },
  {
    id: 2,
    title: "Rahardi Creative",
    description: "Digital agency website with portfolio showcase and client management system, built with modern web technologies.",
    logo: "/images/clients/rahardi-creative.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://rahardicreative.com"
  },
  {
    id: 3,
    title: "Picastock",
    description: "High-performance stock photo marketplace with advanced search capabilities and user content management.",
    logo: "/images/clients/picastock.png",
    tags: ["Next.js", "Laravel", "MySQL"],
    link: "https://picastock.com"
  },
  {
    id: 4,
    title: "Canvas Garment",
    description: "E-commerce platform for custom garments with real-time design previews and order management.",
    logo: "/images/clients/canvas-garment.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://canvasgarment.com"
  },
  {
    id: 5,
    title: "Bacakomik",
    description: "Digital comic reading platform with subscription system and content delivery network integration.",
    logo: "/images/clients/bacakomik.png",
    tags: ["Next.js", "GraphQL", "MongoDB"],
    link: "https://bacakomik.co"
  },
  {
    id: 6,
    title: "Mary Jardin",
    description: "Luxury florist e-commerce website with custom order management and delivery tracking system.",
    logo: "/images/clients/maryjardin.png",
    tags: ["WordPress", "WooCommerce", "React"],
    link: "https://maryjardin.com"
  },
  {
    id: 7,
    title: "Ortensia Village",
    description: "Property development website with virtual tours and booking management system.",
    logo: "/images/clients/ortensia-village.png",
    tags: ["Next.js", "Three.js", "Prisma"],
    link: "https://ortensiavillage.com"
  },
  {
    id: 8,
    title: "Learn Islam",
    description: "Educational platform with course management and interactive learning features.",
    logo: "/images/clients/learnislam.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://learnislam.com"
  }
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Client Projects Portfolio",
  "description": "Showcase of enterprise-level web development projects by Aris Setiawan, featuring work for international clients across various industries.",
  "author": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "url": "https://madebyaris.com"
  },
  "itemListElement": projects.map((project, index) => ({
    "@type": "WebSite",
    "position": index + 1,
    "name": project.title,
    "description": project.description,
    "url": project.link
  }))
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
          Client Projects Portfolio
        </h1>
        <p
          style={{
            fontSize: '30px',
            color: '#888888',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Enterprise-Level Web Development Solutions
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              style={{
                width: '150px',
                height: '50px',
                backgroundImage: `url(https://madebyaris.com${project.logo})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )

  return {
    title: 'Client Projects Portfolio | Enterprise Web Development Solutions',
    description: 'Explore our portfolio of enterprise-level web development projects, featuring work for international clients across education, e-commerce, and digital services sectors.',
    keywords: [
      'Web Development Portfolio',
      'Enterprise Solutions',
      'Next.js Projects',
      'React Applications',
      'WordPress Development',
      'E-commerce Solutions',
      'Educational Platforms',
      'Digital Services',
      'Full Stack Development',
      'Client Projects'
    ],
    openGraph: {
      title: 'Client Projects Portfolio | Enterprise Web Development',
      description: 'Showcase of enterprise-level web development projects by Aris Setiawan.',
      type: 'website',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Client Projects Portfolio | Enterprise Web Development',
      description: 'Showcase of enterprise-level web development projects by Aris Setiawan.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/projects'
    }
  }
}

// Add script tag for structured data
export function generateStructuredData() {
  return {
    __html: JSON.stringify(structuredData)
  }
}

export default function ProjectsPage() {
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
              Client Projects Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Explore our showcase of enterprise-level web development solutions, delivering exceptional results for clients worldwide.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {projects.map((project) => (
              <Card key={project.id} className="h-full p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex flex-col gap-4">
                  <div className="h-16 relative">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Looking to build something amazing? Let&apos;s work together!
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
