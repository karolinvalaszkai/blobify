import * as apiConfig from './apiConfig.js'
import RenderPromise from './renderPromise.js'
import React from 'react'

  export function displaySongs(songList) {
    RenderPromise.render(
      songList,
      songs => React.createElement(React.Fragment, {}, songs.map(song => createSongDisplay(song))),
      document.getElementById('resultsDiv'));
  }

  export function createSongDisplay(song) {
    return (
      <span id={song.track.id} key={song.track.id} className='song'>
        {/*here goes the actual representation of a song*/}
        {song.track.id}<br/>{song.track.title}
      </span>
    )
  }

  export function getSongDetails(song_id) {
    //TODO return acoustic features of song
  }

  export function computeAdditionTimestamp(song) {
    //return current time
  }

  export function searchPlaylist(name) {
    // Replace variables in case they are falsy (e.g. empty string, null, undefined)
    name = name || "37i9dQZEVXbMDoHDwVN2tF";

    return retrieve(name).then(data => data.items); // leave out the unimportant parts of the response data
  }

  export function retrieve(query) {
    const payload = apiConfig.clientID+":"+apiConfig.secretID;
    const encodedPayload = new Buffer(payload).toString("base64");

    let access_token = "";

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + encodedPayload);
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    const token = fetch("https://accounts.spotify.com/api/token", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));

    async function getSong() {
      let wait = await token.then(result => access_token = result.access_token);

      let playlist = fetch(apiConfig.playlistENDPOINT + query + '/tracks', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access_token
        }
      }).then(response => {
        return response.json();
      });

      return playlist;
    }

    return getSong();
  }
