'use client'

import Link from 'next/link'
import { motion } from "framer-motion"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { UpworkIcon } from "@/components/icons/upwork"
import Image from "next/image"
import { Sparkles } from "@/components/ui/sparkles"
import { ReactNode } from 'react'

interface ClientHeroProps {
  badge?: string;
  title?: string;
  description?: ReactNode;
}

export function ClientHero({ 
  badge = "Next.js ✨ WordPress Engineer",
  title = "Next.js ✨ WordPress Engineer",
  description = "Hi! I'm Aris, a WordPress Senior Engineer delivering innovative backend solutions for industry leaders."
}: ClientHeroProps) {
  return (
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
            <div className="flex flex-col-reverse items-center md:items-start md:flex-row md:justify-between gap-8">
              <div className="flex-1">
                {badge && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-white dark:bg-white dark:text-black mb-4">
                    <span className="text-sm font-medium">{badge}</span>
                  </div>
                )}
                <h1 className="text-[9px]  dark:text-white text-black pl-1">Nextjs Agency Indonesia</h1>
                <h2 className="text-2xl md:text-5xl font-bold tracking-tight dark:text-white">
                  {title}
                </h2>
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
              {description}
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/contact">
                <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-3 text-lg font-medium">
                  Contact Me 👋
                </button>
              </Link>
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
  )
} 