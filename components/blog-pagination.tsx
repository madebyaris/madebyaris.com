import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

function getVisiblePages(currentPage: number, totalPages: number): Array<number | 'ellipsis'> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const pages = new Set<number>([1, totalPages, currentPage])

  if (currentPage > 1) pages.add(currentPage - 1)
  if (currentPage < totalPages) pages.add(currentPage + 1)
  if (currentPage <= 3) pages.add(2).add(3)
  if (currentPage >= totalPages - 2) pages.add(totalPages - 1).add(totalPages - 2)

  const sortedPages = [...pages].sort((a, b) => a - b)
  const visiblePages: Array<number | 'ellipsis'> = []

  sortedPages.forEach((page, index) => {
    const previousPage = sortedPages[index - 1]
    if (previousPage !== undefined && page - previousPage > 1) {
      visiblePages.push('ellipsis')
    }
    visiblePages.push(page)
  })

  return visiblePages
}

function buildBlogPageHref(page: number): string {
  return page <= 1 ? '/blog' : `/blog?page=${page}`
}

export function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const visiblePages = getVisiblePages(currentPage, totalPages)
  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
    >
      <p className="text-sm font-medium text-zinc-500">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {hasPreviousPage ? (
          <Link
            href={buildBlogPageHref(currentPage - 1)}
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-100 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-300">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </span>
        )}

        <div className="flex items-center gap-1">
          {visiblePages.map((page, index) =>
            page === 'ellipsis' ? (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-sm font-medium text-zinc-400"
                aria-hidden="true"
              >
                ...
              </span>
            ) : page === currentPage ? (
              <span
                key={page}
                aria-current="page"
                className="inline-flex min-w-10 items-center justify-center rounded-full bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm"
              >
                {page}
              </span>
            ) : (
              <Link
                key={page}
                href={buildBlogPageHref(page)}
                className="inline-flex min-w-10 items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
              >
                {page}
              </Link>
            )
          )}
        </div>

        {hasNextPage ? (
          <Link
            href={buildBlogPageHref(currentPage + 1)}
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-100 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-300">
            Next
            <ChevronRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </nav>
  )
}

export { buildBlogPageHref }
