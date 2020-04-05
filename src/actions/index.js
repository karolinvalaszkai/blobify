export const addSong = song => ({
  type: 'ADD_SONG',
  song
})

export const removeSong = song => ({
  type: 'REMOVE_SONG',
  song
})

export const setCurrentPlaylist = songs => ({
  type: 'SET_PLAYLIST', 
  songs
})

export const loadPlaylist = id => ({
  type: 'LOAD_PLAYLIST',
  id
})

export const muteAudio = bool =>({
  type: 'MUTE_AUDIO',
  bool
})