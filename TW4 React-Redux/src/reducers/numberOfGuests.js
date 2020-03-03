const numberOfGuests = (state = 1, action) => {
  switch (action.type) {
    case 'SET_NO_GUESTS':
      // Check value validity
      if (action.numberOfGuests >= 1) return action.numberOfGuests;
      console.error("The number of guests cannot be smaller than 1.")
      return state;
    default:
      return state;
  }
}

export default numberOfGuests
