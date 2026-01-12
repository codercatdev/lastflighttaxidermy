'use client'

import React from 'react'
import Image from 'next/image'
import type { Page, Config } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'
import { markdownify } from '@/utils/markdownify'
import { urlFor } from '@/lib/image'

interface PageLayoutProps {
  page?: Page
  config?: Config
}

export default function PageLayout({ page, config }: PageLayoutProps) {
  if (!page) return null

  return (
    <div className="inner outer">
      <article className="post post-full">
        <header className="post-header inner-sm border-t border-charcoal-light-75 pt-8 mt-8">
          <h1 className="post-title">{page.title}</h1>
          {page.subtitle && (
            <div className="post-subtitle mt-4">
              {htmlToReact(page.subtitle)}
            </div>
          )}
        </header>
        {page.image && (
          <div className="post-image my-8 relative w-full aspect-video">
            <Image
              src={urlFor(page.image).width(1200).url()}
              alt={page.image_alt || page.title || ''}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}
        <div className="post-content inner-sm">
          {markdownify(page?.content || '')}
        </div>
      </article>
    </div>
  )
}
