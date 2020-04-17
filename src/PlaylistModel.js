import * as apiConfig from './apiConfig.js'
import RenderPromise from './renderPromise.js'
import React from 'react'

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPO4fSzO6KUyphdBvNLHr0UMr7ArpPVK4",
  authDomain: "iprog2020.firebaseapp.com",
  databaseURL: "https://iprog2020.firebaseio.com",
  projectId: "iprog2020",
  storageBucket: "iprog2020.appspot.com",
  messagingSenderId: "667835768822",
  appId: "1:667835768822:web:407e0382496fd8a7f731d7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

  export function displaySongs(songListPromise) {
    RenderPromise.render(
      songListPromise,
      songs => React.createElement(React.Fragment, {}, songs.map(song => createSongDisplay(song))),
      document.getElementById('resultsDiv'));

    setTimeout(() => {
      let songs = document.body.querySelectorAll('.song');
      songs.forEach(song => {
        let root = document.getElementById(song.id);
        searchAudioFeatures(song.id).then(features => {
          
          var svg = window["blobCreator"](features);
          root.appendChild(svg);
 
        });
      });
    }, 1000);
  }

  export function createSongDisplay(song) {
    if (song.track.preview_url !== null){
    return (
      <div id={song.track.id} key={song.track.id} className='song'>
        <audio id={'audio'+song.track.id} src={song.track.preview_url} muted></audio>
        <button className='addButton buttonInvisible'>Add to playlist</button><br/>
        {song.track.name}<br/>
      </div>
    );
    }
  }

  export function searchPlaylist(name) {
    // Replace variables in case they are falsy (e.g. empty string, null, undefined)
    name = name || "37i9dQZEVXbMDoHDwVN2tF";

    return retrieve(name, 'playlist').then(data => data.items); // leave out the unimportant parts of the response data
  }

  export function searchAudioFeatures(id) {
    // Replace variables in case they are falsy (e.g. empty string, null, undefined)
    id = id || "";

    return retrieve('?ids='+id, 'audio').then(data => data.audio_features[0]);
  }

  export function retrieve(query, type) {
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

    async function getSong(type) {
      let wait = await token.then(result => access_token = result.access_token);
      let fetchString = (type == 'playlist') ? 
        apiConfig.playlistENDPOINT + query + '/tracks' : 
        apiConfig.audioENDPOINT + query;

      let playlist = fetch(fetchString, {
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

    return getSong(type);
  }

  // Saves a new song to your Cloud Firestore database.
  export function saveSong(song) {
    // Add a new song object to the database.
    db.collection('playlist').doc(song.track.id).set({
      id: song.track.id,
      title: song.track.name,
      preview: song.track.preview_url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .catch(function(error) {
      console.error('Error writing new message to database', error);
    });
    
  }

  export function loadSong(song) {
    db.collection('playlist').doc(song.track.id).get().then(function(doc) {
      console.log(`${doc.id} => ${doc.data().title}`);
    });
  }

  export function deleteSong(id) {
    db.collection("playlist").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }

  export function loadCollection() {
    return db.collection("playlist").get().then((querySnapshot) => {
      let collection = [];
      querySnapshot.forEach((doc, i) => {
        let data = doc.data();  
          console.log(`${doc.id} => ${doc.data()}`);
          collection.push(doc.data());
      });
      console.log({collection});
      return collection;
    });
  }
