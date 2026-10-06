import { INDONESIAN_BLOG_SLUGS } from '@/lib/i18n'

export { default, generateMetadata } from '../../../(en)/blog/[slug]/page'

export const revalidate = 604800

export function generateStaticParams() {
  return INDONESIAN_BLOG_SLUGS.map((slug) => ({ slug }))
}
