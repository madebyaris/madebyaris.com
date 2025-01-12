"use client"

import Link from 'next/link'
import { Suspense } from 'react'
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { UpworkIcon } from "@/components/icons/upwork"
import Image from "next/image";
import { getPosts, getProjects } from '@/lib/wordpress'
import { HomeContent } from '@/components/home-content'
import { Sparkles } from "@/components/ui/sparkles";

async function Projects() {
  const projects = await getProjects({ per_page: 3 })
  return <HomeContent type="projects" initialData={projects} />
}

async function Posts() {
  const posts = await getPosts({ per_page: 3 })
  return <HomeContent type="posts" initialData={posts} />
}

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero section with Aurora */}
      <section className="w-full">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col w-full max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex flex-col gap-6 max-w-3xl">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h1 className="text-5xl md:text-8xl font-bold tracking-tight dark:text-white">
                    Next.js ✨ WordPress Engineer
                  </h1>
                </div>
                <Sparkles colors={{ first: "#FF6B6B", second: "#4ECDC4" }} sparklesCount={6}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-black dark:border-white shadow-2xl flex-shrink-0"
                  >
                    <Image
                      src="/astro.png"
                      alt="Aris"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </Sparkles>
              </div>
              <p className="text-xl md:text-3xl text-muted-foreground font-light">
                Hi! I&apos;m <span className="font-bold dark:text-white text-black">Aris</span>, a WordPress Senior Engineer delivering innovative{" "}
                <span className="bg-neutral-800 text-white dark:bg-white dark:text-black px-2 py-1 rounded-md inline-flex items-center">
                  backend solutions
                </span> 
                 &nbsp; for industry leaders.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3 text-lg font-medium">
                  Contact Me 👋
                </button>
                <Link href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" target="_blank">
                  <button className="bg-[#14a800] hover:bg-[#14a800]/90 rounded-full w-fit text-white px-6 py-3 text-lg font-medium flex items-center gap-2">
                    <span>UPWORK</span>
                    <UpworkIcon className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </section>

      {/* Main content */}
      <div className="w-full max-w-[980px] px-4 py-8 md:py-12 lg:py-24 mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col gap-4 text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            Hi, I&apos;m Aris 👋
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            A passionate full-stack developer crafting beautiful and functional web experiences.
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="rounded-lg border bg-background px-4 py-2 hover:bg-accent"
            >
              View Projects
            </Link>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mt-20">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Featured Projects
              </h2>
              <p className="mt-1 text-muted-foreground">
                Some of my recent work
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              View All →
            </Link>
          </div>
          <Suspense fallback={
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-[300px] animate-pulse rounded-lg bg-muted" />
              ))}
            </div>
          }>
            <Projects />
          </Suspense>
        </section>

        {/* Latest Posts Section */}
        <section className="mt-20">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Latest Posts
              </h2>
              <p className="mt-1 text-muted-foreground">
                My recent thoughts and insights
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              View All →
            </Link>
          </div>
          <Suspense fallback={
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-[300px] animate-pulse rounded-lg bg-muted" />
              ))}
            </div>
          }>
            <Posts />
          </Suspense>
        </section>
      </div>
    </main>
  )
}
