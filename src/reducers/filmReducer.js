import { GET_LATEST_FILMS, SEARCH_FILMS, GET_FILM } from '../actions/types';

const initalState = {
  results: [],
  selectedFilm: {}
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_LATEST_FILMS:
      return {
        ...state,
        results: action.payload
      };
    case SEARCH_FILMS:
      return {
        ...state,
        results: action.payload
      };

    case GET_FILM:
      return {
        ...state,
        selectedFilm: action.payload
      };
    default:
      return state;
  }
}
