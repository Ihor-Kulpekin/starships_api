import {all, debounce, takeLatest} from 'redux-saga/effects';

import {ActionTypes} from '../actions/constants';

import {getStarshipsSaga} from './starshipsSaga';
import {changePageSaga} from './changePageSaga';
import {getStarshipDetailsSaga} from './starshipDetailsSaga';

export function* rootSaga() {
  yield all([
    yield debounce(500, ActionTypes.STARSHIPS_GET, getStarshipsSaga),
    yield debounce(500, ActionTypes.CHANGE_PAGE, changePageSaga),
    yield takeLatest(ActionTypes.STARSHIP_GET_DETAIL, getStarshipDetailsSaga)
  ])
}