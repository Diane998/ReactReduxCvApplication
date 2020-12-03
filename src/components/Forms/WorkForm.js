import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import FieldArrayForm from './FieldArrayForm';

const textFields = [
  { name: 'company', type: 'text', label: 'Company' },
  { name: 'jobTitle', type: 'text', label: 'Job Title' }
];

const dateFields = [
  { name: 'workStartDate', type: 'date', label: 'Start Date' },
  { name: 'workEndDate', type: 'date', label: 'End Date' }
];

const nestedFieldArray = [
  {
    name: 'tasks',
    type: 'text',
    arrayFieldName: 'work',
    addFieldText: 'Add Task'
  }
];

class WorkForm extends Component {
  render() {
    return (
      <FieldArrayForm
        onSubmit={this.props.handleSubmit}
        submitBtnText="Next Page"
        header="Work Experience"
        name="work"
        textFields={textFields}
        dateFields={dateFields}
        nestedFieldArray={nestedFieldArray}
        addFieldText="Add Work Experience"
        prevPage={this.props.previousPage}
      />
    );
  }
}

const validate = formsValues => {
  if (formsValues.work) {
    const errors = {};
    const workArrayErrors = [];

    formsValues.work.forEach((workInfo, workIndex) => {
      const workErrors = {};

      if (!workInfo.company) {
        workErrors.company = 'Enter a Company';
        workArrayErrors[workIndex] = workArrayErrors;
      }
      if (!workInfo.jobTitle) {
        workErrors.jobTitle = 'Enter your role in the comapny';
        workArrayErrors[workIndex] = workArrayErrors;
      }
      if (!workInfo.workStartDate) {
        workErrors.workStartDate =
          'Enter the date you started working for this company';
        workArrayErrors[workIndex] = workArrayErrors;
      }
      if (!workInfo.workEndDate) {
        workErrors.workEndDate =
          'Enter the date you finished working for this company';
        workArrayErrors[workIndex] = workArrayErrors;
      }
      workArrayErrors[workIndex] = workErrors;
      errors.work = workArrayErrors;
    });
    return errors;
  }
};

export default reduxForm({
  form: 'cv-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WorkForm);
