// ScenarioReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

const ScenarioReview = ({ onCancel, fields, formValues }) => {
  const reviewFields = fields.map(({ name, label }, index) => {
    return (
      <div key={index} style={{ marginBottom: '20px' }}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please, confirm your entries before saving !</h5>
      <div style={{ marginBottom: '50px' }}>{reviewFields}</div>
      <Button onClick={onCancel} variant="contained" color="secondary">
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: '50px' }}
      >
        Create
      </Button>
    </div>
  );
};

function mapStateToProps(state) {
  //   console.log(state);
  return { formValues: state.form.scenarioForm.values };
}

export default connect(mapStateToProps)(ScenarioReview);
