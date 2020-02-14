import {call, put} from 'redux-saga/effects';

import {getDetailsStarship as apiGetDetailsStarship} from '../api/api';
import {getDetailStarship} from '../actions/actions';

export function* getStarshipDetailsSaga({payload}) {
  try {
    const starshipId = payload;
    const result = yield call(apiGetDetailsStarship, starshipId);
    yield put(getDetailStarship.success({
      starshipId,
      starshipDetails: result
    }))
  } catch (error) {
    yield put(getDetailStarship.failure(error))
  }
}