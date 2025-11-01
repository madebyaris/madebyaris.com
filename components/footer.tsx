import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Github, Twitter } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/madebyaris',
      icon: Github,
      ariaLabel: 'GitHub Profile',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/arisberikut',
      icon: Twitter,
      ariaLabel: 'Twitter Profile',
    },
  ]

  const serviceLinks = [
    { name: 'Next.js Development', href: '/services/nextjs-development' },
    { name: 'WordPress Development', href: '/services/wordpress' },
    { name: 'PHP Development', href: '/services/php-development' },
    { name: 'Headless WordPress', href: '/services/wordpress/headless-development' },
  ]

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ]

  return (
    <footer className="bg-background relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-[200px] font-black text-zinc-100 dark:text-zinc-900 select-none">
          madebyaris
        </div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Professional web development services specializing in Next.js, WordPress, and PHP development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Social</h3>
              <ul className="mt-4 space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                      aria-label={link.ariaLabel}
                    >
                      <link.icon className="h-4 w-4" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MadeByAris. All rights reserved.
            </p>
            <nav className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
