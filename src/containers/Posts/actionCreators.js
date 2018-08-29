import actionTypes from './actionTypes';

const actionCreators = {
  createPostFailure: error => ({ type: actionTypes.CREATE_POST_FAILURE, error }),
  createPostRequest: post => ({ type: actionTypes.CREATE_POST_REQUEST, post }),
  createPostSuccess: post => ({ type: actionTypes.CREATE_POST_SUCCESS, post }),
  deletePostFailure: error => ({ type: actionTypes.DELETE_POST_FAILURE, error }),
  deletePostRequest: id => ({ type: actionTypes.DELETE_POST_REQUEST, id }),
  deletePostSuccess: id => ({ type: actionTypes.DELETE_POST_SUCCESS, id }),
  fetchPostsFailure: error => ({ type: actionTypes.FETCH_POSTS_FAILURE, error }),
  fetchPostsRequest: () => ({ type: actionTypes.FETCH_POSTS_REQUEST }),
  fetchPostsSuccess: posts => ({ type: actionTypes.FETCH_POSTS_SUCCESS, posts }),
};

export default actionCreators;
