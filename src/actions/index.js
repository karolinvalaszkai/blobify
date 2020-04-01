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

export function muteAudio (boolean){
  let audioElements = document.getElementsByTagName("audio");
  Object.keys(audioElements).map((i) => 
  audioElements[i].muted = boolean
  )
  
}