import React from 'react'
import Image from 'next/image'
import type { Page, Config } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'
import { markdownify } from '@/utils/markdownify'
import { urlFor } from '@/lib/image'

interface PostLayoutProps {
  page?: Page
  config?: Config
}

export default async function PostLayout({ page, config }: PostLayoutProps) {
  if (!page) return null

  const formattedDate = page.date 
    ? new Date(page.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : null

  const dateTime = page.date 
    ? new Date(page.date).toISOString().split('T')[0]
    : null

  return (
    <div className="inner outer">
      <article className="post post-full">
        <header className="post-header inner-sm">
          <h1 className="post-title line-top">{page.title}</h1>
          {page.subtitle && (
            <div className="post-subtitle">
              {htmlToReact(page.subtitle)}
            </div>
          )}
        </header>
        {page.image && (
          <div className="post-image">
            <Image
              src={urlFor(page.image).width(1200).url()}
              alt={page.image_alt || page.title || ''}
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}
        <div className="post-content inner-sm">
          {await markdownify(page.content || '')}
        </div>
        {formattedDate && (
          <footer className="post-meta inner-sm">
            <time className="published" dateTime={dateTime || undefined}>
              {formattedDate}
            </time>
          </footer>
        )}
      </article>
    </div>
  )
}
