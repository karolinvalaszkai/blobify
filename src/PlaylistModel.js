import * as apiConfig from './apiConfig.js'
import RenderPromise from './renderPromise.js'
import React from 'react'
import Settings from './components/Settings/SettingsContainer'



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

  /*
    Give drag drop element to this.
  */
  export function createSongDisplay(song) {
    if (song.track.preview_url !== null){
    return (
      <div id={song.track.id} key={song.track.id} className='song draggable songtooltip'
            onDragStart={(e)=>onDragStart(e, song)} draggable onMouseDown={(e)=>openTooltip(song.track.id)}>
        <audio id={'audio'+song.track.id} src={song.track.preview_url} muted loop></audio>
        <div id={"tooltip-"+song.track.id} className="tooltiptext hidden"><h3>{song.track.name}</h3><br/>
        <a href={song.track.external_urls.spotify}>Open in spotify</a>
        
        </div>
      
        {/* <button className='addButton buttonInvisible'>Add to playlist</button><br/> */}
        <br/>
      </div>
    );
    }
  }
  const onDragStart = (ev, song) => {
    console.log("Song " + song.track.name + " is being dragged");
    ev.dataTransfer.setData("text/plain", JSON.stringify(song));
    ev.dataTransfer.effectAllowed = "copy";
  }
  const openTooltip = (id) => {
    console.log("open toolkit")
    var visibleTooltips = document.getElementsByClassName("tooltiptext visible");

    for (var i = 0, len = visibleTooltips.length; i < len; i++) {
      visibleTooltips[i].classList.add('hidden');
      visibleTooltips[i].classList.remove('visible');
      }

    var tooltip = document.getElementById("tooltip-"+id);
    let currentClass = tooltip.classList[1];
    tooltip.classList.remove(currentClass);
    tooltip.classList.add((currentClass == 'hidden'? 'visible' : 'hidden'));
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
