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

export const fetchFilteredMovies = (rating, query) => {
  const max = rating * 2;
  const min = max - 2;
  const options = `&sort_by=vote_average.desc&vote_average.gte=${min}&vote_average.lte=${max}`;
  const url = query
    ? `${API_BASE_URL}search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    : `${API_BASE_URL}discover/movie?api_key=${API_KEY}`;
  return fetch(url + options);
};
