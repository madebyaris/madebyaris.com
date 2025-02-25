// Structured Data for the homepage
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://madebyaris.com/#person",
      "name": "Aris Setiawan",
      "jobTitle": "Senior Full-Stack Developer & Web Architecture Specialist",
      "description": "Senior Full-Stack Developer with 12+ years of enterprise experience, specializing in Next.js, React, WordPress, and PHP development.",
      "url": "https://madebyaris.com",
      "sameAs": [
        "https://github.com/madebyaris",
        "https://www.linkedin.com/in/arissetia"
      ],
      "knowsAbout": [
        "Next.js Development",
        "React Architecture",
        "WordPress Development",
        "PHP Development",
        "Full Stack Development",
        "Web Architecture",
        "Enterprise Solutions",
        "Headless CMS",
        "API Integration",
        "Performance Optimization"
      ],
      "worksFor": {
        "@type": "Organization",
        "@id": "https://madebyaris.com/about"
      },
      "award": "12+ Years of Enterprise Experience"
    },
    {
      "@type": "Organization",
      "@id": "https://madebyaris.com/#organization",
      "name": "Made by Aris",
      "url": "https://madebyaris.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://madebyaris.com/logo.png"
      },
      "description": "Enterprise web development services specializing in Next.js, React, WordPress, and modern web architecture.",
      "founder": {
        "@type": "Person",
        "@id": "https://madebyaris.com/#person"
      },
      "slogan": "Architecting scalable solutions with Next.js, React, and WordPress for enterprise clients"
    },
    {
      "@type": "WebSite",
      "@id": "https://madebyaris.com/#website",
      "url": "https://madebyaris.com",
      "name": "Made by Aris - Senior Full-Stack Developer",
      "description": "Professional web development services by Aris Setiawan, specializing in enterprise-scale web applications",
      "publisher": {
        "@type": "Organization",
        "@id": "https://madebyaris.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://madebyaris.com/#webpage",
      "url": "https://madebyaris.com",
      "name": "Senior Full-Stack Developer | Next.js, React & WordPress Architect | Aris Setiawan",
      "description": "Senior Full-Stack Developer with 12+ years of experience in Next.js, React, WordPress, and PHP. Specializing in enterprise-scale web applications and headless CMS architecture.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://madebyaris.com/#website"
      },
      "about": {
        "@type": "Person",
        "@id": "https://madebyaris.com/#person"
      },
      "provider": {
        "@type": "Organization",
        "@id": "https://madebyaris.com/#organization"
      },
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": ".w-full"
      }
    },
    {
      "@type": "Service",
      "@id": "https://madebyaris.com/#services",
      "name": "Enterprise Web Development Services",
      "provider": {
        "@type": "Organization",
        "@id": "https://madebyaris.com/#organization"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Expert Web Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Next.js Development",
              "description": "Modern web applications built with Next.js for optimal performance and scalability.",
              "url": "https://madebyaris.com/services/nextjs-development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WordPress Solutions",
              "description": "Expert WordPress development including custom themes, plugins, and headless solutions.",
              "url": "https://madebyaris.com/services/wordpress"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PHP Development",
              "description": "Custom PHP applications and solutions built with modern practices and robust architecture.",
              "url": "https://madebyaris.com/services/php-development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Headless CMS Development",
              "description": "Modern headless WordPress solutions with Next.js frontends for superior performance.",
              "url": "https://madebyaris.com/services/wordpress/headless-development"
            }
          }
        ]
      }
    },
    {
      "@type": "Blog",
      "@id": "https://madebyaris.com/#blog",
      "name": "Latest Posts",
      "description": "Recent thoughts and insights about web development",
      "url": "https://madebyaris.com/blog",
      "publisher": {
        "@type": "Organization",
        "@id": "https://madebyaris.com/#organization"
      }
    },
    {
      "@type": "ContactPoint",
      "@id": "https://madebyaris.com/#contact",
      "contactType": "customer service",
      "url": "https://madebyaris.com/contact",
      "description": "Let's work together to build your next project"
    }
  ]
}; 