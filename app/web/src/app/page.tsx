import { sanityFetch } from '@/lib/live'
import { pageBySlugQuery, configQuery } from '@/lib/queries'
import { clientWithoutStega } from '@/lib/client'
import Layout from '@/components/Layout'
import Advanced from '@/layouts/advanced'

// Required: defineLive can only be used in React Server Components at request time
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [{ data: page }, config] = await Promise.all([
    sanityFetch({
      query: pageBySlugQuery,
      params: { slug: '/' },
    }),
    clientWithoutStega.fetch(configQuery),
  ])

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <Layout config={config} page={page}>
      <Advanced page={page} config={config} />
    </Layout>
  )
}
