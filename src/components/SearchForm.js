import React, { useState } from "react";
import styled from 'styled-components'

const FormDiv = styled.div`
  text-align: center;
  width: 30%;
  margin: 0 auto; 
`

export default function SearchForm({ data, handleSearch }) {
  const [search, setSearch] = useState('')

  const handleChanges = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newData = data.filter(x => (
      x.name.toLowerCase().includes(search.toLowerCase())
    ))
    handleSearch(newData)
  }
  return (
    <section className="search-form">
      <FormDiv>
        <label>
          Search
          <form onSubmit={handleSubmit}>
            <input onChange={handleChanges} value={search} type="text" placeholder="Search Here 🔍" />
            <input type="submit" />
          </form>
        </label>
      </FormDiv>
    </section>
  );
}
