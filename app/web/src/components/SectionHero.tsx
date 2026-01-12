'use client'

import React from 'react'
import type { Section } from '@/types/sanity'
import { markdownify } from '../utils/markdownify'
import CtaButtons from './CtaButtons'

interface SectionHeroProps {
  section?: Section
}

export default function SectionHero({ section }: SectionHeroProps) {
  if (!section) return null

  return (
    <section id={section.section_id || undefined} className="block block-hero outer py-12">
      <div className="inner">
        {section.title && (
          <div className="block-header inner-sm mb-6">
            <h1 className="block-title">{section.title}</h1>
          </div>
        )}
        {section.content && (
          <div className="block-content inner-sm mb-6">
            {markdownify(section.content)}
          </div>
        )}
        {section.actions && (
          <div className="block-buttons inner-sm button-group">
            <CtaButtons actions={section.actions as any} />
          </div>
        )}
      </div>
    </section>
  )
}
