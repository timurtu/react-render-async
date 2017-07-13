import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import asyncrify from 'react-render-async';

class Header extends React.Component {
  render() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          <h2>Welcome to Async</h2>
        );
      }, 5000);
    });
  }
}

const AsyncHeader = asyncrify(Header);

class LogoLoader extends Component {
  render() {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <AsyncHeader loadingComponent={LogoLoader} />
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
