import React, {Component} from 'react';
import logo from '../assets/img/logo.svg';
import {styler} from '../utils';

class Layout extends Component {
  render() {
    return (
      <div className={styler('app')}>
        <div className={styler('app_header')}>
          <img src={logo} className={styler('app_logo')} alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
