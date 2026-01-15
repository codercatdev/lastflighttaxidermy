export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gj7uitls'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-15'
export const useCdn = process.env.NODE_ENV === 'production'
// Server token: Keep secret, used for server-side draft content fetching
export const serverToken = process.env.SANITY_API_READ_TOKEN || ''
// Browser token: Can be shared with browser, should have Viewer rights or lower
export const browserToken = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN || ''