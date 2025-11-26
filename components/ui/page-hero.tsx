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
  compact?: boolean
}

export function PageHero({ 
  badge, 
  title, 
  description, 
  className,
  variant = 'default',
  children,
  compact = false
}: PageHeroProps) {
  const IconComponent = badge?.icon

  return (
    <section
      className={cn(
        "w-full relative overflow-hidden pb-16 pt-8",
        compact ? "pb-12" : "pb-20",
        className
      )}
    >
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div 
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm mb-8 shadow-sm"
              style={{
                position: 'relative',
                // @ts-expect-error CSS custom properties
                '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
                '--border-radius-before': '9999px'
              }}
            >
              {IconComponent && <IconComponent className="w-4 h-4 text-orange-500" />}
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">{badge.text}</span>
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6 leading-[0.95] text-zinc-900">
            {typeof title === 'string' ? title : title}
          </h1>
          
          {/* Description */}
          {description && (
            <div className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              {description}
            </div>
          )}
          
          {/* Children (CTA buttons, etc.) */}
          {children && (
            <div className="flex flex-wrap justify-center gap-3">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
