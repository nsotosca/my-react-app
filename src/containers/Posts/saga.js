import {
  all,
  call,
  fork,
  put,
  takeLatest,
} from 'redux-saga/effects';

import actionCreators from './actionCreators';
import actionTypes from './actionTypes';
import request from '../../utils/request';
import settings from '../../utils/settings';

export function* fetchPosts() {
  const options = {
    headers: settings.headers,
    method: 'GET',
  };

  try {
    const posts = yield call(request, `${settings.url}${settings.endpoints.posts}`, options);
    yield put(actionCreators.fetchPostsSuccess(posts));
  } catch (error) {
    yield put(actionCreators.fetchPostsFailure(error));
  }
}

export default function* postsSaga() {
  yield all(
    [
      fork(takeLatest, actionTypes.FETCH_POSTS_REQUEST, fetchPosts),
    ],
  );
}
