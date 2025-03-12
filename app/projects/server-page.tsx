import type { Metadata } from 'next'
import { getProjects } from '@/lib/wordpress'
import type { Project } from '@/app/types/wordpress'
import ProjectsPage from './client-page'

export const revalidate = 86400 // Revalidate daily

// Generate Metadata and Structured Data
export async function generateMetadata(): Promise<Metadata> {
  const projects = await getProjects({ per_page: 100 })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://madebyaris.com/projects/#webpage",
    "name": "Projects | Made by Aris",
    "description": "Explore my portfolio of web development projects, featuring Next.js, WordPress, and full-stack solutions. See real examples of my work and expertise.",
    "url": "https://madebyaris.com/projects",
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
            "@id": "https://madebyaris.com/projects",
            "name": "Projects"
          }
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project: Project, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebSite",
          "name": project.title.rendered,
          "description": project.excerpt?.rendered 
            ? project.excerpt.rendered.replace(/<[^>]*>/g, '') 
            : project.acf.description || "Project by Aris Setiawan",
          "url": `https://madebyaris.com/projects/${project.slug}`,
          "datePublished": project.date,
          "dateModified": project.modified,
          "author": {
            "@type": "Person",
            "@id": "https://madebyaris.com/#person",
            "name": "Aris Setiawan",
            "jobTitle": "Full-Stack Developer",
            "url": "https://madebyaris.com"
          }
        }
      }))
    },
    "about": {
      "@type": "Thing",
      "name": "Web Development Portfolio",
      "description": "Collection of web development projects showcasing expertise in Next.js, WordPress, and full-stack development."
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://madebyaris.com/#organization",
      "name": "MadeByAris",
      "url": "https://madebyaris.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://madebyaris.com/logo.png",
        "width": "180",
        "height": "180"
      }
    }
  }

  return {
    title: 'Projects | Made by Aris',
    description: 'Explore my portfolio of web development projects, featuring Next.js, WordPress, and full-stack solutions. See real examples of my work and expertise.',
    keywords: [
      'web development projects',
      'portfolio',
      'Next.js projects',
      'WordPress projects',
      'full-stack development',
      'case studies',
      'web applications',
      'client projects',
    ],
    alternates: {
      canonical: 'https://madebyaris.com/projects'
    },
    openGraph: {
      title: 'Projects | Made by Aris',
      description: 'Explore my portfolio of web development projects, featuring Next.js, WordPress, and full-stack solutions.',
      url: 'https://madebyaris.com/projects',
      siteName: 'Made by Aris',
      locale: 'en_US',
      type: 'website',
    },
    other: {
      structuredData: JSON.stringify(structuredData),
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    },
  }
}

// Server Component
export default async function ProjectsServerPage() {
  const projects = await getProjects({ per_page: 100 })
  return <ProjectsPage projects={projects} />
}