import { productionUrl, siteConfig } from './config'

const llmsLinks = [
  { title: 'Home', url: productionUrl },
  { title: 'About', url: `${productionUrl}/about` },
  { title: 'Services', url: `${productionUrl}/services` },
  { title: 'Next.js Development', url: `${productionUrl}/services/nextjs-development` },
  { title: 'WordPress Development', url: `${productionUrl}/services/wordpress` },
  { title: 'PHP Development', url: `${productionUrl}/services/php-development` },
  { title: 'Blog', url: `${productionUrl}/blog` },
  { title: 'Projects', url: `${productionUrl}/projects` },
  { title: 'Contact', url: `${productionUrl}/contact` },
  { title: 'Sitemap', url: `${productionUrl}/sitemap.xml` },
]

export function buildLlmsTxt(): string {
  const linkBlock = llmsLinks.map((link) => `- [${link.title}](${link.url})`).join('\n')

  return `# ${siteConfig.name}

> ${siteConfig.description} Blog content is managed in WordPress and rendered via Next.js.

## Resources

${linkBlock}
`
}
