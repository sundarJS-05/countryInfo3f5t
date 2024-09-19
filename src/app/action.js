
"use server"

// https://restcountries.com/v3.1/all

export async function fetchCountries( ){

    let response = await ( fetch("https://restcountries.com/v3.1/all"))

    // output data - JSON conversion of repsonse
    let data = await response.json()

    // fn's output
    return (data)
}