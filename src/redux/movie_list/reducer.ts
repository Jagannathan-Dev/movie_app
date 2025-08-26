import {
  MOVIES_LIST_FAILURE,
  MOVIES_LIST_REQUEST,
  MOVIES_LIST_SUCCESS,
  MovieListType,
} from './action';

interface props {
  movieListLoad: boolean;
  movieList: any;
  movieListErr: any;
}

const initialState: props = {
  movieListLoad: false,
  movieList: {},
  movieListErr: null,
};

const movieListReducer = (state = initialState, action: MovieListType) => {
  switch (action.type) {
    case MOVIES_LIST_REQUEST:
      return { ...state, movieListLoad: true };
    case MOVIES_LIST_SUCCESS:
      return { ...state, movieListLoad: false, movieList: action.payload };
    case MOVIES_LIST_FAILURE:
      return { ...state, movieListLoad: false, movieListErr: action.payload };
    default:
      return state;
  }
};

export default movieListReducer;
