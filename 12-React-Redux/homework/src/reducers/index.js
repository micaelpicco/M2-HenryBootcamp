import {
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
} from "../actions/index.js";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, moviesLoaded: action.payload.Search };
    case GET_MOVIE_DETAIL:
      return { ...state, movieDetail: action.payload };
    case ADD_MOVIE_FAVORITE:
      if (state.moviesFavourites.some((el) => el.id === action.id.id)) {
        return { ...state };
      } else {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.id),
        };
        // alert("Película ya en favoritos");
      }
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          (el) => el.id !== action.id.id
        ),
      };
    default:
      return { ...state };
  }
}
export default rootReducer;
