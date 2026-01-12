'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import classNames from 'classnames'
import type { Config, Page } from '@/types/sanity'
import Action from './Action'
import { urlFor } from '@/lib/image'

interface HeaderProps {
  config?: Config
  page?: Page
}

export default function Header({ config, page }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const header = config?.header
  const pageUrl = _.trim(page?.stackbit_url_path || '', '/')

  if (!header) return null

  return (
    <header id="masthead" className="site-header outer">
      <div className="inner">
        <div className="site-header-inside flex items-center justify-between py-4 gap-2 md:gap-4 min-w-0">
          <div className="site-branding min-w-0 flex-shrink max-w-[60%] md:max-w-none">
            {header.logo_img ? (
              <p className="site-logo m-0">
                <Link href="/" className="block">
                  <Image
                    src={urlFor(header.logo_img).width(200).url()}
                    alt={header.logo_img_alt || 'Logo'}
                    width={200}
                    height={48}
                    className="h-auto max-h-12 w-auto"
                    priority
                  />
                </Link>
              </p>
            ) : (
              <p className="site-title m-0 text-xl font-bold break-words">
                <Link href="/" className="no-underline">
                  {header.title}
                </Link>
              </p>
            )}
          </div>
          {header.has_nav && (
            <>
              <button
                id="menu-open"
                className="menu-toggle md:hidden p-2"
                onClick={() => setMenuOpen(true)}
                aria-label="Open Menu"
              >
                <span className="sr-only">Open Menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <nav
                id="main-navigation"
                className={classNames(
                  'site-navigation fixed inset-0 z-50 bg-white md:static md:bg-transparent md:z-auto flex-shrink-0',
                  menuOpen ? 'block' : 'hidden md:block'
                )}
                aria-label="Main Navigation"
              >
                <div className="site-nav-inside h-full md:h-auto flex flex-col md:flex-row">
                  <button
                    id="menu-close"
                    className="menu-toggle md:hidden p-4 self-end"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close Menu"
                  >
                    <span className="sr-only">Close Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <ul className="menu flex flex-col md:flex-row md:items-center md:space-x-3 xl:space-x-6 p-4 md:p-0 list-none m-0 md:whitespace-nowrap">
                    {_.map(header.nav_links, (action, action_idx) => {
                      const actionUrl = _.trim(action?.url || '', '/')
                      const isCurrent = pageUrl === actionUrl
                      const isButton = action?.style !== 'link'

                      return (
                        <li
                          key={action_idx}
                          className={classNames(
                            'menu-item mb-4 md:mb-0 text-sm xl:text-base',
                            {
                              'current-menu-item': isCurrent,
                              'menu-button': isButton
                            }
                          )}
                        >
                          <Action action={action} />
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
