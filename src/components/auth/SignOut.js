import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';

class SignOut extends Component {
  renderAuthButton() {
    const { auth } = this.props;
    return auth.uid ? (
      <div
        style={{
          height: '100%',
          border: '1px solid rgba(34,36,38,.1)',
          cursor: 'pointer'
        }}
        onClick={this.props.signOut}
        className="item"
      >
        Sign Out
      </div>
    ) : null;
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps, { signOut })(SignOut);
