'use client'

import React from 'react'
import Image from 'next/image'
import type { Section } from '@/types/sanity'
import { htmlToReact } from '../utils/htmlToReact'
import { markdownify } from '../utils/markdownify'
import { urlFor } from '@/lib/image'

interface SectionContentProps {
  section?: Section
}

export default function SectionContent({ section }: SectionContentProps) {
  if (!section) return null

  return (
    <section id={section.section_id || undefined} className="block block-text outer py-12">
      <div className="inner">
        {(section.title || section.subtitle) && (
          <div className="block-header inner-sm mb-6">
            {section.title && (
              <h2 className="block-title border-t border-charcoal-light-75 pt-8 mt-8">{section.title}</h2>
            )}
            {section.subtitle && (
              <p className="block-subtitle mt-4">{htmlToReact(section.subtitle)}</p>
            )}
          </div>
        )}
        {section.image && (
          <div className="block-image my-8 relative w-full aspect-video">
            <Image
              src={urlFor(section.image).width(1200).url()}
              alt={section.image_alt || section.title || ''}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}
        {section.content && (
          <div className="block-content inner-sm">
            {markdownify(section.content)}
          </div>
        )}
      </div>
    </section>
  )
}
