import { takeEvery } from 'redux-saga/effects'

import * as ActionTypes from '../actions'
import * as rocketsSaga from './rockets'

export default function * rootSaga () {
  yield [
    yield takeEvery(ActionTypes.ALL_ROCKETS_REQUEST, rocketsSaga.getAllRocketsSaga),
    yield takeEvery(ActionTypes.ROCKET_REQUEST, rocketsSaga.getRocketSaga)
  ]
}
