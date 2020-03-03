import { connect } from 'react-redux'
import DetailsPresentational from '../presentational/DetailsPresentational'
import { computeDishPrice, isInMenu } from '../../DinnerModel.js'
import { addDish } from '../../actions'

const mapStateToProps = state => {

  return { numberOfGuests: state.numberOfGuests,
            dish: state.currentDish,
            price: computeDishPrice(state.currentDish),
            inMenu: isInMenu(state.currentDish, state.dishes)
          };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addControl: [(dish) => dispatch(addDish(dish)), "Add to menu"],
  onCancel: [() => ownProps.history.push("/search"), "Back to search"],
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPresentational);
