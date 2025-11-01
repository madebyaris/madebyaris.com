import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface SectionWrapperProps {
  children?: ReactNode
  className?: string
  variant?: 'default' | 'accent' | 'featured' | 'gradient'
  padding?: 'default' | 'large' | 'small'
  badge?: {
    text: string
    icon?: LucideIcon
  }
  title?: string | ReactNode
  description?: string | ReactNode
  id?: string
}

export function SectionWrapper({ 
  children, 
  className,
  variant = 'default',
  padding = 'default',
  badge,
  title,
  description,
  id
}: SectionWrapperProps) {
  const IconComponent = badge?.icon

  const paddingClasses = {
    default: 'py-20 md:py-24',
    large: 'py-24 md:py-32',
    small: 'py-12 md:py-16'
  }

  const backgroundClasses = {
    default: 'bg-background',
    accent: 'bg-wp-sage/30 dark:bg-wp-navy/50',
    featured: 'bg-gradient-to-br from-background via-wp-sage/10 to-wp-blue/5 dark:from-background dark:via-wp-navy/20 dark:to-wp-gold/5',
    gradient: 'bg-gradient-wp-hero-light dark:bg-gradient-wp-hero'
  }

  return (
    <section 
      id={id}
      className={cn(
        "w-full relative overflow-hidden cv-auto",
        backgroundClasses[variant],
        paddingClasses[padding],
        className
      )}
    >
      {/* Background decorative elements for featured variant */}
      {variant === 'featured' && (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-wp-sage/10 to-wp-blue/5 dark:from-background dark:via-wp-navy/20 dark:to-wp-gold/5"></div>
      )}
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        {(badge || title || description) && (
          <div className="relative mb-16 text-center">
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wp-blue/10 text-wp-blue dark:bg-wp-gold/10 dark:text-wp-gold mb-6 backdrop-blur-sm">
                {IconComponent && <IconComponent className="w-4 h-4" />}
                <span className="text-sm font-semibold tracking-wider uppercase">{badge.text}</span>
              </div>
            )}
            
            {/* Title */}
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {typeof title === 'string' ? (
                  <span className="text-wp-navy dark:text-foreground">{title}</span>
                ) : (
                  title
                )}
              </h2>
            )}
            
            {/* Description */}
            {description && (
              <p className="text-lg text-wp-navy/70 dark:text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
            
            {/* Decorative line */}
            {title && (
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-wp-gold to-wp-blue rounded-full"></div>
            )}
          </div>
        )}
        
        {/* Content */}
        {children}
      </div>
    </section>
  )
} 