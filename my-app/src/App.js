import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import accessToken from './apiConfig.js';
import MyPlaylist from './MyPlaylist.js';




class App extends Component {

  state = {
    playlists : [{x: 2, y: 10}, {x: 3}]
  };

  render() {
    this.searchSong();
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

  /*
    Search for a artist.
  */
  searchSong(name) {
    fetch('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist', {
      method: 'GET',headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
      }
    }).then((response) => {
          response.json().then((data) => { console.log(data) });
      });
  }

}
export default App;
