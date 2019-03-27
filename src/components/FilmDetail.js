import React, { Component, Fragment } from 'react';
import { BackdropContainer } from '../styles/FilmDetailStyles';
import { withRouter } from 'react-router-dom';
import { getLatestFilms, searchFilms } from '../actions/filmActions';
import { connect } from 'react-redux';

class FilmDetail extends Component {
  constructor() {
    super();
    this.state = {
      selectedFilm: {}
    };
  }

  componentWillMount = () => {
    const selectedFilmName = this.props.location.search.slice(6);

    this.props.searchFilms(selectedFilmName).then(result => {
      this.setState({
        selectedFilm: result.payload[0]
      });
    });
  };

  render() {
    return (
      <Fragment>
        <BackdropContainer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  results: state.film.results
});

export default connect(
  mapStateToProps,
  { getLatestFilms, searchFilms }
)(withRouter(FilmDetail));
