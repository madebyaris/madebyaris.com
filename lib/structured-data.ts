import { productionUrl } from '@/lib/seo/config'

const site = productionUrl

// Structured Data for the homepage — always uses production URLs for crawlers
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${site}/#person`,
      name: 'Aris Setiawan',
      jobTitle: 'Senior Full-Stack Developer & Web Architecture Specialist',
      description:
        'Senior Full-Stack Developer with 12+ years of enterprise experience, specializing in Next.js, React, WordPress, and modern web architecture.',
      url: site,
      image: `${site}/aris.png`,
      sameAs: [
        'https://github.com/madebyaris',
        'https://www.linkedin.com/in/arissetia',
        'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe',
      ],
      knowsAbout: [
        'Next.js Development',
        'React Architecture',
        'WordPress Development',
        'PHP Development',
        'Full Stack Development',
        'Web Architecture',
        'Enterprise Solutions',
        'Headless CMS',
        'API Integration',
        'Performance Optimization',
        'Technical Leadership',
        'System Design',
      ],
      worksFor: {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
        name: 'MadeByAris',
        description:
          'Professional web development services specializing in Next.js, React, and WordPress solutions',
        url: site,
        logo: `${site}/logo.png`,
        sameAs: [
          'https://github.com/madebyaris',
          'https://www.linkedin.com/in/arissetia',
          'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe',
        ],
        offers: {
          '@type': 'Offer',
          itemOffered: [
            {
              '@type': 'Service',
              name: 'Next.js Development',
              description:
                'Enterprise-grade Next.js applications with optimal performance and SEO',
              url: `${site}/services/nextjs-development`,
            },
            {
              '@type': 'Service',
              name: 'WordPress Development',
              description:
                'Custom WordPress solutions including theme and plugin development',
              url: `${site}/services/wordpress`,
            },
            {
              '@type': 'Service',
              name: 'PHP Development',
              description:
                'Enterprise-grade PHP applications with custom APIs and architecture',
              url: `${site}/services/php-development`,
            },
          ],
        },
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Senior Full-Stack Developer',
        occupationLocation: {
          '@type': 'City',
          name: 'Sidoarjo',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'Indonesia',
          },
        },
        skills: [
          'Next.js',
          'React',
          'TypeScript',
          'WordPress',
          'PHP',
          'MySQL',
          'Node.js',
          'GraphQL',
          'System Architecture',
          'Performance Optimization',
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': `${site}/#organization`,
      name: 'Made by Aris',
      url: site,
      logo: {
        '@type': 'ImageObject',
        url: `${site}/logo.png`,
        width: '180',
        height: '180',
      },
      description:
        'Enterprise web development services specializing in Next.js, React, WordPress, and modern web architecture. Delivering high-performance, scalable solutions for businesses worldwide.',
      founder: {
        '@type': 'Person',
        '@id': `${site}/#person`,
      },
      slogan:
        'Architecting scalable solutions with Next.js, React, and WordPress for enterprise clients',
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Next.js Development',
              description:
                'Modern web applications built with Next.js for optimal performance and scalability.',
              url: `${site}/services/nextjs-development`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'WordPress Solutions',
              description:
                'Expert WordPress development including custom themes, plugins, and headless solutions.',
              url: `${site}/services/wordpress`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Enterprise Solutions',
              description:
                'Scalable enterprise web applications with modern architecture and robust performance.',
              url: `${site}/services`,
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      url: site,
      name: 'Made by Aris - Senior Full-Stack Developer',
      description:
        'Professional web development services by Aris Setiawan, specializing in enterprise-scale web applications and modern architecture',
      publisher: {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': `${site}/#webpage`,
      url: site,
      name: 'Senior Full-Stack Developer | Next.js & WordPress | MadeByAris',
      description:
        '12+ years building enterprise apps with Next.js, React, WordPress, and PHP. Headless CMS and scalable architecture. Indonesia-based, worldwide clients.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
      },
      about: {
        '@type': 'Person',
        '@id': `${site}/#person`,
      },
      provider: {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': site,
              name: 'Home',
            },
          },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': `${site}/#services`,
      name: 'Enterprise Web Development Services',
      provider: {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
      },
      areaServed: 'Worldwide',
      description:
        'Comprehensive web development services specializing in Next.js, React, WordPress, and modern web architecture.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Expert Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Next.js Development',
              url: `${site}/services/nextjs-development`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'WordPress Solutions',
              url: `${site}/services/wordpress`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'PHP Development',
              url: `${site}/services/php-development`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Headless CMS Development',
              url: `${site}/services/wordpress/headless-development`,
            },
          },
        ],
      },
    },
    {
      '@type': 'Blog',
      '@id': `${site}/#blog`,
      name: 'Latest Posts',
      description: 'Recent thoughts and insights about web development',
      url: `${site}/blog`,
      publisher: {
        '@type': 'Organization',
        '@id': `${site}/#organization`,
      },
    },
    {
      '@type': 'ContactPoint',
      '@id': `${site}/#contact`,
      contactType: 'customer service',
      url: `${site}/contact`,
      description: "Let's work together to build your next project",
      availableLanguage: ['English', 'Indonesian'],
      areaServed: 'Worldwide',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    },
  ],
}
