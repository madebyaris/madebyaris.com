export const trackEvent = (action: string, data?: Record<string, unknown>) => {
  // Log to console for development and debugging
  console.log('Analytics Event:', { action, ...data })
  
  // Future integration: Vercel Analytics doesn't support custom events natively,
  // but can add GA or other trackers here if needed
  // Example: if (typeof gtag !== 'undefined') gtag('event', action, data)
  
  // For production, could integrate with Vercel Analytics via fetch or similar
}



