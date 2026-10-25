'use client'

import Link from 'next/link'
import { useEffect, useId, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type HeaderNavChild = { href: string; label: string }

type HeaderNavDropdownProps = {
  href: string
  label: string
  items: HeaderNavChild[]
  pathname: string | null
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

/** Desktop Services-style menu: hover, touch tap, and keyboard (Enter/Space/Escape). */
export function HeaderNavDropdown({
  href,
  label,
  items,
  pathname,
  isOpen,
  onOpen,
  onClose,
}: HeaderNavDropdownProps) {
  const panelId = useId()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        rootRef.current?.querySelector<HTMLElement>('[data-nav-dropdown-trigger]')?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  const isActive = pathname === href || (pathname?.startsWith(href + '/') ?? false)

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <div className="flex items-center gap-0.5 py-2">
        <Link
          href={href}
          className={cn(
            'hover:text-zinc-900 transition-colors duration-300 flex items-center gap-1',
            isActive ? 'text-zinc-900' : '',
          )}
        >
          {label}
        </Link>
        <button
          type="button"
          data-nav-dropdown-trigger
          className={cn(
            'rounded p-1 hover:text-zinc-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500',
            isActive ? 'text-zinc-900' : '',
          )}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-controls={panelId}
          aria-label={`${label} submenu`}
          onClick={() => (isOpen ? onClose() : onOpen())}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              if (isOpen) onClose()
              else onOpen()
            }
          }}
        >
          <ChevronDown className="w-3 h-3" aria-hidden="true" />
        </button>
      </div>

      <div className="absolute left-0 right-0 top-full h-4" aria-hidden="true" />

      {isOpen && (
        <div
          id={panelId}
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-60 z-50"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <div className="rounded-xl shadow-xl py-2 bg-white border border-zinc-200">
            {items.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                className={cn(
                  'block px-5 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-zinc-50 hover:text-orange-500 normal-case focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-orange-500',
                  pathname === child.href ? 'text-orange-500 bg-zinc-50' : 'text-zinc-600',
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
