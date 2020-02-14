import {ActionTypes} from './constants';

export const getStarships = (search) => ({
  type: ActionTypes.STARSHIPS_GET,
  payload: {search}
});

export const changePage = (value) => ({
  type: ActionTypes.CHANGE_PAGE,
  payload: {value}
});

export const getDetailStarship = (starshipId) => ({
  type: ActionTypes.STARSHIP_GET_DETAIL,
  payload: starshipId
});

const addActions = (action, what) => {
  Object.keys(what).forEach((name) => {
    action[name] = payload => ({
      type: what[name], payload
    })
  })
};

addActions(getStarships, {
  success: ActionTypes.STARSHIPS_GET_SUCCESS,
  failure: ActionTypes.STARSHIPS_GET_FAILURE
});

addActions(changePage, {
  success: ActionTypes.CHANGE_PAGE_SUCCESS,
  failure: ActionTypes.CHANGE_PAGE_FAILURE
});

addActions(getDetailStarship, {
  success: ActionTypes.STARSHIP_GET_DETAIL_SUCCESS,
  failure: ActionTypes.STARSHIP_GET_DETAIL_FAILURE
});