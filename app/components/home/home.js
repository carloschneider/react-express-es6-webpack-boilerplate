import React, {Component} from 'react';
import {styler} from '../../utils';

class Home extends Component {
  render() {
    return (
      <p className={styler('app_intro')}>
        To get started, edit
        <code>src/app.js</code>
        and save to reload.
      </p>
    );
  }
}

export default Home;
