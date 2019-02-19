// ScenarioField contains logic to render a label and input
import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'white'
    },
    color: 'white'
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'white'
    }
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'white'
    },
    color: 'white'
  },
  notchedOutline: {}
});

const ScenarioField = props => {
  // see the different event handlers that are passed down from redux form
  // console.log(props);
  const { classes, input, label, type } = props;

  const chooseField = () => {
    switch (type) {
      default:
      case 'text':
        return (
          <div>
            <TextField
              {...input}
              required
              type={type}
              autoComplete="off"
              id="outlined-name"
              label={label}
              margin="normal"
              variant="outlined"
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
            />
          </div>
        );
      case 'date':
        return (
          <div>
            <TextField
              {...input}
              required
              type={type}
              label={label}
              id="date"
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput
                }
              }}
              InputLabelProps={{
                shrink: true,
                classes: {
                  root: classes.cssOutlinedInput
                }
              }}
            />
          </div>
        );
    }
  };

  return <div>{chooseField()}</div>;
};

export default withStyles(styles)(ScenarioField);
