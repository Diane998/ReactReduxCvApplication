import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import InputField from '../Fields/InputField';
import RangeSlider from '../Fields/RangeSlider';

class LanguagesForm extends Component {
  renderSlider(props) {
    return <RangeSlider props={props} />;
  }

  renderInputText({ input, label, meta }) {
    return <InputField input={input} label={label} meta={meta} />;
  }

  // onSubmit(formValues) {
  //   this.props.createCvApplication(formValues);
  // }

  renderLanguages = ({ fields, meta: { error, submitFailed } }) => {
    return (
      <div className="ui list">
        <div className="item">
          <button
            type="button"
            onClick={() => fields.push({})}
            className="ui right floated green button"
          >
            Add a Programming Language
          </button>
        </div>

        {fields.map((field, i) => (
          <div key={i} className="item">
            <div style={{ paddingBottom: '50px' }} className="ui segment">
              <Field
                name={`${field}.language`}
                type="text"
                label="Programming Lnaguage"
                component={this.renderInputText}
              />
              <Field
                label="Programming Language Proficiency"
                name={`${field}.proficiency`}
                component={this.renderSlider}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="ui error form">
        <button
          style={{ marginBottom: '20px' }}
          className="button ui right floated"
        >
          Submit
        </button>
        <button
          style={{ marginBottom: '20px' }}
          className="button ui right floated"
          onClick={this.props.previousPage}
        >
          Previous Page
        </button>
        <h1>Programming Language Proficiency</h1>
        <div className="ui clearing divider"></div>
        <FieldArray
          name="programmingLanguage"
          component={this.renderLanguages}
        />
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.programmingLanguage)
    errors.programmingLanguage = 'Enter a programming language';
  if (!formValues.languageProficiency)
    errors.languageProficiency =
      'How proficient are you in this programming language?';

  return errors;
};

// export default reduxForm({
//   form: 'cv-form',
//   destroyOnUnmount: false,
//   forceUnregisterOnUnmount: true,
//   validate
// })(LanguagesForm);

export default reduxForm({
  form: 'cv-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(LanguagesForm);

// export default reduxForm({ form: 'languagesForm', validate })(LanguagesForm);
