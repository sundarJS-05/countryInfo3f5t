
"use client"

import React, { useState, useEffect }  from 'react'
import {ThemeProvider} from 'next-themes'
import {useQuery, useMutation, useQueryClient, QueryClient,QueryClientProvider,} from 'react-query'

const queryClient = new QueryClient()

export default function LayoutContainer( {children} ) {

    // // Ensure this runs only on the client side to prevent hydration errors
    // const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //   // Component has mounted on client side
    //   setMounted(true); 
    // }, []);
  
    // if (!mounted) {
    //   // Prevents rendering theme-based components until the client is ready
    //   return <div className="invisible">{children}</div>;
    // }


  return (
    <QueryClientProvider client={queryClient}>

        <ThemeProvider 
        attribute="class"
        // defaultTheme="system" 
        // enableSystem={true} 
        // disableTransitionOnChange={true}   
        >
          {children}
        </ThemeProvider>

        </QueryClientProvider>
  )
}
