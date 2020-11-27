import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class CvApplication extends Component {
  render() {
    console.log(this.props);
    return <div>CV Application</div>;
  }
}

export default connect(state => ({
  CvApplications: state
}))(CvApplication);

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     cvApplications: state
//   };
// };

// export default connect(
//   compose(
//     mapStateToProps,
//     firestoreConnect([{ collection: 'cv-applications' }])
//   )
// )(CvApplication);
