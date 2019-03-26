import styled from 'styled-components';

export const MoviePoster = styled.div`
  background-image: url(${props => props.poster});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  /* margin: 4rem auto; */
  height: 20rem;
  width: 100%;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  background: #00d277;
  color: #ffff;
  width: 3.5rem;
  border-radius: 15px;
  text-align: center;
  margin: 0.4rem 0.4rem;
  padding: 0.1rem;
  font-weight: bold;
`;
