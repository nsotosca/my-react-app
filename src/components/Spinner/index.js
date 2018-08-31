import PropTypes from 'prop-types';
import React from 'react';

import './Spinner.css';
import spinner from '../../assets/images/spinner.svg';

export default function Spinner({ loading }) {
  return (
    loading && (
      <section className="spinner">
        <div className="row">
          <div className="col-md-2 offset-md-5">
            <div className="text-center">
              <img src={spinner} alt="spinner" />
            </div>
          </div>
        </div>
      </section>
    )
  );
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};
