import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Landing from "./components/Landing/Landing";
import CreateGame from "./components/Create_game/CreateGame";
import Videogames from "./components/Videogames/Videogames";
import GameDetail from "./components/game_detail/gameDetail";
import NotFound from "./components/NotFound/NotFound";

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/videogames" render={() => <Videogames />} />
        <Route exact path="/videogames/create" render={() => <CreateGame />} />
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
        <Route path="/" render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
