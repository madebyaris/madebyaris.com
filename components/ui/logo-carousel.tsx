"use client"

import React, { useCallback, useEffect, useState, useMemo } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import type { SVGProps } from "react"

interface Logo {
  name: string
  id: number
  img: React.ComponentType<SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  // Ensure each column has at least 4 logos for continuous animation
  const minLength = Math.max(4, Math.max(...columns.map((col) => col.length)))
  columns.forEach((col) => {
    while (col.length < minLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn = React.memo(({ logos, index, currentTime }: LogoColumnProps) => {
  const shouldReduceMotion = useReducedMotion()
  const cycleInterval = 3000
  const columnDelay = index * 500
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)
  const CurrentLogo = logos[currentIndex].img

  const animationProps = useMemo(() => ({
    initial: shouldReduceMotion 
      ? { opacity: 0 }
      : { y: "30%", opacity: 0, filter: "blur(4px)" },
    animate: shouldReduceMotion
      ? { opacity: 1 }
      : {
          y: "0%",
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 25,
            mass: 1,
            bounce: 0.2,
            duration: 0.6,
          },
        },
    exit: shouldReduceMotion
      ? { opacity: 0 }
      : {
          y: "-30%",
          opacity: 0,
          filter: "blur(4px)",
          transition: {
            type: "tween",
            ease: "easeIn",
            duration: 0.4,
          },
        }
  }), [shouldReduceMotion])

  return (
    <motion.div
      className="relative h-16 w-28 overflow-hidden md:h-28 md:w-56 flex items-center justify-center"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${logos[currentIndex].id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          {...animationProps}
        >
          <CurrentLogo className="w-full h-full text-zinc-900 dark:text-zinc-100 transform hover:scale-110 transition-transform duration-200" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
})

LogoColumn.displayName = "LogoColumn"

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime(t => t + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    setLogoSets(distributeLogos(logos, columnCount))
  }, [logos, columnCount])

  return (
    <div className="flex items-center justify-center gap-8 md:gap-12">
      {logoSets.map((columnLogos, index) => (
        <LogoColumn
          key={`logo-column-${index}-${columnLogos.length > 0 ? columnLogos[0].id : index}`}
          logos={columnLogos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

export { LogoColumn } 