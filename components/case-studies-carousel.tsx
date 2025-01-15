'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CaseStudy {
  title: string
  description: string
  image: string
  authors: { avatar: string }[]
  ctaText: string
}

const caseStudies: CaseStudy[] = [
  {
    title: "Building Once UI, a Customizable Design System",
    description: "Development of a flexible and highly customizable design system using Next.js for front-end and Figma for design collaboration.",
    image: "/case-1.png",
    authors: [
      { avatar: "/aris.png" },
    ],
    ctaText: "Read case study",
  },
  {
    title: "Creating a Component Library",
    description: "A comprehensive look at how we built our component system that scales across products.",
    image: "/placeholder-1200-600.svg",
    authors: [
      { avatar: "/aris.png" },
    ],
    ctaText: "Read case study",
  },
  {
    title: "Design System Evolution",
    description: "The journey of evolving our design system to meet the needs of a growing organization.",
    image: "/placeholder-1200-600.svg",
    authors: [
      { avatar: "/aris.png" },
      { avatar: "/aris.png" },
    ],
    ctaText: "Read case study",
  },
]

const CaseStudiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="w-full md:mt-[-15%]">
      <div className="mx-auto">
        <div className="relative">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="space-y-8">
                <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#011714] to-transparent h-24" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                    {caseStudies.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          i === currentIndex ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                  <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      {study.title}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-zinc-400 text-lg">
                      {study.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-3">
                        {study.authors.map((author, authorIndex) => (
                          <div
                            key={authorIndex}
                            className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#011714]"
                          >
                            <Image
                              src={author.avatar}
                              alt="Author avatar"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <Button 
                        variant="link" 
                        className="text-emerald-400 hover:text-emerald-300 p-0 h-auto font-normal"
                      >
                        {study.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
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

