// Structured Data for the homepage
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://madebyaris.com/#person",
      "name": "Aris Setiawan",
      "jobTitle": "Senior Full-Stack Developer & Web Architecture Specialist",
      "description": "Senior Full-Stack Developer with 12+ years of enterprise experience, specializing in Next.js, React, WordPress, and modern web architecture.",
      "url": "https://madebyaris.com",
      "image": "https://madebyaris.com/aris.png",
      "sameAs": [
        "https://github.com/madebyaris",
        "https://www.linkedin.com/in/arissetia",
        "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
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
        "Performance Optimization",
        "Technical Leadership",
        "System Design"
      ],
      "worksFor": {
        "@type": "Organization",
        "@id": "https://madebyaris.com/about",
        "name": "MadeByAris",
        "description": "Professional web development services specializing in Next.js, React, and WordPress solutions",
        "url": "https://madebyaris.com",
        "logo": "https://madebyaris.com/aris.png",
        "sameAs": [
          "https://github.com/madebyaris",
          "https://www.linkedin.com/in/arissetia",
          "https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe"
        ],
        "offers": {
          "@type": "Offer",
          "itemOffered": [
            {
              "@type": "Service",
              "name": "Next.js Development",
              "description": "Enterprise-grade Next.js applications with optimal performance and SEO",
              "url": "https://madebyaris.com/services/nextjs-development"
            },
            {
              "@type": "Service",
              "name": "WordPress Development",
              "description": "Custom WordPress solutions including theme and plugin development",
              "url": "https://madebyaris.com/services/wordpress"
            },
            {
              "@type": "Service",
              "name": "React Architecture",
              "description": "Scalable React applications with modern architecture patterns",
              "url": "https://madebyaris.com/services/react-development"
            }
          ]
        }
      },
      "award": "12+ Years of Enterprise Experience",
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Senior Full-Stack Developer",
        "occupationLocation": {
          "@type": "City",
          "name": "Sidoarjo",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Indonesia"
          }
        },
        "skills": [
          "Next.js",
          "React",
          "TypeScript",
          "WordPress",
          "PHP",
          "MySQL",
          "Node.js",
          "GraphQL",
          "System Architecture",
          "Performance Optimization"
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://madebyaris.com/#organization",
      "name": "Made by Aris",
      "url": "https://madebyaris.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://madebyaris.com/logo.png",
        "width": "180",
        "height": "180"
      },
      "description": "Enterprise web development services specializing in Next.js, React, WordPress, and modern web architecture. Delivering high-performance, scalable solutions for businesses worldwide.",
      "founder": {
        "@type": "Person",
        "@id": "https://madebyaris.com/#person"
      },
      "slogan": "Architecting scalable solutions with Next.js, React, and WordPress for enterprise clients",
      "areaServed": "Worldwide",
      "award": "12+ Years of Enterprise Experience",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
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
              "name": "Enterprise Solutions",
              "description": "Scalable enterprise web applications with modern architecture and robust performance.",
              "url": "https://madebyaris.com/services"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://madebyaris.com/#website",
      "url": "https://madebyaris.com",
      "name": "Made by Aris - Senior Full-Stack Developer",
      "description": "Professional web development services by Aris Setiawan, specializing in enterprise-scale web applications and modern architecture",
      "publisher": {
        "@type": "Organization",
        "@id": "https://madebyaris.com/#organization"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://madebyaris.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://madebyaris.com/#webpage",
      "url": "https://madebyaris.com",
      "name": "Senior Full-Stack Developer | Next.js, React & WordPress Architect | Aris Setiawan",
      "description": "Senior Full-Stack Developer with 12+ years of experience in Next.js, React, WordPress, and PHP. Specializing in enterprise-scale web applications and modern architecture.",
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
          }
        ]
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
      "description": "Comprehensive web development services specializing in Next.js, React, WordPress, and modern web architecture. Delivering high-performance, scalable solutions for businesses worldwide.",
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
      "@type": "Product",
      "@id": "https://madebyaris.com/#product",
      "name": "Web Development Services",
      "description": "Professional web development services including Next.js, WordPress, and PHP solutions for businesses worldwide.",
      "brand": {
        "@type": "Brand",
        "name": "Made by Aris"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "highPrice": 50000,
        "lowPrice": 5000,
        "offerCount": 6,
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "25",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Tech Director at E-commerce Company"
          },
          "reviewBody": "Working with Aris transformed our e-commerce platform. His deep understanding of Next.js and performance optimization resulted in significantly faster load times and better user engagement. The codebase is clean, well-documented, and easy to maintain."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Founder of Tech Startup"
          },
          "reviewBody": "Aris helped us migrate our application to Next.js 14, implementing server components and the new app router. The improvement in performance and SEO was immediate. His technical expertise and clear communication made the process smooth."
        }
      ]
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
      "description": "Let's work together to build your next project",
      "availableLanguage": ["English", "Indonesian"],
      "areaServed": "Worldwide",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    }
  ]
}; 