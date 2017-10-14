import React, { Component } from 'react';
import {Dimensions} from 'react-native'
import Canvas from 'react-native-canvas';

const {height, width} = Dimensions.get('window');

export default class App extends Component {

  handleCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, 100, 100);
    ctx.beginPath();
    ctx.arc(Math.round(width/2),Math.round(height/10),40,0,2*Math.PI);
    ctx.stroke();
    ctx.moveTo(Math.round(width/2), Math.round(height/2))
    ctx.lineTo(Math.round(height/2),100);

    ctx.stroke();
  }

  render() {
    return (
      <Canvas style={{height: '100%', width: '100%', backgroundColor: 'pink'}} ref={this.handleCanvas}/>
    )
  }
}
