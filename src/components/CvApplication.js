import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import CvView from './View/CvView';

class CvApplication extends Component {
  render() {
    const { cvApplication } = this.props;
    if (cvApplication) {
      return <CvView cv={cvApplication} />;
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { docId } = ownProps.match.params;
  const { cvApplications } = state.firestore.data;
  const cvApplication = cvApplications ? cvApplications[docId] : null;
  return { cvApplication };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'cvApplications' }])
)(CvApplication);
