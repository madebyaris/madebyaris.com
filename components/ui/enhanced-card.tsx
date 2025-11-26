import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface EnhancedCardProps {
  children?: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'glass' | 'service' | 'bento'
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
    default: "bg-white/80 backdrop-blur-sm border border-zinc-200/60 shadow-sm",
    elevated: "bg-white border border-zinc-200/60 shadow-lg",
    glass: "bg-white/60 backdrop-blur-xl border border-zinc-200/40 shadow-md",
    service: "bg-white/80 backdrop-blur-sm border border-zinc-200/60",
    bento: "bento-card group"
  }

  const hoverClasses = hover && variant !== 'bento' ? "hover:shadow-xl hover:-translate-y-0.5" : ""

  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      hoverClasses,
      "group",
      className
    )}>
      <div className="relative p-6 md:p-8 h-full flex flex-col">
        {/* Icon and Title Header */}
        {(Icon || title) && (
          <div className="mb-4">
            {Icon && (
              <div className="mb-4 p-3 bg-zinc-100 rounded-xl w-fit group-hover:bg-orange-100 transition-colors">
                <Icon className="w-6 h-6 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
            )}
            {title && (
              <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-2 tracking-tight group-hover:text-orange-500 transition-colors">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-zinc-500 leading-relaxed font-medium">
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
