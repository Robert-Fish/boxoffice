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
  margin-top: 6rem;
  color: #e0f1fa;
  font-weight: bold;
`;

export const FilmInfoPoint = styled.p`
  font-size: 1rem;
  color: #a2c0cd;
`;

export const DetailTitle = styled.h1`
  color: #e3f4fc;
  font-weight: bold;
  font-size: 2rem;
`;

export const FilmDetailPara = styled.p`
  text-align: left;
  font-size: 1.6rem;
  color: #9fbcc7;
`;
