import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getDiscoverMovies, selectMovie } from '../../actions/movies.actions';
import { IMAGE_BASE_URL } from '../../util/constants';
import Filters from '../filters/filters.component';

const StyledMoviesContainer = styled.div`
  background: #363636;
  border-radius: 5px;
  padding: 10px;
  width: 800px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const StyledMoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const StyledMovieItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 180px;
  height: 270px;
  background-image: url('${(props) =>
    props.imageUrl ? IMAGE_BASE_URL + props.imageUrl : ''}');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledListTitle = styled.h2`
  color: #e1e1e1;
  margin: 0;
  padding: 4px 10px;
`;

const StyledNotFoundMovies = styled.h2`
  color: white;
  width: 820px;
  text-align: center;
  @media (max-width: 820px) {
    width: 100%;
  }
`;

export default function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesList);
  const showingResults = useSelector((state) => state.movies.showingResults);

  const onMovieClick = (movie) => {
    dispatch(selectMovie(movie));
  };

  useEffect(() => {
    dispatch(getDiscoverMovies());
  }, [dispatch]);

  return (
    <StyledMoviesContainer>
      <StyledHeader>
        <StyledListTitle>
          {showingResults ? 'Search Results' : 'Discover'}
        </StyledListTitle>
        <Filters />
      </StyledHeader>
      <StyledMoviesList>
        {movies &&
          movies.map((item) => (
            <StyledMovieItem
              key={item.id}
              imageUrl={item.poster_path}
              ariaLabel={item.title}
              tabIndex="0"
              onClick={() => onMovieClick(item)}
            >
              {!item.poster_path && item.title}
            </StyledMovieItem>
          ))}
        {(!movies || !movies.length) && (
          <StyledNotFoundMovies>Could not find any movies</StyledNotFoundMovies>
        )}
      </StyledMoviesList>
    </StyledMoviesContainer>
  );
}
