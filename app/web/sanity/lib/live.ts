import { defineLive } from 'next-sanity/live'
import { client } from './client'
import { serverToken, browserToken } from './env'

// Server-only: defineLive can only be used in React Server Components
// Import this file only in server components, not in client components
export const { sanityFetch, SanityLive } = defineLive({
  client,
  // Server token: Used for server-side draft content fetching and live events
  // Should have read access to drafts
  serverToken: serverToken || undefined,
  // Browser token: Shared with browser for live previewing drafts
  // Should have Viewer rights or lower (read-only)
  browserToken: browserToken || undefined,
})
