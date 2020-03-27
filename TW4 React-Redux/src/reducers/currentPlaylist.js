import searchPlaylist from '../PlaylistModel.js'
import RenderPromise from '../renderPromise.js'
import React from 'react'

const currentPlaylist = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return action.songs;
    case 'LOAD_PLAYLIST':
      displaySongs(action.id);
      return [...state];
    default:
      return state;
  }
}

const displaySongs = (id) => {
  RenderPromise.render(
    searchPlaylist(id),
    songs => React.createElement(React.Fragment, {}, songs.map(song => createSongDisplay(song))),
    document.getElementById('resultsDiv'));
}

const createSongDisplay = (song) => {
  return (
    {/*here goes the actual representation of a song*/}
  )
}

export default currentPlaylist
