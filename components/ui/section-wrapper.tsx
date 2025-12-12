import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface SectionWrapperProps {
  children?: ReactNode
  className?: string
  variant?: 'default' | 'accent' | 'featured' | 'gradient' | 'dark'
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
    default: 'py-16 md:py-20',
    large: 'py-20 md:py-28',
    small: 'py-10 md:py-14'
  }

  const backgroundClasses = {
    default: 'bg-transparent',
    accent: 'bg-zinc-50/50',
    featured: 'bg-gradient-to-b from-zinc-50/50 to-transparent',
    gradient: 'bg-gradient-to-b from-zinc-50/80 via-white to-zinc-50/50',
    dark: 'bg-zinc-900 text-white'
  }

  return (
    <section 
      id={id}
      className={cn(
        "w-full relative",
        backgroundClasses[variant],
        paddingClasses[padding],
        className
      )}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        {(badge || title || description) && (
          <div className="mb-12 text-center">
            {/* Badge */}
            {badge && (
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm mb-6 shadow-sm"
                style={{
                  position: 'relative',
                  // @ts-expect-error CSS custom properties
                  '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
                  '--border-radius-before': '9999px'
                }}
              >
                {IconComponent && <IconComponent className="w-4 h-4 text-orange-500" />}
                <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500">{badge.text}</span>
              </div>
            )}
            
            {/* Title */}
            {title && (
              <h2 className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter mb-4",
                variant === 'dark' ? 'text-white' : 'text-zinc-900'
              )}>
                {typeof title === 'string' ? (
                  <span>{title}</span>
                ) : (
                  title
                )}
              </h2>
            )}
            
            {/* Description */}
            {description && (
              <p className={cn(
                "text-base max-w-2xl mx-auto leading-relaxed font-medium",
                variant === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
              )}>
                {description}
              </p>
            )}
          </div>
        )}
        
        {/* Content */}
        {children}
      </div>
    </section>
  )
}
