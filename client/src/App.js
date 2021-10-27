import React from "react";
// import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import "./App.css";
import Landing from "./components/landing/landing";
import Nav from "./components/nav/nav";
import CreateGame from "./components/create_game/createGame";
import Videogames from "./components/videogames/videogames";
import GameDetail from "./components/game_detail/gameDetail";
import Footer from "./components/footer/footer";
// import { Nav } from "./components/Nav/Nav";
// import TodoDetail from "./components/TodoDetail/TodoDetail";

export function App() {
  return (
    <div className="App">
      <Route path="/" render={() => <Nav />} />
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/videogames" render={() => <Videogames />} />
        <Route exact path="/videogames/create" render={() => <CreateGame />} />
        <Route
          path="/videogames/:id"
          render={({ match }) => {
            console.log(match);
            // const todo = todos.find((t) => t.id === parseInt(match.params.id));
            return <GameDetail />;
          }}
        />
      </Switch>
      <Route path="/" render={() => <Footer />} />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     todos: state,
//   };
// };

// export default connect(mapStateToProps)(App);
export default App;
