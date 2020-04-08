const navbarHidden = (state = {}, action) => {
  switch (action.type) {
    case 'HIDE_NAVBAR':
      state.navbarHidden = !action.bool;
      return state;
    default:
      return state;
  }
}

export default navbarHidden