import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';

import DateField from '../Fields/DateField';
import InputField from '../Fields/InputField';
import RangeSlider from '../Fields/RangeSlider';

class FieldArrayForm extends Component {
  onChangeCapitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  renderSlider(props) {
    return <RangeSlider props={props} />;
  }

  renderNestedFieldArray = ({ fields }) => {
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
                  component={InputField}
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
                  key={`${type} ${i}`}
                  name={`${field}.${name}`}
                  label={label}
                  type={type}
                  normalize={value => this.onChangeCapitalize(value)}
                  component={InputField}
                />
              );
            } else {
              return (
                <Field
                  key={`${type} ${i}`}
                  name={`${field}.${name}`}
                  type="date"
                  label={label}
                  component={DateField}
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
              type="text"
              label={label}
              normalize={value => this.onChangeCapitalize(value)}
              component={InputField}
            />
          );
        } else if (type === 'date') {
          return (
            <Field
              key={`date ${i}`}
              name={`${field}.${name}`}
              type="date"
              label={label}
              component={DateField}
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
        <div className="item">
          <button
            type="button"
            onClick={() => fields.push({})}
            className="ui right floated green button"
          >
            {addFieldText}
          </button>
        </div>
      </div>
    );
  };

  render() {
    const { header, onSubmit, name, prevPage, submitBtnText } = this.props;
    return (
      <form onSubmit={onSubmit} className="ui error form">
        <h1>{header}</h1>
        <div className="ui clearing divider"></div>
        <FieldArray name={name} component={this.renderFieldArray} />
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
      </form>
    );
  }
}

export default FieldArrayForm;
