
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CountryCard(props) {
  return (
    <Link href={`/${props?.name?.common}`}  
    className='w-[288px] h-fit cursor-pointer overflow-hidden  dark:border-slate-500'>

        <CountryImage  src={props.flags.svg} />
        </Link>
  )
}

function CountryImage( src) {
    return (
        <div className='h-[168px] overflow-hidden transiiton ease-in-out duration-500'> 
            <Image
             src={src} 
             alt="country-img"
             height={115}
             width={245}/>
        </div>
    )
}
