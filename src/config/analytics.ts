// Analytics configuration

// Plausible — privacy-friendly, no cookies, no banner needed (recommended)
// Set PUBLIC_PLAUSIBLE_DOMAIN=talki.dev in your environment
export const plausibleDomain = import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN as string | undefined

// Google tracking (inactive unless env vars are set — requires cookie consent in EU)
export const googleSiteVerification = ''
export const googleAnalyticsMeasurementID = import.meta.env.PUBLIC_GA_TRACKING_ID as string | undefined
export const googleTagManagerID = ''
