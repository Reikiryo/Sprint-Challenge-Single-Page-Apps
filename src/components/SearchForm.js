import React, { useState } from "react";

export default function SearchForm({ data, handleSearch }) {
  const [search, setSearch] = useState('')

  const handleChanges = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newChars = data.filter(char => (
        char.name.toLowerCase().includes(search.toLowerCase())
    ))
    handleSearch(newChars)
  }  
  return (
    <section className="search-form">
      <label>
      Search
        <form onSubmit={handleSubmit}>
          <input onChange={handleChanges} value={search} type="text" placeholder="Rick Sanchez 🔍" />
          <input type="submit"/>
        </form>
      </label>
    </section>
  );
}
