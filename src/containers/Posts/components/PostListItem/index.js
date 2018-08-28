import PropTypes from 'prop-types';
import React from 'react';

export default function PostListItem({ author, id, title }) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{author}</td>
      <td />
    </tr>
  );
}

PostListItem.propTypes = {
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
