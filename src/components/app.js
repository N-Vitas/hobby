import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/app.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.min.css';
import {Alert} from 'react-bootstrap';
import Exchange from './Exchange';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
        </Alert>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Exchange/>
      </div>
    );
  }
}

export default App;
