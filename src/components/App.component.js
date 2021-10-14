import styled from 'styled-components';
import MoviesList from './movies-list/MoviesList.component';
import Search from './search/Search.component';
import MovieDetail from './movie-detail/MovieDetail.component';

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 15px 40px;
  background: #f9f9f9;
  z-index: 1;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const StyledTitle = styled.h1`
  color: #006bc9;
  margin: 0;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

function App() {
  return (
    <div>
      <StyledHeader>
        <StyledTitle>Movie Finder</StyledTitle>
        <Search />
      </StyledHeader>
      <StyledContent>
        <MoviesList />
      </StyledContent>
      <MovieDetail />
    </div>
  );
}

export default App;
