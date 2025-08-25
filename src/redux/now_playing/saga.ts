import { call, put, takeLatest } from 'redux-saga/effects';
import {
  NOW_PLAYING_REQUEST,
  nowPlayingFailre,
  nowPlayingSuccess,
  NowPlayingType,
} from './action';
import { GET_TRENDING_MOVIES } from '../../services/api_service';

function* saga(action: NowPlayingType): Generator<any, void, any> {
  try {
    const res = yield call(GET_TRENDING_MOVIES);
    if (res?.results) {
      yield put(nowPlayingSuccess(res));
    } else {
      yield put(nowPlayingSuccess({}));
    }
  } catch (error: any) {
    yield put(nowPlayingFailre(error.message || 'Unknown error'));
  }
}

export function* watchNowPlaying() {
  yield takeLatest(NOW_PLAYING_REQUEST, saga);
}
