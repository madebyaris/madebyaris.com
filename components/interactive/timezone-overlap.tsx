'use client'

import { useEffect, useState } from 'react'
import { Clock, Globe } from 'lucide-react'

interface CityClock {
  id: string
  label: string
  zoneLabel: string
  timeZone: string
  role: string
}

const CITIES: CityClock[] = [
  {
    id: 'wib',
    label: 'Sidoarjo / Jakarta',
    zoneLabel: 'WIB · UTC+7',
    timeZone: 'Asia/Jakarta',
    role: 'Studio desk (09:00 to 17:00)',
  },
  {
    id: 'sgt',
    label: 'Singapore',
    zoneLabel: 'SGT · UTC+8',
    timeZone: 'Asia/Singapore',
    role: 'Full-day sync',
  },
  {
    id: 'cet',
    label: 'Amsterdam / Berlin',
    zoneLabel: 'CET / CEST',
    timeZone: 'Europe/Berlin',
    role: 'Morning window',
  },
  {
    id: 'gmt',
    label: 'London',
    zoneLabel: 'GMT / BST',
    timeZone: 'Europe/London',
    role: 'Morning window',
  },
]

function formatTime(date: Date, timeZone: string): string {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    }).format(date)
  } catch {
    return '--:--'
  }
}

function getJakartaHour(date: Date): { hour: number; day: number } {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      hour: 'numeric',
      weekday: 'short',
      hour12: false,
      timeZone: 'Asia/Jakarta',
    }).formatToParts(date)
    const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 12)
    const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon'
    const day = weekday === 'Sun' ? 0 : 1
    return { hour, day }
  } catch {
    return { hour: 12, day: 1 }
  }
}

export function TimezoneOverlap({
  compact = false,
  theme = 'light',
}: {
  compact?: boolean
  theme?: 'dark' | 'light'
}) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setNow(new Date()))
    const timer = setInterval(() => setNow(new Date()), 30_000)
    return () => {
      cancelAnimationFrame(raf)
      clearInterval(timer)
    }
  }, [])

  const jakarta = now ? getJakartaHour(now) : null
  const isWorkingNow = jakarta ? jakarta.day !== 0 && jakarta.hour >= 9 && jakarta.hour < 17 : false
  const isEuOverlapNow = jakarta ? jakarta.day !== 0 && jakarta.hour >= 14 && jakarta.hour < 17 : false
  const isDark = theme === 'dark'

  return (
    <div
      className={
        isDark
          ? 'rounded-2xl border border-white/12 bg-white/[0.04] p-6 md:p-7 text-white'
          : 'rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7 text-[#0B0C0E] shadow-xs'
      }
    >
      {/* Header Row */}
      <div
        className={`flex flex-wrap items-center justify-between gap-4 pb-5 border-b ${
          isDark ? 'border-white/10' : 'border-[#E5E7EB]'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg border shrink-0 ${
              isDark
                ? 'border-[#3A57FC]/40 bg-[#3A57FC]/15 text-[#93A8FF]'
                : 'border-[#DDE4FF] bg-[#EEF2FF] text-[#3A57FC]'
            }`}
          >
            <Globe className="h-4 w-4" />
          </div>
          <div>
            <p
              className={`font-mono text-[10.5px] uppercase tracking-[0.14em] ${
                isDark ? 'text-[#FFB866]' : 'text-[#3A57FC]'
              }`}
            >
              Live Global Studio Hours
            </p>
            <p
              className={`text-sm font-medium mt-0.5 ${
                isDark ? 'text-zinc-200' : 'text-[#1F2937]'
              }`}
            >
              Direct sync window for Indonesia, Singapore, EU, and UK teams
            </p>
          </div>
        </div>

        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] ${
            isDark
              ? 'border-white/15 bg-white/[0.06] text-white'
              : 'border-[#E5E7EB] bg-[#F8FAFC] text-[#0B0C0E]'
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              isWorkingNow ? 'bg-emerald-400 animate-pulse' : 'bg-[#FF8800]'
            }`}
          />
          {isEuOverlapNow
            ? 'EU + ID live window active'
            : isWorkingNow
              ? 'At desk now (WIB)'
              : 'Offline now · replies within 24h'}
        </div>
      </div>

      {/* City Clocks Grid */}
      <div
        className={`grid gap-3.5 pt-5 ${
          compact ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'
        }`}
      >
        {CITIES.map((city) => {
          const time = now ? formatTime(now, city.timeZone) : '--:--'
          const isPrimary = city.id === 'wib'

          const cardClass = isDark
            ? isPrimary
              ? 'border-[#3A57FC]/80 bg-[#3A57FC]/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
              : 'border-white/10 bg-[#0B0C0E]/65 text-white'
            : isPrimary
              ? 'border-[#2944E0] bg-[#3A57FC] text-white'
              : 'border-[#E5E7EB] bg-[#F8FAFC] text-[#0B0C0E]'

          return (
            <div
              key={city.id}
              className={`rounded-xl border px-4 py-3.5 transition-colors ${cardClass}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.12em] font-medium ${
                    isPrimary
                      ? 'text-[#FFB866]'
                      : isDark
                        ? 'text-[#93A8FF]'
                        : 'text-[#6B7280]'
                  }`}
                >
                  {city.zoneLabel}
                </span>
                <Clock
                  className={`h-3.5 w-3.5 ${
                    isPrimary
                      ? 'text-white/70'
                      : isDark
                        ? 'text-zinc-500'
                        : 'text-[#9CA3AF]'
                  }`}
                />
              </div>
              <p className="mt-2 font-display text-2xl sm:text-[1.75rem] font-bold tracking-tight tabular-nums leading-none">
                {time}
              </p>
              <p
                className={`mt-2 text-xs font-semibold ${
                  isPrimary || isDark ? 'text-white' : 'text-[#0B0C0E]'
                }`}
              >
                {city.label}
              </p>
              <p
                className={`mt-0.5 font-mono text-[10.5px] ${
                  isPrimary
                    ? 'text-white/80'
                    : isDark
                      ? 'text-zinc-400'
                      : 'text-[#6B7280]'
                }`}
              >
                {city.role}
              </p>
            </div>
          )
        })}
      </div>

      {/* Visual 24-hour sync rail */}
      <div
        className={`mt-5 pt-4 border-t ${
          isDark ? 'border-white/10' : 'border-[#E5E7EB]'
        }`}
      >
        <div
          className={`flex flex-wrap items-center justify-between gap-2 text-[10.5px] font-mono uppercase tracking-[0.1em] mb-2.5 ${
            isDark ? 'text-zinc-400' : 'text-[#6B7280]'
          }`}
        >
          <span>00:00 WIB</span>
          <span className={isDark ? 'text-[#FFB866]' : 'text-[#3A57FC] font-semibold'}>
            Shared EU/UK morning call slot: 14:00 to 17:00 WIB (08:00 to 12:00 EU)
          </span>
          <span>23:00 WIB</span>
        </div>
        <div
          className={`grid grid-cols-[repeat(24,minmax(0,1fr))] gap-1 h-2.5 rounded-full overflow-hidden p-0.5 ${
            isDark ? 'bg-white/[0.06]' : 'bg-[#F1F5F9]'
          }`}
        >
          {Array.from({ length: 24 }).map((_, hr) => {
            const isDesk = hr >= 9 && hr < 17
            const isOverlap = hr >= 14 && hr < 17
            const isNow = jakarta?.hour === hr
            return (
              <div
                key={hr}
                title={`${String(hr).padStart(2, '0')}:00 WIB`}
                className={`h-full rounded-[2px] transition-colors ${
                  isNow
                    ? isDark
                      ? 'bg-white'
                      : 'bg-[#0B0C0E]'
                    : isOverlap
                      ? 'bg-[#FF8800]'
                      : isDesk
                        ? isDark
                          ? 'bg-[#3A57FC]/75'
                          : 'bg-[#3A57FC]/40'
                        : 'bg-transparent'
                }`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
