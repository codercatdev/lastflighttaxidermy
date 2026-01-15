import { pageBySlugQuery, configQuery } from '@/lib/queries'
import { sanityFetch } from '@/lib/live'
import { clientWithoutStega } from '@/lib/client'
import Layout from '@/components/Layout'
import pageLayouts from '@/layouts'

// Required: defineLive can only be used in React Server Components at request time
export const dynamic = 'force-dynamic'

export default async function DynamicPage({
  params,
}: {
  params: { slug?: string[] }
}) {
  const { slug } = await params;
  const pageSlug = '/' + (slug?.join('/') || '').split('/').filter(Boolean).join('/') || '/'

  const [{ data: page }, config] = await Promise.all([
    sanityFetch({
      query: pageBySlugQuery,
      params: { slug: pageSlug },
    }),
    clientWithoutStega.fetch(configQuery),
  ])
  if (!page) {
    return <div>Page not found</div>
  }

  const componentName = page._type ? page._type : 'page'
  const PageLayout = pageLayouts[componentName as keyof typeof pageLayouts] || pageLayouts.page

  return (
    <Layout config={config} page={page}>
      <PageLayout page={page} config={config} />
    </Layout>
  )
}
