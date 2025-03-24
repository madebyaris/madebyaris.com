'use client'

import { useEffect, useRef, useState } from 'react';

interface WordPressContentProps {
  content: string;
  className?: string;
  estimatedReadTime?: number;
}

export function WordPressContent({ content, className = '', estimatedReadTime = 5 }: WordPressContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Calculate estimated height based on read time to prevent layout shifts
  // Average reading speed ~200 words per minute, ~20 words per line, ~24px line height
  const estimatedHeight = Math.max(300, estimatedReadTime * 200 / 20 * 24);
  
  useEffect(() => {
    // Mark content as loaded after initial render
    setIsLoaded(true);
    
    // Enhance images with lazy loading and responsive sizes
    if (contentRef.current) {
      const images = contentRef.current.querySelectorAll('img');
      // Explicitly type firstImage as HTMLImageElement
      let firstImage: HTMLImageElement | null = null;
      
      if (images.length > 0) {
        // Cast first image to HTMLImageElement
        firstImage = images[0] as HTMLImageElement;
        // Prioritize it for LCP
        firstImage.setAttribute('fetchpriority', 'high');
        firstImage.removeAttribute('loading');
      }
      
      images.forEach((img, index) => {
        const imgElement = img as HTMLImageElement; // Cast to HTMLImageElement
        
        if (index > 0) {
          // Add loading="lazy" if not already present (skip first image)
          if (!imgElement.hasAttribute('loading')) {
            imgElement.setAttribute('loading', 'lazy');
          }
        }
        
        // Add sizes attribute if not already present
        if (!imgElement.hasAttribute('sizes')) {
          imgElement.setAttribute('sizes', '(max-width: 640px) 100vw, (max-width: 1024px) 800px, 800px');
        }
        
        // Create aspect ratio container to prevent layout shifts
        const parent = imgElement.parentElement;
        if (parent && parent.tagName !== 'FIGURE' && !parent.classList.contains('img-container')) {
          // Get intrinsic dimensions from width/height attributes or set defaults
          const width = imgElement.getAttribute('width') || '800';
          const height = imgElement.getAttribute('height') || '600';
          const aspectRatio = parseInt(height) / parseInt(width);
          
          // Create wrapper with correct aspect ratio
          const wrapper = document.createElement('div');
          wrapper.classList.add('img-container', 'relative');
          wrapper.style.paddingBottom = `${aspectRatio * 100}%`;
          wrapper.style.position = 'relative';
          wrapper.style.overflow = 'hidden';
          wrapper.style.marginTop = '1.5rem';
          wrapper.style.marginBottom = '1.5rem';
          
          // Style image for absolute positioning in container
          imgElement.style.position = 'absolute';
          imgElement.style.top = '0';
          imgElement.style.left = '0';
          imgElement.style.width = '100%';
          imgElement.style.height = '100%';
          imgElement.style.objectFit = 'cover';
          
          // Replace img with wrapper containing img
          parent.replaceChild(wrapper, imgElement);
          wrapper.appendChild(imgElement);
        }
        
        // Add classes for better styling
        imgElement.classList.add('rounded-lg');
      });
      
      // Prioritize first image load for better LCP
      if (firstImage && !firstImage.complete && firstImage.src) {
        // Preload the image
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = firstImage.src;
        document.head.appendChild(preloadLink);
      }
    }
  }, []);
  
  // Common classes for content
  const contentClasses = `prose prose-zinc dark:prose-invert max-w-none overflow-hidden prose-img:rounded-lg prose-img:w-full prose-pre:overflow-x-auto prose-pre:max-w-full prose-headings:scroll-mt-20 ${className}`;

  return (
    <>
      {!isLoaded && (
        <div 
          className="animate-pulse" 
          style={{ 
            height: `${estimatedHeight}px`,
            backgroundColor: 'rgba(209, 213, 219, 0.1)', 
            borderRadius: '0.5rem'
          }}
        />
      )}
      <div 
        ref={contentRef}
        className={`${contentClasses} ${isLoaded ? 'block' : 'hidden'}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
} 