import { createSelector } from 'reselect';

const selectPosts = state => state.posts;

const postsSelectors = {
  makeSelectPost: createSelector(selectPosts, postsState => (
    postsState.get('post').size
      ? postsState.get('post').toJS()
      : postsState.get('post')
  )),
  makeSelectPosts: createSelector(selectPosts, postsState => [...postsState.get('posts')]),
};

export default postsSelectors;
