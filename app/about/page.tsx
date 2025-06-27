import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles } from "@/components/ui/sparkles"
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
  Github
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
      
      {/* Hero Section with new PageHero component */}
      <PageHero
        variant="about"
        badge={{ text: "12+ Years of Experience", icon: Trophy }}
        title={
          <>
            <span className="text-wp-navy dark:text-foreground">Full Stack</span>{" "}
            <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Developer</span>
          </>
        }
        description={
          <>
            Hi! I&apos;m <span className="font-bold text-wp-navy dark:text-wp-gold">Aris Setiawan</span>, a Full Stack Web Developer with over{" "}
            <span className="bg-wp-gold text-wp-gold-foreground dark:bg-wp-blue dark:text-wp-blue-foreground px-2 py-1 rounded-lg inline-flex items-center font-medium">
              12 years
            </span>{" "}
            of experience in building scalable web applications.
          </>
        }
      >
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full blur opacity-70 animate-pulse"></div>
            <Sparkles>
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
                <Image
                  src="/astro.png"
                  alt="Aris Setiawan"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>
            </Sparkles>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="wp-primary" size="lg">
            <Link href="https://www.linkedin.com/in/arissetia/" target="_blank">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="wp-secondary" size="lg">
            <Link href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" target="_blank">
              <UpworkIcon className="w-5 h-5 mr-2" />
              Upwork
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </PageHero>
      
      {/* Expertise Section */}
      <SectionWrapper
        variant="accent"
        badge={{ text: "My Skills", icon: Code2 }}
        title="Technical Expertise"
        description="Specialized in modern web technologies and enterprise-scale solutions"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Card */}
          <EnhancedCard
            variant="elevated"
            icon={Layout}
            title="Frontend Development"
            description="Creating responsive and performant user interfaces"
          >
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wp-blue/10 dark:bg-wp-blue/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-wp-blue" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-wp-navy dark:text-foreground">Next.js & React</span>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                    <div className="bg-wp-blue h-1.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wp-blue/10 dark:bg-wp-blue/20 flex items-center justify-center">
                  <FileCode className="w-5 h-5 text-wp-blue" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-wp-navy dark:text-foreground">TypeScript</span>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                    <div className="bg-wp-blue h-1.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wp-blue/10 dark:bg-wp-blue/20 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-wp-blue" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-wp-navy dark:text-foreground">TailwindCSS & Framer Motion</span>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                    <div className="bg-wp-blue h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </li>
            </ul>
          </EnhancedCard>
          
          {/* Backend Card */}
          <EnhancedCard
            variant="elevated"
            icon={Server}
            title="Backend Development"
            description="Building robust and scalable server-side solutions"
          >
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wp-gold/10 dark:bg-wp-gold/20 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-wp-gold dark:text-wp-gold" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-wp-navy dark:text-foreground">Node.js & Python</span>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                    <div className="bg-wp-gold h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wp-gold/10 dark:bg-wp-gold/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-wp-gold dark:text-wp-gold" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-wp-navy dark:text-foreground">MySQL & PostgreSQL</span>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                    <div className="bg-wp-gold h-1.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wp-gold/10 dark:bg-wp-gold/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-wp-gold dark:text-wp-gold" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-wp-navy dark:text-foreground">REST APIs & GraphQL</span>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                    <div className="bg-wp-gold h-1.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </li>
            </ul>
          </EnhancedCard>
        </div>
      </SectionWrapper>

      {/* Professional Journey Section */}
      <SectionWrapper
        variant="featured"
        badge={{ text: "Professional Journey", icon: User }}
        title="Career Timeline"
        description="My journey through the world of web development and technology"
      >
        <Timeline data={timelineData} />
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper
        variant="gradient"
        padding="large"
        title={
          <>
            <span className="text-wp-navy-foreground dark:text-foreground">Ready to</span>{" "}
            <span className="bg-gradient-to-r from-wp-gold to-wp-blue bg-clip-text text-transparent">Work Together?</span>
          </>
        }
        description="Let's discuss your next project and how I can help bring your vision to life"
      >
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Button asChild variant="wp-primary" size="xl">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="wp-secondary" size="xl">
              <Link href="/services">
                View My Services
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}