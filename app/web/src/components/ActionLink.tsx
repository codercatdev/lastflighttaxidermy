import React from 'react'
import Link from 'next/link'
import type { Action } from '@/types/sanity'

interface ActionLinkProps {
  action?: Action
}

export default function ActionLink({ action }: ActionLinkProps) {
  if (!action || !action.url) return null

  const rel = []
  if (action.new_window) {
    rel.push('noopener')
  }
  if (action.no_follow) {
    rel.push('nofollow')
  }

  return (
    <Link
      href={action.url}
      target={action.new_window ? '_blank' : undefined}
      rel={rel.length > 0 ? rel.join(' ') : undefined}
    >
      {action.label}
    </Link>
  )
}
