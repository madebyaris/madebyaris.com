import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Code2,
  Database,
  Globe,
  ArrowRight,
  Linkedin,
  MapPin,
  Calendar,
  Zap,
  Briefcase,
  Star,
  Cpu,
  Server,
  Palette,
  Github
} from "lucide-react"
import { Timeline } from "@/components/ui/timeline"
import { UpworkIcon } from "@/components/icons/upwork"
import { Button } from "@/components/ui/button"
// TODO: Component missing - AboutSkillsAnimated
// import { AboutSkillsAnimated } from '@/components/about-skills-animated'
import { blurDataURLs } from '@/lib/utils'
import { trackEvent } from '@/lib/analytics' // Assume a helper
import { SkillProgress } from '@/components/ui/skill-progress'

// Define timeline data
const timelineData = [
  {
    title: "2025 - Present",
    content: (
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Independent Full Stack Developer & Consultant</h3>
        <p className="text-muted-foreground">
          Focusing on my independent consulting practice and strategic partnerships:<br/>
          • Leading enterprise-scale web development projects<br/>
          • Providing technical architecture consulting for modern web applications<br/>
          • Specializing in Next.js, React, and headless WordPress solutions<br/>
          • Mentoring development teams and establishing best practices<br/>
          • Building long-term partnerships with innovative companies
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
    title: "2022 - 2025",
    content: (
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Senior Full Stack Developer</h3>
        <p className="text-muted-foreground">
          Worked at <b>SAB Digital Marketing Agency</b>, where I:<br/>
          • Helped clients optimize website performance and codebase<br/>
          • Developed new features and improved existing functionality<br/>
          • Collaborated with designers and SEO specialists to deliver comprehensive solutions<br/>
          • Stayed updated with global development standards and best practices<br/>
          • Successfully delivered multiple enterprise-level projects
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
    "image": "https://madebyaris.com/aris.png",
    "sameAs": [
      "https://www.linkedin.com/in/arissetia/",
      "https://github.com/madebyaris",
      "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
    ],
    "worksFor": [
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
        "url": "https://sabdigital.id"
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
        "jobTitle": "Independent Full Stack Developer & Consultant",
        "startDate": "2025",
        "endDate": "Present",
        "employer": {
          "@type": "Organization",
          "name": "MadeByAris"
        },
        "description": "Leading enterprise-scale web development projects and providing technical architecture consulting for modern web applications."
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
        "jobTitle": "Senior Full Stack Developer",
        "startDate": "2022",
        "endDate": "2024",
        "employer": {
          "@type": "Organization",
          "name": "SAB Digital Marketing Agency"
        },
        "description": "Led web development projects, optimized performance, and implemented modern development practices."
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
  return {
    title: 'About Aris Setiawan | Senior Full-Stack Developer & Web Architect',
    description: 'With 12+ years of experience, I specialize in building enterprise-scale web applications using Next.js, React, and WordPress. Based in Sidoarjo, Indonesia. Learn about my journey, expertise, and development philosophy.',
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
      'Headless CMS Expert',
      'Next.js Developer Indonesia',
      'WordPress Developer Indonesia',
      'React Developer Indonesia',
      'Full-Stack Developer Sidoarjo',
      'Web Developer Indonesia',
    ],
    openGraph: {
      title: 'About Aris Setiawan | Senior Full-Stack Developer',
      description: 'Senior Full-Stack Developer with 12+ years of experience in Next.js, React, WordPress, and enterprise web architecture.',
      type: 'profile',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Aris Setiawan | Senior Full-Stack Developer',
      description: 'Senior Full-Stack Developer with 12+ years of experience in Next.js, React, WordPress, and enterprise web architecture.',
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
      
      <main className="bg-white dark:bg-gray-950">
        
        {/* Profile Header */}
        <section className="w-full bg-gradient-to-br from-wp-navy via-gray-900 to-black text-white py-24 sm:py-32">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
                <Image
                  src="/aris.png"
                  alt="Aris Setiawan - Senior Full-Stack Developer & Web Architect"
                  fill
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 192px"
                  className="object-cover rounded-full border-4 border-white/20 shadow-2xl"
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURLs.avatar}
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-wp-navy animate-pulse" />
                
                {/* Available to hire popup */}
                <div className="absolute -top-3 -right-3 animate-bounce">
                  <div className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg border-2 border-white relative">
                    I&apos;m available to hire
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rotate-45 border-r border-b border-white"></div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
                  Aris Setiawan
                </h1>
                <p className="text-xl md:text-2xl text-wp-sage mb-6">
                  Senior Full-Stack Developer & Web Architect
                </p>
                <div className="flex items-center justify-center gap-4 text-wp-sage/80 mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Sidoarjo, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>12+ Years of Experience</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button asChild variant="wp-primary" size="lg">
                    <Link href="/contact">
                      Contact Me
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <div className="flex items-center gap-4">
                    <Link href="https://www.linkedin.com/in/arissetia/" target="_blank" className="text-white/70 hover:text-wp-gold transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link href="https://github.com/madebyaris" target="_blank" className="text-white/70 hover:text-wp-gold transition-colors">
                      <Github className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" target="_blank" className="text-white/70 hover:text-wp-gold transition-colors">
                      <UpworkIcon className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="w-full py-16 bg-gray-50 dark:bg-black">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-2xl md:text-4xl font-light text-gray-800 dark:text-gray-200 italic leading-snug">
              &ldquo;I Have Served and I Will Be of Service&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mt-6">
              <Star className="w-5 h-5" />
              <span className="text-sm">Fueled by wisdom and curiosity</span>
            </div>
          </div>
        </section>

        {/* Skills Section - Professional Style matching Services */}
        <section className="w-full py-16 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900">
          <div className="container max-w-7xl mx-auto px-6">
            {/* Enhanced section heading matching homepage style */}
            <div className="relative mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-blue/10 text-wp-blue dark:bg-wp-gold/10 dark:text-wp-gold mb-6 backdrop-blur-sm">
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wider uppercase">Technical Excellence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-wp-navy dark:text-foreground">Skills &</span>{" "}
                <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-lg text-wp-navy/70 dark:text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit for building exceptional digital experiences with modern technologies
              </p>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
            </div>
            
            {/* Skills Grid with Auto-Fit Layout */}
            {/* TODO: Add AboutSkillsAnimated component */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Skills will be rendered here when component is created */}
            </div>
          </div>
        </section>

        {/* Professional Timeline Section */}
        <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                Career Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Timeline
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A decade-plus journey of growth, learning, and building amazing digital experiences.
              </p>
            </div>
            <Timeline data={timelineData} />
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="w-full py-16 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/5 via-transparent to-wp-gold/5 dark:from-wp-blue/10 dark:to-wp-gold/10"></div>
          
          <div className="container max-w-6xl mx-auto px-6 relative">
            {/* Section header */}
            <div className="relative mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-gold/10 text-wp-gold dark:bg-wp-blue/10 dark:text-wp-blue mb-6 backdrop-blur-sm">
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wider uppercase">Ready to Collaborate</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-wp-navy dark:text-foreground">Let&apos;s Build</span>{" "}
                <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Something Amazing</span>{" "}
                <span className="text-wp-navy dark:text-foreground">Together</span>
            </h2>
              <p className="text-lg text-wp-navy/70 dark:text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your ideas into exceptional digital experiences? Let&apos;s discuss your next project.
              </p>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
            </div>

            {/* CTA Cards Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto mb-12">
              {/* Project Inquiry Card */}
              <div className="group relative">
                <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/5 to-transparent group-hover:from-wp-blue/10 transition-all duration-300"></div>
                  
                  <div className="relative mb-6 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-wp-blue" />
                  </div>
                  
                  <div className="flex-grow relative">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-blue dark:group-hover:text-wp-gold transition-colors duration-300">
                      Start a Project
                    </h3>
                    <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed text-lg">
                      Have a project in mind? Let&apos;s discuss your requirements and create something extraordinary together.
                    </p>
                    
                    <div className="space-y-3 mb-8 relative">
                      <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                        Enterprise Web Applications
                      </li>
                      <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                        Performance Optimization
                      </li>
                      <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-wp-gold mr-3"></div>
                        Technical Architecture
                      </li>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    variant="wp-outline" 
                    size="lg" 
                    className="w-full group-hover:bg-wp-blue group-hover:text-wp-blue-foreground group-hover:border-wp-blue transition-all duration-300 mt-auto relative z-10 pointer-events-auto hover:scale-105 hover:shadow-lg"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="group relative">
                <div className="relative h-full p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-wp-gold/5 to-transparent group-hover:from-wp-gold/10 transition-all duration-300"></div>
                  
                  <div className="relative mb-6 p-4 bg-wp-gold/10 dark:bg-wp-gold/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-wp-gold" />
                  </div>
                  
                  <div className="flex-grow relative">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-wp-navy dark:text-foreground relative group-hover:text-wp-gold transition-colors duration-300">
                      Technical Consultation
                    </h3>
                    <p className="text-wp-navy/70 dark:text-muted-foreground mb-6 relative leading-relaxed text-lg">
                      Need expert guidance on your current project? Let&apos;s discuss strategies and best practices.
                    </p>
                    
                    <div className="space-y-3 mb-8 relative">
                      <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-wp-blue mr-3"></div>
                        Code Review & Optimization
                      </li>
                      <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-wp-blue mr-3"></div>
                        Architecture Planning
                      </li>
                      <li className="flex items-center text-wp-navy/80 dark:text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-wp-blue mr-3"></div>
                        Team Mentoring
                      </li>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    variant="wp-outline" 
                    size="lg" 
                    className="w-full group-hover:bg-wp-gold group-hover:text-wp-gold-foreground group-hover:border-wp-gold transition-all duration-300 mt-auto relative z-10 pointer-events-auto hover:scale-105 hover:shadow-lg"
                  >
              <Link href="/contact">
                      Book Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <p className="text-wp-navy/60 dark:text-muted-foreground mb-6">
                Prefer a quick chat? Reach out directly
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Button asChild variant="wp-secondary" size="lg" className="shadow-lg hover:shadow-xl hover:scale-105">
                  <Link href="mailto:hello@madebyaris.com">
                    Email Me
                  </Link>
                </Button>
                <Button asChild variant="wp-outline" size="lg" className="shadow-lg hover:shadow-xl hover:scale-105">
                  <Link href="https://www.linkedin.com/in/arissetia/" target="_blank">
                    LinkedIn
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}