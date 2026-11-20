import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const pageDescription =
  'Privacy policy for Made by Aris website, detailing how we collect, use, and protect your personal information.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy',
  description: pageDescription,
  path: '/privacy-policy',
  keywords: [
    'Privacy Policy',
    'Data Protection',
    'Personal Information',
    'Cookie Policy',
    'Website Terms',
    'User Privacy',
    'Information Collection',
    'Data Security',
    'GDPR Compliance',
    'Privacy Rights',
  ],
})

const privacyStructuredData = buildPageGraph({
  path: '/privacy-policy',
  name: 'Privacy Policy',
  description: pageDescription,
  type: 'WebPage',
})

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <JsonLd data={privacyStructuredData} />

      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li><Link href="/" className="hover:text-[#3A57FC] transition-colors">Home</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Privacy Policy</li>
        </ol>
      </nav>

      {/* Page Hero */}
      <PageHero
        eyebrow={{ icon: <Shield className="w-3.5 h-3.5" />, label: 'Legal Information' }}
        title="Privacy Policy"
      >
        <p className="mb-2">How we collect, use, and protect your personal information</p>
        <p className="text-sm text-white/80">Last updated: {lastUpdated}</p>
      </PageHero>

      {/* Main Content */}
      <section className="mb-16 max-w-4xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link
            href="/"
            className="btn-secondary inline-flex items-center gap-2 rounded-md py-2.5 px-4 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <p className="text-sm text-[#4B5563]">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-12">
          <div className="prose max-w-none [&_a]:text-[#3A57FC] [&_a:hover]:text-[#2944E0]">
            <p className="text-lg leading-relaxed">
              At Made by Aris, I am committed to protecting your privacy and ensuring the security of your personal information.
              This Privacy Policy explains how I collect, use, and safeguard your data when you visit my website or engage my services.
            </p>

            <h2>Information I collect</h2>
            <p>I may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> When you contact me through my website, I collect information such as your name, email address, phone number, and any other information you provide in your message.
              </li>
              <li>
                <strong>Usage Data:</strong> I automatically collect information about how you interact with my website, including your IP address, browser type, pages visited, time spent on pages, and other browsing actions.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> My website uses cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use the site.
              </li>
            </ul>

            <h2>How I use your information</h2>
            <p>I use the information I collect for the following purposes:</p>
            <ul>
              <li>To provide and maintain my services</li>
              <li>To respond to your inquiries and communicate with you</li>
              <li>To improve my website and services</li>
              <li>To analyze usage patterns and administer the site</li>
              <li>To protect my website and services from unauthorized access or activities</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Data security</h2>
            <p>
              I implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic storage is 100% secure, and I cannot guarantee absolute security.
            </p>

            <h2>Third-party services</h2>
            <p>
              I may use third-party services to help operate my website and provide services. These third parties may have access to your personal information only to perform specific tasks on my behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p>Third-party services I use may include:</p>
            <ul>
              <li>Hosting providers</li>
              <li>Analytics services</li>
              <li>Email service providers</li>
              <li>Payment processors (when applicable)</li>
            </ul>

            <h2>Cookies policy</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit my website. I use cookies to enhance your browsing experience and understand how you interact with my site.
            </p>
            <p>The types of cookies I use include:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytical/Performance Cookies:</strong> Help me understand how visitors interact with my website</li>
              <li><strong>Functionality Cookies:</strong> Allow the website to remember choices you make</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of my website.
            </p>

            <h2>Your data protection rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
            </ul>
            <p>
              To exercise any of these rights, please contact me using the information provided at the end of this policy.
            </p>

            <h2>Children&apos;s privacy</h2>
            <p>
              My website is not intended for children under 16 years of age. I do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided me with personal information, please contact me, and I will take steps to remove that information.
            </p>

            <h2>Changes to this privacy policy</h2>
            <p>
              I may update this Privacy Policy from time to time to reflect changes in my practices or for other operational, legal, or regulatory reasons. I will post the updated Privacy Policy on this page with a revised &quot;Last updated&quot; date.
            </p>
            <p>
              I encourage you to review this Privacy Policy periodically to stay informed about how I protect your information.
            </p>

            <h2>Contact information</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or my data practices, please contact me at:
            </p>
            <p>
              Email: <a href="mailto:arissetia.m@gmail.com">arissetia.m@gmail.com</a>
            </p>

            <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#4B5563]">
                By using my website, you acknowledge that you have read and understand this Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
          >
            <span>Ask me about your data</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/terms-of-service"
            className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold"
          >
            <span>Terms of Service</span>
          </Link>
        </div>
      </section>
    </>
  )
}
