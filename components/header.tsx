"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { contactHref } from "@/lib/contact-services"
import { Menu, ChevronDown, ArrowRight, Layers } from "lucide-react"
import dynamic from "next/dynamic"

const MobileMenu = dynamic(() => import("./mobile-menu"), { ssr: false })

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
      { href: '/services/ai-development', label: 'AI Development' },
      { href: '/services/saas-development', label: 'SaaS Development' },
      { href: '/services/seo', label: 'Technical SEO' },
      { href: '/services/wordpress', label: 'WordPress Development' },
      { href: '/services/vibe-code-friend', label: 'Cursor / AI Workflows' },
      { href: '/services/php-development', label: 'PHP Development' },
    ]
  },
  { href: '/guides/cursor', label: 'Guides' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleSubmenu = (href: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [href]: !prev[href]
    }))
  }

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

  const headerClass =
    "flex md:mb-16 md:gap-0 z-50 mb-10 relative gap-x-6 gap-y-6 items-center justify-between pt-6 md:pt-10 xl:pt-12 px-6 md:px-10 xl:px-12"

  return (
    <header className={headerClass}>
      <Link href="/" className="flex items-center gap-2 text-zinc-900 hover:opacity-80 transition-opacity">
        <div 
          className="flex text-white bg-linear-to-b from-black/60 to-black/20 w-8 h-8 rounded-full items-center justify-center relative"
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

      <nav className="hidden md:flex uppercase text-xs font-medium text-zinc-500 tracking-widest glass-nav rounded-full py-2 px-6 gap-x-8 items-center">
        {navigationItems.map((item) => (
          <div key={item.href} className="relative group">
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

            {item.children && (
              <>
                <div className="absolute left-0 right-0 top-full h-4" aria-hidden="true" />
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-60 z-50 opacity-0 invisible pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto">
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
              </>
            )}
          </div>
        ))}
      </nav>

      <Link 
        href={contactHref('nextjs')}
        className="hidden md:flex btn-primary items-center gap-2 group text-sm font-medium text-zinc-900 tracking-tight rounded-full py-3 px-6 transition-all hover:-translate-y-0.5"
      >
        <span className="text-sm font-medium tracking-tight">Hire me</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

      <button
        className="md:hidden p-2 hover:bg-zinc-100 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6 text-zinc-900" />
      </button>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pathname={pathname}
        navigationItems={navigationItems}
        expandedItems={expandedItems}
        toggleSubmenu={toggleSubmenu}
      />
    </header>
  )
}
