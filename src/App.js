import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink } from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import Locations from "./components/LocationsList"
import Episodes from "./components/EpisodesList"

export default function App() {
  return (
    <main>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/characters"> Characters </NavLink>
      <NavLink to="/locations"> Locations </NavLink>
      <NavLink to="/episodes"> Episodes </NavLink>
      <Header />

      <Route exact path="/">
        <WelcomePage/>
      </Route>

      <Route path="/characters">
        <CharacterList/>
      </Route>

      <Route path="/episodes">
        <Episodes/>
      </Route>

      <Route path="/locations">
        <Locations/>
      </Route>
      
    </main>
  );
}
