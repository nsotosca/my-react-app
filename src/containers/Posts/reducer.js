import { fromJS } from 'immutable';

import actionTypes from './actionTypes';

const initialState = fromJS({
  posts: [],
});

export default function posts(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return state
        .set('posts', action.posts);
    default:
      return state;
  }
}
