import PropTypes from 'prop-types';
import React from 'react';

export default function H1({ text }) {
  return (
    <h1 style={{ paddingTop: '10px' }}>{text}</h1>
  );
}

H1.propTypes = {
  text: PropTypes.string.isRequired,
};
