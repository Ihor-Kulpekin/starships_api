import {ActionTypes} from '../actions/constants';

const initialState = {};

export default function starships(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.STARSHIPS_GET_SUCCESS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}