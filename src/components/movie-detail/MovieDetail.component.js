import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearSelectedMovie } from '../../actions/movies.actions';
import { IMAGE_BASE_URL } from '../../util/constants';

const StyledModal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: 7% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 600px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 100%;
    min-width: 360px;
  }
`;

const StyledCloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  :focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const StyledMovieDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`;

const StyledMoviePoster = styled.div`
  width: 215px;
  height: 322px;
  background-image: url('${(props) => IMAGE_BASE_URL + props.imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;
  margin: 5px;
`;

const StyledMovieInfo = styled.div`
  padding-left: 20px;
`;

const StyledMovieTitle = styled.div`
  font-weight: bold;
  font-size: 2em;
`;

const StyledMovieDataItem = styled.div`
  font-size: 1.2em;
  margin: 5px 0;
`;

const StyledMovieDataTitle = styled.span`
  font-weight: bold;
`;

export default function MoviesList() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.selectedMovie);
  const onCloseMovie = () => {
    dispatch(clearSelectedMovie());
  };

  return movie ? (
    <StyledModal>
      <StyledModalContent>
        <StyledCloseButton onClick={onCloseMovie}>&times;</StyledCloseButton>
        <StyledMovieDetail>
          {movie.poster_path && (
            <StyledMoviePoster imageUrl={movie.poster_path} />
          )}
          <StyledMovieInfo>
            <StyledMovieTitle>{movie.title}</StyledMovieTitle>
            <StyledMovieDataItem>
              <StyledMovieDataTitle>Release Date: </StyledMovieDataTitle>
              <span>{movie.release_date}</span>
            </StyledMovieDataItem>
            <StyledMovieDataItem>
              <StyledMovieDataTitle>Rating: </StyledMovieDataTitle>
              <span>{movie.vote_average} / 10</span>
            </StyledMovieDataItem>
            <StyledMovieDataItem>
              <StyledMovieDataTitle>Popularity: </StyledMovieDataTitle>
              <span>{movie.popularity}</span>
            </StyledMovieDataItem>
            <StyledMovieDataItem>
              <StyledMovieDataTitle>Overview: </StyledMovieDataTitle>
              <span>{movie.overview}</span>
            </StyledMovieDataItem>
          </StyledMovieInfo>
        </StyledMovieDetail>
      </StyledModalContent>
    </StyledModal>
  ) : null;
}
