import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink } from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import Locations from "./components/LocationsList"
import Episodes from "./components/EpisodesList"
import styled from "styled-components"

const NavDiv = styled.div`
  text-align: center;
`

export default function App() {
  return (
    <main>
      <NavDiv>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/characters"> Characters </NavLink>
        <NavLink to="/locations"> Locations </NavLink>
        <NavLink to="/episodes"> Episodes </NavLink>
      </NavDiv>
      <Header />

      <Route exact path="/">
        <WelcomePage />
      </Route>

      <Route path="/characters">
        <CharacterList />
      </Route>

      <Route path="/episodes">
        <Episodes />
      </Route>

      <Route path="/locations">
        <Locations />
      </Route>

    </main>
  );
}
