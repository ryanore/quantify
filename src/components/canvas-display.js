import React, { Component }  from 'react';
import _ from 'underscore';

export default class CanvasDisplay extends Component {

  static defaultProps = {
    quantity: 0,
    canvasProps: {
      width: 1200,
      height: 600,
      radius: 2,
      colors: ['black', 'red']
    }
  }

  constructor (props) {
    super(props);
  }

  /**
   * Get the points to paint
   * For each number in the quantity, create a point coordinate
   */
  getPoints(num) {
    const n = this.props.canvasProps.colors.length;
    const r = this.props.canvasProps.radius;
    const pad = r*4;
    const points = [];
    for (var i = 0; i < num; ++i) {
      points.push({
        c: Math.floor(n * Math.random()),
        x: Math.floor((this.canvas.width-pad) * Math.random()) -r,
        y: Math.floor((this.canvas.height-pad) * Math.random()) -r,
        pad: r*2
      });
    }
    return points;
  }


  /**
   * Paint the canvas
   */
  paint(points) {
    const r = this.props.canvasProps.radius;
    const d = r * 2;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < points.length; ++i) {
      var p = points[i];
      this.ctx.drawImage(this.offScreen, p.c * d, 0, d, d, p.x+p.pad, p.y+p.pad, d, d);
    }
  }


  /**
   * make a strip of dots only as big as it needs to be
   * This should occur any time the props change other than quantity
   * @return {CanvasRenderingContext2D}
   */
  updateOffscreenCanvas(props) {
    const {width, height, radius, colors} = this.props.canvasProps;
    const n = colors.length;
    const d = radius * 2;
    this.offScreen.height = d;
    this.offScreen.width = n * d;
    this.offCtx.clearRect(0, 0, this.offScreen.width, this.offScreen.height);
    let i = 0;
    for (i; i < n; ++i) {
      this.offCtx.fillStyle = colors[i];
      this.offCtx.beginPath();
      this.offCtx.arc(i * d + radius, radius, radius, 0, 2 * Math.PI);
      this.offCtx.closePath();
      this.offCtx.fill();
    }
  }

  /**
   * The component has mounted, this only happens once
   */
  componentDidMount() {
    this.offScreen = document.createElement('canvas');
    this.offCtx = this.offScreen.getContext('2d');

    this.canvas = this.refs.canvasDisplay;
    this.ctx = this.canvas.getContext('2d');

    this.updateOffscreenCanvas();
    this.paint(this.getPoints(this.props.quantity));
  }

  /**
   * Rerender happend
   */
  componentDidUpdate() {
    this.updateOffscreenCanvas();
  }

  /**
   * Rerender happend
   */
  componentWillReceiveProps(props) {
    if( props.quantity !== this.props.quantity ) {
      this.paint(this.getPoints(props.quantity));
    }
  }

  /**
   * Only re-render if the canvasProps have changed
   */
  shouldComponentUpdate(newProps) {
    return !_.isEqual(newProps.canvasProps , this.props.canvasProps);
  }

  render() {
    const {width, height} = this.props.canvasProps;
    return(
      <canvas ref="canvasDisplay" className="canvasDisplay" width={width} height={height} />
    );
  }
}
