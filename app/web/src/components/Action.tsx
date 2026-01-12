'use client'

import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import type { Action as ActionType } from '@/types/sanity'
import Icon from './Icon'

interface ActionProps {
  action?: ActionType
}

export default function Action({ action }: ActionProps) {
  if (!action) return null

  const action_style = action.style || 'link'
  const action_icon = action.icon || 'dribbble'
  const url = action.url || '#'
  const rel = [
    action.new_window ? 'noopener' : '',
    action.no_follow ? 'nofollow' : ''
  ].filter(Boolean).join(' ')

  const linkClasses = classNames({
    'button': action_style === 'button',
    'button-icon': action_style === 'icon',
    'inline-flex items-center': action_style === 'icon'
  })

  return (
    <Link
      href={url}
      target={action.new_window ? '_blank' : undefined}
      rel={rel || undefined}
      className={linkClasses}
    >
      {action_style === 'icon' ? (
        <>
          <Icon icon={action_icon} />
          <span className="sr-only">{action.label}</span>
        </>
      ) : (
        action.label
      )}
    </Link>
  )
}
