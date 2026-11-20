'use client'

import Link from 'next/link'
import { useEffect, useId, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type HeaderNavChild = { href: string; label: string }

type MegaMenuItem = {
  href: string
  label: string
  description?: string
  badge?: { text: string; tone: 'new' | 'core' }
}

type MegaMenuGroup = {
  heading: string
  items: MegaMenuItem[]
}

const SERVICES_MEGA_COLUMNS: MegaMenuGroup[][] = [
  [
    {
      heading: 'AI ENGINEERING',
      items: [
        {
          href: '/ai-implementation',
          label: 'AI Engineering & Agents',
          description: 'Take AI pilots to production with evals, logging, and spend caps.',
          badge: { text: 'Core', tone: 'core' },
        },
        {
          href: '/services/ai-development/ai-integration',
          label: 'AI Integration',
          description: 'Add docs Q&A, support drafts, and agents into your existing repo.',
        },
        {
          href: '/services/ai-development/ai-mvp',
          label: 'AI MVP Development',
          description: 'Turn an AI product idea into a launch-ready app with billing.',
        },
        {
          href: '/services/vibe-code-friend',
          label: 'Cursor & AI Workflows',
          description: 'Project rules and PR review habits for engineering teams.',
        },
        {
          href: '/services/ai-search-geo-aeo',
          label: 'AI Search (GEO & AEO)',
          description: 'Grow brand citations in ChatGPT, Gemini, and AI Overviews.',
          badge: { text: 'New', tone: 'new' },
        },
      ],
    },
  ],
  [
    {
      heading: 'PRODUCT & WEB',
      items: [
        {
          href: '/product-engineering',
          label: 'Product Engineering',
          description: 'SaaS, mobile apps, Rust tools, and full-stack platforms.',
        },
        {
          href: '/services/nextjs-development',
          label: 'Next.js Development',
          description: 'App Router builds, migrations, and fast mobile performance.',
        },
        {
          href: '/services/saas-development',
          label: 'SaaS Development',
          description: 'Scale-from-zero web apps with clear monthly hosting bills.',
        },
      ],
    },
    {
      heading: 'SPECIALIST TRACKS',
      items: [
        {
          href: '/services/fastify-development',
          label: 'Fastify APIs',
          description: 'High-throughput Node.js and TypeScript backends.',
        },
        {
          href: '/services/react-app-improvement',
          label: 'React & Vite Optimization',
          description: 'Speed up sluggish React apps, bundles, and Core Web Vitals.',
        },
      ],
    },
  ],
  [
    {
      heading: 'CMS, DATA & SEO',
      items: [
        {
          href: '/services/wordpress',
          label: 'WordPress & Headless',
          description: 'Custom themes, plugins, WooCommerce, and Next.js front ends.',
        },
        {
          href: '/services/seo',
          label: 'Technical SEO',
          description: 'Code-level audits, schema markup, and rank tracking.',
        },
        {
          href: '/services/database-optimization',
          label: 'Database Optimization',
          description: 'PostgreSQL and MySQL query tuning and indexing.',
        },
      ],
    },
    {
      heading: 'LEGACY & QUALITY',
      items: [
        {
          href: '/services/php-development',
          label: 'PHP & Modernization',
          description: 'Keep legacy PHP apps running or migrate cleanly.',
        },
        {
          href: '/services/clean-code-for-teams-and-ai',
          label: 'Clean Code & AI Readiness',
          description: 'Structure repos so teams and coding agents ship cleanly.',
        },
      ],
    },
  ],
  [
    {
      heading: 'POPULAR TRACKS',
      items: [
        { href: '/services', label: 'All Services Overview' },
        { href: '/guides/cursor', label: 'Cursor Setup Guide' },
        { href: '/services/vibe-code-friend/ai-ide-tutoring', label: 'AI IDE Tutoring' },
        { href: '/services/vibe-code-friend/code-fixing', label: 'Code Fixing & Audits' },
        { href: '/services/nextjs-development/nextjs-seo', label: 'Next.js SEO Services' },
        { href: '/services/nextjs-development/vercel', label: 'Vercel Cost & Hosting' },
        { href: '/services/wordpress/woocommerce', label: 'WooCommerce Engineering' },
      ],
    },
    {
      heading: 'BAHASA INDONESIA',
      items: [
        { href: '/jasa-implementasi-ai', label: 'Jasa Implementasi AI' },
        { href: '/jasa-pengembangan-produk', label: 'Jasa Pengembangan Produk' },
        {
          href: '/services/saas-development/jasa-pembuatan-aplikasi-web',
          label: 'Jasa Aplikasi Web & SaaS',
        },
        { href: '/services/seo/jasa-seo', label: 'Jasa SEO Teknis' },
        { href: '/services/wordpress/jasa-wordpress', label: 'Jasa WordPress' },
      ],
    },
  ],
]

type HeaderNavDropdownProps = {
  href: string
  label: string
  items: HeaderNavChild[]
  pathname: string | null
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onCloseImmediate?: () => void
  variant?: 'cobalt' | 'light'
}

/** Desktop Services Ahrefs-inspired 4-column mega-menu: hover, click, and keyboard (Enter/Space/Escape). */
export function HeaderNavDropdown({
  href,
  label,
  pathname,
  isOpen,
  onOpen,
  onClose,
  onCloseImmediate,
  variant = 'light',
}: HeaderNavDropdownProps) {
  const panelId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const closeNow = onCloseImmediate ?? onClose

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeNow()
        rootRef.current?.querySelector<HTMLElement>('[data-nav-dropdown-trigger]')?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, closeNow])

  const isActive =
    pathname === href ||
    (pathname?.startsWith(href + '/') ?? false) ||
    pathname === '/ai-implementation' ||
    pathname === '/product-engineering' ||
    pathname === '/jasa-implementasi-ai' ||
    pathname === '/jasa-pengembangan-produk'

  const isCobalt = variant === 'cobalt'

  return (
    <div
      ref={rootRef}
      className="static"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <div className="relative flex items-center gap-0.5 py-2">
        <Link
          href={href}
          onClick={closeNow}
          className={cn(
            'transition-colors flex items-center gap-1',
            isCobalt
              ? isActive
                ? 'text-white font-semibold'
                : 'hover:text-white'
              : isActive
                ? 'text-[#0B0C0E] font-semibold'
                : 'hover:text-[#0B0C0E]',
          )}
        >
          {label}
        </Link>
        <button
          type="button"
          data-nav-dropdown-trigger
          className={cn(
            'rounded p-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8800]',
            isCobalt
              ? 'text-white/85 hover:text-white'
              : isActive
                ? 'text-[#0B0C0E]'
                : 'hover:text-[#0B0C0E]',
          )}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-controls={panelId}
          aria-label={`${label} submenu`}
          onClick={() => (isOpen ? closeNow() : onOpen())}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              if (isOpen) closeNow()
              else onOpen()
            }
          }}
        >
          <ChevronDown
            className={cn('w-3.5 h-3.5 transition-transform duration-150', isOpen && 'rotate-180')}
            aria-hidden="true"
          />
        </button>

        {isActive && (
          <span
            aria-hidden="true"
            className={cn(
              'absolute left-0 right-0 -bottom-[1px] h-[2px] rounded-full',
              isCobalt ? 'bg-[#FF8800]' : 'bg-[#3A57FC]',
            )}
          />
        )}
      </div>

      {isOpen && (
        <div
          id={panelId}
          role="menu"
          className="absolute inset-x-0 top-full z-50 pt-1.5"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
            <div className="rounded-lg bg-white text-[#0B0C0E] border border-[#E5E7EB] shadow-[0_28px_64px_-16px_rgba(11,12,14,0.22)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#E5E7EB]">
                {SERVICES_MEGA_COLUMNS.map((columnGroups, colIndex) => {
                  const isCompactColumn = colIndex === 3
                  return (
                    <div
                      key={columnGroups[0].heading}
                      className={cn(
                        'p-6 lg:p-7 flex flex-col gap-6',
                        isCompactColumn && 'bg-[#FAFBFD]',
                      )}
                    >
                      {columnGroups.map((group, groupIndex) => (
                        <div
                          key={group.heading}
                          className={cn(groupIndex > 0 && 'pt-5 border-t border-[#E5E7EB]')}
                        >
                          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6B7280] mb-4">
                            {group.heading}
                          </p>
                          <ul className={cn(isCompactColumn ? 'space-y-2.5' : 'space-y-4')}>
                            {group.items.map((item) => {
                              const itemActive = pathname === item.href
                              return (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    role="menuitem"
                                    onClick={closeNow}
                                    className={cn(
                                      'group block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-[#F3F5FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3A57FC]',
                                      itemActive && 'bg-[#F3F5FF]',
                                    )}
                                  >
                                    <span className="flex items-center gap-2">
                                      <span
                                        className={cn(
                                          'font-display tracking-tight transition-colors',
                                          isCompactColumn
                                            ? 'text-[14px] font-medium'
                                            : 'text-[15px] font-semibold',
                                          itemActive
                                            ? 'text-[#3A57FC]'
                                            : 'text-[#0B0C0E] group-hover:text-[#3A57FC]',
                                        )}
                                      >
                                        {item.label}
                                      </span>
                                      {item.badge && (
                                        <span
                                          className={cn(
                                            'inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold leading-none tracking-wide',
                                            item.badge.tone === 'new'
                                              ? 'bg-[#FACC15] text-[#0B0C0E]'
                                              : 'bg-[#EEF2FF] text-[#3A57FC] border border-[#DDE4FF]',
                                          )}
                                        >
                                          {item.badge.text}
                                        </span>
                                      )}
                                    </span>
                                    {item.description && (
                                      <span className="mt-1 block text-[12.5px] leading-[1.45] text-[#6B7280] font-normal">
                                        {item.description}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
