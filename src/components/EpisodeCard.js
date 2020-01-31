import React from "react";

export default function EpisodeCard({ epi }) {
  const { name, air_date, episode } = epi
  return (
    <div>
      <h2>{name}</h2>
      <h3>{air_date}</h3>
      <h3>{episode}</h3>
    </div>
  )
}