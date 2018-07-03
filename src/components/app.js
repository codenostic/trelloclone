import React, { Component } from 'react';
import Canvas from '../containers/canvas'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{"textAlign": "center"}}>Trello Clone App</h1>
        <hr />
        <Canvas></Canvas>
      </div>
    );
  }
}
