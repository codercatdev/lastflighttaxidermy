import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Section, Post } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'
import { sanityFetch } from '@/lib/client'
import { allPostsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/image'
import CtaButtons from './CtaButtons'

interface SectionPostsProps {
  section?: Section
}

export default async function SectionPosts({ section }: SectionPostsProps) {
  if (!section) return null

  const { data: posts } = await sanityFetch({
    query: allPostsQuery,
  })

  const displayPosts = (posts || []).sort((a: Post, b: Post) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const recentPosts = displayPosts.slice(0, section.posts_number || displayPosts.length)

  const colNumber = section.col_number || 'three'
  const gridClass = colNumber === 'two' ? 'grid-col-2' : colNumber === 'three' ? 'grid-col-3' : ''

  return (
    <section id={section.section_id || undefined} className="block block-posts outer">
      <div className="inner">
        {(section.title || section.subtitle) && (
          <div className="block-header inner-sm">
            {section.title && (
              <h2 className="block-title line-top">{section.title}</h2>
            )}
            {section.subtitle && (
              <p className="block-subtitle">{htmlToReact(section.subtitle)}</p>
            )}
          </div>
        )}
        <div className="block-content">
          <div className={`post-feed grid ${gridClass}`}>
            {recentPosts.map((post: Post) => {
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
                      <h3 className="post-title">
                        <Link href={post.stackbit_url_path || '#'} rel="bookmark">
                          {post.title}
                        </Link>
                      </h3>
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
        {section.actions && section.actions.length > 0 && (
          <div className="block-buttons inner-sm">
            <CtaButtons actions={section.actions} />
          </div>
        )}
      </div>
    </section>
  )
}
