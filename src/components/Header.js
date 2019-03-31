import React, { Component } from 'react';
import { HeaderContainer, SearchBar } from '../styles/HeaderStyles';
import { connect } from 'react-redux';
import { getLatestFilms, searchFilms } from '../actions/filmActions';
import PropTypes from 'prop-types';

import logo from '../assets/logo.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }

  componentDidMount = () => {
    // Fetches the lastest movies on component mount
    this.props.getLatestFilms();
  };

  onChange = e => {
    const { value } = e.target;
    this.setState(
      {
        searchText: value
      },
      () => {
        // Searches films and tvs shows using local state else if searchbar is empty, repopulate grid with popular movies and shows.
        const { getLatestFilms, searchFilms } = this.props;

        if (this.state.searchText === '') {
          getLatestFilms();
        }
        searchFilms(this.state.searchText);
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
          autoFocus
        />
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  getLatestFilms: PropTypes.func.isRequired,
  searchFilms: PropTypes.func.isRequired
};

export default connect(
  null,
  { getLatestFilms, searchFilms }
)(Header);
