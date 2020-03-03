export const setNoGuests = numberOfGuests => ({
  type: 'SET_NO_GUESTS',
  numberOfGuests
})

export const addDish = dish => ({
  type: 'ADD_DISH',
  dish
})

export const removeDish = dish => ({
  type: 'REMOVE_DISH',
  dish
})

export const searchDish = (dishType, freeText) => ({
  type: 'SEARCH_DISH',
  dishType, freeText
})

export const setCurrentDish = dish => ({
  type: 'SET_CURRENT_DISH',
  dish
})
