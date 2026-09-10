export type DoorId = 'build' | 'level-up'

export type Door = {
  id: DoorId
  label: 'Build' | 'Level up'
  blurb: string
  cta: string
  href: string
}

export const contactTitle = 'Contact | Build or Level up | Aris Setiawan'
export const contactMeta =
  'Two doors: hire me to ship Next.js, WordPress, or AI. Or book Cursor mentoring. Remote. Sidoarjo, Indonesia. Mon-Sat 09:00-17:00 WIB.'

export const doors: readonly [Door, Door] = [
  {
    id: 'build',
    label: 'Build',
    blurb: 'Hire me to ship Next.js, WordPress, AI, or Laravel.',
    cta: 'Start a build',
    href: 'https://agency.madebyaris.com/build',
  },
  {
    id: 'level-up',
    label: 'Level up',
    blurb: 'Cursor mentoring and practical AI workflows for your team.',
    cta: 'Book mentoring',
    href: 'https://madebyaris.com/services/vibe-code-friend',
  },
]

export const contactCopy = {
  h1: "Tell me what you're building",
  lead: 'Two paths. Build: hire me to ship your Next.js, WordPress, or AI product. Level up: Cursor mentoring and practical AI workflows. Remote worldwide. English and Indonesian OK.',
  formHeading: 'Send me a message',
  doorFieldLabel: 'Which door?',
  formNote: "I'll get back to you within 24 hours.",
  emailLabel: 'Email',
  email: 'arissetia.m@gmail.com',
  locationLabel: 'Location',
  location: 'Sidoarjo, Indonesia',
  availabilityLabel: 'Availability',
  availability: 'Mon-Sat, 09:00-17:00 WIB',
  profilesHeading: 'Professional profiles',
  helpSection: 'Pick the path that fits: product build or workflow mentoring',
  closerH2: 'Ready to build or level up?',
  closerBody: 'Tell me about your product, timeline, and stack. Or ask about Cursor mentoring for your team.',
  footerBleed: 'Build or Level up. Pick a door above.',
} as const
