import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Page, Config, Project } from '@/types/sanity'
import { urlFor } from '@/lib/image'
import { sanityFetch } from '@/lib/live'
import { allProjectsQuery } from '@/lib/queries'

interface PortfolioProps {
    page?: Page
    config?: Config
    projects?: Project[]
}

export default async function Portfolio({ page, config }: PortfolioProps) {
    if (!page) return null

    const { data: projects } = await sanityFetch({
        query: allProjectsQuery,
    })

    const layoutStyle = page.layout_style || 'mosaic'

    return (
        <div className="inner outer">
            <header className="page-header inner-sm">
                <h1 className="page-title line-top">{page.title}</h1>
                {page.subtitle && (
                    <p className="page-subtitle">{page.subtitle}</p>
                )}
            </header>
            <div className={`portfolio-feed layout-${layoutStyle}`}>
                {(projects || []).map((project: Project, project_idx: number) => (
                    <article key={project._id || project_idx} className="project">
                        <Link href={project.stackbit_url_path || '#'} className="project-link">
                            {project.thumb_image && (
                                <div className="project-thumbnail">
                                    <Image
                                        src={urlFor(project.thumb_image).width(800).url()}
                                        alt={project.thumb_image_alt || project.title || ''}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            )}
                            <header className="project-header">
                                <h2 className="project-title">{project.title}</h2>
                            </header>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    )
}
