import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Adapted from ReUI (radix-sera) Badge primitive, aligned to MadeByAris tokens.
 */
const reuiBadgeVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-1.5 border font-mono whitespace-nowrap transition-colors [&>svg]:size-3 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        paper: 'border-[#E5E7EB] bg-white text-[#4B5563]',
        subtle: 'border-[#E5E7EB] bg-[#F8FAFC] text-[#374151]',
        obsidian: 'border-[#0B0C0E] bg-[#0B0C0E] text-white',
        signal: 'border-[#DDE4FF] bg-[#EEF2FF] text-[#3A57FC]',
        emerald: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-700',
        darkGlass: 'border-white/15 bg-[#0D0F14]/85 text-zinc-200 backdrop-blur-md',
      },
      size: {
        xs: 'rounded-md px-2 py-0.5 text-[10px] tracking-[0.08em]',
        sm: 'rounded-md px-2.5 py-1 text-[11px] tracking-[0.06em]',
        pill: 'rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.12em]',
      },
    },
    defaultVariants: {
      variant: 'paper',
      size: 'sm',
    },
  }
)

function ReuiBadge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof reuiBadgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      data-slot="badge"
      className={cn(reuiBadgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { ReuiBadge, reuiBadgeVariants }
