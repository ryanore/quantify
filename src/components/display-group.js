import React, { Component }  from 'react';
import Controls  from './controls';
import Canvas from './canvas-display';

/**
 * Class DisplayGroup
 */
export default class DisplayGroup extends Component {
  constructor() {
    super();
    this.state = {quantity:0};
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(q) {
    this.setState({quantity: q });
  }

  render() {
    return (
      <div className="display-group">
        <Controls quantity={this.state.quantity} onChange={this.updateQuantity}/>
        <hr />
        <Canvas quantity={this.state.quantity} />
      </div>
    );
  }
}
