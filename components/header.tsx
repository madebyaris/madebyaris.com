"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"
import { contactHref } from "@/lib/contact-services"
import { Menu, ArrowUpRight } from "lucide-react"
import dynamic from "next/dynamic"
import { HeaderNavDropdown } from "@/components/header-nav-dropdown"

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
      { href: '/ai-implementation', label: 'AI Engineering' },
      { href: '/services/ai-development/ai-integration', label: 'AI Integration' },
      { href: '/services/ai-development/ai-mvp', label: 'AI MVP' },
      { href: '/product-engineering', label: 'Product Engineering' },
      { href: '/services/vibe-code-friend', label: 'Cursor & AI Workflows' },
      { href: '/services/nextjs-development', label: 'Next.js Development' },
      { href: '/services/ai-search-geo-aeo', label: 'AI Search (GEO & AEO)' },
      { href: '/services/seo', label: 'Technical SEO' },
      { href: '/services/wordpress', label: 'WordPress & Headless' },
    ],
  },
  { href: '/guides/cursor', label: 'Guides' },
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

  const openDropdown = useCallback((href: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setActiveDropdown(href)
  }, [])

  const closeDropdown = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 180)
  }, [])

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const toggleSubmenu = (href: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [href]: !prev[href],
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

  const brandMark = (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0B0C0E] text-[#FAF9F6] font-mono text-xs font-semibold tracking-tight">
        MA
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-sm font-semibold tracking-tight text-[#0B0C0E]">
          MADEBYARIS
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#70747D] mt-0.5">
          AI · GEO · Systems
        </span>
      </div>
    </div>
  )

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-[#E6E4DD] bg-[#FAF9F6]/90 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-14 h-16 flex items-center justify-between">
          {brandMark}
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E6E4DD] bg-[#FAF9F6]/92 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-14 h-16 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="hover:opacity-85 transition-opacity shrink-0">
          {brandMark}
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-x-7 text-[13px] font-medium text-[#525660]"
        >
          {navigationItems.map((item) =>
            item.children ? (
              <HeaderNavDropdown
                key={item.href}
                href={item.href}
                label={item.label}
                items={item.children}
                pathname={pathname}
                isOpen={activeDropdown === item.href}
                onOpen={() => openDropdown(item.href)}
                onClose={closeDropdown}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'py-2 transition-colors hover:text-[#0B0C0E]',
                  pathname === item.href || pathname?.startsWith(item.href + '/')
                    ? 'text-[#0B0C0E] font-semibold'
                    : '',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right Status + Primary CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <span className="hidden lg:inline-flex items-center gap-2 font-mono text-[11px] text-[#525660]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            UTC+7 · EU/SG/ID
          </span>
          <Link
            href={contactHref('ai-implementation')}
            className="btn-primary inline-flex items-center gap-2 rounded-full py-2 px-4 text-xs font-medium tracking-tight group"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg border border-[#E6E4DD] bg-white hover:bg-[#F3F1EB] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <Menu className="h-5 w-5 text-[#0B0C0E]" />
        </button>

        {/* Mobile Navigation Overlay */}
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          pathname={pathname}
          navigationItems={navigationItems}
          expandedItems={expandedItems}
          toggleSubmenu={toggleSubmenu}
        />
      </div>
    </header>
  )
}
