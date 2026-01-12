import { sanityFetch } from '@/lib/sanityFetch'
import { allPagesQuery, pageBySlugQuery, configQuery } from '@/lib/queries'
import { client } from '@/lib/client'
import Layout from '@/components/Layout'
import pageLayouts from '@/layouts'

export async function generateStaticParams() {
  // Use client directly for static generation (no draft mode needed)
  const pages = await client.fetch(allPagesQuery)

  if (!pages) return []

  return pages
    .filter((page: any) => page.slug !== '/')
    .map((page: any) => ({
      slug: page.slug.split('/').filter(Boolean),
    }))
}

export default async function DynamicPage({
  params,
}: {
  params: { slug?: string[] }
}) {
  const { slug } = await params;
  const pageSlug = '/' + (slug?.join('/') || '').split('/').filter(Boolean).join('/') || '/'

  const [{ data: page }, { data: config }] = await Promise.all([
    sanityFetch({
      query: pageBySlugQuery,
      params: { slug: pageSlug },
    }),
    sanityFetch({
      query: configQuery,
    }),
  ])
  console.log('config', config)
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
