export const SET_MOVIE = "SET_MOVIE";
export const FETCH_MOVIE_INFO = "FETCH_MOVIE_INFO";
export const FETCH_MOVIE_INFO_SUCCESS = "FETCH_MOVIE_INFO_SUCCESS";
export const FETCH_MOVIE_INFO_FAILURE = "FETCH_MOVIE_INFO_FAILURE";

export const setMovie = movie => ({
  type: SET_MOVIE,
  payload: movie
});

export const fetchMovieInfo = id => ({
  type: FETCH_MOVIE_INFO,
  payload: id
});

export const fetchMovieInfoSuccess = movie => ({
  type: FETCH_MOVIE_INFO_SUCCESS,
  payload: movie
});

export const fetchMovieInfoFailure = () => ({
  type: FETCH_MOVIE_INFO_FAILURE
});
