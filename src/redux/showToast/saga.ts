import { call, put, takeLatest } from "redux-saga/effects";
import {
  SHOW_TOAST_REQUEST,
  showToastFailre,
  showToastSuccess,
  ShowToastType,
} from "./action";

function* saga(a: ShowToastType): Generator<any, void, any> {
  try {
    yield put(showToastSuccess(a.payload));
  } catch (e) {
    yield put(showToastFailre(e));
  }
}

export function* watchShowToast() {
  yield takeLatest(SHOW_TOAST_REQUEST, saga);
}
