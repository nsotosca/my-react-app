import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import React from 'react';

import actionCreators from '../../actionCreators';
import { H1 } from '../../../../components';
import PostListItem from '../PostListItem';
import postsSelectors from '../../selectors';

class PostList extends React.Component {
  componentDidMount() {
    const { fetchPosts, posts } = this.props;
    // Check if posts are not cached
    if (!posts.length) {
      fetchPosts();
    }
  }

  render() {
    const { deletePost, posts } = this.props;

    return (
      <section>
        <H1 text="Posts" />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {
              posts.map(post => (
                <PostListItem
                  key={post.id}
                  deletePost={deletePost}
                  {...post}
                />
              ))
            }
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: postsSelectors.makeSelectPosts,
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(actionCreators.deletePostRequest(id)),
  fetchPosts: () => dispatch(actionCreators.fetchPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

PostList.propTypes = {
  deletePost: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
