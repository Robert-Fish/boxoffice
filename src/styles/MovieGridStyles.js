import styled from 'styled-components';

export const MoviePoster = styled.div`
  background-image: url(${props => props.poster});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  border: ${props => (props.poster === '' ? '1px solid #00d277' : '')};
  /* margin: 4rem auto; */
  height: 20rem;
  width: 100%;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MovieTitle = styled.h1`
  color: #d9eaf2;
  font-size: 1rem;
  text-align: left;
  margin: 0.7rem 0 0rem 0;
`;

export const MovieReleaseDate = styled(MovieTitle)`
  font-size: 0.8rem;
  color: #97c4d6;
`;

export const PopularityBadge = styled.p`
  background: ${props => {
    if (props.ratingLevel <= 3) {
      return '#D1235b';
    } else if (props.ratingLevel >= 3 && props.ratingLevel <= 7) {
      return '#4900A3';
    } else {
      return '#00d277';
    }
  }};

  color: #ffff;
  width: 3.5rem;
  border-radius: 15px;
  text-align: center;
  margin: 0.4rem 0.4rem;
  padding: 0.1rem;
  font-weight: bold;
`;

export const LatestMoviesTitle = styled.p`
  font-size: 2rem;
  color: #e0f1fa;
  font-weight: bold;
`;
