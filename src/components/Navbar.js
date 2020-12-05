import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import GoogleAuth from './auth/GoogleAuth';
import SignOut from './auth/SignOut';

class NavBar extends Component {
  renderAuthentication() {
    if (this.props.auth && this.props.signInMethod) {
      return this.props.signInMethod === 'password' ? (
        <SignOut />
      ) : (
        <GoogleAuth />
      );
    } else {
      return (
        <>
          <Menu.Item as={NavLink} exact to="/signup">
            Sign up
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/signin">
            Sign in
          </Menu.Item>
        </>
      );
    }
  }

  render() {
    return (
      <Menu stackable>
        <Menu.Item>
          <h3>CV Creator</h3>
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/create">
          Create CV Application
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/default">
          View Default CV Application
        </Menu.Item>
        {this.props.auth ? (
          <Menu.Item as={NavLink} exact to={`/view/${this.props.auth.uid}`}>
            View CV Application
          </Menu.Item>
        ) : null}
        <Menu.Menu position="right">{this.renderAuthentication()}</Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  if (state.firebase.auth.isEmpty) {
    return {};
  } else {
    const {
      firebase: { auth }
    } = state;
    return { auth: auth, signInMethod: auth.providerData[0].providerId };
  }
};

export default connect(mapStateToProps)(NavBar);
