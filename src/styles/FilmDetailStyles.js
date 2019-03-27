import styled from 'styled-components';

export const BackdropContainer = styled.div`
  background-image: url(${props => props.backdrop});
  height: 40vh;
  width: 100vw;
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 0;
`;

export const FilmDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 95vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: -11rem;
  padding: 2rem;
`;

export const PosterContainer = styled.img`
  background-image: url(${props => props.poster});
  border-radius: 13px;
  margin-right: 1rem;
  -webkit-box-shadow: 10px 10px 31px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 31px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 31px 0px rgba(0, 0, 0, 0.75);
`;

export const FilmDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilmTitle = styled.h1`
  font-size: 1.8rem;
  margin-top: 3rem;
  color: #e0f1fa;
  font-weight: bold;
`;

export const FilmInfoPoint = styled.p`
  font-size: 1rem;
  color: #a2c0cd;
`;
