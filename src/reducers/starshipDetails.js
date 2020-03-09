import {handleAction} from 'redux-actions';

import {getDetailStarshipSuccess} from '../actions/actions';

const initialState = {};

const starshipDetails = handleAction(getDetailStarshipSuccess, (state, {payload}) => {
  const {starshipId, starshipDetails} = payload;
  return {
    ...state,
    [starshipId]: starshipDetails
  }
}, initialState);

export default starshipDetails;