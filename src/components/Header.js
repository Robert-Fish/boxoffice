import React from 'react';
import {
  HeaderContainer,
  SearchBar,
  SearchBarContainer
} from '../styles/HeaderStyles';

import searchIcon from '../assets/searchIcon.png';

export default function Header() {
  return (
    <HeaderContainer>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
        alt=""
        style={{
          display: 'block',
          width: '7rem'
        }}
      />
      <SearchBarContainer>
        <SearchBar placeholder="Search" />
        <img
          src={searchIcon}
          alt=""
          style={{ width: '25px', height: '25px' }}
        />
      </SearchBarContainer>
    </HeaderContainer>
  );
}
