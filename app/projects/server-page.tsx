// This is a Server Component
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Import the client component from the same directory
const ClientProjectsPage = dynamic(() => import('./client-page'), {
  ssr: true,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading projects...</div>
})

// Projects data (shared between server and client)
export const projects = [
  {
    id: 1,
    title: "Eton House",
    description: "A comprehensive website redesign for an international education institution, featuring an intuitive parent portal and dynamic content management system.",
    logo: "/images/clients/eton-house.png",
    tags: ["Next.js", "WordPress", "TypeScript"],
    link: "https://www.etonhouse.edu.sg/",
    category: "Education"
  },
  {
    id: 2,
    title: "Rahardi Creative",
    description: "Digital agency website with portfolio showcase and client management system, built with modern web technologies.",
    logo: "/images/clients/rahardi-creative.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://rahardicreative.com",
    category: "Agency"
  },
  {
    id: 3,
    title: "Picastock",
    description: "High-performance stock photo marketplace with advanced search capabilities and user content management.",
    logo: "/images/clients/picastock.png",
    tags: ["Next.js", "Laravel", "MySQL"],
    link: "https://picastock.com",
    category: "Marketplace"
  },
  {
    id: 4,
    title: "Canvas Garment",
    description: "E-commerce platform for custom garments with real-time design previews and order management.",
    logo: "/images/clients/canvas-garment.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://canvasgarment.com",
    category: "E-commerce"
  },
  {
    id: 5,
    title: "Bacakomik",
    description: "Digital comic reading platform with subscription system and content delivery network integration.",
    logo: "/images/clients/bacakomik.png",
    tags: ["Next.js", "GraphQL", "MongoDB"],
    link: "https://bacakomik.co",
    category: "Entertainment"
  },
  {
    id: 6,
    title: "Mary Jardin",
    description: "Luxury florist e-commerce website with custom order management and delivery tracking system.",
    logo: "/images/clients/maryjardin.png",
    tags: ["WordPress", "WooCommerce", "React"],
    link: "https://maryjardin.com",
    category: "E-commerce"
  },
  {
    id: 7,
    title: "Ortensia Village",
    description: "Property development website with virtual tours and booking management system.",
    logo: "/images/clients/ortensia-village.png",
    tags: ["Next.js", "Three.js", "Prisma"],
    link: "https://ortensiavillage.com",
    category: "Real Estate"
  },
  {
    id: 8,
    title: "Learn Islam",
    description: "Educational platform with course management and interactive learning features.",
    logo: "/images/clients/learnislam.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://learnislam.sg",
    category: "Education"
  }
]

// Structured Data
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Web Development Projects - Aris Setiawan",
  "description": "Portfolio of web development projects showcasing expertise in Next.js, React, and WordPress.",
  "url": "https://madebyaris.com/projects",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": project.link,
        "image": `https://madebyaris.com${project.logo}`,
        "author": {
          "@type": "Person",
          "name": "Aris Setiawan",
          "jobTitle": "Senior Full Stack Developer",
          "url": "https://madebyaris.com"
        },
        "keywords": project.tags.join(", "),
        "genre": "Web Development",
        "datePublished": "2024",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "CreativeWorkSeries",
          "name": "Enterprise Web Development Portfolio",
          "url": "https://madebyaris.com/projects"
        }
      }
    })),
    "numberOfItems": projects.length
  },
  "creator": {
    "@type": "Person",
    "name": "Aris Setiawan",
    "jobTitle": "Senior Full Stack Developer",
    "url": "https://madebyaris.com"
  },
  "about": {
    "@type": "Thing",
    "name": "Web Development Portfolio",
    "description": "Collection of enterprise-level web development projects showcasing expertise in Next.js, React, WordPress, and modern web technologies."
  }
}

// Metadata generation (server component) - simplified to avoid ImageResponse
export const metadata: Metadata = {
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
    images: [
      {
        url: 'https://madebyaris.com/images/og-projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Client Projects Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Projects Portfolio | Enterprise Web Development',
    description: 'Showcase of enterprise-level web development projects by Aris Setiawan.',
    images: ['https://madebyaris.com/images/og-projects.jpg']
  },
  alternates: {
    canonical: 'https://madebyaris.com/projects'
  }
}

// Server component that renders the client component
export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientProjectsPage />
    </>
  )
} 