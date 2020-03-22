import { connect } from 'react-redux'
import NavbarPresentational from '../presentational/NavbarPresentational'
import { getMenuPrice } from '../../PlaylistModel.js'
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


export default connect(mapStateToProps, mapDispatchToProps)(NavbarPresentational);
