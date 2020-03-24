import SearchPresentational from '../presentational/SearchPresentational'
import { connect } from 'react-redux'
import { searchDish, setCurrentDish } from '../../actions'
import { searchPlaylist } from '../../PlaylistModel'

useEffect(() => {
  setInterval(() => {
    searchPlaylist('37i9dQZEVXbMDoHDwVN2tF')
      //.then(res => setState({songs: res}))
  }, 0);
});

var timerId = 0;  // Timer for search-as-you-type

const mapStateToProps = (state, ownProps) => {
  return {
      currentDish: state.currentDish,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  whenDone: [() => ownProps.history.push("/playlist"), "Playlist"],
  /*
  onSearchInput: (dishType, freeText) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => dispatch(searchDish(dishType, freeText)), 500);
  },
  onSearchClick: [(dishType, freeText) =>
    dispatch(searchDish(dishType, freeText)), "Search"],
    */
  onResultsClick: (clickedNode) => {
        var clickOnSong = clickedNode.parentNode.classList.contains("song");
        if (clickOnSong) {
          const song_id = clickedNode.parentNode.id;
          getSongDetails(song_id).then(song => {
            dispatch(setCurrentSong(song));
            //ownProps.history.push("/details");
          })
        }
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchPresentational);