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

export default function CharacterList() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res)
        setData(res.data.results)
      })
      .catch(err => {
        console.log("ERROR", err)
      })

  }, []);

  const handleSearch = arr => {
      setData(arr)
  }

  return (
    <section className="character-list">
      <SearchForm handleSearch={handleSearch} data={data} />
      <h1>Characters</h1>
      <CharContainer>
        {data.map(char => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </CharContainer>
    </section>
  );
}
