import { combineReducers } from 'redux';
import showToastReducer from './showToast/reducer';
import countryReducer from './country/reducer';
import popularMovieReducer from './popular_movies/reducer';
import nowPlayingReducer from './now_playing/reducer';

const rootReducer = combineReducers({
  showToast: showToastReducer,
  country: countryReducer,
  popular: popularMovieReducer,
  nowplaying: nowPlayingReducer,
});

export default rootReducer;
