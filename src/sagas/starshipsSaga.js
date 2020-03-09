import {call, put} from 'redux-saga/effects'

import {getStarships as apiGetStarships} from '../api/api';
import {getStarshipsFailure, getStarshipsSuccess} from '../actions/actions';

export function* getStarshipsSaga({payload}) {
  try {
    const result = yield call(apiGetStarships, payload.payload.search);
    yield put(getStarshipsSuccess(result));
  } catch (error) {
    yield put(getStarshipsFailure(error));
  }
}