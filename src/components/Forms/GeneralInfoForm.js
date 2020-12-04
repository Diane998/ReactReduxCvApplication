import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Divider, Form, Button, Segment } from 'semantic-ui-react';
import InputField from '../Fields/InputField';

class GeneralInfoForm extends Component {
  onChangeCapitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit} error>
        <h1>General Information</h1>
        <Divider />
        <Segment>
          <Form.Group widths="equal">
            <Field
              name="firstName"
              type="text"
              label="First Name"
              normalize={value => this.onChangeCapitalize(value)}
              component={InputField}
            />
            <Field
              name="lastName"
              type="text"
              label="Last Name"
              normalize={value => this.onChangeCapitalize(value)}
              component={InputField}
            />
          </Form.Group>
          <Field
            name="profession"
            type="text"
            label="Profession"
            normalize={value => this.onChangeCapitalize(value)}
            component={InputField}
          />
          <br />
          <Field
            name="email"
            type="email"
            label="Email"
            component={InputField}
          />
          <Field
            name="phoneNumber"
            type="text"
            label="Phone Number"
            component={InputField}
          />
          <Field
            name="linkedin"
            type="text"
            label="Linkedin"
            component={InputField}
          />
          <Field
            name="github"
            type="text"
            label="GitHub"
            component={InputField}
          />
        </Segment>
        <Button
          style={{ marginBottom: '20px' }}
          className="button ui right floated"
        >
          Next Page
        </Button>
      </Form>
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
