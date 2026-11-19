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

/** Desktop Services menu: hover, touch tap, and keyboard (Enter/Space/Escape). */
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
            'hover:text-[#0B0C0E] transition-colors flex items-center gap-1',
            isActive ? 'text-[#0B0C0E] font-semibold' : '',
          )}
        >
          {label}
        </Link>
        <button
          type="button"
          data-nav-dropdown-trigger
          className={cn(
            'rounded p-1 hover:text-[#0B0C0E] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9481E]',
            isActive ? 'text-[#0B0C0E]' : '',
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
          <ChevronDown
            className={cn('w-3.5 h-3.5 transition-transform', isOpen && 'rotate-180')}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="absolute left-0 right-0 top-full h-3" aria-hidden="true" />

      {isOpen && (
        <div
          id={panelId}
          role="menu"
          className="absolute left-0 top-full mt-2 w-64 z-50"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <div className="rounded-xl py-2 bg-white border border-[#E6E4DD] shadow-lg shadow-black/[0.06]">
            {items.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                className={cn(
                  'block px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-[#FAF9F6] hover:text-[#D9481E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#D9481E]',
                  pathname === child.href ? 'text-[#D9481E] bg-[#FAF9F6]' : 'text-[#3F434D]',
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
