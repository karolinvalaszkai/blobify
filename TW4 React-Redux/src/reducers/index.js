import { combineReducers } from 'redux'
import numberOfGuests from './numberOfGuests'
import songs from './songs'
import currentPlaylist from './currentPlaylist'

export default combineReducers({
  songs,
  currentPlaylist
})
