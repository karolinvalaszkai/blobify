import {searchPlaylist, displaySongs} from '../PlaylistModel.js'

const currentPlaylist = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return action.songs;
    case 'LOAD_PLAYLIST':
      displaySongs(searchPlaylist(action.id)); //searchPlaylist() is a promise!
      return state;
    default:
      return state;
  }
}

export default currentPlaylist
