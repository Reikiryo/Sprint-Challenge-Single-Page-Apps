import React, { useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

const CharContainer = styled.div`
  with: 70%
  margin: 1% auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const Loading = styled.h1`
  text-align: center;
`

export default function CharacterList() {
  const [load, setLoad] = useState()
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState([])
  const api = 'https://rickandmortyapi.com/api/character/'
  let nextApi = ''
  const arr = []

  const handleSearch = arr => {
    setSearchData(arr)
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

  //setTimeout(function(){handleSearch(data); }, 2000);

  useEffect(() => {
    setTimeout(function(){setLoad(1)
       handleSearch(data); }, 2000);
  }, [load]);

  return (
    <section className="character-list">
      <SearchForm handleSearch={handleSearch} data={data} />
      <h1>Characters</h1>
      <CharContainer>
        {searchData.map(char => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </CharContainer>
      <Loading>Loading...</Loading>
    </section>
  );
}
