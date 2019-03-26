import { GET_LATEST_FILMS, SEARCH_FILMS } from '../actions/types';

const initalState = {
  results: []
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
    default:
      return state;
  }
}
