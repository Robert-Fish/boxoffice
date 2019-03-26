import axios from 'axios';
import { GET_LATEST_FILMS } from './types';

export const getLatestFilms = () => dispatch => {
  axios
    .get(
      'https://api.themoviedb.org/3/discover/movie?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    )
    .then(res =>
      dispatch({
        type: GET_LATEST_FILMS,
        payload: res.data.results
      })
    );
};
