import React, { Component } from 'react';
import axios from 'axios';
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
      <div className="container">
        <div className="row">
          {this.state.results.map(film => {
            return (
              <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6 col-6 mb-4">
                <MovieContainer key={film.id}>
                  <MoviePoster
                    poster={
                      'http://image.tmdb.org/t/p/w185/' + film.poster_path
                    }
                  >
                    <PopularityBadge>
                      {film.vote_average * 10} %
                    </PopularityBadge>
                  </MoviePoster>
                  <MovieTitle>{film.title}</MovieTitle>
                  <MovieReleaseDate>
                    <Moment format="MMMM YYYY">{film.release_date}</Moment>
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
