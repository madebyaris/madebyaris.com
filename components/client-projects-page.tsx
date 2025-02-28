'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Filter, Search, Briefcase, ShoppingCart, Film, Home, Globe } from 'lucide-react'
import { Sparkles } from '@/components/ui/sparkles'
import dynamic from 'next/dynamic'
import { projects } from '@/app/projects/server-page'

// Import ProjectCard as a client component
const ProjectCard = dynamic(() => import('@/components/project-card'), { ssr: true })

// Define category colors with improved icons
const categoryColors: Record<string, { bg: string, text: string, icon: React.ReactNode, hoverBg: string }> = {
  "Education": { 
    bg: "bg-blue-100 dark:bg-blue-900/30", 
    text: "text-blue-800 dark:text-blue-300",
    icon: <Globe className="w-4 h-4" />,
    hoverBg: "hover:bg-blue-200 dark:hover:bg-blue-800/50"
  },
  "Agency": { 
    bg: "bg-purple-100 dark:bg-purple-900/30", 
    text: "text-purple-800 dark:text-purple-300",
    icon: <Briefcase className="w-4 h-4" />,
    hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-800/50"
  },
  "Marketplace": { 
    bg: "bg-emerald-100 dark:bg-emerald-900/30", 
    text: "text-emerald-800 dark:text-emerald-300",
    icon: <Search className="w-4 h-4" />,
    hoverBg: "hover:bg-emerald-200 dark:hover:bg-emerald-800/50"
  },
  "E-commerce": { 
    bg: "bg-amber-100 dark:bg-amber-900/30", 
    text: "text-amber-800 dark:text-amber-300",
    icon: <ShoppingCart className="w-4 h-4" />,
    hoverBg: "hover:bg-amber-200 dark:hover:bg-amber-800/50"
  },
  "Entertainment": { 
    bg: "bg-pink-100 dark:bg-pink-900/30", 
    text: "text-pink-800 dark:text-pink-300",
    icon: <Film className="w-4 h-4" />,
    hoverBg: "hover:bg-pink-200 dark:hover:bg-pink-800/50"
  },
  "Real Estate": { 
    bg: "bg-indigo-100 dark:bg-indigo-900/30", 
    text: "text-indigo-800 dark:text-indigo-300",
    icon: <Home className="w-4 h-4" />,
    hoverBg: "hover:bg-indigo-200 dark:hover:bg-indigo-800/50"
  }
}

export default function ClientProjectsPage() {
  // State for filtered projects and active category
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Get unique categories
  const categories = Array.from(new Set(projects.map(project => project.category)));

  // Filter projects when category or search changes
  useEffect(() => {
    let result = projects;
    
    // Apply category filter
    if (activeCategory) {
      result = result.filter(project => project.category === activeCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(result);
  }, [activeCategory, searchQuery]);

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setActiveCategory(prev => prev === category ? null : category);
  };

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {/* Hero Section with enhanced design */}
      <section className="relative py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_60%)]"></div>
        <div className="absolute w-[800px] h-[800px] -right-40 -top-40 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] -left-20 -bottom-20 bg-emerald-200/10 dark:bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Enterprise Solutions
            </div>
            <Sparkles>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">
                  Client Projects Portfolio
                </span>
              </h1>
            </Sparkles>
            <div className="max-w-[700px] mx-auto bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50">
              <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                Explore our showcase of enterprise-level web development solutions, 
                delivering exceptional results for clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Input */}
              <div className={`relative w-full md:w-64 transition-all duration-300 ${isSearchFocused ? 'md:w-80' : ''}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-zinc-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-700/50 border-0 rounded-lg focus:ring-2 focus:ring-primary/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
              
              {/* Filter Label */}
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter by category:</span>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`${categoryColors[category]?.bg || "bg-gray-100 dark:bg-gray-800"} 
                              ${categoryColors[category]?.text || "text-gray-800 dark:text-gray-200"} 
                              ${categoryColors[category]?.hoverBg || "hover:bg-gray-200 dark:hover:bg-gray-700"}
                              ${activeCategory === category ? 'ring-2 ring-primary/50 shadow-md' : ''}
                              px-4 py-2 rounded-full flex items-center gap-2 transition-all`}
                  >
                    {categoryColors[category]?.icon}
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-zinc-500 dark:text-zinc-400">
              Showing <span className="font-medium text-zinc-900 dark:text-zinc-100">{filteredProjects.length}</span> of {projects.length} projects
              {activeCategory && <span> in <span className="font-medium text-primary">{activeCategory}</span></span>}
              {searchQuery && <span> matching &quot;<span className="font-medium text-primary">{searchQuery}</span>&quot;</span>}
            </p>
            
            {(activeCategory || searchQuery) && (
              <button 
                onClick={() => {
                  setActiveCategory(null);
                  setSearchQuery('');
                }}
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
              >
                Clear filters
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid with enhanced cards */}
      <section className="py-8">
        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                  categoryColors={categoryColors}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-200/50 dark:border-zinc-700/50">
              <div className="mb-4 text-zinc-400">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.25m0 0v2.25m0 0h-4.5m4.5 0v-2.25m0 0a2.25 2.25 0 001.5-2.25M5 14.5v2.25m0 0c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-2.25m-6 0h6m6 1.5H3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">No projects found</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                No projects match your current filters. Try adjusting your search criteria.
              </p>
              <button 
                onClick={() => {
                  setActiveCategory(null);
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section with fixed button contrast */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50/50 dark:from-zinc-950 dark:to-zinc-900/50"></div>
        <div className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-zinc-200/50 dark:border-zinc-700/50 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create a high-performance, visually stunning solution that meets your business needs and exceeds your expectations.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 dark:bg-primary dark:text-black dark:hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 