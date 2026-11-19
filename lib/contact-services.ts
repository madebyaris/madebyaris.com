// Options for "What do you need?" on /contact. Pages deep-link with
// `/contact?service=<id>#contact-form` so the form opens on the right request.
export const contactServices = [
  { id: 'ai-implementation', label: 'Take an AI pilot to production or ship an AI system in our repo' },
  { id: 'ai', label: 'Add an AI feature, chatbot, or agent to my product' },
  { id: 'ai-mvp', label: 'Turn my AI product idea into a launch-ready MVP' },
  { id: 'cursor-mentoring', label: 'Cursor mentoring for me or my engineering team' },
  { id: 'product', label: 'Product build: SaaS, mobile app, Rust, commerce, or GTM tool' },
  { id: 'saas', label: 'Build a SaaS or web app that is cheap to run' },
  { id: 'engineering-specialist', label: 'Improve my React app, Vite build, Node API, database, or codebase' },
  { id: 'nextjs', label: 'Build or migrate a Next.js site or app' },
  { id: 'geo-aeo', label: 'AI search optimization (GEO, AEO, technical SEO) or free AI visibility snapshot' },
  { id: 'seo', label: 'SEO audit, keyword research, or monthly SEO' },
  { id: 'headless-wordpress', label: 'Headless WordPress with Next.js' },
  { id: 'wordpress', label: 'WordPress build, redesign, migration, or speed fix' },
  { id: 'wordpress-care', label: 'WordPress maintenance, support, or malware cleanup' },
  { id: 'code-fixing', label: 'Fix broken or AI-written code' },
  { id: 'vercel', label: 'Vercel deployment or hosting costs' },
  { id: 'php', label: 'PHP app, API, or legacy modernization' },
  { id: 'other', label: 'Something else' },
] as const

export type ContactServiceId = (typeof contactServices)[number]['id']

export function contactHref(service: ContactServiceId): string {
  return `/contact?service=${service}#contact-form`
}

export function contactServiceLabel(id: string | null | undefined): string | undefined {
  return contactServices.find((service) => service.id === id)?.label
}
