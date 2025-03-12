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

// Structured Data
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://madebyaris.com/projects/#webpage",
  "name": "Web Development Projects - Aris Setiawan",
  "description": "Portfolio of enterprise web development projects showcasing expertise in Next.js, React, and WordPress. View our successful client implementations and technical solutions.",
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
          "@id": "https://madebyaris.com/#person",
          "name": "Aris Setiawan",
          "jobTitle": "Senior Full Stack Developer",
          "url": "https://madebyaris.com",
          "image": "https://madebyaris.com/astro.png"
        },
        "keywords": project.tags.join(", "),
        "genre": project.category,
        "datePublished": "2024",
        "inLanguage": "en",
        "isPartOf": {
          "@type": "CreativeWorkSeries",
          "name": "Enterprise Web Development Portfolio",
          "url": "https://madebyaris.com/projects"
        },
        "about": {
          "@type": "Thing",
          "name": project.category,
          "description": `${project.category} web development project using ${project.tags.join(", ")}`
        },
        "provider": {
          "@type": "Organization",
          "@id": "https://madebyaris.com/#organization"
        }
      }
    })),
    "numberOfItems": projects.length
  },
  "creator": {
    "@type": "Person",
    "@id": "https://madebyaris.com/#person",
    "name": "Aris Setiawan",
    "jobTitle": "Senior Full Stack Developer",
    "url": "https://madebyaris.com",
    "image": "https://madebyaris.com/astro.png",
    "sameAs": [
      "https://www.linkedin.com/in/arissetia/",
      "https://github.com/arissetyawan",
      "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
    ]
  },
  "about": {
    "@type": "Thing",
    "name": "Web Development Portfolio",
    "description": "Collection of enterprise-level web development projects showcasing expertise in Next.js, React, WordPress, and modern web technologies. Each project demonstrates our commitment to performance, scalability, and user experience."
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
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "Contact for custom pricing",
      "priceCurrency": "USD",
      "valueAddedTaxIncluded": true
    },
    "availability": "https://schema.org/InStock",
    "highPrice": 50000,
    "lowPrice": 5000,
    "offerCount": projects.length
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "25",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Tech Director at E-commerce Company"
      },
      "reviewBody": "Working with Aris transformed our e-commerce platform. His deep understanding of Next.js and performance optimization resulted in significantly faster load times and better user engagement."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Founder of Tech Startup"
      },
      "reviewBody": "Aris helped us migrate our application to Next.js 14, implementing server components and the new app router. The improvement in performance and SEO was immediate."
    }
  ]
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