
import React from 'react'
import {cn} from '@/lib/utils'

export default function LabelSpan( {className, ...props}) {
  return (

    <span className={cn('font-semibold', className)} {...props} />
    
  )
}
