"use client"

import { useEffect, useState } from "react"

export function LiveClock() {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const wibTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }))
      setCurrentTime(wibTime.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p className="md:text-5xl text-4xl font-medium text-zinc-900 tracking-tighter font-mono">
      {currentTime || '00:00:00'}
    </p>
  )
}
