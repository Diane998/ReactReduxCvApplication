import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import FieldArrayForm from './FieldArrayForm';

const textFields = [
  { name: 'programmingLanguage', type: 'text', label: 'Programming Lnaguage' }
];

const rangeFields = [
  { name: 'proficiency', label: 'Programming Language Proficiency' }
];

class LanguagesForm extends Component {
  render() {
    return (
      <FieldArrayForm
        onSubmit={this.props.handleSubmit}
        submitBtnText="Submit"
        header="Skills"
        name="skills"
        textFields={textFields}
        rangeFields={rangeFields}
        addFieldText="Add a Programming Language"
        prevPage={this.props.previousPage}
      />
    );
  }
}

const validate = ({ skills }) => {
  const errors = {};

  if (skills) {
    const skillsArrayErrors = [];
    skills.forEach((skill, i) => {
      const skillErrors = {};

      if (!skill.programmingLanguage) {
        skillErrors.programmingLanguage = 'Enter a programming language';
        skillsArrayErrors[i] = skillErrors;
      }

      errors.skills = skillsArrayErrors;
    });
  }
  return errors;
};

export default reduxForm({
  form: 'cv-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(LanguagesForm);
