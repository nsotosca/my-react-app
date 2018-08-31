import PropTypes from 'prop-types';
import React from 'react';

export default function ErrorMessage({ error }) {
  return (
    error && (
      <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{ marginTop: '10px' }}>
        {error.message || 'Oh snap! Something went wrong.'}
        <button type="button" className="close" data-dismiss="alert">
          <span>&times;</span>
        </button>
      </div>
    )
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
};
