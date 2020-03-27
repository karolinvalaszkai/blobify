import SearchPresentational from '../presentational/SearchPresentational'
import { connect } from 'react-redux'
import { addSong, setCurrentPlaylist, loadPlaylist } from '../../actions'

const mapStateToProps = (state) => {
  return { songs: state.currentPlaylist }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  whenDone: [() => ownProps.history.push("/myplaylist"), "Go to My Playlist"],
  onResultsClick: (clickedNode) => {
        var clickOnSong = clickedNode.parentNode.classList.contains("song");
        if (clickOnSong) {
          const song_id = clickedNode.parentNode.id;
          getSongDetails(song_id).then(song => {
            //make options appear: add to playlist, make options disappear, some info maybe
          })
        }
    },
  onAdd: [(song) => dispatch(addSong(song)), "Add to the playlist"],
  onLoadPlaylist: (idPlaylist) => {
    dispatch(loadPlaylist(idPlaylist)).then(res => dispatch(setCurrentPlaylist(res)));
    //searchPlaylist(idPlaylist).then(res => dispatch(setCurrentPlaylist(res)))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchPresentational);