import { connect } from 'react-redux'
import PlaylistPresentational from '../presentational/PlaylistPresentational'

import {getPlaylistSummary} from '../../PlaylistModel.js'
//import { getMenuPrice, computeShoppingList } from '../../PlaylistModel.js'

const mapStateToProps = (state, ownProps) => {
  return {
      //numberOfGuests: state.numberOfGuests,
      //ingredients: computeShoppingList(state.dishes),

      playlistSummary: getPlaylistSummary(state.songs)
      //price: getMenuPrice(state.dishes)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  whenDone: [() => ownProps.history.push("/trending"), "Back to the trending songs"],
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresentational);
