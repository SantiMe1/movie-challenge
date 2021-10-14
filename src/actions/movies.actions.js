import { fetchDiscoverMovies, fetchSearchedMovies } from '../apis/movies.api';
export const MOVIES_FETCHED = 'MOVIES_FETCHED';
export const SEARCHED_MOVIES_FETCHED = 'SEARCHED_MOVIES_FETCHED';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const CLEAR_SELECTED_MOVIE = 'CLEAR_SELECTED_MOVIE';
export const SET_RATING_FILTER = 'SET_RATING_FILTER';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_FILTERED_MOVIES = 'SET_FILTERED_MOVIES';

export function moviesFetchSuccess(movies, searched, filtered) {
  return {
    type: MOVIES_FETCHED,
    payload: movies,
    searched: searched,
    filtered: filtered,
  };
}

export function setFilteredMovies(filteredMovies) {
  return {
    type: SET_FILTERED_MOVIES,
    filteredMovies,
  };
}

export function selectMovie(movie) {
  return {
    type: SELECT_MOVIE,
    payload: movie,
  };
}

export function setSearchQuery(query) {
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  };
}

export function setRatingFilter(value) {
  return {
    type: SET_RATING_FILTER,
    payload: value,
  };
}

export function clearSelectedMovie() {
  return {
    type: SELECT_MOVIE,
    payload: null,
  };
}

export const getDiscoverMovies = () => (dispatch) => {
  fetchDiscoverMovies()
    .then((resp) => resp.json())
    .then((data) => {
      dispatch(moviesFetchSuccess(data.results));
    })
    .catch((res) => {
      console.error(res);
    });
};

export const getSearchedMovies = (query) => (dispatch) => {
  if (query) {
    dispatch(setSearchQuery(query));
    fetchSearchedMovies(query)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(moviesFetchSuccess(data.results, true));
      })
      .catch((res) => {
        console.error(res);
      });
  } else {
    dispatch(getDiscoverMovies());
  }
};

export const getFilteredMovies = (rating, unfilteredMovies) => (dispatch) => {
  const max = rating * 2;
  const min = max - 2;

  const moviesToShow = unfilteredMovies.filter(
    (movie) => movie.vote_average >= min && movie.vote_average <= max
  );
  dispatch(setFilteredMovies(moviesToShow));
};
