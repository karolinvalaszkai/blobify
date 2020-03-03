const currentDish = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_DISH':
      return action.dish;
    default:
      return state;
  }
}

export default currentDish
