import {
  GET_GAMES,
  GET_GENRES,
  DETAIL_GAME,
  CREATE_GAME,
  SORT_ALPHA,
  FILTER_BY_GENRE,
  FILTER_BY_CREATED,
  SORT_RATING,
  CLEAN_DETAIL_GAME,
  FILTER_BY_RATING,
} from "../actions";

const initialState = {
  games: [],
  toFilterGames: [],
  genres: [],
  gameCreated: undefined,
  detailGame: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        toFilterGames: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case DETAIL_GAME:
      return {
        ...state,
        detailGame: action.payload,
      };

    case CREATE_GAME:
      return {
        ...state,
        games: [...state.games, action.payload],
        gameCreated: action.payload,
      };
    case FILTER_BY_GENRE:
      const allGames = state.toFilterGames;
      const gamesFiltered =
        action.payload === "All"
          ? allGames
          : allGames.filter((g) => g.genresGame.includes(action.payload));
      return {
        ...state,
        games: gamesFiltered,
      };
    case FILTER_BY_CREATED:
      const filtCreatedGames = state.toFilterGames;

      const createdFiltered =
        action.payload === "User"
          ? filtCreatedGames.filter((g) => g.createdUser)
          : filtCreatedGames.filter((g) => !g.createdUser);
      console.log(createdFiltered);
      return {
        ...state,
        games: action.payload === "All" ? state.toFilterGames : createdFiltered,
       
      };

    case SORT_ALPHA:
      let sortedAlpha =
        action.payload === "asc"
          ? state.games.sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              return 0;
            })
          : state.games.sort(function (a, b) {
              if (b.name.toLowerCase() < a.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        games: sortedAlpha,
      };
    case SORT_RATING:
      let sortedRating =
        action.payload === "asc"
          ? state.games.sort((a, b) => a.rating - b.rating)
          : state.games.sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        games: sortedRating,
      };
    case CLEAN_DETAIL_GAME:
      return {
        ...state,
        detailGame: action.payload,
      };
    case FILTER_BY_RATING:
        let filterRating = state.games;
        let filtrated = filterRating.filter( g => g.rating > action.payload )    ;
        return {
        ...state,
        games: filtrated,
      };
    default:
      return state;
  }
}

export default rootReducer;
