import { put, takeEvery, all } from 'redux-saga/effects'
import { SET_MOVIE } from '../actions';

// Our worker Saga: will perform the async increment task
export function* fetchMovieInfo() {
  yield put({ type: 'FETCH_MOVIE_INFO' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* moviaSagaWatcher() {
  yield takeEvery(SET_MOVIE, fetchMovieInfo)
}

export default function* rootSaga() {
    yield all([
      moviaSagaWatcher()
    ])
  }