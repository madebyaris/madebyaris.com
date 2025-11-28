import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Layers } from 'lucide-react'

export function Logo({ className }: { className?: string }) {
  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-2 text-zinc-900 hover:opacity-80 transition-opacity",
        className
      )}
    >
      <div className="flex text-white bg-gradient-to-b from-black/60 to-black/20 w-8 h-8 rounded-full items-center justify-center">
        <Layers className="w-4 h-4" />
      </div>
      <span className="text-lg font-medium tracking-tight">
        MADE<span className="text-zinc-400">BYARIS</span>
      </span>
    </Link>
  )
}
