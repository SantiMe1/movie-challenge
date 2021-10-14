import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  getSearchedMovies,
  setSearchQuery,
} from '../../actions/movies.actions';

const StyledSearch = styled.div`
  display: flex;
`;

const StyledSearchInput = styled.input`
  border-radius: 5px;
  height: 32px;
  padding: 0 10px;
  border: 1px solid darkgray;
  font-size: 1.2em;
`;

export default function Search() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.movies.searchQuery);

  const onSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(getSearchedMovies(searchQuery));
    }
  };

  const onSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <StyledSearch>
      <StyledSearchInput
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={onSearchChange}
        onKeyDown={onSearchKeyDown}
      />
    </StyledSearch>
  );
}
