import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn, browserToken } from './env'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

// Base client - stega is always configured, but only used when draft mode is enabled
// According to Sanity docs, stega should always be configured with studioUrl
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  stega: {
    studioUrl: `${baseUrl}/studio`,
  },
})

// Client without stega for fetching site settings/config
// This prevents stega encoding from interfering with class names and values used for styling
export const clientWithoutStega = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  stega: {
    enabled: false,
  },
})
