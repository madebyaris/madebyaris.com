import * as React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-zinc-50 dark:bg-zinc-950">
      <div className="container relative mx-auto max-w-6xl px-4 py-12 sm:px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">MadeByAris</h3>
            <p className="text-sm text-muted-foreground">
              Professional web development services specializing in Next.js, WordPress, and PHP development.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/madebyaris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                GitHub
              </Link>
              <Link
                href="https://twitter.com/arisberikut"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                Twitter
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/nextjs-development" className="text-sm text-muted-foreground hover:text-foreground">
                  Next.js Development
                </Link>
              </li>
              <li>
                <Link href="/nextjs-development-indonesia" className="text-sm text-muted-foreground hover:text-foreground">
                  Next.js Development Indonesia
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress" className="text-sm text-muted-foreground hover:text-foreground">
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link href="/services/php-development" className="text-sm text-muted-foreground hover:text-foreground">
                  PHP Development
                </Link>
              </li>
            </ul>
          </div>

          {/* WordPress Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">WordPress Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/wordpress/theme-development" className="text-sm text-muted-foreground hover:text-foreground">
                  Theme Development
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress/plugin-development" className="text-sm text-muted-foreground hover:text-foreground">
                  Plugin Development
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress/headless-development" className="text-sm text-muted-foreground hover:text-foreground">
                  Headless WordPress
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress/optimization" className="text-sm text-muted-foreground hover:text-foreground">
                  WordPress Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 w-full max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MadeByAris. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-foreground">
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
