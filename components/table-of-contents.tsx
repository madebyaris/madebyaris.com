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
      <div id="mobile-toc" className="lg:hidden mb-8 w-full">
        <details className="bg-muted/50 rounded-xl p-4 border shadow-sm w-full">
          <summary className="text-sm font-semibold cursor-pointer flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-primary" />
            Table of Contents
          </summary>
          <nav className="mt-4">
            <ul className="space-y-3 text-sm">
              {headings.map((heading, index) => (
                <li 
                  key={`mobile-${heading.id}-${index}`} 
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
    <div 
      id="desktop-toc" 
      className="hidden lg:block fixed left-0 top-24 w-64 max-h-[calc(100vh-6rem)] overflow-y-auto pl-6 z-10"
      style={{
        position: 'fixed',
        left: 0,
        top: '6rem',
        width: '16rem',
        maxHeight: 'calc(100vh - 6rem)',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        willChange: 'transform',
      }}
    >
      <div 
        className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-sm sticky top-0"
        style={{
          WebkitBackdropFilter: 'blur(8px) saturate(180%)',
          backdropFilter: 'blur(8px) saturate(180%)',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          position: 'sticky',
          top: 0,
        }}
      >
        <h2 className="text-sm font-semibold mb-4 flex items-center text-zinc-900">
          <BookOpen className="h-4 w-4 mr-2 text-orange-500" />
          Table of Contents
        </h2>
        <nav>
          <ul className="space-y-3 text-sm">
            {headings.map((heading, index) => (
              <li 
                key={`desktop-${heading.id}-${index}`} 
                className={`${heading.level === 3 ? 'ml-4' : ''}`}
              >
                <a 
                  href={`#${heading.id}`} 
                  className="text-zinc-600 hover:text-orange-500 transition-colors line-clamp-2 font-medium"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
} 