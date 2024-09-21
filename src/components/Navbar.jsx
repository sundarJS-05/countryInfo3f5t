
"use client"

import Link from 'next/link'
import React, { useEffect, useState }  from 'react'
import { useTheme } from 'next-themes'
import { BsMoonFill, BsFillSunFill  } from "react-icons/bs";



export default function Navbar() {

  // use of {] brackets for destructuring
  const {setTheme, resolvedTheme} = useTheme()

  // const [mounted, setMounted] = useState(false);

  //   // ensure COMP mounted before using theme-values
  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  function toggleTheme(){
    if (resolvedTheme=='dark'){
      setTheme('light')
    }

    else if(resolvedTheme=='light'){
      setTheme('dark')
    }

  }

  // // Prevent rendering until the theme is resolved
  // if (!mounted) return null; 


  return (
    // main div
    <div className='top-0 shadow-xl sticky z-50  dark:shadow-2xl'>

        {/* for app title  */}
        <div className='flex justify-between
        max-w-screen-2xl mx-auto  mb-5 px-7  dark:bg-slate-900 md:px-13 py-5 items-center  transition-all'>

            {/* for coming back to Home page from a specific country page */}
            <Link href={'/'}  className='font-bold text-2xl md:text-2xl'>
            Where in the World?
            </Link>
            
            {/* for  toggle component */}
            <section 
            onClick={toggleTheme} 
            className='flex items-center gap-1 cursor-pointer p-2 m-1 md:px-5 py-5 transition-all'>

                <div className='text-2xl md:text-base'>
                    {resolvedTheme=='light' ?  <BsMoonFill /> :   <BsFillSunFill /> }
                </div>
          

                <span className='text-2xl md:text-2xl font-medium hidden md:block'>
                  Mode - 
                {resolvedTheme=='light' ?  'Dark' : 'Light' }
                </span>

            </section>

        </div>

        </div>
  )
}
