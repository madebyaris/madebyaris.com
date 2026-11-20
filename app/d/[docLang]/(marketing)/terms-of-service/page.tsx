import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Shield, Scale, Users } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { CtaBand } from '@/components/page/cta-band'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const pageDescription =
  'Terms of service and conditions for Made by Aris website and services.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service',
  description: pageDescription,
  path: '/terms-of-service',
  keywords: [
    'Terms of Service',
    'Terms and Conditions',
    'Legal Agreement',
    'Service Terms',
  ],
})

const termsStructuredData = buildPageGraph({
  path: '/terms-of-service',
  name: 'Terms of Service',
  description: pageDescription,
  type: 'WebPage',
})

const sections = [
  { id: 'services', title: '1. Services', icon: Shield },
  { id: 'use', title: '2. Use of the website', icon: Users },
  { id: 'ip', title: '3. Intellectual property', icon: Scale },
  { id: 'projects', title: '4. Client projects', icon: FileText },
]

export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <JsonLd data={termsStructuredData} />

      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li><Link href="/" className="hover:text-[#3A57FC] transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Terms of Service</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <FileText className="w-3.5 h-3.5" />, label: 'Legal' }}
        title="Terms of"
        accent="Service"
      >
        <p className="mb-2">
          Terms and conditions for using our website and services.
        </p>
        <p className="text-sm text-white/80">
          Last updated: {lastUpdated}
        </p>
      </PageHero>

      {/* Quick Navigation */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 group text-center"
            >
              <div className="p-2.5 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mx-auto mb-3 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <section.icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors">
                {section.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Main Content */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-12">
          <div className="prose max-w-none [&_a]:text-[#3A57FC] [&_a:hover]:text-[#2944E0]">
            <p className="text-lg leading-relaxed mb-8">
              Welcome to Made by Aris. These Terms of Service (&quot;Terms&quot;) govern your use of the Made by Aris website
              (the &quot;Website&quot;) and the services offered by Aris Setiawan (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;).
            </p>

            <p className="mb-8">
              By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the Terms,
              you may not access the Website or use my services.
            </p>

            <h2 id="services" className="scroll-mt-24">1. Services</h2>
            <p>
              I provide web development, design, and related services as described on the Website. The specific details,
              deliverables, timelines, and costs for services will be outlined in a separate agreement or proposal for each project.
            </p>

            <h2 id="use" className="scroll-mt-24">2. Use of the website</h2>
            <p>You agree to use the Website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the Website.</p>
            <p>You are prohibited from:</p>
            <ul>
              <li>Using the Website in any way that could damage, disable, or impair the Website or interfere with others&apos; use</li>
              <li>Attempting to gain unauthorized access to any part of the Website, other accounts, or computer systems connected to the Website</li>
              <li>Using any robot, spider, or other automated means to access the Website</li>
              <li>Introducing viruses, trojans, worms, or other malicious code to the Website</li>
              <li>Collecting or harvesting any information from the Website without permission</li>
            </ul>

            <h2 id="ip" className="scroll-mt-24">3. Intellectual property</h2>
            <p>
              The Website and its original content, features, and functionality are owned by Aris Setiawan and are protected by
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish,
              download, store, or transmit any of the material on the Website without my prior written consent.
            </p>

            <h2 id="projects" className="scroll-mt-24">4. Client projects and deliverables</h2>
            <p>
              For client projects, ownership of deliverables will be specified in the project agreement. Unless otherwise stated:
            </p>
            <ul>
              <li>Upon full payment, clients receive ownership of the final deliverables specifically created for their project</li>
              <li>I retain ownership of any pre-existing materials, frameworks, or tools used in creating the deliverables</li>
              <li>I reserve the right to display and link to completed client work as part of my portfolio unless otherwise agreed</li>
            </ul>

            <h2 className="scroll-mt-24">5. User content</h2>
            <p>
              If you submit content to the Website (such as comments, testimonials, or project information), you grant me a
              non-exclusive, royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate,
              create derivative works from, distribute, and display such content throughout the world in any media.
            </p>
            <p>
              You represent and warrant that you own or control all rights to the content you submit and that the content does not
              violate these Terms or any applicable laws.
            </p>

            <h2 className="scroll-mt-24">6. Payment terms</h2>
            <p>
              Payment terms for services will be outlined in the project agreement or proposal. Unless otherwise specified:
            </p>
            <ul>
              <li>A deposit may be required before work begins</li>
              <li>Final payment is due upon completion of the project and before the transfer of deliverables</li>
              <li>Late payments may incur additional fees</li>
              <li>All fees are non-refundable unless otherwise agreed in writing</li>
            </ul>

            <h2 className="scroll-mt-24">7. Disclaimers</h2>
            <p>
              The information on this Website is provided on an &quot;as is&quot; basis. I make no representations or warranties of any kind,
              express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Website or the
              information, products, services, or related graphics contained on the Website for any purpose.
            </p>

            <h2 className="scroll-mt-24">8. Limitation of liability</h2>
            <p>
              In no event will I be liable for any loss or damage including without limitation, indirect or consequential loss or
              damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with,
              the use of this Website.
            </p>

            <h2 className="scroll-mt-24">9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Aris Setiawan from and against any and all claims, damages,
              obligations, losses, liabilities, costs, and expenses (including attorney&apos;s fees) arising from your use of the Website
              or your violation of these Terms.
            </p>

            <h2 className="scroll-mt-24">10. Termination</h2>
            <p>
              I may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 className="scroll-mt-24">11. Governing law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of Indonesia, without regard to its conflict of law provisions.
            </p>

            <h2 className="scroll-mt-24">12. Changes to terms</h2>
            <p>
              I reserve the right to modify or replace these Terms at any time. If a revision is material, I will try to provide at
              least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="scroll-mt-24">13. Contact information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact me at:
            </p>
            <p>
              Email: <a href="mailto:arissetia.m@gmail.com">arissetia.m@gmail.com</a>
            </p>

            <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#4B5563]">
                By using my website and services, you acknowledge that you have read and agree to these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about these terms?"
        body="Email me or use the contact form. I reply within 24 hours and answer questions about these terms in plain language."
        primary={{ href: '/contact', label: 'Ask me about these terms' }}
        secondary={{ href: '/privacy-policy', label: 'Privacy Policy' }}
      />
    </>
  )
}
