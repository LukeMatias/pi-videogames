import { GET_GAMES, GET_GENRES, DETAIL_GAME, STATE_BAR, SORT } from "../actions";

const initialState = {
  games: [],
  genres: [],
  detailGame: {},
  // ESTADO SOLO PARA LOS SEARCHED ??
  // sort: [],
  // gamesSortByRating: [],
  // gamesSortByAlpha: [],
  // filtByGener: [],
  // userGames: [],
  // stateBar:false,

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
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
    case STATE_BAR:

      return {
        ...state,
        stateBar: action.payload,
      };
    case SORT:
      

      return {
        ...state,
        stateBar: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
