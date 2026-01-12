import { client } from './client'
import { browserToken } from './env'
import { defineLive } from 'next-sanity/live'

// Use the base client - defineLive will handle draft mode automatically
// browserToken and serverToken are required for live preview to work
export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken,
  serverToken: process.env.SANITY_API_READ_TOKEN || browserToken,
})
