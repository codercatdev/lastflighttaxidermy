import React from 'react'
import Image from 'next/image'
import type { Section } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'
import { markdownify } from '@/utils/markdownify'
import { urlFor } from '@/lib/image'
import CtaButtons from './CtaButtons'

interface SectionGridProps {
    section?: Section
}

export default async function SectionGrid({ section }: SectionGridProps) {
    if (!section) return null

    const colNumber = section.col_number || 'three'
    const gridClass = colNumber === 'two' ? 'grid-col-2' : colNumber === 'three' ? 'grid-col-3' : ''

    // Process all markdown content in parallel
    const processedItems = await Promise.all(
        (section.grid_items || []).map(async (item) => ({
            ...item,
            processedContent: item.content ? await markdownify(item.content) : null,
        }))
    )

    return (
        <section id={section.section_id || undefined} className="block block-grid outer">
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
                {processedItems.length > 0 && (
                    <div className="block-content">
                        <div className={`grid ${gridClass}`}>
                            {processedItems.map((item, item_idx) => (
                                <div key={item._id || item_idx} className="grid-item">
                                    {section.is_numbered && (
                                        <span className="grid-item-counter" aria-hidden="true">
                                            {item_idx + 1}.
                                        </span>
                                    )}
                                    {item.image && (
                                        <div className="grid-item-image">
                                            <Image
                                                src={urlFor(item.image).width(800).url()}
                                                alt={item.image_alt || ''}
                                                width={800}
                                                height={600}
                                                className="w-full h-auto"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    )}
                                    {item.title && (
                                        <h3 className="grid-item-title">{item.title}</h3>
                                    )}
                                    {item.processedContent && (
                                        <div className="grid-item-content">
                                            {item.processedContent}
                                        </div>
                                    )}
                                    {item.actions && item.actions.length > 0 && (
                                        <div className="grid-item-buttons">
                                            <CtaButtons actions={item.actions} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
