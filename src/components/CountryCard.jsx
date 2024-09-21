
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LabelSpan from './ui/LabelSpan';

export default function CountryCard(props) {
  return (
    <Link
      href={`/${props?.name?.common}`}
      className=" w-[288px] md:w-[272px] h-fit  cursor-pointer rounded overflow-hidden shadow-xl group border-[1px] dark:border-slate-600"
    >
      <CountryImage src={props.flags.svg} />
      <div className="pt-5 pl-5 pb-8">
        <h2 className="font-bold mb-4 text-2xl w-[240px]">
          {props?.name?.common}
        </h2>
        {/*  */}
        <CountryInfo
          population={props.population}
          region={props.region}
          capital={props.capital}
        />
      </div>
    </Link>
  );
}

function CountryImage({ src }) {
  return (
    <div className="h-[168px] overflow-hidden group-hover:scale-110  transition ease-in-out duration-300">
      <Image height={168} width={288} src={src} alt="country-img" />
    </div>
  );
}


function CountryInfo(){


  return(
    <div className='flex text-xl'>

      <div>
        <LabelSpan/>
      </div>
    </div>

  )

}