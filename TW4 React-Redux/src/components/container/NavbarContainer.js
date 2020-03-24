import { connect } from 'react-redux'
import NavbarPresentational from '../presentational/NavbarPresentational'

import { getPlaylistSummary } from '../../PlaylistModel.js'
//import { getMenuPrice } from '../../PlaylistModel.js'

import { removeSong } from '../../actions'
//import { setNoGuests, removeDish } from '../../actions'

const mapStateToProps = state => {
  return { 
    //numberOfGuests: state.numberOfGuests,
    songs: state.songs //dishes: state.dishes 
  };
};

const mapDispatchToProps = dispatch => ({
  //setNoGuests: num => dispatch(setNoGuests(num)),

  onDelete: song => dispatch(removeSong(song)), //dish => dispatch(removeDish(dish)),
  
  getPlaylistSummary: songs => getPlaylistSummary(songs) //getMenuPrice: dishes => getMenuPrice(dishes)
})


export default connect(mapStateToProps, mapDispatchToProps)(NavbarPresentational);
