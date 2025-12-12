import React, { ReactNode } from 'react'

interface FeatureItem {
  title: string
  description: string
  icon?: ReactNode
}

interface FeatureGridProps {
  items: FeatureItem[]
  className?: string
}

export function FeatureGrid({ items, className }: FeatureGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className ?? ''}`}>
      {items.map((item) => (
        <article
          key={item.title}
          className="group relative overflow-hidden rounded-2xl border border-wp-blue/20 dark:border-wp-blue/30 bg-white/80 dark:bg-wp-navy/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
        >
          <div className="relative p-6 md:p-8">
            {/* Icon */}
            {item.icon && (
              <div className="mb-5 inline-flex items-center justify-center rounded-xl p-3 bg-gradient-to-br from-wp-blue/10 to-wp-sage/10 dark:from-wp-blue/20 dark:to-wp-sage/20 text-wp-blue">
                {item.icon}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-wp-navy dark:text-foreground mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-wp-navy/70 dark:text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Subtle overlay on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-transparent to-wp-blue/5" />
        </article>
      ))}
    </div>
  )
}

export default FeatureGrid


