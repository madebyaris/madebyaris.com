"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { X, ChevronDown, ArrowRight } from "lucide-react"
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
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-white/30 backdrop-blur-[20px]"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute inset-0 glass-panel"
          >
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-zinc-900" />
              </button>
            </div>

            <div className="flex min-h-screen items-center justify-center pt-16 px-6">
              <nav className="flex flex-col items-center justify-center space-y-6 w-full">
                <Link
                  href="/"
                  onClick={onClose}
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
                                  onClick={onClose}
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
                        onClick={onClose}
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

                <Link
                  href="https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
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
  )
}
