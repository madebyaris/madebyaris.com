'use client'

import Link from 'next/link'
import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Footer() {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Indonesia time (WIB - UTC+7)
      const wibTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }))
      setCurrentTime(wibTime.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceLinks = [
    { name: 'Next.js Development', href: '/services/nextjs-development' },
    { name: 'WordPress Development', href: '/services/wordpress' },
    { name: 'PHP Development', href: '/services/php-development' },
    { name: 'Headless WordPress', href: '/services/wordpress/headless-development' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/arissetia/', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/madebyaris', icon: Github },
    { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ]

  return (
    <footer className="z-10 w-full relative px-6 md:px-10 xl:px-12 pb-8">
      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Top Section: Brand + Location */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-20">
        {/* Left: Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-1">
            <h2 className="leading-none md:text-7xl lg:text-8xl text-5xl font-semibold text-neutral-800 tracking-tighter">
              MadeByAris
            </h2>
          </div>
          <p className="md:text-2xl text-xl font-light italic text-zinc-500">
            Full-Stack Developer—
          </p>
        </div>

        {/* Right: Location & Time */}
        <div className="flex flex-col gap-4 lg:items-end lg:text-right">
          <div className="flex items-start gap-2 lg:flex-row-reverse lg:text-right">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 animate-pulse" />
            <p className="leading-snug md:text-xl text-zinc-700 text-base font-light tracking-tight max-w-md">
              Currently building enterprise web solutions and available for new projects.
            </p>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 lg:flex-row-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" opacity="0.5" />
              <path d="M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1" />
            </svg>
            <span className="text-sm font-medium">Indonesia Time (WIB)</span>
          </div>
          <p className="md:text-5xl text-4xl font-medium text-zinc-900 tracking-tighter font-mono">
            {currentTime || '00:00:00'}
          </p>
        </div>
      </div>

      {/* Bottom Section: Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {/* Column 1: Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Navigation</h3>
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base text-zinc-700 hover:text-orange-500 transition-colors font-normal"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Services</h3>
          {serviceLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base text-zinc-700 hover:text-orange-500 transition-colors font-normal"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Column 3: Social */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Connect</h3>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-zinc-700 hover:text-orange-500 transition-colors font-normal flex items-center gap-2 group"
            >
              {link.name}
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          ))}
        </div>

        {/* Column 4: Contact CTA */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">Start a Project</h3>
          <p className="text-sm text-zinc-500 mb-4">
            Ready to build something amazing together? Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="btn-primary rounded-full py-3 px-6 text-sm font-medium text-center inline-flex items-center justify-center gap-2 w-fit"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="mt-16 pt-8 border-t border-zinc-200/60">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} MadeByAris. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm text-zinc-500 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
