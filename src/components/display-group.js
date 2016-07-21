import React, { Component }  from 'react';
import Controls  from './controls';
import CanvasDisplay from './canvas-display';

export default class DisplayGroup extends Component {

  constructor(props) {
    super(props);
    this.onRemoveSubject = this.onRemoveSubject.bind(this);

    this.state = {
      subjects: [
        {name: 'test1', quantity: 100},
        {name: 'test2', quantity: 200}
      ],
      canvasProps: {
        width: 1200,
        height: 600,
        radius: 5,
        colors: ['red']
      }
    };
  }

  componentWillReceiveProps(props) {
    let canvasProps = Object.assign({
      width: 1200,
      height: 600,
      radius: 5,
      colors: ['red']
    }, props);

    this.setState({canvasProps: canvasProps});
  }

  updateSubjects(subject) {
    console.log('update!', subject);
  }

  addSubject() {
    this.setState({
      subjects: this.state.subjects.concat([{name: 'new subject', quantity: 0}])
    });
  }

  onRemoveSubject(index) {
    const s = this.state.subjects
      .slice(0, index)
      .concat(this.state.subjects.slice(index +1));
    this.setState({subjects: s});
  }

  render() {
    return (
      <div className="display-group">
        <button onClick={this.addSubject.bind(this)}>Add Subject</button>
        <Controls
          subjects={this.state.subjects}
          onChange={this.updateSubjects}
          removeSubject={this.onRemoveSubject}
        />
        <hr />
        <CanvasDisplay
          quantityData={this.state.subjects}
          canvasProps={this.state.canvasProps}
        />
      </div>
    );
  }
}
