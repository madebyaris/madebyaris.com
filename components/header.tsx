"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { contactHref } from "@/lib/contact-services"
import { Menu, ArrowUpRight } from "lucide-react"
import dynamic from "next/dynamic"
import { HeaderNavDropdown } from "@/components/header-nav-dropdown"
import { getRouteChrome } from "@/lib/chrome-routes"
import arisPortrait from "@/public/aris.png"
import logoMark from "@/public/images/logo-mark.png"

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
  const routeChrome = getRouteChrome(pathname)
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openDropdown = useCallback((href: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setActiveDropdown(href)
  }, [])

  const closeDropdown = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 180)
  }, [])

  const closeDropdownImmediate = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setActiveDropdown(null)
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

  const useDarkChrome = routeChrome !== 'light' && !scrolled
  const useCobaltChrome = useDarkChrome
  const headerBgClass =
    routeChrome === 'obsidian' && !scrolled
      ? 'bg-[#07080C] border-b border-white/10 text-white'
      : routeChrome === 'cobalt' && !scrolled
        ? 'bg-[#3A57FC] border-b border-white/10 text-white'
        : scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_6px_24px_-16px_rgba(11,12,14,0.16)] text-[#0B0C0E]'
          : 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] text-[#0B0C0E]'

  const brandMark = (
    <div className="flex items-center gap-2.5">
      <div
        className={cn(
          'relative h-9 w-9 rounded-lg bg-white overflow-hidden shrink-0 transition-all',
          useCobaltChrome
            ? 'ring-1 ring-white/40 shadow-[0_4px_12px_rgba(11,12,14,0.22)]'
            : 'ring-1 ring-[#E5E7EB] shadow-xs'
        )}
      >
        <Image
          src={logoMark}
          alt="MadeByAris astronaut logo"
          fill
          priority
          sizes="36px"
          className="object-contain p-0.5"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-base font-bold tracking-tight transition-colors',
            useCobaltChrome ? 'text-white' : 'text-[#0B0C0E]'
          )}
        >
          madebyaris
        </span>
        <span
          className={cn(
            'font-mono text-[9.5px] uppercase tracking-[0.14em] mt-0.5 transition-colors',
            useCobaltChrome ? 'text-white/75' : 'text-[#6B7280]'
          )}
        >
          AI Development Agency
        </span>
      </div>
    </div>
  )

  return (
    <>
      {/* Top Founder / Agency Owner Announcement Strip (Ahrefs-inspired) */}
      <div className="w-full bg-[#0B0C0E] text-white border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 py-2.5 flex flex-wrap items-center justify-center md:justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative h-6 w-6 rounded-full overflow-hidden border border-white/25 shrink-0">
              <Image
                src={arisPortrait}
                alt="Aris Setiawan"
                fill
                sizes="24px"
                className="object-cover object-top"
              />
            </div>
            <p className="text-zinc-200 leading-snug truncate">
              <span className="font-semibold text-white">
                &ldquo;Production AI systems need real engineering, evals, and spend caps.&rdquo;
              </span>
              <span className="hidden sm:inline text-zinc-400 ml-2">
                Aris Setiawan, Founder &amp; Owner
              </span>
            </p>
          </div>
          <Link
            href={contactHref('ai-implementation')}
            className="inline-flex items-center gap-1.5 rounded bg-[#E6D97A] hover:bg-[#FF8800] text-[#0B0C0E] hover:text-white px-3 py-1 text-[11px] font-semibold transition-colors shrink-0"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main Sticky Header: Seamless Electric Cobalt or Obsidian on Full-Bleed Heroes -> Crisp White on Scroll & Light Pages */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-200',
          headerBgClass
        )}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/" className="hover:opacity-90 transition-opacity shrink-0">
            {brandMark}
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className={cn(
              'hidden md:flex items-center gap-x-7 text-[13.5px] font-medium',
              useCobaltChrome ? 'text-white/90' : 'text-[#4B5563]'
            )}
          >
            {navigationItems.map((item) => {
              const isActive =
                pathname === item.href || pathname?.startsWith(item.href + '/')
              return item.children ? (
                <HeaderNavDropdown
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  items={item.children}
                  pathname={pathname}
                  isOpen={activeDropdown === item.href}
                  onOpen={() => openDropdown(item.href)}
                  onClose={closeDropdown}
                  onCloseImmediate={closeDropdownImmediate}
                  variant={useCobaltChrome ? 'cobalt' : 'light'}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative py-2 transition-colors',
                    useCobaltChrome
                      ? isActive
                        ? 'text-white font-semibold'
                        : 'hover:text-white'
                      : isActive
                        ? 'text-[#0B0C0E] font-semibold'
                        : 'hover:text-[#0B0C0E]'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="header-active-indicator"
                      transition={{ type: 'spring', stiffness: 450, damping: 34 }}
                      className={cn(
                        'absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full',
                        useCobaltChrome ? 'bg-[#FF8800]' : 'bg-[#3A57FC]'
                      )}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-3.5 shrink-0">
            <span
              className={cn(
                'hidden lg:inline-flex items-center gap-2 font-mono text-[11px]',
                useCobaltChrome ? 'text-white/80' : 'text-[#6B7280]'
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              UTC+7 · EU/SG/ID
            </span>
            <Link
              href={contactHref('ai-implementation')}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md py-2 px-4 text-xs font-semibold tracking-tight transition-all group',
                useCobaltChrome
                  ? 'border border-white/45 bg-white/10 text-white hover:bg-[#FF8800] hover:border-[#FF8800]'
                  : 'btn-primary'
              )}
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'md:hidden p-2 rounded-md border transition-colors',
              useCobaltChrome
                ? 'border-white/30 bg-white/10 text-white hover:bg-white/20'
                : 'border-[#E5E7EB] bg-white text-[#0B0C0E] hover:bg-[#F8FAFC]'
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Mobile Navigation Overlay */}
          {mounted && (
            <MobileMenu
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              pathname={pathname}
              navigationItems={navigationItems}
              expandedItems={expandedItems}
              toggleSubmenu={toggleSubmenu}
            />
          )}
        </div>
      </header>
    </>
  )
}
