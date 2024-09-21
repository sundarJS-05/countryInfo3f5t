
"use client"

import Image from "next/image";
import { fetchCountries } from "./action";
import {useQuery} from 'react-query'
import CountryCard from "@/components/CountryCard";


export default function Home() {

  const {isLoading,error,data} = useQuery("countries",
     ()=> fetchCountries() 
    );

     console.log("data returned", data)

    if(isLoading)   return ("Loading....")


  return (
    <section className="flex flex-wrap md:justify-between  justify-center">

      {data?.map(  (d, i)=>{

        <CountryCard  key={i}  {...d}

        />
       
      })   }

    </section>

  );
}

