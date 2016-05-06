import React, { Component }  from 'react';
import Canvas from './canvas-display';

export default class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 0};
  }

  componentWillReceiveProps(props) {
    if( props.quantity !== this.state.quantity ) {
      this.setState({quantity: props.quantity});
    }
  }

  render() {
    return (
      <Canvas quantity={this.state.quantity} />
    );
  }
}
