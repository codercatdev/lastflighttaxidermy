import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Last Flight Taxidermy',
  description: 'Professional taxidermy services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
