import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScenarioNew from './components/scenarios/ScenarioNew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://redux-form.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Redux Form
          </a>
          <ScenarioNew />
        </header>
      </div>
    );
  }
}

export default App;
