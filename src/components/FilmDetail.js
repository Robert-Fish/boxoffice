import React, { useState } from 'react';
import { BackdropContainer } from '../styles/FilmDetailStyles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function FilmDetail(props) {
  const [selectedFilm, selectFilm] = useState(0);

  const selectedFilmID = props.history.location.search.slice(4);

  selectFilm(props.results.filter(film => film.id == selectedFilmID));

  return <BackdropContainer />;
}

const mapStateToProps = state => ({
  results: state.film.results
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(FilmDetail));
