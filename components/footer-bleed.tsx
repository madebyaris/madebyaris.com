'use client'

import { usePathname } from 'next/navigation'
import { ambassadorCopy as cursorAmbassadorCopy } from '@/app/cursor-ambassador/copy'
import { ambassadorCopy as spaceXaiAmbassadorCopy } from '@/app/spacexai-ambassador/copy'

const defaultFooterBleed =
  'Currently building enterprise web solutions and available for new projects.'

const bleedByPath: Record<string, string> = {
  '/cursor-ambassador': cursorAmbassadorCopy.footerBleed,
  '/spacexai-ambassador': spaceXaiAmbassadorCopy.footerBleed,
}

export function FooterBleed() {
  const pathname = usePathname()
  const text = bleedByPath[pathname] ?? defaultFooterBleed

  return (
    <p className="leading-snug md:text-xl text-zinc-700 text-base font-light tracking-tight max-w-md">
      {text}
    </p>
  )
}
