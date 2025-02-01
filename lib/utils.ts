import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function transformWordPressContent(content: string, baseUrl: string = 'https://wp.madebyaris.com'): string {
  let transformedContent = content

  // Transform headings
  transformedContent = transformedContent.replace(
    /<h([1-6])[^>]*>(.*?)<\/h\1>/g,
    (_, level: string, text) => {
      const sizes: Record<string, string> = {
        '1': 'text-4xl mb-6 mt-8',
        '2': 'text-3xl mb-5 mt-8',
        '3': 'text-2xl mb-4 mt-6',
        '4': 'text-xl mb-4 mt-6',
        '5': 'text-lg mb-3 mt-4',
        '6': 'text-base mb-3 mt-4'
      }
      return `<h${level} class="font-bold tracking-tight ${sizes[level]}">${text}</h${level}>`
    }
  )

  // Transform paragraphs
  transformedContent = transformedContent.replace(
    /<p[^>]*>(.*?)<\/p>/g,
    '<p class="mb-4 leading-relaxed">$1</p>'
  )

  // Transform lists
  transformedContent = transformedContent
    .replace(
      /<ul[^>]*>(.*?)<\/ul>/g,
      '<ul class="list-disc pl-6 mb-4 space-y-2">$1</ul>'
    )
    .replace(
      /<ol[^>]*>(.*?)<\/ol>/g,
      '<ol class="list-decimal pl-6 mb-4 space-y-2">$1</ol>'
    )

  // Transform links
  transformedContent = transformedContent.replace(
    /<a([^>]*)href="([^"]*)"([^>]*)>(.*?)<\/a>/g,
    (_, before, href, after, text) => {
      const newHref = href.startsWith(baseUrl) 
        ? href.replace(baseUrl, '') 
        : href
      return `<a ${before}href="${newHref}"${after} class="text-primary hover:text-primary/80 underline">${text}</a>`
    }
  )

  // Transform images
  transformedContent = transformedContent.replace(
    /<img([^>]*)>/g,
    '<img$1 class="rounded-lg my-6 w-full h-auto" loading="lazy">'
  )

  // Transform blockquotes
  transformedContent = transformedContent.replace(
    /<blockquote[^>]*>(.*?)<\/blockquote>/g,
    '<blockquote class="border-l-4 border-primary pl-4 italic my-6">$1</blockquote>'
  )

  // Transform code blocks
  transformedContent = transformedContent
    .replace(
      /<pre[^>]*>(.*?)<\/pre>/g,
      '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-6">$1</pre>'
    )
    .replace(
      /<code[^>]*>(.*?)<\/code>/g,
      '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>'
    )

  // Transform tables
  transformedContent = transformedContent
      .replace(
        /<table[^>]*>(.*?)<\/table>/g,
      '<table class="w-full border-collapse my-6">$1</table>'
    )
    .replace(
      /<th[^>]*>(.*?)<\/th>/g,
      '<th class="border border-border px-4 py-2 bg-muted">$1</th>'
    )
    .replace(
      /<td[^>]*>(.*?)<\/td>/g,
      '<td class="border border-border px-4 py-2">$1</td>'
    )

  return transformedContent
}
