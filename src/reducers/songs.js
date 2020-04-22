import { computeAdditionTimestamp } from '../PlaylistModel.js'

function songs(state = [], action) {
  let song = action.song;
  switch (action.type) {
    case 'ADD_SONG':
      // Check if song is already in the playlist
      console.log(state);
      let alreadyPresent = state.some(d => d.track.id === song.track.id);
      if (alreadyPresent) {
        window.alert(`${song.track.name} is already present in the playlist.`);
        return [...state];
      } else {
        // Compute time of addition
        song.addTime = computeAdditionTimestamp(song);
        return [...state, song];
      }
    case 'REMOVE_SONG':
      return [...state].filter(d => d.track.id !== song.track.id);
    default:
      return [...state];
  }
}

export default songs
