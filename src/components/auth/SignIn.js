import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InputField from '../Fields/InputField';
import { signIn } from '../../actions';

import GoogleAuth from './GoogleAuth';
import { Segment, Button, Form, Message } from 'semantic-ui-react';

class SignIn extends Component {
  onSubmit = formValues => {
    this.props.signIn(formValues);
  };

  render() {
    if (!this.props.auth) {
      const { authError } = this.props;
      return (
        <Segment>
          <h3>Sign in</h3>
          <p>To create your CV application</p>
          <div className="ui divider"></div>
          <Form error onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name="email"
              type="email"
              label="Email"
              component={InputField}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              component={InputField}
            />
            {authError ? (
              <Message
                error
                header={authError.code}
                content={authError.message}
              />
            ) : null}
            <Button type="submit">Sign in</Button>
          </Form>
          <br />
          <GoogleAuth />
        </Segment>
      );
    } else {
      return null;
    }
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.email) errors.email = 'Enter your email';
  if (!formValues.password) errors.password = 'Enter your password';

  return errors;
};

const mapStateToProps = state => {
  if (state.firebase.auth.isEmpty) {
    return { authError: state.auth.authError };
  } else {
    const {
      firebase: { auth }
    } = state;
    return { auth: auth };
  }
};

const formWrapped = reduxForm({
  form: 'signIn',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignIn);

export default connect(mapStateToProps, { signIn })(formWrapped);
