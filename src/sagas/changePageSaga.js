import {call, put} from 'redux-saga/effects'

import {changePage as apiChangePage} from '../api/api';
import {getStarships} from '../actions/actions';

export function* changePageSaga({payload}) {
  try {
    const result = yield call(apiChangePage, payload.value);
    yield put(getStarships.success(result));
  } catch (error) {
    yield put(getStarships.failure(error))
  }
}