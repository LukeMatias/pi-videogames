import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres } from "../../redux/actions";
import Loader from "../Loader/Loader";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import FiltersSection from "../FiltersSection/FiltersSection";
import styled from "styled-components";

// https://www.youtube.com/watch?v=IYCa1F-OWmk
// https://www.youtube.com/watch?v=ZX3qt0UWifc&ab_channel=WebDevSimplified
export function Videogames() {
  const games = useSelector((state) => state.games);
  const genres = useSelector((state) => state.genres);
  const [videogame, setVideogame] = useState("");
  const [order, setOrder] = useState(""); // eslint-disable-line
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);
  const indexLastGame = currentPage * gamesPerPage;
  const indexFirstGame = indexLastGame - gamesPerPage;
  const currentGames = games.slice(indexFirstGame, indexLastGame);

  function handlePagination(pageNumber) {
    setCurrentPage(pageNumber);
  }
  const dispatch = useDispatch();
  // const dispatchName = useDispatch();
  // if (!games && !genres) {

  // } else {

  // }
  // useEffect( async () => {

  // await Fn  } ()        , []); // eslint-disable-line
  useEffect(() => {
    if (!games.length) {
      console.log("Dentro del IF");
      dispatch(getGames(videogame));
    }
    if (!genres.length) {
      dispatch(getGenres());
    }
    return () => {};
  }, [videogame]); // eslint-disable-line

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
      <MainApp>
        <h1>Videogames App</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
        {/* Cambiar el form por un div y hacer el onclick en el button pasando el handle submit
         */}
          <div>
            <input
              type="text"
              name="game"
              value={videogame}
              autoFocus={true}
              onChange={(e) => handleChange(e)}
              placeholder="Search game ..."
            />
            <button type="submit">Search</button>
          </div>
          <Pagination
            gamesPerPage={gamesPerPage}
            allGames={games.length}
            handlePagination={handlePagination}
          />
        </form>
        <SectionFiltAndCards>
          <FiltersSection setCurrentPage={setCurrentPage} setOrder={setOrder} />
          {!Object.keys(games).length ? (
            <Loader />
          ) : (
            <Cards games={currentGames} />
          )}
          {/* <Cards games={games} /> */}
        </SectionFiltAndCards>
      </MainApp>
    </>
  );
}

export default Videogames;

const MainApp = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  div {
    /* margin:.5em 0; */

    form {
      margin: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      input {
        width: 75%;
        height: 25px;
      }
      button {
        cursor: pointer;
        padding: 0 1em;
      }
    }
  }

  @media (min-width: 600px) {
    form {
      flex-direction: row;
      /* margin-top:2em; */
      div {
        margin: 1em 0;
        input {
          /* width:80%; */
          height: 2em;
        }
      }
    }
  }
`;

const SectionFiltAndCards = styled.section`
  /* height: */
  @media (min-width: 600px) {
    display: flex;
    /* height:100vh; */
  }
`;
