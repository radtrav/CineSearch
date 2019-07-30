import { FETCH_MOVIE_INFO_SUCCESS } from "../actions/movie.actions";

const initState = {
  movie: {},
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_INFO_SUCCESS: {
      return { ...state, movie: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
