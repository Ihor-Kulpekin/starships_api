import {handleActions} from 'redux-actions';

import {getStarships, getStarshipsSuccess} from '../actions/actions';

const initialState = {
  loading: true
};

export default {
  starships: handleActions({
    [getStarships]: (state) => {
      return {
        ...state,
        loading: true
      }
    },
    [getStarshipsSuccess]: (state, {payload}) => {
      return {
        ...state,
        loading: false,
        payload
      }
    }
  }, initialState)
};