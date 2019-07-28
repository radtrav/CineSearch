import { CHANGE_VIEW, SET_MOVIE } from "../actions";

const initState = {
  movie: null,
  view: "search"
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
