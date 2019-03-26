import React, { Component } from 'react';
import {
  HeaderContainer,
  SearchBar,
  SearchBarContainer
} from '../styles/HeaderStyles';
import axios from 'axios';

import searchIcon from '../assets/searchIcon.png';

export default class Header extends Component {
  componentWillMount = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      )
      .then(res =>
        this.setState({
          results: res.data.results
        })
      );
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
