import { fromJS } from 'immutable';

import actionTypes from './actionTypes';

const initialState = fromJS({
  posts: [],
});

export default function posts(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_POST_SUCCESS:
      return state
        .set('posts', state.get('posts').concat(action.post));
    case actionTypes.DELETE_POST_SUCCESS:
      return state
        .set('posts', state.get('posts').filter(post => post.id !== action.id));
    case actionTypes.FETCH_POSTS_SUCCESS:
      return state
        .set('posts', action.posts);
    default:
      return state;
  }
}
