import { all } from 'redux-saga/effects';

import AppSaga from './app';

export function* mainSaga() {
  yield all([
    AppSaga,
  ]);
}
