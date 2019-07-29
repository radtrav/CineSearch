import { FETCH_MOVIE_INFO_SUCCESS } from "../actions/movie.actions";
import { CHANGE_VIEW } from "../actions/view.actions";

const initState = {
  movie: {},
  view: "d"
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_VIEW: {
      return { ...state, view: action.payload };
    }
    case FETCH_MOVIE_INFO_SUCCESS: {
      return { ...state, movie: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
