import React from 'react'
import type { Section } from '@/types/sanity'
import { htmlToReact } from '@/utils/htmlToReact'

interface TableRow {
  _key?: string
  cells?: string[]
}

interface TableData {
  rows?: TableRow[]
}

interface SectionPricingTableProps {
  section?: Section & {
    pricing_table?: TableData
  }
}

export default function SectionPricingTable({ section }: SectionPricingTableProps) {
  if (!section) return null

  const table = section.pricing_table

  return (
    <section id={section.section_id || undefined} className="block block-pricing-table outer py-12">
      <div className="inner">
        {(section.title || section.subtitle) && (
          <div className="block-header inner-sm mb-6">
            {section.title && (
              <h2 className="block-title line-top">{section.title}</h2>
            )}
            {section.subtitle && (
              <p className="block-subtitle mt-4">{htmlToReact(section.subtitle)}</p>
            )}
          </div>
        )}
        {table?.rows && table.rows.length > 0 && (
          <div className="block-content inner-sm">
            <div className="table-wrapper overflow-x-auto">
              <table className="pricing-table w-full border-collapse">
                <tbody>
                  {table.rows.map((row, row_idx) => (
                    <tr key={row._key || row_idx} className="border-b border-charcoal-light-15">
                      {row.cells?.map((cell, cell_idx) => (
                        <td
                          key={cell_idx}
                          className="p-4 align-top"
                        >
                          {htmlToReact(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
