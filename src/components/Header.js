import React, { Component } from 'react';
import {
  HeaderContainer,
  SearchBar,
  SearchBarContainer
} from '../styles/HeaderStyles';
import { connect } from 'react-redux';
import { getLatestFilms, searchFilms } from '../actions/filmActions';

import logo from '../assets/logo.svg';
import searchIcon from '../assets/searchIcon.png';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }

  componentDidMount = () => {
    this.props.getLatestFilms();
  };

  onChange = e => {
    const { value } = e.target;
    this.setState(
      {
        searchText: value
      },
      () => {
        if (this.state.searchText === '') {
          this.props.getLatestFilms();
        }
        this.props.searchFilms(this.state.searchText);
      }
    );
  };
  render() {
    return (
      <HeaderContainer>
        <img
          src={logo}
          alt=""
          style={{
            display: 'block',
            width: '7rem'
          }}
        />

        <SearchBar
          placeholder="Search"
          onChange={this.onChange}
          value={this.state.searchText}
          name="searchText"
        />
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
  { getLatestFilms, searchFilms }
)(Header);
