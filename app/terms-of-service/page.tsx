import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/ui/page-hero'
import { SectionWrapper } from '@/components/ui/section-wrapper'
import { EnhancedCard } from '@/components/ui/enhanced-card'

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
    <>
      {/* Page Hero */}
      <PageHero
        badge={{ text: "Legal Information", icon: FileText }}
        title="Terms of Service"
        description="Terms and conditions for using our website and services"
        variant="about"
      />

      {/* Main Content */}
      <SectionWrapper variant="default" padding="large">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Button asChild variant="outline" className="border-wp-navy/20 hover:bg-wp-navy/5 dark:border-wp-blue/20 dark:hover:bg-wp-blue/10">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <p className="text-wp-navy/70 dark:text-muted-foreground text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <EnhancedCard variant="glass" className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-wp-navy dark:prose-headings:text-foreground prose-p:text-wp-navy/80 dark:prose-p:text-muted-foreground prose-a:text-wp-blue hover:prose-a:text-wp-blue/80 prose-strong:text-wp-navy dark:prose-strong:text-foreground prose-li:text-wp-navy/80 dark:prose-li:text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Welcome to Made by Aris. These Terms of Service ("Terms") govern your use of the Made by Aris website 
                (the "Website") and the services offered by Aris Setiawan ("I", "me", or "my").
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
                <li>Using the Website in any way that could damage, disable, or impair the Website or interfere with others' use</li>
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
                <li>All fees are non-refundable unless otherwise agreed in writing</li>
              </ul>

              <h2>7. Disclaimers</h2>
              <p>
                The information on this Website is provided on an "as is" basis. I make no representations or warranties of any kind, 
                express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Website or the 
                information, products, services, or related graphics contained on the Website for any purpose.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                In no event will I be liable for any loss or damage including without limitation, indirect or consequential loss or 
                damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, 
                the use of this Website.
              </p>

              <h2>9. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Aris Setiawan from and against any and all claims, damages, 
                obligations, losses, liabilities, costs, and expenses (including attorney's fees) arising from your use of the Website 
                or your violation of these Terms.
              </p>

              <h2>10. Termination</h2>
              <p>
                I may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason 
                whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of Indonesia, without regard to its conflict of law provisions.
              </p>

              <h2>12. Changes to Terms</h2>
              <p>
                I reserve the right to modify or replace these Terms at any time. If a revision is material, I will try to provide at 
                least 30 days notice prior to any new terms taking effect.
              </p>

              <h2>13. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact me at:
              </p>
              <p>
                Email: <a href="mailto:arissetia.m@gmail.com" className="text-wp-blue hover:text-wp-blue/80">arissetia.m@gmail.com</a>
              </p>

              <div className="mt-12 pt-8 border-t border-wp-navy/10 dark:border-wp-blue/20">
                <p className="text-wp-navy/60 dark:text-muted-foreground text-sm">
                  By using my website and services, you acknowledge that you have read and agree to these Terms of Service.
                </p>
              </div>
            </div>
          </EnhancedCard>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex gap-4">
              <Button asChild variant="wp-primary">
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-wp-navy/20 hover:bg-wp-navy/5 dark:border-wp-blue/20 dark:hover:bg-wp-blue/10">
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
} 