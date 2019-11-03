import {
  all, takeLatest, put,
} from 'redux-saga/effects';
// import axios from 'axios';

import * as actions from '../constants/app';

// function getPosts() {
//   return axios('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@elinahovakimyan');
// }

function* handleSignIn() {
  try {
    // const data = yield call(getPosts);
    const data = { status: 200 };

    if (data.status === 200) {
      yield put({
        type: actions.APP_SIGN_IN_SUCCESS,
        accessToken: 'token',
      });
    } else {
      yield put({
        type: actions.APP_SIGN_IN_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    yield put({
      type: actions.APP_SIGN_IN_ERROR,
      error: 'Something went wrong.',
    });
  }
}

export default all([
  takeLatest(actions.APP_SIGN_IN_REQUEST, handleSignIn),
]);
