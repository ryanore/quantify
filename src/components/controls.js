import React, { Component }  from 'react';
import InputQuantity from './input-quantity';

export default class Controls extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="controls">
        {this.props.subjects.map( (subject, i) => {
          return (
             <div key={i}>
               <strong>{subject.name}</strong>
               <button onClick={ () => this.props.removeSubject(i)}>remove</button>
               <br/>
               <InputQuantity quantity={0} />
            </div>
          );
        })}
      </div>
    );
  }
}
