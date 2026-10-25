import { cursorRules } from '@/lib/topics/cursor-rules'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return cursorRules.map((rule) => ({ file: rule.file }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params
  const rule = cursorRules.find((r) => r.file === file)
  if (!rule) return new Response('Not found', { status: 404 })

  return new Response(rule.body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': `inline; filename="${rule.file}"`,
      'X-Robots-Tag': 'noindex',
    },
  })
}
