import React, { Component }  from 'react';
import DisplayGroup  from './display-group';
import AppHeader  from './app-header';

/**
 * Class App
 * Top Level Application Container
 */
export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        <AppHeader />
        <DisplayGroup />
        <DisplayGroup />
      </div>
    );
  }
}
