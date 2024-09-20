
"use client"

import React from 'react'
import {ThemeProvider} from 'next-themes'
import {useQuery, useMutation, useQueryClient, QueryClient,QueryClientProvider,} from 'react-query'

const queryClient = new QueryClient()

export default function LayoutContainer( {children} ) {
  return (
    <QueryClientProvider client={queryClient}>

        <ThemeProvider 
        attribute="class"
        defaultTheme="system" 
        enableSystem={true} 
        disableTransitionOnChange={true}   
        >
          {children}
        </ThemeProvider>

        </QueryClientProvider>
  )
}
