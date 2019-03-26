import React, { Component } from 'react';

import {
  MoviePoster,
  MovieContainer,
  MovieTitle,
  MovieReleaseDate,
  PopularityBadge
} from '../../styles/MovieGridStyles';
import Moment from 'react-moment';

export default class FilmGrid extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }
  componentWillMount = () => {};
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.results.map(film => {
            const { vote_average, title, release_date, poster_path } = film;
            return (
              <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
                <MovieContainer key={film.id}>
                  <MoviePoster
                    poster={'http://image.tmdb.org/t/p/w185/' + poster_path}
                  >
                    <PopularityBadge>{vote_average * 10} %</PopularityBadge>
                  </MoviePoster>
                  <MovieTitle>{title}</MovieTitle>
                  <MovieReleaseDate>
                    <Moment format="MMMM YYYY">{release_date}</Moment>
                  </MovieReleaseDate>
                </MovieContainer>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
