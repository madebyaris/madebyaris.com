/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-center">
        <div className="flex w-full max-w-[980px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left section with Navigation */}
          <div className="md:hidden">
            <Navigation />
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center md:flex-none">
            <Link href="/" className="font-bold text-lg">
              MadeByAris
            </Link>
          </div>

          {/* Desktop Navigation and Theme Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Navigation />
            </div>
            <Link
              href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
              className="hidden md:block text-sm font-medium hover:text-foreground/80"
            >
              Hire Me
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
