"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling for hash links
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if it's a hash link
      if (target.tagName === 'A' && target.hasAttribute('href') && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (!href) return;
        
        const id = href.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL hash without jumping
          window.history.pushState(null, '', href);
        }
      }
    };

    // Handle initial hash in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }

    // Add event listener to the document
    document.addEventListener('click', handleHashLinkClick);

    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return null;
} 