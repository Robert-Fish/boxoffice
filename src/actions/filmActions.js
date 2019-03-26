import axios from 'axios';
import { GET_LATEST_FILMS, SEARCH_FILMS } from './types';
import { apiKey } from '../keys';

export const getLatestFilms = () => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
    .then(res =>
      dispatch({
        type: GET_LATEST_FILMS,
        payload: res.data.results
      })
    );
};

export const searchFilms = queryText => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${queryText}&page=1&include_adult=false`
    )
    .then(res =>
      dispatch({
        type: SEARCH_FILMS,
        payload: res.data.results
      })
    );
};
