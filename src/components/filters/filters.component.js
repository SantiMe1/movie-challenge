import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  setRatingFilter,
  getFilteredMovies,
} from '../../actions/movies.actions';
import ReactStars from 'react-rating-stars-component';

const StyledFilters = styled.div`
  margin-right: 28px;
  border-radius: 5px;
  border: 1px solid #6a6a6a;
  padding: 0 10px;
`;

const StyledFilterLabel = styled.div`
  position: relative;
  color: white;
  font-weight: bold;
  font-size: 0.9em;
  text-align: center;
`;

export default function Filters() {
  const dispatch = useDispatch();
  const ratingFilter = useSelector((state) => state.movies.ratingFilter);
  const unfilteredMovies = useSelector(
    (state) => state.movies.unfilteredMovies
  );
  const ratingChanged = (rating) => {
    if (!rating) {
      dispatch(setRatingFilter(0));
    } else {
      dispatch(setRatingFilter(rating));
      dispatch(getFilteredMovies(rating, unfilteredMovies));
    }
  };

  return (
    <StyledFilters>
      <StyledFilterLabel>Filter by Rating</StyledFilterLabel>
      <ReactStars
        value={ratingFilter}
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
    </StyledFilters>
  );
}
