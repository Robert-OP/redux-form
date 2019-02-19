// ScenarioForm shows a form for a user to add some input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from '@material-ui/core';

import ScenarioField from './ScenarioField';

class ScenarioForm extends Component {
  renderFields() {
    // helper function that render the different fields
    return this.props.fields.map((field, index) => {
      return (
        <Field
          key={index}
          type={field.type}
          name={field.name}
          label={field.label}
          component={ScenarioField}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(() =>
            this.props.onScenarioSubmit()
          )}
        >
          {this.renderFields()}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Next
          </Button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'scenarioForm',
  destroyOnUnmount: false
})(ScenarioForm);
