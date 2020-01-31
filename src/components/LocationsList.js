import React, { useEffect, useState } from "react";
import axios from 'axios'
import LocationCard from './LocationCard'
import styled from 'styled-components'
import SearchForm from './SearchForm'

const LocationDiv = styled.div`
    text-align: center;
`
const Loading = styled.h1`
  text-align: center;
`
export default function LocationsList() {
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])
    const api = 'https://rickandmortyapi.com/api/location/'
    let nextApi = ''
    const arr = []

    const handleSearch = ar => {
        setSearchData(ar)
    }

    const callApi = a => {
        axios.get(a)
            .then(res => {
                //console.log(res)
                res.data.results.forEach(x => {
                    arr.push(x)
                })
                setData(arr)
                if (res.data.info.next !== '') {
                    nextApi = res.data.info.next
                    callApi(nextApi)
                }
            })
            .catch(err => {
                console.log("ERROR", err)
            })
    }

    useEffect(() => {
        callApi(api)
    }, []);

    setTimeout(function () { handleSearch(data); }, 2000);

    return (
        <section>
            <SearchForm handleSearch={handleSearch} data={data} />
            <LocationDiv>
                {searchData.map(location => (
                    <LocationCard key={location.id} location={location} />
                ))}
            </LocationDiv>
            <Loading>Loading...</Loading>
        </section>
    );
}
