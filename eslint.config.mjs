import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const config = [
  // Next.js recommended + core web vitals
  ...nextCoreWebVitals,

  // TypeScript-eslint recommended rules
  ...nextTypescript,
]

export default config
