import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';

import GoogleAuth from './GoogleAuth';
import { Segment, Button, Form } from 'semantic-ui-react';

class SignIn extends Component {
  state = { email: '', password: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    if (!this.props.auth) {
      return (
        <Segment>
          <h3>Sign in</h3>
          <div className="ui divider"></div>
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
              <label>Password</label>
              <input
                autoComplete="off"
                type="password"
                id="password"
                onChange={e => this.setState({ [e.target.id]: e.target.value })}
                placeholder="Email"
              />
            </Form.Field>
            <Button>Sign in</Button>
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

export default connect(mapStateToProps, { signIn })(SignIn);
