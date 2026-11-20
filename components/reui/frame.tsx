import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Architectural Frame system tuned to MadeByAris crisp slate, cobalt, and obsidian hairlines.
 */
const frameVariants = cva(
  [
    'relative flex flex-col gap-(--frame-gap) px-(--frame-px) py-(--frame-py) rounded-(--frame-radius)',
    '[--frame-radius:1rem]',
    '[--frame-gap:0.25rem] [--frame-px:0.25rem] [--frame-py:0.25rem]',
    '[--frame-panel-radius:calc(var(--frame-radius)-var(--frame-px)-1px)]',
  ],
  {
    variants: {
      variant: {
        default:
          'border border-[#E5E7EB] bg-[#F8FAFC] [--frame-panel-bg:#FFFFFF] [--frame-panel-border:#E5E7EB]',
        paper:
          'border border-[#E5E7EB] bg-[#F8FAFC] [--frame-panel-bg:#FFFFFF] [--frame-panel-border:#E5E7EB]',
        obsidian:
          'border border-white/10 bg-[#0B0C0E] text-white [--frame-panel-bg:#12151E] [--frame-panel-border:rgba(255,255,255,0.1)]',
        ghost:
          'bg-transparent [--frame-panel-bg:#FFFFFF] [--frame-panel-border:#E5E7EB]',
      },
      spacing: {
        sm: '[--frame-panel-px:1rem] [--frame-panel-py:1rem]',
        default: '[--frame-panel-px:1.5rem] [--frame-panel-py:1.5rem]',
        lg: '[--frame-panel-px:1.75rem] [--frame-panel-py:1.75rem] md:[--frame-panel-px:2rem] md:[--frame-panel-py:2rem]',
      },
      stacked: {
        true: [
          'gap-0',
          '*:has-[+[data-slot=frame-panel]]:rounded-b-none',
          '*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:rounded-t-none',
          '*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:border-t-0',
        ],
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      spacing: 'default',
      stacked: false,
    },
  }
)

function Frame({
  className,
  variant,
  spacing,
  stacked,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof frameVariants>) {
  return (
    <div
      data-slot="frame"
      className={cn(frameVariants({ variant, spacing, stacked }), className)}
      {...props}
    />
  )
}

function FramePanel({
  className,
  fit,
  ...props
}: React.ComponentProps<'div'> & { fit?: boolean }) {
  return (
    <div
      data-slot="frame-panel"
      className={cn(
        'relative overflow-hidden rounded-(--frame-panel-radius) border border-(--frame-panel-border) bg-(--frame-panel-bg) px-(--frame-panel-px) py-(--frame-panel-py)',
        !fit && 'grow',
        className
      )}
      {...props}
    />
  )
}

function FrameHeader({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="frame-header"
      className={cn('flex flex-col gap-1 px-4 py-3 sm:px-5', className)}
      {...props}
    />
  )
}

function FrameTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="frame-title"
      className={cn('font-display text-sm font-semibold tracking-tight text-current', className)}
      {...props}
    />
  )
}

function FrameDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="frame-description"
      className={cn('text-xs text-[#4B5563]', className)}
      {...props}
    />
  )
}

function FrameFooter({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="frame-footer"
      className={cn('flex items-center justify-between gap-3 px-4 py-3 sm:px-5', className)}
      {...props}
    />
  )
}

export {
  Frame,
  FramePanel,
  FrameHeader,
  FrameTitle,
  FrameDescription,
  FrameFooter,
  frameVariants,
}
