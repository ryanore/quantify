import React, { Component }  from 'react';

export default class Controls extends Component {

  constructor(props) {
    super(props);
    this.state = {quantity: ''};
    this.onChange = this.onChange.bind(this);
  }

  /**
   * massage props for display.
   */
  componentWillReceiveProps(props) {
    let q = (props.quantity === 0) ? '' : props.quantity;
    this.setState({quantity: q});
  }

  /**
   * Test that it's a number
   * Call back to parent ( if empty string, convert to a 0 )
   */
  onChange(e) {
    let val = e.target.value;
    if(!/^[\d ]*$/.test(val)) {
      e.preventDefault();
    } else {
      let q = parseInt(val);
      q = isNaN(q) ? 0 : q;
      this.props.onChange(q);
    }
  }

  /**
   * Prevent spaces
   */
  onKeyPress(e) {
    if(e.which == 32) {
      e.preventDefault();
    }
  }

  /**
   * Render a seemingly simple input
   */
  render() {
    return (
      <div className="controls">
        <input
          value={this.state.quantity}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress }
        />
      </div>
    );
  }
}
