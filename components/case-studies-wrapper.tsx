import Link from 'next/link'
import { ArrowRight, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fetchCaseStudies } from '@/lib/github'
import { CaseStudiesCarousel } from '@/components/case-studies-carousel'

export async function CaseStudiesWrapper() {
  const caseStudies = await fetchCaseStudies()

  // Fallback to empty state if no case studies
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="w-full mb-8">
        <div className="relative bg-white/90 dark:bg-wp-navy/30 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200/60 dark:border-wp-blue/20">
          <div className="text-center py-12">
            <p className="text-wp-navy/60 dark:text-muted-foreground">
              Loading case studies from GitHub...
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full mb-8">
      {/* Featured Case Studies */}
      <div className="relative">
        {/* Enhanced decorative background elements for light mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-wp-navy/20 dark:via-transparent dark:to-wp-gold/10 rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-wp-gold/5 via-transparent to-wp-blue/10 dark:from-wp-gold/10 dark:to-wp-blue/5 rounded-3xl"></div>
        
        {/* Enhanced glass container for better light mode appearance */}
        <div className="relative bg-white/90 dark:bg-wp-navy/30 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200/60 dark:border-wp-blue/20">
          {/* Section header inside container */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-wp-gold/20 to-wp-blue/20 text-wp-navy dark:bg-wp-blue/10 dark:text-wp-blue mb-4 backdrop-blur-sm border border-wp-gold/30 dark:border-wp-blue/20 shadow-sm">
              <Award className="w-5 h-5 text-wp-gold dark:text-wp-blue" />
              <span className="text-sm font-bold tracking-wider uppercase">Featured Section</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent dark:from-foreground dark:via-foreground dark:to-foreground dark:text-foreground">Featured Case Studies</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-muted-foreground max-w-2xl mx-auto font-medium">
              Explore real projects from my GitHub repositories with stars, forks, and technologies used
            </p>
          </div>
          
          <CaseStudiesCarousel caseStudies={caseStudies} />
          
          {/* Enhanced view all projects link */}
          <div className="text-center mt-6">
            <Button 
              asChild 
              variant="wp-secondary" 
              size="lg"
              className="bg-gradient-to-r from-wp-blue to-indigo-600 hover:from-wp-blue/90 hover:to-indigo-600/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:shadow-wp-glow-blue dark:hover:shadow-wp-glow-blue group"
            >
              <Link href="https://github.com/madebyaris" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add default export for better HMR support
export default CaseStudiesWrapper; 