/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-wp-navy/20 dark:border-wp-navy/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-center">
        <div className="flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left section with Navigation */}
          <div className="md:hidden">
            <Navigation />
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center md:flex-none">
            <Link href="/" className="font-bold text-2xl md:text-3xl text-wp-navy dark:text-wp-gold">
              MadeByAris
            </Link>
          </div>

          {/* Desktop Navigation and Theme Toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <Navigation />
            </div>
            <Link
              href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
              className="hidden md:block text-base font-semibold text-wp-gold hover:text-wp-blue transition-colors duration-200"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
