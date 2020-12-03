import React from 'react';

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const InputField = ({ input, label, meta, type }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} type={type} autoComplete="off" />
      {meta ? renderError(meta) : null}
    </div>
  );
};

export default InputField;
