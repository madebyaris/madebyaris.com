import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const revalidate = 86400 // Revalidate daily

// Generate Metadata and Structured Data
export function generateMetadata(): Metadata {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://madebyaris.com/terms-of-service/#webpage",
    "name": "Terms of Service | Made by Aris",
    "description": "Terms of service and conditions for Made by Aris website and services.",
    "url": "https://madebyaris.com/terms-of-service",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://madebyaris.com/#website"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://madebyaris.com",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://madebyaris.com/terms-of-service",
            "name": "Terms of Service"
          }
        }
      ]
    },
    "mainEntity": {
      "@type": "DigitalDocument",
      "name": "Made by Aris Terms of Service",
      "text": "These terms and conditions outline the rules and regulations for the use of Made by Aris's services.",
      "dateModified": new Date().toISOString(),
      "provider": {
        "@type": "Organization",
        "@id": "https://madebyaris.com/#organization",
        "name": "MadeByAris",
        "url": "https://madebyaris.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://madebyaris.com/logo.png",
          "width": "180",
          "height": "180"
        }
      },
      "about": {
        "@type": "Thing",
        "name": "Service Terms and Conditions",
        "description": "Terms and conditions governing the use of Made by Aris's web development and consulting services."
      }
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://madebyaris.com/#organization",
      "name": "MadeByAris",
      "url": "https://madebyaris.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://madebyaris.com/logo.png",
        "width": "180",
        "height": "180"
      }
    }
  }

  return {
    title: 'Terms of Service | Made by Aris',
    description: 'Terms of service and conditions for Made by Aris website and services.',
    keywords: [
      'Terms of Service',
      'Terms and Conditions',
      'Legal Agreement',
      'Service Terms',
      'Website Terms',
      'User Agreement',
      'Legal Terms',
      'Service Conditions',
      'Usage Policy',
      'Legal Information'
    ],
    alternates: {
      canonical: 'https://madebyaris.com/terms-of-service'
    },
    openGraph: {
      title: 'Terms of Service | Made by Aris',
      description: 'Terms of service and conditions for Made by Aris website and services.',
      url: 'https://madebyaris.com/terms-of-service',
      siteName: 'Made by Aris',
      locale: 'en_US',
      type: 'website',
    },
    other: {
      'structured-data': JSON.stringify(structuredData),
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    },
  }
}

export default function TermsOfServicePage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p>
            Welcome to Made by Aris. These Terms of Service (&quot;Terms&quot;) govern your use of the Made by Aris website 
            (the &quot;Website&quot;) and the services offered by Aris Setiawan (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;).
          </p>
          <p>
            By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the Terms, 
            you may not access the Website or use my services.
          </p>

          <h2>1. Services</h2>
          <p>
            I provide web development, design, and related services as described on the Website. The specific details, 
            deliverables, timelines, and costs for services will be outlined in a separate agreement or proposal for each project.
          </p>

          <h2>2. Use of the Website</h2>
          <p>You agree to use the Website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the Website.</p>
          <p>You are prohibited from:</p>
          <ul>
            <li>Using the Website in any way that could damage, disable, or impair the Website or interfere with others&apos; use</li>
            <li>Attempting to gain unauthorized access to any part of the Website, other accounts, or computer systems connected to the Website</li>
            <li>Using any robot, spider, or other automated means to access the Website</li>
            <li>Introducing viruses, trojans, worms, or other malicious code to the Website</li>
            <li>Collecting or harvesting any information from the Website without permission</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The Website and its original content, features, and functionality are owned by Aris Setiawan and are protected by 
            international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, 
            download, store, or transmit any of the material on the Website without my prior written consent.
          </p>

          <h2>4. Client Projects and Deliverables</h2>
          <p>
            For client projects, ownership of deliverables will be specified in the project agreement. Unless otherwise stated:
          </p>
          <ul>
            <li>Upon full payment, clients receive ownership of the final deliverables specifically created for their project</li>
            <li>I retain ownership of any pre-existing materials, frameworks, or tools used in creating the deliverables</li>
            <li>I reserve the right to display and link to completed client work as part of my portfolio unless otherwise agreed</li>
          </ul>

          <h2>5. User Content</h2>
          <p>
            If you submit content to the Website (such as comments, testimonials, or project information), you grant me a 
            non-exclusive, royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate, 
            create derivative works from, distribute, and display such content throughout the world in any media.
          </p>
          <p>
            You represent and warrant that you own or control all rights to the content you submit and that the content does not 
            violate these Terms or any applicable laws.
          </p>

          <h2>6. Payment Terms</h2>
          <p>
            Payment terms for services will be outlined in the project agreement or proposal. Unless otherwise specified:
          </p>
          <ul>
            <li>A deposit may be required before work begins</li>
            <li>Final payment is due upon completion of the project and before the transfer of deliverables</li>
            <li>Late payments may incur additional fees</li>
            <li>All fees are non-refundable unless otherwise stated</li>
          </ul>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, I shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including but not limited to, loss of profits, data, use, goodwill, or other 
            intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the Website or services</li>
            <li>Any conduct or content of any third party on the Website</li>
            <li>Any content obtained from the Website</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>

          <h2>8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Aris Setiawan from and against any claims, liabilities, damages, 
            judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to 
            your violation of these Terms or your use of the Website.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            The Website may contain links to third-party websites or services that are not owned or controlled by me. I have no 
            control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites 
            or services. You acknowledge and agree that I shall not be responsible or liable for any damage or loss caused by the 
            use of such websites or services.
          </p>

          <h2>10. Termination</h2>
          <p>
            I may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, 
            including, without limitation, if you breach these Terms.
          </p>
          <p>
            For client projects, termination terms will be specified in the project agreement. Either party may typically terminate 
            the agreement with written notice, subject to payment for work completed and other terms specified in the agreement.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict 
            of law provisions.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            I reserve the right to modify or replace these Terms at any time. If a revision is material, I will provide at least 
            30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at my sole 
            discretion.
          </p>
          <p>
            By continuing to access or use the Website after any revisions become effective, you agree to be bound by the revised 
            terms. If you do not agree to the new terms, you are no longer authorized to use the Website.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact me at:
          </p>
          <p>
            Email: <a href="mailto:arissetia.m@gmail.com">arissetia.m@gmail.com</a>
          </p>

          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-muted-foreground text-sm">
              By using the Website, you acknowledge that you have read and understand these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 