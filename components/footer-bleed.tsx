'use client'

import { usePathname } from 'next/navigation'
import { ambassadorCopy } from '@/app/cursor-ambassador/copy'

const defaultFooterBleed =
  'Currently building enterprise web solutions and available for new projects.'

export function FooterBleed() {
  const pathname = usePathname()
  const text =
    pathname === '/cursor-ambassador' ? ambassadorCopy.footerBleed : defaultFooterBleed

  return (
    <p className="leading-snug md:text-xl text-zinc-700 text-base font-light tracking-tight max-w-md">
      {text}
    </p>
  )
}
