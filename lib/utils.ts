import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function transformWordPressContent(content: string, baseUrl: string = 'https://wp.madebyaris.com'): string {
  try {
    let transformedContent = content

    // Transform headings
    transformedContent = transformedContent.replace(
      /<h([1-6])([^>]*)>(.*?)<\/h\1>/g,
      (_, level: string, attrs, text) => {
        const sizes: Record<string, string> = {
          '1': 'text-4xl mb-6 mt-10 font-extrabold',
          '2': 'text-3xl mb-5 mt-10 font-bold',
          '3': 'text-2xl mb-4 mt-8 font-bold',
          '4': 'text-xl mb-4 mt-6 font-semibold',
          '5': 'text-lg mb-3 mt-4 font-semibold',
          '6': 'text-base mb-3 mt-4 font-medium'
        }
        
        // Preserve any existing ID attribute
        const idMatch = attrs.match(/id=["']([^"']*)["']/);
        const idAttr = idMatch ? ` id="${idMatch[1]}"` : '';
        
        // Remove any existing id attribute from attrs to avoid duplicates
        const cleanAttrs = attrs.replace(/id=["'][^"']*["']/g, '');
        
        return `<h${level}${idAttr}${cleanAttrs} class="font-bold tracking-tight ${sizes[level]} scroll-mt-20">${text}</h${level}>`
      }
    )

    // Transform paragraphs
    transformedContent = transformedContent.replace(
      /<p[^>]*>(.*?)<\/p>/g,
      '<p class="mb-6 leading-relaxed text-base">$1</p>'
    )

    // Transform lists
    transformedContent = transformedContent
      .replace(
        /<ul[^>]*>(.*?)<\/ul>/g,
        '<ul class="list-disc pl-6 mb-6 space-y-2">$1</ul>'
      )
      .replace(
        /<ol[^>]*>(.*?)<\/ol>/g,
        '<ol class="list-decimal pl-6 mb-6 space-y-2">$1</ol>'
      )
      .replace(
        /<li[^>]*>(.*?)<\/li>/g,
        '<li class="pl-2">$1</li>'
      )

    // Transform links
    transformedContent = transformedContent.replace(
      /<a([^>]*)href="([^"]*)"([^>]*)>(.*?)<\/a>/g,
      (_, before, href, after, text) => {
        const newHref = href.startsWith(baseUrl) 
          ? href.replace(baseUrl, '') 
          : href
        return `<a ${before}href="${newHref}"${after} class="text-primary hover:text-primary/80 underline underline-offset-2 font-medium transition-colors">
          ${text}
        </a>`
      }
    )

    // Transform images - make them responsive
    transformedContent = transformedContent.replace(
      /<img([^>]*)>/g,
      '<img$1 class="rounded-lg my-8 w-full h-auto max-w-full object-cover shadow-sm" loading="lazy">'
    )

    // Transform figure elements (often used for images in WordPress)
    transformedContent = transformedContent.replace(
      /<figure[^>]*>(.*?)<\/figure>/g,
      '<figure class="my-8 w-full overflow-hidden">$1</figure>'
    )

    // Transform figcaption
    transformedContent = transformedContent.replace(
      /<figcaption[^>]*>(.*?)<\/figcaption>/g,
      '<figcaption class="text-sm text-center text-muted-foreground mt-2 italic">$1</figcaption>'
    )

    // Transform blockquotes
    transformedContent = transformedContent.replace(
      /<blockquote[^>]*>(.*?)<\/blockquote>/g,
      '<blockquote class="border-l-4 border-primary pl-6 py-2 my-8 bg-muted/30 rounded-r-lg italic">$1</blockquote>'
    )

    // Transform code blocks - improve overflow handling
    transformedContent = transformedContent
      .replace(
        /<pre[^>]*>(.*?)<\/pre>/g,
        '<pre class="bg-muted p-5 rounded-lg overflow-x-auto my-8 text-sm w-full max-w-full shadow-sm font-mono">$1</pre>'
      )
      .replace(
        /<code[^>]*>(.*?)<\/code>/g,
        '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono break-words">$1</code>'
      )

    // Transform tables to be responsive
    transformedContent = transformedContent
      .replace(
        /<table[^>]*>(.*?)<\/table>/g,
        '<div class="w-full overflow-x-auto my-8 rounded-lg border shadow-sm"><table class="w-full border-collapse min-w-full">$1</table></div>'
      )
      .replace(
        /<th[^>]*>(.*?)<\/th>/g,
        '<th class="border border-border px-4 py-3 bg-muted text-left font-medium">$1</th>'
      )
      .replace(
        /<td[^>]*>(.*?)<\/td>/g,
        '<td class="border border-border px-4 py-3">$1</td>'
      )
      .replace(
        /<tr[^>]*>(.*?)<\/tr>/g,
        '<tr class="hover:bg-muted/50 transition-colors">$1</tr>'
      )

    // Transform iframes (like YouTube embeds) to be responsive
    transformedContent = transformedContent.replace(
      /<iframe([^>]*)><\/iframe>/g,
      '<div class="relative aspect-video w-full my-8 overflow-hidden rounded-lg shadow-sm"><iframe$1 class="absolute inset-0 w-full h-full"></iframe></div>'
    )

    // Handle WordPress captions
    transformedContent = transformedContent.replace(
      /<div class="wp-caption[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="my-8 w-full overflow-hidden">$1</div>'
    )

    // Handle WordPress alignments
    transformedContent = transformedContent
      .replace(/alignleft/g, 'float-left mr-6 md:mr-8 mb-4 max-w-[50%]')
      .replace(/alignright/g, 'float-right ml-6 md:ml-8 mb-4 max-w-[50%]')
      .replace(/aligncenter/g, 'mx-auto block')
      .replace(/alignnone/g, 'block')

    // Handle WordPress galleries
    transformedContent = transformedContent.replace(
      /<div[^>]*class="gallery[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">$1</div>'
    )

    // Handle WordPress embeds
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-embed[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="my-8 w-full">$1</div>'
    )

    // Handle WordPress buttons
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-button[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="my-8">$1</div>'
    )
    
    transformedContent = transformedContent.replace(
      /<a[^>]*class="wp-block-button__link[^"]*"[^>]*>(.*?)<\/a>/g,
      '<a class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">$1</a>'
    )

    // Handle WordPress separators
    transformedContent = transformedContent.replace(
      /<hr[^>]*>/g,
      '<hr class="my-12 border-t border-border" />'
    )

    // Handle WordPress quotes
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-quote[^"]*"[^>]*>(.*?)<\/div>/g,
      '<blockquote class="border-l-4 border-primary pl-6 py-2 my-8 bg-muted/30 rounded-r-lg italic">$1</blockquote>'
    )

    // Handle WordPress code blocks
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-code[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="my-8">$1</div>'
    )

    // Handle WordPress file blocks
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-file[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="my-8 p-4 border rounded-lg bg-muted/30">$1</div>'
    )

    // Handle WordPress table blocks
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-table[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="my-8">$1</div>'
    )

    // Handle WordPress columns
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-columns[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">$1</div>'
    )

    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-column[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="flex flex-col">$1</div>'
    )

    // Handle WordPress media & text
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-media-text[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 items-center">$1</div>'
    )

    // Handle WordPress cover blocks
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-cover[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="relative rounded-lg overflow-hidden my-8 bg-muted/50 p-8">$1</div>'
    )

    // Handle WordPress pullquotes
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-pullquote[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="border-t border-b border-border py-8 my-8 text-center italic">$1</div>'
    )

    // Handle WordPress lists
    transformedContent = transformedContent.replace(
      /<div[^>]*class="wp-block-list[^"]*"[^>]*>(.*?)<\/div>/g,
      '<div class="my-6">$1</div>'
    )

    // Fix any double spaces that might have been introduced
    transformedContent = transformedContent.replace(/\s{2,}/g, ' ')

    return transformedContent
  } catch (error) {
    console.error('Error transforming WordPress content:', error)
    return content
  }
}

/**
 * Generate a blur data URL for images to improve perceived performance
 * @param width - Image width (default: 20)
 * @param height - Image height (default: 20) 
 * @param color - Base color for blur (default: neutral gray)
 */
export function generateBlurDataURL(
  width: number = 20,
  height: number = 20,
  color: string = 'rgb(156, 163, 175)' // gray-400
): string {
  const canvas = typeof window !== 'undefined' ? document.createElement('canvas') : null;
  if (!canvas) {
    // Fallback base64 blur data URL for SSR
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R36UsL5vcW2daMSRdO9D8Skycy2gZpuLdq8dC6Y7IbrSJCZl/mF/";
  }
  
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
}

/**
 * Predefined blur data URLs for common image types
 */
export const blurDataURLs = {
  // Generic neutral blur
  default: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R36UsL5vcW2daMSRdO9D8Skycy2gZpuLdq8dC6Y7IbrSJCZl/mF/",
  
  // Portrait/Avatar blur (skin tone)
  avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R36UsL5vcW2daMSRdO9D8Skycy2gZpuLdq8dC6Y7IbrSJCZl/mF/",
  
  // Blue-tinted blur for tech/professional images
  tech: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R36UsL5vcW2daMSRdO9D8Skycy2gZpuLdq8dC6Y7IbrSJCZl/mF/",
  
  // Warm blur for case study images
  warm: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R36UsL5vcW2daMSRdO9D8Skycy2gZpuLdq8dC6Y7IbrSJCZl/mF/"
} as const;
