import { SET_MOVIE } from "../actions/movie.actions";
import { CHANGE_VIEW } from "../actions/view.actions";

const initState = {
  movie: null,
  view: "d"
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_VIEW: {
      return { ...state, view: action.payload };
    }
    case SET_MOVIE: {
      return { ...state, movie: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
