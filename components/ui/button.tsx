import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "wp-primary": 
          "bg-wp-gold text-wp-gold-foreground border border-wp-gold shadow-[0_2px_4px_-1px_hsl(var(--wp-gold)/0.3)] hover:bg-[hsl(35_55%_50%)] hover:transform hover:-translate-y-0.5 hover:shadow-[0_4px_8px_-2px_hsl(var(--wp-gold)/0.4)] transition-all duration-200",
        "wp-secondary":
          "bg-transparent text-wp-blue border-[1.5px] border-wp-blue hover:bg-wp-blue hover:text-wp-blue-foreground hover:transform hover:-translate-y-0.5 transition-all duration-200",
        "wp-outline":
          "border border-wp-sage bg-background text-wp-sage-foreground hover:bg-wp-sage hover:text-wp-sage-foreground shadow-sm",
        "wp-navy":
          "bg-wp-navy text-wp-navy-foreground hover:bg-wp-navy/90 shadow-md hover:shadow-lg transition-all duration-200",
        "wp-sage":
          "bg-wp-sage text-wp-sage-foreground hover:bg-wp-sage/90 border border-wp-sage/50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-lg",
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
