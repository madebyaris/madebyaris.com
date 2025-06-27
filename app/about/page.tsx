import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Timeline } from "@/components/ui/timeline"
import { UpworkIcon } from "@/components/icons/upwork"
import { PageHero } from "@/components/ui/page-hero"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { EnhancedCard } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/button"
import { 
  Code2, 
  Database, 
  Layout, 
  Terminal,
  FileCode,
  Palette,
  Server,
  Globe,
  User,
  Trophy,
  ArrowRight,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Award,
  Zap,
  Target,
  Coffee
} from "lucide-react"
import { ImageResponse } from 'next/og'

// Define timeline data
const timelineData = [
  {
    title: "2022 - Present",
    content: (
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Senior Full Stack Developer</h3>
        <p className="text-muted-foreground">
          Working at <b>SAB Digital Marketing Agency</b>, where I:<br/>
          • Help clients optimize website performance and codebase<br/>
          • Develop new features and improve existing functionality<br/>
          • Collaborate with designers and SEO specialists to deliver comprehensive solutions<br/>
          • Stay updated with global development standards and best practices
        </p>
      </div>
    ),
  },
  {
    title: "2015 - Present",
    content: (
      <div className="bg-secondary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Founder - MadeByAris</h3>
        <p className="text-muted-foreground">
          Running my own freelance business, offering:<br/>
          • Full-stack web development using <b>Next.js</b>, <b>React</b>, and <b>Laravel</b><br/>
          • Website optimization and performance improvements<br/>
          • SEO implementation and optimization<br/>
          • Complete website redesigns<br/>
          • Technical consulting and architecture planning<br/><br/>
          Previously known as arisdes.com, rebranded to <b>madebyaris.com</b> to better reflect my professional growth and expanded service offerings.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">CEO</h3>
        <p className="text-muted-foreground">
          Leading <b>Raja Kreatif Asia</b> as CEO, focusing on company growth and innovation.<br/>
          Under my leadership, we&apos;ve expanded our services and reached new markets while maintaining our core values of excellence and client satisfaction.
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">COO & Co-Founder</h3>
        <p className="text-muted-foreground">
          As COO at <b>Raja Kreatif Asia</b>, I focused on:<br/>
          • Building sustainable business practices and improving office environment<br/>
          • Launched <b>Raja Kreatif Class</b> (kelas.rajakreatif.com) - WordPress learning platform<br/>
          • Expanded service offerings:<br/>
          &nbsp;&nbsp;- Web Development (WordPress specialization)<br/>
          &nbsp;&nbsp;- SEO Analysis & Specialist services<br/>
          &nbsp;&nbsp;- Digital Marketing solutions<br/>
          • Supporting all divisions in meeting their standards and KPIs
        </p>
      </div>
    ),
  },
  {
    title: "2019",
    content: (
      <div className="bg-secondary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">CMO & Co-Founder</h3>
        <p className="text-muted-foreground">
          Started at <b>Raja Kreatif Asia</b> as CMO, where I:<br/>
          • Helped small businesses, enterprises, and government agencies with website development, branding, and SEO optimization<br/>
          • Acted as a bridge between our team and clients, ensuring excellent service delivery<br/>
          • Prioritized both team development and client satisfaction<br/>
          • Established strong client relationships and service standards
        </p>
      </div>
    ),
  },
  {
    title: "2016",
    content: (
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">WordPress Developer</h3>
        <p className="text-muted-foreground">
          Working at <b>Hongkiat.com</b>,<br/>
          Created new features and improved website performance using <b>WordPress</b>, <b>PHP</b>, <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>jQuery</b>
        </p>
      </div>
    ),
  },
  {
    title: "2015",
    content: (
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
        <p className="text-muted-foreground">
          Working at <b>PT. DheZign Online solution</b>,<br/>
          We build a Mockup website & Mobile appliaction, convert it to the HTML and building website with WordPress.
          using <b>WordPress</b>, <b>PHP</b> , <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>JQuery</b>, <b>Bootstrap</b>, <b>CodeIgniter</b>
        </p>
      </div>
    ),
  },
  {
    title: "2014",
    content: (
      <div className="bg-secondary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Junior full stack developer</h3>
        <p className="text-muted-foreground">
          Working at <b>SEREWare</b>,<br/>
          building web application, design system and database, I also build Web App animation here.<br/>
          using <b>PHP</b> and <b>MySQL</b>
        </p>
      </div>
    ),
  },
  {
    title: "2013",
    content: (
      <div className="bg-secondary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Junior backend Developer</h3>
        <p className="text-muted-foreground">
          Working at <b>PT. Elkabumi Caraka Daya</b>,<br/>
          Building backend for their clients, making repot using Ireport and make create a design database.
          Using PHP, MySQL, and JavaScript.
        </p>
      </div>
    ),
  },
]

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://madebyaris.com/about/#webpage",
  "url": "https://madebyaris.com/about",
  "name": "About Aris Setiawan | Senior Full-Stack Developer & Web Architect",
  "description": "Learn about Aris Setiawan's 12+ years of experience in enterprise web development, specializing in Next.js, React, WordPress, and modern web architecture.",
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
          "@id": "https://madebyaris.com/about",
          "name": "About"
        }
      }
    ]
  },
  "mainEntity": {
    "@type": "Person",
    "@id": "https://madebyaris.com/#person",
    "name": "Aris Setiawan",
    "jobTitle": "Senior Full Stack Developer",
    "description": "Senior Full Stack Developer with 12+ years of experience in Next.js, React, WordPress, and enterprise web architecture.",
    "url": "https://madebyaris.com",
    "image": "https://madebyaris.com/astro.png",
    "sameAs": [
      "https://www.linkedin.com/in/arissetia/",
      "https://github.com/madebyaris",
      "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "SAB Digital Marketing Agency",
        "url": "https://madebyaris.com",
        "startDate": "2022"
      },
      {
        "@type": "Organization",
        "name": "Made by Aris",
        "url": "https://madebyaris.com",
        "startDate": "2015"
      }
    ],
    "knowsAbout": [
      "Next.js Development",
      "React Development",
      "WordPress Development",
      "Full Stack Development",
      "Web Architecture",
      "Enterprise Solutions",
      "Performance Optimization",
      "Technical Leadership"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Sidoarjo",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Indonesia"
        }
      },
      "skills": [
        "Next.js",
        "React",
        "TypeScript",
        "WordPress",
        "PHP",
        "MySQL",
        "Node.js",
        "GraphQL",
        "System Architecture",
        "Performance Optimization"
      ]
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "SAB Digital Marketing Agency",
        "url": "https://madebyaris.com"
      },
      {
        "@type": "Organization",
        "name": "Raja Kreatif Asia",
        "url": "https://rajakreatif.com"
      },
      {
        "@type": "Organization",
        "name": "Hongkiat.com",
        "url": "https://www.hongkiat.com"
      }
    ],
    "workExperience": [
      {
        "@type": "WorkExperience",
        "jobTitle": "Senior Full Stack Developer",
        "startDate": "2022",
        "endDate": "Present",
        "employer": {
          "@type": "Organization",
          "name": "SAB Digital Marketing Agency"
        },
        "description": "Leading web development projects, optimizing performance, and implementing modern development practices."
      },
      {
        "@type": "WorkExperience",
        "jobTitle": "Founder",
        "startDate": "2015",
        "endDate": "Present",
        "employer": {
          "@type": "Organization",
          "name": "MadeByAris"
        },
        "description": "Running a successful freelance business offering full-stack web development services."
      },
      {
        "@type": "WorkExperience",
        "jobTitle": "CEO",
        "startDate": "2022",
        "endDate": "2022",
        "employer": {
          "@type": "Organization",
          "name": "Raja Kreatif Asia"
        },
        "description": "Led company growth and innovation initiatives."
      }
    ]
  }
}

// Generate Metadata and Structured Data
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
        <Image
          src="https://madebyaris.com/astro.png"
          alt="Aris Setiawan"
          width="200"
          height="200"
          style={{
            borderRadius: '50%',
            marginBottom: '20px',
          }}
        />
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Aris Setiawan
        </h1>
        <p
          style={{
            fontSize: '30px',
            color: '#888888',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Senior Full-Stack Developer & Web Architect
        </p>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '20px',
          }}
        >
          <div style={{ background: '#007acc', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            Next.js
          </div>
          <div style={{ background: '#61dafb', padding: '10px 20px', borderRadius: '20px', color: 'black' }}>
            React
          </div>
          <div style={{ background: '#21759b', padding: '10px 20px', borderRadius: '20px', color: 'white' }}>
            WordPress
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
    title: 'About Aris Setiawan | Senior Full-Stack Developer & Web Architect',
    description: 'With 12+ years of experience, I specialize in building enterprise-scale web applications using Next.js, React, and WordPress. Learn about my journey, expertise, and development philosophy.',
    keywords: [
      'Senior Full-Stack Developer',
      'Web Architecture Expert',
      'Next.js Developer',
      'WordPress Developer',
      'React Specialist',
      'Enterprise Solutions Architect',
      'PHP Expert',
      'JavaScript Developer',
      'TypeScript Developer',
      'Headless CMS Expert'
    ],
    openGraph: {
      title: 'About Aris Setiawan | Senior Full-Stack Developer',
      description: 'Senior Full-Stack Developer with 12+ years of experience in Next.js, React, WordPress, and enterprise web architecture.',
      type: 'profile',
      locale: 'en_US',
      images: [ogImage]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Aris Setiawan | Senior Full-Stack Developer',
      description: 'Senior Full-Stack Developer with 12+ years of experience in Next.js, React, WordPress, and enterprise web architecture.',
      images: [ogImage]
    },
    alternates: {
      canonical: 'https://madebyaris.com/about'
    }
  }
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section with Minimal Design */}
      <section className="w-full min-h-screen relative overflow-hidden bg-white dark:bg-gray-950">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-blue-50/50 dark:bg-blue-950/20 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-50/50 dark:bg-purple-950/20 blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <User className="w-4 h-4" />
              About Me
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900 dark:text-white">Designer, Developer,</span>
              <br />
              <span className="text-gray-400 dark:text-gray-500">Problem Solver</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Hallo, I am Aris, a Senior Full-Stack Developer based in Sidoarjo, Indonesia. 
              I blend technical expertise with creative problem-solving to craft impactful digital solutions.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[200px]">
            
            {/* Large Profile Card */}
            <div className="md:col-span-2 lg:col-span-2 md:row-span-2">
              <div className="h-full bg-wp-navy/90 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:bg-wp-navy transition-all duration-300 border border-white/10">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                    <Image
                      src="/astro.png"
                      alt="Aris Setiawan"
                      fill
                      sizes="128px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-wp-sage rounded-full border-4 border-wp-navy flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-wp-navy-foreground mb-2">
                  Aris Setiawan
                </h2>
                <p className="text-wp-navy-foreground/70 text-sm mb-4">
                  Senior Full-Stack Developer
                </p>
                <div className="flex items-center gap-2 text-xs text-wp-navy-foreground/60">
                  <MapPin className="w-3 h-3" />
                  Jakarta, Indonesia
                </div>
              </div>
            </div>

            {/* Experience Stats */}
            <div className="md:col-span-2 lg:col-span-2 md:row-span-1">
              <div className="h-full bg-wp-blue rounded-3xl p-8 text-wp-blue-foreground flex flex-col justify-center border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-8 h-8" />
                  <span className="text-sm font-medium opacity-90">Experience</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold">12+</div>
                    <div className="text-sm opacity-75">Years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm opacity-75">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Currently Available */}
            <div className="md:col-span-2 lg:col-span-2 md:row-span-1">
              <div className="h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white flex flex-col justify-center border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8" />
                  <span className="text-sm font-medium opacity-90">Currently</span>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">Open for New Opportunities</div>
                  <div className="text-sm opacity-75">Freelance & Full-time Positions</div>
                </div>
              </div>
            </div>

            {/* Skills Overview */}
            <div className="md:col-span-4 lg:col-span-4 md:row-span-2">
              <div className="h-full bg-wp-navy/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-8 h-8 text-wp-blue" />
                  <h3 className="text-xl font-bold text-wp-navy-foreground">Tech Stack</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wp-blue rounded-xl flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-wp-navy-foreground font-semibold">Next.js & React</div>
                      <div className="text-wp-navy-foreground/70 text-sm">Modern React framework</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-wp-navy-foreground font-semibold">WordPress & PHP</div>
                      <div className="text-wp-navy-foreground/70 text-sm">CMS & backend development</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wp-sage rounded-xl flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-wp-navy-foreground font-semibold">Database Design</div>
                      <div className="text-wp-navy-foreground/70 text-sm">MySQL & PostgreSQL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote/Philosophy */}
            <div className="md:col-span-4 lg:col-span-6 md:row-span-1">
              <div className="h-full bg-wp-navy rounded-3xl p-8 text-wp-navy-foreground flex items-center justify-center text-center border border-white/10">
                <div>
                  <blockquote className="text-2xl md:text-3xl font-light italic mb-4">
                    "I believe in creating digital experiences that not only look great but perform exceptionally and solve real business problems."
                  </blockquote>
                  <div className="flex items-center justify-center gap-2 text-wp-navy-foreground/60">
                    <Coffee className="w-5 h-5" />
                    <span className="text-sm">Fueled by coffee and curiosity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="md:col-span-2 lg:col-span-2 md:row-span-1">
              <div className="h-full bg-wp-sage rounded-3xl p-6 text-wp-sage-foreground flex flex-col justify-between border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for Projects</span>
                </div>
                <Button asChild className="bg-white text-wp-sage hover:bg-white/90 w-full">
                  <Link href="/contact">
                    Let's Talk
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="md:col-span-1 lg:col-span-2 md:row-span-1">
              <Button asChild className="h-full w-full bg-wp-blue hover:bg-wp-blue/90 text-wp-blue-foreground rounded-3xl border border-white/10">
                <Link href="https://www.linkedin.com/in/arissetia/" target="_blank" className="flex items-center justify-center gap-3">
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </Link>
              </Button>
            </div>

            {/* Upwork */}
            <div className="md:col-span-1 lg:col-span-2 md:row-span-1">
              <Button asChild className="h-full w-full bg-wp-sage hover:bg-wp-sage/90 text-wp-sage-foreground rounded-3xl border border-white/10">
                <Link href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" target="_blank" className="flex items-center justify-center gap-3">
                  <UpworkIcon className="w-6 h-6" />
                  <span className="font-medium">Upwork</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Timeline Section */}
      <section className="w-full py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Career Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Timeline
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A decade-plus journey of growth, learning, and building amazing digital experiences
            </p>
          </div>
          
          <Timeline data={timelineData} />
        </div>
      </section>
    </>
  )
}