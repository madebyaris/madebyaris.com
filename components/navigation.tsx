'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface NavigationItem {
  href: string
  label: string
  children?: NavigationItem[]
}

const navigationItems: NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { 
    href: '/services', 
    label: 'Services',
    children: [
      { href: '/services/nextjs-development', label: 'Next.js Development' },
      { href: '/services/wordpress', label: 'WordPress Development' },
      { href: '/services/php-development', label: 'PHP Development' },
      { href: '/services/vibe-code-friend', label: 'Vibe Code Friend' },
    ]
  },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe', label: 'Hire Me' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({})

  // Toggle submenu expansion
  const toggleSubmenu = (href: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [href]: !prev[href]
    }))
  }

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
          <div key={item.href} className="relative group">
            <Link
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-foreground/80 flex items-center',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {item.label}
              {item.children && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 ml-1"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              )}
            </Link>

            {item.children && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-background border opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible">
                <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      'block px-4 py-2 text-sm transition-colors hover:text-foreground/80 hover:bg-accent',
                      pathname === child.href
                        ? 'text-foreground'
                        : 'text-foreground/60'
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
                    <div key={item.href} className="w-full text-center">
                      {item.children ? (
                        // For items with children, make the parent a button that toggles the submenu
                        <button
                          onClick={() => toggleSubmenu(item.href)}
                          className={cn(
                            'text-3xl font-medium transition-colors hover:text-foreground/80 inline-flex items-center',
                            pathname && (pathname === item.href || pathname.startsWith(item.href + '/'))
                              ? 'text-foreground'
                              : 'text-foreground/60'
                          )}
                        >
                          {item.label}
                          {expandedItems[item.href] ? (
                            <ChevronUp className="w-6 h-6 ml-2" />
                          ) : (
                            <ChevronDown className="w-6 h-6 ml-2" />
                          )}
                        </button>
                      ) : (
                        // For items without children, keep as a link
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'text-3xl font-medium transition-colors hover:text-foreground/80 inline-flex items-center',
                            pathname === item.href
                              ? 'text-foreground'
                              : 'text-foreground/60'
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                      
                      {/* Submenu items - only show if expanded */}
                      {item.children && expandedItems[item.href] && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                'block text-2xl font-medium transition-colors hover:text-foreground/80',
                                pathname === child.href
                                  ? 'text-foreground'
                                  : 'text-foreground/60'
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
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
