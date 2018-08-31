import actionTypes from './actionTypes';

const actionCreators = {
  createPostFailure: error => ({ type: actionTypes.CREATE_POST_FAILURE, error }),
  createPostRequest: post => ({ type: actionTypes.CREATE_POST_REQUEST, post }),
  createPostSuccess: post => ({ type: actionTypes.CREATE_POST_SUCCESS, post }),
  deletePostFailure: error => ({ type: actionTypes.DELETE_POST_FAILURE, error }),
  deletePostRequest: id => ({ type: actionTypes.DELETE_POST_REQUEST, id }),
  deletePostSuccess: id => ({ type: actionTypes.DELETE_POST_SUCCESS, id }),
  fetchPostFailure: error => ({ type: actionTypes.FETCH_POST_FAILURE, error }),
  fetchPostRequest: id => ({ type: actionTypes.FETCH_POST_REQUEST, id }),
  fetchPostSuccess: post => ({ type: actionTypes.FETCH_POST_SUCCESS, post }),
  fetchPostsFailure: error => ({ type: actionTypes.FETCH_POSTS_FAILURE, error }),
  fetchPostsRequest: () => ({ type: actionTypes.FETCH_POSTS_REQUEST }),
  fetchPostsSuccess: posts => ({ type: actionTypes.FETCH_POSTS_SUCCESS, posts }),
  resetPost: () => ({ type: actionTypes.RESET_POST }),
  setPost: post => ({ type: actionTypes.SET_POST, post }),
  updatePostFailure: error => ({ type: actionTypes.UPDATE_POST_FAILURE, error }),
  updatePostRequest: () => ({ type: actionTypes.UPDATE_POST_REQUEST }),
  updatePostSuccess: post => ({ type: actionTypes.UPDATE_POST_SUCCESS, post }),
};

export default actionCreators;
