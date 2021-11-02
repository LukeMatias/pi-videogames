import React from "react";
import { Switch, Route } from "react-router";
// import { getGameById } from "./redux/actions";
import { useSelector } from "react-redux";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";
import CreateGame from "./components/Create_game/CreateGame";
import Videogames from "./components/Videogames/Videogames";
import GameDetail from "./components/game_detail/gameDetail";
import Footer from "./components/footer/footer";

export function App() {
  // const games = useSelector((state) => state.games);
  const gameId = useSelector((state) => state.detailGame);
  // const dispatch = useDispatch();
  // useEffect(()=>
  // dispatch(getGameById()),[]
  // )
  return (
    <div className="App">
    <Nav/>
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        {/* <Route path="/" render={() => <Nav />} /> */}
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
            const id =
              match.params.id.split("-").length > 2
                ? match.params.id
                : parseInt(match.params.id);
            console.log(id);
            // gameIdDetail(id);
            // const game =
            //   match.params.id.split("-").length > 2
            //     ? games.find((g) => g.id === match.params.id)
            //     : (gameIdDetail(parseInt(match.params.id)), gameId);
            // console.log(game);
            return <GameDetail game={gameId} />;
          }}
        />

      </Switch>
      <Footer />    
    </div>
  );
}

export default App;
