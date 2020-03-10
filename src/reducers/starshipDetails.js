import {handleActions} from 'redux-actions';

import {getDetailStarship, getDetailStarshipSuccess} from '../actions/actions';

const initialState = {
  loading: true
};

export default {
  starshipDetails: handleActions({
    [getDetailStarship]: (state) => ({
      ...state,
      loading: true
    }),
    [getDetailStarshipSuccess]: (state, {payload}) => {
      const {starshipId, starshipDetails} = payload;
      return {
        ...state,
        loading: false,
        [starshipId]: starshipDetails
      }
    }
  }, initialState)
};