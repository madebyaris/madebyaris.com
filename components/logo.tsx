import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn(
      "font-bold text-2xl text-foreground",
      className
    )}>
      MadeByAris
    </Link>
  )
} 