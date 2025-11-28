import type { Metadata } from 'next'
import ClientProjectsPage from './client-page'

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
  },
  {
    id: 9,
    title: "Aalii",
    description: "Industrial supply company website specializing in pumps, air compressors, and related equipment with product catalog and service offerings.",
    logo: "/images/clients/aalii-compressor.png",
    tags: ["Next.js", "WordPress", "TailwindCSS"],
    link: "https://aaliisupply.com/",
    category: "Industrial Supply"
  },
  {
    id: 10,
    title: "WRS Dosing",
    description: "Industrial dosing systems provider with technical product catalog and service management platform.",
    logo: "/images/clients/wrsdosing.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://wrsdosing.com",
    category: "Industrial"
  },
  {
    id: 11,
    title: "Mahar Pustaka Nusantara",
    description: "Music publishing platform managing copyright and royalty distribution for over 400 songwriters and 7000+ songs in Indonesia.",
    logo: "/images/clients/mahar-pustaka.png",
    tags: ["Next.js", "Node.js", "MySQL"],
    link: "https://maharpustaka.id/",
    category: "Music Publishing"
  },
  {
    id: 12,
    title: "Creates",
    description: "Digital music distribution platform with cover-to-master licensing services for artists to distribute music to Spotify, Apple Music, and other global platforms.",
    logo: "/images/clients/creates.png",
    tags: ["React", "Express.js", "MongoDB"],
    link: "https://creates.co.id/",
    category: "Music Industry"
  },
  {
    id: 13,
    title: "Ichiban Sushi",
    description: "Restaurant chain website with online ordering system, menu management, and location finder.",
    logo: "/images/clients/ichiban-shushi.png",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    link: "https://ichibansushi.co.id/",
    category: "Food & Beverage"
  },
  {
    id: 14,
    title: "Mama Sewa",
    description: "Baby equipment rental platform with inventory management and booking system.",
    logo: "/images/clients/mama-sewa.png",
    tags: ["React", "Firebase", "TailwindCSS"],
    link: "https://mamasewa.com/",
    category: "Rental Services"
  },
  {
    id: 15,
    title: "PGN Gagas",
    description: "Energy company website with service information, client portal, and news management system.",
    logo: "/images/clients/pgn-gagas.png",
    tags: ["WordPress", "PHP", "MySQL"],
    link: "https://gagas.co.id/",
    category: "Energy"
  },
  {
    id: 16,
    title: "Ta Wan",
    description: "Chinese restaurant chain website with menu showcase, location finder, and reservation system.",
    logo: "/images/clients/ta-wan.png",
    tags: ["React", "Express.js", "MongoDB"],
    link: "https://www.tawanrestaurant.com/",
    category: "Food & Beverage"
  }
]

// Metadata for SEO
export const metadata: Metadata = {
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
    'structured-data': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Projects | Made by Aris",
      "description": "Explore my portfolio of web development projects, featuring Next.js, WordPress, and full-stack solutions. See real examples of my work and expertise.",
      "url": "https://madebyaris.com/projects",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": projects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "WebSite",
            "name": project.title,
            "description": project.description,
            "url": project.link
          }
        }))
      }
    }),
  },
}

// Server component that renders the client component
export default function ProjectsPage() {
  return <ClientProjectsPage />
}