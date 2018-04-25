import React from 'react';
import PropTypes from 'prop-types';


const TextInput = ({name, label, onChange, placeholder, value, error, disableBool}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          id={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disableBool}
          aria-describedby={name + 'ErrorMsg'}/>
        {error && <div className="alert alert-danger" id={name+'ErrorMsg'}>{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  disableBool: PropTypes.bool
};

export default TextInput;