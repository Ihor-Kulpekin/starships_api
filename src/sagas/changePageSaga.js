import {call, put} from 'redux-saga/effects'

import {changePage as apiChangePage} from '../api/api';
import {changePageFailure, getStarshipsSuccess} from '../actions/actions';

export function* changePageSaga({payload}) {
  try {
    const result = yield call(apiChangePage, payload);
    yield put(getStarshipsSuccess(result));
  } catch (error) {
    yield put(changePageFailure(error))
  }
}