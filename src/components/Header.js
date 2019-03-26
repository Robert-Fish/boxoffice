import React, { Component } from 'react';
import {
  HeaderContainer,
  SearchBar,
  SearchBarContainer
} from '../styles/HeaderStyles';
import { connect } from 'react-redux';
import { getLatestFilms } from '../actions/filmActions';

import searchIcon from '../assets/searchIcon.png';

class Header extends Component {
  componentWillMount = () => {
    this.props.getLatestFilms();
  };

  render() {
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

        <SearchBar placeholder="Search" />
        {/* <img
            src={searchIcon}
            alt=""
            style={{ width: '25px', height: '25px' }}
          /> */}
      </HeaderContainer>
    );
  }
}

export default connect(
  null,
  { getLatestFilms }
)(Header);
