'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Briefcase, ExternalLink, Trophy } from 'lucide-react'
import { projects } from './server-page'

export default function ClientProjectsPage() {
  const [isClient, setIsClient] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Get unique categories
  const categories = [...new Set(projects.map(p => p.category))]

  // Filter projects based on selected category
  const filteredProjects = selectedCategory 
    ? projects.filter(p => p.category === selectedCategory)
    : projects

  return (
    <>
      {/* Hero Section */}
      <section className="text-center pt-8 pb-16">
        {/* Badge */}
        <div 
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={{
            position: 'relative',
            // @ts-expect-error CSS custom properties
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
            '--border-radius-before': '9999px'
          }}
        >
          <Trophy className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Portfolio</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Client Projects
          <span className="block gradient-text font-light">Portfolio</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Explore our showcase of enterprise-level web development solutions, 
          delivering exceptional results for clients across various industries.
        </p>

        {/* CTA */}
        <Link 
          href="/contact"
          className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
        >
          <span className="text-sm font-medium tracking-tight">Start Your Project</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 opacity-60" />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
            selectedCategory === null
              ? 'bg-zinc-900 text-white'
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
          }`}
        >
          All Projects
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedCategory === category
                ? 'bg-zinc-900 text-white'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {isClient ? filteredProjects.map((project, index) => (
          <div 
            key={project.id}
            className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-200/60 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            {/* Logo/Image Area */}
            <div className="relative h-40 bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center p-8">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={160}
                  height={80}
                  className="object-contain max-h-20 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-zinc-400" />
                </div>
              )}
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-medium text-zinc-600 shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* External Link */}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white">
                  <ExternalLink className="w-4 h-4 text-zinc-600" />
                </div>
              </a>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )) : (
          // Skeleton loading
          Array.from({ length: 6 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="bg-zinc-100 rounded-2xl h-[340px] animate-pulse" />
          ))
        )}
      </div>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

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

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Let&apos;s collaborate to create a high-performance solution that meets your business needs.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>View Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
