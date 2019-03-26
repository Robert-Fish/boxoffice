import { GET_LATEST_FILMS } from '../actions/types';

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
    default:
      return state;
  }
}
