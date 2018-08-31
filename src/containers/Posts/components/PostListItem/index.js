import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

export default function PostListItem({
  author,
  deletePost,
  id,
  title,
}) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{author}</td>
      <td>
        <Link className="btn btn-info" to={`/posts/${id}/edit`}>Edit</Link>
        &nbsp;
        <button className="btn btn-danger" onClick={() => deletePost(id)} type="button">Delete</button>
      </td>
    </tr>
  );
}

PostListItem.propTypes = {
  author: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
