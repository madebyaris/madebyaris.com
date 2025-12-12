'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare } from 'lucide-react'

const testimonialsData = [
  {
    quote: "Aris transformed our outdated WordPress site into a blazing-fast headless application. His expertise in Next.js and performance optimization is unmatched.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "Digital Agency"
  },
  {
    quote: "Working with Aris was a game-changer for our e-commerce platform. His PHP and API development skills delivered scalable solutions that handle millions of requests.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "E-Shop Inc."
  },
  {
    quote: "Aris\'s Vibe Code Friend service helped our team level up their development workflow. The AI-powered assistance and infrastructure consulting were invaluable.",
    author: "Emily Rodriguez",
    role: "Engineering Lead",
    company: "Tech Startup"
  },
  {
    quote: "From custom WordPress plugins to enterprise Next.js architectures, Aris delivers quality and innovation in every project.",
    author: "David Kim",
    role: "Founder",
    company: "Innovation Labs"
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg md:text-xl italic text-wp-navy/80 dark:text-muted-foreground mb-6 leading-relaxed text-center">
                  &ldquo;{testimonialsData[currentIndex].quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-wp-gold/20 to-wp-blue/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-wp-gold" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-wp-navy dark:text-foreground">{testimonialsData[currentIndex].author}</p>
                    <p className="text-sm text-wp-blue/70 dark:text-wp-gold/70">
                      {testimonialsData[currentIndex].role}, {testimonialsData[currentIndex].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        
        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-wp-gold dark:bg-wp-blue'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
