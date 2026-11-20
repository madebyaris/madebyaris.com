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
      className="mt-12 flex flex-col items-center gap-4 border-t border-[#E5E7EB] pt-8 sm:flex-row sm:justify-between"
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#525660]">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {hasPreviousPage ? (
          <Link
            href={buildBlogPageHref(currentPage - 1)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#0B0C0E] transition-colors hover:border-[#3A57FC] hover:bg-[#F3F5FF] hover:text-[#3A57FC]"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-[#9CA3AF]">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </span>
        )}

        <div className="flex items-center gap-1.5">
          {visiblePages.map((page, index) =>
            page === 'ellipsis' ? (
              <span
                key={`ellipsis-${index}`}
                className="px-2 font-mono text-sm font-medium text-[#6B7280]"
                aria-hidden="true"
              >
                ...
              </span>
            ) : page === currentPage ? (
              <span
                key={page}
                aria-current="page"
                className="inline-flex min-w-10 items-center justify-center rounded-lg border border-[#3A57FC] bg-[#3A57FC] px-3 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(58,87,252,0.55)]"
              >
                {page}
              </span>
            ) : (
              <Link
                key={page}
                href={buildBlogPageHref(page)}
                className="inline-flex min-w-10 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#0B0C0E] transition-colors hover:border-[#3A57FC] hover:bg-[#F3F5FF] hover:text-[#3A57FC]"
              >
                {page}
              </Link>
            )
          )}
        </div>

        {hasNextPage ? (
          <Link
            href={buildBlogPageHref(currentPage + 1)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#0B0C0E] transition-colors hover:border-[#3A57FC] hover:bg-[#F3F5FF] hover:text-[#3A57FC]"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-[#9CA3AF]">
            Next
            <ChevronRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </nav>
  )
}

export { buildBlogPageHref }
