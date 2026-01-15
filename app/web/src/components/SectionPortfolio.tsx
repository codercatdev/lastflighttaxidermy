import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Section, Project } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'
import { allProjectsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/image'
import { sanityFetch } from '@/lib/live'

interface SectionPortfolioProps {
  section?: Section
}

export default async function SectionPortfolio({ section }: SectionPortfolioProps) {
  if (!section) return null

  const { data: projects } = await sanityFetch({
    query: allProjectsQuery,
  })

  const displayProjects = (projects || []).sort((a: Project, b: Project) => {
    if (!a.date || !b.date) return 0
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const recentProjects = displayProjects.slice(0, section.projects_number || displayProjects.length)
  const layoutStyle = section.layout_style || 'mosaic'

  return (
    <section id={section.section_id || undefined} className="block-portfolio block outer">
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
          <div className={`portfolio-feed layout-${layoutStyle}`}>
            {recentProjects.map((project: Project, project_idx: number) => {
              const isLast = project_idx === recentProjects.length - 1
              const showViewAll = isLast && section.view_all_label && section.view_all_url

              if (showViewAll) {
                return (
                  <article key={project._id || project_idx} className="project">
                    <Link href={section.view_all_url || '#'} className="project-link view-all-link">
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
                      <span className="view-all-button">{section.view_all_label}</span>
                    </Link>
                  </article>
                )
              }

              return (
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
                      <h3 className="project-title">{project.title}</h3>
                    </header>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
