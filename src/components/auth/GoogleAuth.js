import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signIn, signOut } from '../../actions';
import { signInWithGoogle, signOutWithGoogle } from '../../actions';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class GoogleAuth extends Component {
  renderAuthButton() {
    const { auth } = this.props;
    return auth.uid ? (
      <button
        onClick={this.props.signOutWithGoogle}
        className="ui red google button"
      >
        <i className="google icon" />
        Sign Out
      </button>
    ) : (
      <div
        onClick={this.props.signInWithGoogle}
        className="ui green google button"
      >
        <i className="google icon" />
        Sign In with Google
      </div>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps, {
  signInWithGoogle,
  signOutWithGoogle
})(GoogleAuth);
