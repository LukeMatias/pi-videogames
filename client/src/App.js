import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";
import CreateGame from "./components/Create_game/CreateGame";
import Videogames from "./components/Videogames/Videogames";
import GameDetail from "./components/game_detail/gameDetail";
import Footer from "./components/footer/footer";

export function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/videogames" render={() => <Videogames />} />
        <Route exact path="/videogames/create" render={() => <CreateGame />} />
        <Route
          exact
          path="/videogames?name=name"
          render={() => <Videogames />}
        />
        <Route
          path="/videogames/:id"
          render={({ match }) => {
            console.log(match);
            const id = match.params.id.includes("-")
              ? match.params.id
              : parseInt(match.params.id);
            console.log(typeof id);
            return <GameDetail id={id} />;
          }}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
