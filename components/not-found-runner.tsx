'use client'

import dynamic from 'next/dynamic'

const RUNNER_HEIGHT = 120

function RunnerPlaceholder() {
  return (
    <div
      className="mb-10 w-full max-w-xl mx-auto rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm"
      style={{ height: RUNNER_HEIGHT + 32 }}
      aria-hidden
    />
  )
}

export const NotFoundRunner = dynamic(
  () => import('./not-found-runner-game').then((m) => m.NotFoundRunnerGame),
  {
    ssr: false,
    loading: () => <RunnerPlaceholder />,
  },
)
