'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Briefcase, ExternalLink, Trophy } from 'lucide-react'
import { projects } from './server-page'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
import { contactHref } from '@/lib/contact-services'

const aiProjectNotes = [
  {
    title: 'AI SEO that researches, writes, and tests itself',
    problem:
      'Content teams guess which topics and headlines will work, and learn slowly because every test takes manual work.',
    built:
      'An AI system that researches a topic on its own, writes the content, runs A/B tests across versions, and uses each result to pick better next time.',
  },
  {
    title: 'Indonesian legal AI grounded in expert knowledge',
    problem:
      'A general model answers Indonesian legal questions from memory alone, which is too unreliable for legal work.',
    built:
      'An AI application built with input from Indonesian law lecturers and professors, so answers draw on structured expert knowledge alongside the base model.',
  },
  {
    title: 'Full architecture for a high-volume AI product',
    problem:
      'An AI workflow that handles a handful of records smoothly falls over when it has to process a thousand at once.',
    built:
      'The full stack, network, VPS, and LLM harness (prompts, tools, and retries) tuned to process a thousand records in a single run.',
  },
]

const whatToCheck = [
  { title: 'Public AI and Rust code', desc: 'Inspect my open-source repos on GitHub to see how I structure agents, MCP servers, and Rust tools.' },
  { title: 'Speed on a phone', desc: 'Open any client web build on mobile data. That is how most users experience production apps.' },
  { title: 'Breadth of stacks', desc: 'From Rust CLIs and AI systems to Next.js, Laravel, PostgreSQL, and WordPress, across 13+ years.' },
]

export default function ClientProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = [...new Set(projects.map((p) => p.category))]

  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
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
            '--border-radius-before': '9999px',
          }}
        >
          <Trophy className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Proof of work</span>
        </div>

        {/* Title */}
        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          AI tools, open source
          {' '}
          <span className="block gradient-text font-light">and live client work</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          My recent client AI work is under NDA, so this page starts with public open-source AI and
          Rust code you can read today, followed by generalized AI architecture notes and {projects.length} live
          web apps shipped over 13+ years.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
          {whatToCheck.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-zinc-900 mb-1">{item.title}</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={contactHref('ai-implementation')}
          className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
        >
          <span className="text-sm font-medium tracking-tight">Send me your project</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 opacity-60" />

      {/* Public Open-Source AI & Systems Work */}
      <OpenSourceProjects
        id="projects-open-source"
        title="Open-source AI and developer tools"
        intro="Public repositories I build and maintain in Rust and TypeScript. Inspect the architecture, tests, and commit history directly."
      />

      {/* Generalized NDA AI Engineering Notes */}
      <section className="mb-16" aria-labelledby="projects-ai-notes">
        <div className="max-w-2xl mb-8">
          <h2 id="projects-ai-notes" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Selected AI systems (under NDA)
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Client details stay private. These generalized notes show the types of production AI problems I solve.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiProjectNotes.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-4">{item.title}</h3>
              <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">The problem</p>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">{item.problem}</p>
              <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-1">What I built</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.built}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-12 opacity-60" />

      {/* Live Web Client Projects Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
          Live client <span className="gradient-text">web products</span>
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed">
          {projects.length} public web apps, marketplaces, portals, and commerce sites shipped across Next.js, React, Node.js, Laravel, and WordPress.
        </p>
      </div>

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
          All projects
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="bg-white h-full flex flex-col hover:bg-zinc-50 transition-colors rounded-2xl overflow-hidden shadow-sm hover:shadow-lg group border-0"
          >
            {/* Logo/Image Area */}
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center p-8">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={200}
                  height={100}
                  className="object-contain max-h-24 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-zinc-400" />
                </div>
              )}

              {/* External Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${project.title} website`}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white">
                  <ExternalLink className="w-4 h-4 text-zinc-600" />
                </div>
              </a>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Category Badge */}
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-zinc-900 group-hover:text-orange-500 transition-colors tracking-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-500 mb-4 line-clamp-2 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-zinc-50 rounded text-[10px] text-zinc-500 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project */}
              <div className="mt-auto pt-4 border-t border-zinc-100">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-900 group-hover:text-orange-500 transition-colors"
                >
                  Visit the live site
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* CTA Section */}
      <section className="overflow-hidden shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center px-6 py-12 md:px-12 md:py-14 relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Want to ship something together?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send a link to your product, a stalled AI pilot, or a short summary of what you want built. I reply within
            24 hours with questions or a plain answer on whether I&apos;m the right fit.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('ai-implementation')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Send me your project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Compare services first</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
