const audioMuted = (state = { audioMuted:false }, action) => {
  switch (action.type) {
    case 'MUTE_AUDIO':
      console.log(state.audioMuted === undefined);
      //if (state.audioMuted === undefined) state.audioMuted = false;
      state.audioMuted = !action.bool;
      return state;
    default:
      return state;
  }
}

export default audioMuted