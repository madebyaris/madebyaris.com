"use client";

import { BookOpen } from "lucide-react";
import { useEffect } from "react";

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  isMobile?: boolean;
}

export function TableOfContents({ headings, isMobile = false }: TableOfContentsProps) {
  // Add smooth scrolling behavior
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.hasAttribute('href') && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (!href) return;
        
        const id = href.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL hash without jumping
          window.history.pushState(null, '', href);
        }
      }
    };

    // Add event listener to the table of contents
    const tocElement = document.getElementById(isMobile ? 'mobile-toc' : 'desktop-toc');
    tocElement?.addEventListener('click', handleClick);

    return () => {
      tocElement?.removeEventListener('click', handleClick);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div id="mobile-toc" className="lg:hidden mb-8">
        <details className="bg-muted/50 rounded-xl p-4 border shadow-sm">
          <summary className="text-sm font-semibold cursor-pointer flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-primary" />
            Table of Contents
          </summary>
          <nav className="mt-4">
            <ul className="space-y-3 text-sm">
              {headings.map((heading, index) => (
                <li 
                  key={index} 
                  className={`${heading.level === 3 ? 'ml-4' : ''}`}
                >
                  <a 
                    href={`#${heading.id}`} 
                    className="text-muted-foreground hover:text-primary transition-colors line-clamp-1"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    );
  }

  return (
    <div id="desktop-toc" className="hidden lg:block lg:col-span-3">
      <div className="sticky top-24">
        <div className="bg-muted/50 rounded-xl p-5 border shadow-sm">
          <h2 className="text-sm font-semibold mb-4 flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-primary" />
            Table of Contents
          </h2>
          <nav>
            <ul className="space-y-3 text-sm">
              {headings.map((heading, index) => (
                <li 
                  key={index} 
                  className={`${heading.level === 3 ? 'ml-4' : ''}`}
                >
                  <a 
                    href={`#${heading.id}`} 
                    className="text-muted-foreground hover:text-primary transition-colors line-clamp-1"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
} 