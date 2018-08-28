import actionTypes from './actionTypes';

const actionCreators = {
  fetchPostsFailure: error => ({ type: actionTypes.FETCH_POSTS_FAILURE, error }),
  fetchPostsRequest: () => ({ type: actionTypes.FETCH_POSTS_REQUEST }),
  fetchPostsSuccess: posts => ({ type: actionTypes.FETCH_POSTS_SUCCESS, posts }),
};

export default actionCreators;
