'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

const EASE_ARCHITECTURAL = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 16 }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.42, delay, ease: EASE_ARCHITECTURAL }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: EASE_ARCHITECTURAL },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SpotlightSurfaceProps {
  children: ReactNode
  className?: string
  tone?: 'obsidian' | 'paper'
}

/**
 * Mouse-tracking architectural hairline glow for dark blueprint cards or warm paper panels.
 */
export function SpotlightSurface({
  children,
  className,
  tone = 'obsidian',
}: SpotlightSurfaceProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn('group/spot relative overflow-hidden', className)}
    >
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100',
          tone === 'obsidian'
            ? 'bg-[radial-gradient(420px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),rgba(217,72,30,0.16),transparent_65%)]'
            : 'bg-[radial-gradient(380px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),rgba(217,72,30,0.08),transparent_65%)]'
        )}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

/**
 * Thin vermilion reading progress indicator pinned at top of long-form articles.
 */
export function ScrollReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  })
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-16 left-0 right-0 z-40 h-[2px] origin-left bg-[#FF8800]"
    />
  )
}
