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
const Title = styled.h1`
  text-align: center;
`

function CharacterList() {
  const [load, setLoad] = useState('visible')
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState([])
  const api = 'https://rickandmortyapi.com/api/character/'
  let nextApi = ''
  let timeOut = 2500
  const arr = []

  const handleSearch = Arr => {
    setSearchData(Arr)
  }

  const callApi = a => {
    axios.get(a)
      .then(res => {
        //console.log(res)
        res.data.results.forEach(x => {
          arr.push(x)
        })
        setData(arr)
        timeOut = 1000
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

  useEffect(() => {
    setTimeout(function () {
      setLoad('invisible')
      const loadFinish = document.querySelector('.invisible')
      loadFinish.style.display = 'none'
    }, timeOut);
    handleSearch(data);
  }, [load]);

  return (
    <section className="character-list">
      <SearchForm handleSearch={handleSearch} data={data} />
      <Title>Characters</Title>
      <CharContainer>
        {searchData.map(char => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </CharContainer>
      <Loading className={load}>Loading...</Loading>
    </section>
  );
}

export default CharacterList