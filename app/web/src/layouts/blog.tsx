import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Page, Config, Post } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'
import { sanityFetch } from '@/lib/sanityFetch'
import { allPostsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/image'

interface BlogLayoutProps {
  page?: Page
  config?: Config
}

export default async function BlogLayout({ page, config }: BlogLayoutProps) {
  if (!page) return null

  const { data: posts } = await sanityFetch({
    query: allPostsQuery,
  })

  const displayPosts = (posts || []).sort((a: Post, b: Post) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const colNumber = page.col_number || 'three'
  const gridClass = colNumber === 'two' ? 'grid-col-2' : colNumber === 'three' ? 'grid-col-3' : ''

  return (
    <div className="inner outer">
      {!page.hide_title && (
        <header className={`page-header inner-sm ${page.hide_title ? 'screen-reader-text' : ''}`}>
          <h1 className="page-title line-top">{page.title}</h1>
          {page.subtitle && (
            <div className="page-subtitle">
              {htmlToReact(page.subtitle)}
            </div>
          )}
        </header>
      )}
      <div className={`post-feed grid ${gridClass}`}>
        {displayPosts.map((post: Post) => {
          const formattedDate = post.date
            ? new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            : null

          const dateTime = post.date
            ? new Date(post.date).toISOString().split('T')[0]
            : null

          return (
            <article key={post._id} className="post grid-item">
              <div className="post-inside">
                {post.thumb_image && (
                  <Link className="post-thumbnail" href={post.stackbit_url_path || '#'}>
                    <Image
                      src={urlFor(post.thumb_image).width(800).url()}
                      alt={post.thumb_image_alt || post.title || ''}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>
                )}
                <header className="post-header">
                  <h2 className="post-title">
                    <Link href={post.stackbit_url_path || '#'} rel="bookmark">
                      {post.title}
                    </Link>
                  </h2>
                  {formattedDate && (
                    <div className="post-meta">
                      <time className="published" dateTime={dateTime || undefined}>
                        {formattedDate}
                      </time>
                    </div>
                  )}
                </header>
                {post.excerpt && (
                  <p className="post-content">{post.excerpt}</p>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
