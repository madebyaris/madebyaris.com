import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, Shield, Scale, Users, Mail } from 'lucide-react'

export const revalidate = 86400 // Revalidate daily

// Generate Metadata and Structured Data
export function generateMetadata(): Metadata {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://madebyaris.com/terms-of-service/#webpage",
    "name": "Terms of Service | Made by Aris",
    "description": "Terms of service and conditions for Made by Aris website and services.",
    "url": "https://madebyaris.com/terms-of-service"
  }

  return {
    title: 'Terms of Service | Made by Aris',
    description: 'Terms of service and conditions for Made by Aris website and services.',
    keywords: [
      'Terms of Service',
      'Terms and Conditions',
      'Legal Agreement',
      'Service Terms'
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
  }
}

const sections = [
  { id: 'services', title: '1. Services', icon: Shield },
  { id: 'use', title: '2. Use of the Website', icon: Users },
  { id: 'ip', title: '3. Intellectual Property', icon: Scale },
  { id: 'projects', title: '4. Client Projects', icon: FileText },
]

export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Terms of Service</li>
        </ol>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <FileText className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Legal</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Terms of
          <span className="block gradient-text font-light">Service</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
          Terms and conditions for using our website and services.
        </p>

        <p className="text-sm text-zinc-400">
          Last updated: {lastUpdated}
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Quick Navigation */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sections.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-lg transition-all group text-center"
            >
              <div className="p-2 bg-zinc-100 rounded-lg w-fit mx-auto mb-2 group-hover:bg-orange-100 transition-colors">
                <section.icon className="w-4 h-4 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <span className="text-xs font-medium text-zinc-700 group-hover:text-orange-600 transition-colors">
                {section.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Main Content */}
      <section className="mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="prose prose-zinc max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-orange-500 hover:prose-a:text-orange-600 prose-strong:text-zinc-900 prose-li:text-zinc-600">
            
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

            <h2 id="use" className="scroll-mt-24">2. Use of the Website</h2>
            <p>You agree to use the Website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the Website.</p>
            <p>You are prohibited from:</p>
            <ul>
              <li>Using the Website in any way that could damage, disable, or impair the Website or interfere with others&apos; use</li>
              <li>Attempting to gain unauthorized access to any part of the Website, other accounts, or computer systems connected to the Website</li>
              <li>Using any robot, spider, or other automated means to access the Website</li>
              <li>Introducing viruses, trojans, worms, or other malicious code to the Website</li>
              <li>Collecting or harvesting any information from the Website without permission</li>
            </ul>

            <h2 id="ip" className="scroll-mt-24">3. Intellectual Property</h2>
            <p>
              The Website and its original content, features, and functionality are owned by Aris Setiawan and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, 
              download, store, or transmit any of the material on the Website without my prior written consent.
            </p>

            <h2 id="projects" className="scroll-mt-24">4. Client Projects and Deliverables</h2>
            <p>
              For client projects, ownership of deliverables will be specified in the project agreement. Unless otherwise stated:
            </p>
            <ul>
              <li>Upon full payment, clients receive ownership of the final deliverables specifically created for their project</li>
              <li>I retain ownership of any pre-existing materials, frameworks, or tools used in creating the deliverables</li>
              <li>I reserve the right to display and link to completed client work as part of my portfolio unless otherwise agreed</li>
            </ul>

            <h2 className="scroll-mt-24">5. User Content</h2>
            <p>
              If you submit content to the Website (such as comments, testimonials, or project information), you grant me a 
              non-exclusive, royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate, 
              create derivative works from, distribute, and display such content throughout the world in any media.
            </p>
            <p>
              You represent and warrant that you own or control all rights to the content you submit and that the content does not 
              violate these Terms or any applicable laws.
            </p>

            <h2 className="scroll-mt-24">6. Payment Terms</h2>
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

            <h2 className="scroll-mt-24">8. Limitation of Liability</h2>
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

            <h2 className="scroll-mt-24">11. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of Indonesia, without regard to its conflict of law provisions.
            </p>

            <h2 className="scroll-mt-24">12. Changes to Terms</h2>
            <p>
              I reserve the right to modify or replace these Terms at any time. If a revision is material, I will try to provide at 
              least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="scroll-mt-24">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact me at:
            </p>
            <p>
              Email: <a href="mailto:arissetia.m@gmail.com">arissetia.m@gmail.com</a>
            </p>

            <div className="mt-12 pt-8 border-t border-zinc-200">
              <p className="text-sm text-zinc-500">
                By using my website and services, you acknowledge that you have read and agree to these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[300px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 min-h-[300px] relative">
          <h2 className="md:text-3xl lg:text-4xl leading-tight text-2xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Have Questions?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Feel free to reach out if you have any questions about these terms or our services.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/privacy-policy"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <Shield className="w-4 h-4" />
              <span>Privacy Policy</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
