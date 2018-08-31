import {
  all,
  call,
  fork,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';

import actionCreators from './actionCreators';
import actionTypes from './actionTypes';
import postsSelectors from './selectors';
import request from '../../utils/request';
import settings from '../../utils/settings';

export function* createPost() {
  const post = yield select(postsSelectors.makeSelectPost);

  const options = {
    body: JSON.stringify(post),
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

export function* fetchPost(action) {
  const options = {
    headers: settings.headers,
    method: 'GET',
  };

  try {
    const post = yield call(request, `${settings.url}${settings.endpoints.posts}/${action.id}`, options);
    yield put(actionCreators.fetchPostSuccess(post));
  } catch (error) {
    yield put(actionCreators.fetchPostFailure(error));
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

export function* updatePost() {
  const post = yield select(postsSelectors.makeSelectPost);

  const options = {
    body: JSON.stringify(post),
    headers: settings.headers,
    method: 'PUT',
  };

  try {
    const updatedPost = yield call(request, `${settings.url}${settings.endpoints.posts}/${post.id}`, options);
    yield put(actionCreators.updatePostSuccess(updatedPost));
  } catch (error) {
    yield put(actionCreators.updatePostFailure(error));
  }
}

export default function* postsSaga() {
  yield all(
    [
      fork(takeLatest, actionTypes.CREATE_POST_REQUEST, createPost),
      fork(takeLatest, actionTypes.DELETE_POST_REQUEST, deletePost),
      fork(takeLatest, actionTypes.FETCH_POST_REQUEST, fetchPost),
      fork(takeLatest, actionTypes.FETCH_POSTS_REQUEST, fetchPosts),
      fork(takeLatest, actionTypes.UPDATE_POST_REQUEST, updatePost),
    ],
  );
}
