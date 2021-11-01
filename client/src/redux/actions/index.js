import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const GET_GENRES = "GET_GENRES";
export const DETAIL_GAME = "DETAIL_GAME";
export const STATE_BAR = "STATE_BAR";
export const SORT_GAMES_BY_RATING = "SORT_GAMES_BY_RATING";
export const SORT_GAMES_BY_ALPHA = "SORT_GAMES_BY_ALPHA";
export const SORT = "SORT";

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

export function sort (dispatch){
  return dispatch({type :SORT})
}
export function sortByRating(sort) {
  return function (dispatch) {
    dispatch({ type: SORT_GAMES_BY_RATING,sort});
  };
}
