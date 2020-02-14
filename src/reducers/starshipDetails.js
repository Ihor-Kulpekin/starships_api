import {ActionTypes} from '../actions/constants';

const initialState = {};

export default function starshipDetails(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.STARSHIP_GET_DETAIL_SUCCESS: {
      const {starshipId, starshipDetails} = action.payload;
      return {...state, [starshipId]: starshipDetails}
    }
    default: {
      return state;
    }
  }
}