import {
  MOVIES_FETCHED,
  SELECT_MOVIE,
  SET_RATING_FILTER,
  SET_SEARCH_QUERY,
  SET_FILTERED_MOVIES,
} from '../actions/movies.actions';
import { deepClone } from '../util/utils';

const initialState = {
  moviesList: [],
  unfilteredMovies: [],
  selectedMovie: null,
  ratingFilter: 0,
  searchQuery: '',
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_FETCHED:
      return {
        ...state,
        moviesList: action.payload,
        unfilteredMovies: deepClone(action.payload),
        showingResults: action.searched ? true : false,
        ratingFilter: action.filtered ? state.ratingFilter : 0,
      };
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case SET_RATING_FILTER:
      return {
        ...state,
        ratingFilter: action.payload,
        moviesList: action.payload ? state.moviesList : state.unfilteredMovies,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_FILTERED_MOVIES:
      return {
        ...state,
        moviesList: action.filteredMovies,
      };
    default:
      return state;
  }
}
