import React from 'react';
import logo from './logo.svg';
import './App.css';
import i18n from './i18n';

import {  Provider } from 'react-redux';
import store from "./store";
import Exp from './Exp';

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Exp></Exp>
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
        </a>
          </header>
        </div>
        </Provider>
    );
  }
}

export default App;
