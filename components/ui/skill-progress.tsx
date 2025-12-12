'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillProgressProps {
  name: string
  level: 'Expert' | 'Advanced' | 'Intermediate'
  percentage: number
}

const levelPercentages = {
  Expert: 95,
  Advanced: 80,
  Intermediate: 65
}

export function SkillProgress({ name, level, percentage }: SkillProgressProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-wp-navy dark:text-foreground">{name}</span>
        <span className="text-sm text-wp-blue/70 dark:text-wp-gold/70">{level}</span>
      </div>
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-wp-blue to-wp-gold rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}



