import React, { Component }  from 'react';
import Controls  from './controls';
import Stage  from './stage';

/**
 * Class App
 * Top Level Application Container
 */
export default class App extends Component {
  constructor() {
    super();
    this.state = {quantity:0};
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(q) {
    console.log('update: ', q);
    this.setState({quantity: q });
  }

  render() {
    return (
      <div className="app-container">
        <Controls quantity={this.state.quantity} onChange={this.updateQuantity}/>
        <Stage quantity={this.state.quantity} />
      </div>
    );
  }
}
