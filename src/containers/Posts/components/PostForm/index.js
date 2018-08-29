import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import actionCreators from '../../actionCreators';
import { TextInput } from '../../../../components';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    // Initialise state
    this.state = {
      isFormSubmitted: false,
      post: {
        author: '',
        title: '',
      },
    };
    // Handlers
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // Enable validations
    this.setState({ isFormSubmitted: true });
    const { post } = this.state;
    // Show error messages
    if (!post.author || !post.title) {
      return;
    }

    const { createPost } = this.props;
    createPost(post);
  }

  handleTextChange(e) {
    const { post } = this.state;

    this.setState({
      post: {
        ...post,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    const { isFormSubmitted, post } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Create Post</legend>
          <TextInput
            id="author"
            isFormSubmitted={isFormSubmitted}
            label="Author"
            onChange={this.handleTextChange}
            value={post.author}
          />
          <TextInput
            id="title"
            isFormSubmitted={isFormSubmitted}
            label="Title"
            onChange={this.handleTextChange}
            value={post.title}
          />
          <button className="btn btn-primary" type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(actionCreators.createPostRequest(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};
