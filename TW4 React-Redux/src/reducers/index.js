import { combineReducers } from 'redux'
import numberOfGuests from './numberOfGuests'
import dishes from './dishes'
import currentDish from './currentDish'

export default combineReducers({
  numberOfGuests,
  dishes,
  currentDish
})
