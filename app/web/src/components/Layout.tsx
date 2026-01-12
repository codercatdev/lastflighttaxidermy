'use client'

import React from 'react'
import type { Config, Page } from '@/types/sanity'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  config?: Config
  page?: Page
}

export default function Layout({ children, config, page }: LayoutProps) {
  const colorScheme = config?.color_scheme || 'light'
  const accentColor = config?.accent_color || 'pink'
  
  return (
    <div 
      id="page" 
      className={`site palette-${colorScheme} accent-${accentColor}`}
    >
      <Header config={config} page={page} />
      <main id="content" className="site-content">
        {children}
      </main>
      <Footer config={config} />
    </div>
  )
}
