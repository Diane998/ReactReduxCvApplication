import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../Fields/InputField';

class GeneralInfoForm extends Component {
  renderInput({ input, label, meta }) {
    return <InputField input={input} label={label} meta={meta} />;
  }

  onChangeCapitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="ui error form">
        <button
          style={{ marginBottom: '20px' }}
          className="button ui right floated"
        >
          Next Page
        </button>
        <h1>General Information</h1>
        <div className="ui clearing divider"></div>
        <div className="ui segment">
          <div className="two fields">
            <Field
              name="firstName"
              type="text"
              label="First Name"
              normalize={value => this.onChangeCapitalize(value)}
              component={this.renderInput}
            />
            <Field
              name="lastName"
              type="text"
              label="Last Name"
              normalize={value => this.onChangeCapitalize(value)}
              component={this.renderInput}
            />
          </div>
          <Field
            name="profession"
            type="text"
            label="Profession"
            normalize={value => this.onChangeCapitalize(value)}
            component={this.renderInput}
          />
          <Field
            name="email"
            type="email"
            label="Email"
            component={this.renderInput}
          />
          <Field
            name="phoneNumber"
            type="number"
            label="Phone Number"
            component={this.renderInput}
          />
          <Field
            name="linkedin"
            type="url"
            label="Linkedin"
            component={this.renderInput}
          />
          <Field
            name="github"
            type="url"
            label="GitHub"
            component={this.renderInput}
          />
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.firstName) errors.firstName = 'Enter your first name';
  if (!formValues.lastName) errors.lastName = 'Enter your last name';
  if (!formValues.profession) errors.profession = 'Enter your profession';
  if (!formValues.email) errors.email = 'Enter your email';
  if (!formValues.phoneNumber) errors.phoneNumber = 'Enter your phone number';
  if (!formValues.linkedin)
    errors.linkedin = 'Enter the URL to your Likedin profile';
  if (!formValues.github)
    errors.github = 'Enter the URL to your GitHub profile';
  return errors;
};

export default reduxForm({
  form: 'cv-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(GeneralInfoForm);
