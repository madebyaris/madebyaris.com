import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cache } from 'react'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Calendar, Clock, Compass, RefreshCw } from 'lucide-react'
import { TableOfContents } from '@/components/table-of-contents'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollReadingProgress } from '@/components/motion/architectural-motion'
import { WordPressContent } from '@/components/wordpress-content'
import { convertBlocks, enhanceRenderedHTML } from 'wp-block-to-html/core'
import { FeaturedImage } from '@/components/featured-image'
import { AuthorImage } from '@/components/author-image'
import { CtaBand } from '@/components/page/cta-band'
import { getAllPublishedPostSlugs, getPost, getPosts, type ProcessedPost } from '@/lib/wordpress'
import { NotFoundPageContent } from '@/components/not-found-page'
import { authorProfile, buildBlogPostGraph, buildBlogPostMetadata, decodeHtmlEntities, isIndonesianSlug, siteConfig, stripHtml } from '@/lib/seo'
import { blogCategoryCopy, blogCategoryPath, hubForCategory, primaryCategory, topicHubs } from '@/lib/topics'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'
import { documentLangFromBlogSlug, isDocumentLang } from '@/lib/document-lang'
import { blurDataURLs } from '@/lib/utils'
import { notFoundMetadata } from '@/app/not-found-metadata'
import blogDefaultCover from '@/public/images/blog-default-cover.jpg'

export const revalidate = 604800 // 7 days; webhook refreshes a post on publish
export const dynamicParams = true

const getBlogPost = cache(async (slug: string) => getPost(slug))

const RELATED_POSTS = 3

interface BlogPostPageProps {
  params: Promise<{
    docLang: string
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug, docLang } = await params
  if (!isDocumentLang(docLang) || docLang !== documentLangFromBlogSlug(slug)) {
    return notFoundMetadata
  }
  try {
    const post = await getBlogPost(slug)
    if (!post) {
      return notFoundMetadata
    }
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
    return buildBlogPostMetadata(post, featuredImage)
  } catch {
    return {
      title: 'Error',
      description: 'There was an error loading the blog post.',
    }
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPublishedPostSlugs()
    return posts.map((post) => ({
      docLang: documentLangFromBlogSlug(post.slug),
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

interface Heading {
  level: number;
  text: string;
  id: string;
}

function extractHeadings(content: string): Heading[] {
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/g;
  const headings: Heading[] = [];
  const seenIds = new Set<string>();
  let match;
  
  try {
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].replace(/<[^>]*>/g, '');
      // Create a consistent ID that will match what we use in addIdsToHeadings
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');

      // One TOC item per unique anchor — duplicate H2 text shares an id.
      if (seenIds.has(id)) continue;
      seenIds.add(id);
      
      headings.push({
        level,
        text,
        id,
      });
    }
  } catch (error) {
    console.error('Error extracting headings:', error);
  }
  
  return headings;
}

function addIdsToHeadings(content: string) {
  try {
    // The page template owns the only <h1>; headings from WordPress start at <h2>.
    const demoted = content.replace(/<(\/?)h1(\s|>)/gi, '<$1h2$2')
    return demoted.replace(
      /<h([2-3])([^>]*)>(.*?)<\/h\1>/g,
      (match, level, attrs, text) => {
        const plainText = text.replace(/<[^>]*>/g, '');
        const id = plainText.toLowerCase().replace(/[^\w]+/g, '-');
        
        if (attrs.includes('id=')) {
          return match;
        }
        
        return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
      }
    );
  } catch (error) {
    console.error('Error adding IDs to headings:', error);
    return content;
  }
}

function renderContent(post: ProcessedPost): string {
  try {
    const conversionOptions = {
      cssFramework: 'tailwind',
      contentHandling: 'hybrid',
      ssrOptions: {
        enabled: true,
        lazyLoadMedia: true,
        preconnect: true,
        criticalPathOnly: true,
        removeDuplicateStyles: true,
      },
    } as const

    // If the WP API exposes parsed blocks, convert them; otherwise enhance rendered HTML.
    const html =
      Array.isArray(post.blocks) && post.blocks.length > 0
        ? (convertBlocks({ blocks: post.blocks, rendered: post.content?.rendered }, conversionOptions as never) as string)
        : enhanceRenderedHTML(post.content.rendered, conversionOptions as never)
    const normalizedAltHtml = html.replace(
      /\balt="([^"]*)"/gi,
      (_match, rawAlt: string) =>
        `alt="${rawAlt
          .replace(/&amp;(apos|quot|amp|lt|gt|#\d+|#x[0-9a-f]+);/gi, '&$1;')
          .replace(/&apos;/gi, '&#39;')}"`,
    )
    return addIdsToHeadings(normalizedAltHtml)
  } catch (error) {
    console.error('Error processing content:', error);
    return addIdsToHeadings(post.content.rendered)
  }
}

async function getRelatedPosts(post: ProcessedPost, categoryId: number | undefined): Promise<ProcessedPost[]> {
  const sameCategory = categoryId
    ? await getPosts({ categories: [categoryId], exclude: [post.id], per_page: RELATED_POSTS })
    : []
  if (sameCategory.length >= RELATED_POSTS) return sameCategory

  const seen = new Set([post.id, ...sameCategory.map((p) => p.id)])
  const latest = await getPosts({ per_page: RELATED_POSTS * 2 })
  return [...sameCategory, ...latest.filter((p) => !seen.has(p.id))].slice(0, RELATED_POSTS)
}

const authorLinks = (
  [
    ['GitHub', 'github.com'],
    ['LinkedIn', 'linkedin.com'],
    ['X', 'x.com'],
  ] as const
).flatMap(([label, host]) => {
  const href = siteConfig.sameAs.find((url) => url.includes(host))
  return href ? [{ label, href }] : []
})

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { docLang, slug } = await params
  if (!isDocumentLang(docLang) || docLang !== documentLangFromBlogSlug(slug)) {
    notFound()
  }

  const post = await getBlogPost(slug)
  if (!post) {
    let recentPosts: ProcessedPost[] = []
    try {
      recentPosts = await getPosts({ per_page: 3 })
    } catch {
      recentPosts = []
    }
    return <NotFoundPageContent recentPosts={recentPosts} runner="interactive" />
  }

  const category = primaryCategory(post.categories)
  const categoryCopy = category ? blogCategoryCopy(category.slug) : undefined
  const hub = hubForCategory(category?.slug)
  const relatedPosts = await getRelatedPosts(post, category?.id)

  const content = renderContent(post)
  const headings = extractHeadings(content)
  const readingTime = getReadingTime(content)
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
  const featuredImageUrl = featuredMedia?.source_url
  const plainTitle = decodeHtmlEntities(stripHtml(post.title.rendered))
  const featuredImageAlt = featuredMedia?.alt_text?.trim()
    ? decodeHtmlEntities(stripHtml(featuredMedia.alt_text))
    : plainTitle
  const isIndonesian = isIndonesianSlug(post.slug)
  const wasUpdated = post.modified.slice(0, 10) > post.date.slice(0, 10)
  const archivedCategories = post.categories.filter((c) => blogCategoryCopy(c.slug))
  const plainContent = content.replace(/<[^>]*>/g, ' ')
  const mentionedHubs = topicHubs.filter((h) => h !== hub && new RegExp(`\\b${h.name}\\b`).test(plainContent))

  const articleStructuredData = buildBlogPostGraph({
    slug: post.slug,
    headline: post.title.rendered,
    description: post.excerpt.rendered,
    image: featuredImageUrl,
    datePublished: post.date,
    dateModified: post.modified,
    inLanguage: isIndonesian ? 'id' : 'en',
    section: category?.name,
    keywords: post.tags.map((tag) => tag.name),
    wordCount: plainContent.split(/\s+/).filter(Boolean).length,
    readingMinutes: readingTime,
    category: categoryCopy && category ? { name: category.name, path: blogCategoryPath(category.slug) } : undefined,
    about: hub ? [hub.entity] : undefined,
    mentions: mentionedHubs.map((h) => h.entity),
  })

  return (
    <>
      <SmoothScroll />
      <ScrollReadingProgress />
      <JsonLd data={articleStructuredData} />

      <div className="mx-auto max-w-[860px] pt-2 pb-10">
        <nav className="mb-8 text-sm text-[#525660]" aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-1">
            <li>
              <Link href="/" className="hover:text-[#3A57FC] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="px-1.5 text-[#9CA3AF]">/</li>
            <li>
              <Link href="/blog" className="hover:text-[#3A57FC] transition-colors">
                Blog
              </Link>
            </li>
            {categoryCopy && category && (
              <>
                <li aria-hidden="true" className="px-1.5 text-[#9CA3AF]">/</li>
                <li>
                  <Link
                    href={blogCategoryPath(category.slug)}
                    className="hover:text-[#3A57FC] transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true" className="px-1.5 text-[#9CA3AF]">/</li>
            <li className="truncate max-w-[200px] sm:max-w-xs font-medium text-[#0B0C0E]">
              {plainTitle}
            </li>
          </ol>
        </nav>

        <article lang={isIndonesian ? 'id' : undefined}>
          <header className="mb-10">
            <div className="mb-5 flex flex-wrap items-center gap-2" lang="en">
              <span className="inline-flex items-center rounded bg-[#0B0C0E] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                {isIndonesian ? 'ID' : 'EN'}
              </span>
              {archivedCategories.map((c) => (
                <Link
                  key={c.id}
                  href={blogCategoryPath(c.slug)}
                  className="inline-flex items-center rounded-md border border-[#DDE4FF] bg-[#F3F5FF] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#2944E0] hover:border-[#3A57FC] hover:bg-[#3A57FC] hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>

            <h1
              className="font-display text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-[#0B0C0E] leading-[1.08] tracking-[-0.03em] mb-6"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-3 text-xs sm:text-sm text-[#525660]">
              <span>
                By{' '}
                <Link
                  href="/about"
                  className="font-semibold text-[#0B0C0E] hover:text-[#3A57FC] transition-colors"
                >
                  {authorProfile.name}
                </Link>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#3A57FC]" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              {wasUpdated && (
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="h-4 w-4 text-[#FF8800]" />
                  Updated <time dateTime={post.modified}>{formatDate(post.modified)}</time>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#3A57FC]" />
                {readingTime} min read
              </span>
            </div>

            {hub && (
              <Link
                href={hub.path}
                lang="en"
                className="mt-6 flex items-center gap-3.5 rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF] p-4 hover:border-[#3A57FC] hover:shadow-[0_14px_34px_-18px_rgba(58,87,252,0.35)] transition-all group"
              >
                <span className="p-2.5 bg-[#3A57FC] text-white rounded-xl shrink-0">
                  <Compass className="h-4 w-4" />
                </span>
                <span className="text-sm text-[#374151]">
                  Part of the <span className="font-semibold text-[#0B0C0E]">{hub.name} guide</span>: a reading order, rules you can copy, and a cost estimate.
                </span>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#3A57FC] group-hover:text-[#FF8800] group-hover:translate-x-0.5 transition-all" />
              </Link>
            )}
          </header>

          {featuredImageUrl ? (
            <div className="mb-10 overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_-28px_rgba(11,12,14,0.18)] [&>div]:mb-0 [&>div]:rounded-none [&>div]:shadow-none">
              <FeaturedImage src={featuredImageUrl} alt={featuredImageAlt} width={800} height={450} />
            </div>
          ) : (
            <div className="relative mb-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#0B0C0E] shadow-[0_20px_50px_-28px_rgba(58,87,252,0.28)]">
              <Image
                src={blogDefaultCover}
                alt={plainTitle}
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 860px) 100vw, 860px"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/85 via-[#0B0C0E]/20 to-transparent"
              />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-3" lang="en">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0B0C0E]/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                  {category?.name ?? 'Engineering'}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-200">
                  madebyaris.com
                </span>
              </div>
            </div>
          )}

          {headings.length > 0 && (
            <div className="[&_details]:border-[#E5E7EB] [&_details]:bg-[#F8FAFC] [&_details]:shadow-none [&_summary]:text-[#0B0C0E] [&_summary]:focus-visible:ring-[#3A57FC] [&_summary_svg:first-of-type]:text-[#3A57FC] [&_nav]:border-[#E5E7EB] [&_a]:text-[#4B5563] [&_a:hover]:text-[#3A57FC]">
              <TableOfContents headings={headings} />
            </div>
          )}

          <div className="[&_.prose]:px-0 [&_.prose_a]:text-[#3A57FC] [&_.prose_a:hover]:text-[#2944E0] [&_.prose_blockquote]:border-[#3A57FC] [&_.prose_blockquote]:bg-[#F8FAFC] [&_.prose_code]:bg-[#F3F5FF] [&_.prose_code]:text-[#2944E0] [&_.prose_pre_code]:bg-transparent [&_.prose_pre_code]:text-[#e6e8ec] [&_.prose_table_tr:nth-child(even)_td]:bg-[#F8FAFC]">
            <WordPressContent content={content} estimatedReadTime={readingTime} />
          </div>

          {archivedCategories.length > 0 && (
            <div
              className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-wrap items-center gap-2"
              lang="en"
            >
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#6B7280] mr-1">
                More on
              </span>
              {archivedCategories.map((c) => (
                <Link
                  key={c.id}
                  href={blogCategoryPath(c.slug)}
                  className="px-3 py-1.5 rounded-md border border-[#DDE4FF] bg-[#F3F5FF] font-mono text-xs font-semibold text-[#2944E0] hover:border-[#3A57FC] hover:bg-[#3A57FC] hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          )}

          <aside
            className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 md:p-8 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC]"
            lang="en"
          >
            <AuthorImage src={siteConfig.authorImage} alt={authorProfile.name} width={80} height={80} />
            <div className="flex-1 text-center sm:text-left">
              <p className="font-display font-bold text-lg text-[#0B0C0E] mb-1">{authorProfile.name}</p>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                {authorProfile.jobTitle} with {authorProfile.yearsExperience}+ years of client work, based in{' '}
                {authorProfile.city}, {authorProfile.country}. {authorProfile.roles.join('. ')}.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm">
                <Link
                  href="/about"
                  className="font-semibold text-[#0B0C0E] hover:text-[#3A57FC] transition-colors"
                >
                  About me
                </Link>
                <Link
                  href="/cursor-ambassador"
                  className="font-semibold text-[#0B0C0E] hover:text-[#3A57FC] transition-colors"
                >
                  Cursor Ambassador
                </Link>
                {authorLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-[#525660] hover:text-[#3A57FC] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="mt-10" lang="en">
            {hub ? (
              <CtaBand
                className="mb-0"
                title="Want your team shipping with Cursor like this?"
                body="I set up project rules and a review habit on one of your real repos, then help the rest of the team adopt it. English or Indonesian."
                primary={{
                  href: contactHref('cursor-mentoring'),
                  label: 'Get Cursor mentoring for your team',
                }}
                secondary={{
                  href: hub.path,
                  label: `Read the ${hub.name} guide`,
                }}
              />
            ) : (
              <CtaBand
                className="mb-0"
                title="Need this built instead of read about?"
                body="Send me your project. I reply within 24 hours and tell you plainly whether I’m the right fit."
                primary={{
                  href: contactHref('nextjs'),
                  label: 'Send me your project',
                }}
                secondary={{
                  href: '/services',
                  label: 'See what I build',
                }}
              />
            )}
          </div>

          <div className="mt-8">
            <Link
              href={categoryCopy && category ? blogCategoryPath(category.slug) : '/blog'}
              className="inline-flex items-center text-sm font-semibold text-[#525660] hover:text-[#3A57FC] transition-colors"
              lang="en"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {categoryCopy && category ? `All ${category.name} posts` : 'Back to the blog'}
            </Link>
          </div>
        </article>
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-14 pt-12 border-t border-[#E5E7EB]" lang="en">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F3F5FF] border border-[#DDE4FF] text-[#3A57FC]">
                <BookOpen className="h-4 w-4" />
              </span>
              {category ? `More on ${category.name}` : 'Keep reading'}
            </h2>
            <Link
              href={categoryCopy && category ? blogCategoryPath(category.slug) : '/blog'}
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#3A57FC] hover:text-[#FF8800] transition-colors"
            >
              Browse all posts
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => {
              const isRelatedIndo = isIndonesianSlug(relatedPost.slug)
              const relatedMedia = relatedPost._embedded?.['wp:featuredmedia']?.[0]
              const hasRelatedImage = Boolean(relatedMedia?.source_url)
              const relatedPlainTitle = relatedPost.title.rendered.replace(/<[^>]*>/g, '')
              const relatedCategories = relatedPost.categories.filter(
                (c) => c && c.name && c.slug !== 'tech'
              )
              const relatedBadgeCategory = relatedCategories[0]?.name ?? 'Engineering'

              return (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.28)] overflow-hidden transition-all"
                >
                  <article className="h-full flex flex-col">
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E5E7EB] bg-[#0B0C0E]">
                      {hasRelatedImage && relatedMedia ? (
                        <Image
                          src={relatedMedia.source_url}
                          alt={relatedMedia.alt_text || relatedPlainTitle}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          placeholder="blur"
                          blurDataURL={blurDataURLs.default}
                        />
                      ) : (
                        <>
                          <Image
                            src={blogDefaultCover}
                            alt={relatedPlainTitle}
                            fill
                            loading="lazy"
                            placeholder="blur"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/80 via-[#0B0C0E]/15 to-transparent"
                          />
                          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B0C0E]/80 backdrop-blur-md border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                              {relatedBadgeCategory}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                              madebyaris
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-3 flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#0B0C0E] text-white font-mono text-[10px] font-semibold uppercase tracking-wider">
                          {isRelatedIndo ? 'ID' : 'EN'}
                        </span>
                        {relatedCategories.slice(0, 2).map((c) => (
                          <span
                            key={c.id}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-md border border-[#DDE4FF] bg-[#F3F5FF] font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[#2944E0]"
                          >
                            {c.name}
                          </span>
                        ))}
                      </div>

                      <h3
                        className="font-display text-lg font-bold mb-2.5 line-clamp-2 text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors tracking-tight leading-snug"
                        dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                      />

                      <div
                        className="text-sm text-[#4B5563] mb-6 line-clamp-2 leading-relaxed flex-grow"
                        dangerouslySetInnerHTML={{ __html: relatedPost.excerpt.rendered }}
                      />

                      <div className="mt-auto pt-4 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0B0C0E]">
                        <span className="group-hover:text-[#3A57FC] transition-colors">
                          Read article
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#3A57FC] group-hover:text-[#FF8800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}
