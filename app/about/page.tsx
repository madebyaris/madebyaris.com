import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Code2,
  ArrowRight,
  Linkedin,
  MapPin,
  Calendar,
  Briefcase,
  Github,
  ArrowUpRight
} from "lucide-react"
import { Timeline } from "@/components/ui/timeline"
import { UpworkIcon } from "@/components/icons/upwork"
import { blurDataURLs } from '@/lib/utils'

// Define timeline data
const timelineData = [
  {
    title: "2025 - Present",
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Independent Full Stack Developer & Consultant</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
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
      <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/60">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Founder - MadeByAris</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
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
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Senior Full Stack Developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
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
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">CEO</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Leading <b>Raja Kreatif Asia</b> as CEO, focusing on company growth and innovation.<br/>
          Under my leadership, we&apos;ve expanded our services and reached new markets while maintaining our core values of excellence and client satisfaction.
        </p>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">COO & Co-Founder</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
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
      <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/60">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">CMO & Co-Founder</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
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
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">WordPress Developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Working at <b>Hongkiat.com</b>,<br/>
          Created new features and improved website performance using <b>WordPress</b>, <b>PHP</b>, <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>jQuery</b>
        </p>
      </div>
    ),
  },
  {
    title: "2015",
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Frontend Developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
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
      <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/60">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Junior full stack developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
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
      <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200/60">
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">Junior backend Developer</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Working at <b>PT. Elkabumi Caraka Daya</b>,<br/>
          Building backend for their clients, making repot using Ireport and make create a design database.
          Using PHP, MySQL, and JavaScript.
        </p>
      </div>
    ),
  },
]

// Skills data
const skills = [
  { name: "Next.js", level: 95 },
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "WordPress", level: 95 },
  { name: "PHP/Laravel", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MySQL/PostgreSQL", level: 90 },
  { name: "Tailwind CSS", level: 95 },
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
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-8 pt-4">
        {/* Left Column: Profile Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/20 border border-white/20">
            <Image
              src="/aris.png"
              alt="Aris Setiawan - Senior Full-Stack Developer & Web Architect"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={blurDataURLs.avatar}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
            
            {/* Available Badge */}
            <div className="absolute top-6 left-6">
              <div 
                className="flex gap-2 bg-gradient-to-b from-white/20 to-white/5 rounded-full py-1.5 px-3 items-center backdrop-blur-sm"
                style={{
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',
                  '--border-radius-before': '9999px'
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] uppercase font-semibold text-white tracking-wide">Available to Hire</span>
              </div>
            </div>
            
            {/* Info Card at Bottom */}
            <div className="absolute bottom-6 left-6 right-6">
              <div 
                className="bg-gradient-to-b from-white/15 to-white/5 rounded-xl p-4 backdrop-blur-md"
                style={{
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
                  '--border-radius-before': '12px'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-white font-semibold">Aris Setiawan</p>
                    <p className="text-white/60 text-xs">Full-Stack Developer</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/80 font-medium">Next.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/80 font-medium">React</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/80 font-medium">WordPress</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Badge */}
          <div 
            className="inline-flex bg-white/60 w-max rounded-full mb-6 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px'
            }}
          >
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">About Me</span>
          </div>

          {/* Name */}
          <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
            Aris Setiawan
            <span className="block gradient-text font-light text-3xl lg:text-4xl mt-2">Senior Full-Stack Developer</span>
          </h1>

          {/* Bio */}
          <p className="text-base text-zinc-500 font-medium max-w-xl mb-8 leading-relaxed">
            With over 12 years of experience in web development, I specialize in building enterprise-scale 
            applications using modern technologies. My expertise spans Next.js, React, WordPress, and PHP, 
            with a focus on creating performant, scalable, and user-friendly solutions.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Sidoarjo, Indonesia</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span>12+ Years Experience</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link 
              href="/contact"
              className="btn-primary hover:scale-[1.02] transition-all flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Contact Me</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link 
              href="/projects"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{
                boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
                position: 'relative',
                // @ts-expect-error CSS custom properties
                '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
                '--border-radius-before': '9999px'
              }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">View Projects</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Connect</span>
            <div className="flex gap-2">
              <Link 
                href="https://www.linkedin.com/in/arissetia/" 
                target="_blank"
                className="p-2 rounded-full bg-zinc-100 hover:bg-orange-100 text-zinc-600 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link 
                href="https://github.com/madebyaris" 
                target="_blank"
                className="p-2 rounded-full bg-zinc-100 hover:bg-orange-100 text-zinc-600 hover:text-orange-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link 
                href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" 
                target="_blank"
                className="p-2 rounded-full bg-zinc-100 hover:bg-orange-100 text-zinc-600 hover:text-orange-500 transition-colors"
              >
                <UpworkIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-16 lg:my-20 opacity-60" />

      {/* Philosophy Section */}
      <section className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <blockquote className="text-2xl md:text-3xl font-medium text-zinc-900 italic leading-relaxed tracking-tight mb-6">
          &ldquo;I Have Served and I Will Be of Service&rdquo;
        </blockquote>
        <p className="text-sm text-zinc-500 font-medium">Fueled by wisdom and curiosity</p>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 lg:mb-20 opacity-60" />

      {/* Skills Section */}
      <section className="mb-16 lg:mb-20">
        <div className="text-center mb-12">
          <div 
            className="inline-flex bg-white/60 rounded-full mb-6 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px'
            }}
          >
            <Code2 className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Technical Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tighter mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl mx-auto font-medium">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-zinc-900">{skill.name}</span>
                <span className="text-sm text-zinc-500 font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 lg:mb-20 opacity-60" />

      {/* Timeline Section */}
      <section className="mb-16 lg:mb-20">
        <div className="text-center mb-12">
          <div 
            className="inline-flex bg-white/60 rounded-full mb-6 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={{
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
              '--border-radius-before': '9999px'
            }}
          >
            <Calendar className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tighter mb-4">
            Professional <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl mx-auto font-medium">
            A decade-plus journey of growth, learning, and building amazing digital experiences.
          </p>
        </div>

        <Timeline data={timelineData} />
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 lg:mb-20 opacity-60" />

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col p-8 md:p-12 lg:p-16 justify-center min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Let&apos;s build something amazing together
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl font-medium">
            Ready to collaborate on your next project? I&apos;d love to hear about your ideas and discuss how we can work together.
          </p>

          <Link 
            href="/contact"
            className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
