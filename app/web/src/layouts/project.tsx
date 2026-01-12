'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Page, Config } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'
import { markdownify } from '@/utils/markdownify'
import { urlFor } from '@/lib/image'

interface ProjectLayoutProps {
  page?: Page
  config?: Config
}

interface CloudinaryImage {
  public_id: string
}

export default function ProjectLayout({ page, config }: ProjectLayoutProps) {
  const [images, setImages] = React.useState<CloudinaryImage[]>([])
  const [content, setContent] = React.useState<React.ReactNode>(null)

  React.useEffect(() => {
    if (!page?.stackbit_url_path) return

    const path = page.stackbit_url_path.replace('/photos/', '')
    fetch(`https://res.cloudinary.com/ajonp/image/list/lft-${path}.json`, {
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        setImages(json.resources || [])
      })
      .catch(err => {
        console.error('Error fetching images:', err)
      })
  }, [page?.stackbit_url_path])

  React.useEffect(() => {
    if (page?.content) {
      markdownify(page.content).then(setContent)
    }
  }, [page?.content])

  if (!page) return null

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
          {content}
        </div>
        {images.length > 0 && (
          <section className="photo-grid">
            {images.map((image, i) => (
              <a
                key={i}
                href={`https://res.cloudinary.com/ajonp/image/upload/${image.public_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`https://res.cloudinary.com/ajonp/image/upload/f_auto,q_auto,w_800/${image.public_id}`}
                  alt={`Photo ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </a>
            ))}
          </section>
        )}
      </article>
    </div>
  )
}
