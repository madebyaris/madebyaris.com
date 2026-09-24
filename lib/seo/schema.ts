import { authorProfile, productionAbsoluteUrl, productionUrl, siteConfig } from './config'
import { decodeHtmlEntities, stripHtml } from './utils'

type JsonLdNode = Record<string, unknown>

export const schemaIds = {
  person: `${productionUrl}/#person`,
  organization: `${productionUrl}/#organization`,
  website: `${productionUrl}/#website`,
  logo: `${productionUrl}/#logo`,
  personImage: `${productionUrl}/#person-image`,
} as const

const ref = (id: string) => ({ '@id': id })

function cleanText(value: string): string {
  return decodeHtmlEntities(stripHtml(value))
}

/**
 * Entities shared by every page: the person, the business, and the site.
 * Rendered once in the root layout; page graphs point at them by @id.
 */
export function buildSiteGraph() {
  const person: JsonLdNode = {
    '@type': 'Person',
    '@id': schemaIds.person,
    name: authorProfile.name,
    url: productionAbsoluteUrl('/about'),
    image: {
      '@type': 'ImageObject',
      '@id': schemaIds.personImage,
      url: productionAbsoluteUrl(siteConfig.authorImage),
      caption: authorProfile.name,
    },
    jobTitle: authorProfile.jobTitle,
    description: `${authorProfile.yearsExperience}+ years building web products. ${authorProfile.roles.join('. ')}. Based in ${authorProfile.city}, ${authorProfile.country}, working with teams worldwide.`,
    email: `mailto:${siteConfig.email}`,
    worksFor: ref(schemaIds.organization),
    address: {
      '@type': 'PostalAddress',
      addressLocality: authorProfile.city,
      addressRegion: authorProfile.region,
      addressCountry: authorProfile.countryCode,
    },
    knowsLanguage: [...authorProfile.languages],
    knowsAbout: [...authorProfile.knowsAbout],
    award: [...authorProfile.roles],
    memberOf: authorProfile.programs.map((program) => ({
      '@type': 'ProgramMembership',
      programName: program.name,
      url: productionAbsoluteUrl(program.page),
      hostingOrganization: {
        '@type': 'Organization',
        name: program.host,
        ...('hostUrl' in program ? { url: program.hostUrl } : {}),
      },
    })),
    alumniOf: authorProfile.pastOrganizations.map((org) => ({
      '@type': 'Organization',
      name: org.name,
      ...('url' in org ? { url: org.url } : {}),
    })),
    sameAs: [...siteConfig.sameAs],
  }

  const organization: JsonLdNode = {
    '@type': 'Organization',
    '@id': schemaIds.organization,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: productionUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': schemaIds.logo,
      url: productionAbsoluteUrl(siteConfig.logo),
    },
    description: siteConfig.description,
    founder: ref(schemaIds.person),
    areaServed: 'Worldwide',
    address: {
      '@type': 'PostalAddress',
      addressLocality: authorProfile.city,
      addressRegion: authorProfile.region,
      addressCountry: authorProfile.countryCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.email,
      url: productionAbsoluteUrl('/contact'),
      availableLanguage: [...authorProfile.languages],
    },
    sameAs: [...siteConfig.sameAs],
  }

  const website: JsonLdNode = {
    '@type': 'WebSite',
    '@id': schemaIds.website,
    url: productionUrl,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    publisher: ref(schemaIds.organization),
    inLanguage: ['en', 'id'],
  }

  return { '@context': 'https://schema.org', '@graph': [person, organization, website] }
}

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ServiceInput {
  name: string
  description: string
  serviceType?: string
  areaServed?: string | string[]
  offers?: Array<{ name: string; description?: string }>
}

export type PageType =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'ProfilePage'
  | 'FAQPage'

export interface PageGraphInput {
  path: string
  name: string
  description: string
  type?: PageType
  inLanguage?: 'en' | 'id'
  /** Trail after Home. Home is added automatically. */
  breadcrumbs?: BreadcrumbItem[]
  service?: ServiceInput
  /** Only pass FAQs that are rendered visibly on the page. */
  faqs?: FaqItem[]
  /** Items listed on a collection page, e.g. the posts on a blog index page. */
  items?: Array<{ name: string; path: string }>
}

function buildBreadcrumbNode(url: string, trail: BreadcrumbItem[]): JsonLdNode {
  const items = [{ name: 'Home', path: '/' }, ...trail]
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: cleanText(item.name),
      item: productionAbsoluteUrl(item.path),
    })),
  }
}

function buildFaqNode(url: string, faqs: FaqItem[]): JsonLdNode {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: cleanText(faq.question),
      acceptedAnswer: { '@type': 'Answer', text: cleanText(faq.answer) },
    })),
  }
}

/**
 * Page-level graph: the WebPage plus optional Breadcrumb, Service, and FAQ
 * nodes, all linked to the site entities from `buildSiteGraph`.
 */
export function buildPageGraph(input: PageGraphInput) {
  const url = productionAbsoluteUrl(input.path)
  const type = input.type ?? 'WebPage'
  const personIsSubject = type === 'AboutPage' || type === 'ProfilePage'
  const graph: JsonLdNode[] = []

  const page: JsonLdNode = {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: cleanText(input.name),
    description: cleanText(input.description),
    inLanguage: input.inLanguage ?? 'en',
    isPartOf: ref(schemaIds.website),
    publisher: ref(schemaIds.organization),
    author: ref(schemaIds.person),
    ...(personIsSubject
      ? { mainEntity: ref(schemaIds.person), about: ref(schemaIds.person) }
      : { about: ref(input.service ? `${url}#service` : schemaIds.organization) }),
  }

  if (input.path !== '/') {
    page.breadcrumb = ref(`${url}#breadcrumb`)
    graph.push(buildBreadcrumbNode(url, input.breadcrumbs ?? [{ name: input.name, path: input.path }]))
  }

  if (input.service) {
    const { service } = input
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: cleanText(service.name),
      description: cleanText(service.description),
      serviceType: service.serviceType ?? cleanText(service.name),
      url,
      provider: ref(schemaIds.person),
      brand: ref(schemaIds.organization),
      areaServed: service.areaServed ?? 'Worldwide',
      ...(service.offers?.length
        ? {
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: cleanText(service.name),
              itemListElement: service.offers.map((offer) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: cleanText(offer.name),
                  ...(offer.description ? { description: cleanText(offer.description) } : {}),
                },
              })),
            },
          }
        : {}),
    })
  }

  if (input.items?.length) {
    page.mainEntity = ref(`${url}#items`)
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#items`,
      numberOfItems: input.items.length,
      itemListElement: input.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: cleanText(item.name),
        url: productionAbsoluteUrl(item.path),
      })),
    })
  }

  if (input.faqs?.length) {
    if (type === 'FAQPage') {
      Object.assign(page, { mainEntity: buildFaqNode(url, input.faqs).mainEntity })
    } else {
      page.hasPart = ref(`${url}#faq`)
      graph.push({ ...buildFaqNode(url, input.faqs), isPartOf: ref(`${url}#webpage`) })
    }
  }

  return { '@context': 'https://schema.org', '@graph': [page, ...graph] }
}

export function buildBlogPostGraph(input: {
  slug: string
  headline: string
  description?: string
  image?: string
  datePublished: string
  dateModified: string
  inLanguage?: 'en' | 'id'
  section?: string
  keywords?: string[]
  wordCount?: number
  readingMinutes?: number
}) {
  const path = `/blog/${input.slug}`
  const url = productionAbsoluteUrl(path)
  const headline = cleanText(input.headline)
  const description = input.description ? cleanText(input.description) : undefined

  const image = input.image ?? productionAbsoluteUrl(siteConfig.ogImage)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: headline,
        ...(description ? { description } : {}),
        inLanguage: input.inLanguage ?? 'en',
        isPartOf: ref(schemaIds.website),
        breadcrumb: ref(`${url}#breadcrumb`),
        primaryImageOfPage: { '@type': 'ImageObject', url: image },
      },
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        url,
        headline: headline.slice(0, 110),
        ...(description ? { description } : {}),
        image,
        datePublished: input.datePublished,
        dateModified: input.dateModified,
        ...(input.section ? { articleSection: cleanText(input.section) } : {}),
        ...(input.keywords?.length ? { keywords: input.keywords.map(cleanText) } : {}),
        ...(input.wordCount ? { wordCount: input.wordCount } : {}),
        ...(input.readingMinutes ? { timeRequired: `PT${input.readingMinutes}M` } : {}),
        mainEntityOfPage: ref(`${url}#webpage`),
        isPartOf: ref(schemaIds.website),
        author: ref(schemaIds.person),
        publisher: ref(schemaIds.organization),
        inLanguage: input.inLanguage ?? 'en',
      },
      buildBreadcrumbNode(url, [
        { name: 'Blog', path: '/blog' },
        { name: headline, path },
      ]),
    ],
  }
}
