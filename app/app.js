import React, { Component } from 'react';
import logo from './assets/logo.svg';
import {styler} from './utils';

class App extends Component {
  render() {
    return (
      <div className={styler('app')}>
        <div className={styler('app_header')}>
          <img src={logo} className={styler('app_logo')} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styler('app_intro')} >
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
