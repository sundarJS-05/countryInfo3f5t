
"use client"

import React from 'react'
import {ThemeProvider} from 'next-themes'

export default function LayoutContainer( {children} ) {
  return (
    <ThemeProvider attribute="class">
        LayoutContainer
        {children}
        </ThemeProvider>
  )
}
