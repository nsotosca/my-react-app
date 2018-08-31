import { fromJS } from 'immutable';

import actionTypes from './actionTypes';

const initialState = fromJS({
  post: {
    author: '',
    id: null,
    title: '',
  },
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
    case actionTypes.FETCH_POST_SUCCESS:
    case actionTypes.SET_POST:
      return state
        .set('post', action.post);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return state
        .set('posts', action.posts);
    case actionTypes.RESET_POST:
      return state
        .set('post', initialState.get('post'));
    case actionTypes.UPDATE_POST_SUCCESS:
      return state
        .set('posts', state.get('posts').map((post) => {
          if (post.id === action.post.id) {
            return action.post;
          }

          return post;
        }));
    default:
      return state;
  }
}
