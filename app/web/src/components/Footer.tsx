'use client'

import React from 'react'
import _ from 'lodash'
import type { Config } from '@/types/sanity'
import { htmlToReact } from '../utils/htmlToReact'
import Action from './Action'

interface FooterProps {
  config?: Config
}

export default function Footer({ config }: FooterProps) {
  const footer = config?.footer

  if (!footer) return null

  return (
    <footer id="colophon" className="site-footer outer border-t border-charcoal-light-75 py-8 mt-12">
      <div className="">
        <div className="site-footer-inside flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="site-info flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm">
            {footer.content && (
              <span className="copyright">{htmlToReact(footer.content)}</span>
            )}
            {_.map(footer.links, (action, action_idx) => (
              <Action key={action_idx} action={action} />
            ))}
          </div>
          {footer.has_social && (
            <div className="social-links flex items-center gap-4">
              {_.map(footer.social_links, (action, action_idx) => (
                <Action key={action_idx} action={action} />
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
