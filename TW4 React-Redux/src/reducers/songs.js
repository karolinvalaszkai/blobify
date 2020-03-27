import { computeAdditionTimestamp } from '../PlaylistModel.js'
import RenderPromise from '../renderPromise.js'
import React from 'react'

function songs(state = [], action) {
  let song = action.song;
  switch (action.type) {
    case 'ADD_SONG':
      // Check if song is already in the playlist
      let alreadyPresent = state.some(d => d.id === song.id);
      if (alreadyPresent) {
        console.error(`${song.title} is already present in the playlist.`);
        return [...state];
      } else {
        // Compute time of addition
        song.addTime = computeAdditionTimestamp(song);
        return [...state, song];
      }
    case 'REMOVE_SONG':
      return [...state].filter(d => d.id !== song.id);
    default:
      return [...state];
  }
}

export default songs
