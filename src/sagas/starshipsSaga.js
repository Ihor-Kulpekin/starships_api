import {call, put} from 'redux-saga/effects'

import {getStarships as apiGetStarships} from '../api/api';
import {getStarships} from '../actions/actions';

export function* getStarshipsSaga({payload}) {
  try {
    const result = yield call(apiGetStarships, payload.search);
    yield put(getStarships.success(result));
  } catch (error) {
    yield put(getStarships.failure(error));
  }
}