import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Adapted from ReUI (radix-sera) Alert primitive for status banners and form feedback.
 */
const reuiAlertVariants = cva(
  'relative grid w-full grid-cols-[0_1fr] items-start gap-y-1 rounded-xl border px-4 py-3.5 text-sm has-[>svg]:grid-cols-[1rem_1fr] has-[>svg]:gap-x-3 [&>svg]:mt-0.5 [&>svg]:size-4',
  {
    variants: {
      variant: {
        default: 'border-[#E5E7EB] bg-white text-[#0B0C0E] [&>svg]:text-[#4B5563]',
        signal: 'border-[#DDE4FF] bg-[#EEF2FF] text-[#0B0C0E] [&>svg]:text-[#3A57FC]',
        success: 'border-emerald-600/25 bg-emerald-50/70 text-[#0B0C0E] [&>svg]:text-emerald-700',
        destructive: 'border-red-600/25 bg-red-50/70 text-red-950 [&>svg]:text-red-600',
        obsidian: 'border-white/10 bg-[#0D0F14] text-white [&>svg]:text-[#FFB866]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function ReuiAlert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof reuiAlertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(reuiAlertVariants({ variant }), className)}
      {...props}
    />
  )
}

function ReuiAlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('col-start-2 font-display text-sm font-semibold tracking-tight', className)}
      {...props}
    />
  )
}

function ReuiAlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn('col-start-2 text-xs leading-relaxed opacity-85', className)}
      {...props}
    />
  )
}

export { ReuiAlert, ReuiAlertTitle, ReuiAlertDescription, reuiAlertVariants }
