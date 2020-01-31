import React, { useEffect, useState } from "react";
import axios from 'axios'
import EpisodeCard from './EpisodeCard'
import styled from 'styled-components'

const EpisodeDiv = styled.div`
    text-align: center;
`

export default function LocationsList() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)
          .then(res => {
            console.log(res)
            setData(res.data.results)
            //setSearchData(res.data.results)
          })
          .catch(err => {
            console.log("ERROR", err)
          })
    
    }, []);
    return (  
        <section>
            <EpisodeDiv>
            {data.map(episode => (
                <EpisodeCard epi={episode} />
            ))}
            </EpisodeDiv>
        </section>
    );
}