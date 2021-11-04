import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const GET_GENRES = "GET_GENRES";
export const DETAIL_GAME = "DETAIL_GAME";
export const CREATE_GAME = "CREATE_GAME";
export const SORT_RATING = "SORT_RATING";
export const SORT_ALPHA = "SORT_ALPHA";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";

export function getGames(game) {
  return async function (dispatch) {
    const data = game.length
      ? await axios.get(`http://localhost:3001/videogames?name=${game}`)
      : await axios.get(`http://localhost:3001/videogames`);
    dispatch({ type: GET_GAMES, payload: data.data });
  };
}
export function getGenres() {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/genres`);
    dispatch({ type: GET_GENRES, payload: data.data });
  };
}
export function getGameById(id) {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/videogames/${id}`);
    dispatch({ type: DETAIL_GAME, payload: data.data });
  };
}

export function createGame(newGame) {
  return async function (dispatch) {
    // try {

    // } catch (error) {

    // }
    const gameCreated = await axios.post(
      "http://localhost:3001/videogames",
      newGame
    );

    dispatch({ type: CREATE_GAME, payload: gameCreated.data });
  };
}

export function sortByAlpha(payload) {
  return function (dispatch) {
    dispatch({ type: SORT_ALPHA, payload });
  };
}

export function filterByGenres(payload) {
  console.log(payload);
  return function (dispatch) {
    dispatch({ type: FILTER_BY_GENRE, payload });
  };
}
export function filterByCreated(payload) {
  console.log(payload);
  return function (dispatch) {
    dispatch({ type: FILTER_BY_CREATED, payload });
  };
}
export function sortByRating(payload) {
  console.log(payload);
  return function (dispatch) {
    dispatch({ type: SORT_RATING, payload });
  };
}
