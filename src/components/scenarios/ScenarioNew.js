// ScenarioNew shows ScenarioForm and ScenarioReview
import React, { Component } from 'react';

import ScenarioForm from './ScenarioForm';
import ScenarioReview from './ScenarioReview';

const FIELDS = [
  {
    type: 'text',
    name: 'scenarioName',
    label: 'Scenario Name'
  },
  {
    type: 'text',
    name: 'scenarioDescription',
    label: 'Scenario Description'
  },
  {
    type: 'date',
    name: 'scenarioStart',
    label: 'Scenario Start'
  },
  {
    type: 'date',
    name: 'scenarioEnd',
    label: 'Scenario End'
  }
];

class ScenarioNew extends Component {
  state = {
    formReview: false
  };

  render() {
    return (
      <div>
        <h2>Create New Scenario</h2>
        {this.state.formReview ? (
          <ScenarioReview
            fields={FIELDS}
            onCancel={() => this.setState({ formReview: false })}
          />
        ) : (
          <ScenarioForm
            fields={FIELDS}
            onScenarioSubmit={() => this.setState({ formReview: true })}
          />
        )}
      </div>
    );
  }
}

export default ScenarioNew;
