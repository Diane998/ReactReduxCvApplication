import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createCvApplication } from '../actions';
import { connect } from 'react-redux';

import EducationForm from './Forms/EducationForm';
import GeneralInfoForm from './Forms/GeneralInfoForm';
import WorkForm from './Forms/WorkForm';
import LanguagesForm from './Forms/LanguagesForm';

class CvApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  onSubmit = formValues => {
    this.props.createCvApplication(formValues);
  };

  render() {
    const { page } = this.state;
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
      return (
        <>
          {page === 1 && <GeneralInfoForm onSubmit={this.nextPage} />}
          {page === 2 && (
            <EducationForm
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 3 && (
            <WorkForm
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 4 && (
            <LanguagesForm
              previousPage={this.previousPage}
              onSubmit={this.onSubmit}
            />
          )}
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps, { createCvApplication })(
  CvApplicationForm
);
