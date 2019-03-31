import axios from 'axios';
import { GET_LATEST_FILMS, SEARCH_FILMS, GET_FILM } from './types';
import { apiKey } from '../config/keys';
import { BASE_API_URL } from '../config/config';

export const getLatestFilms = () => dispatch => {
  return axios
    .get(
      `${BASE_API_URL}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
    .then(res =>
      dispatch({
        type: GET_LATEST_FILMS,
        payload: res.data.results
      })
    );
};

export const searchFilms = queryText => dispatch => {
  return axios
    .get(
      `${BASE_API_URL}/search/multi?api_key=${apiKey}&language=en-US&query=${queryText}&page=1&include_adult=false`
    )
    .then(res =>
      dispatch({
        type: SEARCH_FILMS,
        payload: res.data.results
      })
    );
};

export const getFilmDetails = (filmID, type) => dispatch => {
  if (type === 'movie') {
    return axios
      .get(`${BASE_API_URL}/movie/${filmID}?api_key=${apiKey}`)
      .then(res => {
        dispatch({
          type: GET_FILM,
          payload: res.data
        });
      });
  } else {
    return axios
      .get(`https://api.themoviedb.org/3/tv/${filmID}?api_key=${apiKey}`)
      .then(res => {
        dispatch({
          type: GET_FILM,
          payload: res.data
        });
      });
  }
};
