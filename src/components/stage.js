import React, { Component }  from 'react';

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

  buildObjects() {
    let objects = [];
    let i = this.state.quantity;
    while( i > 0 ) {
      objects.push(<div className="block" key={i}></div>);
      i--;
      console.log('while ', i);
    }
    return objects;
  }

  render() {
    let i = 0;
    let objects = this.buildObjects();
    return (
      <div className="stage">
        {objects}
      </div>
    );
  }
}
