import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';

import DateField from '../Fields/DateField';
import InputField from '../Fields/InputField';

class WorkForm extends Component {
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

  renderTasks = ({ fields }) => {
    return (
      <div className="ui list">
        <div className="item">
          <button
            type="button"
            onClick={() => fields.push({})}
            className="ui right floated green button"
          >
            Add Tasks
          </button>
        </div>

        {fields.map((field, i) => (
          <div className="item">
            <div className="ui list">
              <div className="item">
                <Field
                  name={`${field}.college`}
                  type="text"
                  label={`Task #${i + 1}`}
                  component={this.renderInputText}
                />
                <button
                  className="ui right floated red button"
                  type="button"
                  title="Remove Member"
                  onClick={() => fields.remove(i)}
                >
                  Remove Task
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  renderWork = ({ fields }) => {
    return (
      <div className="ui list">
        <div className="item">
          <button
            type="button"
            onClick={() => fields.push({})}
            className="ui right floated green button"
          >
            Add Work Experience
          </button>
        </div>

        {fields.map((field, i) => (
          <div key={i} className="item">
            <div style={{ paddingBottom: '60px' }} className="ui segment">
              <div className="two fields">
                <Field
                  name={`${field}.college`}
                  type="text"
                  label="Company"
                  normalize={value => this.onChangeCapitalize(value)}
                  component={this.renderInputText}
                />
                <Field
                  name={`${field}.course`}
                  type="text"
                  label="Role"
                  normalize={value => this.onChangeCapitalize(value)}
                  component={this.renderInputText}
                />
              </div>
              <div className="two fields">
                <Field
                  name={`${field}.workStartDate`}
                  type="date"
                  label="Start Date"
                  component={this.renderInputDate}
                />
                <Field
                  name={`${field}.workEndDate`}
                  type="date"
                  label="End Date"
                  component={this.renderInputDate}
                />
              </div>
              <FieldArray
                name={`${field}.tasks`}
                normalize={value => this.onChangeCapitalize(value)}
                component={this.renderTasks}
              />
              <button
                className="ui right floated red button"
                type="button"
                title="Remove Member"
                onClick={() => fields.remove(i)}
              >
                Remove Work Experience
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
          <h1>Work Experiences</h1>
          <div className="ui clearing divider"></div>
          <FieldArray name="work" component={this.renderWork} />
        </form>
      </>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.company) errors.company = 'Enter a Company';
  if (!formValues.role) errors.role = 'Enter your role in the comapny';
  if (!formValues.workStartDate)
    errors.workStartDate =
      'Enter the date where you started working for the this company';
  if (!formValues.workEndDate)
    errors.workEndDate =
      'Enter the date where you finished working for this company';

  return errors;
};

export default reduxForm({
  form: 'cv-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WorkForm);

// export default reduxForm({ form: 'workForm', validate })(WorkForm);
