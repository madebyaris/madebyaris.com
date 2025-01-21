import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - MadeByAris',
  description: 'Learn more about Aris and his journey in web development.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            About Me
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground">
              Hi! I&apos;m Aris, a Senior Front-End Developer with a passion for creating beautiful and functional web experiences.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">My Journey</h2>
            <p>
              With over X years of experience in web development, I&apos;ve had the opportunity to work on various exciting projects
              and collaborate with talented teams across different industries.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Technical Expertise</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Frontend Development: React, Next.js, TypeScript</li>
              <li>UI/UX: TailwindCSS, Shadcn UI, Framer Motion</li>
              <li>State Management: Redux, Zustand, React Query</li>
              <li>Testing: Jest, React Testing Library</li>
              <li>Tools: Git, VS Code, Figma</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">What I Do</h2>
            <p>
              I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
              My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Beyond Coding</h2>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through blog posts and technical articles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
