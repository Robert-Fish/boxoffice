import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  color: #00d277;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  display: block;
  font-weight: bold;
  /* width: calc(100vw - 6rem); */
  box-sizing: border-box;
  width: 100%;
  border-radius: 20px;
  outline: none;
  border: none;

  &::placeholder {
    color: #00d277;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  width: calc(100vw - 2rem);
  img {
    position: absolute;
    top: 2.65rem;
    right: 2rem;
  }
`;
