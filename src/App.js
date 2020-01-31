import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink } from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"

export default function App() {
  return (
    <main>
      <NavLink to="/">Home</NavLink>
      <Header />
      <NavLink to="/characters">Characters</NavLink>

      <Route exact path="/">
        <WelcomePage/>
      </Route>

      <Route path="/characters">
        <CharacterList/>
      </Route>
      
    </main>
  );
}
