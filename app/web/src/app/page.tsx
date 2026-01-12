import { sanityFetch } from '@/lib/sanityFetch'
import { pageBySlugQuery, configQuery } from '@/lib/queries'
import Layout from '@/components/Layout'
import PageLayout from '@/layouts/page'

export default async function HomePage() {
  const [{ data: page }, { data: config }] = await Promise.all([
    sanityFetch({
      query: pageBySlugQuery,
      params: { slug: '/' },
    }),
    sanityFetch({
      query: configQuery,
    }),
  ])

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <Layout config={config} page={page}>
      <PageLayout page={page} config={config} />
    </Layout>
  )
}
