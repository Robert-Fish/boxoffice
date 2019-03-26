import styled from 'styled-components';

export const MovieContainer = styled.div`
  background-image: url(${props => props.poster});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  /* margin: 4rem auto; */
  height: 20rem;
  width: 100%;
`;
