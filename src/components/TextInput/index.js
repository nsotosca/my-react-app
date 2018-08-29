import PropTypes from 'prop-types';
import React from 'react';

export default function TextInput({
  id,
  isFormSubmitted,
  label,
  onChange,
  value,
}) {
  return (
    <div className="form-group row">
      <label htmlFor={id} className="col-sm-2 col-form-label">{label}</label>
      <div className="col-sm-10">
        <input
          className={`form-control ${isFormSubmitted && !value ? 'is-invalid' : ''}`}
          id={id}
          name={id}
          onChange={onChange}
          type="text"
          value={value}
        />
      </div>
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  isFormSubmitted: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
