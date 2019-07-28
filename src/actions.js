export const CHANGE_VIEW = "CHANGE_VIEW";
export const SET_MOVIE = "SET_MOVIE";

export const changeView = view => ({
  type: CHANGE_VIEW,
  payload: view
});

export const setMovie = movie => ({
  type: SET_MOVIE,
  payload: movie
});
