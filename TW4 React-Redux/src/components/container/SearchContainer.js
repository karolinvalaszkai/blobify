import SearchPresentational from '../presentational/SearchPresentational'
import { connect } from 'react-redux'
import { searchDish, setCurrentDish } from '../../actions'
import { getDishDetails } from '../../DinnerModel'

var timerId = 0;  // Timer for search-as-you-type

const mapStateToProps = (state, ownProps) => {
  return {
      currentDish: state.currentDish,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  whenDone: [() => ownProps.history.push("/summary"), "Summary"],
  onSearchInput: (dishType, freeText) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => dispatch(searchDish(dishType, freeText)), 500);
  },
  onSearchClick: [(dishType, freeText) =>
    dispatch(searchDish(dishType, freeText)), "Search"],
  onResultsClick: (clickedNode) => {
        var clickOnDish = clickedNode.parentNode.classList.contains("dish");
        if (clickOnDish) {
          const dish_id = clickedNode.parentNode.id;
          getDishDetails(dish_id).then(dish => {
            dispatch(setCurrentDish(dish));
            ownProps.history.push("/details");
          })
        }
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchPresentational);
