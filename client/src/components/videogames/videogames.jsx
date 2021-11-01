import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres } from "../../redux/actions";
import Loader from "../Loader/Loader";
import Cards from "../Cards/Cards";

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
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      setTimeout(
        dispatch(getGames(videogame)),
        2000

      );
    }
    return () => {
      isCancelled = true;
    };
  }, [dispatch, videogame]);
  useEffect(() => dispatch(getGenres()), [dispatch]);

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
        {!Object.keys(games).length ? <Loader /> : <Cards games={games} />}
      </main>
    </>
  );
}

export default Videogames;
