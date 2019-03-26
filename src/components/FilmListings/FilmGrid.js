import React, { Component } from 'react';
import axios from 'axios';

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
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <p style={{ color: '#fff' }}>{film.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}