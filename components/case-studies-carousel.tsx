'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { blurDataURLs } from '@/lib/utils'

interface CaseStudy {
  title: string
  description: string
  image: string
  authors: { avatar: string }[]
  ctaText: string
  tags: string[]
  link: string
}

const caseStudies: CaseStudy[] = [
  {
    title: "Building Once UI, a Customizable Design System",
    description: "Development of a flexible and highly customizable design system using Next.js, with a focus on performance and accessibility.",
    image: "/case-1.png",
    authors: [
      { avatar: "/aris.png" },
    ],
    ctaText: "Read case study",
    tags: ["Next.js", "Design System", "Accessibility"],
    link: "/case-studies/once-ui"
  },
  {
    title: "Creating a Component Library",
    description: "A comprehensive look at how we built our component system that scales across products, ensuring consistency and developer experience.",
    image: "/case-1.png",
    authors: [
      { avatar: "/aris.png" },
    ],
    ctaText: "Read case study",
    tags: ["React", "TypeScript", "Component Library"],
    link: "/case-studies/component-library"
  },
  {
    title: "Design System Evolution",
    description: "The journey of evolving our design system to meet the needs of a growing organization, with insights into our process and decisions.",
    image: "/case-1.png",
    authors: [
      { avatar: "/aris.png" },
      { avatar: "/aris.png" },
    ],
    ctaText: "Read case study",
    tags: ["Design", "UX", "System Design"],
    link: "/case-studies/design-system-evolution"
  },
]

const CaseStudiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(caseStudies.map(() => false));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Mark image as loaded
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="relative min-h-[500px]">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 z-20 transform -translate-y-1/2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-800/80 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-zinc-800 transition-all"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 z-20 transform -translate-y-1/2">
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-800/80 flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-zinc-800 transition-all"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </button>
          </div>

          {/* Case studies */}
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-all duration-700 ${
                index === currentIndex 
                  ? 'opacity-100 z-10 translate-x-0' 
                  : index < currentIndex 
                    ? 'opacity-0 z-0 -translate-x-8' 
                    : 'opacity-0 z-0 translate-x-8'
              }`}
              style={{
                willChange: 'transform, opacity',
                contain: 'layout'
              }}
            >
              {/* Integrated card with image and content */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800 shadow-xl">
                {/* Placeholder while image loads */}
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 animate-pulse">
                    <div className="w-12 h-12 border-4 border-emerald-500/50 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Background image */}
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 980px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority={index === 0 || index === currentIndex}
                  placeholder="blur"
                  blurDataURL={blurDataURLs.warm}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageLoad(index)}
                />
                
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
                
                {/* Tags */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                  {study.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="grid md:grid-cols-2 gap-8 items-end">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-zinc-200 text-lg leading-relaxed mb-6 max-w-xl">
                        {study.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-3">
                        {study.authors.map((author, authorIndex) => (
                          <div
                            key={authorIndex}
                            className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md"
                          >
                            <Image
                              src={author.avatar}
                              alt="Author avatar"
                              fill
                              sizes="56px"
                              className="object-cover"
                              placeholder="blur"
                              blurDataURL={blurDataURLs.avatar}
                            />
                          </div>
                        ))}
                      </div>
                      <Link 
                        href={study.link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-all hover:shadow-lg"
                      >
                        {study.ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Progress indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
                  {caseStudies.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 w-8 rounded-full transition-all duration-500 ${
                        i === currentIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                      aria-label={`Go to case study ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesCarousel;

