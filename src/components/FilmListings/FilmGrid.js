import React, { Component } from 'react';

import {
  MoviePoster,
  MovieContainer,
  MovieTitle,
  MovieReleaseDate,
  PopularityBadge,
  LatestMoviesTitle
} from '../../styles/MovieGridStyles';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class FilmGrid extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  render() {
    const { results } = this.props;

    return (
      <div className="container">
        '<LatestMoviesTitle>Popular Movies</LatestMoviesTitle>
        <div className="row">
          {results.map(film => {
            const {
              vote_average,
              title,
              release_date,
              poster_path,
              id,
              original_name
            } = film;

            return (
              <div
                className="col-xl-3 col-lg-2 col-md-4 col-sm-6 col-6 mb-4"
                key={id}
              >
                <Link
                  to={{
                    pathname: `/listing/`,
                    search: `?name=${
                      title === undefined ? original_name : title
                    }`
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  <MovieContainer>
                    <MoviePoster
                      poster={
                        poster_path === null
                          ? ''
                          : 'http://image.tmdb.org/t/p/w185/' + poster_path
                      }
                    >
                      <PopularityBadge ratingLevel={Math.round(vote_average)}>
                        {Math.round(vote_average * 10)} %
                      </PopularityBadge>
                    </MoviePoster>
                    <MovieTitle>
                      {title === undefined ? original_name : title}
                    </MovieTitle>
                    <MovieReleaseDate>
                      <Moment format="MMMM YYYY">{release_date}</Moment>
                    </MovieReleaseDate>
                  </MovieContainer>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.film.results
});

export default connect(mapStateToProps)(FilmGrid);
