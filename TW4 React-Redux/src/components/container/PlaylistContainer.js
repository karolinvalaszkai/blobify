import { connect } from 'react-redux'
import PlaylistPresentational from '../presentational/PlaylistPresentational'
import { getMenuPrice, computeShoppingList } from '../../PlaylistModel.js' // TODO: Should not use model

const mapStateToProps = (state, ownProps) => {
  return {
      numberOfGuests: state.numberOfGuests,
      ingredients: computeShoppingList(state.dishes),
      price: getMenuPrice(state.dishes)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  whenDone: [() => ownProps.history.push("/search"), "Back to search"],
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresentational);
