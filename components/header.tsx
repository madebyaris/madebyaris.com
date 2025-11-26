"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown, ArrowRight, Layers } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NavigationItem {
  href: string
  label: string
  children?: NavigationItem[]
  external?: boolean
}

const navigationItems: NavigationItem[] = [
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
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [mounted, setMounted] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleDropdownEnter = (href: string | null) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setActiveDropdown(href)
  }

  const handleDropdownLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 200)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // Toggle submenu expansion
  const toggleSubmenu = (href: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [href]: !prev[href]
    }))
  }

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) {
    return (
      <header className="flex md:mb-16 md:gap-0 z-10 mb-10 relative gap-x-6 gap-y-6 items-center justify-between pt-6 md:pt-10 xl:pt-12 px-6 md:px-10 xl:px-12">
        <div className="flex items-center gap-2 text-zinc-900">
          <div className="flex text-white bg-gradient-to-b from-black/60 to-black/20 w-8 h-8 rounded-full items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-lg font-medium tracking-tight">MADE<span className="text-zinc-400">BYARIS</span></span>
        </div>
      </header>
    )
  }

  return (
    <header className="flex md:mb-16 md:gap-0 z-10 mb-10 relative gap-x-6 gap-y-6 items-center justify-between pt-6 md:pt-10 xl:pt-12 px-6 md:px-10 xl:px-12">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-zinc-900 hover:opacity-80 transition-opacity">
        <div 
          className="flex text-white bg-gradient-to-b from-black/60 to-black/20 w-8 h-8 rounded-full items-center justify-center relative"
          style={{
            position: 'relative',
            // @ts-expect-error CSS custom properties
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1))',
            '--border-radius-before': '9999px'
          }}
        >
          <Layers className="w-4 h-4" />
        </div>
        <span className="text-lg font-medium tracking-tight">MADE<span className="text-zinc-400">BYARIS</span></span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex uppercase text-xs font-medium text-zinc-500 tracking-widest glass-nav rounded-full py-2 px-6 gap-x-8 items-center">
        {navigationItems.map((item) => (
          <div 
            key={item.href} 
            className="relative"
            onMouseEnter={() => handleDropdownEnter(item.children ? item.href : null)}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href={item.href}
              className={cn(
                "hover:text-zinc-900 transition-colors duration-300 flex items-center gap-1 py-2",
                pathname === item.href || pathname?.startsWith(item.href + '/')
                  ? "text-zinc-900"
                  : ""
              )}
            >
              {item.label}
              {item.children && (
                <ChevronDown className="w-3 h-3" />
              )}
            </Link>

            {/* Dropdown menu */}
            {item.children && (
              <>
                <div 
                  className="absolute left-0 right-0 top-full h-4"
                  onMouseEnter={() => handleDropdownEnter(item.href)}
                  onMouseLeave={handleDropdownLeave}
                />
                {activeDropdown === item.href && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-60 z-50"
                    onMouseEnter={() => handleDropdownEnter(item.href)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="rounded-xl shadow-xl py-2 bg-white border border-zinc-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-5 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-zinc-50 hover:text-orange-500 normal-case",
                            pathname === child.href
                              ? "text-orange-500 bg-zinc-50"
                              : "text-zinc-600"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>

      {/* CTA Button - Upwork Style matching View Projects */}
      <Link 
        href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe" 
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 group text-sm font-medium text-white tracking-tight rounded-full py-3 px-6 transition-all hover:-translate-y-0.5 hover:shadow-2xl relative"
        style={{
          background: 'linear-gradient(to bottom, rgba(20, 168, 0, 0.9), rgba(13, 122, 0, 1))',
          boxShadow: '0 18px 35px rgba(20, 168, 0, 0.35), 0 0 0 1px rgba(20, 168, 0, 0.3)',
        }}
      >
        <span className="text-sm font-medium tracking-tight">Hire Me</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 hover:bg-zinc-100 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6 text-zinc-900" />
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden fixed inset-0 min-h-screen w-screen z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-white/30 backdrop-blur-[20px]"
              onClick={() => setIsOpen(false)}
            />

            {/* Full Screen Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute inset-0 glass-panel"
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6 z-50">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-zinc-900" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex min-h-screen items-center justify-center pt-16 px-6">
                <nav className="flex flex-col items-center justify-center space-y-6 w-full">
                  {/* Home link */}
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-3xl font-light tracking-tight transition-colors hover:text-orange-500",
                      pathname === '/' ? "text-orange-500" : "text-zinc-900"
                    )}
                  >
                    Home
                  </Link>
                  
                  {navigationItems.map((item) => (
                    <div key={item.href} className="text-center">
                      {item.children ? (
                        <>
                          <button
                            onClick={() => toggleSubmenu(item.href)}
                            className={cn(
                              "text-3xl font-light tracking-tight transition-colors hover:text-orange-500 inline-flex items-center gap-2",
                              pathname?.startsWith(item.href)
                                ? "text-orange-500"
                                : "text-zinc-900"
                            )}
                          >
                            {item.label}
                            <ChevronDown 
                              className={cn(
                                "w-6 h-6 transition-transform",
                                expandedItems[item.href] && "rotate-180"
                              )} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {expandedItems[item.href] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 space-y-3 overflow-hidden"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                      "block text-xl font-light transition-colors hover:text-orange-500",
                                      pathname === child.href
                                        ? "text-orange-500"
                                        : "text-zinc-500"
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-3xl font-light tracking-tight transition-colors hover:text-orange-500",
                            pathname === item.href
                              ? "text-orange-500"
                              : "text-zinc-900"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Hire Me CTA in mobile */}
                  <Link
                    href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="mt-8 rounded-full py-4 px-10 text-base font-semibold flex items-center gap-3 text-white"
                    style={{
                      background: 'linear-gradient(135deg, #14a800 0%, #0d7a00 100%)',
                      boxShadow: '0 10px 30px rgba(20, 168, 0, 0.4)',
                    }}
                  >
                    Hire Me on Upwork
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </nav>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}
