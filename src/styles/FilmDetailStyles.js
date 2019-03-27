import styled from 'styled-components';

export const BackdropContainer = styled.div`
  background-image: url(${props => props.backdrop});
  height: 40vh;
  width: 100vw;
`;
