import type { Metadata } from 'next'
import './globals.css'
import { SanityLive } from '@/lib/live'
import { VisualEditing } from 'next-sanity/visual-editing'
import { DisableDraftMode } from '@/components/DisableDraftMode'
import { draftMode } from 'next/headers'

export const metadata: Metadata = {
  title: 'Last Flight Taxidermy',
  description: 'Professional taxidermy services',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={isDraftMode ? 'draft-mode' : ''}>
        {children}
        <SanityLive />
        {isDraftMode && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  )
}
