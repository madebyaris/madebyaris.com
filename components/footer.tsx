import * as React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center justify-start gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MadeByAris. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Link
            href="https://github.com/madebyaris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href="https://twitter.com/madebyaris"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  )
}
