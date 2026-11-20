'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const resizeObserver = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height)
    })

    resizeObserver.observe(el)
    return () => resizeObserver.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 15%', 'end 55%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative pb-6">
        {data.map((item, index) => (
          <div
            key={`timeline-entry-${index}`}
            className="flex justify-start pt-6 md:pt-10 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-20 items-center top-28 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-9 w-9 absolute left-3.5 rounded-full bg-white border border-[#DDE4FF] shadow-xs flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-[#3A57FC]" />
              </div>
              <h3 className="hidden md:block font-display text-lg md:pl-20 md:text-2xl font-bold tracking-tight text-[#0B0C0E]">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-2 md:pl-4 w-full">
              <h3 className="md:hidden block font-display text-lg mb-3 text-left font-bold text-[#0B0C0E]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + 'px' }}
          className="absolute left-8 top-0 overflow-hidden w-px bg-[#E5E7EB]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] -ml-[0.5px] bg-gradient-to-t from-[#FF8800] via-[#3A57FC] to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
