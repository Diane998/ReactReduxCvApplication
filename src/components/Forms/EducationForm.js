import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import FieldArrayForm from './FieldArrayForm';

const textFields = [
  { name: 'college', type: 'text', label: 'College or School Name' },
  { name: 'course', type: 'text', label: 'Course' }
];

const dateFields = [
  { name: 'eduStartDate', type: 'date', label: 'Start Date' },
  { name: 'eduEndDate', type: 'date', label: 'End Date' }
];

class EducationForm extends Component {
  render() {
    return (
      <FieldArrayForm
        onSubmit={this.props.handleSubmit}
        submitBtnText="Next Page"
        header="Education"
        name="education"
        textFields={textFields}
        dateFields={dateFields}
        addFieldText="Add Education"
        prevPage={this.props.previousPage}
      />
    );
  }
}

const validate = ({ education }) => {
  const errors = {};

  if (education) {
    const educationArrayErrors = [];
    education.forEach((education, i) => {
      const educationErrors = {};

      if (!education.college) {
        educationErrors.college = 'Enter a College';
        educationArrayErrors[i] = educationErrors;
      }
      if (!education.course) {
        educationErrors.course = 'Enter a Course';
        educationArrayErrors[i] = educationErrors;
      }
      if (!education.eduStartDate) {
        educationErrors.eduStartDate = 'Enter the date you started your course';
        educationArrayErrors[i] = educationErrors;
      }
      if (!education.eduEndDate) {
        educationErrors.eduEndDate = 'Enter the date you finished your course';
        educationArrayErrors[i] = educationErrors;
      }

      errors.education = educationArrayErrors;
    });
  }
  return errors;
};

export default reduxForm({
  form: 'cv-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(EducationForm);
