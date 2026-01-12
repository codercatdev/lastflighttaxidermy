'use client'

import React from 'react'
import _ from 'lodash'
import type { Page, Config } from '@/types/sanity'
import SectionContent from '@/components/SectionContent'
import SectionHero from '@/components/SectionHero'

interface AdvancedProps {
  page?: Page
  config?: Config
}

export default function Advanced({ page, config }: AdvancedProps) {
  if (!page) return null

  return (
    <>
      {!page.hide_title && (
        <header className="page-header inner-sm outer">
          <h1 className="page-title line-top">{page.title}</h1>
        </header>
      )}
      {_.map(page.sections, (section, section_idx) => {
        if (!section || !section._type) return null

        const componentName = _.upperFirst(_.camelCase(section._type.replace('section_', '')))
        // Allow for any components to be added to the page
        const components = {
          SectionContent,
          SectionHero
        }
        const Component = (components as any)[componentName] || components.SectionContent

        return (
          <Component key={section_idx} section={section} config={config} />
        )
      })}
    </>
  )
}
