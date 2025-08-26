import { combineReducers } from 'redux';
import showToastReducer from './showToast/reducer';
import popularMovieReducer from './popular_movies/reducer';
import nowPlayingReducer from './now_playing/reducer';
import movieListReducer from './movie_list/reducer';

const rootReducer = combineReducers({
  showToast: showToastReducer,
  popular: popularMovieReducer,
  nowplaying: nowPlayingReducer,
  movielist: movieListReducer,
});

export default rootReducer;
