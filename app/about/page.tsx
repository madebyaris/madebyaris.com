import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles } from "@/components/ui/sparkles"
import { Timeline } from "@/components/ui/timeline"
import { UpworkIcon } from "@/components/icons/upwork"
import { 
  Code2, 
  Database, 
  Layout, 
  Terminal,
  FileCode,
  Palette,
  Server,
  Globe
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
  "@type": "Person",
  "name": "Aris Setiawan",
  "jobTitle": "Senior Full Stack Developer",
  "description": "Senior Full Stack Developer with 12+ years of experience in Next.js, React, WordPress, and enterprise web architecture.",
  "url": "https://madebyaris.com",
  "image": "https://madebyaris.com/astro.png",
  "sameAs": [
    "https://www.linkedin.com/in/arissetia/",
    "https://github.com/arissetyawan",
    "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "SAB Digital Marketing Agency",
    "url": "https://madebyaris.com"
  },
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
      "GraphQL"
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
  ]
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
      
      {/* Hero Section with improved visual design */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Background decorative elements */}
        
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Profile Image with enhanced styling */}
            <div className="md:order-2 mb-6 md:mb-0 flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-emerald-500 rounded-full blur opacity-70 animate-pulse"></div>
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
            
            {/* Hero Content with improved typography */}
            <div className="md:order-1 flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                12+ Years of Experience
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tighter lg:text-5xl mb-4 md:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">
                  Full Stack Developer
                </span>
              </h1>
              <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50">
                <p className="text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-zinc-700 dark:text-zinc-300">
                  Hi! I&apos;m <span className="font-bold text-black dark:text-white">Aris Setiawan</span>, a Full Stack Web Developer with over <span className="font-bold text-primary">12 years</span> of experience in building scalable web applications. 
                  Currently, I&apos;m focused on creating high-performance applications using Next.js while maintaining robust backend architectures.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-0 text-zinc-700 dark:text-zinc-300">
                  I&apos;m <span className="font-bold text-emerald-600 dark:text-emerald-400">open to new opportunities</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Connect Section with improved styling */}
      <section className="py-8 md:py-12 ">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link 
              href="https://www.linkedin.com/in/arissetia/"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#0077B5] text-white hover:bg-[#0077B5]/90 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
            <Link
              href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#14a800] hover:bg-[#14a800]/90 text-white transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] text-sm md:text-base"
            >
              <span>UPWORK</span>
              <UpworkIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] text-sm md:text-base"
            >
              Get in Touch
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Expertise Section with improved layout */}
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
              Technical Expertise
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500/50 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Frontend Card */}
            <div className="group">
              <div className="relative h-full p-6 md:p-8 bg-white dark:bg-zinc-800/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden">
                {/* Card decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 dark:bg-blue-900/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                
                {/* Icon */}
                <div className="relative mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl w-fit">
                  <Layout className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-zinc-900 dark:text-white relative">
                  Frontend Development
                </h3>
                
                {/* Skills list */}
                <ul className="space-y-4 relative">
                  <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <span className="font-medium">Next.js & React</span>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <span className="font-medium">TypeScript</span>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <span className="font-medium">TailwindCSS & Framer Motion</span>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Backend Card */}
            <div className="group">
              <div className="relative h-full p-8 bg-white dark:bg-zinc-800/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden">
                {/* Card decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                
                {/* Icon */}
                <div className="relative mb-6 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl w-fit">
                  <Server className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white relative">
                  Backend Development
                </h3>
                
                {/* Skills list */}
                <ul className="space-y-4 relative">
                  <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <span className="font-medium">Node.js & Python</span>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <span className="font-medium">WordPress REST API</span>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <span className="font-medium">Database Design & ORM</span>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-1">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Professional Journey Section with improved design */}
      <section className="py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              My Story
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
              Professional Journey
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500/50 rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Decorative elements */}
            
            {/* Journey container with glass effect */}
            <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 mb-16">
              <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                I began my career as a junior developer, specializing in CodeIgniter to build system applications.
                Over time, I gained extensive experience in WordPress development, which I worked on for nearly a decade. 
                Recently, I have shifted my focus to Next.js and backend technologies, 
                where I now concentrate on building high-performance applications that deliver exceptional user experiences and scalability.
              </p>
            </div>
            
            {/* Timeline with enhanced styling */}
            <div className="relative">
              <Timeline data={timelineData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}