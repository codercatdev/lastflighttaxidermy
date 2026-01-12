'use client'

import React from 'react'
import _ from 'lodash'
import type { Action } from '@/types/sanity'
import ActionComponent from './Action'

interface CtaButtonsProps {
  actions?: Action[]
}

export default function CtaButtons({ actions }: CtaButtonsProps) {
  if (!actions || !Array.isArray(actions)) return null

  return (
    <>
      {_.map(actions, (action, action_idx) => (
        <ActionComponent key={action_idx} action={action} />
      ))}
    </>
  )
}
