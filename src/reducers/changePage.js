import {handleActions} from 'redux-actions';

import {changePage, getStarshipsSuccess} from '../actions/actions';

const initialState = {
  loading: true
};

// const changePage = handleAction(getStarshipsSuccess, (state, {payload}) => {
//   return {
//     ...state,
//     payload
//   }
// }, initialState);

export default {
  changePage: handleActions({
    [changePage]: (state) => {
      return {
        ...state,
        loading: true
      }
    },
    [getStarshipsSuccess]:(state,{payload})=>{
      return{
        ...state,
        payload,
        loading: false
      }
    }
  },initialState)
};