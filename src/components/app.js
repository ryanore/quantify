import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

import DisplayGroup  from './display-group';
import AppHeader  from './app-header';

/**
 * Class App
 * Top Level Application Container
 */
export default class App extends Component {
  constructor() {
    super();
    this.state = {displayHeight: 600};
    window.addEventListener('resize', this.onResize.bind(this));
  }

  componentDidMount() {
    this.header = ReactDOM.findDOMNode(this.refs.appHeader);
  }

  onResize() {
    const hgt = this.header.offsetHeight;
    this.setState({displayHeight: window.innerHeight - hgt});
  }

  render() {
    console.log('render');
    return (
      <div className="app-container">
        <AppHeader ref="appHeader"/>
        <DisplayGroup ref="displayGroup1" height={this.state.displayHeight} />
        <DisplayGroup ref="displayGroup2" height={this.state.displayHeight} />
      </div>
    );
  }
}
