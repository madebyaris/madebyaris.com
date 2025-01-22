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

export const metadata: Metadata = {
  title: 'About - Aris Setiawan',
  description: 'Full Stack Web Developer specializing in Next.js and Backend Development',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-8">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                Full Stack Developer
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Crafting robust web solutions with Next.js and modern backend technologies
              </p>
            </div>
            <Sparkles>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/astro.png"
                  alt="Aris Setiawan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Sparkles>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            {/* Introduction */}
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <p className="text-lg leading-relaxed mb-0">
                Hi! I&apos;m Aris Setiawan, a Full Stack Web Developer with over <b>12 years</b> of experience in building scalable web applications. 
                Currently, I&apos;m focused on creating high-performance applications using Next.js while maintaining robust backend architectures.
              </p>
              <p className="text-lg leading-relaxed mt-4 mb-0">
                I&apos;m <b>open to new opportunities</b>
              </p>
            </div>

            {/* Connect Section */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Link 
                href="https://www.linkedin.com/in/arissetia/"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </Link>
              <Link
                href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14a800] hover:bg-[#14a800]/90 text-white transition-colors"
              >
                <span>UPWORK</span>
                <UpworkIcon className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Expertise */}
            <h2 className="text-2xl font-bold mt-12 mb-6">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Layout className="w-5 h-5" />
                  Frontend Development
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    Next.js & React
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-primary" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-primary" />
                    TailwindCSS & Framer Motion
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Backend Development
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    Node.js & Python
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    WordPress REST API
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" />
                    Database Design & ORM
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional Journey */}
            <div className="bg-primary/5 rounded-lg p-6 mt-12 border border-primary/10">
              <h2 className="text-2xl font-bold mb-6">Professional Journey</h2>
              <p>
              I began my career as a junior developer, specializing in CodeIgniter to build system applications.
               Over time, I gained extensive experience in WordPress development, which I worked on for nearly a decade. 
               Recently, I have shifted my focus to Next.js and backend technologies, 
               where I now concentrate on building high-performance applications that deliver exceptional user experiences and scalability.
            </p>
            </div>  

            {/* Timeline Section */}
            <div className="-mx-4 sm:-mx-6 lg:-mx-8">
              <Timeline data={timelineData} />
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
