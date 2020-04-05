import { combineReducers } from 'redux'
import songs from './songs'
import currentPlaylist from './currentPlaylist'
import audioMuted from './audioMuted'

export default combineReducers({
  songs,
  currentPlaylist,
  audioMuted
})
