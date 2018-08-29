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

export function* createPost(action) {
  const options = {
    body: JSON.stringify(action.post),
    headers: settings.headers,
    method: 'POST',
  };

  try {
    const createdPost = yield call(request, `${settings.url}${settings.endpoints.posts}`, options);
    yield put(actionCreators.createPostSuccess(createdPost));
  } catch (error) {
    yield put(actionCreators.createPostFailure(error));
  }
}

export function* deletePost(action) {
  const options = {
    headers: settings.headers,
    method: 'DELETE',
  };

  try {
    yield call(request, `${settings.url}${settings.endpoints.posts}/${action.id}`, options);
    yield put(actionCreators.deletePostSuccess(action.id));
  } catch (error) {
    yield put(actionCreators.deletePostFailure(error));
  }
}

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
      fork(takeLatest, actionTypes.CREATE_POST_REQUEST, createPost),
      fork(takeLatest, actionTypes.DELETE_POST_REQUEST, deletePost),
      fork(takeLatest, actionTypes.FETCH_POSTS_REQUEST, fetchPosts),
    ],
  );
}
