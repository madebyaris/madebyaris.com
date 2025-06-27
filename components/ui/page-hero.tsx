import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface PageHeroProps {
  badge?: {
    text: string
    icon?: LucideIcon
  }
  title: string | ReactNode
  description?: string | ReactNode
  className?: string
  variant?: 'default' | 'services' | 'about' | 'contact'
  children?: ReactNode
}

export function PageHero({ 
  badge, 
  title, 
  description, 
  className,
  variant = 'default',
  children 
}: PageHeroProps) {
  const IconComponent = badge?.icon

  return (
    <section className={cn(
      "w-full min-h-[calc(100vh-5rem)] relative overflow-hidden",
      className
    )}>
      {/* Background gradients based on variant */}
      <div className="absolute inset-0 -z-10">
        {variant === 'default' && (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 via-blue-50/30 to-zinc-100/50 dark:from-zinc-900/50 dark:via-blue-900/10 dark:to-zinc-900/50" />
        )}
        {variant === 'services' && (
          <div className="absolute inset-0 bg-gradient-wp-hero-light dark:bg-gradient-wp-hero" />
        )}
        {variant === 'about' && (
          <div className="absolute inset-0 bg-gradient-to-br from-wp-sage/20 via-wp-blue/5 to-wp-gold/10 dark:from-wp-navy/30 dark:via-wp-blue/10 dark:to-wp-gold/5" />
        )}
        {variant === 'contact' && (
          <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/10 via-transparent to-wp-gold/10 dark:from-wp-navy/20 dark:via-transparent dark:to-wp-blue/10" />
        )}
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wp-gold/20 dark:bg-wp-blue/20 text-wp-navy dark:text-wp-blue mb-6 backdrop-blur-sm border border-wp-gold/30 dark:border-wp-blue/20 shadow-sm">
                {IconComponent && <IconComponent className="w-5 h-5 text-wp-gold dark:text-wp-blue" />}
                <span className="text-sm font-bold tracking-wider uppercase">{badge.text}</span>
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {typeof title === 'string' ? (
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent dark:from-foreground dark:via-foreground dark:to-foreground dark:text-foreground">
                  {title}
                </span>
              ) : (
                title
              )}
            </h1>
            
            {/* Description */}
            {description && (
              <div className="text-lg md:text-xl text-gray-700 dark:text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                {description}
              </div>
            )}
            
            {/* Children (CTA buttons, etc.) */}
            {children && (
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 