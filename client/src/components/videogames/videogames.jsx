import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination";
import FiltersSection from "../FiltersSection/FiltersSection";
import styled from "styled-components";
import LoaderBouncer from "../../elements/loaders/loaders";
import Nav from "../Nav/Nav";
import Footer from "../footer/footer";

export default function Videogames() {
  const games = useSelector((state) => state.games);
  const genres = useSelector((state) => state.genres);
  const [videogame, setVideogame] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);
  const indexLastGame = currentPage * gamesPerPage;
  const indexFirstGame = indexLastGame - gamesPerPage;
  const currentGames = games.slice(indexFirstGame, indexLastGame);
  const [order, setOrder] = useState(""); // eslint-disable-line

  function handlePagination(pageNumber) {
    setCurrentPage(pageNumber);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Home - videogames";

    if (games.length === 0) {
      dispatch(getGames());
    }
    if (genres.length === 0) {
      dispatch(getGenres());
    }

    return () => {
      document.title = "Vidogame - App";
    };
  }, [games]); // eslint-disable-line

  function handleInputSearch(event) {
    setVideogame(event.target.value);
    console.log(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getGames(videogame));
    console.log(videogame);
  }

  return (
    <>
      <MainApp>
      <Nav/>
        <h1>Videogames App</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="game"
              value={videogame}
              autoFocus={true}
              onChange={handleInputSearch}
              placeholder="Search game ..."
            />
            <button type="submit">Search</button>
          </div>
        </form>
        <Pagination
          gamesPerPage={gamesPerPage}
          allGames={games.length}
          handlePagination={handlePagination}
          currentPage={currentPage}
        />
        <SectionFiltAndCards>
          <FiltersSection setCurrentPage={setCurrentPage} setOrder={setOrder} />
          {!games.length ? <LoaderBouncer /> : <Cards games={currentGames} />}
        </SectionFiltAndCards>
        <Pagination
          gamesPerPage={gamesPerPage}
          allGames={games.length}
          handlePagination={handlePagination}
        />
      <Footer/>

      </MainApp>
    </>
  );
}

// export default Videogames;

const MainApp = styled.main`
  background: url(/images/joystick.jpg) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  h1{
    color:#ffff;
  }

  form {
    div {
      margin: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      input {
        width: 100%;
        height: 25px;
        margin-bottom: 0.5em;
      }
      button {
        cursor: pointer;
        padding: 0.5em 1em;
      }
    }
  }

  @media (min-width: 600px) {
    form {
      div {
        flex-direction: row;
        align-items: center;
        input {
          width: 75%;
          height: 25px;
          margin-bottom: 0;
        }
      }
    }
  }
`;

const SectionFiltAndCards = styled.section`
  @media (min-width: 600px) {
    display: flex;
  }
`;
