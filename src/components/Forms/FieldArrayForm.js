import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';

import DateField from '../Fields/DateField';
import InputField from '../Fields/InputField';
import RangeSlider from '../Fields/RangeSlider';

class FieldArrayForm extends Component {
  onChangeCapitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  renderInputText({ input, label, meta }) {
    return <InputField input={input} label={label} meta={meta} />;
  }

  renderInputDate({ input, label, meta }) {
    return <DateField input={input} label={label} meta={meta} />;
  }

  renderSlider(props) {
    return <RangeSlider props={props} />;
  }

  renderNestedFieldArray = ({ fields }) => {
    console.log(this.props.nestedFieldArray[0]);
    const { arrayFieldName, addFieldText } = this.props.nestedFieldArray[0];

    return (
      <div className="ui list">
        <div className="item">
          <button
            type="button"
            onClick={() => fields.push({})}
            className="ui right floated green button"
          >
            {addFieldText}
          </button>
        </div>

        {fields.map((field, i) => (
          <div key={`task ${i}`} className="item">
            <div className="ui list">
              <div className="item">
                <Field
                  name={`${field}.${arrayFieldName}`}
                  type="text"
                  label={`Task #${i + 1}`}
                  component={this.renderInputText}
                />
                <button
                  className="ui right floated red button"
                  type="button"
                  title="Remove Member"
                  onClick={() => fields.remove(i)}
                >
                  Remove Task
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  renderField = (fieldArr, field) => {
    if (fieldArr.length === 2) {
      return (
        <div className="two fields">
          {fieldArr.map(({ name, type, label }, i) => {
            if (type === 'text') {
              return (
                <Field
                  key={`text ${i}`}
                  name={`${field}.${name}`}
                  type={type}
                  label={label}
                  normalize={value => this.onChangeCapitalize(value)}
                  component={this.renderInputText}
                />
              );
            } else {
              return (
                <Field
                  key={`date ${i}`}
                  name={`${field}.${name}`}
                  type={type}
                  label={label}
                  component={this.renderInputDate}
                />
              );
            }
          })}
        </div>
      );
    } else {
      return fieldArr.map(({ name, type, label }, i) => {
        if (type === 'text') {
          return (
            <Field
              key={`text ${i}`}
              name={`${field}.${name}`}
              type={type}
              label={label}
              normalize={value => this.onChangeCapitalize(value)}
              component={this.renderInputText}
            />
          );
        } else {
          return (
            <Field
              key={`range ${i}`}
              label={label}
              name={`${field}.${name}`}
              component={this.renderSlider}
            />
          );
        }
      });
    }
  };

  renderFieldArray = ({ fields }) => {
    const {
      textFields,
      dateFields,
      nestedFieldArray,
      addFieldText,
      rangeFields
    } = this.props;

    return (
      <div className="ui list">
        <div className="item">
          <button
            type="button"
            onClick={() => fields.push({})}
            className="ui right floated green button"
          >
            {addFieldText}
          </button>
        </div>

        {fields.map((field, i) => (
          <div key={i} className="item">
            <div style={{ paddingBottom: '50px' }} className="ui segment">
              {textFields && dateFields ? (
                <>
                  {this.renderField(textFields, field)}
                  {this.renderField(dateFields, field)}
                </>
              ) : (
                <>
                  {this.renderField(textFields, field)}
                  {this.renderField(rangeFields, field)}
                </>
              )}

              {nestedFieldArray ? (
                <FieldArray
                  name={`${field}.${nestedFieldArray[0].name}`}
                  normalize={value => this.onChangeCapitalize(value)}
                  component={this.renderNestedFieldArray}
                />
              ) : null}
              <button
                className="ui right floated red button"
                type="button"
                title="Remove Field"
                onClick={() => fields.remove(i)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { header, onSubmit, name, prevPage, submitBtnText } = this.props;
    return (
      <form onSubmit={onSubmit} className="ui error form">
        <button
          type="submit"
          style={{ marginBottom: '20px' }}
          className="button ui right floated"
        >
          {submitBtnText}
        </button>
        <button
          onClick={prevPage}
          type="button"
          style={{ marginBottom: '20px' }}
          className="button ui right floated"
        >
          Previous
        </button>
        <h1>{header}</h1>
        <div className="ui clearing divider"></div>
        <FieldArray name={name} component={this.renderFieldArray} />
      </form>
    );
  }
}

export default FieldArrayForm;
