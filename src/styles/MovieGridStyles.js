import styled from 'styled-components';

export const MoviePoster = styled.div`
  background-image: url(${props => props.poster});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  border: ${props => (props.poster === '' ? '1px solid #00d277' : '')};
  /* margin: 4rem auto; */
  height: 20rem;
  width: 100%;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
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
  color: #e6f7ff;
  font-size: 0.875rem;
  text-align: left;
  margin: 0.7rem 0 0rem 0;

  font-family: Roboto;

  line-height: 1rem;
`;

export const MovieReleaseDate = styled(MovieTitle)`
  font-size: 0.75rem;
  color: #a1d1e6;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;

  line-height: 0.875rem;
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
  border-radius: 8px;
  text-align: center;
  margin: 4px;
  padding: 3px 8px 3px 9px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;

  color: #ffffff;
`;

export const LatestMoviesTitle = styled.p`
  font-size: 2rem;
  color: #e0f1fa;
  font-weight: bold;
`;
