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

  margin-right: 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5),
    0px 16px 32px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const FilmDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilmTitle = styled.h1`
  font-size: 1.75rem;
  margin-top: 8rem;
  color: #e3f4fc;

  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  line-height: 2rem;
`;

export const FilmInfoPoint = styled.p`
  font-size: 0.75rem;

  color: #b8d8e6;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: 0.75rem;
`;

export const DetailTitle = styled.h1`
  font-weight: bold;
  font-size: 1.25rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: 1.5rem;

  color: #e3f4fc;
`;

export const FilmDetailPara = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
  color: #9fbbc7;
`;

export const BackArrowIcon = styled.img`
  position: absolute;
  top: 2.195625rem;
  left: 1.5rem;
  cursor: pointer;
`;
