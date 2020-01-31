import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 25%;
  img {
    width: 50%;
  }
`

export default function CharacterCard({ char }) {
  const { name, status, species, gender, origin, image  } = char
  return (
    <Card>
      <img src={image} />
      <h3>{name}</h3>
      <h4>Currently {status}</h4>

    </Card>
  )
}
