'use client'

import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

// Define the project type
export interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    logo: string
    tags: string[]
    link: string
    category: string
  }
  index: number
  categoryColors: Record<string, { 
    bg: string
    text: string
    icon: React.ReactNode
    hoverBg: string 
  }>
}

export default function ProjectCard({ project, index, categoryColors }: ProjectCardProps) {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 // Stagger effect
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden border border-zinc-200/70 dark:border-zinc-700/70 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <div className="relative">
          {/* Category badge */}
          <div className={`absolute top-4 left-4 z-10 ${categoryColors[project.category]?.bg || "bg-zinc-100 dark:bg-zinc-800"} ${categoryColors[project.category]?.text || "text-zinc-800 dark:text-zinc-200"} px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5`}>
            {categoryColors[project.category]?.icon}
            {project.category}
          </div>
          
          {/* Logo area with gradient overlay */}
          <div className="relative h-48 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10"></div>
            <Image
              src={project.logo}
              alt={project.title}
              width={180}
              height={90}
              className="max-h-24 w-auto object-contain relative z-10"
            />
          </div>
        </div>
        
        <CardContent className="p-6">
          {/* Project title */}
          <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
            {project.title}
          </h3>
          
          {/* Project description */}
          <p className="text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-3">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Visit button */}
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button 
              variant="outline" 
              className="w-full border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group"
            >
              Visit Project
              <ExternalLink className="ml-2 h-4 w-4 text-zinc-400 group-hover:text-primary transition-colors" />
            </Button>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
} 