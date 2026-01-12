import React from 'react'
import Image from 'next/image'
import type { Section } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'
import { urlFor } from '@/lib/image'

interface SectionTestimonialsProps {
  section?: Section
}

export default function SectionTestimonials({ section }: SectionTestimonialsProps) {
  if (!section) return null

  const colNumber = section.col_number || 'three'
  const gridClass = colNumber === 'two' ? 'grid-col-2' : colNumber === 'three' ? 'grid-col-3' : ''

  return (
    <section id={section.section_id || undefined} className="block block-testimonials outer">
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
        {section.testimonials && section.testimonials.length > 0 && (
          <div className="block-content">
            <div className={`grid ${gridClass}`}>
              {section.testimonials.map((testimonial, testimonial_idx) => (
                <div key={testimonial._id || testimonial_idx} className="grid-item">
                  <blockquote className="testimonial">
                    <p className="testimonial-content">
                      {htmlToReact(testimonial.content)}
                    </p>
                    <footer className="testimonial-footer">
                      {testimonial.avatar && (
                        <Image
                          className="testimonial-avatar"
                          src={urlFor(testimonial.avatar).width(60).height(60).url()}
                          alt={testimonial.avatar_alt || ''}
                          width={60}
                          height={60}
                        />
                      )}
                      <cite className="testimonial-author">{testimonial.author}</cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
