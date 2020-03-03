import { connect } from 'react-redux'
import SidebarPresentational from '../presentational/SidebarPresentational'
import { getMenuPrice } from '../../DinnerModel.js'
import { setNoGuests, removeDish } from '../../actions'

const mapStateToProps = state => {
  return { numberOfGuests: state.numberOfGuests,
            dishes: state.dishes };
};

const mapDispatchToProps = dispatch => ({
  setNoGuests: num => dispatch(setNoGuests(num)),
  onDelete: dish => dispatch(removeDish(dish)),
  getMenuPrice: dishes => getMenuPrice(dishes)
})


export default connect(mapStateToProps, mapDispatchToProps)(SidebarPresentational);
