import { call, put } from 'redux-saga/effects'
import * as Api from '../middleware/api'
import * as ActionTypes from '../actions'

export function * getAllRocketsSaga () {
  try {
    const result = yield call(Api.getAllRockets)
    yield put({ type: ActionTypes.ALL_ROCKETS_SUCCESS, payload: result })
  } catch (error) {
    yield put({ type: ActionTypes.ALL_ROCKETS_FAILURE })
  }
}

export function * getRocketSaga (payload) {
  try {
    console.log(payload, 'payload saga')
    const result = yield call(Api.getRocket, payload.rocketId)

    yield put({ type: ActionTypes.ROCKET_SUCCESS, payload: result })
  } catch (error) {
    yield put({ type: ActionTypes.ROCKET_FAILURE })
  }
}
