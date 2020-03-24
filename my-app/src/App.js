import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {clientID, secretID} from './apiConfig.js';
import MyPlaylist from './MyPlaylist.js';
import AddPlaylistForm from './components/AddPlaylistForm.js'

class App extends Component {

  state = {
    playlists : [{name: "Playlist1", songs: []}, {name: "Favorites", songs: []}],
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
    const {playlists, songs} = this.state; //deconstruction.
    //console.log(songs);
    //console.log(playlists);

    return (
      <React.Fragment>
      <div style={mainFlex}>
        <div>
          <AddPlaylistForm
            addPlaylist = {this.addPlaylist}
          />
          <MyPlaylist
            playlists = {this.state.playlists}
            onUpdate = {this.addPlaylist}
            onDragOver = {this.onDragOver}
            onDrop = {this.onDrop}
          />
        </div>
          <div style={featuredSongs}>
            {songs.map(song => (
              <div
                onDragStart = {(e)=>this.onDragStart(e, song.track.id)}
                draggable
                className="draggable"
                key={song.track.id}>
                <img src={song.track.album.images[1].url} />
                {song.track.name}
              </div>
            ))}
          </div>
      </div>
      </React.Fragment>
    );
  }

  onDragOver = (ev) => {
    ev.preventDefault(); //Disables default dragover function.
  }

  onDragStart = (ev, id) => {
    //console.log('dragstart', id);
    ev.dataTransfer.setData("id", id);
  }

  /*
    Is called when a song is dropped on a playlist.
    The playlist which the song is dropped in, is inside the param.

    Note: Never mutate a state by doing state.x.name = ...
    Instead use: setState.
  */
  onDrop = (ev, index) => {
    let songId = ev.dataTransfer.getData("id");
    //update the playlist => add the song in it.
    let modifiedPlaylist = this.state.playlists;
    let modifiedSongsList = this.state.playlists[index].songs.slice(); //slice() with no params creates a copy of the whole array.
    modifiedSongsList.push(songId); //Add the song to the songList.

    modifiedPlaylist[index].songs = modifiedSongsList; //Add the songlist to the desired playlist.
    //console.log(modifiedSongsList);

    this.setState(prevState => ({
      playlists : modifiedPlaylist
    }))
  }

/*
  Add a playlist to the list of playlists.
*/
  addPlaylist = (id) => {
    let playlist = {name: id, songs: []};
    let newPlaylist = this.state.playlists;
    newPlaylist.push(playlist);
    this.setState(state => ({
      playlists : newPlaylist
    }))
    console.log(id);
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
const mainFlex = {
  diplay:"flex",
  flexDirection:"column",
}


const featuredSongs = {
  display: "flex",
  flex:"1",
  //color: "white",
  //padding: "10px",
  //fontFamily: "Arial",
  flexDirection: "row",
  overflowX: "scroll"
  //flexWrap: "wrap"
};

export default App;
