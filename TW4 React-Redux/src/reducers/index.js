import { combineReducers } from 'redux'
import songs from './songs'
import currentPlaylist from './currentPlaylist'

export default combineReducers({
  songs,
  currentPlaylist
})
