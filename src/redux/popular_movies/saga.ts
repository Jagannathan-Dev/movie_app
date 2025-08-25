import { call, put, takeLatest } from 'redux-saga/effects';
import {
  POPULAR_MOVIES_REQUEST,
  popularMovieFailre,
  popularMovieSuccess,
  PopularType,
} from './action';
import { GET_POPULAR_MOVIES } from '../../services/api_service';

function* saga(action: PopularType): Generator<any, void, any> {
  try {
    const res = yield call(GET_POPULAR_MOVIES);
    if (res?.results) {
      yield put(popularMovieSuccess(res));
    } else {
      yield put(popularMovieSuccess({}));
    }
  } catch (error: any) {
    yield put(popularMovieFailre(error.message || 'Unknown error'));
  }
}

export function* watchPopularMovie() {
  yield takeLatest(POPULAR_MOVIES_REQUEST, saga);
}
