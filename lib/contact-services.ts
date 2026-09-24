// Options for "What do you need?" on /contact. Pages deep-link with
// `/contact?service=<id>#contact-form` so the form opens on the right request.
export const contactServices = [
  { id: 'nextjs', label: 'Build or migrate a Next.js site or app' },
  { id: 'headless-wordpress', label: 'Headless WordPress with Next.js' },
  { id: 'wordpress', label: 'WordPress theme, plugin, or speed fix' },
  { id: 'ai', label: 'Add an AI feature, agent, or chatbot' },
  { id: 'cursor-mentoring', label: 'Cursor mentoring for me or my team' },
  { id: 'code-fixing', label: 'Fix broken or AI-written code' },
  { id: 'vercel', label: 'Vercel deployment or hosting costs' },
  { id: 'seo', label: 'Next.js SEO and Core Web Vitals' },
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
