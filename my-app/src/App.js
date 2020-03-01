import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MyPlaylist from './MyPlaylist.js';

class App extends Component {

  state = {
    playlists : [{x: 2, y: 10}, {x: 3}]
  };

  render() {
    return (
      <React.Fragment>
      <div>
        <MyPlaylist
          playlists = {this.state.playlists}
          onUpdate = {this.addPlaylist}
        />
      </div>
      </React.Fragment>
    );
  }

/*
  Add a playlist to the list of playlists.
*/
  addPlaylist = (playlist) => {
    this.setState(state => ({
      playlists : [this.state.playlists, playlist]
    }))
  }
}
export default App;
