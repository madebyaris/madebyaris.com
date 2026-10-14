export type UsageLevel = 'light' | 'daily' | 'heavy'

export interface CursorPlan {
  id: string
  name: string
  monthlyUsd: number
  usage: string
  thirdPartyModels: boolean
}

// Re-check sourceUrl and move verifiedAt whenever you touch these numbers.
// The estimator shows verifiedAt to readers.
export const cursorPricing = {
  verifiedAt: '2026-10-14',
  sourceUrl: 'https://cursor.com/pricing',
  plans: [
    { id: 'plus', name: 'Plus', monthlyUsd: 8, usage: 'Basic', thirdPartyModels: false },
    { id: 'premium', name: 'Premium', monthlyUsd: 30, usage: '4x Plus', thirdPartyModels: true },
    { id: 'super', name: 'Super', monthlyUsd: 100, usage: '15x Plus', thirdPartyModels: true },
    { id: 'ultra', name: 'Ultra', monthlyUsd: 200, usage: '50x Plus', thirdPartyModels: true },
  ] satisfies CursorPlan[],
  teamsFromUsdPerSeat: 30,
  // Cursor's own advice on the pricing page: Premium for new AI users, Super
  // for daily agent users, Ultra for power users.
  planForUsage: { light: 'premium', daily: 'super', heavy: 'ultra' } satisfies Record<UsageLevel, string>,
}
