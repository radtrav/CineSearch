import { put, takeEvery, all, call } from "redux-saga/effects";
import { SET_MOVIE } from "../actions/movie.actions";
import { fetchMovieById } from "../api";
import { fetchMovieInfo, fetchMovieInfoSuccess, fetchMovieInfoFailure } from '../actions/movie.actions';

export function* fetchMovieInfoSaga({ payload: { imdbID } }) {
  try{
    yield put(fetchMovieInfo(imdbID));
    const movie = yield call(fetchMovieById, imdbID);
    yield put (fetchMovieInfoSuccess(movie));
  } catch (e){
    console.log(e);
    fetchMovieInfoFailure(e);
  }
}

export function* moviaSagaWatcher() {
  yield takeEvery(SET_MOVIE, fetchMovieInfoSaga);
}

export default function* rootSaga() {
  yield all([moviaSagaWatcher()]);
}
