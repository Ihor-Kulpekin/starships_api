import {handleAction} from 'redux-actions';

import {getStarshipsSuccess} from '../actions/actions';

const initialState = {};

const changePage = handleAction(getStarshipsSuccess, (state, {payload}) => {
  return {
    ...state,
    payload
  }
}, initialState);

export default changePage;