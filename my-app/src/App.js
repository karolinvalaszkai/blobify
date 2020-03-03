import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {clientID, secretID} from './apiConfig.js';
import MyPlaylist from './MyPlaylist.js';

class App extends Component {

  state = {
    playlists : [{x: 2, y: 10}, {x: 3}],
    songs : []
  };

  componentDidMount() {
    this.searchSong("viral hits")
      .then(res => {
        this.setState({
          songs: res,
        })
      })
  }

  render() {
    const {songs} = this.state;
    console.log(songs);
    return (
      <React.Fragment>
      <div style={mainPage}>
        <div>
          <MyPlaylist
            playlists = {this.state.playlists}
            onUpdate = {this.addPlaylist}
          />
        </div>
        {songs.map(song => (
          <div key={song.track.id}>
            {song.track.name}
          </div>
        ))}
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
    Search for a [type] (=album,artist,playlist,type).
  */
  searchSong(name, type) {
    const payload = clientID+":"+secretID;
    const encodedPayload = new Buffer(payload).toString("base64");

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + encodedPayload);
    //myHeaders.append("scope", "user-read-private user-read-email",);

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    //urlencoded.append("refresh_token", "");

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    let access_token = "";
    const token = fetch("https://accounts.spotify.com/api/token", requestOptions)
    .then(response => response.json())
    //.then(result => access_token = result.access_token)
    //.finally(result => access_token = result.access_token)
    .catch(error => console.log('error', error));

    //--------At this point we have the authorization token---------//
    async function getSong() {
        let wait = await token.then(result => access_token = result.access_token);
        let playlist = fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks', {
          method: 'GET',headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + access_token
          }
        }).then((response) => {
              return response.json().then(data => data.items);
          });
          return playlist;
    }
      return getSong();
  }

}

//Style
var mainPage = {

}

export default App;
