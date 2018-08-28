import { createSelector } from 'reselect';

const selectPosts = state => state.posts;

const postsSelectors = {
  makeSelectPosts: createSelector(selectPosts, postsState => [...postsState.get('posts')]),
};

export default postsSelectors;
