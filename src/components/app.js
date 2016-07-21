import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

import DisplayGroup  from './display-group';
import AppHeader  from './app-header';

/**
 * Class App
 * Top Level Application Container
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {displayHeight: 600};
  }

  render() {
    return (
      <div className="app-container">
        <AppHeader />
        <DisplayGroup height={this.state.displayHeight} />
       </div>
    );
  }
}
