"use client";

import { BookOpen, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [open, setOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const panelId = useId();

  // Keep React state in sync with native <details> (keyboard / summary click).
  useEffect(() => {
    const el = detailsRef.current;
    if (!el) return;
    const onToggle = () => setOpen(el.open);
    el.addEventListener("toggle", onToggle);
    return () => el.removeEventListener("toggle", onToggle);
  }, []);

  useEffect(() => {
    const root = detailsRef.current;
    if (!root) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      e.preventDefault();
      const href = anchor.getAttribute("href");
      if (!href) return;
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (!element) return;

      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);

      // Auto-collapse after jump on mobile / tablet (< lg).
      if (window.matchMedia("(max-width: 1023px)").matches) {
        root.open = false;
        setOpen(false);
      }
    };

    root.addEventListener("click", handleClick);
    return () => root.removeEventListener("click", handleClick);
  }, []);

  if (!headings.length) return null;

  return (
    <div id="blog-toc" className="mb-8 w-full">
      <details
        ref={detailsRef}
        className="w-full rounded-xl border bg-muted/50 shadow-sm"
      >
        <summary
          className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-sm font-semibold text-zinc-900 outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
          aria-expanded={open}
          aria-controls={panelId}
        >
          <BookOpen className="h-4 w-4 shrink-0 text-orange-500" aria-hidden />
          <span className="flex-1">Table of Contents</span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </summary>
        <nav
          id={panelId}
          className="max-h-[min(60vh,20rem)] overflow-y-auto border-t border-zinc-200/70 px-4 py-3"
        >
          <ul className="space-y-3 text-sm">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? "ml-4" : undefined}
              >
                <a
                  href={`#${heading.id}`}
                  className="line-clamp-2 font-medium text-zinc-600 transition-colors hover:text-orange-500"
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
