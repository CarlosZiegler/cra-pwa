import React from 'react'
import axios from 'axios'
import useSWR from 'swr'

const fetcher =( url:string )=> axios.get(url)


export default function Home() {
    const { data, error } = useSWR(`https://swapi.dev/api/people/1/`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    const {name,birth_year, gender }  = data.data
   
    return (
        <div>
            <p id="name">Name: {name}</p>
            <p id="birth">Birth: {birth_year}</p>
            <p id="gender">Gender: {gender}</p>
        </div>
    )
}

