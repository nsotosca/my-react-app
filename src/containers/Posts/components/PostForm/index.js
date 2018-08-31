import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import actionCreators from '../../actionCreators';
import postsSelectors from '../../selectors';
import { TextInput } from '../../../../components';

class PostForm extends React.Component {
  componentDidMount() {
    const { fetchPost, match, resetPost } = this.props;
    const id = match.params.postId;

    if (id) {
      fetchPost(id);
    } else {
      resetPost();
    }
  }

  render() {
    const {
      history,
      post,
      savePost,
      setPost,
    } = this.props;

    return (
      <form onSubmit={e => savePost(e, post, history)}>
        <fieldset>
          <legend>
            {post.id ? 'Edit' : 'Create'}
            &nbsp;
            Post
          </legend>
          <TextInput
            id="author"
            isFormSubmitted={false}
            label="Author"
            onChange={e => setPost(e, post)}
            value={post.author}
          />
          <TextInput
            id="title"
            isFormSubmitted={false}
            label="Title"
            onChange={e => setPost(e, post)}
            value={post.title}
          />
          <p className="text-center">
            <Link className="btn btn-secondary" to="/posts">Cancel</Link>
            &nbsp;
            <button className="btn btn-primary" type="submit">Submit</button>
          </p>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  post: postsSelectors.makeSelectPost,
});

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(actionCreators.fetchPostRequest(id)),
  resetPost: () => dispatch(actionCreators.resetPost()),
  savePost: (e, post, history) => {
    e.preventDefault();

    if (post.id) {
      dispatch(actionCreators.updatePostRequest());
    } else {
      dispatch(actionCreators.createPostRequest());
    }

    history.push('/posts');
  },
  setPost: (e, post) => dispatch(actionCreators.setPost({
    ...post,
    [e.target.name]: e.target.value,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

PostForm.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  resetPost: PropTypes.func.isRequired,
  savePost: PropTypes.func.isRequired,
  setPost: PropTypes.func.isRequired,
};
