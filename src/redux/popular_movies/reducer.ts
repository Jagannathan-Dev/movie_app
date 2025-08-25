import {
  POPULAR_MOVIES_FAILURE,
  POPULAR_MOVIES_REQUEST,
  POPULAR_MOVIES_SUCCESS,
  PopularType,
} from './action';

interface props {
  popularLoad: boolean;
  popularMovie: any;
  popularErr: any;
}

const initialState: props = {
  popularLoad: false,
  popularMovie: {},
  popularErr: null,
};

const popularMovieReducer = (state = initialState, action: PopularType) => {
  switch (action.type) {
    case POPULAR_MOVIES_REQUEST:
      return { ...state, popularLoad: true };
    case POPULAR_MOVIES_SUCCESS:
      return { ...state, popularLoad: false, popularMovie: action.payload };
    case POPULAR_MOVIES_FAILURE:
      return { ...state, popularLoad: false, popularErr: action.payload };
    default:
      return state;
  }
};

export default popularMovieReducer;
