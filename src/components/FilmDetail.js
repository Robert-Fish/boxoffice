import React, { Component, Fragment } from 'react';
import {
  BackdropContainer,
  PosterContainer,
  FilmDetails,
  FilmTitle,
  FilmInfoPoint,
  DetailTitle,
  FilmDetailPara,
  BackArrowIcon
} from '../styles/FilmDetailStyles';
import { withRouter } from 'react-router-dom';
import { getFilmDetails } from '../actions/filmActions';
import backArrow from '../assets/backArrow.svg';
import { connect } from 'react-redux';
import Moment from 'react-moment';

class FilmDetail extends Component {
  componentWillMount = () => {
    const selectedFilmID = this.props.location.pathname.slice(12, 18);

    const filmType = this.props.location.pathname.slice(
      this.props.location.pathname.indexOf('type:') + 5
    );
    console.log(filmType);

    this.props.getFilmDetails(parseInt(selectedFilmID), filmType);
  };

  convertMinutesToHours = minutes => {
    // helper function to convert minutes into 'hh mm' format for readable running time
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    h = h < 10 ? '' + h : h;
    m = m < 10 ? '' + m : m;
    return h + 'h ' + m + ' min';
  };

  render() {
    const {
      backdrop_path,
      poster_path,
      title,
      release_date,
      vote_average,
      runtime,
      overview,
      episode_run_time
    } = this.props.selectedFilm;

    const { history } = this.props;
    return (
      <Fragment>
        <BackArrowIcon src={backArrow} onClick={() => history.goBack()} />
        <BackdropContainer
          backdrop={`http://image.tmdb.org/t/p/w185/${backdrop_path}`}
        />
        <div className="container filmAboutContainer">
          <PosterContainer
            className="img-fluid"
            src={`http://image.tmdb.org/t/p/w185/${poster_path}`}
          />
          <FilmDetails>
            <FilmTitle>{title}</FilmTitle>
            <FilmInfoPoint>
              <Moment format="YYYY">{release_date}</Moment> ·{' '}
              {vote_average * 10}% score
            </FilmInfoPoint>
            <FilmInfoPoint>
              {runtime === undefined ? '' : this.convertMinutesToHours(runtime)}
            </FilmInfoPoint>
          </FilmDetails>
        </div>
        <hr style={{ color: '#0f303d', height: '2rem' }} width="100%" />
        <div className="container">
          <DetailTitle>Overview</DetailTitle>
          <FilmDetailPara>{overview}</FilmDetailPara>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  results: state.film.results,
  selectedFilm: state.film.selectedFilm
});

export default connect(
  mapStateToProps,
  { getFilmDetails }
)(withRouter(FilmDetail));
