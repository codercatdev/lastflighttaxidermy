'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import classNames from 'classnames'
import type { Config, Page } from '@/types/sanity'
import Action from './Action'
import { urlFor } from '@/lib/image'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

interface HeaderProps {
  config?: Config
  page?: Page
}

export default function Header({ config, page }: HeaderProps) {
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
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    id="menu-open"
                    className="menu-toggle md:hidden p-2"
                    aria-label="Open Menu"
                  >
                    <span className="sr-only">Open Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[90vw] max-w-[400px] sm:max-w-[400px]">
                  <SheetTitle className="sr-only">Main Navigation</SheetTitle>
                  <nav
                    id="main-navigation"
                    className="text-foreground w-full min-w-0 !static !visible !right-auto !max-w-none"
                    aria-label="Main Navigation"
                  >
                    <div className="h-full flex flex-col pt-12 overflow-y-auto w-full min-w-0 pr-4">
                      <ul className="flex flex-col space-y-4 px-4 py-2 list-none m-0 w-full min-w-0 [&_a]:!text-foreground [&_a]:!text-charcoal [&_a:hover]:!text-primary [&_a:not(.button)]:!border-0 [&_li]:w-full [&_li]:min-w-0 [&_a]:block [&_a]:w-full [&_a]:min-w-0 [&_a]:break-words [&_a]:!visible [&_li]:!visible [&_a]:!relative [&_a]:!z-10 [&_li]:!text-charcoal">
                        {_.map(header.nav_links, (action, action_idx) => {
                          const actionUrl = _.trim(action?.url || '', '/')
                          const isCurrent = pageUrl === actionUrl
                          const isButton = action?.style !== 'link'

                          return (
                            <li
                              key={action_idx}
                              className={classNames(
                                'text-sm xl:text-base !block !visible',
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
                </SheetContent>
              </Sheet>
              <nav
                id="main-navigation-desktop"
                className="site-navigation hidden md:flex flex-shrink-0"
                aria-label="Main Navigation"
              >
                <div className="site-nav-inside flex flex-row">
                  <ul className="menu flex flex-row items-center space-x-3 xl:space-x-6 p-0 list-none m-0 whitespace-nowrap">
                    {_.map(header.nav_links, (action, action_idx) => {
                      const actionUrl = _.trim(action?.url || '', '/')
                      const isCurrent = pageUrl === actionUrl
                      const isButton = action?.style !== 'link'

                      return (
                        <li
                          key={action_idx}
                          className={classNames(
                            'menu-item text-sm xl:text-base',
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
