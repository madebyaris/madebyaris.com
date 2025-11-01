import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface EnhancedCardProps {
  children?: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'glass' | 'service'
  icon?: LucideIcon
  title?: string
  description?: string
  hover?: boolean
}

export function EnhancedCard({ 
  children, 
  className,
  variant = 'default',
  icon: Icon,
  title,
  description,
  hover = true
}: EnhancedCardProps) {
  const baseClasses = "relative overflow-hidden rounded-2xl transition-all duration-300"
  
  const variantClasses = {
    default: "bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200/70 dark:border-zinc-700/70",
    elevated: "card-wp-elevated shadow-wp-elevated dark:shadow-wp-elevated-dark border border-wp-sage/30 dark:border-wp-blue/20",
    glass: "bg-white/90 dark:bg-wp-navy/30 backdrop-blur-xl border border-gray-200/60 dark:border-wp-blue/20 shadow-xl",
    service: "bg-gradient-to-br from-wp-blue/5 to-transparent group-hover:from-wp-blue/10 border border-wp-blue/10 dark:border-wp-blue/20"
  }

  const hoverClasses = hover ? "hover:shadow-lg hover:scale-[1.02]" : ""

  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      hoverClasses,
      "group",
      className
    )}>
      {/* Background gradient overlay for service variant */}
      {variant === 'service' && (
        <div className="absolute inset-0 bg-gradient-to-br from-wp-blue/5 to-transparent group-hover:from-wp-blue/10 transition-all duration-300"></div>
      )}
      
      <div className="relative p-6 md:p-8 h-full flex flex-col">
        {/* Icon and Title Header */}
        {(Icon || title) && (
          <div className="mb-6">
            {Icon && (
              <div className="mb-4 p-4 bg-wp-blue/10 dark:bg-wp-blue/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-wp-blue" />
              </div>
            )}
            {title && (
              <h3 className="text-xl md:text-2xl font-bold text-wp-navy dark:text-foreground mb-2">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-wp-navy/70 dark:text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        
        {/* Content */}
        {children && (
          <div className="flex-grow">
            {children}
          </div>
        )}
      </div>
    </div>
  )
} 