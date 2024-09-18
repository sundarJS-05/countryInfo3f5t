
"use client"

import Link from 'next/link'
import React from 'react'
import { useTheme } from 'next-themes'
import { BsMoonFill, BsFillSunFill  } from "react-icons/bs";



export default function Navbar() {

  const {setTheme, resolvedTheme} = useTheme()

  function toggleTheme(){
    if (resolvedTheme=='dark'){
      setTheme('light')
    }

    else if(resolvedTheme=='light'){
      setTheme('dark')
    }


  }


  return (
    // main div
    <div className='top-0 shadow-lg sticky z-30  dark:shadow-2xl'>

        {/* for app title  */}
        <div className='flex justify-between
        max-w-screen-xl mx-auto  mb-5 px-7  dark:bg-slate-900 md:px-11 py-5 items-center  transition-all'>
            {/* for coming back to Home page from specoific coun try page */}
            <Link href={'/'}  className='font-bold text-2xl md:text-2xl'>
            Where in the World?
            </Link>
            
            {/* for  toggle component */}
            <section onClick={toggleTheme}>
                Toggle theme

                <div>

                    {resolvedTheme=='light' ?  <BsMoonFill /> :   <BsFillSunFill /> }

                </div>

          

                <div>

                </div>

            </section>

        </div>

        </div>
  )
}
