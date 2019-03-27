import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SearchBar = styled.input`
  color: #00d277;
  margin-top: 2rem;

  /* padding: 0.8rem 2rem; */
  width: 95vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  font-size: 0.875rem;
  height: 3rem;
  line-height: 1rem;
  text-indent: 1.0625rem;
  caret-color: #00d277;
  font-family: 'Roboto', sans-serif;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);

  border-radius: 22px;
  outline: none;
  border: none;

  &::placeholder {
    color: #00d277;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  left: 50%;

  transform: translate(-50%, -50%);
  width: calc(100vw - 2rem);

  img {
    position: absolute;
    top: 2.65rem;
    right: 2rem;
  }
`;
