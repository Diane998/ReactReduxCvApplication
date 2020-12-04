import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';

import { List, Button, Form, Segment, Divider } from 'semantic-ui-react';
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
      <List>
        {fields.map((field, i) => (
          <List.Item key={`task ${i}`}>
            <List>
              <List.Item>
                <Field
                  name={`${field}.${arrayFieldName}`}
                  type="text"
                  label={`Task #${i + 1}`}
                  component={InputField}
                />
                <Button
                  floated="right"
                  color="red"
                  type="button"
                  title="Remove Task"
                  onClick={() => fields.remove(i)}
                >
                  Remove Task
                </Button>
              </List.Item>
            </List>
          </List.Item>
        ))}
        <List.Item>
          <Button
            type="button"
            onClick={() => fields.push({})}
            floated="right"
            color="green"
          >
            {addFieldText}
          </Button>
        </List.Item>
      </List>
    );
  };

  renderField = (fieldArr, field) => {
    if (fieldArr.length === 2) {
      return (
        <Form.Group widths="equal">
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
        </Form.Group>
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
      <List>
        {fields.map((field, i) => (
          <List.Item key={i}>
            <Segment style={{ paddingBottom: '50px' }}>
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
              <Button
                floated="right"
                color="red"
                type="button"
                title="Remove Field"
                onClick={() => fields.remove(i)}
              >
                Remove Field
              </Button>
            </Segment>
          </List.Item>
        ))}
        <List.Item>
          <Button
            type="button"
            onClick={() => fields.push({})}
            floated="right"
            color="green"
          >
            {addFieldText}
          </Button>
        </List.Item>
      </List>
    );
  };

  render() {
    const { header, onSubmit, name, prevPage, submitBtnText } = this.props;
    return (
      <Form onSubmit={onSubmit} error>
        <h1>{header}</h1>
        <Divider />
        <FieldArray name={name} component={this.renderFieldArray} />
        <Button type="submit" style={{ marginBottom: '20px' }} floated="right">
          {submitBtnText}
        </Button>
        <Button
          onClick={prevPage}
          type="button"
          style={{ marginBottom: '20px' }}
          floated="right"
        >
          Previous
        </Button>
      </Form>
    );
  }
}

export default FieldArrayForm;
