import React from 'react'
import type { Page, Config } from '@/types/sanity'
import SectionContent from '@/components/SectionContent'
import SectionHero from '@/components/SectionHero'
import SectionTestimonials from '@/components/SectionTestimonials'
import SectionPosts from '@/components/SectionPosts'
import SectionPortfolio from '@/components/SectionPortfolio'
import SectionGrid from '@/components/SectionGrid'
import SectionForm from '@/components/SectionForm'

interface AdvancedProps {
  page?: Page
  config?: Config
}

export default async function Advanced({ page, config }: AdvancedProps) {
  if (!page) return null

  const components: Record<string, React.ComponentType<any>> = {
    SectionContent,
    SectionHero,
    SectionTestimonials,
    SectionPosts,
    SectionPortfolio,
    SectionGrid,
    SectionForm,
  }

  return (
    <>
      {!page.hide_title && (
        <header className="page-header inner-sm outer">
          <h1 className="page-title line-top">{page.title}</h1>
        </header>
      )}
      {page.sections?.map((section, section_idx) => {
        if (!section || !section._type) return null

        const componentName = section._type
          .replace('section_', '')
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join('')

        const Component = components[`Section${componentName}`] || components.SectionContent

        return (
          <Component key={section._id || section_idx} section={section} config={config} />
        )
      })}
    </>
  )
}
