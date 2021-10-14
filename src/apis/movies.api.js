import { API_BASE_URL, API_KEY } from '../util/constants';

export const fetchDiscoverMovies = () => {
  return fetch(
    `${API_BASE_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
  );
};

export const fetchSearchedMovies = (query) => {
  return fetch(
    `${API_BASE_URL}search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&sort_by=popularity.desc`
  );
};
