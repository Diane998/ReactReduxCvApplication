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
          <NavLink exact to="/signup" className="item">
            Sign up
          </NavLink>
          <NavLink exact to="/" className="item">
            Sign in
          </NavLink>
        </>
      );
    }
  }

  render() {
    return (
      <Menu>
        <div className="item">
          <h3>CV Creator</h3>
        </div>
        <NavLink exact to="/create" className="item">
          Create CV Application
        </NavLink>
        <NavLink exact to="/view/XAqHyKKplZU8UtWINinY" className="item">
          View Default CV Application
        </NavLink>
        <div style={{ marginRight: '15px' }} className="right menu">
          {this.renderAuthentication()}
        </div>
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
