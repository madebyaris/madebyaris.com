import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Compass, RefreshCw } from 'lucide-react'
import { TableOfContents } from '@/components/table-of-contents'
import { SmoothScroll } from '@/components/smooth-scroll'
import { WordPressContent } from '@/components/wordpress-content'
import { convertBlocks, enhanceRenderedHTML } from 'wp-block-to-html/core'
import { FeaturedImage } from '@/components/featured-image'
import { AuthorImage } from '@/components/author-image'
import { RelatedPostCard } from '@/components/related-post-card'
import { getPost, getPosts, type ProcessedPost } from '@/lib/wordpress'
import { authorProfile, buildBlogPostGraph, buildBlogPostMetadata, isIndonesianSlug, siteConfig } from '@/lib/seo'
import { blogCategoryCopy, blogCategoryPath, hubForCategory, primaryCategory, topicHubs } from '@/lib/topics'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'
import { documentLangFromBlogSlug, isDocumentLang } from '@/lib/document-lang'

export const revalidate = 604800 // 7 days; webhook refreshes a post on publish

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
    notFound()
  }
  try {
    const post = await getPost(slug)
    if (!post) {
      notFound()
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
    const posts = await getPosts({ per_page: 20 })
    return posts.map((post) => ({
      docLang: documentLangFromBlogSlug(post.slug),
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
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
    return addIdsToHeadings(html)
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
  return (
    <Suspense fallback={<p className="text-sm text-zinc-500 py-8">Loading…</p>}>
      <BlogPostResolved docLang={docLang} slug={slug} />
    </Suspense>
  )
}

async function BlogPostResolved({ docLang, slug }: { docLang: string; slug: string }) {
  if (!isDocumentLang(docLang) || docLang !== documentLangFromBlogSlug(slug)) {
    notFound()
  }

  const post = await getPost(slug)
  if (!post) {
    notFound()
  }

  const category = primaryCategory(post.categories)
  const categoryCopy = category ? blogCategoryCopy(category.slug) : undefined
  const hub = hubForCategory(category?.slug)
  const relatedPosts = await getRelatedPosts(post, category?.id)

  const content = renderContent(post)
  const headings = extractHeadings(content)
  const readingTime = getReadingTime(content)
  const featuredImageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const plainTitle = post.title.rendered.replace(/<[^>]*>/g, '')
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
      <JsonLd data={articleStructuredData} />

      <div className="mx-auto max-w-[860px] pt-4 pb-8">
        <nav className="mb-8 text-sm text-zinc-500" aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-1">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="px-2">/</li>
            <li>
              <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            </li>
            {categoryCopy && category && (
              <>
                <li aria-hidden="true" className="px-2">/</li>
                <li>
                  <Link href={blogCategoryPath(category.slug)} className="hover:text-orange-500 transition-colors">
                    {category.name}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true" className="px-2">/</li>
            <li className="truncate max-w-[200px] sm:max-w-xs text-zinc-900">{plainTitle}</li>
          </ol>
        </nav>

        <article lang={isIndonesian ? 'id' : undefined}>
          <header className="mb-10">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-zinc-900 leading-[1.05] tracking-tighter mb-6"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
              <span>
                By{' '}
                <Link href="/about" className="font-medium text-zinc-900 hover:text-orange-500 transition-colors">
                  {authorProfile.name}
                </Link>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              {wasUpdated && (
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="h-4 w-4" />
                  Updated <time dateTime={post.modified}>{formatDate(post.modified)}</time>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readingTime} min read
              </span>
            </div>

            {hub && (
              <Link
                href={hub.path}
                lang="en"
                className="mt-6 flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-sm hover:shadow-md transition-all group"
              >
                <span className="p-2 bg-orange-50 rounded-xl">
                  <Compass className="h-4 w-4 text-orange-500" />
                </span>
                <span className="text-sm text-zinc-600">
                  Part of the <span className="font-medium text-zinc-900">{hub.name} guide</span>: a reading order, rules you can copy, and a cost estimate.
                </span>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
              </Link>
            )}
          </header>

          {featuredImageUrl && (
            <FeaturedImage src={featuredImageUrl} alt={plainTitle} width={800} height={450} />
          )}

          {headings.length > 0 && <TableOfContents headings={headings} />}

          <WordPressContent content={content} estimatedReadTime={readingTime} />

          {archivedCategories.length > 0 && (
            <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-wrap items-center gap-2" lang="en">
              <span className="text-sm text-zinc-500 mr-1">More on</span>
              {archivedCategories.map((c) => (
                <Link
                  key={c.id}
                  href={blogCategoryPath(c.slug)}
                  className="px-3 py-1.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          )}

          <aside className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 md:p-8 bg-white/80 rounded-2xl shadow-sm" lang="en">
            <AuthorImage src={siteConfig.authorImage} alt={authorProfile.name} width={80} height={80} />
            <div className="flex-1 text-center sm:text-left">
              <p className="font-semibold text-lg text-zinc-900 mb-1">{authorProfile.name}</p>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                {authorProfile.jobTitle} with {authorProfile.yearsExperience}+ years of client work, based in{' '}
                {authorProfile.city}, {authorProfile.country}. {authorProfile.roles.join('. ')}.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm">
                <Link href="/about" className="font-medium text-zinc-900 hover:text-orange-500 transition-colors">
                  About me
                </Link>
                <Link href="/cursor-ambassador" className="font-medium text-zinc-900 hover:text-orange-500 transition-colors">
                  Cursor Ambassador
                </Link>
                {authorLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-zinc-500 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="mt-8 rounded-2xl bg-zinc-900 p-6 md:p-8 text-white" lang="en">
            {hub ? (
              <>
                <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-2">
                  Want your team shipping with Cursor like this?
                </h2>
                <p className="text-sm text-zinc-400 mb-5 max-w-xl">
                  I set up project rules and a review habit on one of your real repos, then help the rest of the team adopt it. English or Indonesian.
                </p>
                <Link
                  href={contactHref('cursor-mentoring')}
                  className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
                >
                  Get Cursor mentoring for your team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-2">
                  Need this built instead of read about?
                </h2>
                <p className="text-sm text-zinc-400 mb-5 max-w-xl">
                  Send me your project. I reply within 24 hours and tell you plainly whether I’m the right fit.
                </p>
                <Link
                  href={contactHref('nextjs')}
                  className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
                >
                  Send me your project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </>
            )}
          </div>

          <div className="mt-8">
            <Link
              href={categoryCopy && category ? blogCategoryPath(category.slug) : '/blog'}
              className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-orange-500 transition-colors"
              lang="en"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {categoryCopy && category ? `All ${category.name} posts` : 'Back to the blog'}
            </Link>
          </div>
        </article>
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-12 mb-8" lang="en">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-8 flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-orange-500" />
            {category ? `More on ${category.name}` : 'Keep reading'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <RelatedPostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
