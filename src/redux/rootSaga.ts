import { all } from 'redux-saga/effects';

import { watchShowToast } from './showToast/saga';
import { watchCountry } from './country/saga';
import { watchPopularMovie } from './popular_movies/saga';
import { watchNowPlaying } from './now_playing/saga';

export default function* rootSaga() {
  yield all([watchShowToast(), watchPopularMovie(), watchNowPlaying()]);
}
