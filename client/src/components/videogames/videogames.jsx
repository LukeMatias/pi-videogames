import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres } from "../../redux/actions";
import Loader from "../Loader/Loader";
import Cards from "../Cards/Cards";

// https://www.youtube.com/watch?v=IYCa1F-OWmk
export function Videogames() {
  const style = {
    border: "1px solid black",
  };
  const [videogame, setVideogame] = useState("");
  const games = useSelector((state) => state.games);
  // const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  // const dispatchName = useDispatch();
  // if (!games && !genres) {

  // } else {

  // }
  // useEffect( async () => {
    
  // await Fn  } ()        , []); // eslint-disable-line
  useEffect(() => {
    // SI GAMES.LENGTH
    if (!games.length) {
      console.log("Dentro del IF");
      dispatch(getGames(videogame));
      dispatch(getGenres());
    }
    // console.log("Fuera del IF")
    console.log(games);
    // return () => {};
  }, []); // eslint-disable-line

  function handleChange(event) {
    setVideogame(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getGames(videogame));
    console.log(videogame);
    // setVideogame("");
  }

  return (
    <>
      <main style={style}>
        {/* <h1>Videogames</h1> */}
        <form>
          <input
            type="text"
            name="game"
            value={videogame}
            autoFocus={true}
            onChange={(e) => handleChange(e)}
            placeholder="Search game ..."
          />
          <button onClick={(e) => handleSubmit(e)}>Search</button>
        </form>
        {/* {!Object.keys(games).length ? <Loader /> : <Cards games={games} />} */}
        <Cards games={games} />
      </main>
    </>
  );
}

export default Videogames;
