import { call, put, takeLatest } from 'redux-saga/effects';
import {
  MOVIES_LIST_REQUEST,
  movieListFailre,
  movieListSuccess,
  MovieListType,
} from './action';
import { GET_MOVIES_LIST } from '../../services/api_service';

function* saga(action: MovieListType): Generator<any, void, any> {
  try {
    const res = yield call(GET_MOVIES_LIST, action.payload);
    if (res?.results) {
      yield put(movieListSuccess(res));
    } else {
      yield put(movieListSuccess({}));
    }
  } catch (error: any) {
    yield put(movieListFailre(error.message || 'Unknown error'));
  }
}

export function* watchMovieList() {
  yield takeLatest(MOVIES_LIST_REQUEST, saga);
}
