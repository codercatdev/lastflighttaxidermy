import React from 'react'
import type { Section } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'
import { markdownify } from '@/utils/markdownify'
import FormField from './FormField'

interface SectionFormProps {
  section?: Section
}

export default async function SectionForm({ section }: SectionFormProps) {
  if (!section) return null

  return (
    <section id={section.section_id || undefined} className="block block-form outer">
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
        <div className="block-content inner-sm">
          {section.content && (await markdownify(section.content))}
          <form
            name={section.form_id}
            id={section.form_id}
            action={section.form_action}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="screen-reader-text">
              <label id={`${section.form_id}-bot-label`}>
                Don&apos;t fill this out if you&apos;re human:{' '}
                <input
                  aria-labelledby={`${section.form_id}-bot-label`}
                  name="bot-field"
                />
              </label>
            </div>
            <input
              type="hidden"
              aria-label={`${section.form_id}-name`}
              name="form-name"
              value={section.form_id}
            />
            {section.form_fields?.map((field, field_idx) => (
              <FormField key={field._id || field_idx} field={field} />
            ))}
            <div className="form-submit">
              <button type="submit" className="button">
                {section.submit_label || 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
