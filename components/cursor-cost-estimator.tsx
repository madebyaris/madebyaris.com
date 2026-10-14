'use client'

import { useState } from 'react'
import { cursorPricing, type UsageLevel } from '@/lib/topics/cursor-pricing'

const usageOptions: Array<{ value: UsageLevel; label: string; hint: string }> = [
  { value: 'light', label: 'New to agents', hint: 'A few agent runs a day, mostly chat and Tab' },
  { value: 'daily', label: 'Agents every day', hint: 'Agent runs on most tickets' },
  { value: 'heavy', label: 'Agents all day', hint: 'Long agent runs, cloud agents, several at once' },
]

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const grokOnlyPlans = cursorPricing.plans
  .filter((p) => !p.thirdPartyModels)
  .map((p) => `${p.name} (${usd.format(p.monthlyUsd)})`)
  .join(' and ')

export function CursorCostEstimator() {
  const [seats, setSeats] = useState(1)
  const [usage, setUsage] = useState<UsageLevel>('daily')

  const plan = cursorPricing.plans.find((p) => p.id === cursorPricing.planForUsage[usage])!
  const individualTotal = plan.monthlyUsd * seats
  const teamsFloor = cursorPricing.teamsFromUsdPerSeat * seats

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <label className="block">
            <span className="block text-sm font-semibold text-zinc-900 mb-2">How many people need a seat?</span>
            <input
              type="number"
              min={1}
              max={500}
              value={seats}
              onChange={(e) => setSeats(Math.max(1, Math.min(500, Number(e.target.value) || 1)))}
              className="w-28 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            />
          </label>

          <fieldset>
            <legend className="block text-sm font-semibold text-zinc-900 mb-2">How does a typical person on the team work?</legend>
            <div className="space-y-2">
              {usageOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-colors ${
                    usage === option.value ? 'bg-orange-50 ring-1 ring-orange-200' : 'bg-zinc-50 hover:bg-zinc-100'
                  }`}
                >
                  <input
                    type="radio"
                    name="usage"
                    value={option.value}
                    checked={usage === option.value}
                    onChange={() => setUsage(option.value)}
                    className="mt-1 accent-orange-500"
                  />
                  <span>
                    <span className="block text-sm font-medium text-zinc-900">{option.label}</span>
                    <span className="block text-xs text-zinc-500">{option.hint}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-6 text-white" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Suggested plan</p>
          <p className="text-2xl font-medium tracking-tight mb-1">
            {plan.name} <span className="text-zinc-400 text-base font-normal">{usd.format(plan.monthlyUsd)} per person a month</span>
          </p>
          <p className="text-sm text-zinc-400 mb-6">{plan.usage} usage. The allowance refreshes weekly.</p>

          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
            {seats === 1 ? 'Monthly cost' : `Monthly cost for ${seats} people on ${plan.name}`}
          </p>
          <p className="text-4xl font-medium tracking-tighter mb-6">{usd.format(individualTotal)}</p>

          {seats > 1 && (
            <p className="text-sm text-zinc-300 mb-4">
              A team that needs shared billing, SSO, or usage analytics goes on Teams instead: from {usd.format(teamsFloor)} a month
              ({usd.format(cursorPricing.teamsFromUsdPerSeat)} per seat and up, depending on seat tier).
            </p>
          )}

          <p className="text-xs text-zinc-400 leading-relaxed">
            Prices exclude tax. Claude, GPT, and other third-party models are billed on top at API list price, so a team
            that lives on them pays more than this. {grokOnlyPlans}: Grok models only.
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        Prices checked against{' '}
        <a href={cursorPricing.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-orange-500">
          cursor.com/pricing
        </a>{' '}
        on <time dateTime={cursorPricing.verifiedAt}>{new Date(cursorPricing.verifiedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</time>.
        Plan suggestions follow Cursor’s own advice on that page.
      </p>
    </div>
  )
}
