import React, { useState } from "react";

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
      <label>
        Search
        <form onSubmit={handleSubmit}>
          <input onChange={handleChanges} value={search} type="text" placeholder="Search Here 🔍" />
          <input type="submit" />
        </form>
      </label>
    </section>
  );
}
