'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface NavigationItem {
  href: string
  label: string
}

const navigationItems: NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe', label: 'Hire Me' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        {navigationItems.slice(0, -1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-foreground/80',
              pathname === item.href
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 min-h-screen w-screen z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-[20px]"
            onClick={() => setIsOpen(false)}
          />

          {/* Full Screen Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-2xl"
          >
            {/* Close Button - Updated positioning and z-index */}
            <div className="absolute top-4 right-4 z-50 w-full max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="hover:bg-white/20 dark:hover:bg-black/20"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Navigation Links - Updated with max-width container */}
            <div className="flex min-h-screen items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-xl pt-16">
              <div className="w-full max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex flex-col items-center justify-center space-y-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-3xl font-medium transition-colors hover:text-foreground/80',
                        pathname === item.href
                          ? 'text-foreground'
                          : 'text-foreground/60'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
