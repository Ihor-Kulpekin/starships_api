import {handleAction} from 'redux-actions';

import {getStarshipsSuccess} from '../actions/actions';

const initialState = {};

const starships=handleAction(getStarshipsSuccess,(state,{payload})=>{
  return{
    ...state,
    payload
  }
},initialState);

export default starships;