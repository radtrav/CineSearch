import { put, takeEvery, all, call } from "redux-saga/effects";
import { SET_MOVIE } from "../actions/movie.actions";
import { fetchMovieById } from "../api";

export function* fetchMovieInfo({ payload: { imdbID } }) {
  yield put({ type: "FETCH_MOVIE_INFO" });
  const movie = yield call(fetchMovieById, imdbID);


  console.log(JSON.stringify(movie));
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* moviaSagaWatcher() {
  yield takeEvery(SET_MOVIE, fetchMovieInfo);
}

export default function* rootSaga() {
  yield all([moviaSagaWatcher()]);
}
