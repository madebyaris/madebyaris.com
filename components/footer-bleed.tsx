'use client'

import { usePathname } from 'next/navigation'
import { contactCopy } from '@/app/contact/copy'

const defaultBleed =
  'Currently building enterprise web solutions and available for new projects.'

export function FooterBleed() {
  const pathname = usePathname()
  const text = pathname === '/contact' ? contactCopy.footerBleed : defaultBleed

  return (
    <p className="leading-snug md:text-xl text-zinc-700 text-base font-light tracking-tight max-w-md">
      {text}
    </p>
  )
}
