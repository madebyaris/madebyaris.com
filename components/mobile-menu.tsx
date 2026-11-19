"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { contactHref } from "@/lib/contact-services"
import { X, ChevronDown, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NavigationItem {
  href: string
  label: string
  children?: NavigationItem[]
  external?: boolean
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  pathname: string | null
  navigationItems: NavigationItem[]
  expandedItems: Record<string, boolean>
  toggleSubmenu: (href: string) => void
}

export default function MobileMenu({
  isOpen,
  onClose,
  pathname,
  navigationItems,
  expandedItems,
  toggleSubmenu,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="md:hidden fixed inset-0 min-h-screen w-screen z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 bg-[#0B0C0E]/30 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
            className="absolute inset-y-0 right-0 w-full max-w-sm bg-[#FAF9F6] border-l border-[#E6E4DD] flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E6E4DD]">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#70747D]">
                  Navigation
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-lg border border-[#E6E4DD] bg-white hover:bg-[#F3F1EB] transition-colors"
                >
                  <X className="h-5 w-5 text-[#0B0C0E]" />
                </button>
              </div>

              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  onClick={onClose}
                  className={cn(
                    'font-display text-2xl font-medium tracking-tight py-2 transition-colors hover:text-[#D9481E]',
                    pathname === '/' ? 'text-[#D9481E]' : 'text-[#0B0C0E]',
                  )}
                >
                  Home
                </Link>

                {navigationItems.map((item) => (
                  <div key={item.href}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.href)}
                          className={cn(
                            'font-display text-2xl font-medium tracking-tight py-2 transition-colors hover:text-[#D9481E] flex items-center justify-between w-full text-left',
                            pathname?.startsWith(item.href) ? 'text-[#D9481E]' : 'text-[#0B0C0E]',
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 transition-transform text-[#70747D]',
                              expandedItems[item.href] && 'rotate-180',
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedItems[item.href] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="pl-4 border-l border-[#E6E4DD] ml-1 my-1 space-y-2 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className={cn(
                                    'block py-1.5 text-base font-medium transition-colors hover:text-[#D9481E]',
                                    pathname === child.href ? 'text-[#D9481E]' : 'text-[#525660]',
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
                        onClick={onClose}
                        className={cn(
                          'font-display text-2xl font-medium tracking-tight py-2 block transition-colors hover:text-[#D9481E]',
                          pathname === item.href ? 'text-[#D9481E]' : 'text-[#0B0C0E]',
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="pt-8 mt-8 border-t border-[#E6E4DD] space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#70747D]">
                UTC+7 · EU / SG / ID overlap
              </p>
              <Link
                href={contactHref('ai-implementation')}
                onClick={onClose}
                className="btn-primary rounded-full py-3.5 px-6 text-sm font-medium flex items-center justify-center gap-2 w-full"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
