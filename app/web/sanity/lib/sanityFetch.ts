import { client } from './client'
import { browserToken } from './env'
import { defineLive } from 'next-sanity/live'

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken,
  serverToken: browserToken,
})
