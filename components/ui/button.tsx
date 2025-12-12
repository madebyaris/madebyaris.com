import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-white shadow-lg shadow-zinc-900/20 hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-xl",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600",
        outline:
          "border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 hover:border-zinc-300 text-zinc-900",
        secondary:
          "bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200",
        ghost: 
          "hover:bg-zinc-100 hover:text-zinc-900 text-zinc-600",
        link: 
          "text-orange-500 underline-offset-4 hover:underline",
        primary:
          "bg-gradient-to-b from-orange-400 to-orange-500 text-zinc-900 font-medium shadow-[0_15px_25px_-10px_rgba(248,113,22,0.7),inset_0_4px_8px_rgba(253,230,138,0.9),inset_0_-4px_8px_rgba(249,115,22,0.9)] hover:-translate-y-0.5 hover:shadow-[0_20px_30px_-10px_rgba(248,113,22,0.8),inset_0_4px_8px_rgba(253,230,138,0.9),inset_0_-4px_8px_rgba(249,115,22,0.9)]",
        "glass":
          "bg-white/50 backdrop-blur-sm border border-white/60 text-zinc-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:bg-white/70",
        // Legacy WordPress VIP variants (kept for compatibility)
        "wp-primary": 
          "bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200",
        "wp-secondary":
          "bg-transparent text-zinc-900 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200",
        "wp-outline":
          "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400 shadow-sm",
        "wp-navy":
          "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md hover:shadow-lg transition-all duration-200",
        "wp-sage":
          "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-lg px-6",
        xl: "h-12 rounded-full px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
