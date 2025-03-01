import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const revalidate = 86400 // Revalidate daily

export const metadata: Metadata = {
  title: 'Privacy Policy | Made by Aris',
  description: 'Privacy policy for Made by Aris website, detailing how we collect, use, and protect your personal information.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'cookies policy',
    'GDPR compliance',
    'web development privacy',
  ],
  alternates: {
    canonical: 'https://madebyaris.com/privacy-policy'
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-transparent to-zinc-100/50 dark:from-zinc-900 dark:via-transparent dark:to-zinc-900/50" />
      </div>

      <div className="container relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4 -ml-4 text-muted-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p>
            At Made by Aris, I am committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how I collect, use, and safeguard your data when you visit my website or engage my services.
          </p>

          <h2>Information I Collect</h2>
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

          <h2>How I Use Your Information</h2>
          <p>I use the information I collect for the following purposes:</p>
          <ul>
            <li>To provide and maintain my services</li>
            <li>To respond to your inquiries and communicate with you</li>
            <li>To improve my website and services</li>
            <li>To analyze usage patterns and administer the site</li>
            <li>To protect my website and services from unauthorized access or activities</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            I implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. 
            However, no method of transmission over the Internet or electronic storage is 100% secure, and I cannot guarantee absolute security.
          </p>

          <h2>Third-Party Services</h2>
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

          <h2>Cookies Policy</h2>
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

          <h2>Your Data Protection Rights</h2>
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

          <h2>Children&apos;s Privacy</h2>
          <p>
            My website is not intended for children under 16 years of age. I do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided me with personal information, please contact me, and I will take steps to remove that information.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            I may update this Privacy Policy from time to time to reflect changes in my practices or for other operational, legal, or regulatory reasons. I will post the updated Privacy Policy on this page with a revised &ldquo;Last updated&rdquo; date.
          </p>
          <p>
            I encourage you to review this Privacy Policy periodically to stay informed about how I protect your information.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or my data practices, please contact me at:
          </p>
          <p>
            Email: <a href="mailto:arissetia.m@gmail.com">arissetia.m@gmail.com</a>
          </p>

          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-muted-foreground text-sm">
              By using my website, you acknowledge that you have read and understand this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 