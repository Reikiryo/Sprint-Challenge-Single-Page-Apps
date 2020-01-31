import React from "react";

export default function LocationCard({ location }) {
  const { name, type, dimension } = location
  return (
    <div>
      <h2>{name}</h2>
      <h3>{type}</h3>
      <h3>{dimension}</h3>
    </div>
  )
}
