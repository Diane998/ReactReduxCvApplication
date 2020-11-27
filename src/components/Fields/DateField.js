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

const DateField = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

  return (
    <div className={className}>
      <label htmlFor="start-date">{label}</label>
      <div className="ui calendar">
        <div className="ui input left calendar icon">
          <i className="calendar icon" />
          <input type="date" {...input} />
        </div>
        {meta ? renderError(meta) : null}
      </div>
    </div>
  );
};

export default DateField;
