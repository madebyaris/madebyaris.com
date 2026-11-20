"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function LiveClock({ className }: { className?: string }) {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Jakarta',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p
      className={cn(
        'text-3xl sm:text-4xl font-bold text-white tracking-tight font-mono tabular-nums leading-none',
        className
      )}
    >
      {currentTime || '--:--:--'}
    </p>
  )
}
