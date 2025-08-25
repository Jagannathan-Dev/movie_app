import { call, put, takeLatest } from "redux-saga/effects";
import { GET_COUNTRY, GET_EMP_SORTER_LOG } from "../../services/api_service";
import {
  COUNTRY_REQUEST,
  countryFailre,
  countrySuccess,
  CountryType,
} from "./action";

function* saga(action: CountryType): Generator<any, void, any> {
  try {
    const res = yield call(GET_COUNTRY);
    if (res?.status === 200) {
      yield put(countrySuccess(res?.data));
    } else {
      yield put(countrySuccess([]));
    }
  } catch (error: any) {
    yield put(countryFailre(error.message || "Unknown error"));
  }
}

export function* watchCountry() {
  yield takeLatest(COUNTRY_REQUEST, saga);
}
