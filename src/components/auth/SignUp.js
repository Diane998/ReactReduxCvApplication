import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions';

import { Segment, Button, Form } from 'semantic-ui-react';
import GoogleAuth from './GoogleAuth';

class SignUp extends Component {
  state = { email: '', password: '', username: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    if (!this.props.auth) {
      return (
        <Segment>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input
                autoComplete="off"
                type="email"
                id="email"
                onChange={e => this.setState({ [e.target.id]: e.target.value })}
                placeholder="Email"
              />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <input
                autoComplete="off"
                type="text"
                id="username"
                onChange={e => this.setState({ [e.target.id]: e.target.value })}
                placeholder="Username"
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                autoComplete="off"
                type="password"
                id="password"
                onChange={e => this.setState({ [e.target.id]: e.target.value })}
                placeholder="Password"
              />
            </Form.Field>
            <Button>Sign up</Button>
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

const mapStateToProps = state => {
  if (state.firebase.auth.isEmpty) {
    return {};
  } else {
    const {
      firebase: { auth }
    } = state;
    return { auth: auth };
  }
};

export default connect(mapStateToProps, { signUp })(SignUp);
