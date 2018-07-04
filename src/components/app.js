import React, { Component } from 'react';
import Canvas from '../containers/canvas'

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <header>
          <h1>Trello Clone App</h1>
        </header>
        <Canvas></Canvas>
      </div>
    );
  }
}
