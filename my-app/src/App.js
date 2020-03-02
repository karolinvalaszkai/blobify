import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {clientID, secretID} from './apiConfig.js';
import MyPlaylist from './MyPlaylist.js';




class App extends Component {

  state = {
    playlists : [{x: 2, y: 10}, {x: 3}]
  };

  render() {
    this.searchSong("tech n9ne");
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
    Search for a [type] (=artist).
  */
  searchSong(name, type) {
    console.log(secretID);
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
        fetch('https://api.spotify.com/v1/search?q='+name+'&type=artist', {
          method: 'GET',headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + access_token
          }
        }).then((response) => {
              response.json().then((data) => { console.log(data) });
          });
    }
    getSong();
  }

}
export default App;
