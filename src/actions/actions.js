import {createAction} from 'redux-actions';

import {ActionTypes} from './constants';

export const getStarships = createAction(ActionTypes.STARSHIPS_GET, (search) => ({
  payload: {search}
}));
export const getStarshipsSuccess = createAction(ActionTypes.STARSHIPS_GET_SUCCESS, (payload) => payload);
export const getStarshipsFailure = createAction(ActionTypes.STARSHIPS_GET_FAILURE, (payload) => payload);

export const changePage = createAction(ActionTypes.CHANGE_PAGE, (payload) => payload);
export const changePageFailure = createAction(ActionTypes.CHANGE_PAGE_FAILURE, (payload) => payload);

export const getDetailStarship = createAction(ActionTypes.STARSHIP_GET_DETAIL, (payload) => payload);
export const getDetailStarshipSuccess = createAction(ActionTypes.STARSHIP_GET_DETAIL_SUCCESS, (payload) => payload);
export const getDetailStarshipFailure = createAction(ActionTypes.STARSHIP_GET_DETAIL_FAILURE, (payload) => payload);
