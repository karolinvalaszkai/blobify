const audioMuted = (state = {}, action) => {
  switch (action.type) {
    case 'MUTE_AUDIO':
      state.audioMuted = !action.bool;
      return state;
    default:
      return state;
  }
}

export default audioMuted