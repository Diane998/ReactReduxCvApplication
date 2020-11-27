import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';

import DateField from '../Fields/DateField';
import InputField from '../Fields/InputField';

class EducationForm extends Component {
  onChangeCapitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  renderInputText({ input, label, meta }) {
    return <InputField input={input} label={label} meta={meta} />;
  }

  renderInputDate({ input, label, meta }) {
    return <DateField input={input} label={label} meta={meta} />;
  }

  // onSubmit(formValues) {
  //   console.log(formValues);
  // }

  renderEducation = ({ fields, meta: { error, submitFailed } }) => {
    return (
      <div className="ui list">
        <div className="item">
          <button
            type="button"
            onClick={() => fields.push({})}
            className="ui right floated green button"
          >
            Add Education
          </button>
        </div>

        {fields.map((field, i) => (
          <div key={i} className="item">
            <div style={{ paddingBottom: '50px' }} className="ui segment">
              <div className="two fields">
                <Field
                  name={`${field}.college`}
                  type="text"
                  label="College or School Name"
                  normalize={value => this.onChangeCapitalize(value)}
                  component={this.renderInputText}
                />
                <Field
                  name={`${field}.course`}
                  type="text"
                  label="Course"
                  normalize={value => this.onChangeCapitalize(value)}
                  component={this.renderInputText}
                />
              </div>
              <div className="two fields">
                <Field
                  name={`${field}.eduStartDate`}
                  type="date"
                  label="Start Date"
                  component={this.renderInputDate}
                />
                <Field
                  name={`${field}.eduEndDate`}
                  type="date"
                  label="End Date"
                  component={this.renderInputDate}
                />
              </div>
              <button
                className="ui right floated red button"
                type="button"
                title="Remove Member"
                onClick={() => fields.remove(i)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit} className="ui error form">
          <button
            type="submit"
            style={{ marginBottom: '20px' }}
            className="button ui right floated"
          >
            Next Page
          </button>
          <button
            onClick={this.props.previousPage}
            type="button"
            style={{ marginBottom: '20px' }}
            className="button ui right floated"
          >
            Previous
          </button>
          <h1>Educational Experiences</h1>
          <div className="ui clearing divider"></div>
          <FieldArray name="education" component={this.renderEducation} />
        </form>
      </>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.school) errors.school = 'Enter a College';
  if (!formValues.course) errors.course = 'Enter a Course';
  if (!formValues.eduStartDate)
    errors.eduStartDate = 'Enter the date you started your course';
  if (!formValues.eduEndDate)
    errors.eduEndDate = 'Enter the date you finished your course';

  return errors;
};

export default reduxForm({
  form: 'cv-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(EducationForm);

// const formWrapped = reduxForm({
//   form: 'cv-form',
//   destroyOnUnmount: false,
//   forceUnregisterOnUnmount: true,
//   validate
// })(GeneralInfoForm);

// export default connect(null, { createCvApplication })(formWrapped);
